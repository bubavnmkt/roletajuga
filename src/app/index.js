var cxt_conf = cxt_conf || {};
cxt_conf.clientId = cxt_conf.clientId || 'b2c31aa2a436';
cxt_conf.pageType = cxt_conf.pageType || 'landingpage';
cxt_conf.server = 'https://zz.connextra.com/Jugabet/dcs';
cxt_conf.resourceUrl = 'https://ssl.connextra.com';
cxt_conf.configuration = cxt_conf.configuration || {};
cxt_conf.configuration['landingpage'] = {
    "dcs_conf_root": {
        "id": 907,
        "disabled": false,
        "generateDecisionsDisabled": false,
        "executeImmediately": false,
        "c_id": 179189,
        "dcs_conf": [{
            "id": 3621,
            "outputAttribute": "ac",
            "resourcePath": null,
            "pageType": null,
            "in_type": "SCRIPT_URL_VAR",
            "in_attr": "AccountID"
        }, {
            "id": 3622,
            "outputAttribute": "value",
            "resourcePath": null,
            "pageType": null,
            "in_type": "SCRIPT_URL_VAR",
            "in_attr": "Stake"
        }, {
            "id": 3623,
            "outputAttribute": "cur",
            "resourcePath": null,
            "pageType": null,
            "in_type": "SCRIPT_URL_VAR",
            "in_attr": "Currency"
        }],
        "t_content": [{
            "id": 144461,
            "c_id": 179189,
            "p_type": "landingpage",
            "content": "<!--BEGIN SEGMENT TAG, DO NOT REMOVE --> <img src=\"https://segment.prod.bidr.io/associate-segment?buzz_key=geniussportsmedia&segment_key=geniussportsmedia-2679&value=\" height=\"0\" width=\"0\"> <!--END SEGMENT TAG, DO NOT REMOVE -->",
            "dis_type": "always_include",
            "is_ana": false
        }, {
            "id": 144471,
            "c_id": 179189,
            "p_type": "landingpage",
            "content": "<!-- Beeswax Sync pixel START--><img src=\"https://match.prod.bidr.io/cookie-sync/geniussports\" width=\"1\" height=\"1\"/><!--Beeswax Sync pixel: END-->",
            "dis_type": "always_include",
            "is_ana": false
        }, {
            "id": 144949,
            "c_id": 179189,
            "p_type": "landingpage",
            "content": "<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https://insight.adsrvr.org/track/pxl/?adv=lqc1sx2&ct=0:m20x3tx&fmt=3&orderid={{gsmorderid}}\"/>",
            "dis_type": "always_include",
            "is_ana": false
        }, {
            "id": 144953,
            "c_id": 179189,
            "p_type": "landingpage",
            "content": "<!-- The TradeDesk Sync pixel START--><img src=\"https://match.adsrvr.org/track/cmf/generic?ttd_pid=uz9i07n&ttd_tpi=1\" width=\"1\" height=\"1\"/><!--The TradeDesk Sync pixel: END-->",
            "dis_type": "always_include",
            "is_ana": false
        }]
    }
};
cxt_conf.currentScript = cxt_conf.currentScript || {};
cxt_conf.currentScript['landingpage'] = document.currentScript;
cxt_mod_shared_scope = {};
(function(z) {
    var g;
    var aa = function(a, b) {
        var c = a.split(".")
          , d = k;
        c[0]in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift()); )
            c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    };
    var m = function() {};
    var ba = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    };
    var p = function(a) {
        return "array" == ba(a)
    };
    var ca = function(a) {
        var b = ba(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    var q = function(a) {
        return "string" == typeof a
    };
    var s = function(a) {
        return "function" == ba(a)
    };
    var da = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    var ea = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    var fa = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    var u = function(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return u.apply(null, arguments)
    };
    var v = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Pb = b.prototype;
        a.prototype = new c;
        a.ac = function(a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    };
    var ga = function(a) {
        this.V = a.in_type;
        this.Kb = a.in_attr;
        this.Ob = a.outputAttribute;
        this.Va = a.resourcePath
    };
    var ha = function(a) {
        this.content = a.content;
        this.id = a.id;
        this.clientId = a.c_id;
        this.pageType = a.p_type;
        this.Bb = a.is_ana
    };
    var w = function(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, w);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    var ia = function(a) {
        return x.concat.apply(x, arguments)
    };
    var ja = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    };
    var ka = function(a, b) {
        var c = a.dcs_conf_root;
        this.cb = [];
        this.W = [];
        this.clientId = c.c_id;
        this.P = b;
        this.disabled = c.disabled;
        y(c.dcs_conf, function(a) {
            this.W.push(new ga(a))
        }, this);
        y(c.t_content, function(a) {
            a.content = a.content.replace(/{{gsmorderid}}/g, this.P);
            var b = a.content.match(/src="(.*?)"/);
            b && (b = b[1],
            -1 !== b.indexOf("tag.fanhub.geniussports.com/js/evt.js") && (a.content = -1 !== b.indexOf("?") ? a.content.replace(b, b + "\x26d1\x3d${{ac}}\x26cnv_value\x3d${{value}}") : a.content.replace(b, b + "?d1\x3d${{ac}}\x26cnv_value\x3d${{value}}")));
            this.cb.push(new ha(a))
        }, this)
    };
    var la = function(a) {
        var b = [];
        y(a.W, function(a) {
            "COMPLEX_JAVASCRIPT_VAR" == a.V && b.push(a)
        }, a);
        return b
    };
    var ma = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    };
    var na = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < oa.length; f++)
                c = oa[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var pa = function(a, b) {
        this.p = {};
        this.b = [];
        this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof pa)
                e = a.L(),
                d = a.B();
            else {
                var c = []
                  , f = 0;
                for (e in a)
                    c[f++] = e;
                e = c;
                c = [];
                f = 0;
                for (d in a)
                    c[f++] = a[d];
                d = c
            }
            for (c = 0; c < e.length; c++)
                this.set(e[c], d[c])
        }
    };
    var qa = function(a) {
        if (a.c != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length; ) {
                var d = a.b[b];
                A(a.p, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.c != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length; )
                d = a.b[b],
                A(e, d) || (a.b[c++] = d,
                e[d] = 1),
                b++;
            a.b.length = c
        }
    };
    var A = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var B = function(a) {
        return C.contains(D, a)
    };
    var ra = function() {
        return k.navigator || null
    };
    var sa = function() {
        var a = k.document;
        return a ? a.documentMode : void 0
    };
    var E = function(a) {
        return ta[a] || (ta[a] = 0 <= C.Fb(a))
    };
    var ua = function(a) {
        if (va) {
            va = !1;
            var b = k.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = ua(c)[3] || null) && (0,
                window.decodeURIComponent)(c)) && c != b.hostname)
                    throw va = !0,
                    Error();
            }
        }
        return a.match(wa)
    };
    var F = function(a, b) {
        var c;
        if (a instanceof F)
            this.h = void 0 !== b ? b : a.h,
            xa(this, a.r),
            c = a.w,
            G(this),
            this.w = c,
            c = a.o,
            G(this),
            this.o = c,
            ya(this, a.C),
            c = a.m,
            G(this),
            this.m = c,
            za(this, a.i.clone()),
            c = a.t,
            G(this),
            this.t = c;
        else if (a && (c = ua(String(a)))) {
            this.h = !!b;
            xa(this, c[1] || "", !0);
            var d = c[2] || "";
            G(this);
            this.w = H(d);
            d = c[3] || "";
            G(this);
            this.o = H(d);
            ya(this, c[4]);
            d = c[5] || "";
            G(this);
            this.m = H(d);
            za(this, c[6] || "", !0);
            c = c[7] || "";
            G(this);
            this.t = H(c)
        } else
            this.h = !!b,
            this.i = new I(null,0,this.h)
    };
    var xa = function(a, b, c) {
        G(a);
        a.r = c ? H(b) : b;
        a.r && (a.r = a.r.replace(/:$/, ""))
    };
    var ya = function(a, b) {
        G(a);
        if (b) {
            b = Number(b);
            if ((0,
            window.isNaN)(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.C = b
        } else
            a.C = null
    };
    var za = function(a, b, c) {
        G(a);
        b instanceof I ? (a.i = b,
        a.i.ra(a.h)) : (c || (b = J(b, Aa)),
        a.i = new I(b,0,a.h))
    };
    var Ba = function(a, b, c) {
        G(a);
        p(c) || (c = [String(c)]);
        Ca(a.i, b, c)
    };
    var G = function(a) {
        if (a.Lb)
            throw Error("Tried to modify a read-only Uri");
    };
    var H = function(a) {
        return a ? (0,
        window.decodeURIComponent)(a) : ""
    };
    var J = function(a, b) {
        return q(a) ? (0,
        window.encodeURI)(a).replace(b, Da) : null
    };
    var Da = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    var I = function(a, b, c) {
        this.g = a || null;
        this.h = !!c
    };
    var K = function(a) {
        if (!a.a && (a.a = new pa,
        a.c = 0,
        a.g))
            for (var b = a.g.split("\x26"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("\x3d")
                  , e = null
                  , f = null;
                0 <= d ? (e = b[c].substring(0, d),
                f = b[c].substring(d + 1)) : e = b[c];
                e = C.eb(e);
                e = L(a, e);
                a.add(e, f ? C.eb(f) : "")
            }
    };
    var Ca = function(a, b, c) {
        a.remove(b);
        0 < c.length && (a.g = null,
        a.a.set(L(a, b), ja(c)),
        a.c += c.length)
    };
    var L = function(a, b) {
        var c = String(b);
        a.h && (c = c.toLowerCase());
        return c
    };
    var Ea = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    };
    var Fa = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Ga = function(a) {
        k.setTimeout(function() {
            throw a;
        }, 0)
    };
    var Ha = function() {
        var a = k.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
            var a = window.document.createElement("iframe");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
              , a = u(function(a) {
                if (a.origin == d || a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                c = c.next;
                var a = c.T;
                c.T = null;
                a()
            }
            ;
            return function(a) {
                d.next = {
                    T: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange"in window.document.createElement("script") ? function(a) {
            var b = window.document.createElement("script");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            window.document.documentElement.appendChild(b)
        }
        : function(a) {
            k.setTimeout(a, 0)
        }
    };
    var Ia = function(a, b) {
        Ja || Ka();
        La || (Ja(),
        La = !0);
        Ma.push(new Na(a,b))
    };
    var Ka = function() {
        if (k.Promise && k.Promise.resolve) {
            var a = k.Promise.resolve();
            Ja = function() {
                a.then(Oa)
            }
        } else
            Ja = function() {
                var a = Oa;
                s(k.setImmediate) ? k.setImmediate(a) : (Pa || (Pa = Ha()),
                Pa(a))
            }
    };
    var Oa = function() {
        for (; Ma.length; ) {
            var a = Ma;
            Ma = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    c.Jb.call(c.scope)
                } catch (d) {
                    Ga(d)
                }
            }
        }
        La = !1
    };
    var Na = function(a, b) {
        this.Jb = a;
        this.scope = b
    };
    var M = function(a, b) {
        this.j = N;
        this.q = void 0;
        this.f = this.k = null;
        this.X = this.ma = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                O(c, Qa, a)
            }, function(a) {
                O(c, P, a)
            })
        } catch (d) {
            O(this, P, d)
        }
    };
    var Ra = function(a, b) {
        if (a.j == N)
            if (a.k) {
                var c = a.k;
                if (c.f) {
                    for (var d = 0, e = -1, f = 0, h; h = c.f[f]; f++)
                        if (h = h.U)
                            if (d++,
                            h == a && (e = f),
                            0 <= e && 1 < d)
                                break;
                    0 <= e && (c.j == N && 1 == d ? Ra(c, b) : (d = c.f.splice(e, 1)[0],
                    P == Qa ? d.oa(b) : (Sa(c),
                    d.pa(b))))
                }
            } else
                O(a, P, b)
    };
    var Ta = function(a, b) {
        a.f && a.f.length || a.j != Qa && a.j != P || Ua(a);
        a.f || (a.f = []);
        a.f.push(b)
    };
    var Va = function(a, b, c, d) {
        var e = {
            U: null,
            oa: null,
            pa: null
        };
        e.U = new M(function(a, h) {
            e.oa = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (r) {
                    h(r)
                }
            }
            : a;
            e.pa = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    void 0 === e && b instanceof Wa ? h(b) : a(e)
                } catch (r) {
                    h(r)
                }
            }
            : h
        }
        );
        e.U.k = a;
        Ta(a, e);
        return e.U
    };
    var O = function(a, b, c) {
        if (a.j == N) {
            if (a == c)
                b = P,
                c = new TypeError("Promise cannot resolve to itself");
            else {
                if (Fa(c)) {
                    a.j = 1;
                    c.then(a.Za, a.$a, a);
                    return
                }
                if (da(c))
                    try {
                        var d = c.then;
                        if (s(d)) {
                            Xa(a, c, d);
                            return
                        }
                    } catch (e) {
                        b = P,
                        c = e
                    }
            }
            a.q = c;
            a.j = b;
            Ua(a);
            b != P || c instanceof Wa || Ya(a, c)
        }
    };
    var Xa = function(a, b, c) {
        function d(b) {
            f || (f = !0,
            a.$a(b))
        }
        function e(b) {
            f || (f = !0,
            a.Za(b))
        }
        a.j = 1;
        var f = !1;
        try {
            c.call(b, e, d)
        } catch (h) {
            d(h)
        }
    };
    var Ua = function(a) {
        a.ma || (a.ma = !0,
        Ia(a.Ib, a))
    };
    var Sa = function(a) {
        for (; a && a.X; a = a.k)
            a.X = !1
    };
    var Ya = function(a, b) {
        a.X = !0;
        Ia(function() {
            a.X && Za.call(null, b)
        })
    };
    var Wa = function(a) {
        w.call(this, a)
    };
    var Q = function(a, b) {
        this.da = [];
        this.Ra = a;
        this.Ja = b || null;
        this.N = this.A = !1;
        this.q = void 0;
        this.sa = this.Cb = this.ja = !1;
        this.fa = 0;
        this.k = null;
        this.ka = 0
    };
    var $a = function(a, b, c) {
        a.A = !0;
        a.q = c;
        a.N = !b;
        ab(a)
    };
    var bb = function(a) {
        if (a.A) {
            if (!a.sa)
                throw new cb;
            a.sa = !1
        }
    };
    var db = function(a, b, c, d) {
        a.da.push([b, c, d]);
        a.A && ab(a)
    };
    var eb = function(a) {
        return fb(a.da, function(a) {
            return s(a[1])
        })
    };
    var ab = function(a) {
        if (a.fa && a.A && eb(a)) {
            var b = a.fa
              , c = gb[b];
            c && (k.clearTimeout(c.u),
            delete gb[b]);
            a.fa = 0
        }
        a.k && (a.k.ka--,
        delete a.k);
        for (var b = a.q, d = c = !1; a.da.length && !a.ja; ) {
            var e = a.da.shift()
              , f = e[0]
              , h = e[1]
              , e = e[2];
            if (f = a.N ? h : f)
                try {
                    var l = f.call(e || a.Ja, b);
                    void 0 !== l && (a.N = a.N && (l == b || l instanceof Error),
                    a.q = b = l);
                    Fa(b) && (d = !0,
                    a.ja = !0)
                } catch (n) {
                    b = n,
                    a.N = !0,
                    eb(a) || (c = !0)
                }
        }
        a.q = b;
        d && (l = u(a.Ia, a, !0),
        d = u(a.Ia, a, !1),
        b instanceof Q ? (db(b, l, d),
        b.Cb = !0) : b.then(l, d));
        c && (b = new hb(b),
        gb[b.u] = b,
        a.fa = b.u)
    };
    var cb = function() {
        w.call(this)
    };
    var ib = function() {
        w.call(this)
    };
    var hb = function(a) {
        this.u = k.setTimeout(u(this.Qb, this), 0);
        this.Hb = a
    };
    var jb = function() {
        var a = window.document;
        return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
    };
    var kb = function(a, b) {
        ma(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in lb ? a.setAttribute(lb[d], b) : C.startsWith(d, "aria-") || C.startsWith(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    };
    var mb = function(a, b, c) {
        return nb(window.document, arguments)
    };
    var nb = function(a, b) {
        var c = b[0]
          , d = b[1];
        if (!ob && d && (d.name || d.type)) {
            c = ["\x3c", c];
            d.name && c.push(' name\x3d"', C.Z(d.name), '"');
            if (d.type) {
                c.push(' type\x3d"', C.Z(d.type), '"');
                var e = {};
                na(e, d);
                delete e.type;
                d = e
            }
            c.push("\x3e");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (q(d) ? c.className = d : p(d) ? c.className = d.join(" ") : kb(c, d));
        2 < b.length && pb(a, c, b);
        return c
    };
    var pb = function(a, b, c) {
        function d(c) {
            c && b.appendChild(q(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ca(f) || da(f) && 0 < f.nodeType ? d(f) : y(qb(f) ? ja(f) : f, d)
        }
    };
    var rb = function(a) {
        var b = window.document
          , c = b.createElement("div");
        R ? (c.innerHTML = "\x3cbr\x3e" + a,
        c.removeChild(c.firstChild)) : c.innerHTML = a;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (a = b.createDocumentFragment(); c.firstChild; )
            a.appendChild(c.firstChild);
        return a
    };
    var qb = function(a) {
        if (a && "number" == typeof a.length) {
            if (da(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (s(a))
                return "function" == typeof a.item
        }
        return !1
    };
    var S = function(a) {
        this.K = a || k.document || window.document
    };
    var sb = function(a, b) {
        var c = b || {}
          , d = c.document || window.document
          , e = window.document.createElement("SCRIPT")
          , f = {
            Ya: e,
            ea: void 0
        }
          , h = new Q(tb,f)
          , l = null
          , n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (l = window.setTimeout(function() {
            ub(e, !0);
            var b = new vb(wb,"Timeout reached for loading script " + a);
            bb(h);
            $a(h, !1, b)
        }, n),
        f.ea = l);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ub(e, c.Eb || !1, l),
            bb(h),
            $a(h, !0, null))
        }
        ;
        e.onerror = function() {
            ub(e, !0, l);
            var b = new vb(xb,"Error while loading script " + a);
            bb(h);
            $a(h, !1, b)
        }
        ;
        kb(e, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        yb(d).appendChild(e);
        return h
    };
    var yb = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    };
    var tb = function() {
        if (this && this.Ya) {
            var a = this.Ya;
            a && "SCRIPT" == a.tagName && ub(a, !0, this.ea)
        }
    };
    var ub = function(a, b, c) {
        null != c && k.clearTimeout(c);
        a.onload = m;
        a.onerror = m;
        a.onreadystatechange = m;
        b && window.setTimeout(function() {
            a && a.parentNode && a.parentNode.removeChild(a)
        }, 0)
    };
    var vb = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        w.call(this, c);
        this.code = a
    };
    var zb = function(a, b) {
        this.Tb = new F(a);
        this.Db = b ? b : "callback";
        this.ea = 5E3
    };
    var Ab = function(a, b, c) {
        return function() {
            Bb(a, !1);
            c && c(b)
        }
    };
    var Cb = function(a, b) {
        return function(c) {
            Bb(a, !0);
            b.apply(void 0, arguments)
        }
    };
    var Bb = function(a, b) {
        k._callbacks_[a] && (b ? delete k._callbacks_[a] : k._callbacks_[a] = m)
    };
    var Db = function() {};
    var Eb = function(a, b, c, d) {
        a = a.ha();
        (new zb(window.cxt_conf.server + "/tagController/error/" + b,"dcscallback")).send({
            clientId: c,
            message: d,
            T: a
        }, function() {}, function() {})
    };
    var Fb = function() {
        0 != Gb && (this[Hb] || (this[Hb] = ++Ib))
    };
    var T = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.D = !1;
        this.Xa = !0
    };
    var Jb = function(a) {
        Jb[" "](a);
        return a
    };
    var Kb = function(a, b) {
        T.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Ma = this.state = null;
        if (a) {
            var c = this.type = a.type;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            var d = a.relatedTarget;
            if (d) {
                if (U) {
                    var e;
                    a: {
                        try {
                            Jb(d.nodeName);
                            e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else
                "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.relatedTarget = d;
            this.offsetX = V || void 0 !== a.offsetX ? a.offsetX : a.layerX;
            this.offsetY = V || void 0 !== a.offsetY ? a.offsetY : a.layerY;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.screenX = a.screenX || 0;
            this.screenY = a.screenY || 0;
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.state = a.state;
            this.Ma = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    var Lb = function(a) {
        return !(!a || !a[Mb])
    };
    var Nb = function(a, b, c, d, e) {
        this.v = a;
        this.ba = null;
        this.src = b;
        this.type = c;
        this.S = !!d;
        this.Y = e;
        this.key = ++Ob;
        this.F = this.R = !1
    };
    var Pb = function(a) {
        a.F = !0;
        a.v = null;
        a.ba = null;
        a.src = null;
        a.Y = null
    };
    var W = function(a) {
        this.src = a;
        this.d = {};
        this.O = 0
    };
    var Qb = function(a, b) {
        var c = b.type;
        if (!(c in a.d))
            return !1;
        var d = a.d[c], e = Rb(d, b), f;
        (f = 0 <= e) && x.splice.call(d, e, 1);
        f && (Pb(b),
        0 == a.d[c].length && (delete a.d[c],
        a.O--));
        return f
    };
    var Sb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.F && f.v == b && f.S == !!c && f.Y == d)
                return e
        }
        return -1
    };
    var Tb = function(a, b, c, d, e) {
        if (p(b)) {
            for (var f = 0; f < b.length; f++)
                Tb(a, b[f], c, d, e);
            return null
        }
        c = Ub(c);
        return Lb(a) ? a.Oa(b, c, d, e) : Vb(a, b, c, !1, d, e)
    };
    var Vb = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = !!e
          , l = Wb(a);
        l || (a[Xb] = l = new W(a));
        c = l.add(b, c, d, e, f);
        if (c.ba)
            return c;
        d = Yb();
        c.ba = d;
        d.src = a;
        d.v = c;
        a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Zb(b.toString()), d);
        $b++;
        return c
    };
    var Yb = function() {
        var a = ac
          , b = bc ? function(c) {
            return a.call(b.src, b.v, c)
        }
        : function(c) {
            c = a.call(b.src, b.v, c);
            if (!c)
                return c
        }
        ;
        return b
    };
    var cc = function(a, b, c, d, e) {
        if (p(b)) {
            for (var f = 0; f < b.length; f++)
                cc(a, b[f], c, d, e);
            return null
        }
        c = Ub(c);
        return Lb(a) ? a.Pa(b, c, d, e) : Vb(a, b, c, !0, d, e)
    };
    var dc = function(a, b, c, d, e) {
        if (p(b))
            for (var f = 0; f < b.length; f++)
                dc(a, b[f], c, d, e);
        else
            c = Ub(c),
            Lb(a) ? a.ua(b, c, d, e) : a && (a = Wb(a)) && (b = a.M(b, c, !!d, e)) && ec(b)
    };
    var ec = function(a) {
        if ("number" == typeof a || !a || a.F)
            return !1;
        var b = a.src;
        if (Lb(b))
            return Qb(b.s, a);
        var c = a.type
          , d = a.ba;
        b.removeEventListener ? b.removeEventListener(c, d, a.S) : b.detachEvent && b.detachEvent(Zb(c), d);
        $b--;
        (c = Wb(b)) ? (Qb(c, a),
        0 == c.O && (c.src = null,
        b[Xb] = null)) : Pb(a);
        return !0
    };
    var Zb = function(a) {
        return a in fc ? fc[a] : fc[a] = "on" + a
    };
    var gc = function(a, b, c, d) {
        var e = 1;
        if (a = Wb(a))
            if (b = a.d[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.S == c && !f.F && (e &= !1 !== hc(f, d))
                }
        return Boolean(e)
    };
    var hc = function(a, b) {
        var c = a.v
          , d = a.Y || a.src;
        a.R && ec(a);
        return c.call(d, b)
    };
    var ac = function(a, b) {
        if (a.F)
            return !0;
        if (!bc) {
            var c;
            if (!(c = b))
                a: {
                    c = ["window", "event"];
                    for (var d = k, e; e = c.shift(); )
                        if (null != d[e])
                            d = d[e];
                        else {
                            c = null;
                            break a
                        }
                    c = d
                }
            e = c;
            c = new Kb(e,this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode)
                        try {
                            e.keyCode = -1;
                            break a
                        } catch (h) {
                            f = !0
                        }
                    if (f || void 0 == e.returnValue)
                        e.returnValue = !0
                }
                e = [];
                for (f = c.currentTarget; f; f = f.parentNode)
                    e.push(f);
                for (var f = a.type, l = e.length - 1; !c.D && 0 <= l; l--)
                    c.currentTarget = e[l],
                    d &= gc(e[l], f, !0, c);
                for (l = 0; !c.D && l < e.length; l++)
                    c.currentTarget = e[l],
                    d &= gc(e[l], f, !1, c)
            }
            return d
        }
        return hc(a, new Kb(b,this))
    };
    var Wb = function(a) {
        a = a[Xb];
        return a instanceof W ? a : null
    };
    var Ub = function(a) {
        if (s(a))
            return a;
        a[ic] || (a[ic] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[ic]
    };
    var jc = function() {
        Fb.call(this);
        this.s = new W(this);
        this.Ab = this;
        this.Sa = null
    };
    var kc = function(a, b, c, d) {
        b = a.s.d[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.F && h.S == c) {
                var l = h.v
                  , n = h.Y || h.src;
                h.R && Qb(a.s, h);
                e = !1 !== l.call(n, d) && e
            }
        }
        return e && 0 != d.Xa
    };
    var lc = function(a) {
        jc.call(this);
        this.Da = a
    };
    var mc = function(a) {
        a.Da--;
        0 == a.Da && a.dispatchEvent("latchfinished")
    };
    var X = function(a) {
        Fb.call(this);
        this.na = a;
        this.b = {}
    };
    var nc = function(a, b, c, d, e, f) {
        if (p(c))
            for (var h = 0; h < c.length; h++)
                nc(a, b, c[h], d, e, f);
        else {
            b = cc(b, c, d || a.handleEvent, e, f || a.na || a);
            if (!b)
                return a;
            a.b[b.key] = b
        }
        return a
    };
    var oc = function(a, b) {
        X.call(this);
        this.l = a;
        this.G = b;
        this.H = new Db
    };
    var pc = function(a, b, c) {
        if (null != a.l) {
            var d = la(a.l)
              , e = jb()[0];
            0 != d.length && (null != b && null != c && qc(a, d, b, c),
            y(d, function(a) {
                a = mb("script", {
                    type: "text/javascript",
                    async: !0,
                    src: window.cxt_conf.resourceUrl + a.Va,
                    onerror: u(this.vb, this, a),
                    onload: u(this.yb, this)
                });
                e.parentNode && e.parentNode.insertBefore(a, e.nextSibling)
            }, a))
        }
    };
    var qc = function(a, b, c, d) {
        a.I = new lc(b.length);
        nc(a, a.I, "latchfinished", c, !0, d)
    };
    var Y = function() {
        this.n = new S
    };
    var rc = function() {
        this.n = new S
    };
    var sc = function() {
        this.n = new S
    };
    var tc = function() {
        this.n = new S
    };
    var uc = function() {
        this.n = new S
    };
    var vc = function() {
        this.n = new S
    };
    var wc = function() {
        this.n = new S;
        this.sb = new rc;
        this.ob = new sc;
        this.qb = new tc;
        this.lb = new uc;
        this.xb = new vc
    };
    var xc = function() {
        this.n = new S
    };
    var yc = function() {
        this.jb = new xc;
        this.ib = new wc;
        this.mb = new uc;
        this.tb = new rc;
        this.pb = new sc;
        this.rb = new tc;
        this.zb = new vc
    };
    var zc = function(a, b, c) {
        var d = {}
          , e = null;
        y(c, function(a) {
            for (var c = Ac(this, a), l = a.Kb, n = window, r = c.e(l, n, b); null == r && n != window.top; ) {
                var n = n.parent, t;
                try {
                    t = null != n.cxt_conf ? !0 : !1
                } catch (id) {
                    t = !1
                }
                t && (r = c.e(l, n, b))
            }
            e = r;
            null != e && ("COMPLEX_JAVASCRIPT_VAR" != a.V ? d[a.Ob] = e : na(d, e))
        }, a);
        return d
    };
    var Ac = function(a, b) {
        switch (b.V) {
        case "AUTO":
            return a.ib;
        case "HTML_ID":
            return a.pb;
        case "HTML_NAME":
            return a.rb;
        case "COMPLEX_JAVASCRIPT_VAR":
            return a.jb;
        case "JAVASCRIPT_VAR":
            return a.tb;
        case "CONTEXT_VAR":
            return a.mb;
        case "SCRIPT_URL_VAR":
            return a.zb
        }
    };
    var Bc = function(a) {
        var b = [];
        Cc(new Dc, a, b);
        return b.join("")
    };
    var Dc = function() {
        this.ca = void 0
    };
    var Cc = function(a, b, c) {
        switch (typeof b) {
        case "string":
            Ec(b, c);
            break;
        case "number":
            c.push((0,
            window.isFinite)(b) && !(0,
            window.isNaN)(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == b) {
                c.push("null");
                break
            }
            if (p(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++)
                    c.push(e),
                    e = b[f],
                    Cc(a, a.ca ? a.ca.call(b, String(f), e) : e, c),
                    e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (f in b)
                Object.prototype.hasOwnProperty.call(b, f) && (e = b[f],
                "function" != typeof e && (c.push(d),
                Ec(f, c),
                c.push(":"),
                Cc(a, a.ca ? a.ca.call(b, f, e) : e, c),
                d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    };
    var Ec = function(a, b) {
        b.push('"', a.replace(Fc, function(a) {
            if (a in Gc)
                return Gc[a];
            var b = a.charCodeAt(0)
              , e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Gc[a] = e + b.toString(16)
        }), '"')
    };
    var Hc = function() {
        this.H = new Db
    };
    var Ic = function(a, b, c) {
        var d = new F(window.cxt_conf.server + "/tagController/tagDataPixel/" + b);
        ma(c, function(a, b) {
            if (da(a)) {
                var c = Bc(a);
                G(d);
                d.i.set(b, c)
            } else
                G(d),
                d.i.set(b, a)
        }, a);
        return d.toString()
    };
    var Jc = function(a, b, c) {
        this.Q = a;
        this.ia = b;
        this.wb = c
    };
    var Kc = function(a) {
        var b;
        b = b || Lc;
        var c = a.ia.W.filter(function(a) {
            return 0 <= b.indexOf(a.V)
        });
        return zc(a.wb, a.Q, c)
    };
    var Mc = function() {
        var a = Nc()
          , b = new S(window.document);
        return function(c) {
            var d, e = c.content;
            d = Kc(this);
            for (var f = /\${{(.+?)}}/, h; h = e.match(f); )
                var l = h[1]
                  , n = h.index
                  , e = e.substring(0, n) + (null == d[l] ? "" : String(d[l])) + e.substring(n + h[0].length);
            d = e;
            c.Bb ? Oc(a, d) : (c = b.Gb("iframe", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: 'javascript:""'
            }),
            c.width = "0",
            c.height = "0",
            c.style.display = "none",
            c.scrolling = "no",
            c.Na = "0",
            a.appendChild(c),
            c = c.contentDocument || c.contentWindow.document,
            c.open(),
            c.write(d),
            c.close())
        }
    };
    var Oc = function(a, b) {
        var c = mb("div", {
            name: "cxt_tag"
        })
          , d = rb(b);
        c.style.display = "none";
        c.scrolling = "no";
        c.Na = "0";
        a.appendChild(c);
        d.src && "" != d.src ? (c = window.document.createElement("script"),
        c.type = "text/javascript",
        c.src = d.src,
        a.appendChild(c)) : (c.appendChild(d),
        eval(d.text))
    };
    var Nc = function() {
        var a = window.document;
        return null === a.body ? a.head : a.body
    };
    var Z = function(a, b, c) {
        X.call(this);
        this.Q = a;
        this.G = b;
        this.P = window.crypto.randomUUID();
        this.kb = new zb(window.cxt_conf.server + "/tagController/tagConf/" + b + "/" + a,"dcscallback");
        this.Fa = null == c || c;
        this.l = null;
        this.H = new Db;
        this.Ea = new yc;
        this.nb = new Hc
    };
    var Pc = function() {
        var a = window.cxt_conf.tag;
        a.kb.send({}, u(a.Ta, a), u(a.ub, a))
    };
    var Qc = function() {};
    var Rc = function(a, b) {
        var c = !0;
        null != a && (c = a);
        var d = window.cxt_conf.pageType;
        null != b && (d = b);
        window.cxt_conf.jsparsers = {};
        window.cxt_conf.resourceUrl = window.cxt_conf.resourceUrl || "https://ssl.connextra.com";
        window.cxt_conf.tag = new Z(d,window.cxt_conf.clientId,c);
        window.cxt_conf.safePageParser = new Qc;
        null != window.cxt_conf.configuration && null != window.cxt_conf.configuration[d] ? window.cxt_conf.tag.Ta(window.cxt_conf.configuration[d]) : Pc();
        return function() {}
    };
    var k = this
      , Hb = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ib = 0
      , Sc = Date.now || function() {
        return +new Date
    }
    ;
    var Tc = {
        Ub: "AUTO",
        Xb: "HTML_ID",
        Yb: "HTML_NAME",
        Vb: "COMPLEX_JAVASCRIPT_VAR",
        Zb: "JAVASCRIPT_VAR",
        Wb: "CONTEXT_VAR",
        $b: "SCRIPT_URL_VAR"
    };
    v(w, Error);
    w.prototype.name = "CustomError";
    var C = {
        ga: !1,
        startsWith: function(a, b) {
            return 0 == a.lastIndexOf(b, 0)
        },
        kc: function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        fc: function(a, b) {
            return 0 == C.Ga(b, a.substr(0, b.length))
        },
        dc: function(a, b) {
            return 0 == C.Ga(b, a.substr(a.length - b.length, b.length))
        },
        ec: function(a, b) {
            return a.toLowerCase() == b.toLowerCase()
        },
        Gc: function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
                d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        hc: function(a) {
            return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        },
        $: function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        rc: function(a) {
            return C.$(C.Mb(a))
        },
        qc: function(a) {
            return !/[^\t\n\r ]/.test(a)
        },
        oc: function(a) {
            return !/[^a-zA-Z]/.test(a)
        },
        tc: function(a) {
            return !/[^0-9]/.test(a)
        },
        pc: function(a) {
            return !/[^a-zA-Z0-9]/.test(a)
        },
        uc: function(a) {
            return " " == a
        },
        vc: function(a) {
            return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a
        },
        Ec: function(a) {
            return a.replace(/(\r\n|\r|\n)+/g, " ")
        },
        cc: function(a) {
            return a.replace(/(\r\n|\r|\n)/g, "\n")
        },
        yc: function(a) {
            return a.replace(/\xa0|\s/g, " ")
        },
        xc: function(a) {
            return a.replace(/\xa0|[ \t]+/g, " ")
        },
        gc: function(a) {
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        },
        trim: function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        trimLeft: function(a) {
            return a.replace(/^[\s\xa0]+/, "")
        },
        trimRight: function(a) {
            return a.replace(/[\s\xa0]+$/, "")
        },
        Ga: function(a, b) {
            var c = String(a).toLowerCase()
              , d = String(b).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        },
        Qa: /(\.\d+)|(\d+)|(\D+)/g,
        zc: function(a, b) {
            if (a == b)
                return 0;
            if (!a)
                return -1;
            if (!b)
                return 1;
            for (var c = a.toLowerCase().match(C.Qa), d = b.toLowerCase().match(C.Qa), e = Math.min(c.length, d.length), f = 0; f < e; f++) {
                var h = c[f]
                  , l = d[f];
                if (h != l)
                    return c = (0,
                    window.parseInt)(h, 10),
                    !(0,
                    window.isNaN)(c) && (d = (0,
                    window.parseInt)(l, 10),
                    !(0,
                    window.isNaN)(d) && c - d) ? c - d : h < l ? -1 : 1
            }
            return c.length != d.length ? c.length - d.length : a < b ? -1 : 1
        },
        va: function(a) {
            return (0,
            window.encodeURIComponent)(String(a))
        },
        eb: function(a) {
            return (0,
            window.decodeURIComponent)(a.replace(/\+/g, " "))
        },
        Nb: function(a, b) {
            return a.replace(/(\r\n|\r|\n)/g, b ? "\x3cbr /\x3e" : "\x3cbr\x3e")
        },
        Z: function(a, b) {
            if (b)
                a = a.replace(C.wa, "\x26amp;").replace(C.za, "\x26lt;").replace(C.ya, "\x26gt;").replace(C.Ba, "\x26quot;").replace(C.Ca, "\x26#39;").replace(C.Aa, "\x26#0;"),
                C.ga && (a = a.replace(C.xa, "\x26#101;"));
            else {
                if (!C.fb.test(a))
                    return a;
                -1 != a.indexOf("\x26") && (a = a.replace(C.wa, "\x26amp;"));
                -1 != a.indexOf("\x3c") && (a = a.replace(C.za, "\x26lt;"));
                -1 != a.indexOf("\x3e") && (a = a.replace(C.ya, "\x26gt;"));
                -1 != a.indexOf('"') && (a = a.replace(C.Ba, "\x26quot;"));
                -1 != a.indexOf("'") && (a = a.replace(C.Ca, "\x26#39;"));
                -1 != a.indexOf("\x00") && (a = a.replace(C.Aa, "\x26#0;"));
                C.ga && -1 != a.indexOf("e") && (a = a.replace(C.xa, "\x26#101;"))
            }
            return a
        },
        wa: /&/g,
        za: /</g,
        ya: />/g,
        Ba: /"/g,
        Ca: /'/g,
        Aa: /\x00/g,
        xa: /e/g
    };
    C.fb = C.ga ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
    C.ab = function(a) {
        return C.contains(a, "\x26") ? "document"in k ? C.bb(a) : C.Rb(a) : a
    }
    ;
    C.Nc = function(a, b) {
        return C.contains(a, "\x26") ? C.bb(a, b) : a
    }
    ;
    C.bb = function(a, b) {
        var c = {
            "\x26amp;": "\x26",
            "\x26lt;": "\x3c",
            "\x26gt;": "\x3e",
            "\x26quot;": '"'
        }, d;
        d = b ? b.createElement("div") : k.document.createElement("div");
        return a.replace(C.hb, function(a, b) {
            var h = c[a];
            if (h)
                return h;
            if ("#" == b.charAt(0)) {
                var l = Number("0" + b.substr(1));
                (0,
                window.isNaN)(l) || (h = String.fromCharCode(l))
            }
            h || (d.innerHTML = a + " ",
            h = d.firstChild.nodeValue.slice(0, -1));
            return c[a] = h
        })
    }
    ;
    C.Rb = function(a) {
        return a.replace(/&([^;]+);/g, function(a, c) {
            switch (c) {
            case "amp":
                return "\x26";
            case "lt":
                return "\x3c";
            case "gt":
                return "\x3e";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!(0,
                    window.isNaN)(d))
                        return String.fromCharCode(d)
                }
                return a
            }
        })
    }
    ;
    C.hb = /&([^;\s<&]+);?/g;
    C.Oc = function(a, b) {
        return C.Nb(a.replace(/  /g, " \x26#160;"), b)
    }
    ;
    C.Bc = function(a) {
        return a.replace(/(^|[\n ]) /g, "$1\u00a0")
    }
    ;
    C.Fc = function(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
            var e = 1 == c ? b : b.charAt(d);
            if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
                return a.substring(1, a.length - 1)
        }
        return a
    }
    ;
    C.truncate = function(a, b, c) {
        c && (a = C.ab(a));
        a.length > b && (a = a.substring(0, b - 3) + "...");
        c && (a = C.Z(a));
        return a
    }
    ;
    C.Mc = function(a, b, c, d) {
        c && (a = C.ab(a));
        if (d && a.length > b)
            d > b && (d = b),
            a = a.substring(0, b - d) + "..." + a.substring(a.length - d);
        else if (a.length > b) {
            d = Math.floor(b / 2);
            var e = a.length - d;
            a = a.substring(0, d + b % 2) + "..." + a.substring(e)
        }
        c && (a = C.Z(a));
        return a
    }
    ;
    C.ta = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    };
    C.aa = {
        "'": "\\'"
    };
    C.quote = function(a) {
        a = String(a);
        if (a.quote)
            return a.quote();
        for (var b = ['"'], c = 0; c < a.length; c++) {
            var d = a.charAt(c)
              , e = d.charCodeAt(0);
            b[c + 1] = C.ta[d] || (31 < e && 127 > e ? d : C.La(d))
        }
        b.push('"');
        return b.join("")
    }
    ;
    C.lc = function(a) {
        for (var b = [], c = 0; c < a.length; c++)
            b[c] = C.La(a.charAt(c));
        return b.join("")
    }
    ;
    C.La = function(a) {
        if (a in C.aa)
            return C.aa[a];
        if (a in C.ta)
            return C.aa[a] = C.ta[a];
        var b = a
          , c = a.charCodeAt(0);
        if (31 < c && 127 > c)
            b = a;
        else {
            if (256 > c) {
                if (b = "\\x",
                16 > c || 256 < c)
                    b += "0"
            } else
                b = "\\u",
                4096 > c && (b += "0");
            b += c.toString(16).toUpperCase()
        }
        return C.aa[a] = b
    }
    ;
    C.Ic = function(a) {
        for (var b = {}, c = 0; c < a.length; c++)
            b[a.charAt(c)] = !0;
        return b
    }
    ;
    C.contains = function(a, b) {
        return -1 != a.indexOf(b)
    }
    ;
    C.Ha = function() {
        return C.contains(D.toLowerCase(), "webkit")
    }
    ;
    C.ic = function(a, b) {
        return a && b ? a.split(b).length - 1 : 0
    }
    ;
    C.Cc = function(a, b, c) {
        var d = a;
        0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
        return d
    }
    ;
    C.remove = function(a, b) {
        var c = new RegExp(C.qa(b),"");
        return a.replace(c, "")
    }
    ;
    C.Ua = function(a, b) {
        var c = new RegExp(C.qa(b),"g");
        return a.replace(c, "")
    }
    ;
    C.qa = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    ;
    C.repeat = function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    C.Ac = function(a, b, c) {
        a = void 0 !== c ? a.toFixed(c) : String(a);
        c = a.indexOf(".");
        -1 == c && (c = a.length);
        return C.repeat("0", Math.max(0, b - c)) + a
    }
    ;
    C.Mb = function(a) {
        return null == a ? "" : String(a)
    }
    ;
    C.bc = function(a) {
        return Array.prototype.join.call(arguments, "")
    }
    ;
    C.mc = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Sc()).toString(36)
    }
    ;
    C.Fb = function(a) {
        var b = 0
          , c = C.trim(String(Uc)).split(".");
        a = C.trim(String(a)).split(".");
        for (var d = Math.max(c.length, a.length), e = 0; 0 == b && e < d; e++) {
            var f = c[e] || ""
              , h = a[e] || ""
              , l = RegExp("(\\d*)(\\D*)", "g")
              , n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = l.exec(f) || ["", "", ""]
                  , t = n.exec(h) || ["", "", ""];
                if (0 == r[0].length && 0 == t[0].length)
                    break;
                b = C.la(0 == r[1].length ? 0 : (0,
                window.parseInt)(r[1], 10), 0 == t[1].length ? 0 : (0,
                window.parseInt)(t[1], 10)) || C.la(0 == r[2].length, 0 == t[2].length) || C.la(r[2], t[2])
            } while (0 == b)
        }
        return b
    }
    ;
    C.la = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    C.gb = 4294967296;
    C.nc = function(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c),
            b %= C.gb;
        return b
    }
    ;
    C.Sb = 2147483648 * Math.random() | 0;
    C.jc = function() {
        return "goog_" + C.Sb++
    }
    ;
    C.Jc = function(a) {
        var b = Number(a);
        return 0 == b && C.$(a) ? window.NaN : b
    }
    ;
    C.sc = function(a) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a)
    }
    ;
    C.wc = function(a) {
        return /^([A-Z][a-z]*)+$/.test(a)
    }
    ;
    C.Hc = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
    ;
    C.Kc = function(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }
    ;
    C.Lc = function(a, b) {
        var c = q(b) ? C.qa(b) : "\\s";
        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])","g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    }
    ;
    C.parseInt = function(a) {
        (0,
        window.isFinite)(a) && (a = String(a));
        return q(a) ? /^\s*-?0x/i.test(a) ? (0,
        window.parseInt)(a, 16) : (0,
        window.parseInt)(a, 10) : window.NaN
    }
    ;
    C.Dc = function(a, b, c) {
        a = a.split(b);
        for (var d = []; 0 < c && a.length; )
            d.push(a.shift()),
            c--;
        a.length && d.push(a.join(b));
        return d
    }
    ;
    var x = Array.prototype
      , Rb = x.indexOf ? function(a, b, c) {
        return x.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a))
            return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , y = x.forEach ? function(a, b, c) {
        x.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , fb = x.some ? function(a, b, c) {
        return x.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    var oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    g = pa.prototype;
    g.B = function() {
        qa(this);
        for (var a = [], b = 0; b < this.b.length; b++)
            a.push(this.p[this.b[b]]);
        return a
    }
    ;
    g.L = function() {
        qa(this);
        return this.b.concat()
    }
    ;
    g.J = function(a) {
        return A(this.p, a)
    }
    ;
    g.$ = function() {
        return 0 == this.c
    }
    ;
    g.remove = function(a) {
        return A(this.p, a) ? (delete this.p[a],
        this.c--,
        this.b.length > 2 * this.c && qa(this),
        !0) : !1
    }
    ;
    g.get = function(a, b) {
        return A(this.p, a) ? this.p[a] : b
    }
    ;
    g.set = function(a, b) {
        A(this.p, a) || (this.c++,
        this.b.push(a));
        this.p[a] = b
    }
    ;
    g.forEach = function(a, b) {
        for (var c = this.L(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    g.clone = function() {
        return new pa(this)
    }
    ;
    var D;
    a: {
        var Vc = k.navigator;
        if (Vc) {
            var Wc = Vc.userAgent;
            if (Wc) {
                D = Wc;
                break a
            }
        }
        D = ""
    }
    ;var Xc = B("Opera") || B("OPR")
      , R = B("Trident") || B("MSIE")
      , U = B("Gecko") && !C.Ha() && !(B("Trident") || B("MSIE"))
      , V = C.Ha();
    V && B("Mobile");
    var Yc, Zc = ra();
    Yc = Zc && Zc.platform || "";
    C.contains(Yc, "Mac");
    C.contains(Yc, "Win");
    C.contains(Yc, "Linux");
    ra() && C.contains(ra().appVersion || "", "X11");
    var $ = D;
    $ && C.contains($, "Android");
    $ && C.contains($, "iPhone");
    $ && C.contains($, "iPad");
    var Uc = function() {
        var a = "", b;
        if (Xc && k.opera)
            return a = k.opera.version,
            s(a) ? a() : a;
        U ? b = /rv\:([^\);]+)(\)|;)/ : R ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : V && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(D)) ? a[1] : "");
        return R && (b = sa(),
        b > (0,
        window.parseFloat)(a)) ? String(b) : a
    }()
      , ta = {}
      , $c = k.document
      , ad = $c && R ? sa() || ("CSS1Compat" == $c.compatMode ? (0,
    window.parseInt)(Uc, 10) : 5) : void 0;
    var wa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/
      , va = V;
    g = F.prototype;
    g.r = "";
    g.w = "";
    g.o = "";
    g.C = null;
    g.m = "";
    g.t = "";
    g.Lb = !1;
    g.h = !1;
    g.toString = function() {
        var a = []
          , b = this.r;
        b && a.push(J(b, bd), ":");
        if (b = this.o) {
            a.push("//");
            var c = this.w;
            c && a.push(J(c, bd), "@");
            a.push(C.va(b));
            b = this.C;
            null != b && a.push(":", String(b))
        }
        if (b = this.m)
            this.o && "/" != b.charAt(0) && a.push("/"),
            a.push(J(b, "/" == b.charAt(0) ? cd : dd));
        (b = this.i.toString()) && a.push("?", b);
        (b = this.t) && a.push("#", J(b, ed));
        return a.join("")
    }
    ;
    g.resolve = function(a) {
        var b = this.clone()
          , c = !!a.r;
        c ? xa(b, a.r) : c = !!a.w;
        if (c) {
            var d = a.w;
            G(b);
            b.w = d
        } else
            c = !!a.o;
        c ? (d = a.o,
        G(b),
        b.o = d) : c = null != a.C;
        d = a.m;
        if (c)
            ya(b, a.C);
        else if (c = !!a.m) {
            if ("/" != d.charAt(0))
                if (this.o && !this.m)
                    d = "/" + d;
                else {
                    var e = b.m.lastIndexOf("/");
                    -1 != e && (d = b.m.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (C.contains(e, "./") || C.contains(e, "/.")) {
                for (var d = C.startsWith(e, "/"), e = e.split("/"), f = [], h = 0; h < e.length; ) {
                    var l = e[h++];
                    "." == l ? d && h == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && h == e.length && f.push("")) : (f.push(l),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? (G(b),
        b.m = d) : c = "" !== a.i.toString();
        c ? za(b, H(a.i.toString())) : c = !!a.t;
        c && (a = a.t,
        G(b),
        b.t = a);
        return b
    }
    ;
    g.clone = function() {
        return new F(this)
    }
    ;
    g.ra = function(a) {
        this.h = a;
        this.i && this.i.ra(a);
        return this
    }
    ;
    var bd = /[#\/\?@]/g
      , dd = /[\#\?:]/g
      , cd = /[\#\?]/g
      , Aa = /[\#\?@]/g
      , ed = /#/g;
    g = I.prototype;
    g.a = null;
    g.c = null;
    g.add = function(a, b) {
        K(this);
        this.g = null;
        a = L(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.c++;
        return this
    }
    ;
    g.remove = function(a) {
        K(this);
        a = L(this, a);
        return this.a.J(a) ? (this.g = null,
        this.c -= this.a.get(a).length,
        this.a.remove(a)) : !1
    }
    ;
    g.$ = function() {
        K(this);
        return 0 == this.c
    }
    ;
    g.J = function(a) {
        K(this);
        a = L(this, a);
        return this.a.J(a)
    }
    ;
    g.L = function() {
        K(this);
        for (var a = this.a.B(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    g.B = function(a) {
        K(this);
        var b = [];
        if (q(a))
            this.J(a) && (b = ia(b, this.a.get(L(this, a))));
        else {
            a = this.a.B();
            for (var c = 0; c < a.length; c++)
                b = ia(b, a[c])
        }
        return b
    }
    ;
    g.set = function(a, b) {
        K(this);
        this.g = null;
        a = L(this, a);
        this.J(a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    }
    ;
    g.get = function(a, b) {
        var c = a ? this.B(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    g.toString = function() {
        if (this.g)
            return this.g;
        if (!this.a)
            return "";
        for (var a = [], b = this.a.L(), c = 0; c < b.length; c++)
            for (var d = b[c], e = C.va(d), d = this.B(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "\x3d" + C.va(d[f]));
                a.push(h)
            }
        return this.g = a.join("\x26")
    }
    ;
    g.clone = function() {
        var a = new I;
        a.g = this.g;
        this.a && (a.a = this.a.clone(),
        a.c = this.c);
        return a
    }
    ;
    g.ra = function(a) {
        a && !this.h && (K(this),
        this.g = null,
        this.a.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c),
            Ca(this, d, a))
        }, this));
        this.h = a
    }
    ;
    var Pa;
    var Ja, La = !1, Ma = [];
    var N = 0
      , Qa = 2
      , P = 3;
    M.prototype.then = function(a, b, c) {
        return Va(this, s(a) ? a : null, s(b) ? b : null, c)
    }
    ;
    Ea(M);
    M.prototype.cancel = function(a) {
        this.j == N && Ia(function() {
            var b = new Wa(a);
            Ra(this, b)
        }, this)
    }
    ;
    M.prototype.Za = function(a) {
        this.j = N;
        O(this, Qa, a)
    }
    ;
    M.prototype.$a = function(a) {
        this.j = N;
        O(this, P, a)
    }
    ;
    M.prototype.Ib = function() {
        for (; this.f && this.f.length; ) {
            var a = this.f;
            this.f = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b]
                  , d = this.q;
                this.j == Qa ? c.oa(d) : (Sa(this),
                c.pa(d))
            }
        }
        this.ma = !1
    }
    ;
    var Za = Ga;
    v(Wa, w);
    Wa.prototype.name = "cancel";
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    Q.prototype.cancel = function(a) {
        if (this.A)
            this.q instanceof Q && this.q.cancel();
        else {
            if (this.k) {
                var b = this.k;
                delete this.k;
                a ? b.cancel(a) : (b.ka--,
                0 >= b.ka && b.cancel())
            }
            this.Ra ? this.Ra.call(this.Ja, this) : this.sa = !0;
            this.A || (a = new ib,
            bb(this),
            $a(this, !1, a))
        }
    }
    ;
    Q.prototype.Ia = function(a, b) {
        this.ja = !1;
        $a(this, a, b)
    }
    ;
    Q.prototype.then = function(a, b, c) {
        var d, e, f = new M(function(a, b) {
            d = a;
            e = b
        }
        );
        db(this, d, function(a) {
            a instanceof ib ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    }
    ;
    Ea(Q);
    v(cb, w);
    cb.prototype.message = "Deferred has already fired";
    cb.prototype.name = "AlreadyCalledError";
    v(ib, w);
    ib.prototype.message = "Deferred was canceled";
    ib.prototype.name = "CanceledError";
    hb.prototype.Qb = function() {
        delete gb[this.u];
        throw this.Hb;
    }
    ;
    var gb = {};
    var ob = !R || R && 9 <= ad;
    !U && !R || R && R && 9 <= ad || U && E("1.9.1");
    R && E("9");
    var lb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    g = S.prototype;
    g.Gb = function(a, b, c) {
        return nb(this.K, arguments)
    }
    ;
    g.createElement = function(a) {
        return this.K.createElement(a)
    }
    ;
    g.createTextNode = function(a) {
        return this.K.createTextNode(String(a))
    }
    ;
    g.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    g.contains = function(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    var xb = 0
      , wb = 1;
    v(vb, w);
    var fd = 0;
    zb.prototype.send = function(a, b, c, d) {
        a = a || null;
        d = d || "_" + (fd++).toString(36) + Sc().toString(36);
        k._callbacks_ || (k._callbacks_ = {});
        var e = this.Tb.clone();
        if (a)
            for (var f in a)
                a.hasOwnProperty && !a.hasOwnProperty(f) || Ba(e, f, a[f]);
        b && (k._callbacks_[d] = Cb(d, b),
        Ba(e, this.Db, "_callbacks_." + d));
        b = sb(e.toString(), {
            timeout: this.ea,
            Eb: !0
        });
        db(b, null, Ab(d, a, c), void 0);
        return {
            u: d,
            Ka: b
        }
    }
    ;
    zb.prototype.cancel = function(a) {
        a && (a.Ka && a.Ka.cancel(),
        a.u && Bb(a.u, !1))
    }
    ;
    Db.prototype.ha = function() {
        return (new Date).getTime() + "" + Math.floor(101 * Math.random())
    }
    ;
    var Gb = 0;
    var bc = !R || R && 9 <= ad
      , gd = R && !E("9");
    !V || E("528");
    U && E("1.9b") || R && E("8") || Xc && E("9.5") || V && E("528");
    U && !E("8") || R && E("9");
    T.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Xa = !1
    }
    ;
    Jb[" "] = m;
    v(Kb, T);
    Kb.prototype.preventDefault = function() {
        Kb.Pb.preventDefault.call(this);
        var a = this.Ma;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        gd)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Mb = "closure_listenable_" + (1E6 * Math.random() | 0)
      , Ob = 0;
    W.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.d[f];
        a || (a = this.d[f] = [],
        this.O++);
        var h = Sb(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.R = !1)) : (b = new Nb(b,this.src,f,!!d,e),
        b.R = c,
        a.push(b));
        return b
    }
    ;
    W.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.d))
            return !1;
        var e = this.d[a];
        b = Sb(e, b, c, d);
        return -1 < b ? (Pb(e[b]),
        x.splice.call(e, b, 1),
        0 == e.length && (delete this.d[a],
        this.O--),
        !0) : !1
    }
    ;
    W.prototype.Ua = function(a) {
        a = a && a.toString();
        var b = 0, c;
        for (c in this.d)
            if (!a || c == a) {
                for (var d = this.d[c], e = 0; e < d.length; e++)
                    ++b,
                    Pb(d[e]);
                delete this.d[c];
                this.O--
            }
        return b
    }
    ;
    W.prototype.M = function(a, b, c, d) {
        a = this.d[a.toString()];
        var e = -1;
        a && (e = Sb(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    var Xb = "closure_lm_" + (1E6 * Math.random() | 0)
      , fc = {}
      , $b = 0
      , ic = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    v(jc, Fb);
    jc.prototype[Mb] = !0;
    g = jc.prototype;
    g.addEventListener = function(a, b, c, d) {
        Tb(this, a, b, c, d)
    }
    ;
    g.removeEventListener = function(a, b, c, d) {
        dc(this, a, b, c, d)
    }
    ;
    g.dispatchEvent = function(a) {
        var b, c = this.Sa;
        if (c)
            for (b = []; c; c = c.Sa)
                b.push(c);
        var c = this.Ab
          , d = a.type || a;
        if (q(a))
            a = new T(a,c);
        else if (a instanceof T)
            a.target = a.target || c;
        else {
            var e = a;
            a = new T(d,c);
            na(a, e)
        }
        var e = !0, f;
        if (b)
            for (var h = b.length - 1; !a.D && 0 <= h; h--)
                f = a.currentTarget = b[h],
                e = kc(f, d, !0, a) && e;
        a.D || (f = a.currentTarget = c,
        e = kc(f, d, !0, a) && e,
        a.D || (e = kc(f, d, !1, a) && e));
        if (b)
            for (h = 0; !a.D && h < b.length; h++)
                f = a.currentTarget = b[h],
                e = kc(f, d, !1, a) && e;
        return e
    }
    ;
    g.Oa = function(a, b, c, d) {
        return this.s.add(String(a), b, !1, c, d)
    }
    ;
    g.Pa = function(a, b, c, d) {
        return this.s.add(String(a), b, !0, c, d)
    }
    ;
    g.ua = function(a, b, c, d) {
        return this.s.remove(String(a), b, c, d)
    }
    ;
    g.M = function(a, b, c, d) {
        return this.s.M(String(a), b, c, d)
    }
    ;
    v(lc, jc);
    v(X, Fb);
    var hd = [];
    g = X.prototype;
    g.Oa = function(a, b, c, d) {
        p(b) || (b && (hd[0] = b.toString()),
        b = hd);
        for (var e = 0; e < b.length; e++) {
            var f = Tb(a, b[e], c || this.handleEvent, d || !1, this.na || this);
            if (!f)
                break;
            this.b[f.key] = f
        }
        return this
    }
    ;
    g.Pa = function(a, b, c, d) {
        return nc(this, a, b, c, d)
    }
    ;
    g.ua = function(a, b, c, d, e) {
        if (p(b))
            for (var f = 0; f < b.length; f++)
                this.ua(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            e = e || this.na || this,
            c = Ub(c),
            d = !!d,
            b = Lb(a) ? a.M(b, c, d, e) : a ? (a = Wb(a)) ? a.M(b, c, d, e) : null : null,
            b && (ec(b),
            delete this.b[b.key]);
        return this
    }
    ;
    g.Ua = function() {
        ma(this.b, ec);
        this.b = {}
    }
    ;
    g.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    v(oc, X);
    oc.prototype.vb = function(a) {
        null != this.I && mc(this.I);
        Eb(this.H, 907, this.G, "Script could not be loaded on page " + window.cxt_conf.resourceUrl + a.Va)
    }
    ;
    oc.prototype.yb = function() {
        null != this.I && mc(this.I)
    }
    ;
    v(rc, Y);
    rc.prototype.e = function(a, b) {
        var c = b[a];
        null !== c && "number" !== typeof c && "string" !== typeof c && (c = null);
        return c
    }
    ;
    v(sc, Y);
    sc.prototype.e = function(a, b) {
        this.n.K = b.document;
        var c = q(a) ? this.n.K.getElementById(a) : a;
        return null != c ? c.value : null
    }
    ;
    v(tc, Y);
    tc.prototype.e = function(a, b) {
        var c = b.document.getElementsByName(a);
        if ("undefined" === typeof c || null === c)
            return null;
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e.name == a || e.id != a) {
                if ("undefined" !== typeof e && null !== e && e.id !== a)
                    return e.value;
                break
            }
        }
        return null
    }
    ;
    v(uc, Y);
    uc.prototype.e = function(a, b) {
        return null != b.cxt_conf && null != b.cxt_conf[a] ? b.cxt_conf[a] : null
    }
    ;
    v(vc, Y);
    vc.prototype.e = function(a, b, c) {
        null != b.cxt_conf && null != b.cxt_conf.currentScript && null != b.cxt_conf.currentScript[c] && null != b.cxt_conf.currentScript[c].src ? (b = b.cxt_conf.currentScript[c].src,
        b || (b = window.location.href),
        a = a.replace(/[\[\]]/g, "\\$\x26"),
        a = (a = (new RegExp("[?\x26]" + a + "(\x3d([^\x26#]*)|\x26|#|$)")).exec(b)) ? a[2] ? (0,
        window.decodeURIComponent)(a[2].replace(/\+/g, " ")) : "" : null) : a = null;
        return a
    }
    ;
    v(wc, Y);
    wc.prototype.e = function(a, b, c) {
        var d = this.lb.e(a, b, c);
        null != d || (d = this.sb.e(a, b, c));
        null != d || (d = this.ob.e(a, b, c));
        null != d || (d = this.qb.e(a, b, c));
        null != d || (d = this.xb.e(a, b, c));
        return d
    }
    ;
    v(xc, Y);
    xc.prototype.e = function(a, b, c) {
        return null != b.cxt_conf && null != b.cxt_conf.jsparsers && null != b.cxt_conf.jsparsers[a] ? b.cxt_conf.jsparsers[a](c) : null
    }
    ;
    var Gc = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Fc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Hc.prototype.submit = function(a, b, c, d) {
        na(a, {
            page: c,
            T: this.ha()
        });
        c = new window.XMLHttpRequest;
        if ("withCredentials"in c && d)
            switch (c.open("POST", window.cxt_conf.server + "/tagController/tagData/" + b, d),
            c.withCredentials = !0,
            c.send(Bc(a)),
            c.readyState) {
            case 4:
                a: switch (c.status) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    a = !0;
                    break a;
                default:
                    a = !1
                }
                a || Eb(this.H, 903, b, "response was " + c.responseText)
            }
        else
            d = window.document.body,
            c = mb("img", {
                name: "cxt_tag"
            }),
            c.style.display = "none",
            c.scrolling = "no",
            c.Na = "0",
            c.src = Ic(this, b, a),
            d.appendChild(c)
    }
    ;
    Hc.prototype.ha = function() {
        return (new Date).getTime() + "" + Math.floor(101 * Math.random())
    }
    ;
    var Lc = Object.keys(Tc).map(function(a) {
        return Tc[a]
    });
    v(Z, X);
    Z.prototype.Ta = function(a) {
        this.l = new ka(a,this.P);
        a = new oc(this.l,this.G);
        var b = new Jc(this.Q,this.l,this.Ea);
        this.l.disabled || (0 == la(this.l).length ? this.Fa && this.Wa() : this.Fa ? pc(a, this.Wa, this) : pc(a),
        null != b.ia && y(b.ia.cb, Mc(), b))
    }
    ;
    Z.prototype.retrieveDataForPageType = function(a, b) {
        var c = !0;
        null != b && (c = b);
        if (null != this.l) {
            var d = zc(this.Ea, a, this.l.W);
            d.orderId = this.P;
            this.nb.submit(d, this.G, a, c)
        }
    }
    ;
    Z.prototype.Wa = function() {
        this.retrieveDataForPageType(this.Q)
    }
    ;
    Z.prototype.ub = function() {
        Eb(this.H, 902, this.G, "could not get configuration from server")
    }
    ;
    Qc.prototype.startsWith = function(a, b) {
        return null != a ? C.startsWith(a, b) : !1
    }
    ;
    Qc.prototype.trim = function(a) {
        return null != a ? C.trim(a) : null
    }
    ;
    Qc.prototype.getText = function(a) {
        return null != a ? C.trim(a.innerText || a.textContent) : ""
    }
    ;
    Qc.prototype.getElementsByClassName = function(a, b) {
        if (null == a)
            return [];
        if (a.getElementsByClassName)
            return a.getElementsByClassName(b);
        var c = []
          , d = b.match(/[^\t\n\f\r ]+/g);
        if (d)
            for (var e = a.querySelectorAll("*"), f = 0; f < e.length; f++) {
                var h = e[f].getAttribute("class");
                if (h && (h = h.match(/[^\t\n\f\r ]+/g))) {
                    for (var l = !0, n = 0; l && n < d.length; n++) {
                        for (var r = !1, t = 0; !r && t < h.length; t++)
                            d[n] === h[t] && (r = !0);
                        r || (l = !1)
                    }
                    l && c.push(e[f])
                }
            }
        return c
    }
    ;
    aa("cxtdcs", Rc);
    aa("cxtdcs_pt", function(a) {
        return function(b) {
            null != b ? Rc(b, a) : Rc(!0, a)
        }
    });
}
)(cxt_mod_shared_scope);
if (document.readyState === 'complete') {
    cxtdcs(true, 'landingpage');
} else if (window.addEventListener) {
    window.addEventListener('load', cxtdcs_pt('landingpage'), false);
} else if (window.attachEvent) {
    window.attachEvent('onload', cxtdcs_pt('landingpage'));
}
;