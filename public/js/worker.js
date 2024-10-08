! function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function (e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 8)
}([function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = 1330926671,
        i = 1954115633,
        o = 1953658213,
        s = 65536;

    function a(t) {
        return t === n || t === i || t === o || t === s
    }

    function f(t) {
        if (t === n) return "otf";
        if (t === i || t === o || s) return "ttf";
        throw new Error(`Invalid font version: ${t}`)
    }

    function u(t) {
        return t === e.WOFF_SIGNATURE
    }
    e.isOtfFont = a, e.getOtfFilenameSuffix = f, e.WOFF_SIGNATURE = 2001684038, e.isWoffFont = u;
    const h = 2001684018;

    function c(t) {
        return t === h
    }

    function l(t) {
        if (t.byteLength < 4) return 0;
        return t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]
    }
    e.isWoff2Font = c, e.getFontFormat = function (t) {
        const e = l(t);
        return a(e) ? "otf" : u(e) ? "woff" : c(e) ? "woff2" : "unsupported"
    }, e.isValidFormat = function (t) {
        return "otf" === t || "woff" === t || "woff2" === t
    }, e.getFilenameSuffix = function (t) {
        const e = l(t);
        if (u(e)) return "woff";
        if (c(e)) return "woff2";
        if (a(e)) return f(e);
        throw new Error(`Invalid font version: ${e}`)
    }
}, function (t, e) {
    var r, n, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    } ! function () {
        try {
            r = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            r = o
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            n = s
        }
    }();
    var f, u = [],
        h = !1,
        c = -1;

    function l() {
        h && f && (h = !1, f.length ? u = f.concat(u) : c = -1, u.length && p())
    }

    function p() {
        if (!h) {
            var t = a(l);
            h = !0;
            for (var e = u.length; e;) {
                for (f = u, u = []; ++c < e;) f && f[c].run();
                c = -1, e = u.length
            }
            f = null, h = !1,
                function (t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function g() { }
    i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        u.push(new d(t, e)), 1 !== u.length || h || a(p)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
        return []
    }, i.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = r(3),
        i = r(4),
        o = r(5);
    e.SFNT_HEADER_SIZE = 12, e.SFNT_TABLE_ENTRY_SIZE = 16;
    e.OtfReader = class {
        constructor(t) {
            this.reader = t
        }
        read() {
            const t = this.readOffsetTable(),
                e = this.readTableRecords(t.numTables),
                r = new n.Sfnt(t.sfntVersion);
            return this.readTables(r, e), r
        }
        readOffsetTable() {
            return {
                sfntVersion: this.reader.readULong(),
                numTables: this.reader.readUShort(),
                searchRange: this.reader.readUShort(),
                entrySelector: this.reader.readUShort(),
                rangeShift: this.reader.readUShort()
            }
        }
        readTableRecords(t) {
            const e = [];
            for (let r = 0; r < t; r++) {
                const t = {
                    tag: this.reader.readULong(),
                    checksum: this.reader.readULong(),
                    offset: this.reader.readULong(),
                    length: this.reader.readULong()
                };
                e.push(t)
            }
            return e
        }
        readTables(t, e) {
            for (let n = 0; n < e.length; n++) {
                const i = e[n],
                    s = o.tagToString(i.tag);
                if (i.offset % 4 != 0) throw new Error("Offset must be four-bytes aligned: " + s + " " + i.offset);
                const a = this.reader.uint8ArrayFor(i.offset, i.length),
                    f = o.stringToTag("head");
                if (i.tag !== f) {
                    var r = o.calculateTableChecksum(a);
                    if (i.checksum !== r) throw new Error("Checksum mismatch: " + s + " " + r + " != " + i.checksum)
                }
                t.addTable(i.tag, a, i.checksum)
            }
        }
    };
    e.OtfBuilder = class {
        constructor(t) {
            this.sfnt = t, this.writer = new i.Writer
        }
        writeHeader() {
            const t = this.sfnt.numTables();
            let e = 0;
            for (; 1 << 1 + e <= t;) e += 1;
            const r = 1 << e + 4,
                n = 16 * t - r;
            this.writer.writeULong(this.sfnt.getSfntVersion()), this.writer.writeUShort(t), this.writer.writeUShort(r), this.writer.writeUShort(e), this.writer.writeUShort(n)
        }
        writeTableRecords() {
            const t = this.sfnt.getTags();
            let r = e.SFNT_HEADER_SIZE + e.SFNT_TABLE_ENTRY_SIZE * this.sfnt.numTables();
            for (let e = 0; e < t.length; e++) {
                const n = t[e],
                    i = this.sfnt.getTableByTag(n);
                this.writer.writeULong(n), this.writer.writeULong(i.checksum), this.writer.writeULong(r), this.writer.writeULong(i.length()), r += i.paddedLength()
            }
        }
        writeTables() {
            const t = this.sfnt.getTags();
            for (let e = 0; e < t.length; e++) {
                const r = t[e],
                    n = this.sfnt.getTableByTag(r);
                this.writer.writeBytes(n.data);
                const i = n.paddedLength() - n.length();
                this.writer.pad(i)
            }
        }
        build() {
            return this.writeHeader(), this.writeTableRecords(), this.writeTables(), this.writer.result()
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    class n {
        constructor(t, e) {
            this.data = t, this.checksum = e
        }
        length() {
            return this.data.byteLength
        }
        paddedLength() {
            return this.data.byteLength + 3 & -4
        }
    }
    e.Sfnt = class {
        constructor(t) {
            this.sfntVersion = t, this.tables = new Map, this.tableTags = []
        }
        getSfntVersion() {
            return this.sfntVersion
        }
        numTables() {
            return this.tableTags.length
        }
        addTable(t, e, r) {
            const i = t in this.tables;
            if (this.tables.set(t, new n(e, r)), i) return;
            let o = 0;
            for (; o < this.tableTags.length && t > this.tableTags[o];) o++;
            this.tableTags.splice(o, 0, t)
        }
        getTableByTag(t) {
            return this.tables.get(t)
        }
        getTags() {
            return this.tableTags.slice(0)
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = 131072;
    e.Writer = class {
        constructor(t = n) {
            this.position = 0, this.length = 0, this.array = new Uint8Array(t), this.view = new DataView(this.array.buffer)
        }
        expandBufferIfNeeded(t) {
            for (; this.array.byteLength < t + this.position;) {
                const t = new Uint8Array(2 * this.array.byteLength);
                t.set(this.array), this.array = t, this.view = new DataView(t.buffer)
            }
        }
        advanceLengthIfNeeded() {
            this.length < this.position && (this.length = this.position)
        }
        writeByte(t) {
            this.expandBufferIfNeeded(1), this.view.setUint8(this.position, t), this.position += 1, this.advanceLengthIfNeeded()
        }
        writeBytes(t) {
            this.expandBufferIfNeeded(t.byteLength), this.array.set(t, this.position), this.position += t.byteLength, this.advanceLengthIfNeeded()
        }
        writeUShort(t) {
            this.expandBufferIfNeeded(2), this.view.setUint16(this.position, t, !1), this.position += 2, this.advanceLengthIfNeeded()
        }
        writeShort(t) {
            this.expandBufferIfNeeded(2), this.view.setInt16(this.position, t, !1), this.position += 2, this.advanceLengthIfNeeded()
        }
        writeULong(t) {
            this.expandBufferIfNeeded(4), this.view.setUint32(this.position, t, !1), this.position += 4, this.advanceLengthIfNeeded()
        }
        writeLong(t) {
            this.expandBufferIfNeeded(4), this.view.setInt32(this.position, t, !1), this.position += 4, this.advanceLengthIfNeeded()
        }
        pad(t) {
            this.expandBufferIfNeeded(t);
            for (let e = 0; e < t; e++) this.view.setUint8(this.position++, 0);
            this.advanceLengthIfNeeded()
        }
        seek(t) {
            this.position = t
        }
        getPosition() {
            return this.position
        }
        dataView() {
            return new DataView(this.array.buffer, 0, this.length)
        }
        result() {
            return this.array.subarray(0, this.length)
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.stringToTag = function (t) {
        if (4 !== t.length) throw new Error(`Invalid tag: ${t}`);
        return ((255 & t.charCodeAt(0)) << 24 | (255 & t.charCodeAt(1)) << 16 | (255 & t.charCodeAt(2)) << 8 | 255 & t.charCodeAt(3)) >>> 0
    }, e.tagToString = function (t) {
        return String.fromCharCode(t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t)
    }, e.calculateTableChecksum = function (t) {
        let e, r, n = 0;
        for (r = 0; r < t.byteLength - 4; r += 4) n = (n + (e = (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) >>> 0) & 4294967295) >>> 0;
        e = 0;
        const i = t.byteLength - r;
        for (let n = 0; n < i; n++) e = e << 8 >>> 0 | t[r + n];
        return (n + (e = e << 8 * (4 - i) >>> 0) & 4294967295) >>> 0
    }
}, , , function (t, e, r) {
    "use strict";
    var n = this && this.__awaiter || function (t, e, r, n) {
        return new (r || (r = Promise))((function (i, o) {
            function s(t) {
                try {
                    f(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    f(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function f(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function (t) {
                    t(e)
                }))).then(s, a)
            }
            f((n = n.apply(t, e || [])).next())
        }))
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const i = r(0),
        o = r(9),
        s = r(18);
    let a = null;

    function f(t, e) {
        if (!a) throw new Error("Worker not initialized");
        if ("convert" === e.data.action) {
            const r = e.data.format;
            if (!i.isValidFormat(r)) throw new Error(`Invalid output font format: ${r}`);
            const n = e.data.input;
            if ("unsupported" === i.getFontFormat(n)) throw new Error("Unsupported font");
            const o = {
                output: function (t, e, r) {
                    if ("otf" === r) return t.toOtf(e);
                    if ("woff" === r) return t.toWoff(e);
                    if ("woff2" === r) return t.toWoff2(e);
                    throw new Error("Unsupported output file format")
                }(a, n, r)
            };
            self.postMessage({
                messageId: t,
                response: o
            })
        }
    }
    self.addEventListener("message", t => n(void 0, void 0, void 0, (function* () {
        if ("init" === t.data) {
            const t = yield function () {
                return n(this, void 0, void 0, (function* () {
                    return fetch('/wasm/converter.wasm').then(t => t.arrayBuffer()).then(t => {
                        const e = new Uint8Array(t);
                        return s.createWoff2(e)
                    })
                }))
            }();
            return a = new o.Converter(t), void self.postMessage("initialized")
        }
        const e = t.data.messageId;
        if ("number" == typeof e) try {
            f(e, t)
        } catch (t) {
            console.error(t), self.postMessage({
                messageId: e,
                error: t.message
            })
        } else self.postMessage({
            error: "Received a message without messageId"
        })
    })))
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = r(10),
        i = r(2),
        o = r(11),
        s = r(0);

    function a(t) {
        const e = s.getFontFormat(t);
        return function (t, e) {
            if ("otf" === e) return new i.OtfReader(t);
            if ("woff" === e) return new o.WoffReader(t);
            throw new Error(`Unsupported format: ${e}`)
        }(new n.Reader(t), e).read()
    }
    e.readAsSfnt = a;
    e.Converter = class {
        constructor(t) {
            this.woff2 = t
        }
        toOtf(t) {
            const e = s.getFontFormat(t);
            if ("otf" === e) return t;
            if ("woff2" === e) {
                return this.woff2.uncompress(t)
            }
            if ("woff" === e) {
                const e = a(t);
                return new i.OtfBuilder(e).build()
            }
            throw new Error(`Unsupported format: ${e}`)
        }
        toWoff(t) {
            const e = s.getFontFormat(t);
            if ("woff" === e) return t;
            if ("otf" === e) {
                const e = a(t);
                return new o.WoffBuilder(e).build()
            }
            if ("woff2" === e) {
                const e = a(this.woff2.uncompress(t));
                return new o.WoffBuilder(e).build()
            }
            throw new Error(`Unsupported format: ${e}`)
        }
        toWoff2(t) {
            const e = s.getFontFormat(t);
            if ("woff2" === e) return t;
            if ("otf" === e) return this.woff2.compress(t);
            if ("woff" === e) {
                const e = a(t),
                    r = new i.OtfBuilder(e).build();
                return this.woff2.compress(r)
            }
            throw new Error(`Unsupported format: ${e}`)
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Reader = class {
        constructor(t) {
            this.view = new DataView(t.buffer), this.position = 0
        }
        checkBoundary() {
            if (this.position < 0 || this.position > this.view.byteLength) throw new Error("Out of position: " + this.position)
        }
        length() {
            return this.view.byteLength
        }
        readByte() {
            const t = this.view.getUint8(this.position);
            return this.position += 1, this.checkBoundary(), t
        }
        readShort() {
            const t = this.view.getInt16(this.position, !1);
            return this.position += 2, this.checkBoundary(), t
        }
        readUShort() {
            const t = this.view.getUint16(this.position, !1);
            return this.position += 2, this.checkBoundary(), t
        }
        readLong() {
            const t = this.view.getInt32(this.position, !1);
            return this.position += 4, this.checkBoundary(), t
        }
        readULong() {
            const t = this.view.getUint32(this.position, !1);
            return this.position += 4, this.checkBoundary(), t
        }
        uint8ArrayFor(t, e) {
            if (t + e > this.view.byteLength) throw new Error("Out of buffer: " + t + e);
            return new Uint8Array(this.view.buffer, this.view.byteOffset + t, e)
        }
        seek(t) {
            this.position = t, this.checkBoundary()
        }
        skip(t) {
            this.position += t, this.checkBoundary()
        }
        getPosition() {
            return this.position
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = r(3),
        i = r(4),
        o = r(5),
        s = r(2),
        a = r(0),
        f = r(12);
    e.WOFF_HEADER_SIZE = 44, e.WOFF_TABLE_ENTRY_SIZE = 20;
    const u = o.stringToTag("head");
    e.WoffReader = class {
        constructor(t) {
            this.reader = t
        }
        read() {
            const t = this.readHeader(),
                e = this.readTableEntries(t.numTables),
                r = new n.Sfnt(t.flavor);
            for (let t of e) {
                const e = this.readTable(t);
                r.addTable(t.tag, e, t.origChecksum)
            }
            return r
        }
        readHeader() {
            const t = this.reader.readULong();
            if (t !== a.WOFF_SIGNATURE) throw new Error("Invalid WOFF signature: " + t);
            const e = this.reader.readULong();
            if (!a.isOtfFont(e)) throw new Error("Unknown flavor: " + e);
            const r = this.reader.readULong();
            if (this.reader.length() !== r) throw new Error("Invalid length in header: " + r);
            const n = this.reader.readUShort();
            this.reader.skip(2);
            const i = this.reader.readULong();
            return this.reader.skip(24), {
                signature: t,
                flavor: e,
                length: r,
                numTables: n,
                totalSfntSize: i
            }
        }
        readTableEntries(t) {
            const e = [];
            for (let r = 0; r < t; r++) {
                const t = this.reader.readULong(),
                    r = this.reader.readULong(),
                    n = this.reader.readULong(),
                    i = this.reader.readULong(),
                    o = this.reader.readULong();
                e.push({
                    tag: t,
                    offset: r,
                    compLength: n,
                    origLength: i,
                    origChecksum: o
                })
            }
            return e
        }
        readTableData(t) {
            const e = this.reader.uint8ArrayFor(t.offset, t.compLength);
            if (t.compLength === t.origLength) return e;
            const r = (n = e, f.inflateSync(n));
            var n;
            if (r.byteLength !== t.origLength) throw new Error("uncompressed size mismatch: " + e.byteLength + " != " + t.origLength);
            return r
        }
        readTable(t) {
            const e = this.readTableData(t);
            if (t.tag !== u) {
                const r = o.calculateTableChecksum(e);
                if (r !== t.origChecksum) throw new Error(`checksum mismatch: ${r} != ${t.origChecksum}`)
            }
            return e
        }
    };
    e.WoffBuilder = class {
        constructor(t) {
            this.sfnt = t, this.writer = new i.Writer
        }
        writeHeader(t, e, r) {
            this.writer.writeULong(a.WOFF_SIGNATURE), this.writer.writeULong(this.sfnt.getSfntVersion()), this.writer.writeULong(e), this.writer.writeUShort(t), this.writer.writeUShort(0), this.writer.writeULong(r), this.writer.writeULong(0), this.writer.writeULong(0), this.writer.writeULong(0), this.writer.writeULong(0), this.writer.writeULong(0), this.writer.writeULong(0)
        }
        writeTablesAndBuildEntries() {
            let t = 0;
            const e = [],
                r = this.sfnt.getTags();
            for (var n = 0; n < r.length; n++) {
                const o = r[n],
                    s = this.writer.getPosition(),
                    a = this.sfnt.getTableByTag(o),
                    f = this.maybeCompressTable(a.data);
                var i = {
                    tag: o,
                    offset: s,
                    compLength: f.byteLength < a.length() ? f.byteLength : a.length(),
                    origTableLength: a.length(),
                    origChecksum: a.checksum
                };
                e.push(i), t += a.paddedLength(), this.writeTable(f)
            }
            return {
                totalSize: t,
                entries: e
            }
        }
        maybeCompressTable(t) {
            const e = (r = t, f.deflateSync(r));
            var r;
            return e.byteLength < t.byteLength ? e : t
        }
        writeTable(t) {
            this.writer.writeBytes(t);
            const e = 4 - (3 & t.byteLength);
            e > 0 && this.writer.pad(e)
        }
        build() {
            const t = this.sfnt.numTables(),
                r = s.SFNT_HEADER_SIZE + s.SFNT_TABLE_ENTRY_SIZE * t,
                n = e.WOFF_HEADER_SIZE + e.WOFF_TABLE_ENTRY_SIZE * t;
            this.writer.seek(n);
            const i = this.writeTablesAndBuildEntries();
            return this.writer.seek(0), this.writeHeader(t, i.totalSize, r), this.writeTablesAndBuildEntries(), this.writer.result()
        }
    }
}, function (t, e, r) {
    (function (t, r) {
        /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
        (function () {
            "use strict";

            function n(t) {
                throw t
            }
            var i = void 0,
                o = !0,
                s = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;

            function a(t, e) {
                this.index = "number" == typeof e ? e : 0, this.m = 0, this.buffer = t instanceof (s ? Uint8Array : Array) ? t : new (s ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index && n(Error("invalid index")), this.buffer.length <= this.index && this.f()
            }
            a.prototype.f = function () {
                var t, e = this.buffer,
                    r = e.length,
                    n = new (s ? Uint8Array : Array)(r << 1);
                if (s) n.set(e);
                else
                    for (t = 0; t < r; ++t) n[t] = e[t];
                return this.buffer = n
            }, a.prototype.d = function (t, e, r) {
                var n, i = this.buffer,
                    o = this.index,
                    s = this.m,
                    a = i[o];
                if (r && 1 < e && (t = 8 < e ? (p[255 & t] << 24 | p[t >>> 8 & 255] << 16 | p[t >>> 16 & 255] << 8 | p[t >>> 24 & 255]) >> 32 - e : p[t] >> 8 - e), 8 > e + s) a = a << e | t, s += e;
                else
                    for (n = 0; n < e; ++n) a = a << 1 | t >> e - n - 1 & 1, 8 == ++s && (s = 0, i[o++] = p[a], a = 0, o === i.length && (i = this.f()));
                i[o] = a, this.buffer = i, this.m = s, this.index = o
            }, a.prototype.finish = function () {
                var t, e = this.buffer,
                    r = this.index;
                return 0 < this.m && (e[r] <<= 8 - this.m, e[r] = p[e[r]], r++), s ? t = e.subarray(0, r) : (e.length = r, t = e), t
            };
            var f, u = new (s ? Uint8Array : Array)(256);
            for (f = 0; 256 > f; ++f) {
                for (var h = l = f, c = 7, l = l >>> 1; l; l >>>= 1) h <<= 1, h |= 1 & l, --c;
                u[f] = (h << c & 255) >>> 0
            }
            var p = u;

            function d(t, e, r) {
                var n, i = "number" == typeof e ? e : e = 0,
                    o = "number" == typeof r ? r : t.length;
                for (n = -1, i = 7 & o; i--; ++e) n = n >>> 8 ^ y[255 & (n ^ t[e])];
                for (i = o >> 3; i--; e += 8) n = (n = (n = (n = (n = (n = (n = (n = n >>> 8 ^ y[255 & (n ^ t[e])]) >>> 8 ^ y[255 & (n ^ t[e + 1])]) >>> 8 ^ y[255 & (n ^ t[e + 2])]) >>> 8 ^ y[255 & (n ^ t[e + 3])]) >>> 8 ^ y[255 & (n ^ t[e + 4])]) >>> 8 ^ y[255 & (n ^ t[e + 5])]) >>> 8 ^ y[255 & (n ^ t[e + 6])]) >>> 8 ^ y[255 & (n ^ t[e + 7])];
                return (4294967295 ^ n) >>> 0
            }
            var g = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
                y = s ? new Uint32Array(g) : g;

            function w() { }

            function b(t) {
                this.buffer = new (s ? Uint16Array : Array)(2 * t), this.length = 0
            }

            function v(t) {
                var e, r, n, i, o, a, f, u, h, c, l = t.length,
                    p = 0,
                    d = Number.POSITIVE_INFINITY;
                for (u = 0; u < l; ++u) t[u] > p && (p = t[u]), t[u] < d && (d = t[u]);
                for (e = 1 << p, r = new (s ? Uint32Array : Array)(e), n = 1, i = 0, o = 2; n <= p;) {
                    for (u = 0; u < l; ++u)
                        if (t[u] === n) {
                            for (a = 0, f = i, h = 0; h < n; ++h) a = a << 1 | 1 & f, f >>= 1;
                            for (c = n << 16 | u, h = a; h < e; h += o) r[h] = c;
                            ++i
                        } ++n, i <<= 1, o <<= 1
                }
                return [r, p, d]
            }

            function m(t, e) {
                this.k = E, this.F = 0, this.input = s && t instanceof Array ? new Uint8Array(t) : t, this.b = 0, e && (e.lazy && (this.F = e.lazy), "number" == typeof e.compressionType && (this.k = e.compressionType), e.outputBuffer && (this.a = s && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.b = e.outputIndex)), this.a || (this.a = new (s ? Uint8Array : Array)(32768))
            }
            b.prototype.getParent = function (t) {
                return 2 * ((t - 2) / 4 | 0)
            }, b.prototype.push = function (t, e) {
                var r, n, i, o = this.buffer;
                for (r = this.length, o[this.length++] = e, o[this.length++] = t; 0 < r && (n = this.getParent(r), o[r] > o[n]);) i = o[r], o[r] = o[n], o[n] = i, i = o[r + 1], o[r + 1] = o[n + 1], o[n + 1] = i, r = n;
                return this.length
            }, b.prototype.pop = function () {
                var t, e, r, n, i, o = this.buffer;
                for (e = o[0], t = o[1], this.length -= 2, o[0] = o[this.length], o[1] = o[this.length + 1], i = 0; !((n = 2 * i + 2) >= this.length) && (n + 2 < this.length && o[n + 2] > o[n] && (n += 2), o[n] > o[i]);) r = o[i], o[i] = o[n], o[n] = r, r = o[i + 1], o[i + 1] = o[n + 1], o[n + 1] = r, i = n;
                return {
                    index: t,
                    value: e,
                    length: this.length
                }
            };
            var A, E = 2,
                T = {
                    NONE: 0,
                    L: 1,
                    t: E,
                    X: 3
                },
                U = [];
            for (A = 0; 288 > A; A++) switch (o) {
                case 143 >= A:
                    U.push([A + 48, 8]);
                    break;
                case 255 >= A:
                    U.push([A - 144 + 400, 9]);
                    break;
                case 279 >= A:
                    U.push([A - 256 + 0, 7]);
                    break;
                case 287 >= A:
                    U.push([A - 280 + 192, 8]);
                    break;
                default:
                    n("invalid literal: " + A)
            }

            function _(t, e) {
                this.length = t, this.N = e
            }
            m.prototype.h = function () {
                var t, e, r, f, u = this.input;
                switch (this.k) {
                    case 0:
                        for (r = 0, f = u.length; r < f;) {
                            var h, c, l, p = e = s ? u.subarray(r, r + 65535) : u.slice(r, r + 65535),
                                d = (r += e.length) === f,
                                g = i,
                                y = i,
                                w = this.a,
                                b = this.b;
                            if (s) {
                                for (w = new Uint8Array(this.a.buffer); w.length <= b + p.length + 5;) w = new Uint8Array(w.length << 1);
                                w.set(this.a)
                            }
                            if (h = d ? 1 : 0, w[b++] = 0 | h, l = 65536 + ~(c = p.length) & 65535, w[b++] = 255 & c, w[b++] = c >>> 8 & 255, w[b++] = 255 & l, w[b++] = l >>> 8 & 255, s) w.set(p, b), b += p.length, w = w.subarray(0, b);
                            else {
                                for (g = 0, y = p.length; g < y; ++g) w[b++] = p[g];
                                w.length = b
                            }
                            this.b = b, this.a = w
                        }
                        break;
                    case 1:
                        var v = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b);
                        v.d(1, 1, o), v.d(1, 2, o);
                        var m, A, T, _ = R(this, u);
                        for (m = 0, A = _.length; m < A; m++)
                            if (T = _[m], a.prototype.d.apply(v, U[T]), 256 < T) v.d(_[++m], _[++m], o), v.d(_[++m], 5), v.d(_[++m], _[++m], o);
                            else if (256 === T) break;
                        this.a = v.finish(), this.b = this.a.length;
                        break;
                    case E:
                        var S, k, L, P, x, O, C, F, M, N, Y, D, j, z, W, H = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b),
                            V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                            Z = Array(19);
                        for (S = E, H.d(1, 1, o), H.d(S, 2, o), k = R(this, u), C = I(O = B(this.U, 15)), M = I(F = B(this.T, 7)), L = 286; 257 < L && 0 === O[L - 1]; L--);
                        for (P = 30; 1 < P && 0 === F[P - 1]; P--);
                        var q, $, G, X, J, K, Q = L,
                            tt = P,
                            et = new (s ? Uint32Array : Array)(Q + tt),
                            rt = new (s ? Uint32Array : Array)(316),
                            nt = new (s ? Uint8Array : Array)(19);
                        for (q = $ = 0; q < Q; q++) et[$++] = O[q];
                        for (q = 0; q < tt; q++) et[$++] = F[q];
                        if (!s)
                            for (q = 0, X = nt.length; q < X; ++q) nt[q] = 0;
                        for (q = J = 0, X = et.length; q < X; q += $) {
                            for ($ = 1; q + $ < X && et[q + $] === et[q]; ++$);
                            if (G = $, 0 === et[q])
                                if (3 > G)
                                    for (; 0 < G--;) rt[J++] = 0, nt[0]++;
                                else
                                    for (; 0 < G;)(K = 138 > G ? G : 138) > G - 3 && K < G && (K = G - 3), 10 >= K ? (rt[J++] = 17, rt[J++] = K - 3, nt[17]++) : (rt[J++] = 18, rt[J++] = K - 11, nt[18]++), G -= K;
                            else if (rt[J++] = et[q], nt[et[q]]++, 3 > --G)
                                for (; 0 < G--;) rt[J++] = et[q], nt[et[q]]++;
                            else
                                for (; 0 < G;)(K = 6 > G ? G : 6) > G - 3 && K < G && (K = G - 3), rt[J++] = 16, rt[J++] = K - 3, nt[16]++, G -= K
                        }
                        for (t = s ? rt.subarray(0, J) : rt.slice(0, J), N = B(nt, 7), z = 0; 19 > z; z++) Z[z] = N[V[z]];
                        for (x = 19; 4 < x && 0 === Z[x - 1]; x--);
                        for (Y = I(N), H.d(L - 257, 5, o), H.d(P - 1, 5, o), H.d(x - 4, 4, o), z = 0; z < x; z++) H.d(Z[z], 3, o);
                        for (z = 0, W = t.length; z < W; z++)
                            if (D = t[z], H.d(Y[D], N[D], o), 16 <= D) {
                                switch (z++, D) {
                                    case 16:
                                        j = 2;
                                        break;
                                    case 17:
                                        j = 3;
                                        break;
                                    case 18:
                                        j = 7;
                                        break;
                                    default:
                                        n("invalid code: " + D)
                                }
                                H.d(t[z], j, o)
                            } var it, ot, st, at, ft, ut, ht, ct, lt = [C, O],
                                pt = [M, F];
                        for (ft = lt[0], ut = lt[1], ht = pt[0], ct = pt[1], it = 0, ot = k.length; it < ot; ++it)
                            if (st = k[it], H.d(ft[st], ut[st], o), 256 < st) H.d(k[++it], k[++it], o), at = k[++it], H.d(ht[at], ct[at], o), H.d(k[++it], k[++it], o);
                            else if (256 === st) break;
                        this.a = H.finish(), this.b = this.a.length;
                        break;
                    default:
                        n("invalid compression type")
                }
                return this.a
            };
            var S = function () {
                function t(t) {
                    switch (o) {
                        case 3 === t:
                            return [257, t - 3, 0];
                        case 4 === t:
                            return [258, t - 4, 0];
                        case 5 === t:
                            return [259, t - 5, 0];
                        case 6 === t:
                            return [260, t - 6, 0];
                        case 7 === t:
                            return [261, t - 7, 0];
                        case 8 === t:
                            return [262, t - 8, 0];
                        case 9 === t:
                            return [263, t - 9, 0];
                        case 10 === t:
                            return [264, t - 10, 0];
                        case 12 >= t:
                            return [265, t - 11, 1];
                        case 14 >= t:
                            return [266, t - 13, 1];
                        case 16 >= t:
                            return [267, t - 15, 1];
                        case 18 >= t:
                            return [268, t - 17, 1];
                        case 22 >= t:
                            return [269, t - 19, 2];
                        case 26 >= t:
                            return [270, t - 23, 2];
                        case 30 >= t:
                            return [271, t - 27, 2];
                        case 34 >= t:
                            return [272, t - 31, 2];
                        case 42 >= t:
                            return [273, t - 35, 3];
                        case 50 >= t:
                            return [274, t - 43, 3];
                        case 58 >= t:
                            return [275, t - 51, 3];
                        case 66 >= t:
                            return [276, t - 59, 3];
                        case 82 >= t:
                            return [277, t - 67, 4];
                        case 98 >= t:
                            return [278, t - 83, 4];
                        case 114 >= t:
                            return [279, t - 99, 4];
                        case 130 >= t:
                            return [280, t - 115, 4];
                        case 162 >= t:
                            return [281, t - 131, 5];
                        case 194 >= t:
                            return [282, t - 163, 5];
                        case 226 >= t:
                            return [283, t - 195, 5];
                        case 257 >= t:
                            return [284, t - 227, 5];
                        case 258 === t:
                            return [285, t - 258, 0];
                        default:
                            n("invalid length: " + t)
                    }
                }
                var e, r, i = [];
                for (e = 3; 258 >= e; e++) r = t(e), i[e] = r[2] << 24 | r[1] << 16 | r[0];
                return i
            }(),
                k = s ? new Uint32Array(S) : S;

            function R(t, e) {
                function r(t, e) {
                    var r, i, s, a, f = t.N,
                        u = [],
                        h = 0;
                    switch (r = k[t.length], u[h++] = 65535 & r, u[h++] = r >> 16 & 255, u[h++] = r >> 24, o) {
                        case 1 === f:
                            i = [0, f - 1, 0];
                            break;
                        case 2 === f:
                            i = [1, f - 2, 0];
                            break;
                        case 3 === f:
                            i = [2, f - 3, 0];
                            break;
                        case 4 === f:
                            i = [3, f - 4, 0];
                            break;
                        case 6 >= f:
                            i = [4, f - 5, 1];
                            break;
                        case 8 >= f:
                            i = [5, f - 7, 1];
                            break;
                        case 12 >= f:
                            i = [6, f - 9, 2];
                            break;
                        case 16 >= f:
                            i = [7, f - 13, 2];
                            break;
                        case 24 >= f:
                            i = [8, f - 17, 3];
                            break;
                        case 32 >= f:
                            i = [9, f - 25, 3];
                            break;
                        case 48 >= f:
                            i = [10, f - 33, 4];
                            break;
                        case 64 >= f:
                            i = [11, f - 49, 4];
                            break;
                        case 96 >= f:
                            i = [12, f - 65, 5];
                            break;
                        case 128 >= f:
                            i = [13, f - 97, 5];
                            break;
                        case 192 >= f:
                            i = [14, f - 129, 6];
                            break;
                        case 256 >= f:
                            i = [15, f - 193, 6];
                            break;
                        case 384 >= f:
                            i = [16, f - 257, 7];
                            break;
                        case 512 >= f:
                            i = [17, f - 385, 7];
                            break;
                        case 768 >= f:
                            i = [18, f - 513, 8];
                            break;
                        case 1024 >= f:
                            i = [19, f - 769, 8];
                            break;
                        case 1536 >= f:
                            i = [20, f - 1025, 9];
                            break;
                        case 2048 >= f:
                            i = [21, f - 1537, 9];
                            break;
                        case 3072 >= f:
                            i = [22, f - 2049, 10];
                            break;
                        case 4096 >= f:
                            i = [23, f - 3073, 10];
                            break;
                        case 6144 >= f:
                            i = [24, f - 4097, 11];
                            break;
                        case 8192 >= f:
                            i = [25, f - 6145, 11];
                            break;
                        case 12288 >= f:
                            i = [26, f - 8193, 12];
                            break;
                        case 16384 >= f:
                            i = [27, f - 12289, 12];
                            break;
                        case 24576 >= f:
                            i = [28, f - 16385, 13];
                            break;
                        case 32768 >= f:
                            i = [29, f - 24577, 13];
                            break;
                        default:
                            n("invalid distance")
                    }
                    for (r = i, u[h++] = r[0], u[h++] = r[1], u[h++] = r[2], s = 0, a = u.length; s < a; ++s) w[b++] = u[s];
                    m[u[0]]++, A[u[3]]++, v = t.length + e - 1, d = null
                }
                var a, f, u, h, c, l, p, d, g, y = {},
                    w = s ? new Uint16Array(2 * e.length) : [],
                    b = 0,
                    v = 0,
                    m = new (s ? Uint32Array : Array)(286),
                    A = new (s ? Uint32Array : Array)(30),
                    E = t.F;
                if (!s) {
                    for (u = 0; 285 >= u;) m[u++] = 0;
                    for (u = 0; 29 >= u;) A[u++] = 0
                }
                for (m[256] = 1, a = 0, f = e.length; a < f; ++a) {
                    for (u = c = 0, h = 3; u < h && a + u !== f; ++u) c = c << 8 | e[a + u];
                    if (y[c] === i && (y[c] = []), l = y[c], !(0 < v--)) {
                        for (; 0 < l.length && 32768 < a - l[0];) l.shift();
                        if (a + 3 >= f) {
                            for (d && r(d, -1), u = 0, h = f - a; u < h; ++u) g = e[a + u], w[b++] = g, ++m[g];
                            break
                        }
                        0 < l.length ? (p = L(e, a, l), d ? d.length < p.length ? (g = e[a - 1], w[b++] = g, ++m[g], r(p, 0)) : r(d, -1) : p.length < E ? d = p : r(p, 0)) : d ? r(d, -1) : (g = e[a], w[b++] = g, ++m[g])
                    }
                    l.push(a)
                }
                return w[b++] = 256, m[256]++, t.U = m, t.T = A, s ? w.subarray(0, b) : w
            }

            function L(t, e, r) {
                var n, i, o, s, a, f, u = 0,
                    h = t.length;
                s = 0, f = r.length;
                t: for (; s < f; s++) {
                    if (n = r[f - s - 1], o = 3, 3 < u) {
                        for (a = u; 3 < a; a--)
                            if (t[n + a - 1] !== t[e + a - 1]) continue t;
                        o = u
                    }
                    for (; 258 > o && e + o < h && t[n + o] === t[e + o];) ++o;
                    if (o > u && (i = n, u = o), 258 === o) break
                }
                return new _(u, e - i)
            }

            function B(t, e) {
                var r, n, i, o, a, f = t.length,
                    u = new b(572),
                    h = new (s ? Uint8Array : Array)(f);
                if (!s)
                    for (o = 0; o < f; o++) h[o] = 0;
                for (o = 0; o < f; ++o) 0 < t[o] && u.push(o, t[o]);
                if (r = Array(u.length / 2), n = new (s ? Uint32Array : Array)(u.length / 2), 1 === r.length) return h[u.pop().index] = 1, h;
                for (o = 0, a = u.length / 2; o < a; ++o) r[o] = u.pop(), n[o] = r[o].value;
                for (i = function (t, e, r) {
                    function n(t) {
                        var r = d[t][g[t]];
                        r === e ? (n(t + 1), n(t + 1)) : --l[r], ++g[t]
                    }
                    var i, o, a, f, u, h = new (s ? Uint16Array : Array)(r),
                        c = new (s ? Uint8Array : Array)(r),
                        l = new (s ? Uint8Array : Array)(e),
                        p = Array(r),
                        d = Array(r),
                        g = Array(r),
                        y = (1 << r) - e,
                        w = 1 << r - 1;
                    for (h[r - 1] = e, o = 0; o < r; ++o) y < w ? c[o] = 0 : (c[o] = 1, y -= w), y <<= 1, h[r - 2 - o] = (h[r - 1 - o] / 2 | 0) + e;
                    for (h[0] = c[0], p[0] = Array(h[0]), d[0] = Array(h[0]), o = 1; o < r; ++o) h[o] > 2 * h[o - 1] + c[o] && (h[o] = 2 * h[o - 1] + c[o]), p[o] = Array(h[o]), d[o] = Array(h[o]);
                    for (i = 0; i < e; ++i) l[i] = r;
                    for (a = 0; a < h[r - 1]; ++a) p[r - 1][a] = t[a], d[r - 1][a] = a;
                    for (i = 0; i < r; ++i) g[i] = 0;
                    for (1 === c[r - 1] && (--l[0], ++g[r - 1]), o = r - 2; 0 <= o; --o) {
                        for (f = i = 0, u = g[o + 1], a = 0; a < h[o]; a++)(f = p[o + 1][u] + p[o + 1][u + 1]) > t[i] ? (p[o][a] = f, d[o][a] = e, u += 2) : (p[o][a] = t[i], d[o][a] = i, ++i);
                        g[o] = 0, 1 === c[o] && n(o)
                    }
                    return l
                }(n, n.length, e), o = 0, a = r.length; o < a; ++o) h[r[o].index] = i[o];
                return h
            }

            function I(t) {
                var e, r, n, i, o = new (s ? Uint16Array : Array)(t.length),
                    a = [],
                    f = [],
                    u = 0;
                for (e = 0, r = t.length; e < r; e++) a[t[e]] = 1 + (0 | a[t[e]]);
                for (e = 1, r = 16; e <= r; e++) f[e] = u, u += 0 | a[e], u <<= 1;
                for (e = 0, r = t.length; e < r; e++)
                    for (u = f[t[e]], f[t[e]] += 1, n = o[e] = 0, i = t[e]; n < i; n++) o[e] = o[e] << 1 | 1 & u, u >>>= 1;
                return o
            }

            function P(t, e) {
                this.input = t, this.b = this.c = 0, this.g = {}, e && (e.flags && (this.g = e.flags), "string" == typeof e.filename && (this.filename = e.filename), "string" == typeof e.comment && (this.w = e.comment), e.deflateOptions && (this.l = e.deflateOptions)), this.l || (this.l = {})
            }
            P.prototype.h = function () {
                var t, e, r, n, o, a, f, u, h = new (s ? Uint8Array : Array)(32768),
                    c = 0,
                    l = this.input,
                    p = this.c,
                    g = this.filename,
                    y = this.w;
                if (h[c++] = 31, h[c++] = 139, h[c++] = 8, t = 0, this.g.fname && (t |= C), this.g.fcomment && (t |= F), this.g.fhcrc && (t |= O), h[c++] = t, e = (Date.now ? Date.now() : +new Date) / 1e3 | 0, h[c++] = 255 & e, h[c++] = e >>> 8 & 255, h[c++] = e >>> 16 & 255, h[c++] = e >>> 24 & 255, h[c++] = 0, h[c++] = x, this.g.fname !== i) {
                    for (f = 0, u = g.length; f < u; ++f) 255 < (a = g.charCodeAt(f)) && (h[c++] = a >>> 8 & 255), h[c++] = 255 & a;
                    h[c++] = 0
                }
                if (this.g.comment) {
                    for (f = 0, u = y.length; f < u; ++f) 255 < (a = y.charCodeAt(f)) && (h[c++] = a >>> 8 & 255), h[c++] = 255 & a;
                    h[c++] = 0
                }
                return this.g.fhcrc && (r = 65535 & d(h, 0, c), h[c++] = 255 & r, h[c++] = r >>> 8 & 255), this.l.outputBuffer = h, this.l.outputIndex = c, h = (o = new m(l, this.l)).h(), c = o.b, s && (c + 8 > h.buffer.byteLength ? (this.a = new Uint8Array(c + 8), this.a.set(new Uint8Array(h.buffer)), h = this.a) : h = new Uint8Array(h.buffer)), n = d(l, i, i), h[c++] = 255 & n, h[c++] = n >>> 8 & 255, h[c++] = n >>> 16 & 255, h[c++] = n >>> 24 & 255, u = l.length, h[c++] = 255 & u, h[c++] = u >>> 8 & 255, h[c++] = u >>> 16 & 255, h[c++] = u >>> 24 & 255, this.c = p, s && c < h.length && (this.a = h = h.subarray(0, c)), h
            };
            var x = 255,
                O = 2,
                C = 8,
                F = 16;

            function M(t, e) {
                switch (this.o = [], this.p = 32768, this.e = this.j = this.c = this.s = 0, this.input = s ? new Uint8Array(t) : t, this.u = !1, this.q = Y, this.K = !1, !e && (e = {}) || (e.index && (this.c = e.index), e.bufferSize && (this.p = e.bufferSize), e.bufferType && (this.q = e.bufferType), e.resize && (this.K = e.resize)), this.q) {
                    case N:
                        this.b = 32768, this.a = new (s ? Uint8Array : Array)(32768 + this.p + 258);
                        break;
                    case Y:
                        this.b = 0, this.a = new (s ? Uint8Array : Array)(this.p), this.f = this.S, this.z = this.O, this.r = this.Q;
                        break;
                    default:
                        n(Error("invalid inflate mode"))
                }
            }
            var N = 0,
                Y = 1;
            M.prototype.i = function () {
                for (; !this.u;) {
                    var t = it(this, 3);
                    switch (1 & t && (this.u = o), t >>>= 1) {
                        case 0:
                            var e = this.input,
                                r = this.c,
                                a = this.a,
                                f = this.b,
                                u = e.length,
                                h = i,
                                c = a.length,
                                l = i;
                            switch (this.e = this.j = 0, r + 1 >= u && n(Error("invalid uncompressed block header: LEN")), h = e[r++] | e[r++] << 8, r + 1 >= u && n(Error("invalid uncompressed block header: NLEN")), h === ~(e[r++] | e[r++] << 8) && n(Error("invalid uncompressed block header: length verify")), r + h > e.length && n(Error("input buffer is broken")), this.q) {
                                case N:
                                    for (; f + h > a.length;) {
                                        if (h -= l = c - f, s) a.set(e.subarray(r, r + l), f), f += l, r += l;
                                        else
                                            for (; l--;) a[f++] = e[r++];
                                        this.b = f, a = this.f(), f = this.b
                                    }
                                    break;
                                case Y:
                                    for (; f + h > a.length;) a = this.f({
                                        B: 2
                                    });
                                    break;
                                default:
                                    n(Error("invalid inflate mode"))
                            }
                            if (s) a.set(e.subarray(r, r + h), f), f += h, r += h;
                            else
                                for (; h--;) a[f++] = e[r++];
                            this.c = r, this.b = f, this.a = a;
                            break;
                        case 1:
                            this.r(et, nt);
                            break;
                        case 2:
                            var p, d, g, y, w = it(this, 5) + 257,
                                b = it(this, 5) + 1,
                                m = it(this, 4) + 4,
                                A = new (s ? Uint8Array : Array)(W.length),
                                E = i,
                                T = i,
                                U = i,
                                _ = i,
                                S = i;
                            for (S = 0; S < m; ++S) A[W[S]] = it(this, 3);
                            if (!s)
                                for (S = m, m = A.length; S < m; ++S) A[W[S]] = 0;
                            for (p = v(A), E = new (s ? Uint8Array : Array)(w + b), S = 0, y = w + b; S < y;) switch (T = ot(this, p), T) {
                                case 16:
                                    for (_ = 3 + it(this, 2); _--;) E[S++] = U;
                                    break;
                                case 17:
                                    for (_ = 3 + it(this, 3); _--;) E[S++] = 0;
                                    U = 0;
                                    break;
                                case 18:
                                    for (_ = 11 + it(this, 7); _--;) E[S++] = 0;
                                    U = 0;
                                    break;
                                default:
                                    U = E[S++] = T
                            }
                            d = v(s ? E.subarray(0, w) : E.slice(0, w)), g = v(s ? E.subarray(w) : E.slice(w)), this.r(d, g);
                            break;
                        default:
                            n(Error("unknown BTYPE: " + t))
                    }
                }
                return this.z()
            };
            var D, j, z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                W = s ? new Uint16Array(z) : z,
                H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
                V = s ? new Uint16Array(H) : H,
                Z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
                q = s ? new Uint8Array(Z) : Z,
                $ = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
                G = s ? new Uint16Array($) : $,
                X = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                J = s ? new Uint8Array(X) : X,
                K = new (s ? Uint8Array : Array)(288);
            for (D = 0, j = K.length; D < j; ++D) K[D] = 143 >= D ? 8 : 255 >= D ? 9 : 279 >= D ? 7 : 8;
            var Q, tt, et = v(K),
                rt = new (s ? Uint8Array : Array)(30);
            for (Q = 0, tt = rt.length; Q < tt; ++Q) rt[Q] = 5;
            var nt = v(rt);

            function it(t, e) {
                for (var r, i = t.j, o = t.e, s = t.input, a = t.c, f = s.length; o < e;) a >= f && n(Error("input buffer is broken")), i |= s[a++] << o, o += 8;
                return r = i & (1 << e) - 1, t.j = i >>> e, t.e = o - e, t.c = a, r
            }

            function ot(t, e) {
                for (var r, i, o = t.j, s = t.e, a = t.input, f = t.c, u = a.length, h = e[0], c = e[1]; s < c && !(f >= u);) o |= a[f++] << s, s += 8;
                return (i = (r = h[o & (1 << c) - 1]) >>> 16) > s && n(Error("invalid code length: " + i)), t.j = o >> i, t.e = s - i, t.c = f, 65535 & r
            }

            function st(t) {
                this.input = t, this.c = 0, this.G = [], this.R = !1
            }

            function at(t) {
                if ("string" == typeof t) {
                    var e, r, n = t.split("");
                    for (e = 0, r = n.length; e < r; e++) n[e] = (255 & n[e].charCodeAt(0)) >>> 0;
                    t = n
                }
                for (var i, o = 1, s = 0, a = t.length, f = 0; 0 < a;) {
                    a -= i = 1024 < a ? 1024 : a;
                    do {
                        s += o += t[f++]
                    } while (--i);
                    o %= 65521, s %= 65521
                }
                return (s << 16 | o) >>> 0
            }

            function ft(t, e) {
                var r, i;
                switch (this.input = t, this.c = 0, !e && (e = {}) || (e.index && (this.c = e.index), e.verify && (this.V = e.verify)), r = t[this.c++], i = t[this.c++], 15 & r) {
                    case ut:
                        this.method = ut;
                        break;
                    default:
                        n(Error("unsupported compression method"))
                }
                0 != ((r << 8) + i) % 31 && n(Error("invalid fcheck flag:" + ((r << 8) + i) % 31)), 32 & i && n(Error("fdict flag is not supported")), this.J = new M(t, {
                    index: this.c,
                    bufferSize: e.bufferSize,
                    bufferType: e.bufferType,
                    resize: e.resize
                })
            }
            M.prototype.r = function (t, e) {
                var r = this.a,
                    n = this.b;
                this.A = t;
                for (var i, o, s, a, f = r.length - 258; 256 !== (i = ot(this, t));)
                    if (256 > i) n >= f && (this.b = n, r = this.f(), n = this.b), r[n++] = i;
                    else
                        for (a = V[o = i - 257], 0 < q[o] && (a += it(this, q[o])), i = ot(this, e), s = G[i], 0 < J[i] && (s += it(this, J[i])), n >= f && (this.b = n, r = this.f(), n = this.b); a--;) r[n] = r[n++ - s];
                for (; 8 <= this.e;) this.e -= 8, this.c--;
                this.b = n
            }, M.prototype.Q = function (t, e) {
                var r = this.a,
                    n = this.b;
                this.A = t;
                for (var i, o, s, a, f = r.length; 256 !== (i = ot(this, t));)
                    if (256 > i) n >= f && (f = (r = this.f()).length), r[n++] = i;
                    else
                        for (a = V[o = i - 257], 0 < q[o] && (a += it(this, q[o])), i = ot(this, e), s = G[i], 0 < J[i] && (s += it(this, J[i])), n + a > f && (f = (r = this.f()).length); a--;) r[n] = r[n++ - s];
                for (; 8 <= this.e;) this.e -= 8, this.c--;
                this.b = n
            }, M.prototype.f = function () {
                var t, e, r = new (s ? Uint8Array : Array)(this.b - 32768),
                    n = this.b - 32768,
                    i = this.a;
                if (s) r.set(i.subarray(32768, r.length));
                else
                    for (t = 0, e = r.length; t < e; ++t) r[t] = i[t + 32768];
                if (this.o.push(r), this.s += r.length, s) i.set(i.subarray(n, n + 32768));
                else
                    for (t = 0; 32768 > t; ++t) i[t] = i[n + t];
                return this.b = 32768, i
            }, M.prototype.S = function (t) {
                var e, r, n, i = this.input.length / this.c + 1 | 0,
                    o = this.input,
                    a = this.a;
                return t && ("number" == typeof t.B && (i = t.B), "number" == typeof t.M && (i += t.M)), 2 > i ? r = (n = (o.length - this.c) / this.A[2] / 2 * 258 | 0) < a.length ? a.length + n : a.length << 1 : r = a.length * i, s ? (e = new Uint8Array(r)).set(a) : e = a, this.a = e
            }, M.prototype.z = function () {
                var t, e, r, n, i, o = 0,
                    a = this.a,
                    f = this.o,
                    u = new (s ? Uint8Array : Array)(this.s + (this.b - 32768));
                if (0 === f.length) return s ? this.a.subarray(32768, this.b) : this.a.slice(32768, this.b);
                for (e = 0, r = f.length; e < r; ++e)
                    for (n = 0, i = (t = f[e]).length; n < i; ++n) u[o++] = t[n];
                for (e = 32768, r = this.b; e < r; ++e) u[o++] = a[e];
                return this.o = [], this.buffer = u
            }, M.prototype.O = function () {
                var t, e = this.b;
                return s ? this.K ? (t = new Uint8Array(e)).set(this.a.subarray(0, e)) : t = this.a.subarray(0, e) : (this.a.length > e && (this.a.length = e), t = this.a), this.buffer = t
            }, st.prototype.i = function () {
                for (var t = this.input.length; this.c < t;) {
                    var e, r, a = new w,
                        f = i,
                        u = i,
                        h = i,
                        c = i,
                        l = i,
                        p = i,
                        g = i,
                        y = this.input,
                        b = this.c;
                    switch (a.C = y[b++], a.D = y[b++], (31 !== a.C || 139 !== a.D) && n(Error("invalid file signature:" + a.C + "," + a.D)), a.v = y[b++], a.v) {
                        case 8:
                            break;
                        default:
                            n(Error("unknown compression method: " + a.v))
                    }
                    if (a.n = y[b++], r = y[b++] | y[b++] << 8 | y[b++] << 16 | y[b++] << 24, a.$ = new Date(1e3 * r), a.ba = y[b++], a.aa = y[b++], 0 < (4 & a.n) && (a.W = y[b++] | y[b++] << 8, b += a.W), 0 < (a.n & C)) {
                        for (p = [], l = 0; 0 < (c = y[b++]);) p[l++] = String.fromCharCode(c);
                        a.name = p.join("")
                    }
                    if (0 < (a.n & F)) {
                        for (p = [], l = 0; 0 < (c = y[b++]);) p[l++] = String.fromCharCode(c);
                        a.w = p.join("")
                    }
                    0 < (a.n & O) && (a.P = 65535 & d(y, 0, b), a.P !== (y[b++] | y[b++] << 8) && n(Error("invalid header crc16"))), f = y[y.length - 4] | y[y.length - 3] << 8 | y[y.length - 2] << 16 | y[y.length - 1] << 24, y.length - b - 4 - 4 < 512 * f && (h = f), u = new M(y, {
                        index: b,
                        bufferSize: h
                    }), a.data = e = u.i(), b = u.c, a.Y = g = (y[b++] | y[b++] << 8 | y[b++] << 16 | y[b++] << 24) >>> 0, d(e, i, i) !== g && n(Error("invalid CRC-32 checksum: 0x" + d(e, i, i).toString(16) + " / 0x" + g.toString(16))), a.Z = f = (y[b++] | y[b++] << 8 | y[b++] << 16 | y[b++] << 24) >>> 0, (4294967295 & e.length) !== f && n(Error("invalid input size: " + (4294967295 & e.length) + " / " + f)), this.G.push(a), this.c = b
                }
                this.R = o;
                var v, m, A, E = this.G,
                    T = 0,
                    U = 0;
                for (v = 0, m = E.length; v < m; ++v) U += E[v].data.length;
                if (s)
                    for (A = new Uint8Array(U), v = 0; v < m; ++v) A.set(E[v].data, T), T += E[v].data.length;
                else {
                    for (A = [], v = 0; v < m; ++v) A[v] = E[v].data;
                    A = Array.prototype.concat.apply([], A)
                }
                return A
            }, ft.prototype.i = function () {
                var t, e = this.input;
                return t = this.J.i(), this.c = this.J.c, this.V && ((e[this.c++] << 24 | e[this.c++] << 16 | e[this.c++] << 8 | e[this.c++]) >>> 0 !== at(t) && n(Error("invalid adler-32 checksum"))), t
            };
            var ut = 8;

            function ht(t, e) {
                this.input = t, this.a = new (s ? Uint8Array : Array)(32768), this.k = ct.t;
                var r, n = {};
                for (r in !e && (e = {}) || "number" != typeof e.compressionType || (this.k = e.compressionType), e) n[r] = e[r];
                n.outputBuffer = this.a, this.I = new m(this.input, n)
            }
            var ct = T;

            function lt(t, e) {
                var r;
                return r = new ht(t).h(), e || (e = {}), e.H ? r : yt(r)
            }

            function pt(t, e) {
                var r;
                return t.subarray = t.slice, r = new ft(t).i(), e || (e = {}), e.noBuffer ? r : yt(r)
            }

            function dt(t, e) {
                var r;
                return t.subarray = t.slice, r = new P(t).h(), e || (e = {}), e.H ? r : yt(r)
            }

            function gt(t, e) {
                var r;
                return t.subarray = t.slice, r = new st(t).i(), e || (e = {}), e.H ? r : yt(r)
            }

            function yt(t) {
                var e, n, i = new r(t.length);
                for (e = 0, n = t.length; e < n; ++e) i[e] = t[e];
                return i
            }
            ht.prototype.h = function () {
                var t, e, r, i, o, a, f, u = 0;
                switch (f = this.a, t = ut) {
                    case ut:
                        e = Math.LOG2E * Math.log(32768) - 8;
                        break;
                    default:
                        n(Error("invalid compression method"))
                }
                switch (r = e << 4 | t, f[u++] = r, t) {
                    case ut:
                        switch (this.k) {
                            case ct.NONE:
                                o = 0;
                                break;
                            case ct.L:
                                o = 1;
                                break;
                            case ct.t:
                                o = 2;
                                break;
                            default:
                                n(Error("unsupported compression type"))
                        }
                        break;
                    default:
                        n(Error("invalid compression method"))
                }
                return i = o << 6 | 0, f[u++] = i | 31 - (256 * r + i) % 31, a = at(this.input), this.I.b = u, u = (f = this.I.h()).length, s && ((f = new Uint8Array(f.buffer)).length <= u + 4 && (this.a = new Uint8Array(f.length + 4), this.a.set(f), f = this.a), f = f.subarray(0, u + 4)), f[u++] = a >> 24 & 255, f[u++] = a >> 16 & 255, f[u++] = a >> 8 & 255, f[u++] = 255 & a, f
            }, e.deflate = function (e, r, n) {
                t.nextTick((function () {
                    var t, i;
                    try {
                        i = lt(e, n)
                    } catch (e) {
                        t = e
                    }
                    r(t, i)
                }))
            }, e.deflateSync = lt, e.inflate = function (e, r, n) {
                t.nextTick((function () {
                    var t, i;
                    try {
                        i = pt(e, n)
                    } catch (e) {
                        t = e
                    }
                    r(t, i)
                }))
            }, e.inflateSync = pt, e.gzip = function (e, r, n) {
                t.nextTick((function () {
                    var t, i;
                    try {
                        i = dt(e, n)
                    } catch (e) {
                        t = e
                    }
                    r(t, i)
                }))
            }, e.gzipSync = dt, e.gunzip = function (e, r, n) {
                t.nextTick((function () {
                    var t, i;
                    try {
                        i = gt(e, n)
                    } catch (e) {
                        t = e
                    }
                    r(t, i)
                }))
            }, e.gunzipSync = gt
        }).call(this)
    }).call(this, r(1), r(13).Buffer)
}, function (t, e, r) {
    "use strict";
    (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var n = r(15),
            i = r(16),
            o = r(17);

        function s() {
            return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(t, e) {
            if (s() < e) throw new RangeError("Invalid typed array length");
            return f.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = f.prototype : (null === t && (t = new f(e)), t.length = e), t
        }

        function f(t, e, r) {
            if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, e, r);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return c(this, t)
            }
            return u(this, t, e, r)
        }

        function u(t, e, r, n) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
                if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
                f.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = f.prototype : t = l(t, e);
                return t
            }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
                "string" == typeof r && "" !== r || (r = "utf8");
                if (!f.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | d(e, r),
                    i = (t = a(t, n)).write(e, r);
                i !== n && (t = t.slice(0, i));
                return t
            }(t, e, r) : function (t, e) {
                if (f.isBuffer(e)) {
                    var r = 0 | p(e.length);
                    return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? a(t, 0) : l(t, e);
                    if ("Buffer" === e.type && o(e.data)) return l(t, e.data)
                }
                var n;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function h(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function c(t, e) {
            if (h(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !f.TYPED_ARRAY_SUPPORT)
                for (var r = 0; r < e; ++r) t[r] = 0;
            return t
        }

        function l(t, e) {
            var r = e.length < 0 ? 0 : 0 | p(e.length);
            t = a(t, r);
            for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
            return t
        }

        function p(t) {
            if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t
        }

        function d(t, e) {
            if (f.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;
            for (var n = !1; ;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                case void 0:
                    return j(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return z(t).length;
                default:
                    if (n) return j(t).length;
                    e = ("" + e).toLowerCase(), n = !0
            }
        }

        function g(t, e, r) {
            var n = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8"); ;) switch (t) {
                case "hex":
                    return B(this, e, r);
                case "utf8":
                case "utf-8":
                    return S(this, e, r);
                case "ascii":
                    return R(this, e, r);
                case "latin1":
                case "binary":
                    return L(this, e, r);
                case "base64":
                    return _(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, e, r);
                default:
                    if (n) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), n = !0
            }
        }

        function y(t, e, r) {
            var n = t[e];
            t[e] = t[r], t[r] = n
        }

        function w(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                if (i) return -1;
                r = t.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
            if ("number" == typeof e) return e &= 255, f.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function b(t, e, r, n, i) {
            var o, s = 1,
                a = t.length,
                f = e.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, f /= 2, r /= 2
            }

            function u(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            if (i) {
                var h = -1;
                for (o = r; o < a; o++)
                    if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                        if (-1 === h && (h = o), o - h + 1 === f) return h * s
                    } else - 1 !== h && (o -= o - h), h = -1
            } else
                for (r + f > a && (r = a - f), o = r; o >= 0; o--) {
                    for (var c = !0, l = 0; l < f; l++)
                        if (u(t, o + l) !== u(e, l)) {
                            c = !1;
                            break
                        } if (c) return o
                }
            return -1
        }

        function v(t, e, r, n) {
            r = Number(r) || 0;
            var i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = e.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            n > o / 2 && (n = o / 2);
            for (var s = 0; s < n; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[r + s] = a
            }
            return s
        }

        function m(t, e, r, n) {
            return W(j(e, t.length - r), t, r, n)
        }

        function A(t, e, r, n) {
            return W(function (t) {
                for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }(e), t, r, n)
        }

        function E(t, e, r, n) {
            return A(t, e, r, n)
        }

        function T(t, e, r, n) {
            return W(z(e), t, r, n)
        }

        function U(t, e, r, n) {
            return W(function (t, e) {
                for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                return o
            }(e, t.length - r), t, r, n)
        }

        function _(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
        }

        function S(t, e, r) {
            r = Math.min(t.length, r);
            for (var n = [], i = e; i < r;) {
                var o, s, a, f, u = t[i],
                    h = null,
                    c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (i + c <= r) switch (c) {
                    case 1:
                        u < 128 && (h = u);
                        break;
                    case 2:
                        128 == (192 & (o = t[i + 1])) && (f = (31 & u) << 6 | 63 & o) > 127 && (h = f);
                        break;
                    case 3:
                        o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (f = (15 & u) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (f < 55296 || f > 57343) && (h = f);
                        break;
                    case 4:
                        o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (f = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && f < 1114112 && (h = f)
                }
                null === h ? (h = 65533, c = 1) : h > 65535 && (h -= 65536, n.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n.push(h), i += c
            }
            return function (t) {
                var e = t.length;
                if (e <= k) return String.fromCharCode.apply(String, t);
                var r = "",
                    n = 0;
                for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += k));
                return r
            }(n)
        }
        e.Buffer = f, e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return f.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, f.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = s(), f.poolSize = 8192, f._augment = function (t) {
            return t.__proto__ = f.prototype, t
        }, f.from = function (t, e, r) {
            return u(null, t, e, r)
        }, f.TYPED_ARRAY_SUPPORT && (f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, {
            value: null,
            configurable: !0
        })), f.alloc = function (t, e, r) {
            return function (t, e, r, n) {
                return h(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e)
            }(null, t, e, r)
        }, f.allocUnsafe = function (t) {
            return c(null, t)
        }, f.allocUnsafeSlow = function (t) {
            return c(null, t)
        }, f.isBuffer = function (t) {
            return !(null == t || !t._isBuffer)
        }, f.compare = function (t, e) {
            if (!f.isBuffer(t) || !f.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)
                if (t[i] !== e[i]) {
                    r = t[i], n = e[i];
                    break
                } return r < n ? -1 : n < r ? 1 : 0
        }, f.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, f.concat = function (t, e) {
            if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return f.alloc(0);
            var r;
            if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
            var n = f.allocUnsafe(e),
                i = 0;
            for (r = 0; r < t.length; ++r) {
                var s = t[r];
                if (!f.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(n, i), i += s.length
            }
            return n
        }, f.byteLength = d, f.prototype._isBuffer = !0, f.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this
        }, f.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
            return this
        }, f.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
            return this
        }, f.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : g.apply(this, arguments)
        }, f.prototype.equals = function (t) {
            if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === f.compare(this, t)
        }, f.prototype.inspect = function () {
            var t = "",
                r = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">"
        }, f.prototype.compare = function (t, e, r, n, i) {
            if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (n >= i && e >= r) return 0;
            if (n >= i) return -1;
            if (e >= r) return 1;
            if (this === t) return 0;
            for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), u = this.slice(n, i), h = t.slice(e, r), c = 0; c < a; ++c)
                if (u[c] !== h[c]) {
                    o = u[c], s = h[c];
                    break
                } return o < s ? -1 : s < o ? 1 : 0
        }, f.prototype.includes = function (t, e, r) {
            return -1 !== this.indexOf(t, e, r)
        }, f.prototype.indexOf = function (t, e, r) {
            return w(this, t, e, r, !0)
        }, f.prototype.lastIndexOf = function (t, e, r) {
            return w(this, t, e, r, !1)
        }, f.prototype.write = function (t, e, r, n) {
            if (void 0 === e) n = "utf8", r = this.length, e = 0;
            else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
            }
            var i = this.length - e;
            if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ;) switch (n) {
                case "hex":
                    return v(this, t, e, r);
                case "utf8":
                case "utf-8":
                    return m(this, t, e, r);
                case "ascii":
                    return A(this, t, e, r);
                case "latin1":
                case "binary":
                    return E(this, t, e, r);
                case "base64":
                    return T(this, t, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return U(this, t, e, r);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(), o = !0
            }
        }, f.prototype.toJSON = function () {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var k = 4096;

        function R(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n
        }

        function L(t, e, r) {
            var n = "";
            r = Math.min(t.length, r);
            for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n
        }

        function B(t, e, r) {
            var n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = e; o < r; ++o) i += D(t[o]);
            return i
        }

        function I(t, e, r) {
            for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }

        function P(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
        }

        function x(t, e, r, n, i, o) {
            if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError("Index out of range")
        }

        function O(t, e, r, n) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
        }

        function C(t, e, r, n) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
        }

        function F(t, e, r, n, i, o) {
            if (r + n > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function M(t, e, r, n, o) {
            return o || F(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
        }

        function N(t, e, r, n, o) {
            return o || F(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
        }
        f.prototype.slice = function (t, e) {
            var r, n = this.length;
            if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), f.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = f.prototype;
            else {
                var i = e - t;
                r = new f(i, void 0);
                for (var o = 0; o < i; ++o) r[o] = this[o + t]
            }
            return r
        }, f.prototype.readUIntLE = function (t, e, r) {
            t |= 0, e |= 0, r || P(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return n
        }, f.prototype.readUIntBE = function (t, e, r) {
            t |= 0, e |= 0, r || P(t, e, this.length);
            for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;
            return n
        }, f.prototype.readUInt8 = function (t, e) {
            return e || P(t, 1, this.length), this[t]
        }, f.prototype.readUInt16LE = function (t, e) {
            return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
        }, f.prototype.readUInt16BE = function (t, e) {
            return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, f.prototype.readUInt32LE = function (t, e) {
            return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, f.prototype.readUInt32BE = function (t, e) {
            return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, f.prototype.readIntLE = function (t, e, r) {
            t |= 0, e |= 0, r || P(t, e, this.length);
            for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }, f.prototype.readIntBE = function (t, e, r) {
            t |= 0, e |= 0, r || P(t, e, this.length);
            for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }, f.prototype.readInt8 = function (t, e) {
            return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, f.prototype.readInt16LE = function (t, e) {
            e || P(t, 2, this.length);
            var r = this[t] | this[t + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, f.prototype.readInt16BE = function (t, e) {
            e || P(t, 2, this.length);
            var r = this[t + 1] | this[t] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, f.prototype.readInt32LE = function (t, e) {
            return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, f.prototype.readInt32BE = function (t, e) {
            return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, f.prototype.readFloatLE = function (t, e) {
            return e || P(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }, f.prototype.readFloatBE = function (t, e) {
            return e || P(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }, f.prototype.readDoubleLE = function (t, e) {
            return e || P(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }, f.prototype.readDoubleBE = function (t, e) {
            return e || P(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }, f.prototype.writeUIntLE = function (t, e, r, n) {
            (t = +t, e |= 0, r |= 0, n) || x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1,
                o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
            return e + r
        }, f.prototype.writeUIntBE = function (t, e, r, n) {
            (t = +t, e |= 0, r |= 0, n) || x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1,
                o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
            return e + r
        }, f.prototype.writeUInt8 = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 1, 255, 0), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, f.prototype.writeUInt16LE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2
        }, f.prototype.writeUInt16BE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 2, 65535, 0), f.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2
        }, f.prototype.writeUInt32LE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : C(this, t, e, !0), e + 4
        }, f.prototype.writeUInt32BE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 4, 4294967295, 0), f.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4
        }, f.prototype.writeIntLE = function (t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                x(this, t, e, r, i - 1, -i)
            }
            var o = 0,
                s = 1,
                a = 0;
            for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + r
        }, f.prototype.writeIntBE = function (t, e, r, n) {
            if (t = +t, e |= 0, !n) {
                var i = Math.pow(2, 8 * r - 1);
                x(this, t, e, r, i - 1, -i)
            }
            var o = r - 1,
                s = 1,
                a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
            return e + r
        }, f.prototype.writeInt8 = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 1, 127, -128), f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, f.prototype.writeInt16LE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2
        }, f.prototype.writeInt16BE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 2, 32767, -32768), f.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2
        }, f.prototype.writeInt32LE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 4, 2147483647, -2147483648), f.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : C(this, t, e, !0), e + 4
        }, f.prototype.writeInt32BE = function (t, e, r) {
            return t = +t, e |= 0, r || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), f.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : C(this, t, e, !1), e + 4
        }, f.prototype.writeFloatLE = function (t, e, r) {
            return M(this, t, e, !0, r)
        }, f.prototype.writeFloatBE = function (t, e, r) {
            return M(this, t, e, !1, r)
        }, f.prototype.writeDoubleLE = function (t, e, r) {
            return N(this, t, e, !0, r)
        }, f.prototype.writeDoubleBE = function (t, e, r) {
            return N(this, t, e, !1, r)
        }, f.prototype.copy = function (t, e, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var i, o = n - r;
            if (this === t && r < e && e < n)
                for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];
            else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) t[i + e] = this[i + r];
            else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
            return o
        }, f.prototype.fill = function (t, e, r, n) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
            if (r <= e) return this;
            var o;
            if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
                for (o = e; o < r; ++o) this[o] = t;
            else {
                var s = f.isBuffer(t) ? t : j(new f(t, n).toString()),
                    a = s.length;
                for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
            }
            return this
        };
        var Y = /[^+\/0-9A-Za-z-_]/g;

        function D(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function j(t, e) {
            var r;
            e = e || 1 / 0;
            for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === n) {
                            (e -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((e -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }

        function z(t) {
            return n.toByteArray(function (t) {
                if ((t = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }(t).replace(Y, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function W(t, e, r, n) {
            for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
            return i
        }
    }).call(this, r(14))
}, function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e, r) {
    "use strict";
    e.byteLength = function (t) {
        var e = u(t),
            r = e[0],
            n = e[1];
        return 3 * (r + n) / 4 - n
    }, e.toByteArray = function (t) {
        var e, r, n = u(t),
            s = n[0],
            a = n[1],
            f = new o(function (t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, s, a)),
            h = 0,
            c = a > 0 ? s - 4 : s;
        for (r = 0; r < c; r += 4) e = i[t.charCodeAt(r)] << 18 | i[t.charCodeAt(r + 1)] << 12 | i[t.charCodeAt(r + 2)] << 6 | i[t.charCodeAt(r + 3)], f[h++] = e >> 16 & 255, f[h++] = e >> 8 & 255, f[h++] = 255 & e;
        2 === a && (e = i[t.charCodeAt(r)] << 2 | i[t.charCodeAt(r + 1)] >> 4, f[h++] = 255 & e);
        1 === a && (e = i[t.charCodeAt(r)] << 10 | i[t.charCodeAt(r + 1)] << 4 | i[t.charCodeAt(r + 2)] >> 2, f[h++] = e >> 8 & 255, f[h++] = 255 & e);
        return f
    }, e.fromByteArray = function (t) {
        for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(h(t, s, s + 16383 > a ? a : s + 16383));
        1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
        return o.join("")
    };
    for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, f = s.length; a < f; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

    function u(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
    }

    function h(t, e, r) {
        for (var i, o, s = [], a = e; a < r; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
        return s.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function (t, e) {
    e.read = function (t, e, r, n, i) {
        var o, s, a = 8 * i - n - 1,
            f = (1 << a) - 1,
            u = f >> 1,
            h = -7,
            c = r ? i - 1 : 0,
            l = r ? -1 : 1,
            p = t[e + c];
        for (c += l, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = 256 * o + t[e + c], c += l, h -= 8);
        for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = 256 * s + t[e + c], c += l, h -= 8);
        if (0 === o) o = 1 - u;
        else {
            if (o === f) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, n), o -= u
        }
        return (p ? -1 : 1) * s * Math.pow(2, o - n)
    }, e.write = function (t, e, r, n, i, o) {
        var s, a, f, u = 8 * o - i - 1,
            h = (1 << u) - 1,
            c = h >> 1,
            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = n ? 0 : o - 1,
            d = n ? 1 : -1,
            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -s)) < 1 && (s--, f *= 2), (e += s + c >= 1 ? l / f : l * Math.pow(2, 1 - c)) * f >= 2 && (s++, f /= 2), s + c >= h ? (a = 0, s = h) : s + c >= 1 ? (a = (e * f - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += d, a /= 256, i -= 8);
        for (s = s << i | a, u += i; u > 0; t[r + p] = 255 & s, p += d, s /= 256, u -= 8);
        t[r + p - d] |= 128 * g
    }
}, function (t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function (t) {
        return "[object Array]" == r.call(t)
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const n = r(19);
    class i {
        constructor(t) {
            this.mod = t
        }
        compress(t) {
            const e = t.byteLength,
                r = this.mod._malloc(e);
            this.mod.HEAPU8.set(t, r);
            const n = this.mod.ccall("get_max_compressed_size", "number", ["number, number"], [r, e]),
                i = new Uint8Array(n),
                o = this.mod._malloc(n);
            this.mod.HEAPU8.set(i, o);
            const s = this.mod.ccall("ttf_to_woff2", "number", ["number", "number", "number", "number"], [r, e, o, n]);
            if (0 === s) throw new Error("woff2: Failed to compress");
            const a = this.mod.HEAPU8.subarray(o, o + s).slice(0);
            return this.mod._free(r), this.mod._free(o), a
        }
        uncompress(t) {
            const e = t.byteLength,
                r = this.mod._malloc(e);
            this.mod.HEAPU8.set(t, r);
            const n = this.mod.ccall("get_uncompressed_size", "number", ["number, number"], [r, e]),
                i = new Uint8Array(n),
                o = this.mod._malloc(n);
            this.mod.HEAPU8.set(i, o);
            const s = this.mod.ccall("woff2_to_ttf", "number", ["number", "number", "number", "number"], [o, n, r, e]);
            if (0 === s) throw new Error("woff2: Failed to uncompress");
            const a = this.mod.HEAPU8.subarray(o, o + s).slice(0);
            return this.mod._free(r), this.mod._free(o), a
        }
    }
    e.Woff2 = i, e.createWoff2 = function (t) {
        return new Promise((e, r) => {
            let o = null;
            o = new n({
                wasmBinary: t,
                onRuntimeInitialized: () => {
                    e(new i(o))
                }
            })
        })
    }
}, function (t, e, r) {
    (function (e, n, i) {
        var o, s = (o = (o = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || e, function (t) {
            t = void 0 !== (t = t || {}) ? t : {};
            var e, s = {};
            for (e in t) t.hasOwnProperty(e) && (s[e] = t[e]);
            var a = [],
                f = function (t, e) {
                    throw e
                },
                u = !1,
                h = !1,
                c = !1,
                l = !1;
            u = "object" == typeof window, h = "function" == typeof importScripts, c = "object" == typeof n && "object" == typeof n.versions && "string" == typeof n.versions.node && !u && !h, l = !u && !c && !h;
            var p, d, g, y, w = "";

            function b(e) {
                return t.locateFile ? t.locateFile(e, w) : w + e
            }
            c ? (w = i + "/", p = function (t, e) {
                return g || (g = r(20)), y || (y = r(21)), t = y.normalize(t), g.readFileSync(t, e ? null : "utf8")
            }, d = function (t) {
                var e = p(t, !0);
                return e.buffer || (e = new Uint8Array(e)), S(e.buffer), e
            }, n.argv.length > 1 && n.argv[1].replace(/\\/g, "/"), a = n.argv.slice(2), n.on("uncaughtException", (function (t) {
                if (!(t instanceof Yt)) throw t
            })), n.on("unhandledRejection", ut), f = function (t) {
                n.exit(t)
            }, t.inspect = function () {
                return "[Emscripten Module object]"
            }) : l ? ("undefined" != typeof read && (p = function (t) {
                return read(t)
            }), d = function (t) {
                var e;
                return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t)) : (S("object" == typeof (e = read(t, "binary"))), e)
            }, "undefined" != typeof scriptArgs ? a = scriptArgs : void 0 !== arguments && (a = arguments), "function" == typeof quit && (f = function (t) {
                quit(t)
            }), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (u || h) && (h ? w = self.location.href : document.currentScript && (w = document.currentScript.src), o && (w = o), w = 0 !== w.indexOf("blob:") ? w.substr(0, w.lastIndexOf("/") + 1) : "", p = function (t) {
                var e = new XMLHttpRequest;
                return e.open("GET", t, !1), e.send(null), e.responseText
            }, h && (d = function (t) {
                var e = new XMLHttpRequest;
                return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
            }));
            var v, m, A, E = t.print || console.log.bind(console),
                T = t.printErr || console.warn.bind(console);
            for (e in s) s.hasOwnProperty(e) && (t[e] = s[e]);
            s = null, t.arguments && (a = t.arguments), t.thisProgram && t.thisProgram, t.quit && (f = t.quit), t.wasmBinary && (v = t.wasmBinary), t.noExitRuntime && (m = t.noExitRuntime), "object" != typeof WebAssembly && T("no native wasm support detected");
            var U = new WebAssembly.Table({
                initial: 37,
                maximum: 37,
                element: "anyfunc"
            }),
                _ = !1;

            function S(t, e) {
                t || ut("Assertion failed: " + e)
            }

            function k(e) {
                var r = t["_" + e];
                return S(r, "Cannot call unknown function " + e + ", make sure it is exported"), r
            }

            function R(t, e, r, n, i) {
                var o = {
                    string: function (t) {
                        var e = 0;
                        if (null != t && 0 !== t) {
                            var r = 1 + (t.length << 2);
                            O(t, e = Mt(r), r)
                        }
                        return e
                    },
                    array: function (t) {
                        var e = Mt(t.length);
                        return C(t, e), e
                    }
                },
                    s = k(t),
                    a = [],
                    f = 0;
                if (n)
                    for (var u = 0; u < n.length; u++) {
                        var h = o[r[u]];
                        h ? (0 === f && (f = Ft()), a[u] = h(n[u])) : a[u] = n[u]
                    }
                var c = s.apply(null, a);
                return c = function (t) {
                    return "string" === e ? P(t) : "boolean" === e ? Boolean(t) : t
                }(c), 0 !== f && Nt(f), c
            }

            function L(t, e, r, n) {
                var i = (r = r || []).every((function (t) {
                    return "number" === t
                }));
                return "string" !== e && i && !n ? k(t) : function () {
                    return R(t, e, r, arguments)
                }
            }
            var B = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function I(t, e, r) {
                for (var n = e + r, i = e; t[i] && !(i >= n);) ++i;
                if (i - e > 16 && t.subarray && B) return B.decode(t.subarray(e, i));
                for (var o = ""; e < i;) {
                    var s = t[e++];
                    if (128 & s) {
                        var a = 63 & t[e++];
                        if (192 != (224 & s)) {
                            var f = 63 & t[e++];
                            if ((s = 224 == (240 & s) ? (15 & s) << 12 | a << 6 | f : (7 & s) << 18 | a << 12 | f << 6 | 63 & t[e++]) < 65536) o += String.fromCharCode(s);
                            else {
                                var u = s - 65536;
                                o += String.fromCharCode(55296 | u >> 10, 56320 | 1023 & u)
                            }
                        } else o += String.fromCharCode((31 & s) << 6 | a)
                    } else o += String.fromCharCode(s)
                }
                return o
            }

            function P(t, e) {
                return t ? I(N, t, e) : ""
            }

            function x(t, e, r, n) {
                if (!(n > 0)) return 0;
                for (var i = r, o = r + n - 1, s = 0; s < t.length; ++s) {
                    var a = t.charCodeAt(s);
                    if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++s)), a <= 127) {
                        if (r >= o) break;
                        e[r++] = a
                    } else if (a <= 2047) {
                        if (r + 1 >= o) break;
                        e[r++] = 192 | a >> 6, e[r++] = 128 | 63 & a
                    } else if (a <= 65535) {
                        if (r + 2 >= o) break;
                        e[r++] = 224 | a >> 12, e[r++] = 128 | a >> 6 & 63, e[r++] = 128 | 63 & a
                    } else {
                        if (r + 3 >= o) break;
                        e[r++] = 240 | a >> 18, e[r++] = 128 | a >> 12 & 63, e[r++] = 128 | a >> 6 & 63, e[r++] = 128 | 63 & a
                    }
                }
                return e[r] = 0, r - i
            }

            function O(t, e, r) {
                return x(t, N, e, r)
            }

            function C(t, e) {
                M.set(t, e)
            }
            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
            var F, M, N, Y, D = 65536;

            function j(t, e) {
                return t % e > 0 && (t += e - t % e), t
            }

            function z(e) {
                F = e, t.HEAP8 = M = new Int8Array(e), t.HEAP16 = new Int16Array(e), t.HEAP32 = Y = new Int32Array(e), t.HEAPU8 = N = new Uint8Array(e), t.HEAPU16 = new Uint16Array(e), t.HEAPU32 = new Uint32Array(e), t.HEAPF32 = new Float32Array(e), t.HEAPF64 = new Float64Array(e)
            }
            var W = 5675072,
                H = 432032,
                V = t.TOTAL_MEMORY || 16777216;

            function Z(e) {
                for (; e.length > 0;) {
                    var r = e.shift();
                    if ("function" != typeof r) {
                        var n = r.func;
                        "number" == typeof n ? void 0 === r.arg ? t.dynCall_v(n) : t.dynCall_vi(n, r.arg) : n(void 0 === r.arg ? null : r.arg)
                    } else r()
                }
            } (A = t.wasmMemory ? t.wasmMemory : new WebAssembly.Memory({
                initial: V / D
            })) && (F = A.buffer), V = F.byteLength, z(F), Y[H >> 2] = W;
            var q = [],
                $ = [],
                G = [],
                X = [];

            function J() {
                if (t.preRun)
                    for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) rt(t.preRun.shift());
                Z(q)
            }

            function K() {
                Z($)
            }

            function Q() {
                Z(G)
            }

            function tt() { }

            function et() {
                if (t.postRun)
                    for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) nt(t.postRun.shift());
                Z(X)
            }

            function rt(t) {
                q.unshift(t)
            }

            function nt(t) {
                X.unshift(t)
            }
            var it = 0,
                ot = null,
                st = null;

            function at(e) {
                it++, t.monitorRunDependencies && t.monitorRunDependencies(it)
            }

            function ft(e) {
                if (it--, t.monitorRunDependencies && t.monitorRunDependencies(it), 0 == it && (null !== ot && (clearInterval(ot), ot = null), st)) {
                    var r = st;
                    st = null, r()
                }
            }

            function ut(e) {
                throw t.onAbort && t.onAbort(e), E(e += ""), T(e), _ = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e)
            }
            t.preloadedImages = {}, t.preloadedAudios = {};
            var ht = "data:application/octet-stream;base64,";

            function ct(t) {
                return String.prototype.startsWith ? t.startsWith(ht) : 0 === t.indexOf(ht)
            }
            var lt = "converter.wasm";

            function pt() {
                try {
                    if (v) return new Uint8Array(v);
                    if (d) return d(lt);
                    throw "both async and sync fetching of the wasm failed"
                } catch (t) {
                    ut(t)
                }
            }

            function dt() {
                return v || !u && !h || "function" != typeof fetch ? new Promise((function (t, e) {
                    t(pt())
                })) : fetch(lt, {
                    credentials: "same-origin"
                }).then((function (t) {
                    if (!t.ok) throw "failed to load wasm binary file at '" + lt + "'";
                    return t.arrayBuffer()
                })).catch((function () {
                    return pt()
                }))
            }

            function gt() {
                var e = {
                    env: Bt,
                    wasi_snapshot_preview1: Bt
                };

                function r(e, r) {
                    var n = e.exports;
                    t.asm = n, ft()
                }

                function n(t) {
                    r(t.instance)
                }

                function i(t) {
                    return dt().then((function (t) {
                        return WebAssembly.instantiate(t, e)
                    })).then(t, (function (t) {
                        T("failed to asynchronously prepare wasm: " + t), ut(t)
                    }))
                }
                if (at(), t.instantiateWasm) try {
                    return t.instantiateWasm(e, r)
                } catch (t) {
                    return T("Module.instantiateWasm callback failed with error: " + t), !1
                }
                return function () {
                    if (v || "function" != typeof WebAssembly.instantiateStreaming || ct(lt) || "function" != typeof fetch) return i(n);
                    fetch(lt, {
                        credentials: "same-origin"
                    }).then((function (t) {
                        return WebAssembly.instantiateStreaming(t, e).then(n, (function (t) {
                            T("wasm streaming compile failed: " + t), T("falling back to ArrayBuffer instantiation"), i(n)
                        }))
                    }))
                }(), {}
            }

            function yt(t, e, r, n) {
                ut("Assertion failed: " + P(t) + ", at: " + [e ? P(e) : "unknown filename", r, n ? P(n) : "unknown function"])
            }

            function wt(t) {
                return Ot(t)
            }
            ct(lt) || (lt = b(lt)), $.push({
                func: function () {
                    xt()
                }
            });
            var bt = {};

            function vt(t, e, r) {
                throw bt[t] = {
                    ptr: t,
                    adjusted: [t],
                    type: e,
                    destructor: r,
                    refcount: 0,
                    caught: !1,
                    rethrown: !1
                }, "uncaught_exception" in Ct ? Ct.uncaught_exceptions++ : Ct.uncaught_exceptions = 1, t
            }

            function mt() {
                ut()
            }

            function At() {
                return M.length
            }

            function Et(t, e, r) {
                N.set(N.subarray(e, e + r), t)
            }

            function Tt(t) {
                try {
                    return A.grow(t - F.byteLength + 65535 >> 16), z(A.buffer), 1
                } catch (t) { }
            }

            function Ut(t) {
                var e = At();
                if (t > 2147418112) return !1;
                for (var r = Math.max(e, 16777216); r < t;) r = r <= 536870912 ? j(2 * r, 65536) : Math.min(j((3 * r + 2147483648) / 4, 65536), 2147418112);
                return !!Tt(r)
            }

            function _t(t) {
                jt(t)
            }
            var St = {
                buffers: [null, [],
                    []
                ],
                printChar: function (t, e) {
                    var r = St.buffers[t];
                    0 === e || 10 === e ? ((1 === t ? E : T)(I(r, 0)), r.length = 0) : r.push(e)
                },
                varargs: 0,
                get: function (t) {
                    return St.varargs += 4, Y[St.varargs - 4 >> 2]
                },
                getStr: function () {
                    return P(St.get())
                },
                get64: function () {
                    var t = St.get();
                    return St.get(), t
                },
                getZero: function () {
                    St.get()
                }
            };

            function kt(t) {
                try {
                    return 0
                } catch (t) {
                    return "undefined" != typeof FS && t instanceof FS.ErrnoError || ut(t), t.errno
                }
            }

            function Rt(t, e, r, n, i) {
                try {
                    return 0
                } catch (t) {
                    return "undefined" != typeof FS && t instanceof FS.ErrnoError || ut(t), t.errno
                }
            }

            function Lt(t, e, r, n) {
                try {
                    for (var i = 0, o = 0; o < r; o++) {
                        for (var s = Y[e + 8 * o >> 2], a = Y[e + (8 * o + 4) >> 2], f = 0; f < a; f++) St.printChar(t, N[s + f]);
                        i += a
                    }
                    return Y[n >> 2] = i, 0
                } catch (t) {
                    return "undefined" != typeof FS && t instanceof FS.ErrnoError || ut(t), t.errno
                }
            }
            var Bt = {
                i: yt,
                b: wt,
                a: vt,
                g: mt,
                c: Et,
                d: Ut,
                h: _t,
                f: kt,
                j: Rt,
                e: Lt,
                memory: A,
                table: U
            },
                It = gt();
            t.asm = It;
            var Pt, xt = t.___wasm_call_ctors = function () {
                return t.asm.k.apply(null, arguments)
            },
                Ot = (t._get_max_compressed_size = function () {
                    return t.asm.l.apply(null, arguments)
                }, t._ttf_to_woff2 = function () {
                    return t.asm.m.apply(null, arguments)
                }, t._get_uncompressed_size = function () {
                    return t.asm.n.apply(null, arguments)
                }, t._woff2_to_ttf = function () {
                    return t.asm.o.apply(null, arguments)
                }, t._malloc = function () {
                    return t.asm.p.apply(null, arguments)
                }),
                Ct = (t._free = function () {
                    return t.asm.q.apply(null, arguments)
                }, t.__ZSt18uncaught_exceptionv = function () {
                    return t.asm.r.apply(null, arguments)
                }),
                Ft = t.stackSave = function () {
                    return t.asm.s.apply(null, arguments)
                },
                Mt = t.stackAlloc = function () {
                    return t.asm.t.apply(null, arguments)
                },
                Nt = t.stackRestore = function () {
                    return t.asm.u.apply(null, arguments)
                };

            function Yt(t) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t
            }

            function Dt(e) {
                function r() {
                    Pt || (Pt = !0, _ || (K(), Q(), t.onRuntimeInitialized && t.onRuntimeInitialized(), et()))
                }
                e = e || a, it > 0 || (J(), it > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function () {
                    setTimeout((function () {
                        t.setStatus("")
                    }), 1), r()
                }), 1)) : r()))
            }

            function jt(e, r) {
                r && m && 0 === e || (m || (_ = !0, tt(), t.onExit && t.onExit(e)), f(e, new Yt(e)))
            }
            if (t.dynCall_vi = function () {
                return t.asm.v.apply(null, arguments)
            }, t.dynCall_v = function () {
                return t.asm.w.apply(null, arguments)
            }, t.asm = It, t.ccall = R, t.cwrap = L, t.then = function (e) {
                if (Pt) e(t);
                else {
                    var r = t.onRuntimeInitialized;
                    t.onRuntimeInitialized = function () {
                        r && r(), e(t)
                    }
                }
                return t
            }, st = function t() {
                Pt || Dt(), Pt || (st = t)
            }, t.run = Dt, t.preInit)
                for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
            return m = !0, Dt(), t
        });
        t.exports = s
    }).call(this, "/index.js", r(1), "/")
}, function (t, e) { }, function (t, e, r) {
    (function (t) {
        function r(t, e) {
            for (var r = 0, n = t.length - 1; n >= 0; n--) {
                var i = t[n];
                "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--)
            }
            if (e)
                for (; r--; r) t.unshift("..");
            return t
        }

        function n(t, e) {
            if (t.filter) return t.filter(e);
            for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
            return r
        }
        e.resolve = function () {
            for (var e = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                var s = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, i = "/" === s.charAt(0))
            }
            return (i ? "/" : "") + (e = r(n(e.split("/"), (function (t) {
                return !!t
            })), !i).join("/")) || "."
        }, e.normalize = function (t) {
            var o = e.isAbsolute(t),
                s = "/" === i(t, -1);
            return (t = r(n(t.split("/"), (function (t) {
                return !!t
            })), !o).join("/")) || o || (t = "."), t && s && (t += "/"), (o ? "/" : "") + t
        }, e.isAbsolute = function (t) {
            return "/" === t.charAt(0)
        }, e.join = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(n(t, (function (t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            })).join("/"))
        }, e.relative = function (t, r) {
            function n(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var r = t.length - 1; r >= 0 && "" === t[r]; r--);
                return e > r ? [] : t.slice(e, r - e + 1)
            }
            t = e.resolve(t).substr(1), r = e.resolve(r).substr(1);
            for (var i = n(t.split("/")), o = n(r.split("/")), s = Math.min(i.length, o.length), a = s, f = 0; f < s; f++)
                if (i[f] !== o[f]) {
                    a = f;
                    break
                } var u = [];
            for (f = a; f < i.length; f++) u.push("..");
            return (u = u.concat(o.slice(a))).join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function (t) {
            if ("string" != typeof t && (t += ""), 0 === t.length) return ".";
            for (var e = t.charCodeAt(0), r = 47 === e, n = -1, i = !0, o = t.length - 1; o >= 1; --o)
                if (47 === (e = t.charCodeAt(o))) {
                    if (!i) {
                        n = o;
                        break
                    }
                } else i = !1;
            return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : t.slice(0, n)
        }, e.basename = function (t, e) {
            var r = function (t) {
                "string" != typeof t && (t += "");
                var e, r = 0,
                    n = -1,
                    i = !0;
                for (e = t.length - 1; e >= 0; --e)
                    if (47 === t.charCodeAt(e)) {
                        if (!i) {
                            r = e + 1;
                            break
                        }
                    } else - 1 === n && (i = !1, n = e + 1);
                return -1 === n ? "" : t.slice(r, n)
            }(t);
            return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
        }, e.extname = function (t) {
            "string" != typeof t && (t += "");
            for (var e = -1, r = 0, n = -1, i = !0, o = 0, s = t.length - 1; s >= 0; --s) {
                var a = t.charCodeAt(s);
                if (47 !== a) - 1 === n && (i = !1, n = s + 1), 46 === a ? -1 === e ? e = s : 1 !== o && (o = 1) : -1 !== e && (o = -1);
                else if (!i) {
                    r = s + 1;
                    break
                }
            }
            return -1 === e || -1 === n || 0 === o || 1 === o && e === n - 1 && e === r + 1 ? "" : t.slice(e, n)
        };
        var i = "b" === "ab".substr(-1) ? function (t, e, r) {
            return t.substr(e, r)
        } : function (t, e, r) {
            return e < 0 && (e = t.length + e), t.substr(e, r)
        }
    }).call(this, r(1))
}]);