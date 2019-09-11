(function () {
    var l;

    function aa(a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {next: aa(a)}
    }

    function ca(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }

    var da = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {
        }

        b.prototype = a;
        return new b
    }, ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf; else {
        var fa;
        a:{
            var ha = {Fa: !0}, ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Fa;
                break a
            } catch (a) {
            }
            fa = !1
        }
        ea = fa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea;

    function ka(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c]
    }

    var la = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function na(a, b) {
        if (b) {
            var c = ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && la(c, a, {configurable: !0, writable: !0, value: b})
        }
    }

    na("String.prototype.endsWith", function (a) {
        return a ? a : function (b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;) if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    });
    na("Array.prototype.find", function (a) {
        return a ? a : function (b, c) {
            a:{
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var oa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    na("Object.assign", function (a) {
        return a || oa
    });
    var p = this || self;

    function pa(a) {
        return "string" == typeof a
    }

    function qa(a) {
        return "number" == typeof a
    }

    function ra() {
        if (null === sa) a:{
            var a = p.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && ta.test(a)) {
                sa = a;
                break a
            }
            sa = ""
        }
        return sa
    }

    var ta = /^[\w+/_-]+[=]{0,2}$/, sa = null;

    function ua(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
        return b
    }

    function va() {
    }

    function wa(a) {
        a.ga = void 0;
        a.j = function () {
            return a.ga ? a.ga : a.ga = new a
        }
    }

    function xa(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null"; else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ya(a) {
        return null === a
    }

    function za(a) {
        return "array" == xa(a)
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return a[Ca] || (a[Ca] = ++Da)
    }

    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0), Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function Ga(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga = Ea : Ga = Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function q(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };var Ia = (new Date).getTime();

    function Ja(a, b) {
        for (var c = a.length, d = pa(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ka(a, b) {
        for (var c = a.length, d = [], e = 0, f = pa(a) ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
            var h = f[g];
            b.call(void 0, h, g, a) && (d[e++] = h)
        }
        return d
    }

    function La(a, b) {
        for (var c = a.length, d = Array(c), e = pa(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ma(a, b) {
        for (var c = a.length, d = pa(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Na(a, b) {
        a:{
            for (var c = a.length, d = pa(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
            b = -1
        }
        return 0 > b ? null : pa(a) ? a.charAt(b) : a[b]
    }

    function Oa(a, b) {
        a:{
            for (var c = pa(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--) if (d in c && b.call(void 0, c[d], d, a)) {
                b = d;
                break a
            }
            b = -1
        }
        return 0 > b ? null : pa(a) ? a.charAt(b) : a[b]
    }

    function Pa(a, b) {
        a:if (pa(a)) a = pa(b) && 1 == b.length ? a.indexOf(b, 0) : -1; else {
            for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) {
                a = c;
                break a
            }
            a = -1
        }
        return 0 <= a
    };

    function Qa() {
        return function () {
            return !ya.apply(this, arguments)
        }
    }

    function Ra(a) {
        var b = !1, c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Sa(a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Ta(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ua(a) {
        var b = [], c = 0, d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Va(a, b) {
        return null !== a && b in a
    };

    function Wa(a, b, c) {
        this.f = a === Xa && b || "";
        this.aa = a === Xa && c || null;
        this.h = Ya
    }

    Wa.prototype.b = !0;
    Wa.prototype.a = function () {
        return this.f.toString()
    };

    function Za(a) {
        if (a instanceof Wa && a.constructor === Wa && a.h === Ya) return a.f;
        xa(a);
        return "type_error:TrustedResourceUrl"
    }

    var Ya = {}, Xa = {};

    function $a(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    var ab = /&/g, bb = /</g, cb = />/g, db = /"/g, eb = /'/g, fb = /\x00/g;

    function gb(a, b) {
        return -1 != a.indexOf(b)
    }

    function hb(a, b) {
        var c = 0;
        a = $a(String(a)).split(".");
        b = $a(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "", g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = ib(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ib(0 == f[2].length, 0 == g[2].length) || ib(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function ib(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function jb(a, b) {
        this.f = a === kb && b || "";
        this.h = lb
    }

    jb.prototype.b = !0;
    jb.prototype.a = function () {
        return this.f.toString()
    };

    function mb(a) {
        if (a instanceof jb && a.constructor === jb && a.h === lb) return a.f;
        xa(a);
        return "type_error:SafeUrl"
    }

    var nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, lb = {}, kb = {};
    var ob;
    a:{
        var pb = p.navigator;
        if (pb) {
            var qb = pb.userAgent;
            if (qb) {
                ob = qb;
                break a
            }
        }
        ob = ""
    }

    function r(a) {
        return gb(ob, a)
    }

    function sb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function tb() {
        return (r("Chrome") || r("CriOS")) && !r("Edge")
    }

    function ub() {
        function a(e) {
            e = Na(e, d);
            return c[e] || ""
        }

        var b = ob;
        if (r("Trident") || r("MSIE")) return vb(b);
        b = sb(b);
        var c = {};
        Ja(b, function (e) {
            c[e[0]] = e[1]
        });
        var d = Ha(Va, c);
        return r("Opera") ? a(["Version", "Opera"]) : r("Edge") ? a(["Edge"]) : r("Edg/") ? a(["Edg"]) : tb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function wb(a) {
        return 0 <= hb(ub(), a)
    }

    function vb(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) if (a && a[1]) switch (a[1]) {
            case "4.0":
                b = "8.0";
                break;
            case "5.0":
                b = "9.0";
                break;
            case "6.0":
                b = "10.0";
                break;
            case "7.0":
                b = "11.0"
        } else b = "7.0"; else b = c[1];
        return b
    };

    function xb(a, b) {
        a.src = Za(b);
        (b = ra()) && a.setAttribute("nonce", b)
    };var yb = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }, zb = {"'": "\\'"};

    function Ab(a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    };

    function Bb(a) {
        Bb[" "](a);
        return a
    }

    Bb[" "] = va;

    function t() {
    }

    var Cb = "function" == typeof Uint8Array;

    function w(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.w = void 0;
        a.h = -1;
        a.b = b;
        a:{
            if (b = a.b.length) {
                --b;
                var e = a.b[b];
                if (!(null === e || "object" != typeof e || za(e) || Cb && e instanceof Uint8Array)) {
                    a.i = b - a.h;
                    a.f = e;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.s = {};
        if (c) for (b = 0; b < c.length; b++) e = c[b], e < a.i ? (e += a.h, a.b[e] = a.b[e] || Db) : (Eb(a), a.f[e] = a.f[e] || Db);
        if (d && d.length) for (b = 0; b < d.length; b++) Fb(a, d[b])
    }

    var Db = [];

    function Eb(a) {
        var b = a.i + a.h;
        a.b[b] || (a.f = a.b[b] = {})
    }

    function x(a, b) {
        if (b < a.i) {
            b += a.h;
            var c = a.b[b];
            return c === Db ? a.b[b] = [] : c
        }
        if (a.f) return c = a.f[b], c === Db ? a.f[b] = [] : c
    }

    function Gb(a, b) {
        a = x(a, b);
        return null == a ? a : +a
    }

    function Hb(a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    }

    function z(a, b, c) {
        a = x(a, b);
        return null == a ? c : a
    }

    function Ib(a, b) {
        a = Hb(a, b);
        return null == a ? !1 : a
    }

    function Jb(a, b) {
        a = Gb(a, b);
        return null == a ? 0 : a
    }

    function Kb(a, b, c) {
        b < a.i ? a.b[b + a.h] = c : (Eb(a), a.f[b] = c);
        return a
    }

    function Fb(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e], g = x(a, f);
            null != g && (c = f, d = g, Kb(a, f, void 0))
        }
        return c ? (Kb(a, c, d), c) : 0
    }

    function A(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            var d = x(a, c);
            d && (a.a[c] = new b(d))
        }
        return a.a[c]
    }

    function B(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = x(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
        b = a.a[c];
        b == Db && (b = a.a[c] = []);
        return b
    }

    function Lb(a) {
        if (a.a) for (var b in a.a) {
            var c = a.a[b];
            if (za(c)) for (var d = 0; d < c.length; d++) c[d] && Lb(c[d]); else c && Lb(c)
        }
        return a.b
    };

    function Mb(a) {
        w(this, a, Nb, null)
    }

    q(Mb, t);

    function Ob(a) {
        w(this, a, null, null)
    }

    q(Ob, t);
    var Nb = [2, 3];

    function Pb(a) {
        w(this, a, null, null)
    }

    q(Pb, t);
    var Qb = document, C = window;
    var Rb = {"120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0};

    function Sb(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Tb(a, b) {
        return a.createElement(String(b))
    }

    function Ub(a) {
        this.a = a || p.document || document
    }

    Ub.prototype.contains = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Vb(a) {
        Wb();
        return new Wa(Xa, a, null)
    }

    var Wb = va;

    function Xb() {
        return !(r("iPad") || r("Android") && !r("Mobile") || r("Silk")) && (r("iPod") || r("iPhone") || r("Android") || r("IEMobile"))
    };

    function Yb(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a:{
                try {
                    Bb(a.foo);
                    b = !0;
                    break a
                } catch (c) {
                }
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Zb(a) {
        for (var b = p, c = 0; b && 40 > c++ && (!Yb(b) || !a(b));) a:{
            try {
                var d = b.parent;
                if (d && d != b) {
                    b = d;
                    break a
                }
            } catch (e) {
            }
            b = null
        }
    }

    function $b() {
        var a = p;
        Zb(function (b) {
            a = b;
            return !1
        });
        return a
    }

    function ac(a, b) {
        var c = a.createElement("script");
        xb(c, Vb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function bc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function cc(a, b, c) {
        var d = !1;
        void 0 === c || c || (d = dc());
        return !d && !ec() && (c = Math.random(), c < b) ? (c = fc(p), a[Math.floor(c * a.length)]) : null
    }

    function fc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function gc(a, b) {
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function hc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }

    var ec = Ra(function () {
        return gb(ob, "Google Web Preview") || 1E-4 > Math.random()
    }), dc = Ra(function () {
        return gb(ob, "MSIE")
    }), ic = /^([0-9.]+)px$/, jc = /^(-?[0-9.]{1,30})$/;

    function kc(a) {
        return jc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function lc(a, b) {
        return b ? !/^false$/.test(a) : /^true$/.test(a)
    }

    function D(a) {
        return (a = ic.exec(a)) ? +a[1] : null
    }

    function mc(a) {
        var b = {display: "none"};
        a.style.setProperty ? gc(b, function (c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = nc(oc(pc(a.style.cssText), qc(b, function (c) {
            return c + " !important"
        })))
    }

    var oc = Object.assign || function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function qc(a, b) {
        var c = {}, d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function nc(a) {
        var b = [];
        gc(a, function (c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function pc(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Ja((a || "").split(/\s*;\s*/), function (d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }

    var rc = Ra(function () {
        var a = /Edge\/([^. ]+)/.exec(navigator.userAgent);
        return a ? 18 <= parseInt(a[1], 10) : (a = /Chrome\/([^. ]+)/.exec(navigator.userAgent)) ? 71 <= parseInt(a[1], 10) : (a = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent)) ? 605 <= parseInt(a[1], 10) : (a = /Firefox\/([^. ]+)/.exec(navigator.userAgent)) ? 64 <= parseInt(a[1], 10) : !1
    }), sc = Ra(function () {
        return tb() && wb(72) || r("Edge") && wb(18) || (r("Firefox") || r("FxiOS")) && wb(65) || r("Safari") && !(tb() || r("Coast") || r("Opera") || r("Edge") || r("Edg/") || r("OPR") || r("Firefox") || r("FxiOS") || r("Silk") || r("Android")) && wb(12)
    });

    function tc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function uc(a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function (e) {
                b && b(e);
                c.removeEventListener && c.removeEventListener("load", d, !1);
                c.removeEventListener && c.removeEventListener("error", d, !1)
            };
            tc(c, "load", d);
            tc(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    };

    function vc(a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }

    var wc = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function xc(a, b) {
        return a ? (a = a.match(wc)) ? a[0] : b : b
    };

    function yc() {
        return "r20190905"
    }

    var zc = lc("false", !1), Ac = lc("false", !1), Bc = lc("true", !1) || !Ac;

    function Cc() {
        return xc("", "pagead2.googlesyndication.com")
    };

    function Dc(a) {
        w(this, a, Ec, Fc)
    }

    q(Dc, t);
    var Ec = [2, 8], Fc = [[3, 4, 5], [6, 7]];

    function Gc(a) {
        return null != a ? !a : a
    }

    function Hc(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d].call();
            if (e == b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Ic(a, b) {
        var c = B(a, Dc, 2);
        if (!c.length) return Jc(a, b);
        a = z(a, 1, 0);
        if (1 == a) return Gc(Ic(c[0], b));
        c = La(c, function (d) {
            return function () {
                return Ic(d, b)
            }
        });
        switch (a) {
            case 2:
                return Hc(c, !1);
            case 3:
                return Hc(c, !0)
        }
    }

    function Jc(a, b) {
        var c = Fb(a, Fc[0]);
        a:{
            switch (c) {
                case 3:
                    var d = z(a, 3, 0);
                    break a;
                case 4:
                    d = z(a, 4, 0);
                    break a;
                case 5:
                    d = z(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, x(a, 8))
            } catch (f) {
                return
            }
            b = z(a, 1, 0);
            if (4 == b) return !!e;
            d = null != e;
            if (5 == b) return d;
            if (12 == b) a = z(a, 7, ""); else a:{
                switch (c) {
                    case 4:
                        a = Jb(a, 6);
                        break a;
                    case 5:
                        a = z(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == hb(e, a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == hb(e, a);
                    case 11:
                        return 1 == hb(e, a)
                }
            }
        }
    }

    function Kc(a, b) {
        return !a || !(!b || !Ic(a, b))
    };

    function Lc(a) {
        w(this, a, Mc, null)
    }

    q(Lc, t);
    var Mc = [4];

    function Nc(a) {
        w(this, a, Oc, Pc)
    }

    q(Nc, t);

    function Qc(a) {
        w(this, a, null, null)
    }

    q(Qc, t);
    var Oc = [5], Pc = [[1, 2, 3, 6]];

    function Rc() {
        var a = {};
        this.a = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    }

    wa(Rc);
    var Sc = lc("false", !1);

    function Tc(a, b) {
        switch (b) {
            case 1:
                return z(a, 1, 0);
            case 2:
                return z(a, 2, 0);
            case 3:
                return z(a, 3, 0);
            case 6:
                return z(a, 6, 0);
            default:
                return null
        }
    }

    function Uc(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Ib(a, 1);
            case 2:
                return Jb(a, 2);
            case 3:
                return z(a, 3, "");
            case 6:
                return x(a, 4);
            default:
                return null
        }
    }

    var Vc = Ra(function () {
        if (!Sc) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {
        }
        return {}
    });

    function Wc(a, b, c) {
        var d = Vc();
        if (d[a] && null != d[a][b]) return d[a][b];
        b = Xc.j().a[a][b];
        if (!b) return c;
        b = new Nc(b);
        b = Yc(b);
        a = Uc(b, a);
        return null != a ? a : c
    }

    function Yc(a) {
        var b = Rc.j().a;
        if (b) {
            var c = Oa(B(a, Qc, 5), function (d) {
                return Kc(A(d, Dc, 1), b)
            });
            if (c) return A(c, Lc, 2)
        }
        return A(a, Lc, 4)
    }

    function Xc() {
        var a = {};
        this.a = (a[1] = {}, a[2] = {}, a[3] = {}, a[6] = {}, a)
    }

    wa(Xc);

    function Zc(a, b) {
        return !!Wc(1, a, void 0 === b ? !1 : b)
    }

    function $c(a, b) {
        b = void 0 === b ? 0 : b;
        a = Number(Wc(2, a, b));
        return isNaN(a) ? b : a
    }

    function ad(a, b) {
        return Wc(3, a, void 0 === b ? "" : b)
    }

    function bd(a, b) {
        b = void 0 === b ? [] : b;
        return Wc(6, a, b)
    }

    function cd(a) {
        var b = Xc.j().a;
        Ja(a, function (c) {
            var d = Fb(c, Pc[0]), e = Tc(c, d);
            e && (b[d][e] = Lb(c))
        })
    }

    function dd(a) {
        var b = Xc.j().a;
        Ja(a, function (c) {
            var d = new Nc(c), e = Fb(d, Pc[0]);
            (d = Tc(d, e)) && (b[e][d] || (b[e][d] = c))
        })
    };

    function F(a) {
        this.a = a
    }

    var ed = new F(1), fd = new F(2), gd = new F(3), hd = new F(4), id = new F(5), jd = new F(6), kd = new F(7),
        ld = new F(8), md = new F(9), nd = new F(10), od = new F(11), pd = new F(12), qd = new F(13), rd = new F(14);

    function I(a, b, c) {
        c.hasOwnProperty(a.a) || Object.defineProperty(c, String(a.a), {value: b})
    }

    function sd(a, b, c) {
        return b[a.a] || c || function () {
        }
    }

    function td(a) {
        I(id, Zc, a);
        I(jd, $c, a);
        I(kd, ad, a);
        I(ld, bd, a);
        I(qd, dd, a)
    }

    function ud(a) {
        I(hd, function (b) {
            Rc.j().a = b
        }, a);
        I(md, function (b, c) {
            var d = Rc.j();
            d.a[3][b] || (d.a[3][b] = c)
        }, a);
        I(nd, function (b, c) {
            var d = Rc.j();
            d.a[4][b] || (d.a[4][b] = c)
        }, a);
        I(od, function (b, c) {
            var d = Rc.j();
            d.a[5][b] || (d.a[5][b] = c)
        }, a);
        I(rd, function (b) {
            for (var c = Rc.j(), d = ba([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.a[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function vd(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {value: !0})
    };

    function wd() {
        this.a = function () {
            return !1
        }
    }

    wa(wd);

    function xd(a) {
        var b = void 0 === b ? !1 : b;
        return wd.j().a(a, b)
    };

    function yd(a) {
        a = void 0 === a ? p : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {
        }
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {
        }
        return null
    }

    function zd(a) {
        return (a = a || yd()) ? Yb(a.master) ? a.master : null : null
    };

    function Ad(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Bd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Cd(a) {
        a = zd(yd(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function Dd(a) {
        a = zd(yd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    var Ed = !!window.google_async_iframe_id, Fd = Ed && window.parent || window;

    function Gd() {
        if (Ed && !Yb(Fd)) {
            var a = "." + Qb.domain;
            try {
                for (; 2 < a.split(".").length && !Yb(Fd);) Qb.domain = a = a.substr(a.indexOf(".") + 1), Fd = window.parent
            } catch (b) {
            }
            Yb(Fd) || (Fd = window)
        }
        return Fd
    }

    var Hd = /(^| )adsbygoogle($| )/;

    function Id(a) {
        return zc && a.google_top_window || a.top
    }

    function Jd(a) {
        a = Id(a);
        return Yb(a) ? a : null
    };

    function J(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function K(a, b) {
        a:if (a = J(a).eids || [], a.indexOf) b = a.indexOf(b), b = 0 < b || 0 === b; else {
            for (var c = 0; c < a.length; c++) if (a[c] === b) {
                b = !0;
                break a
            }
            b = !1
        }
        return b
    }

    function Kd(a, b) {
        a = J(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function Ld(a) {
        J(C).allow_second_reactive_tag = a
    }

    function Md(a, b, c) {
        for (var d = 0; d < a.length; ++d) if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };var Nd = {},
        Od = (Nd.google_ad_client = !0, Nd.google_ad_host = !0, Nd.google_ad_host_channel = !0, Nd.google_adtest = !0, Nd.google_tag_for_child_directed_treatment = !0, Nd.google_tag_for_under_age_of_consent = !0, Nd.google_tag_partner = !0, Nd);

    function L(a) {
        w(this, a, Pd, null)
    }

    q(L, t);
    var Pd = [4];
    L.prototype.X = function () {
        return x(this, 3)
    };

    function M(a) {
        w(this, a, null, null)
    }

    q(M, t);

    function Qd(a) {
        w(this, a, null, Rd)
    }

    q(Qd, t);

    function Sd(a) {
        w(this, a, null, null)
    }

    q(Sd, t);

    function Td(a) {
        w(this, a, null, null)
    }

    q(Td, t);

    function Ud(a) {
        w(this, a, null, null)
    }

    q(Ud, t);
    var Rd = [[1, 2, 3]];

    function Vd(a) {
        w(this, a, null, null)
    }

    q(Vd, t);

    function Wd(a) {
        w(this, a, null, null)
    }

    q(Wd, t);

    function Xd(a) {
        w(this, a, Yd, null)
    }

    q(Xd, t);
    var Yd = [6, 7, 9, 10, 11];

    function Zd(a) {
        w(this, a, $d, null)
    }

    q(Zd, t);

    function ae(a) {
        w(this, a, null, null)
    }

    q(ae, t);

    function be(a) {
        w(this, a, ce, null)
    }

    q(be, t);

    function de(a) {
        w(this, a, null, null)
    }

    q(de, t);

    function ee(a) {
        w(this, a, null, null)
    }

    q(ee, t);

    function fe(a) {
        w(this, a, null, null)
    }

    q(fe, t);

    function ge(a) {
        w(this, a, null, null)
    }

    q(ge, t);
    var $d = [1, 2, 5, 7], ce = [2, 5, 6];
    var he = {overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5, full_page: 6};

    function ie(a, b) {
        a = a.replace(/(^\/)|(\/$)/g, "");
        var c = hc(a), d = je(a);
        return b.find(function (e) {
            var f = null != x(e, 7) ? x(A(e, de, 7), 1) : x(e, 1);
            e = null != x(e, 7) ? x(A(e, de, 7), 2) : 2;
            if (!qa(f)) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function je(a) {
        for (var b = {}; ;) {
            b[hc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function ke(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };var le = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function me(a, b) {
        this.a = a;
        this.b = b
    }

    function ne(a, b, c) {
        this.url = a;
        this.a = b;
        this.qa = !!c;
        this.depth = null
    };

    function oe() {
        this.f = "&";
        this.h = !1;
        this.b = {};
        this.i = 0;
        this.a = []
    }

    function pe(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function qe(a, b, c, d, e) {
        var f = [];
        gc(a, function (g, h) {
            (g = re(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function re(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(re(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(qe(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function se(a, b, c, d) {
        a.a.push(b);
        a.b[b] = pe(c, d)
    }

    function te(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = ue(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function (n, u) {
            return n - u
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++) for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
            if (!d) {
                c = null == c ? g : c;
                break
            }
            var m = qe(h[k], a.f, ",$");
            if (m) {
                m = e + m;
                if (d >= m.length) {
                    d -= m.length;
                    b += m;
                    e = a.f;
                    break
                } else a.h && (e = d, m[e - 1] == a.f && --e, b += m.substr(0, e), e = a.f, d = 0);
                c = null == c ? g : c
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function ue(a) {
        var b = 1, c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.f.length - 1
    };

    function ve() {
        var a = void 0 === a ? C : a;
        this.a = "http:" === a.location.protocol ? "http:" : "https:";
        this.b = Math.random()
    }

    function we(a, b, c, d, e, f) {
        if ((d ? a.b : Math.random()) < (e || .01)) try {
            if (c instanceof oe) var g = c; else g = new oe, gc(c, function (k, m) {
                var n = g, u = n.i++;
                k = pe(m, k);
                n.a.push(u);
                n.b[u] = k
            });
            var h = te(g, a.a, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? uc(h, null) : uc(h, void 0 === f ? null : f))
        } catch (k) {
        }
    };

    function xe(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function ye(a, b, c) {
        this.b = b >= a ? new xe(a, b) : null;
        this.a = c
    }

    function ze(a, b) {
        var c = -1;
        b = "google_experiment_mod" + (void 0 === b ? "" : b);
        try {
            a.localStorage && (c = parseInt(a.localStorage.getItem(b), 10))
        } catch (d) {
            return null
        }
        if (0 <= c && 1E3 > c) return c;
        if (ec()) return null;
        c = Math.floor(1E3 * fc(a));
        try {
            if (a.localStorage) return a.localStorage.setItem(b, "" + c), c
        } catch (d) {
        }
        return null
    };var Ae = null;

    function Be() {
        if (null === Ae) {
            Ae = "";
            try {
                var a = "";
                try {
                    a = p.top.location.hash
                } catch (c) {
                    a = p.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ae = b ? b[1] : ""
                }
            } catch (c) {
            }
        }
        return Ae
    };

    function Ce() {
        var a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function De() {
        var a = void 0 === a ? p : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ee(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };var Fe = p.performance, Ge = !!(Fe && Fe.mark && Fe.measure && Fe.clearMarks), He = Ra(function () {
        var a;
        if (a = Ge) a = Be(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });

    function Ie() {
        var a = Je;
        this.b = [];
        this.f = a || p;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = He() || (null != b ? b : 1 > Math.random())
    }

    function Ke(a) {
        a && Fe && He() && (Fe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Fe.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }

    Ie.prototype.start = function (a, b) {
        if (!this.a) return null;
        var c = De() || Ce();
        a = new Ee(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Fe && He() && Fe.mark(b);
        return a
    };

    function Le() {
        var a = Me;
        this.w = Ne;
        this.h = !0;
        this.a = null;
        this.s = this.b;
        this.f = void 0 === a ? null : a;
        this.i = !1
    }

    function Oe(a, b, c, d) {
        try {
            if (a.f && a.f.a) {
                var e = a.f.start(b.toString(), 3);
                var f = c();
                var g = a.f;
                c = e;
                if (g.a && "number" === typeof c.value) {
                    var h = De() || Ce();
                    c.duration = h - c.value;
                    var k = "goog_" + c.label + "_" + c.uniqueId + "_end";
                    Fe && He() && Fe.mark(k);
                    !g.a || 2048 < g.b.length || g.b.push(c)
                }
            } else f = c()
        } catch (m) {
            g = a.h;
            try {
                Ke(e), g = a.s(b, new ke(m, {message: Pe(m)}), void 0, d)
            } catch (n) {
                a.b(217, n)
            }
            if (!g) throw m;
        }
        return f
    }

    function Qe(a, b, c, d, e) {
        return function (f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return Oe(a, b, function () {
                return c.apply(d, g)
            }, e)
        }
    }

    Le.prototype.b = function (a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new oe;
            f.h = !0;
            se(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ke(b, {message: Pe(b)}));
            b.msg && se(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.a) try {
                this.a(g)
            } catch (G) {
            }
            if (d) try {
                d(g)
            } catch (G) {
            }
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            d = p;
            b = [];
            g = null;
            do {
                var h = d;
                if (Yb(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new ne(k || "", h));
                try {
                    d = h.parent
                } catch (G) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
            h = p;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1) for (m = 1; m < b.length; ++m) {
                var n = b[m];
                n.url || (n.url = h.location.ancestorOrigins[m - 1] || "", n.qa = !0)
            }
            var u = new ne(p.location.href, p, !1);
            h = null;
            var v = b.length - 1;
            for (n = v; 0 <= n; --n) {
                var y = b[n];
                !h && le.test(y.url) && (h = y);
                if (y.url && !y.qa) {
                    u = y;
                    break
                }
            }
            y = null;
            var H = b.length && b[v].url;
            0 != u.depth && H && (y = b[v]);
            var E = new me(u, y);
            E.b && se(f, 4, "top", E.b.url || "");
            se(f, 5, "url", E.a.url || "");
            we(this.w, e, f, this.i, c)
        } catch (G) {
            try {
                we(this.w, e, {context: "ecmserr", rctx: a, msg: Pe(G), url: E && E.a.url}, this.i, c)
            } catch (rb) {
            }
        }
        return this.h
    };

    function Pe(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {
            }
        }
        return b
    };

    function N(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, N) : this.stack = Error().stack || ""
    }

    ka(N, Error);
    var Ne, Re, Se, Je = Gd(), Me = new Ie;

    function Te(a) {
        null != a && (Je.google_measure_js_timing = a);
        Je.google_measure_js_timing || (a = Me, a.a = !1, a.b != a.f.google_js_reporting_queue && (He() && Ja(a.b, Ke), a.b.length = 0))
    }

    function Ue(a) {
        var b = C.jerExpIds;
        if (za(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = ca(c.split(",")).concat(ca(b));
                c = {};
                for (var d = 0, e = 0; e < b.length;) {
                    var f = b[e++];
                    var g = f;
                    g = Aa(g) ? "o" + Ba(g) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else a.eid = b.join(",")
        }
    }

    (function () {
        Ne = new ve;
        Re = new Le;
        Re.a = function (b) {
            Ue(b);
            Se && (b.jc = Se)
        };
        "complete" == Je.document.readyState ? Te() : Me.a && tc(Je, "load", function () {
            Te()
        });
        var a = Qb.currentScript;
        Se = a ? a.dataset.jc : ""
    })();

    function Ve() {
        var a = [We, Xe];
        Re.a = function (b) {
            Ja(a, function (c) {
                c(b)
            });
            Ue(b);
            Se && (b.jc = Se)
        }
    }

    function Ye(a, b, c) {
        return Oe(Re, a, b, c)
    }

    function Ze(a, b) {
        return Qe(Re, a, b, void 0, void 0)
    }

    function $e(a, b, c) {
        we(Ne, a, b, "jserror" != a, c, void 0)
    }

    function af(a, b, c, d) {
        return 0 == (b.error && b.meta && b.id ? b.msg || Pe(b.error) : Pe(b)).indexOf("TagError") ? (Re.i = !0, c = b instanceof ke ? b.error : b, c.pbr || (c.pbr = !0, Re.b(a, b, .1, d, "puberror")), !1) : Re.b(a, b, c, d)
    }

    function bf(a) {
        $e("rmvasft", {code: "ldr", branch: a ? "exp" : "cntr"})
    };

    function cf(a, b) {
        this.oa = a;
        this.ua = b
    }

    function df(a) {
        var b = [].slice.call(arguments).filter(Qa());
        if (!b.length) return null;
        var c = [], d = {};
        b.forEach(function (e) {
            c = c.concat(e.oa || []);
            d = Object.assign(d, e.ua)
        });
        return new cf(c, d)
    }

    function ef(a) {
        switch (a) {
            case 1:
                return new cf(null, {google_ad_semantic_area: "mc"});
            case 2:
                return new cf(null, {google_ad_semantic_area: "h"});
            case 3:
                return new cf(null, {google_ad_semantic_area: "f"});
            case 4:
                return new cf(null, {google_ad_semantic_area: "s"});
            default:
                return null
        }
    };var ff = new cf(["google-auto-placed"], {google_tag_origin: "qs"});
    var gf = {}, hf = (gf.google_ad_channel = !0, gf.google_ad_host = !0, gf);

    function jf(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        $e("ama", b, .01)
    }

    function kf(a) {
        var b = {};
        gc(hf, function (c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };var lf = vc("2012", 2012);

    function mf(a, b, c) {
        c || (c = Bc ? "https" : "http");
        p.location && "https:" == p.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }

    function nf(a, b, c) {
        a = mf(a, b, c);
        xd(182) && 2012 < lf && (a = a.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + lf + ".js").replace(/\$/g, "$$$$")));
        xd(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    };var of = null;

    function pf() {
        if (!zc) return !1;
        if (null != of) return of;
        of = !1;
        try {
            var a = Jd(p);
            a && -1 != a.location.hash.indexOf("google_logging") && (of = !0);
            p.localStorage.getItem("google_logging") && (of = !0)
        } catch (b) {
        }
        return of
    }

    function qf(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        c && pf() && (a = nf(Cc(), "/pagead/js/logging_library.js"), ac(p.document, a))
    };

    function rf(a, b, c) {
        this.a = a;
        this.b = b;
        this.f = c
    };

    function sf(a) {
        w(this, a, null, null)
    }

    q(sf, t);

    function tf(a) {
        w(this, a, null, null)
    }

    q(tf, t);

    function uf(a) {
        w(this, a, vf, null)
    }

    q(uf, t);
    var vf = [5];

    function wf(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? new uf(b ? JSON.parse(b) : null) : null
        } catch (c) {
            return null
        }
    };

    function xf() {
    };var yf = {rectangle: 1, horizontal: 2, vertical: 4};
    var zf = {
        9: "400",
        10: "100",
        13: "0.001",
        22: "0.01",
        24: "0.05",
        28: "0.001",
        29: "0.01",
        34: "0.001",
        60: "0.03",
        66: "0.1",
        78: "0.1",
        79: "1200",
        82: "3",
        96: "700",
        97: "20",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        111: "0.1",
        118: "false",
        120: "0",
        121: "1000",
        126: "0.001",
        128: "false",
        129: "0.02",
        135: "0.01",
        136: "0.02",
        137: "0.01",
        142: "1",
        149: "0",
        150: "1000",
        152: "700",
        153: "20",
        155: "0.06",
        157: "1",
        158: "100",
        160: "250",
        161: "150",
        162: "0.1",
        165: "0.02",
        173: "800",
        174: "2",
        176: "0",
        177: "0.02",
        179: "100",
        180: "20",
        182: "0.1",
        185: "0.4",
        189: "400",
        190: "60",
        191: "0.04",
        192: "0",
        193: "500",
        194: "0",
        197: "true",
        202: "0",
        203: "1000"
    };
    var Af = null;

    function Bf() {
        this.a = zf
    }

    function O(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    }

    function Cf() {
        var a = Df();
        return lc(a.a[197], !1)
    }

    function Df() {
        Af || (Af = new Bf);
        return Af
    };

    function Ef() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.adRegion = null;
        this.improveCollisionDetection = 1;
        this.messageValidationEnabled = !1
    }

    function Ff(a) {
        a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new Ef);
        return a.google_reactive_ads_global_state
    };

    function Gf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function P(a) {
        return Gf(a).clientWidth
    };

    function Hf(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = D(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function If(a, b) {
        return !((jc.test(b.google_ad_width) || ic.test(a.style.width)) && (jc.test(b.google_ad_height) || ic.test(a.style.height)))
    }

    function Jf(a, b) {
        return (a = Kf(a, b)) ? a.y : 0
    }

    function Kf(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(), d = a.getBoundingClientRect();
            return {x: d.left - c.left, y: d.top - c.top}
        } catch (e) {
            return null
        }
    }

    function Lf(a, b) {
        do {
            var c = bc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function Mf(a) {
        var b = 0, c;
        for (c in yf) -1 != a.indexOf(c) && (b |= yf[c]);
        return b
    }

    function Nf(a, b, c, d, e) {
        if (Id(a) != a) return Jd(a) ? 3 : 16;
        if (!(488 > P(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = P(a);
        if (!f || (f - c) / f > d) a = 6; else {
            if (c = "true" != e.google_full_width_responsive) a:{
                c = P(a);
                for (b = b.parentElement; b; b = b.parentElement) if ((d = bc(b, a)) && (e = D(d.width)) && !(e >= c) && "visible" != d.overflow) {
                    c = !0;
                    break a
                }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Of(a, b, c, d) {
        var e = Nf(b, c, a, .3, d);
        if (!0 !== e) return e;
        e = P(b);
        a = e - a;
        a = e && 0 <= a ? !0 : e ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10;
        return "true" == d.google_full_width_responsive || Lf(c, b) ? a : 9
    }

    function Pf(a, b, c) {
        "rtl" == b ? a.style.marginRight = c : a.style.marginLeft = c
    }

    function Qf(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = bc(b, a)
            } catch (d) {
            }
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Rf(a, b, c) {
        a = Kf(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Sf(a, b, c, d, e, f) {
        if (xd(189) || a.location && "#hffwroe2etoh" == a.location.hash) {
            if (e = b.parentElement) if (e = bc(e, a)) {
                b.style.width = P(a) + "px";
                e = e.direction;
                Pf(b, e, "0px");
                var g = Rf(a, b, e);
                Pf(b, e, -1 * g + "px");
                a = Rf(a, b, e);
                0 !== a && a !== g && Pf(b, e, g / (a - g) * g + "px");
                b.style.zIndex = 30
            }
        } else if (a = bc(c, a)) {
            g = D(a.paddingLeft) || 0;
            a = a.direction;
            d = e - d;
            if (f.google_ad_resize) g = -1 * (d + g) + "px"; else {
                for (var h = f = 0; 100 > h && c; h++) f += c.offsetLeft + c.clientLeft - c.scrollLeft, c = c.offsetParent;
                g = f + g;
                g = "rtl" == a ? -1 * (d - g) + "px" : -1 * g + "px"
            }
            Pf(b, a, g);
            b.style.width = e + "px";
            b.style.zIndex = 30
        }
    };

    function Q(a, b) {
        this.b = a;
        this.a = b
    }

    l = Q.prototype;
    l.minWidth = function () {
        return this.b
    };
    l.height = function () {
        return this.a
    };
    l.M = function (a) {
        return 300 < a && 300 < this.a ? this.b : Math.min(1200, Math.round(a))
    };
    l.ea = function (a) {
        return this.M(a) + "x" + this.height()
    };
    l.Z = function () {
    };

    function Tf(a, b, c, d) {
        d = void 0 === d ? function (f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = bc(a, b)) && e[c] && d(e[c]) || null
    }

    function Uf(a) {
        return function (b) {
            return b.minWidth() <= a
        }
    }

    function Vf(a, b, c, d) {
        var e = a && Wf(c, b), f = Xf(b, d);
        return function (g) {
            return !(e && g.height() >= f)
        }
    }

    function Yf(a) {
        return function (b) {
            return b.height() <= a
        }
    }

    function Wf(a, b) {
        return Jf(a, b) < Gf(b).clientHeight - 100
    }

    function Zf(a, b) {
        a = Jf(a, b);
        b = Gf(b).clientHeight;
        return 0 == b ? null : a / b
    }

    function $f(a, b) {
        var c = Infinity;
        do {
            var d = Tf(b, a, "height", D);
            d && (c = Math.min(c, d));
            (d = Tf(b, a, "maxHeight", D)) && (c = Math.min(c, d))
        } while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function ag(a, b) {
        var c = Tf(b, a, "height", D);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Tf(b, a, "height", D);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do (d = b.style && D(b.style.height)) && (c = Math.min(c, d)), (d = Tf(b, a, "maxHeight", D)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Xf(a, b) {
        var c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * Gf(a).clientHeight / 3) : 250
    };

    function cg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function dg(a) {
        if (1 != a.nodeType) var b = !1; else if (b = "INS" == a.tagName) a:{
            b = ["adsbygoogle-placeholder"];
            a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d) if (!c[b[d]]) {
                b = !1;
                break a
            }
            b = !0
        }
        return b
    };

    function eg(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = Ab(d.ab);
            a[e] = d.value
        }
    };var fg = null;

    function gg() {
        if (!fg) {
            for (var a = p, b = a, c = 0; a && a != a.parent;) if (a = a.parent, c++, Yb(a)) b = a; else break;
            fg = b
        }
        return fg
    };

    function hg(a, b, c, d) {
        this.h = a;
        this.b = b;
        this.f = c;
        this.a = d
    }

    function ig(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.h)
        } catch (g) {
        }
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = jg(a, b);
        qa(a.b) && (c = a.b, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if (qa(a.f)) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = kg(b[d]);
                var f = a.f;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }

    hg.prototype.toString = function () {
        return JSON.stringify({
            nativeQuery: this.h,
            occurrenceIndex: this.b,
            paragraphIndex: this.f,
            ignoreMode: this.a
        })
    };

    function jg(a, b) {
        if (null == a.a) return b;
        switch (a.a) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.a);
        }
    }

    function kg(a) {
        var b = [];
        cg(a.getElementsByTagName("p"), function (c) {
            100 <= lg(c) && b.push(c)
        });
        return b
    }

    function lg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        cg(a.childNodes, function (c) {
            b += lg(c)
        });
        return b
    }

    function mg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function ng(a) {
        if (!a) return null;
        var b = x(a, 7);
        if (x(a, 1) || a.X() || 0 < x(a, 4).length) {
            var c = a.X(), d = x(a, 1), e = x(a, 4);
            b = x(a, 2);
            var f = x(a, 5);
            a = og(x(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + mg(c));
            if (e) for (c = 0; c < e.length; c++) g += "." + mg(e[c]);
            b = (e = g) ? new hg(e, b, f, a) : null
        } else b = b ? new hg(b, x(a, 2), x(a, 5), og(x(a, 6))) : null;
        return b
    }

    var pg = {1: 1, 2: 2, 3: 3, 0: 0};

    function og(a) {
        return null != a ? pg[a] : a
    }

    var qg = {1: 0, 2: 1, 3: 2, 4: 3};

    function rg() {
        this.a = {};
        this.b = {}
    }

    rg.prototype.add = function (a) {
        this.a[a] = !0;
        this.b[a] = a
    };
    rg.prototype.contains = function (a) {
        return !!this.a[a]
    };

    function sg() {
        this.a = {};
        this.b = {}
    }

    sg.prototype.set = function (a, b) {
        this.a[a] = b;
        this.b[a] = a
    };
    sg.prototype.get = function (a, b) {
        return void 0 !== this.a[a] ? this.a[a] : b
    };

    function tg() {
        this.a = new sg
    }

    tg.prototype.set = function (a, b) {
        var c = this.a.get(a);
        c || (c = new rg, this.a.set(a, c));
        c.add(b)
    };

    function ug(a, b) {
        function c() {
            d.push({anchor: e.anchor, position: e.position});
            return e.anchor == b.anchor && e.position == b.position
        }

        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {anchor: e.anchor.firstChild, position: 1};
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {anchor: e.anchor.parentNode, position: 3};
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {anchor: e.anchor.nextSibling, position: 1} : e = null
        }
        return d
    };

    function vg(a, b) {
        this.b = a;
        this.a = b
    }

    function wg(a, b) {
        var c = new tg, d = new rg;
        b.forEach(function (e) {
            if (A(e, Sd, 1)) {
                e = A(e, Sd, 1);
                if (A(e, M, 1) && A(A(e, M, 1), L, 1) && A(e, M, 2) && A(A(e, M, 2), L, 1)) {
                    var f = xg(a, A(A(e, M, 1), L, 1)), g = xg(a, A(A(e, M, 2), L, 1));
                    if (f && g) for (f = ba(ug({anchor: f, position: x(A(e, M, 1), 2)}, {
                        anchor: g,
                        position: x(A(e, M, 2), 2)
                    })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ba(g.anchor), g.position)
                }
                A(e, M, 3) && A(A(e, M, 3), L, 1) && (f = xg(a, A(A(e, M, 3), L, 1))) && c.set(Ba(f), x(A(e, M, 3), 2))
            } else A(e, Td, 2) ? yg(a, A(e, Td, 2), c) : A(e, Ud, 3) && zg(a, A(e, Ud, 3), d)
        });
        return new vg(c, d)
    }

    function yg(a, b, c) {
        A(b, L, 1) && (a = Ag(a, A(b, L, 1))) && a.forEach(function (d) {
            d = Ba(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function zg(a, b, c) {
        A(b, L, 1) && (a = Ag(a, A(b, L, 1))) && a.forEach(function (d) {
            c.add(Ba(d))
        })
    }

    function xg(a, b) {
        return (a = Ag(a, b)) && 0 < a.length ? a[0] : null
    }

    function Ag(a, b) {
        return (b = ng(b)) ? ig(b, a) : null
    };

    function Bg(a, b) {
        var c = b.b - 301, d = b.a + b.f + 301, e = b.b + 301, f = b.a - 301;
        return !Ma(a, function (g) {
            return g.left < d && f < g.right && g.top < e && c < g.bottom
        })
    };

    function Cg(a, b) {
        if (!a) return !1;
        a = bc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Dg(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Eg(a) {
        return !!a.nextSibling || !!a.parentNode && Eg(a.parentNode)
    };

    function Fg(a, b) {
        return a && null != x(a, 4) && b[x(A(a, Wd, 4), 2)] ? !1 : !0
    }

    function Gg(a) {
        var b = {};
        a && x(a, 6).forEach(function (c) {
            b[c] = !0
        });
        return b
    }

    function Hg(a, b, c, d) {
        this.a = p;
        this.$ = a;
        this.f = b;
        this.i = d || null;
        this.s = (this.w = c) ? wg(p.document, B(c, Qd, 5)) : wg(p.document, []);
        this.b = 0;
        this.h = !1
    }

    function Ig(a, b) {
        if (a.h) return !0;
        a.h = !0;
        var c = B(a.f, Xd, 1);
        a.b = 0;
        var d = Gg(a.w);
        if (A(a.f, ge, 15) && Ib(A(a.f, ge, 15), 12)) {
            var e = wf(a.a);
            e = null === e ? null : B(e, tf, 5);
            if (null != e) {
                var f = wf(a.a);
                f = null !== f && null != x(f, 3) && null !== Gb(f, 3) ? Gb(f, 3) : .3;
                var g = wf(a.a);
                g = null !== g && null != x(g, 4) ? Gb(g, 4) : 1;
                f -= g;
                g = [];
                for (var h = 0; h < e.length && .05 <= f && 4 > (Jg(a).numAutoAdsPlaced || 0); h++) {
                    var k = x(e[h], 1);
                    if (null == k) break;
                    var m = c[k], n = A(e[h], sf, 2);
                    null != n && null != Gb(n, 1) && null != Gb(n, 2) && null != Gb(n, 3) && (n = new rf(Gb(n, 1), Gb(n, 2), Gb(n, 3)), Bg(g, n) && (k = Kg(a, m, k, b, d), null != k && null != k.V && (k = k.V.getBoundingClientRect(), g.push(k), m = a.a, f -= k.width * k.height / (Gf(m).clientHeight * P(m)))))
                }
            }
            return !0
        }
        e = wf(a.a);
        if (null !== e && Ib(e, 2)) return Jg(a).eatf = !0, qf(7, [!0, 0, !1]), !0;
        for (e = 0; e < c.length; e++) if (Kg(a, c[e], e, b, d)) return !0;
        qf(7, [!1, a.b, !1]);
        return !1
    }

    function Kg(a, b, c, d, e) {
        if (1 !== x(b, 8) || !Fg(b, e)) return null;
        var f = A(b, Wd, 4);
        if (f && 2 == x(f, 1)) {
            a.b++;
            if (b = Lg(a, b, d, e)) d = Jg(a), d.placement = c, d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0), d.numAutoAdsPlaced++, qf(7, [!1, a.b, !0]);
            return b
        }
        return null
    }

    function Lg(a, b, c, d) {
        if (!Fg(b, d) || 1 != x(b, 8)) return null;
        d = A(b, L, 1);
        if (!d) return null;
        d = ng(d);
        if (!d) return null;
        d = ig(d, a.a.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = x(b, 2);
        e = qg[e];
        e = void 0 !== e ? e : null;
        var f;
        if (!(f = null == e)) {
            a:{
                f = a.a;
                switch (e) {
                    case 0:
                        f = Cg(Dg(d), f);
                        break a;
                    case 3:
                        f = Cg(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Cg(g ? 1 == g.nodeType ? g : Dg(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Eg(d))) c = 1 == e || 2 == e ? d : d.parentNode, c = !(c && !dg(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.s;
            f = x(b, 2);
            g = Ba(d);
            g = c.b.a.get(g);
            if (!(g = g ? g.contains(f) : !1)) a:{
                if (c.a.contains(Ba(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.a.contains(Ba(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        f = A(b, Vd, 3);
        c = {};
        f && (c.za = x(f, 1), c.na = x(f, 2), c.Ia = !!Hb(f, 3));
        f = A(b, Wd, 4) && x(A(b, Wd, 4), 2) ? x(A(b, Wd, 4), 2) : null;
        f = ef(f);
        b = null == x(b, 12) ? null : x(b, 12);
        b = df(a.i, f, null == b ? null : new cf(null, {google_ml_rank: b}));
        f = a.a;
        a = a.$;
        var h = f.document;
        g = Tb((new Ub(h)).a, "DIV");
        var k = g.style;
        k.textAlign = "center";
        k.width = "100%";
        k.height = "auto";
        k.clear = c.Ia ? "both" : "none";
        c.Qa && eg(k, c.Qa);
        h = Tb((new Ub(h)).a, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.za && (k.marginTop = c.za);
        c.na && (k.marginBottom = c.na);
        c.Ga && eg(k, c.Ga);
        g.appendChild(h);
        c = {da: g, V: h};
        c.V.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.oa) c.da.className = h.join(" ");
        h = c.V;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a:{
            try {
                var m = c.da;
                switch (e) {
                    case 0:
                        d.parentNode && d.parentNode.insertBefore(m, d);
                        break;
                    case 3:
                        var n = d.parentNode;
                        if (n) {
                            var u = d.nextSibling;
                            if (u && u.parentNode != n) for (; u && 8 == u.nodeType;) u = u.nextSibling;
                            n.insertBefore(m, u)
                        }
                        break;
                    case 1:
                        d.insertBefore(m, d.firstChild);
                        break;
                    case 2:
                        d.appendChild(m)
                }
                dg(d) && (d.setAttribute("data-init-display", d.style.display), d.style.display = "block");
                b:{
                    var v = c.V;
                    v.setAttribute("data-adsbygoogle-status", "reserved");
                    v.className += " adsbygoogle-noablate";
                    m = {element: v};
                    var y = b && b.ua;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            y = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (H) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    y && (m.params = y);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (H) {
                (v = c.da) && v.parentNode && (y = v.parentNode, y.removeChild(v), dg(y) && (y.style.display = y.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }

    function Jg(a) {
        return a.a.google_ama_state = a.a.google_ama_state || {}
    };

    function Mg() {
        this.b = new Ng(this);
        this.a = 0
    }

    function Og(a) {
        if (0 != a.a) throw Error("Already resolved/rejected.");
    }

    function Ng(a) {
        this.a = a
    }

    function Pg(a) {
        switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.b && a.b(a.a.h);
                break;
            case 2:
                a.f && a.f(a.a.f);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Qg(a, b) {
        this.exception = b
    }

    function Rg(a, b) {
        this.f = p;
        this.a = a;
        this.b = b
    }

    Rg.prototype.start = function () {
        this.h()
    };
    Rg.prototype.h = function () {
        try {
            switch (this.f.document.readyState) {
                case "complete":
                case "interactive":
                    Ig(this.a, !0);
                    Sg(this);
                    break;
                default:
                    Ig(this.a, !1) ? Sg(this) : this.f.setTimeout(Ga(this.h, this), 100)
            }
        } catch (a) {
            Sg(this, a)
        }
    };

    function Sg(a, b) {
        try {
            var c = a.b, d = new Qg(new xf(Jg(a.a).numAutoAdsPlaced || 0), b);
            Og(c);
            c.a = 1;
            c.h = d;
            Pg(c.b)
        } catch (e) {
            a = a.b, b = e, Og(a), a.a = 2, a.f = b, Pg(a.b)
        }
    };

    function Tg(a) {
        jf(a, {atf: 1})
    }

    function Ug(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        jf(a, {atf: 0})
    };

    function Vg() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function Wg(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Xg(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Xg(a) {
        var b = "";
        Ad(a.split("_"), function (c) {
            b += c.substr(0, 2)
        });
        return b
    };

    function Yg(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload";
            if (gb("preload", "stylesheet")) var f = b.aa ? b.aa : Za(b).toString(); else {
                if (b instanceof Wa) var g = b.aa ? b.aa : Za(b).toString(); else {
                    if (b instanceof jb) var h = mb(b); else {
                        if (b instanceof jb) var k = b; else b = "object" == typeof b && b.b ? b.a() : String(b), nb.test(b) || (b = "about:invalid#zClosurez"), k = new jb(kb, b);
                        h = mb(k)
                    }
                    g = h
                }
                f = g
            }
            e.href = f
        } catch (m) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (m) {
        }
    };

    function Zg(a) {
        var b = {}, c = {};
        return c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c
    };

    function $g(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function ah(a, b) {
        function c(d) {
            try {
                var e = new Mb(d);
                return Na(B(e, Ob, 2), function (f) {
                    return 1 == x(f, 1)
                })
            } catch (f) {
                return null
            }
        }

        b = void 0 === b ? "" : b;
        a = Jd(a) || a;
        a = bh(a);
        return b ? (b = $g(String(b)), a[b] ? c(a[b]) : null) : Na(La(Ua(a), c), function (d) {
            return null != d
        })
    }

    function ch(a, b, c) {
        function d(e) {
            if (!e) return !1;
            e = new Mb(e);
            return x(e, 3) && Pa(x(e, 3), b)
        }

        c = void 0 === c ? "" : c;
        a = Jd(a) || a;
        if (dh(a, b)) return !0;
        a = bh(a);
        return c ? (c = $g(String(c)), d(a[c])) : Ta(a, d)
    }

    function dh(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Pa(a.split(","), b.toString())
    }

    function bh(a) {
        try {
            return oc({}, JSON.parse(a.localStorage.getItem("google_adsense_settings")))
        } catch (b) {
            return {}
        }
    };

    function eh() {
        this.a = function () {
            return []
        };
        this.b = function () {
            return []
        }
    }

    function fh(a, b) {
        a.a = sd(fd, b, function () {
        });
        a.b = sd(gd, b, function () {
            return []
        })
    }

    wa(eh);
    var gh = {c: "368226950", g: "368226951"}, hh = {c: "368226960", g: "368226961"},
        ih = {c: "368226470", U: "368226471"}, jh = {c: "368226480", U: "368226481"},
        kh = {c: "332260030", R: "332260031", P: "332260032"}, lh = {c: "332260040", R: "332260041", P: "332260042"},
        mh = {c: "368226500", g: "368226501"}, nh = {c: "36998750", g: "36998751"},
        R = {c: "633794000", B: "633794004"}, oh = {c: "633794002", B: "633794005"},
        ph = {c: "231196899", g: "231196900"}, qh = {c: "231196901", g: "231196902"},
        rh = {c: "21063914", g: "21063915"}, sh = {c: "4089040", Da: "4089042"},
        th = {o: "20040067", c: "20040068", la: "1337"}, uh = {c: "21060548", o: "21060549"},
        vh = {c: "21060623", o: "21060624"}, wh = {c: "22324606", g: "22324607"}, xh = {c: "21062271", o: "21062272"},
        yh = {c: "182982000", g: "182982100"}, zh = {c: "182982200", g: "182982300"},
        Ah = {c: "182983000", g: "182983100"}, Bh = {c: "182983200", g: "182983300"},
        Ch = {c: "182984000", g: "182984100"}, Dh = {c: "182984200", g: "182984300"},
        Eh = {c: "229739148", g: "229739149"}, Fh = {c: "229739146", g: "229739147"},
        Gh = {c: "20040012", g: "20040013"},
        Hh = {c: "151527201", T: "151527221", L: "151527222", K: "151527223", I: "151527224", J: "151527225"},
        S = {c: "151527001", T: "151527021", L: "151527022", K: "151527023", I: "151527024", J: "151527025"},
        Ih = {c: "151527002", Ea: "151527006", ba: "151527007"};

    function Jh(a) {
        var b = ch(p, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = K(p, gh.g), d = Wg(p.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Kh(a) {
        if (p.google_apltlad || Id(p) != p || !a.google_ad_client) return null;
        var b = Jh(a), c = !K(p, ih.U);
        if (!b && !c) return null;
        p.google_apltlad = !0;
        var d = Zg(a.google_ad_client), e = d.enable_page_level_ads;
        gc(a, function (f, g) {
            Od[g] && "google_ad_client" != g && (e[g] = f)
        });
        b ? e.google_ad_channel = "AutoInsertAutoAdCode" : c && (e.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) && (e.google_ad_section = a.google_ad_section || a.google_ad_region);
        return d
    }

    function Lh(a) {
        return Aa(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
    };

    function Xe(a) {
        try {
            var b = J(p).eids || [];
            null != b && 0 < b.length && (a.eid = b.join(","))
        } catch (c) {
        }
    }

    function We(a) {
        a.shv = yc()
    }

    Re.h = !zc;

    function Mh(a, b) {
        return Jf(b, a) + Tf(b, a, "height", D)
    };var Nh = new ye(200, 399, ""), Oh = new ye(400, 499, ""), Ph = new ye(600, 699, ""), Qh = new ye(700, 799, ""),
        Rh = new ye(800, 899, ""), Sh = new ye(1, 399, "3"), Th = new ye(0, 999, "5"), Uh = new ye(400, 499, "6"),
        Vh = new ye(0, 999, "10");

    function Wh(a) {
        a = void 0 === a ? p : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Xh() {
        var a = {};
        this[3] = (a[8] = function (b) {
            return !!ua(b)
        }, a[9] = function (b) {
            b = ua(b);
            var c;
            if (c = "function" == xa(b)) b = b && b.toString && b.toString(), c = "string" === typeof b && gb(b, "[native code]");
            return c
        }, a[10] = function () {
            return window == window.top
        }, a[16] = function () {
            return sc()
        }, a[22] = function () {
            return rc()
        }, a);
        a = {};
        this[4] = (a[5] = function (b) {
            b = ze(window, void 0 === b ? "" : b);
            return null != b ? b : void 0
        }, a[6] = function (b) {
            b = ua(b);
            return "number" === typeof b ? b : void 0
        }, a);
        a = {};
        this[5] = (a[2] = function () {
            return window.location.href
        }, a[3] = function () {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function (b) {
            b = ua(b);
            return "string" === typeof b ? b : void 0
        }, a)
    }

    wa(Xh);

    function Yh(a) {
        w(this, a, Zh, null)
    }

    q(Yh, t);
    var Zh = [2];
    Yh.prototype.X = function () {
        return z(this, 1, 0)
    };
    Yh.prototype.W = function () {
        return z(this, 7, 0)
    };

    function $h(a) {
        w(this, a, ai, null)
    }

    q($h, t);
    var ai = [2];
    $h.prototype.W = function () {
        return z(this, 5, 0)
    };

    function bi(a) {
        w(this, a, ci, null)
    }

    q(bi, t);

    function di(a) {
        w(this, a, ei, null)
    }

    q(di, t);
    var ci = [1, 2], ei = [2];
    di.prototype.W = function () {
        return z(this, 1, 0)
    };
    var fi = [12, 13];

    function gi(a, b) {
        var c = this, d = void 0 === b ? {} : b;
        b = void 0 === d.Ka ? !1 : d.Ka;
        var e = void 0 === d.Pa ? {} : d.Pa;
        d = void 0 === d.Ya ? [] : d.Ya;
        this.a = a;
        this.i = b;
        this.f = e;
        this.h = d;
        this.b = {};
        (a = Be()) && Ja(a.split(",") || [], function (f) {
            (f = parseInt(f, 10)) && (c.b[f] = !0)
        })
    }

    function hi(a, b) {
        var c = [], d = ii(a.a, b);
        d.length && (9 !== b && (a.a = ji(a.a, b)), Ja(d, function (e) {
            if (e = ki(a, e)) {
                var f = e.X();
                c.push(f);
                a.h.push(f);
                (e = B(e, Nc, 2)) && cd(e)
            }
        }));
        return c
    }

    function li(a, b) {
        a.a.push.apply(a.a, ca(Ka(La(b, function (c) {
            return new di(c)
        }), function (c) {
            return !Pa(fi, c.W())
        })))
    }

    function ki(a, b) {
        var c = Rc.j().a;
        if (!Kc(A(b, Dc, 3), c)) return null;
        var d = B(b, Yh, 2), e = c ? Ka(d, function (g) {
            return Kc(A(g, Dc, 3), c)
        }) : d, f = e.length;
        if (!f) return null;
        d = z(b, 4, 0);
        b = f * z(b, 1, 0);
        if (!d) return mi(a, e, b / 1E3);
        f = null != a.f[d] ? a.f[d] : 1E3;
        if (0 >= f) return null;
        e = mi(a, e, b / f);
        a.f[d] = e ? 0 : f - b;
        return e
    }

    function mi(a, b, c) {
        var d = a.b, e = Na(b, function (f) {
            return !!d[f.X()]
        });
        return e ? e : a.i ? null : cc(b, c, !1)
    }

    function ni(a, b) {
        I(ed, function (c) {
            a.b[c] = !0
        }, b);
        I(fd, function (c) {
            return hi(a, c)
        }, b);
        I(gd, function () {
            return a.h
        }, b);
        I(pd, function (c) {
            return li(a, c)
        }, b)
    }

    function ii(a, b) {
        return (a = Na(a, function (c) {
            return c.W() == b
        })) && B(a, $h, 2) || []
    }

    function ji(a, b) {
        return Ka(a, function (c) {
            return c.W() != b
        })
    };

    function oi() {
        this.a = function () {
        }
    }

    wa(oi);

    function pi() {
        var a = Xh.j();
        oi.j().a(a)
    };

    function qi(a, b) {
        var c = void 0 === c ? Wh() : c;
        c.hasOwnProperty("init-done") ? (sd(pd, c)(La(B(a, di, 2), function (d) {
            return Lb(d)
        })), sd(qd, c)(La(B(a, Nc, 1), function (d) {
            return Lb(d)
        })), ri(c)) : (ni(new gi(B(a, di, 2), b), c), td(c), ud(c), vd(c), ri(c), cd(B(a, Nc, 1)), pi())
    }

    function ri(a) {
        var b = a = void 0 === a ? Wh() : a;
        fh(eh.j(), b);
        b = a;
        wd.j().a = sd(id, b);
        oi.j().a = sd(rd, a)
    };

    function T(a, b) {
        b && a.push(b)
    }

    function si(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = Jd(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        return !!d && Ma(c, Ha(gb, d))
    }

    function ti(a, b, c) {
        for (var d = 0; d < c.length; d++) if (si(a, c[d])) return c[d];
        return cc(c, b)
    }

    function ui(a, b, c, d, e, f) {
        f = void 0 === f ? 1 : f;
        for (var g = 0; g < e.length; g++) if (si(a, e[g])) return e[g];
        f = void 0 === f ? 1 : f;
        0 >= d ? c = null : (g = new xe(c, c + d - 1), (d = d % f || d / f % e.length) || (d = b.b, d = !(d.start <= g.start && d.a >= g.a)), d ? c = null : (a = ze(a, b.a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null));
        return c
    };

    function vi(a, b, c) {
        if (Yb(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c)); else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d), f = e.charCodeAt(0), g = d + 1, h;
                if (!(h = yb[e])) {
                    if (!(31 < f && 127 > f)) if (f = e, f in zb) e = zb[f]; else if (f in yb) e = zb[f] = yb[f]; else {
                        h = f.charCodeAt(0);
                        if (31 < h && 127 > h) e = f; else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = zb[f] = e
                    }
                    h = e
                }
                b[g] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };var wi = null;

    function U(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Q.call(this, a, b);
        this.Y = c;
        this.Na = d
    }

    ka(U, Q);
    U.prototype.ha = function () {
        return this.Y
    };
    U.prototype.Z = function (a, b, c, d) {
        if (!c.google_ad_resize) {
            d.style.height = this.height() + "px";
            b = K(a, R.c) || "ca-pub-9118350542306317" === c.google_ad_client;
            d = Cf() ? !K(a, R.c) : K(a, R.B);
            var e = K(a, S.c), f = K(a, S.T) || K(a, S.L) || K(a, S.K) || K(a, S.I) || K(a, S.J);
            if (K(a, R.c) || K(a, R.B) || e || f) c.ovlp = !0;
            b ? c.rpe = !1 : d && (c.rpe = !0)
        }
    };

    function xi(a) {
        return function (b) {
            return !!(b.Y & a)
        }
    };var yi = Bb("script");

    function zi(a, b, c, d, e, f, g, h, k, m, n, u, v, y) {
        this.sa = a;
        this.a = b;
        this.Y = void 0 === c ? null : c;
        this.f = void 0 === d ? null : d;
        this.ja = void 0 === e ? null : e;
        this.b = void 0 === f ? null : f;
        this.h = void 0 === g ? null : g;
        this.w = void 0 === h ? !1 : h;
        this.$ = void 0 === k ? !1 : k;
        this.Aa = void 0 === m ? null : m;
        this.Ba = void 0 === n ? null : n;
        this.i = void 0 === u ? null : u;
        this.s = void 0 === v ? null : v;
        this.Ca = void 0 === y ? null : y;
        this.ka = this.xa = this.ta = null
    }

    function Ai(a, b, c) {
        null != a.Y && (c.google_responsive_formats = a.Y);
        null != a.ja && (c.google_safe_for_responsive_override = a.ja);
        null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
        null != a.h && !0 !== a.h && (c.gfwrnher = a.h);
        a.w && (c.google_bfa = a.w);
        a.$ && (c.ebfa = a.$);
        var d = a.s || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.i || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.a.M(b);
        var e = a.a.height();
        c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.ea(b), c.google_responsive_auto_format = a.sa, null != a.f && (c.armr = a.f), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
        null != a.Aa && (c.gfwroml = a.Aa);
        null != a.Ba && (c.gfwromr = a.Ba);
        null != a.i && (c.gfwroh = a.i);
        null != a.s && (c.gfwrow = a.s);
        null != a.Ca && (c.gfwroz = a.Ca);
        null != a.ta && (c.gml = a.ta);
        null != a.xa && (c.gmr = a.xa);
        null != a.ka && (c.gzi = a.ka);
        b = Gd();
        b = Jd(b) || b;
        Wg(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.h ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        !Wg(b.location, "google_responsive_dummy_ad") || !Pa([1, 2, 3, 4, 5, 6, 7, 8], a.sa) && 1 !== a.f || c.google_ad_resize || 2 === a.f || (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{key: "qid", value: "DUMMY_AD"}]
        }), c.dash = "<" + yi + ">window.top.postMessage('" + a + "', '*');\n          </" + yi + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };/*

 Copyright 2019 The AMP HTML Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
    var Bi = {},
        Ci = (Bi.image_stacked = 1 / 1.91, Bi.image_sidebyside = 1 / 3.82, Bi.mobile_banner_image_sidebyside = 1 / 3.82, Bi.pub_control_image_stacked = 1 / 1.91, Bi.pub_control_image_sidebyside = 1 / 3.82, Bi.pub_control_image_card_stacked = 1 / 1.91, Bi.pub_control_image_card_sidebyside = 1 / 3.74, Bi.pub_control_text = 0, Bi.pub_control_text_card = 0, Bi),
        Di = {},
        Ei = (Di.image_stacked = 80, Di.image_sidebyside = 0, Di.mobile_banner_image_sidebyside = 0, Di.pub_control_image_stacked = 80, Di.pub_control_image_sidebyside = 0, Di.pub_control_image_card_stacked = 85, Di.pub_control_image_card_sidebyside = 0, Di.pub_control_text = 80, Di.pub_control_text_card = 80, Di),
        Fi = {},
        Gi = (Fi.pub_control_image_stacked = 100, Fi.pub_control_image_sidebyside = 200, Fi.pub_control_image_card_stacked = 150, Fi.pub_control_image_card_sidebyside = 250, Fi.pub_control_text = 100, Fi.pub_control_text_card = 150, Fi);

    function Hi(a) {
        var b = 0;
        a.C && b++;
        a.u && b++;
        a.v && b++;
        if (3 > b) return {A: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."};
        b = a.C.split(",");
        var c = a.v.split(",");
        a = a.u.split(",");
        if (b.length !== c.length || b.length !== a.length) return {A: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'};
        if (2 < b.length) return {A: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')};
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g = Number(c[f]);
            if (isNaN(g) || 0 === g) return {A: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."};
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {A: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."};
            e.push(g)
        }
        return {v: d, u: e, ra: b}
    }

    function Ii(a) {
        return 1200 <= a ? {width: 1200, height: 600} : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {width: a, height: Math.floor(.6 * a)} : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {width: a, height: Math.floor(3.44 * a)}
    };var Ji = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Ki(a, b) {
        Q.call(this, a, b)
    }

    ka(Ki, Q);
    Ki.prototype.M = function (a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Li(a, b) {
        Mi(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new zi(9, new Ki(a, Math.floor(a * b.google_phwr)));
        var c = Xb();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Ci.mobile_banner_image_sidebyside + Ei.mobile_banner_image_sidebyside) + 96), a = {
            O: a,
            N: c,
            u: 1,
            v: 12,
            C: "mobile_banner_image_sidebyside"
        }) : (a = Ii(a), a = {
            O: a.width,
            N: a.height,
            u: 1,
            v: 13,
            C: "image_sidebyside"
        }) : (a = Ii(a), a = {O: a.width, N: a.height, u: 4, v: 2, C: "image_stacked"});
        Ni(b, a);
        return new zi(9, new Ki(a.O, a.N))
    }

    function Oi(a, b) {
        Mi(a, b);
        var c = Hi({
            v: b.google_content_recommendation_rows_num,
            u: b.google_content_recommendation_columns_num,
            C: b.google_content_recommendation_ui_type
        });
        if (c.A) a = {O: 0, N: 0, u: 0, v: 0, C: "image_stacked", A: c.A}; else {
            var d = 2 === c.ra.length && 468 <= a ? 1 : 0;
            var e = c.ra[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Gi[e];
            for (var g = c.u[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.v[d];
            d = Math.floor(((a - 8 * f - 8) / f * Ci[e] + Ei[e]) * c + 8 * c + 8);
            a = 1500 < a ? {width: 0, height: 0, ia: "Calculated slot width is too large: " + a} : 1500 < d ? {
                width: 0,
                height: 0,
                ia: "Calculated slot height is too large: " + d
            } : {width: a, height: d};
            a = a.ia ? {O: 0, N: 0, u: 0, v: 0, C: e, A: a.ia} : {O: a.width, N: a.height, u: f, v: c, C: e}
        }
        if (a.A) throw new N(a.A);
        Ni(b, a);
        return new zi(9, new Ki(a.O, a.N))
    }

    function Mi(a, b) {
        if (0 >= a) throw new N("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Ni(a, b) {
        a.google_content_recommendation_ui_type = b.C;
        a.google_content_recommendation_columns_num = b.u;
        a.google_content_recommendation_rows_num = b.v
    };

    function Pi(a, b) {
        Q.call(this, a, b)
    }

    ka(Pi, Q);
    Pi.prototype.M = function () {
        return this.minWidth()
    };
    Pi.prototype.Z = function (a, b, c, d) {
        var e = this.M(b);
        Sf(a, d, d.parentElement, b, e, c);
        if (!c.google_ad_resize) {
            d.style.height = this.height() + "px";
            b = K(a, R.c) || "ca-pub-9118350542306317" === c.google_ad_client;
            d = Cf() ? !K(a, R.c) : K(a, R.B);
            e = K(a, S.c);
            var f = K(a, S.T) || K(a, S.L) || K(a, S.K) || K(a, S.I) || K(a, S.J);
            if (K(a, R.c) || K(a, R.B) || e || f) c.ovlp = !0;
            b ? c.rpe = !1 : d && (c.rpe = !0);
            if (K(a, lh.c) || K(a, lh.R) || K(a, lh.P)) c.ovlp = !0
        }
    };

    function Qi(a) {
        return function (b) {
            for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
            return !0
        }
    }

    function Ri(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };var V = [new U(970, 90, 2), new U(728, 90, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 600, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 600, 4), new U(125, 125, 1), new U(120, 600, 4), new U(120, 240, 4), new U(120, 120, 1, !0)],
        Si = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9], V[16]];

    function Ti(a, b, c, d, e) {
        "false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash ? "autorelaxed" == b && (e.google_full_width_responsive || K(c, Eh.g)) || Ui(b) || e.google_ad_resize ? (b = Of(a, c, d, e), c = !0 !== b ? {
            l: a,
            m: b
        } : {l: P(c) || a, m: !0}) : c = {l: a, m: 2} : c = {l: a, m: 1};
        b = c.m;
        return !0 !== b ? {l: a, m: b} : d.parentElement ? {l: c.l, m: b} : {l: a, m: b}
    }

    function Vi(a, b, c, d, e) {
        var f = Ye(247, function () {
            return Ti(a, b, c, d, e)
        }), g = f.l;
        f = f.m;
        var h = !0 === f, k = D(d.style.width), m = D(d.style.height), n = Wi(g, b, c, d, e, h);
        g = n.H;
        h = n.G;
        var u = n.D, v = n.F, y = n.ha;
        n = n.Oa;
        var H = Xi(b, y), E, G = (E = Tf(d, c, "marginLeft", D)) ? E + "px" : "",
            rb = (E = Tf(d, c, "marginRight", D)) ? E + "px" : "";
        E = Tf(d, c, "zIndex") || "";
        return new zi(H, g, y, null, n, f, h, u, v, G, rb, m, k, E)
    }

    function Ui(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Wi(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, P(c)) ? 4 : 3 : Mf(b);
        var g = !1, h = !1, k = Yi(c), m = 488 > P(c);
        if (k && m || !k && Xb()) {
            var n = Lf(d, c);
            h = Wf(d, c);
            g = !h && n;
            h = h && n
        }
        m = (g || k ? Si : V).slice(0);
        var u = 488 > P(c), v = [Uf(a), Vf(u, c, d, h), xi(b)];
        null != e.google_max_responsive_height && v.push(Yf(e.google_max_responsive_height));
        k || v.push(Zi(u));
        u = [function (H) {
            return !H.Na
        }];
        if (g || h) g = g && !k ? $f(c, d) : ag(c, d), u.push(Yf(g));
        var y = Ri(m, Qi(v), Qi(u));
        if (!y) throw new N("No slot size for availableWidth=" + a);
        g = Ye(248, function () {
            var H;
            a:if (f) {
                if (e.gfwrnh && (H = D(e.gfwrnh))) {
                    H = {H: new Pi(a, H), G: !0, D: !1, F: !1};
                    break a
                }
                if (Yi(c) || "true" == e.google_full_width_responsive || !Wf(d, c) || e.google_resizing_allowed) {
                    H = !1;
                    var E = Gf(c).clientHeight, G = Jf(d, c), rb = c.google_lpabyc, bg = Zf(d, c);
                    if (bg && 2 < bg && !c.google_bfabyc && (!rb || G - rb > E) && (E = .9 * Gf(c).clientHeight, G = Math.min(E, $i(c, d, e)), E && G == E)) {
                        G = c.google_pbfabyc;
                        H = !G;
                        if (K(c, lh.R) || K(c, lh.P)) {
                            c.google_bfabyc = Jf(d, c) + E;
                            H = {H: new Pi(a, Math.floor(E)), G: !0, D: !0, F: !0};
                            break a
                        }
                        G || (c.google_pbfabyc = Jf(d, c) + E)
                    }
                    E = a / 1.2;
                    G = Math.min(E, $i(c, d, e));
                    if (G < .5 * E || 100 > G) G = E;
                    if (K(c, S.L) || K(c, S.K) || K(c, S.I) || K(c, S.J)) G *= 1.3;
                    H = {H: new Pi(a, Math.floor(G)), G: G < E ? 102 : !0, D: !1, F: H}
                } else H = {H: new Pi(a, y.height()), G: 101, D: !1, F: !1}
            } else H = {H: y, G: 100, D: !1, F: !1};
            return H
        });
        return {H: g.H, G: g.G, D: g.D, F: g.F, ha: b, Oa: n}
    }

    function $i(a, b, c) {
        return c.google_resizing_allowed || "true" == c.google_full_width_responsive ? Infinity : $f(a, b)
    }

    function Xi(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Zi(a) {
        return function (b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }

    function Yi(a) {
        return Cf() ? !K(a, R.c) : K(a, R.B)
    };var aj = {
        "image-top": function (a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        }, "image-middle": function (a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        }, "image-side": function (a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        }, "text-only": function (a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        }, "in-article": function (a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function bj(a, b) {
        Q.call(this, a, b)
    }

    ka(bj, Q);
    bj.prototype.M = function () {
        return Math.min(1200, this.minWidth())
    };

    function cj(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = Nf(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g; else if (g = P(b)) {
                e.google_full_width_responsive_allowed = !0;
                var h = c.parentElement;
                if (h) {
                    b:for (var k = c, m = 0; 100 > m && k.parentElement; ++m) {
                        for (var n = k.parentElement.childNodes, u = 0; u < n.length; ++u) {
                            var v = n[u];
                            if (v != k && Qf(b, v)) break b
                        }
                        k = k.parentElement;
                        k.style.width = "100%";
                        k.style.height = "auto"
                    }
                    Sf(b, c, h, a, g, e);
                    a = g
                }
            }
        }
        if (250 > a) throw new N("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new zi(11, new Q(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (e = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                d = [];
                for (g = 0; g < e; g++) d.push(parseInt(c[g], 36) / b);
                b = d
            } else b = null;
            if (!b) throw new N("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            e = 1;
            d = b.length;
            for (g = 0; g < d; g++) c += b[g] * e, e *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new N("Invalid height: height=" + f);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new N("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new zi(11, new Q(a, f))
        }
        if (K(b, Ih.c) || K(b, Ih.Ea) || K(b, Ih.ba)) e.ovlp = !0;
        e = aj[f];
        if (!e) throw new N("Invalid data-ad-layout value: " + f);
        d = K(b, Ih.ba);
        c = Wf(c, b);
        b = P(b);
        b = "in-article" === f && !c && a === b && d ? Math.ceil(1.25 * e(a)) : Math.ceil(e(a));
        return new zi(11, "in-article" == f ? new bj(a, b) : new Q(a, b))
    };

    function dj(a, b) {
        Q.call(this, a, b)
    }

    ka(dj, Q);
    dj.prototype.M = function () {
        return this.minWidth()
    };
    dj.prototype.ea = function (a) {
        return Q.prototype.ea.call(this, a) + "_0ads_al"
    };
    var ej = [new dj(728, 15), new dj(468, 15), new dj(200, 90), new dj(180, 90), new dj(160, 90), new dj(120, 90)];

    function fj(a, b, c) {
        var d = 250, e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e;
        var f = Ri(ej, Uf(a));
        if (!f) throw new N("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new zi(10, new dj(a, Math.min(b, 15 == f ? e : d)))).a;
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c);
        return new zi(10, new dj(b, d))
    }

    function gj(a, b, c, d) {
        if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
        var e = Of(a, b, c, d);
        if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = P(b);
        if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        Sf(b, c, c.parentElement, a, e, d);
        return e
    };

    function hj(a, b, c, d, e) {
        var f;
        (f = P(b)) ? 488 > P(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Sf(b, c, c.parentElement, a, f, e), f = {
            l: f,
            m: !0
        }) : f = {l: a, m: 5} : f = {l: a, m: 4} : f = {l: a, m: 10};
        var g = f;
        f = g.l;
        g = g.m;
        if (!0 !== g || a == f) return new zi(12, new Q(a, d), null, null, !0, g, 100);
        a = Wi(f, "auto", b, c, e, !0);
        return new zi(1, a.H, a.ha, 2, !0, g, a.G, a.D, a.F)
    };

    function ij(a) {
        var b = a.google_ad_format;
        if ("autorelaxed" == b) {
            a:{
                if ("pedestal" != a.google_content_recommendation_ui_type) {
                    b = ba(Ji);
                    for (var c = b.next(); !c.done; c = b.next()) if (null != a[c.value]) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            return a ? 9 : 5
        }
        if (Ui(b)) return 1;
        if ("link" == b) return 4;
        if ("fluid" == b) return 8
    }

    function jj(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Tf(b, d, "width", D) || c.google_ad_width || 0;
        !K(d, ph.g) || 5 !== a && 9 !== a || (c.google_ad_format = "auto", c.google_ad_slot = "", a = 1);
        var f = (f = kj(a, e, b, c, d)) ? f : Vi(e, c.google_ad_format, d, b, c);
        f.a.Z(d, e, c, b);
        Ai(f, e, c);
        1 != a && (a = f.a.height(), b.style.height = a + "px")
    }

    function kj(a, b, c, d, e) {
        var f = d.google_ad_height || Tf(c, e, "height", D);
        switch (a) {
            case 5:
                return a = Ye(247, function () {
                    return Ti(b, d.google_ad_format, e, c, d)
                }), f = a.l, a = a.m, !0 === a && b != f && Sf(e, c, c.parentElement, b, f, d), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), lj(e) && (d.ovlp = !0), Li(f, d);
            case 9:
                return Oi(b, d);
            case 4:
                return a = gj(b, e, c, d), fj(a, ag(e, c), f);
            case 8:
                return cj(b, e, c, f, d);
            case 10:
                return hj(b, e, c, f, d)
        }
    }

    function lj(a) {
        return K(a, Eh.c) || K(a, Eh.g)
    };

    function W(a) {
        this.h = [];
        this.b = a || window;
        this.a = 0;
        this.f = null;
        this.i = 0
    }

    var mj;
    l = W.prototype;
    l.Ja = function (a, b) {
        0 != this.a || 0 != this.h.length || b && b != window ? this.pa(a, b) : (this.a = 2, this.wa(new nj(a, window)))
    };
    l.pa = function (a, b) {
        this.h.push(new nj(a, b || this.b));
        oj(this)
    };
    l.Sa = function (a) {
        this.a = 1;
        if (a) {
            var b = Ze(188, Ga(this.va, this, !0));
            this.f = this.b.setTimeout(b, a)
        }
    };
    l.va = function (a) {
        a && ++this.i;
        1 == this.a && (null != this.f && (this.b.clearTimeout(this.f), this.f = null), this.a = 0);
        oj(this)
    };
    l.Za = function () {
        return !(!window || !Array)
    };
    l.Ma = function () {
        return this.i
    };

    function oj(a) {
        var b = Ze(189, Ga(a.$a, a));
        a.b.setTimeout(b, 0)
    }

    l.$a = function () {
        if (0 == this.a && this.h.length) {
            var a = this.h.shift();
            this.a = 2;
            var b = Ze(190, Ga(this.wa, this, a));
            a.a.setTimeout(b, 0);
            oj(this)
        }
    };
    l.wa = function (a) {
        this.a = 0;
        a.b()
    };

    function pj(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function qj(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && pj(a) && Bd(a.nq) && Bd(a.nqa) && Bd(a.al) && Bd(a.rl)
    }

    function rj() {
        if (mj && pj(mj)) return mj;
        var a = gg(), b = a.google_jobrunner;
        return qj(b) ? mj = b : a.google_jobrunner = mj = new W(a)
    }

    function sj(a, b) {
        rj().nq(a, b)
    }

    function tj(a, b) {
        rj().nqa(a, b)
    }

    W.prototype.nq = W.prototype.Ja;
    W.prototype.nqa = W.prototype.pa;
    W.prototype.al = W.prototype.Sa;
    W.prototype.rl = W.prototype.va;
    W.prototype.sz = W.prototype.Za;
    W.prototype.tc = W.prototype.Ma;

    function nj(a, b) {
        this.b = a;
        this.a = b
    };

    function uj(a, b) {
        var c = Jd(b);
        if (c) {
            c = P(c);
            var d = bc(a, b) || {}, e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function vj(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {}, upd: function (c, d) {
                var e = wj("rx", c), f = Number;
                a:{
                    if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                        c = c[1];
                        break a
                    }
                    c = ""
                }
                f = f(c);
                f = (new Date).getTime() - f;
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, e);
                return e
            }
        });
        this.b = a.google_iframe_oncopy
    }

    vj.prototype.set = function (a, b) {
        var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function () {
            var d = c.a.document.getElementById(a);
            try {
                var e = d.contentWindow.document;
                if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
            } catch (f) {
            }
        }, !1)
    };

    function wj(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }

    var xj,
        yj = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    var X = yj;
    /[\x00&<>"']/.test(X) && (-1 != X.indexOf("&") && (X = X.replace(ab, "&amp;")), -1 != X.indexOf("<") && (X = X.replace(bb, "&lt;")), -1 != X.indexOf(">") && (X = X.replace(cb, "&gt;")), -1 != X.indexOf('"') && (X = X.replace(db, "&quot;")), -1 != X.indexOf("'") && (X = X.replace(eb, "&#39;")), -1 != X.indexOf("\x00") && (X = X.replace(fb, "&#0;")));
    yj = X;
    xj = yj;
    var zj = {},
        Aj = (zj.google_ad_modifications = !0, zj.google_analytics_domain_name = !0, zj.google_analytics_uacct = !0, zj.google_pause_ad_requests = !0, zj);
    var Bj = /^\.google\.(com?\.)?[a-z]{2,3}$/, Cj = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Dj(a) {
        return Bj.test(a) && !Cj.test(a)
    }

    var Ej = p;

    function Fj(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(p.location.hostname)];
        Y[3] >= +new Date && b.push("adsid=" + encodeURIComponent(Y[1]));
        return a + "?" + b.join("&")
    }

    var Y, Z;

    function Gj() {
        Ej = p;
        Y = Ej.googleToken = Ej.googleToken || {};
        var a = +new Date;
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = Ej.googleIMState = Ej.googleIMState || {};
        Dj(Z[1]) || (Z[1] = ".google.com");
        za(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        za(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    }

    var Hj = {
        fa: function () {
            return 0 < Z[8]
        }, Va: function () {
            Z[8]++
        }, Wa: function () {
            0 < Z[8] && Z[8]--
        }, Xa: function () {
            Z[8] = 0
        }, bb: function () {
            return !1
        }, La: function () {
            return Z[5]
        }, Ha: function (a) {
            try {
                a()
            } catch (b) {
                p.setTimeout(function () {
                    throw b;
                }, 0)
            }
        }, Ua: function () {
            if (!Hj.fa()) {
                var a = p.document, b = function (e) {
                    e = Fj(e);
                    a:{
                        try {
                            var f = ra();
                            break a
                        } catch (g) {
                        }
                        f = void 0
                    }
                    Yg(a, e, f);
                    f = a.createElement("script");
                    f.type = "text/javascript";
                    f.onerror = function () {
                        return p.processGoogleToken({}, 2)
                    };
                    e = Vb(e);
                    xb(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f), Hj.Va()
                    } catch (g) {
                    }
                }, c = Z[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                p.setTimeout(function () {
                    return p.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function Ij() {
        p.processGoogleToken = p.processGoogleToken || function (a, b) {
            var c = a;
            c = void 0 === c ? {} : c;
            b = void 0 === b ? 0 : b;
            a = c.newToken || "";
            var d = "NT" == a, e = parseInt(c.freshLifetimeSecs || "", 10), f = parseInt(c.validLifetimeSecs || "", 10),
                g = c["1p_jar"] || "";
            c = c.pucrd || "";
            Gj();
            1 == b ? Hj.Xa() : Hj.Wa();
            var h = Ej.googleToken = Ej.googleToken || {},
                k = 0 == b && a && "string" === typeof a && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !Hj.fa() && (!(Y[3] >= +new Date) || "NT" == Y[1]);
            var m = !(Y[3] >= +new Date) && 0 != b;
            if (k || d || m) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && uc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, null), h[5] = b, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = c, Gj();
            if (k || !Hj.fa()) {
                b = Hj.La();
                for (a = 0; a < b.length; a++) Hj.Ha(b[a]);
                b.length = 0
            }
        };
        Gj();
        Y[3] >= +new Date && Y[2] >= +new Date || Hj.Ua()
    };var Jj = Bb("script");

    function Kj() {
        C.google_sa_impl && !C.document.getElementById("google_shimpl") && (C.google_sa_queue = null, C.google_sl_win = null, C.google_sa_impl = null);
        if (!C.google_sa_queue) {
            C.google_sa_queue = [];
            C.google_sl_win = C;
            C.google_process_slots = function () {
                return Lj(C)
            };
            var a = Mj();
            Yg(C.document, a);
            K(C, "20199335") || !tb() || r("iPhone") && !r("iPod") && !r("iPad") || r("iPad") || r("iPod") ? ac(C.document, a).id = "google_shimpl" : (a = Tb(document, "IFRAME"), a.id = "google_shimpl", a.style.display = "none", C.document.documentElement.appendChild(a), vi(C, "google_shimpl", "<!doctype html><html><body><" + (Jj + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") + (Jj + ">") + Nj() + "</body></html>"), a.contentWindow.document.close())
        }
    }

    var Lj = Ze(215, function (a) {
        var b = a.google_sa_queue, c = b.shift();
        a.google_sa_impl || $e("shimpl", {t: "no_fn"});
        "function" == xa(c) && Ye(216, c);
        b.length && a.setTimeout(function () {
            return Lj(a)
        }, 0)
    });

    function Oj(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Nj() {
        var a = Mj();
        return "<" + Jj + ' src="' + a + '"></' + Jj + ">"
    }

    function Mj() {
        var a = "/show_ads_impl.js";
        a = void 0 === a ? "/show_ads_impl.js" : a;
        a:{
            if (zc) try {
                var b = C.google_cafe_host || C.top.google_cafe_host;
                if (b) {
                    var c = b;
                    break a
                }
            } catch (d) {
            }
            c = Cc()
        }
        return nf(c, ["/pagead/js/", yc(), "/r20190131", a, ""].join(""), "https")
    }

    function Pj(a, b, c, d) {
        return function () {
            var e = !1;
            d && rj().al(3E4);
            try {
                vi(a, b, c), e = !0
            } catch (g) {
                var f = gg().google_jobrunner;
                qj(f) && f.rl()
            }
            e && (e = wj("google_async_rrc", c), (new vj(a)).set(b, Pj(a, b, e, !1)))
        }
    }

    function Qj(a) {
        if (!wi) a:{
            for (var b = [p.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames) for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (k) {
                }
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    wi = h;
                    break a
                }
            } catch (k) {
            }
            wi = null
        }
        if (!wi) {
            if (/[^a-z0-9-]/.test(a)) return null;
            c = Tb(document, "IFRAME");
            c.id = "google_esf";
            c.name = "google_esf";
            h = mf(xc("", "googleads.g.doubleclick.net"), ["/pagead/html/", yc(), "/r20190131/zrt_lookup.html#", encodeURIComponent("")].join(""));
            c.src = h;
            c.style.display = "none";
            c.setAttribute("data-ad-client", $g(a));
            return c
        }
        return null
    }

    function Rj(a, b, c) {
        Sj(a, b, c, function (d, e, f) {
            d = d.document;
            for (var g = e.id, h = 0; !g || d.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e.id = g;
            e.name = g;
            g = Number(f.google_ad_width || 0);
            h = Number(f.google_ad_height || 0);
            var k = f.ds || "";
            k && (k += k.endsWith(";") ? "" : ";");
            var m = "";
            if (!f.google_enable_single_iframe) {
                m = ["<iframe"];
                for (n in e) e.hasOwnProperty(n) && m.push(n + "=" + e[n]);
                m.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
                m.push("></iframe>");
                m = m.join(" ")
            }
            var n = e.id;
            var u = "";
            u = void 0 === u ? "" : u;
            g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
            n = ['<ins id="' + (n + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', u ? ' data-ad-slot="' + u + '">' : ">", '<ins id="' + (n + '_anchor" style="display:block;') + g + '">', m, "</ins></ins>"].join("");
            16 == f.google_reactive_ad_format ? (f = d.createElement("div"), f.innerHTML = n, c.appendChild(f.firstChild)) : c.innerHTML = n;
            return e.id
        })
    }

    function Sj(a, b, c, d) {
        var e = b.google_ad_width, f = b.google_ad_height;
        K(a, Gh.g) ? (bf(!0), b.google_enable_single_iframe = !0) : K(a, Gh.c) && bf(!1);
        var g = {};
        null != e && (g.width = e && '"' + e + '"');
        null != f && (g.height = f && '"' + f + '"');
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + xj + '"';
        d = d(a, g, b);
        Tj(a, c, b);
        (c = Qj(b.google_ad_client)) && a.document.documentElement.appendChild(c);
        c = Ia;
        e = (new Date).getTime();
        b.google_lrv = yc();
        b.google_async_iframe_id = d;
        b.google_unique_id = Dd(a);
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[d] = b;
        a.google_t12n_vars = zf;
        if (b.google_enable_single_iframe) {
            var h = {pubWin: a, iframeWin: null, vars: b};
            Oj(a, function () {
                a.google_sa_impl(h)
            }, a.document.getElementById(d + "_anchor") ? sj : tj)
        } else Oj(a, Pj(a, d, ["<!doctype html><html><body>", "<" + Jj + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + d + '";', "</" + Jj + ">", "<" + Jj + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (d + "']});</") + Jj + ">", "</body></html>"].join(""), !0), a.document.getElementById(d) ? sj : tj)
    }

    function Tj(a, b, c) {
        var d = c.google_ad_output, e = c.google_ad_format, f = c.google_ad_width || 0, g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Rb[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if (!qa(c.google_reactive_sra_index) || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = hc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a:{
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, m = 0, n = 0; n < k.length; ++n) {
                            var u = k[n];
                            if (u.nodeName && u.nodeName.toString().toLowerCase() === g) {
                                if (b === u) {
                                    g = "." + m;
                                    break a
                                }
                                ++m
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var v = a.parent;
                for (e = 0; v && v !== a && 25 > e; ++e) {
                    var y = v.frames;
                    for (d = 0; d < y.length; ++d) if (a === y[d]) {
                        b.push(d);
                        break
                    }
                    a = v;
                    v = a.parent
                }
            } catch (H) {
            }
            c.google_ad_dom_fingerprint = hc(h + b.join()).toString()
        }
    };

    function Uj(a, b) {
        a = a.attributes;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = $a(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(f)) {
                    e = e.value;
                    var g = {};
                    g = (g.google_reactive_ad_format = vc, g.google_allow_expandable_ads = lc, g);
                    e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                    null === e || (b[f] = e)
                }
            }
        }
    }

    function Vj(a) {
        if (a = yd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Wj(a, b, c) {
        Uj(a, b);
        if (c.document && c.document.body && !ij(b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10), e = uj(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!Rb[d + "x" + f];
                var g = e;
                if (d) {
                    var h = Sb(e, f);
                    if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al"; else throw new N("No slot size for availableWidth=" + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = Vi(e, "auto", c, a, b);
                g = e;
                f.a.Z(c, g, b, a);
                Ai(f, g, b);
                f = f.a;
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || Tf(a, c, "width", D) || b.google_ad_width || 0;
        a:{
            e = Ha(Vi, d, "auto", c, a, b, !1, !0);
            h = K(c, yh.c);
            var k = K(c, yh.g);
            f = K(c, Ah.c);
            g = K(c, Ah.g);
            var m = ch(c, 11, b.google_ad_client), n = K(c, Ch.g);
            var u = b.google_ad_client;
            u = null != ah(c, void 0 === u ? "" : u);
            if (!(h || k || m || u) || !Xb() || b.google_reactive_ad_format || ij(b) || If(a, b) || b.google_ad_resize || Id(c) != c) d = !1; else {
                for (k = a; k; k = k.parentElement) if (m = bc(k, c), !m || !Pa(["static", "relative"], m.position)) {
                    d = !1;
                    break a
                }
                if (!0 !== Nf(c, a, d, .3, b)) d = !1; else {
                    b.google_resizing_allowed = !0;
                    k = Wg(c.location, "google_responsive_slot_debug");
                    m = O(Df(), 142);
                    if (k || Math.random() < m) b.ovlp = !0;
                    h || g || n ? (h = {}, Ai(e(), d, h), b.google_resizing_width = h.google_ad_width, b.google_resizing_height = h.google_ad_height, h.ds && (b.ds = h.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1);
                    (d = f ? "AutoOptimizeAdSizeVariant" : g ? "AutoOptimizeAdSizeOriginal" : null) && (b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d);
                    d = !0
                }
            }
        }
        if (e = ij(b)) jj(e, a, b, c, d); else {
            if (If(a, b)) {
                if (d = bc(a, c)) a.style.width = d.width, a.style.height = d.height, Hf(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Vj(c)
            } else Hf(a.style, b), 300 == b.google_ad_width && 250 == b.google_ad_height && (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive && !K(c, mh.g) ? jj(10, a, b, c, !1) : K(c, nh.g) && 12 == b.google_responsive_auto_format && (a = Of(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Xj(a) {
        var b;
        this.b = b = void 0 === b ? document : b;
        this.h = void 0 === a ? 0 : a;
        this.f = Yj(this, "__gads=");
        this.i = !1;
        this.a = null;
        this.s = !1;
        Zj(this)
    }

    Xj.prototype.w = function (a) {
        this.h = a;
        Zj(this)
    };

    function ak(a, b) {
        var c = Re;
        var d = void 0 === d ? bk : d;
        1 != a.h && (a.f || a.i) && (C._setgfp_ = Qe(c, 629, function (e) {
            delete C._setgfp_;
            if (!e) throw Error("Invalid JSONP response");
            if (e = e._cookies_) {
                var f = e[0];
                if (!f) throw Error("Invalid JSONP response");
                var g = f._value_, h = f._expires_;
                e = f._path_;
                f = f._domain_;
                if ("string" !== typeof g || "number" !== typeof h || "string" !== typeof e || "string" !== typeof f) throw Error("Invalid JSONP response");
                var k = new Pb;
                g = Kb(k, 1, g);
                h = Kb(g, 2, h);
                e = Kb(h, 3, e);
                e = [Kb(e, 4, f)];
                e.length && (a.a = e[0], e = a.a && x(a.a, 1)) && (a.f = e, null != a.a && a.f && (e = new Date, e.setTime(1E3 * x(a.a, 2)), f = "." + x(a.a, 4), e = "__gads=" + a.f + ("; expires=" + e.toGMTString()) + ("; path=" + x(a.a, 3) + "; domain=" + f), a.b.cookie = e))
            }
        }), ac(a.b, d({domain: a.b.domain, clientId: b, value: a.f, cookieEnabled: a.i})))
    }

    function bk(a) {
        var b = a.value, c = a.cookieEnabled;
        a = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + a.domain + "&callback=_setgfp_&client=" + a.clientId;
        b && (a += "&cookie=" + encodeURIComponent(b));
        c && (a += "&cookie_enabled=1");
        return a
    }

    function Zj(a) {
        if (!a.f && !a.s && 1 != a.h) {
            a.b.cookie = "GoogleAdServingTest=Good";
            var b = "Good" === Yj(a, "GoogleAdServingTest=");
            if (b) {
                var c = a.b, d = new Date;
                d.setTime((new Date).valueOf() + -1);
                c.cookie = "GoogleAdServingTest=; expires=" + d.toGMTString()
            }
            a.i = b;
            a.s = !0
        }
    }

    function Yj(a, b) {
        a = a.b.cookie;
        var c = a.indexOf(b);
        if (-1 === c) return "";
        b = c + b.length;
        c = a.indexOf(";", b);
        -1 == c && (c = a.length);
        return a.substring(b, c)
    };

    function ck(a) {
        return Hd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function dk(a, b) {
        var c = window;
        a.setAttribute("data-adsbygoogle-status", "done");
        ek(a, b, c)
    }

    function ek(a, b, c) {
        var d = Gd();
        d.google_spfd || (d.google_spfd = Wj);
        (d = b.google_reactive_ads_config) || Wj(a, b, c);
        if (!fk(a, b, c)) {
            d || (c.google_lpabyc = Mh(c, a));
            if (d) {
                d = d.page_level_pubvars || {};
                if (J(C).page_contains_reactive_tag && !J(C).allow_second_reactive_tag) {
                    if (d.pltais) {
                        Ld(!1);
                        return
                    }
                    throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                J(C).page_contains_reactive_tag = !0;
                Ld(7 === d.google_pgb_reactive)
            } else Cd(c);
            Ad(Aj, function (e, f) {
                b[f] = b[f] || c[f]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (J(C).first_tag_on_page || 0);
            Ye(164, function () {
                Rj(c, b, a)
            })
        }
    }

    function fk(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            var f = (Aa(e) ? e : {}).google_tag_origin
        }
        e = pa(a.className) && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
        var g = b.google_ad_slot;
        var h = f || b.google_tag_origin;
        f = J(c);
        Md(f.ad_whitelist || [], g, h) ? g = null : (h = f.space_collapsing || "none", g = (g = Md(f.ad_blacklist || [], g)) ? {
            ma: !0,
            ya: g.space_collapsing || h
        } : f.remove_ads_by_default ? {ma: !0, ya: h, ca: f.ablation_viewport_offset} : null);
        if (g && g.ma && "on" != b.google_adtest && !e && (e = Zf(a, c), !g.ca || g.ca && (e || 0) >= g.ca)) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ba(a), c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == g.ya && (null !== kc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== kc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
        if ((e = bc(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function gk(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (ck(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function hk() {
        var a = Tb(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        mc(a);
        return a
    }

    function ik(a) {
        var b = {};
        Ad(he, function (e, f) {
            !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
        });
        Aa(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
        var c = hk();
        Qb.body.appendChild(c);
        var d = {};
        d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
        d.google_pause_ad_requests = J(C).pause_ad_requests || !1;
        dk(c, d)
    }

    function jk(a) {
        return "complete" == a.readyState || "interactive" == a.readyState
    }

    function kk(a) {
        function b() {
            return ik(a)
        }

        var c = void 0 === c ? Qb : c;
        var d = Jd(window);
        if (!d) throw new N("Page-level tag does not work inside iframes.");
        Ff(d).wasPlaTagProcessed = !0;
        if (c.body || jk(c)) b(); else {
            var e = Sa(Ze(191, b));
            tc(c, "DOMContentLoaded", e);
            (new p.MutationObserver(function (f, g) {
                c.body && (e(), g.disconnect())
            })).observe(c, {childList: !0, subtree: !0})
        }
    }

    function lk(a) {
        var b = {};
        Ye(165, function () {
            mk(a, b)
        }, function (c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }

    function nk(a) {
        delete a.google_checked_head;
        gc(a, function (b, c) {
            Od[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn("AdSense head tag doesn't support " + b + " attribute."))
        })
    }

    function ok(a) {
        var b = C._gfp_;
        if (void 0 === b || 1 === b) K(C, rh.g) ? ak(C._gfp_ = new Xj(b ? 1 : 0), a) : C._gfp_ = 2
    }

    function mk(a, b) {
        if (null == a) throw new N("push() called with no parameters.");
        Ia = (new Date).getTime();
        Kj();
        a:{
            if (void 0 != a.enable_page_level_ads) {
                if (pa(a.google_ad_client)) {
                    var c = !0;
                    break a
                }
                throw new N("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c) pk(a, b); else if ((c = a.params) && Ad(c, function (e, f) {
            b[f] = e
        }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."); else {
            a = qk(a.element);
            Uj(a, b);
            c = J(p).head_tag_slot_vars || {};
            gc(c, function (e, f) {
                b.hasOwnProperty(f) || (b[f] = e)
            });
            if (a.hasAttribute("data-require-head") && !J(p).head_tag_slot_vars) throw new N("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
            if (!b.google_ad_client) throw new N("Ad client is missing from the slot.");
            var d = (c = 0 === (J(C).first_tag_on_page || 0) && Kh(b)) && Lh(c);
            c && !d && (pk(c), J(C).skip_next_reactive_tag = !0);
            0 === (J(C).first_tag_on_page || 0) && (J(C).first_tag_on_page = 2);
            ok(b.google_ad_client);
            b.google_pause_ad_requests = J(C).pause_ad_requests || !1;
            dk(a, b);
            c && d && rk(c)
        }
    }

    function rk(a) {
        function b() {
            Ff(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        }

        jk(Qb) ? b() : tc(Qb, "DOMContentLoaded", Sa(b))
    }

    function pk(a, b) {
        if (J(C).skip_next_reactive_tag) J(C).skip_next_reactive_tag = !1; else {
            0 === (J(C).first_tag_on_page || 0) && (J(C).first_tag_on_page = 1);
            b && a.tag_partner && (Kd(p, a.tag_partner), Kd(b, a.tag_partner));
            a:if (!J(C).ama_ran_on_page) {
                try {
                    var c = p.localStorage.getItem("google_ama_config")
                } catch (y) {
                    c = null
                }
                try {
                    var d = c ? new Zd(c ? JSON.parse(c) : null) : null
                } catch (y) {
                    d = null
                }
                if (b = d) if (c = A(b, ae, 3), !c || x(c, 1) <= +new Date) try {
                    p.localStorage.removeItem("google_ama_config")
                } catch (y) {
                    jf(p, {lserr: 1})
                } else {
                    if (Lh(a) && (c = ie(p.location.pathname, B(b, be, 7)), !c || !Hb(c, 8))) break a;
                    J(C).ama_ran_on_page = !0;
                    A(b, ee, 13) && 1 === x(A(b, ee, 13), 1) && (c = 0, A(A(b, ee, 13), fe, 6) && x(A(A(b, ee, 13), fe, 6), 3) && (c = x(A(A(b, ee, 13), fe, 6), 3) || 0), d = J(p), d.remove_ads_by_default = !0, d.space_collapsing = "slot", d.ablation_viewport_offset = c);
                    qf(3, [Lb(b)]);
                    c = a.google_ad_client;
                    d = df(ff, new cf(null, kf(Aa(a.enable_page_level_ads) ? a.enable_page_level_ads : {})));
                    try {
                        var e = ie(p.location.pathname, B(b, be, 7)), f;
                        if (f = e) b:{
                            var g = x(e, 2);
                            if (g) for (var h = 0; h < g.length; h++) if (1 == g[h]) {
                                f = !0;
                                break b
                            }
                            f = !1
                        }
                        if (f) {
                            if (x(e, 4)) {
                                f = {};
                                var k = new cf(null, (f.google_package = x(e, 4), f));
                                d = df(d, k)
                            }
                            var m = new Hg(c, b, e, d), n = new Mg;
                            (new Rg(m, n)).start();
                            var u = n.b;
                            var v = Ha(Ug, p);
                            if (u.b) throw Error("Then functions already set.");
                            u.b = Ha(Tg, p);
                            u.f = v;
                            Pg(u)
                        }
                    } catch (y) {
                        jf(p, {atf: -1})
                    }
                }
            }
            kk(a)
        }
    }

    function qk(a) {
        if (a) {
            if (!ck(a) && (a.id ? a = gk(a.id) : a = null, !a)) throw new N("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new N("'element' is not a good DOM element.");
        } else if (a = gk(), !a) throw new N("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function sk() {
        Ve();
        Re.s = af;
        Ye(166, tk)
    }

    function tk() {
        var a = zd(yd(C)) || C, b = J(a);
        if (!b.plle) {
            b.plle = !0;
            var c = [null, null];
            try {
                var d = JSON.parse("[[[null,30,null,[null,4]]],[[12,[[1,[[21064123],[21064124]]]]],[13,[[1,[[21064522],[21064523,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]]]],[10,[[10,[[20040008,[[202,null,null,[1]]]],[20040009,[[202,null,null,[1]],[182,null,null,[1]]]]]],[1,[[21062810],[21062811]]],[1,[[21063996],[21063997,[[160,null,null,[1]]]]]],[50,[[21064339],[21064340,[[186,null,null,[1]]]]]],[50,[[21064380],[21064381,[[196,null,null,[1]]]]]],[5,[[21064530],[21064531,[[205,null,null,[1]]]],[21064532,[[null,30,null,[null,3]]]],[21064533,[[205,null,null,[1]],[null,30,null,[null,3]]]],[21064534,[[null,29,null,[null,2]]]],[21064535,[[205,null,null,[1]],[null,29,null,[null,2]]]],[21064536,[[null,29,null,[null,2]],[null,30,null,[null,3]]]],[21064537,[[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]]]]]],[1000,[[368226100,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]],[368226101,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]]]],[1000,[[368226105,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]],[368226106,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]]]],[1000,[[368226110,[[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]],[368226111,[[189,null,null,[1]],[190,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x228\x22]],[7,null,null,5,null,20,null,[\x228\x22]]]]]]],[1000,[[368226200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x229\x22]],[7,null,null,5,null,100,null,[\x229\x22]]]]],[368226201,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x229\x22]],[7,null,null,5,null,100,null,[\x229\x22]]]]]]],[1000,[[368885001,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x224\x22]],[7,null,null,5,null,100,null,[\x224\x22]]]]],[368885002,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x224\x22]],[7,null,null,5,null,100,null,[\x224\x22]]]]]]]]],[11,[[10,[[248427477],[248427478,[[154,null,null,[1]]]]]]]]]]")
            } catch (m) {
                d = c
            }
            qf(13, [d]);
            qi(new bi(d), Wh(a));
            eh.j().a(12);
            eh.j().a(10);
            b.eids = La(eh.j().b(), String).concat(b.eids || []);
            b = b.eids;
            d = Df();
            Bc = !0;
            c = Df();
            var e = Jd(a) || a;
            e = Wg(e.location, "google_responsive_slot_debug") || Wg(e.location, "google_responsive_slot_preview");
            var f = ch(a, 11);
            var g = null != ah(a, "");
            e ? (e = yh, f = zh, c = e.g) : g ? (e = Ch, f = Dh, c = ui(a, new ye(0, 999, ""), O(c, 152), O(c, 153), [e.c, e.g], 2)) : f ? (e = Ah, f = Bh, c = ui(a, new ye(0, 999, ""), O(c, 120), O(c, 121), [e.c, e.g], 2)) : (e = yh, f = zh, c = ui(a, Qh, O(c, 96), O(c, 97), [e.c, e.g]));
            c ? (g = {}, e = (g[e.c] = f.c, g[e.g] = f.g, g)[c], c = {Ra: c, Ta: e}) : c = null;
            e = c || {};
            c = e.Ra;
            g = e.Ta;
            c && g && (T(b, c), T(b, g));
            e = mh;
            c = ti(a, O(d, 136), [e.c, e.g]);
            T(b, c);
            ch(a, 12) && (e = hh, f = gh, c = ui(a, new ye(0, 999, ""), O(d, 149), O(d, 150), [e.c, e.g], 4), T(b, c), c == e.c ? g = f.c : c == e.g ? g = f.g : g = "", T(b, g));
            e = lh;
            c = ui(a, Nh, O(d, 160), O(d, 161), [e.c, e.R, e.P]);
            T(b, c);
            f = kh;
            c == e.c ? g = f.c : c == e.R ? g = f.R : c == e.P ? g = f.P : g = "";
            T(b, g);
            e = sh;
            T(b, ui(a, Oh, O(d, 9), O(d, 10), [e.c, e.Da]));
            e = jh;
            c = ui(a, Th, O(d, 179), O(d, 180), [e.c, e.U]);
            T(b, c);
            f = ih;
            c == e.c ? g = f.c : c == e.U ? g = f.U : g = "";
            T(b, g);
            $a("") && T(b, "");
            e = th;
            c = ti(a, O(d, 13), [e.o, e.c]);
            T(b, c);
            c = ti(a, 0, [e.la]);
            T(b, c);
            e = uh;
            c = ti(a, O(d, 60), [e.o, e.c]);
            T(b, c);
            c == uh.o && (e = vh, c = ti(a, O(d, 66), [e.o, e.c]), T(b, c), e = xh, c = ti(a, O(d, 137), [e.o, e.c]), T(b, c), c == vh.o && (e = wh, c = ti(a, O(d, 135), [e.o, e.c]), T(b, c)));
            e = nh;
            c = ti(a, O(d, 98), [e.c, e.g]);
            T(b, c);
            e = rh;
            c = ti(a, O(d, 192), [e.c, e.g]);
            T(b, c);
            e = R;
            c = ui(a, Sh, O(d, 157), O(d, 158), [e.c, e.B]);
            T(b, c);
            f = oh;
            c == e.c ? g = f.c : c == e.B ? g = f.B : g = "";
            T(b, g);
            e = ph;
            c = ui(a, Rh, O(d, 173), O(d, 174), [e.c, e.g]);
            T(b, c);
            f = qh;
            c == e.c ? g = f.c : c == e.g ? g = f.g : g = "";
            T(b, g);
            e = Eh;
            c = ui(a, Ph, O(d, 99), O(d, 100), [e.c, e.g]);
            T(b, c);
            f = Fh;
            c == e.c ? g = f.c : c == e.g ? g = f.g : g = "";
            T(b, g);
            e = Gh;
            c = ti(a, O(d, 165), [e.c, e.g]);
            T(b, c);
            e = S;
            c = ui(a, Uh, O(d, 189), O(d, 190), [e.c, e.T, e.L, e.K, e.I, e.J]);
            T(b, c);
            f = Hh;
            c == e.c ? g = f.c : c == e.T ? g = f.T : c == e.L ? g = f.L : c == e.K ? g = f.K : c == e.I ? g = f.I : c == e.J ? g = f.J : g = "";
            T(b, g);
            e = Ih;
            c = ui(a, Vh, O(d, 202), O(d, 203), [e.ba]);
            T(b, c);
            c = ti(a, O(d, 185), ["20199336", "20199335"]);
            T(b, c);
            a = Jd(a) || a;
            Wg(a.location, "google_mc_lab") && T(b, "242104166")
        }
        if (!r("Trident") && !r("MSIE") || wb(11)) {
            a = K(C, vh.o) || K(C, th.o) || K(C, th.la);
            Te(a);
            Gj();
            Dj(".google.tg") && (Z[1] = ".google.tg");
            Ij();
            if (a = Jd(p)) a = Ff(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = new Vg);
            if (d = C.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])')) {
                d.setAttribute("data-checked-head", "true");
                b = J(window);
                if (b.head_tag_slot_vars) throw new N("Only one AdSense head tag supported per page. The second tag is ignored.");
                a = {};
                Uj(d, a);
                nk(a);
                d = {};
                for (var h in a) d[h] = a[h];
                b.head_tag_slot_vars = d;
                h = {};
                h = (h.google_ad_client = a.google_ad_client, h.enable_page_level_ads = a, h);
                C.adsbygoogle || (C.adsbygoogle = []);
                a = C.adsbygoogle;
                a.loaded ? a.push(h) : a.splice(0, 0, h)
            }
            h = window.adsbygoogle;
            if (!h || !h.loaded) {
                a = {push: lk, loaded: !0};
                try {
                    Object.defineProperty(a, "requestNonPersonalizedAds", {set: uk}), Object.defineProperty(a, "pauseAdRequests", {set: vk}), Object.defineProperty(a, "setCookieOptions", {set: wk}), Object.defineProperty(a, "onload", {set: xk})
                } catch (m) {
                }
                if (h) for (b = ba(["requestNonPersonalizedAds", "pauseAdRequests", "setCookieOptions"]), d = b.next(); !d.done; d = b.next()) d = d.value, void 0 !== h[d] && (a[d] = h[d]);
                if (h && h.shift) try {
                    var k;
                    for (b = 20; 0 < h.length && (k = h.shift()) && 0 < b;) lk(k), --b
                } catch (m) {
                    throw window.setTimeout(sk, 0), m;
                }
                window.adsbygoogle = a;
                h && (a.onload = h.onload)
            }
        }
    }

    function uk(a) {
        if (+a) {
            if ((a = $b()) && a.frames && !a.frames.GoogleSetNPA) try {
                var b = a.document, c = new Ub(b), d = b.body || b.head && b.head.parentElement;
                if (d) {
                    var e = Tb(c.a, "IFRAME");
                    e.name = "GoogleSetNPA";
                    e.id = "GoogleSetNPA";
                    e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    d.appendChild(e)
                }
            } catch (f) {
            }
        } else (b = $b().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
    }

    function vk(a) {
        +a ? J(C).pause_ad_requests = !0 : (J(C).pause_ad_requests = !1, a = function () {
            if (!J(C).pause_ad_requests) {
                var b = Gd(), c = Gd();
                try {
                    if (Qb.createEvent) {
                        var d = Qb.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (Bd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (Bd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {bubbles: !1, cancelable: !1});
                        b.dispatchEvent(f)
                    }
                } catch (g) {
                }
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function wk(a) {
        var b = C._gfp_;
        void 0 === b || 1 === b ? C._gfp_ = a ? 1 : void 0 : b instanceof Xj && b.w(a ? 1 : 0)
    }

    function xk(a) {
        Bd(a) && window.setTimeout(a, 0)
    };sk();
}).call(this);
