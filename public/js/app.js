!function (e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = e,
        n.c = t,
        n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        n.t = function (e, t) {
            if (1 & t && (e = n(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function (t) {
                        return e[t]
                    }
                        .bind(null, o));
            return r
        }
        ,
        n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            }
                : function () {
                    return e
                }
                ;
            return n.d(t, "a", t),
                t
        }
        ,
        n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 6)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = 1330926671
        , o = 1954115633
        , i = 1953658213
        , s = 65536;
    function c(e) {
        return e === r || e === o || e === i || e === s
    }
    function u(e) {
        if (e === r)
            return "otf";
        if (e === o || e === i || s)
            return "ttf";
        throw new Error(`Invalid font version: ${e}`)
    }
    function l(e) {
        return e === t.WOFF_SIGNATURE
    }
    t.isOtfFont = c,
        t.getOtfFilenameSuffix = u,
        t.WOFF_SIGNATURE = 2001684038,
        t.isWoffFont = l;
    const a = 2001684018;
    function f(e) {
        return e === a
    }
    function d(e) {
        if (e.byteLength < 4)
            return 0;
        return e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3]
    }
    t.isWoff2Font = f,
        t.getFontFormat = function (e) {
            const t = d(e);
            return c(t) ? "otf" : l(t) ? "woff" : f(t) ? "woff2" : "unsupported"
        }
        ,
        t.isValidFormat = function (e) {
            return "otf" === e || "woff" === e || "woff2" === e
        }
        ,
        t.getFilenameSuffix = function (e) {
            const t = d(e);
            if (l(t))
                return "woff";
            if (f(t))
                return "woff2";
            if (c(t))
                return u(t);
            throw new Error(`Invalid font version: ${t}`)
        }
}
    , , , , , , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))((function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function (e) {
                            e(t)
                        }
                        ))).then(s, c)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const o = n(0)
            , i = n(7);
        const s = [" B", " kB", " MB"]
            , c = 1024;
        function u(e) {
            let t = 0;
            for (; e > 1e3 + c && t < s.length;)
                e /= 1e3,
                    t += 1;
            const n = s[t];
            return e > 100 ? e.toFixed(0) + n : e.toFixed(1) + n
        }
        class l {
            constructor() {
                const e = document.querySelector("#input-file");
                if (!(e instanceof HTMLInputElement))
                    throw new Error("No input-file element");
                const t = document.querySelector("#select-file-button");
                if (!(t instanceof HTMLButtonElement))
                    throw new Error("No select-file-button element");
                const n = document.querySelector("#convert-result-container");
                if (!n)
                    throw new Error("No convert result container");
                const o = document.querySelector("#selected-font-info");
                if (!o)
                    throw new Error("No selected font info element");
                const i = document.querySelector("#convert-button");
                if (!(i instanceof HTMLButtonElement))
                    throw new Error("No convert button element");
                const s = document.querySelector("#spinner");
                if (!s)
                    throw new Error("No spinner element");
                const c = document.querySelector("#error-message-container");
                if (!c)
                    throw new Error("No error message container");
                this.inputFileEl = e,
                    this.selectFileButton = t,
                    this.convertResultEl = n,
                    this.selectedFontInfoEl = o,
                    this.convertButton = i,
                    this.spinnerEl = s,
                    this.errorMessageEl = c,
                    this.convertButton.disabled = !0,
                    this.selectedFiles = void 0,
                    this.selectFileButton.addEventListener("click", () => r(this, void 0, void 0, (function* () {
                        const e = yield this.chooseFiles();
                        this.onFilesSelected(e)
                    }
                    ))),
                    this.convertButton.addEventListener("click", () => {
                        this.startConversions()
                    }
                    )
            }
            chooseFiles() {
                return r(this, void 0, void 0, (function* () {
                    return new Promise((e, t) => {
                        const n = () => {
                            this.inputFileEl.removeEventListener("change", n),
                                null !== this.inputFileEl.files && 0 !== this.inputFileEl.files.length ? e(this.inputFileEl.files) : t("No file specified")
                        }
                            ;
                        this.inputFileEl.addEventListener("change", n),
                            this.inputFileEl.click()
                    }
                    )
                }
                ))
            }
            onFilesSelected(e) {
                this.selectedFontInfoEl.innerHTML = "";
                for (let t of e) {
                    const e = u(t.size);
                    let n = document.createElement("div");
                    n.innerHTML = `${t.name} (${e})`,
                        this.selectedFontInfoEl.appendChild(n)
                }
                this.selectedFiles = e,
                    this.convertButton.disabled = !1
            }
            startConversions() {
                return r(this, void 0, void 0, (function* () {
                    if (void 0 === this.selectedFiles)
                        return;
                    const e = document.querySelector("input[name=output-format]:checked");
                    if (!(e instanceof HTMLInputElement))
                        throw new Error("No output format element");
                    const t = e.value;
                    if (!o.isValidFormat(t))
                        throw new Error(`Invalid font format: ${t}`);
                    this.convertButton.disabled = !0,
                        this.convertResultEl.innerHTML = "",
                        this.errorMessageEl.innerHTML = "",
                        this.errorMessageEl.classList.add("error-message-off"),
                        this.spinnerEl.classList.remove("spinner-off");
                    try {
                        for (let e of this.selectedFiles)
                            yield this.convertSingleFile(e, t)
                    } catch (e) {
                        console.error(e),
                            this.errorMessageEl.innerHTML = e.message,
                            this.errorMessageEl.classList.remove("error-message-off"),
                            this.convertResultEl.innerHTML = ""
                    } finally {
                        this.spinnerEl.classList.add("spinner-off"),
                            this.convertButton.disabled = !1
                    }
                }
                ))
            }
            convertSingleFile(e, t) {
                return r(this, void 0, void 0, (function* () {
                    const n = yield function (e) {
                        return r(this, void 0, void 0, (function* () {
                            const t = new FileReader
                                , n = new Promise((e, n) => {
                                    t.addEventListener("load", () => {
                                        const n = t.result;
                                        if (!(n instanceof ArrayBuffer))
                                            throw new Error("readAsArrayBuffer() returns non ArrayBuffer result");
                                        e(new Uint8Array(n))
                                    }
                                    ),
                                        t.addEventListener("error", e => n(e))
                                }
                                );
                            return t.readAsArrayBuffer(e),
                                n
                        }
                        ))
                    }(e)
                        , s = n.byteLength
                        , c = yield i.convertOnWorker(n, t)
                        , l = c.output
                        , a = u(s)
                        , f = u(l.byteLength)
                        , d = (h = c.processTime) < 1e3 ? h.toFixed(0) + "ms" : (h / 1e3).toFixed(1) + "s";
                    var h;
                    const m = function (e, t) {
                        const n = document.createElement("span")
                            , r = t / e * 100;
                        return n.innerText = r.toFixed(1),
                            r < 100 ? (n.style.color = "green",
                                n.style.fontWeight = "bold") : r > 100 && (n.style.color = "red",
                                    n.style.fontWeight = "bold"),
                            n.outerHTML
                    }(s, l.byteLength)
                        , v = document.createElement("div");
                    v.classList.add("convert-summary"),
                        v.innerHTML = `\n    <div>변환 결과: ${a} → ${f} (${m}%)</div>\n    <div>변환 시간: ${d}</div>\n    `,
                        this.convertResultEl.appendChild(v);
                    const p = function (e, t) {
                        const n = new Blob([t])
                            , r = URL.createObjectURL(n)
                            , i = document.createElement("a");
                        i.href = r;
                        const s = o.getFilenameSuffix(t);
                        return i.download = `${e}.${s}`,
                            i.innerHTML = `${e}.${s}`,
                            i
                    }(function (e) {
                        const t = e.lastIndexOf(".");
                        return -1 === t ? e : e.substr(0, t)
                    }(e.name), l);
                    this.convertResultEl.appendChild(p)
                }
                ))
            }
        }
        document.addEventListener("DOMContentLoaded", () => {
            new l
        }
        )
    }
    , function (e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function (e, t, n, r) {
            return new (n || (n = Promise))((function (o, i) {
                function s(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function (e) {
                            e(t)
                        }
                        ))).then(s, c)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        class o {
            constructor(e) {
                this.worker = e,
                    this.messageId = 0,
                    this.pendings = new Map,
                    this.timeouts = new Map,
                    this.worker.addEventListener("message", e => {
                        const t = e.data.messageId;
                        if ("number" != typeof t)
                            return void console.warn(`Received invalid message from worker: ${e}`);
                        const n = this.timeouts.get(t);
                        n && (clearTimeout(n),
                            this.timeouts.delete(t));
                        const r = this.pendings.get(t);
                        if (r)
                            return e.data.error ? r.reject(new Error(e.data.error)) : r.resolve(e.data.response.output),
                                void this.pendings.delete(t);
                        if (e.data.error)
                            throw this.terminate(),
                            new Error(e.data.error)
                    }
                    )
            }
            convert(e, t, n) {
                return r(this, void 0, void 0, (function* () {
                    return new Promise((r, o) => {
                        this.worker.postMessage({
                            messageId: this.messageId,
                            action: "convert",
                            input: e,
                            format: t
                        }, [e.buffer]),
                            this.pendings.set(this.messageId, {
                                resolve: r,
                                reject: o
                            }),
                            n && this.timeouts.set(this.messageId, setTimeout(() => {
                                this.pendings.delete(this.messageId),
                                    o(new Error("Convert time out"))
                            }
                                , n)),
                            this.messageId += 1
                    }
                    )
                }
                ))
            }
            terminate() {
                this.worker.terminate()
            }
        }
        const i = 15e3;
        let s = null;
        function c() {
            return r(this, void 0, void 0, (function* () {
                return s || (s = yield new Promise((e, t) => {
                    const n = new Worker('/js/worker.js')
                        , r = setTimeout(() => t(new Error("Worker time out")), i);
                    n.postMessage("init");
                    const s = i => {
                        "initialized" === i.data ? (clearTimeout(r),
                            n.removeEventListener("message", s),
                            e(new o(n))) : "error" === i.data.name && t(new Error(i.data.message))
                    }
                        ;
                    n.addEventListener("message", s)
                }
                ))
            }
            ))
        }
        t.convertOnWorker = function (e, t) {
            return r(this, void 0, void 0, (function* () {
                const n = performance.now()
                    , r = yield c();
                return {
                    output: yield r.convert(e, t),
                    processTime: performance.now() - n
                }
            }
            ))
        }
    }
]);
