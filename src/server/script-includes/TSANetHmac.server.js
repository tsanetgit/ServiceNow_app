/**
 * TSANetHmac - HMAC-SHA256 for checking the signature on TSANet's webhook deliveries.
 *
 * Written out in script because the platform's HMAC (GlideCertificateEncryption) is not allowed in
 * scoped applications, and GlideDigest hashes text only, while HMAC's outer hash is over raw bytes.
 * Strings are hashed as their UTF-8 bytes, the way TSANet signs the raw request body.
 */
var TSANetHmac = Class.create();
TSANetHmac.prototype = {
    K: [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ],

    initialize: function() {},

    /** HMAC-SHA256 of message with key, both strings, as 64 lowercase hex characters. */
    hmacSha256Hex: function(key, message) {
        var k = this._utf8(key);
        if (k.length > 64)
            k = this._sha256(k);
        var inner = [], outer = [];
        for (var i = 0; i < 64; i++) {
            inner.push((k[i] || 0) ^ 0x36);
            outer.push((k[i] || 0) ^ 0x5c);
        }
        var innerHash = this._sha256(inner.concat(this._utf8(message)));
        return this._hex(this._sha256(outer.concat(innerHash)));
    },

    /** Whether two strings are equal, in a time that depends only on their length (no timing hints). */
    equals: function(a, b) {
        a = String(a);
        b = String(b);
        if (a.length != b.length)
            return false;
        var diff = 0;
        for (var i = 0; i < a.length; i++)
            diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
        return diff === 0;
    },

    _utf8: function(s) {
        var encoded = unescape(encodeURIComponent(String(s)));
        var bytes = [];
        for (var i = 0; i < encoded.length; i++)
            bytes.push(encoded.charCodeAt(i));
        return bytes;
    },

    _hex: function(bytes) {
        var out = '';
        for (var i = 0; i < bytes.length; i++)
            out += (bytes[i] < 16 ? '0' : '') + bytes[i].toString(16);
        return out;
    },

    /** SHA-256 (FIPS 180-4) of a byte array, as a byte array. */
    _sha256: function(bytes) {
        var K = this.K;
        var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
        var m = bytes.slice();
        var bitLength = bytes.length * 8;
        m.push(0x80);
        while (m.length % 64 != 56)
            m.push(0);
        var high = Math.floor(bitLength / 0x100000000), low = bitLength >>> 0;
        m.push(high >>> 24, (high >>> 16) & 255, (high >>> 8) & 255, high & 255,
            low >>> 24, (low >>> 16) & 255, (low >>> 8) & 255, low & 255);

        var w = [];
        for (var off = 0; off < m.length; off += 64) {
            var t;
            for (t = 0; t < 16; t++)
                w[t] = (m[off + 4 * t] << 24) | (m[off + 4 * t + 1] << 16) | (m[off + 4 * t + 2] << 8) | m[off + 4 * t + 3];
            for (t = 16; t < 64; t++) {
                var x = w[t - 15], y = w[t - 2];
                var s0 = this._rotr(x, 7) ^ this._rotr(x, 18) ^ (x >>> 3);
                var s1 = this._rotr(y, 17) ^ this._rotr(y, 19) ^ (y >>> 10);
                w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0;
            }
            var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
            for (t = 0; t < 64; t++) {
                var t1 = (h + (this._rotr(e, 6) ^ this._rotr(e, 11) ^ this._rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[t] + w[t]) | 0;
                var t2 = ((this._rotr(a, 2) ^ this._rotr(a, 13) ^ this._rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
            H[5] = (H[5] + f) | 0;
            H[6] = (H[6] + g) | 0;
            H[7] = (H[7] + h) | 0;
        }
        var out = [];
        for (var i = 0; i < 8; i++)
            out.push(H[i] >>> 24, (H[i] >>> 16) & 255, (H[i] >>> 8) & 255, H[i] & 255);
        return out;
    },

    _rotr: function(x, n) {
        return (x >>> n) | (x << (32 - n));
    },

    type: 'TSANetHmac'
};
