#!/usr/bin/env python3
"""Check a built ServiceNow SDK app for the most common Store certification failures.

Copy this file into a ServiceNow SDK repo as tools/cert_check.py and run it
after a build, from the repo root:

    python3 tools/cert_check.py dist/app

It reads the update XML in dist/app/update and checks the failures ServiceNow
lists most often: app menus and modules without roles, tables without a
read, write, create and delete ACL, ACLs with no role, condition or script,
UI actions without a condition or roles, client-callable script includes
and UI pages without ACLs, unescaped Jelly, captured list personalizations,
dot-walking to sys_id, and a missing Contact Support module.

It is a pre-check only, and a PASS is not a clean bill: the Jelly check reads
only ${...} expressions in UI page HTML (not $[...] or combined prefixes),
the dot-walk check reads only `script` fields, and a UI page needs a read ACL
named exactly as its endpoint without .do, or as its name when it has no
endpoint (a wildcard ACL fails it). ServiceNow's
Certification Self-Test Tool on the vendor instance stays the authority.
Exit 1 when any check fails, and 2 when the build output is missing or an update file can't be read.
Needs Python 3.9 or later.
"""
import pathlib
import re
import sys
import xml.etree.ElementTree as ET

OPS = ("read", "write", "create", "delete")


def records(root):
    for f in sorted((root / "update").glob("*.xml")):
        try:
            top = ET.parse(f).getroot()
        except (ET.ParseError, OSError) as e:
            raise ET.ParseError(f"{f.name}: {e}") from None
        for rec in top:
            yield top.get("table") or rec.tag, rec, f.name


def text(rec, tag):
    el = rec.find(tag)
    return (el.text or "").strip() if el is not None else ""


def check(root):
    """Return (failures, record counts by table) for the build at root."""
    recs = list(records(root))
    by = {}
    for table, rec, name in recs:
        by.setdefault(table, []).append((rec, name))
    acl_roles = {text(r, "sys_security_acl") for r, _ in by.get("sys_security_acl_role", [])}
    acls = by.get("sys_security_acl", [])
    fails = []

    def acl_ok(r):
        return text(r, "sys_id") in acl_roles or text(r, "condition") or text(r, "script")

    for r, n in by.get("sys_app_application", []):
        if not text(r, "roles"):
            fails.append(f"app menu without roles: {text(r, 'title')} ({n})")
    for r, n in by.get("sys_app_module", []):
        if not text(r, "roles"):
            fails.append(f"module without roles: {text(r, 'title')} ({n})")
    for r, n in by.get("sys_db_object", []):
        tname = text(r, "name")
        for op in OPS:
            hits = [a for a, _ in acls if text(a, "type") == "record" and text(a, "name") == tname and text(a, "operation") == op]
            if not hits:
                fails.append(f"table {tname}: no {op} ACL")
            elif not any(acl_ok(a) for a in hits):
                fails.append(f"table {tname}: {op} ACL has no role, condition or script")
    for r, n in by.get("sys_ui_action", []):
        if not text(r, "condition"):
            fails.append(f"UI action without condition: {text(r, 'name')} ({n})")
        if not text(r, "roles"):
            fails.append(f"UI action without roles: {text(r, 'name')} ({n})")
    for r, n in by.get("sys_script_include", []):
        if text(r, "client_callable") == "true":
            nm = text(r, "api_name") or text(r, "name")
            if not any(text(a, "type") == "client_callable_script_include" and text(a, "operation") == "execute" and text(a, "name") == nm for a, _ in acls):
                fails.append(f"client-callable script include without execute ACL: {nm}")
    for r, n in by.get("sys_ui_page", []):
        nm = text(r, "endpoint").removesuffix(".do") or text(r, "name")
        if not nm:
            fails.append(f"UI page without a name ({n})")
        elif not any(text(a, "type") == "ui_page" and text(a, "operation") == "read" and acl_ok(a) and text(a, "name") == nm for a, _ in acls):
            fails.append(f"UI page without a read ACL with a role, condition or script: {nm}")
        if re.search(r"\$\{(?!(JS|HTML|AMP|NS|JS,NS|HTML,NS):)", text(r, "html")):
            fails.append(f"UI page with unescaped Jelly expression: {nm or n}")
    if by.get("sys_ui_list"):
        fails.append(f"{len(by['sys_ui_list'])} sys_ui_list personalization record(s) captured in the app")
    for table, rec, n in recs:
        if re.search(r"\.\w+\.sys_id\b", text(rec, "script")):
            fails.append(f"dot-walk to .sys_id in script ({n})")
    if not any(text(r, "title").lower().startswith("contact support") for r, _ in by.get("sys_app_module", [])):
        fails.append("no Contact Support module")
    return fails, {t: len(v) for t, v in sorted(by.items())}


def main(argv):
    root = pathlib.Path(argv[1] if len(argv) > 1 else "dist/app")
    if not (root / "update").is_dir():
        print(f"cert-check: no {root / 'update'}; run the build first")
        return 2
    try:
        fails, counts = check(root)
    except ET.ParseError as e:
        print(f"cert-check: can't read the build output, {e}; run the build again")
        return 2
    print("records:", ", ".join(f"{t}={c}" for t, c in counts.items()))
    for f in fails:
        print("FAIL", f)
    print("cert-check:", "PASS" if not fails else f"{len(fails)} failure(s)")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
