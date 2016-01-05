function FastClick(e, t) {
    "use strict";

    function n(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    var i;
    if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(e)) {
        for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, s = 0, a = o.length; a > s; s++) r[o[s]] = n(r[o[s]], r);
        deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) {
            var o = Node.prototype.removeEventListener;
            "click" === t ? o.call(e, t, n.hijacked || n, i) : o.call(e, t, n, i)
        }, e.addEventListener = function(t, n, i) {
            var o = Node.prototype.addEventListener;
            "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), i) : o.call(e, t, n, i)
        }), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function(e) {
            i(e)
        }, !1), e.onclick = null)
    }
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (at.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return Y.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = ht[e] = {};
        return Z.each(e.match(ft) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : wt.test(n) ? Z.parseJSON(n) : n
                } catch (o) {}
                yt.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function d() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Ht.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n = 0, i = e.length; i > n; n++) mt.set(e[n], "globalEval", !t || mt.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (mt.hasData(e) && (r = mt.access(e), s = mt.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) Z.event.add(t, o, c[o][n])
            }
            yt.hasData(e) && (a = yt.access(e), l = Z.extend({}, a), yt.set(t, l))
        }
    }

    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && St.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var i, o = Z(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : Z.css(o[0], "display");
        return o.detach(), r
    }

    function b(e) {
        var t = J,
            n = Wt[e];
        return n || (n = w(e, t), "none" !== n && n || (qt = (qt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qt[0].contentDocument, t.write(), t.close(), n = w(e, t), qt.detach()), Wt[e] = n), n
    }

    function x(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || Bt(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Rt.test(s) && zt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function k(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Qt.length; o--;)
            if (t = Qt[o] + n, t in e) return t;
        return i
    }

    function S(e, t, n) {
        var i = Xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function C(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += Z.css(e, n + kt[r], !0, o)), i ? ("content" === n && (s -= Z.css(e, "padding" + kt[r], !0, o)), "margin" !== n && (s -= Z.css(e, "border" + kt[r] + "Width", !0, o))) : (s += Z.css(e, "padding" + kt[r], !0, o), "padding" !== n && (s += Z.css(e, "border" + kt[r] + "Width", !0, o)));
        return s
    }

    function E(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Bt(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = x(e, t, r), (0 > o || null == o) && (o = e.style[t]), Rt.test(o)) return o;
            i = s && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + C(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function $(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = mt.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Tt(i) && (r[s] = mt.access(i, "olddisplay", b(i.nodeName)))) : (o = Tt(i), "none" === n && o || mt.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function N(e, t, n, i, o) {
        return new N.prototype.init(e, t, n, i, o)
    }

    function A() {
        return setTimeout(function() {
            Gt = void 0
        }), Gt = Z.now()
    }

    function O(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kt[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function D(e, t, n) {
        for (var i, o = (nn[t] || []).concat(nn["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function j(e, t, n) {
        var i, o, r, s, a, l, c, u, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && Tt(e),
            v = mt.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = Z.css(e, "display"), u = "none" === c ? mt.get(e, "olddisplay") || b(e.nodeName) : c, "inline" === u && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], Kt.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    h = !0
                }
                p[i] = v && v[i] || Z.style(e, i)
            } else c = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === c ? b(e.nodeName) : c) && (f.display = c);
        else {
            v ? "hidden" in v && (h = v.hidden) : v = mt.access(e, "fxshow", {}), r && (v.hidden = !h), h ? Z(e).show() : d.done(function() {
                Z(e).hide()
            }), d.done(function() {
                var t;
                mt.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (i in p) s = D(h ? v[i] : 0, i, d), i in v || (v[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function L(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = Z.camelCase(n), o = t[i], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = Z.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function M(e, t, n) {
        var i, o, r = 0,
            s = tn.length,
            a = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Gt || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Gt || A(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (L(u, c.opts.specialEasing); s > r; r++)
            if (i = tn[r].call(c, e, u, c.opts)) return i;
        return Z.map(u, D, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(ft) || [];
            if (Z.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function H(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, Z.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === kn;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function I(e, t) {
        var n, i, o = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function F(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function q(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)
                for (o in c)
                    if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                        s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function W(e, t, n, i) {
        var o;
        if (Z.isArray(t)) Z.each(t, function(t, o) {
            n || En.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== Z.type(t)) i(e, t);
        else
            for (o in t) W(e + "[" + o + "]", t[o], n, i)
    }

    function z(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var R = [],
        B = R.slice,
        _ = R.concat,
        X = R.push,
        Y = R.indexOf,
        U = {},
        V = U.toString,
        Q = U.hasOwnProperty,
        G = {},
        J = e.document,
        K = "2.1.1",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        tt = /^-ms-/,
        nt = /-([\da-z])/gi,
        it = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: R.sort,
        splice: R.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[V.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(tt, "ms-").replace(nt, it)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a)
                    for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else
                    for (r in e)
                        if (o = t.apply(e[r], i), o === !1) break
            } else if (a)
                for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else
                for (r in e)
                    if (o = t.call(e[r], r, e[r]), o === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(et, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Y.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else
                for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return _.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = B.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(B.call(arguments)))
            }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
        },
        now: Date.now,
        support: G
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var ot = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, d, f, h, v;
            if ((t ? t.ownerDocument || t : W) !== j && D(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (M && !i) {
                if (o = yt.exec(e))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = t.getElementById(s), !r || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && F(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (x.qsa && (!P || !P.test(e))) {
                    if (f = d = q, h = t, v = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = C(e), (d = t.getAttribute("id")) ? f = d.replace(bt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        h = wt.test(e) && u(t.parentNode) || t, v = c.join(",")
                    }
                    if (v) try {
                        return Z.apply(n, h.querySelectorAll(v)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[q] = !0, e
        }

        function o(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) k.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = R++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function(t, n, s) {
                var a, l, c = [z, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[q] || (t[q] = {}), (a = l[i]) && a[0] === z && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function m(e, t, n, o, r, s) {
            return o && !o[q] && (o = m(o)), r && !r[q] && (r = m(r, s)), i(function(i, s, a, l) {
                var c, u, d, p = [],
                    f = [],
                    h = s.length,
                    m = i || v(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : g(m, p, e, a, l),
                    w = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, w, a, l), o)
                    for (c = g(w, f), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? tt.call(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else w = g(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : Z.apply(s, w)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), c = f(function(e) {
                    return tt.call(t, e) > -1
                }, s, !0), u = [function(e, n, i) {
                    return !r && (i || n !== N) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; o > a; a++)
                if (n = k.relative[e[a].type]) u = [f(h(u), n)];
                else {
                    if (n = k.filter[e[a].type].apply(null, e[a].matches), n[q]) {
                        for (i = ++a; o > i && !k.relative[e[i].type]; i++);
                        return m(a > 1 && h(u), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && p(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function w(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function(i, s, a, l, c) {
                    var u, d, p, f = 0,
                        h = "0",
                        v = i && [],
                        m = [],
                        y = N,
                        w = i || r && k.find.TAG("*", c),
                        b = z += null == y ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (N = s !== j && s); h !== x && null != (u = w[h]); h++) {
                        if (r && u) {
                            for (d = 0; p = e[d++];)
                                if (p(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (z = b)
                        }
                        o && ((u = !p && u) && f--, i && v.push(u))
                    }
                    if (f += h, o && h !== f) {
                        for (d = 0; p = n[d++];) p(v, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) v[h] || m[h] || (m[h] = J.call(l));
                            m = g(m)
                        }
                        Z.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (z = b, N = y), v
                };
            return o ? i(s) : s
        }
        var b, x, k, T, S, C, E, $, N, A, O, D, j, L, M, P, H, I, F, q = "sizzle" + -new Date,
            W = e.document,
            z = 0,
            R = 0,
            B = n(),
            _ = n(),
            X = n(),
            Y = function(e, t) {
                return e === t && (O = !0), 0
            },
            U = "undefined",
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            K = G.push,
            Z = G.push,
            et = G.slice,
            tt = G.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = ot.replace("w", "w#"),
            st = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
            at = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ct = new RegExp("^" + it + "*," + it + "*"),
            ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            pt = new RegExp(at),
            ft = new RegExp("^" + rt + "$"),
            ht = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            vt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wt = /[+~]/,
            bt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            kt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(G = et.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
        } catch (Tt) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : W,
                i = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, L = n.documentElement, M = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                D()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                D()
            })), x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = mt.test(n.getElementsByClassName) && o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = o(function(e) {
                return L.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), x.getById ? (k.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(xt, kt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = x.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, k.find.CLASS = x.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== U && M ? t.getElementsByClassName(e) : void 0
            }, H = [], P = [], (x.qsa = mt.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (x.matchesSelector = mt.test(I = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), H.push("!=", at)
            }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), t = mt.test(L.compareDocumentPosition), F = t || mt.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Y = t ? function(e, t) {
                if (e === t) return O = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === W && F(W, e) ? -1 : t === n || t.ownerDocument === W && F(W, t) ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return O = !0, 0;
                var i, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === n ? -1 : t === n ? 1 : r ? -1 : a ? 1 : A ? tt.call(A, e) - tt.call(A, t) : 0;
                if (r === a) return s(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) c.unshift(i);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === W ? -1 : c[o] === W ? 1 : 0
            }, n) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && D(e), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !M || H && H.test(n) || P && P.test(n))) try {
                var i = I.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && D(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = k.attrHandle[t.toLowerCase()],
                i = n && Q.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== i ? i : x.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (O = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(Y), O) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += T(t);
            return n
        }, k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, kt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; v;) {
                                    for (d = t; d = d[v];)
                                        if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (u = g[q] || (g[q] = {}), c = u[e] || [], f = c[0] === z && c[1], p = c[0] === z && c[2], d = f && g.childNodes[f]; d = ++f && d && d[v] || (p = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        u[e] = [z, f, p];
                                        break
                                    }
                            } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === z) p = c[1];
                            else
                                for (;
                                    (d = ++f && d && d[v] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++p || (y && ((d[q] || (d[q] = {}))[e] = [z, p]), d !== t)););
                            return p -= o, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(n) : r.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = tt.call(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        o = E(e.replace(lt, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, kt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !k.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return vt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) k.pseudos[b] = l(b);
        return d.prototype = k.filters = k.pseudos, k.setFilters = new d, C = t.tokenize = function(e, n) {
            var i, o, r, s, a, l, c, u = _[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = k.preFilter; a;) {
                (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (s in k.filter) !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : _(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                o = [],
                r = X[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[q] ? i.push(r) : o.push(r);
                r = X(e, w(o, i)), r.selector = e
            }
            return r
        }, $ = t.select = function(e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !i && C(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && M && k.relative[r[1].type]) {
                    if (t = (k.find.ID(s.matches[0].replace(xt, kt), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = ht.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (i = l(s.matches[0].replace(xt, kt), wt.test(r[0].type) && u(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (c || E(e, d))(i, t, !M, n, wt.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = q.split("").sort(Y).join("") === q, x.detectDuplicates = !!O, D(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(nt, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = ot, Z.expr = ot.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ot.uniqueSort, Z.text = ot.getText, Z.isXMLDoc = ot.isXML, Z.contains = ot.contains;
    var rt = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && rt.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ut = Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), st.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ut.prototype = Z.fn, lt = Z(J);
    var dt = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && Z(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = rt.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Y.call(Z(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, i) {
            var o = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = Z.filter(i, o)), this.length > 1 && (pt[e] || Z.unique(o), dt.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var ft = /\S+/g,
        ht = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || r(e) : Z.extend({}, e);
        var t, n, i, o, s, a, l = [],
            c = !e.once && [],
            u = function(r) {
                for (t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)
                    if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function r(t) {
                            Z.each(t, function(t, n) {
                                var i = Z.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), i ? s = l.length : t && (o = n, u(t))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = c = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, r) {
                                var s = Z.isFunction(e[t]) && e[t];
                                o[r[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, Z.each(t, function(e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, n, i, o = 0,
                r = B.call(arguments),
                s = r.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : Z.Deferred(),
                c = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var vt;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (vt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return vt || (vt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), vt.promise(t)
    }, Z.ready.promise();
    var gt = Z.access = function(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                return c.call(Z(e), n)
            })), t))
            for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
                r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, o, r = this.key(e),
                s = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in s ? i = [t, o] : (i = o, i = i in s ? [i] : i.match(ft) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var mt = new a,
        yt = new a,
        wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return yt.hasData(e) || mt.hasData(e)
        },
        data: function(e, t, n) {
            return yt.access(e, t, n)
        },
        removeData: function(e, t) {
            yt.remove(e, t)
        },
        _data: function(e, t, n) {
            return mt.access(e, t, n)
        },
        _removeData: function(e, t) {
            mt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = yt.get(r), 1 === r.nodeType && !mt.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
                    mt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                yt.set(this, e)
            }) : gt(this, function(t) {
                var n, i = Z.camelCase(e);
                if (r && void 0 === t) {
                    if (n = yt.get(r, e), void 0 !== n) return n;
                    if (n = yt.get(r, i), void 0 !== n) return n;
                    if (n = l(r, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, i);
                    yt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = mt.get(e, t), n && (!i || Z.isArray(n) ? i = mt.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return mt.get(e, n) || mt.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    mt.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = Z.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = mt.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = ["Top", "Right", "Bottom", "Left"],
        Tt = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        St = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ct = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Et = /^key/,
        $t = /^(?:mouse|pointer|contextmenu)|click/,
        Nt = /^(?:focusinfocus|focusoutblur)$/,
        At = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = mt.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof Z !== Ct && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(ft) || [""], c = t.length; c--;) a = At.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (d = Z.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = Z.event.special[f] || {}, u = Z.extend({
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && Z.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && d.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), Z.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = mt.hasData(e) && mt.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(ft) || [""], c = t.length; c--;)
                    if (a = At.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = Z.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) Z.event.remove(e, f + t[c], n, i, !0);
                Z.isEmptyObject(l) && (delete g.handle, mt.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || J],
                f = Q.call(t, "type") ? t.type : t,
                h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[f] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !Z.isWindow(i)) {
                    for (l = d.delegateType || f, Nt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (mt.get(s, "events") || {})[t.type] && mt.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Z.acceptData(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[f]) && !Z.isWindow(i) && (a = i[c], a && (i[c] = null), Z.event.triggered = f, i[f](), Z.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, i, o, r, s = [],
                a = B.call(arguments),
                l = (mt.get(this, "events") || {})[e.type] || [],
                c = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; a > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = $t.test(o) ? this.mouseHooks : Et.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !Z.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = mt.access(i, t);
                o || i.addEventListener(e, n, !0), mt.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = mt.access(i, t) - 1;
                o ? mt.access(i, t, o) : (i.removeEventListener(e, n, !0), mt.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(e) {
                return Z().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Dt = /<([\w:]+)/,
        jt = /<|&#?\w+;/,
        Lt = /<(?:script|style|link)/i,
        Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pt = /^$|\/(?:java|ecma)script/i,
        Ht = /^true\/(.*)/,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, Z.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = Z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = m(a), r = m(e), i = 0, o = r.length; o > i; i++) y(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || m(e), s = s || m(a), i = 0, o = r.length; o > i; i++) g(r[i], s[i]);
                else g(e, a);
            return s = m(a, "script"), s.length > 0 && v(s, !l && m(e, "script")), a
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; f > p; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === Z.type(o)) Z.merge(d, o.nodeType ? [o] : o);
                    else if (jt.test(o)) {
                for (r = r || u.appendChild(t.createElement("div")), s = (Dt.exec(o) || ["", ""])[1].toLowerCase(), a = Ft[s] || Ft._default, r.innerHTML = a[1] + o.replace(Ot, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                Z.merge(d, r.childNodes), r = u.firstChild, r.textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = m(u.appendChild(o), "script"), l && v(r), n))
                    for (c = 0; o = r[c++];) Pt.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, o, r = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (o = n[mt.expando], o && (t = mt.cache[o]))) {
                    if (t.events)
                        for (i in t.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    mt.cache[o] && delete mt.cache[o]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return gt(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && v(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return gt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Lt.test(e) && !Ft[(Dt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ot, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = _.apply([], e);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = e[0],
                v = Z.isFunction(p);
            if (v || c > 1 && "string" == typeof p && !G.checkClone && Mt.test(p)) return this.each(function(n) {
                var i = u.eq(n);
                v && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = Z.map(m(n, "script"), f), r = o.length; c > l; l++) s = n, l !== d && (s = Z.clone(s, !0, !0), r && Z.merge(o, m(s, "script"))), t.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, Z.map(o, h), l = 0; r > l; l++) s = o[l], Pt.test(s.type || "") && !mt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(It, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, i = [], o = Z(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), Z(o[s])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qt, Wt = {},
        zt = /^margin/,
        Rt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
        Bt = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
        }
        var n, i, o = J.documentElement,
            r = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && Z.extend(G, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), t
            }
        }))
    }(), Z.swap = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var _t = /^(none|table(?!-c[ea]).+)/,
        Xt = new RegExp("^(" + xt + ")(.*)$", "i"),
        Yt = new RegExp("^([+-])=(" + xt + ")", "i"),
        Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Z.camelCase(t),
                    l = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = T(l, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Yt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = T(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = x(e, t, i)), "normal" === o && t in Vt && (o = Vt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? _t.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ut, function() {
                    return E(e, t, i)
                }) : E(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && Bt(e);
                return S(e, n, i ? C(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.cssHooks.marginRight = k(G.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, x, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + kt[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, zt.test(e) || (Z.cssHooks[e + t].set = S)
    }), Z.fn.extend({
        css: function(e, t) {
            return gt(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (i = Bt(e), o = t.length; o > s; s++) r[t[s]] = Z.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = N, N.prototype = {
        constructor: N,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = N.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = N.prototype.init, Z.fx.step = {};
    var Gt, Jt, Kt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        tn = [j],
        nn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Zt.exec(t),
                    r = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
                    s = (Z.cssNumber[e] || "px" !== r && +i) && Zt.exec(Z.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    Z.Animation = Z.extend(M, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tn.unshift(e) : tn.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
            }, i
        }, Z.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = Z.isEmptyObject(e),
                    r = Z.speed(t, n, i),
                    s = function() {
                        var t = M(this, Z.extend({}, e), r);
                        (o || mt.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = Z.timers,
                        s = mt.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && en.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = mt.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = Z.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o)
            }
        }), Z.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Gt = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Gt = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Jt), Jt = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
    var on, rn, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return gt(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Ct ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? rn : on)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(ft);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rn = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = sn[t] || Z.find.attr;
        sn[t] = function(e, t, i) {
            var o, r;
            return i || (r = sn[t], sn[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, sn[t] = r), o
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return gt(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, o, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !Z.isXMLDoc(e), r && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var ln = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(ft) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = Z.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(ft) || []; c > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? Z.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, o = Z(this), r = e.match(ft) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var cn = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = Z.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, G.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var un = Z.now(),
        dn = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var pn, fn, hn = /#.*$/,
        vn = /([?&])_=[^&]*/,
        gn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        wn = /^\/\//,
        bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xn = {},
        kn = {},
        Tn = "*/".concat("*");
    try {
        fn = location.href
    } catch (Sn) {
        fn = J.createElement("a"), fn.href = "", fn = fn.href
    }
    pn = bn.exec(fn.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fn,
            type: "GET",
            isLocal: mn.test(pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, Z.ajaxSettings), t) : I(Z.ajaxSettings, e)
        },
        ajaxPrefilter: P(xn),
        ajaxTransport: P(kn),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var l, u, m, y, b, k = t;
                2 !== w && (w = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = F(d, x, n)), y = q(d, y, x, l), l ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (Z.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (Z.etag[o] = b)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, u = y.data, m = y.error, l = !m)) : (m = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || k) + "", l ? h.resolveWith(p, [u, k, x]) : h.rejectWith(p, [x, k, m]), x.statusCode(g), g = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u : m]), v.fireWith(p, [x, k]), c && (f.trigger("ajaxComplete", [x, d]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, u, d = Z.ajaxSetup({}, t),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                v = Z.Callbacks("once memory"),
                g = d.statusCode || {},
                m = {},
                y = {},
                w = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; t = gn.exec(r);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? r : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || fn) + "").replace(hn, "").replace(wn, pn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(ft) || [""], null == d.crossDomain && (l = bn.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === pn[1] && l[2] === pn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), H(xn, d, t, x), 2 === w) return x;
            c = d.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !yn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (dn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = vn.test(o) ? o.replace(vn, "$1_=" + un++) : o + (dn.test(o) ? "&" : "?") + "_=" + un++)), d.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === w)) return x.abort();
            b = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[u](d[u]);
            if (i = H(kn, d, t, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, i.send(m, n)
                } catch (k) {
                    if (!(2 > w)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, i, o) {
            return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Cn = /%20/g,
        En = /\[\]$/,
        $n = /\r?\n/g,
        Nn = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) W(n, e[n], t, o);
        return i.join("&").replace(Cn, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && An.test(this.nodeName) && !Nn.test(e) && (this.checked || !St.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($n, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace($n, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var On = 0,
        Dn = {},
        jn = {
            0: 200,
            1223: 204
        },
        Ln = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function() {
        for (var e in Dn) Dn[e]()
    }), G.cors = !!Ln && "withCredentials" in Ln, G.ajax = Ln = !!Ln, Z.ajaxTransport(function(e) {
        var t;
        return G.cors || Ln && !e.crossDomain ? {
            send: function(n, i) {
                var o, r = e.xhr(),
                    s = ++On;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete Dn[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(jn[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = t(), r.onerror = t("error"), t = Dn[s] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Mn = [],
        Pn = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || Z.expando + "_" + un++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Pn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Pn, "$1" + o) : t.jsonp !== !1 && (t.url += (dn.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || Z.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Mn.push(o)), s && Z.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = st.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
    };
    var Hn = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Hn) return Hn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var In = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c, u = Z.css(e, "position"),
                d = Z(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = Z.css(e, "top"), l = Z.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (t = r.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (o = i.getBoundingClientRect()), n = z(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || In; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || In
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function(o) {
            return gt(this, function(t, o, r) {
                var s = z(t);
                return void 0 === r ? s ? s[n] : t[o] : void(s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
            }, t, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = k(G.pixelPosition, function(e, n) {
            return n ? (n = x(e, t), Rt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            Z.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return gt(this, function(t, n, i) {
                    var o;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Z.css(t, n, s) : Z.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Fn = e.jQuery,
        qn = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = qn), t && e.jQuery === Z && (e.jQuery = Fn), Z
    }, typeof t === Ct && (e.jQuery = e.$ = Z), Z
});
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (deviceIsIOS && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, FastClick.prototype.needsFocus = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, FastClick.prototype.sendClick = function(e, t) {
        "use strict";
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(), i = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
    }, FastClick.prototype.determineEventType = function(e) {
        "use strict";
        return deviceIsAndroid && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(e) {
        "use strict";
        var t;
        deviceIsIOS && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, FastClick.prototype.updateScrollParent = function(e) {
        "use strict";
        var t, n;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n, e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, FastClick.prototype.onTouchStart = function(e) {
        "use strict";
        var t, n, i;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], deviceIsIOS) {
            if (i = window.getSelection(), i.rangeCount && !i.isCollapsed) return !0;
            if (!deviceIsIOS4) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(e) {
        "use strict";
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
    }, FastClick.prototype.onTouchMove = function(e) {
        "use strict";
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, FastClick.prototype.findControl = function(e) {
        "use strict";
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(e) {
        "use strict";
        var t, n, i, o, r, s = this.targetElement;
        if (!this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (r = e.changedTouches[0], s = document.elementFromPoint(r.pageX - window.pageXOffset, r.pageY - window.pageYOffset) || s, s.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = s.tagName.toLowerCase(), "label" === i) {
            if (t = this.findControl(s)) {
                if (this.focus(s), deviceIsAndroid) return !1;
                s = t
            }
        } else if (this.needsFocus(s)) return e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(s), this.sendClick(s, e), deviceIsIOS && "select" === i || (this.targetElement = null, e.preventDefault()), !1);
        return deviceIsIOS && !deviceIsIOS4 && (o = s.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(s) || (e.preventDefault(), this.sendClick(s, e)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(e) {
        "use strict";
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
    }, FastClick.prototype.onClick = function(e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var e = this.layer;
        deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(e) {
        "use strict";
        var t, n, i;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid) return !0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (deviceIsBlackBerry10 && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === e.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(e, t) {
        "use strict";
        return new FastClick(e, t)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    function() {
        var e = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            t = [].slice;
        ! function(e, t) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
                return t(n, e)
            }) : t(e.jQuery, e)
        }(window, function(n, i) {
            var o, r, s, a, l, c, u, d, p, f, h, v, g, m, y, w;
            return o = n(i), d = e.call(i, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, l = 1, u = {}, c = "waypoints-context-id", h = "resize.waypoints", v = "scroll.waypoints", g = 1, m = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", r = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, this.element[c] = this.id, u[this.id] = this, e.bind(v, function() {
                        var e;
                        return t.didScroll || d ? void 0 : (t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, i.setTimeout(e, n[w].settings.scrollThrottle))
                    }), e.bind(h, function() {
                        var e;
                        return t.didResize ? void 0 : (t.didResize = !0, e = function() {
                            return n[w]("refresh"), t.didResize = !1
                        }, i.setTimeout(e, n[w].settings.resizeThrottle))
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, t = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !d || e.vertical.oldScroll && e.vertical.newScroll || n[w]("refresh"), n.each(e, function(e, i) {
                        var o, r, s;
                        return s = [], r = i.newScroll > i.oldScroll, o = r ? i.forward : i.backward, n.each(t.waypoints[e], function(e, t) {
                            var n, o;
                            return i.oldScroll < (n = t.offset) && n <= i.newScroll ? s.push(t) : i.newScroll < (o = t.offset) && o <= i.oldScroll ? s.push(t) : void 0
                        }), s.sort(function(e, t) {
                            return e.offset - t.offset
                        }), r || s.reverse(), n.each(s, function(e, t) {
                            return t.options.continuous || e === s.length - 1 ? t.trigger([o]) : void 0
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, i, o = this;
                    return i = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: i ? 0 : t.left,
                            contextScroll: i ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: i ? 0 : t.top,
                            contextScroll: i ? 0 : this.oldScroll.y,
                            contextDimension: i ? n[w]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, n.each(e, function(e, t) {
                        return n.each(o.waypoints[e], function(e, i) {
                            var o, r, s, a, l;
                            return o = i.options.offset, s = i.offset, r = n.isWindow(i.element) ? 0 : i.$element.offset()[t.offsetProp], n.isFunction(o) ? o = o.apply(i.element) : "string" == typeof o && (o = parseFloat(o), i.options.offset.indexOf("%") > -1 && (o = Math.ceil(t.contextDimension * o / 100))), i.offset = r - t.contextOffset + t.contextScroll - o, i.options.onlyOnScroll && null != s || !i.enabled ? void 0 : null !== s && s < (a = t.oldScroll) && a <= i.offset ? i.trigger([t.backward]) : null !== s && s > (l = t.oldScroll) && l >= i.offset ? i.trigger([t.forward]) : null === s && t.oldScroll >= i.offset ? i.trigger([t.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([h, v].join(" ")), delete u[this.id]) : void 0
                }, e
            }(), s = function() {
                function e(e, t, i) {
                    var o, r;
                    "bottom-in-view" === i.offset && (i.offset = function() {
                        var e;
                        return e = n[w]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = i.horizontal ? "horizontal" : "vertical", this.callback = i.handler, this.context = t, this.enabled = i.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = i, t.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (r = this.element[m]) ? r : [], o.push(this.id), this.element[m] = o
                }
                return e.prototype.trigger = function(e) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, i;
                    return (i = e[m]) ? (t = n.extend({}, a.horizontal, a.vertical), n.map(i, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), f = {
                init: function(e, t) {
                    var i;
                    return t = n.extend({}, n.fn[y].defaults, t), null == (i = t.handler) && (t.handler = e), this.each(function() {
                        var e, i, o, a;
                        return e = n(this), o = null != (a = t.context) ? a : n.fn[y].defaults.context, n.isWindow(o) || (o = e.closest(o)), o = n(o), i = u[o[0][c]], i || (i = new r(o)), new s(e, i, t)
                    }), n[w]("refresh"), this
                },
                disable: function() {
                    return f._invoke.call(this, "disable")
                },
                enable: function() {
                    return f._invoke.call(this, "enable")
                },
                destroy: function() {
                    return f._invoke.call(this, "destroy")
                },
                prev: function(e, t) {
                    return f._traverse.call(this, e, t, function(e, t, n) {
                        return t > 0 ? e.push(n[t - 1]) : void 0
                    })
                },
                next: function(e, t) {
                    return f._traverse.call(this, e, t, function(e, t, n) {
                        return t < n.length - 1 ? e.push(n[t + 1]) : void 0
                    })
                },
                _traverse: function(e, t, o) {
                    var r, s;
                    return null == e && (e = "vertical"), null == t && (t = i), s = p.aggregate(t), r = [], this.each(function() {
                        var t;
                        return t = n.inArray(this, s[e]), o(r, t, s[e])
                    }), this.pushStack(r)
                },
                _invoke: function(e) {
                    return this.each(function() {
                        var t;
                        return t = s.getWaypointsByElement(this), n.each(t, function(t, n) {
                            return n[e](), !0
                        })
                    }), this
                }
            }, n.fn[y] = function() {
                var e, i;
                return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], f[i] ? f[i].apply(this, e) : n.isFunction(i) ? f.init.apply(this, arguments) : n.isPlainObject(i) ? f.init.apply(this, [null, i]) : n.error(i ? "The " + i + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
            }, n.fn[y].defaults = {
                context: i,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, p = {
                refresh: function() {
                    return n.each(u, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = i.innerHeight) ? e : o.height()
                },
                aggregate: function(e) {
                    var t, i, o;
                    return t = a, e && (t = null != (o = u[n(e)[0][c]]) ? o.waypoints : void 0), t ? (i = {
                        horizontal: [],
                        vertical: []
                    }, n.each(i, function(e, o) {
                        return n.each(t[e], function(e, t) {
                            return o.push(t)
                        }), o.sort(function(e, t) {
                            return e.offset - t.offset
                        }), i[e] = n.map(o, function(e) {
                            return e.element
                        }), i[e] = n.unique(i[e])
                    }), i) : []
                },
                above: function(e) {
                    return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = i), p._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = i), p._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return p._invoke("enable")
                },
                disable: function() {
                    return p._invoke("disable")
                },
                destroy: function() {
                    return p._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return f[e] = t
                },
                _invoke: function(e) {
                    var t;
                    return t = n.extend({}, a.vertical, a.horizontal), n.each(t, function(t, n) {
                        return n[e](), !0
                    })
                },
                _filter: function(e, t, i) {
                    var o, r;
                    return (o = u[n(e)[0][c]]) ? (r = [], n.each(o.waypoints[t], function(e, t) {
                        return i(o, t) ? r.push(t) : void 0
                    }), r.sort(function(e, t) {
                        return e.offset - t.offset
                    }), n.map(r, function(e) {
                        return e.element
                    })) : []
                }
            }, n[w] = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(null, e) : p.aggregate.call(null, n)
            }, n[w].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, o.on("load.waypoints", function() {
                return n[w]("refresh")
            })
        })
    }.call(this), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function(e) {
        function t(t) {
            var s = t || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                p = 0,
                f = 0,
                h = 0,
                v = 0;
            if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (p = -1 * s.detail), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * p, p = 0), c = 0 === p ? d : p, "deltaY" in s && (p = -1 * s.deltaY, c = p), "deltaX" in s && (d = s.deltaX, 0 === p && (c = -1 * d)), 0 !== p || 0 !== d) {
                if (1 === s.deltaMode) {
                    var g = e.data(this, "mousewheel-line-height");
                    c *= g, p *= g, d *= g
                } else if (2 === s.deltaMode) {
                    var m = e.data(this, "mousewheel-page-height");
                    c *= m, p *= m, d *= m
                }
                if (f = Math.max(Math.abs(p), Math.abs(d)), (!r || r > f) && (r = f, i(s, f) && (r /= 40)), i(s, f) && (c /= 40, d /= 40, p /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), p = Math[p >= 1 ? "floor" : "ceil"](p / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    h = t.clientX - y.left, v = t.clientY - y.top
                }
                return t.deltaX = d, t.deltaY = p, t.deltaFactor = r, t.offsetX = h, t.offsetY = v, t.deltaMode = 0, a.unshift(t, c, d, p), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
            }
        }

        function n() {
            r = null
        }

        function i(e, t) {
            return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
        var u = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }),
    function() {
        var e, t, n, i, o, r = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            s = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var n, i;
                for (n in t) i = t[n], null == e[n] && (e[n] = i);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.addEvent = function(e, t, n) {
                return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
            }, e.prototype.removeEvent = function(e, t, n) {
                return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, n, i, o, r;
                for (r = this.keys, t = i = 0, o = r.length; o > i; t = ++i)
                    if (n = r[t], n === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var n, i, o, r, s;
                for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o)
                    if (i = s[n], i === e) return void(this.values[n] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), i = this.getComputedStyle || function(e) {
            return this.getPropertyValue = function(t) {
                var n;
                return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function(e, t) {
                    return t.toUpperCase()
                }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
            }, this
        }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(e) {
                null == e && (e = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n
            }
            return o.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, o.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, o.prototype.start = function() {
                var t, n, i, o;
                if (this.stopped = !1, this.boxes = function() {
                        var e, n, i, o;
                        for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t);
                        return o
                    }.call(this), this.all = function() {
                        var e, n, i, o;
                        for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t);
                        return o
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else {
                        for (o = this.boxes, n = 0, i = o.length; i > n; n++) t = o[n], this.applyStyle(t, !0);
                        this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)
                    }
                return this.config.live ? new e(function(e) {
                    return function(t) {
                        var n, i, o, r, s;
                        for (s = [], o = 0, r = t.length; r > o; o++) i = t[o], s.push(function() {
                            var e, t, o, r;
                            for (o = i.addedNodes || [], r = [], e = 0, t = o.length; t > e; e++) n = o[e], r.push(this.doSync(n));
                            return r
                        }.call(e));
                        return s
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, o.prototype.sync = function() {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, o.prototype.doSync = function(e) {
                var t, n, i, o, r;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, o = e.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) t = o[n], s.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                    return r
                }
            }, o.prototype.show = function(e) {
                return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass
            }, o.prototype.applyStyle = function(e, t) {
                var n, i, o;
                return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), o = e.getAttribute("data-wow-iteration"), this.animate(function(r) {
                    return function() {
                        return r.customStyle(e, t, i, n, o)
                    }
                }(this))
            }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), o.prototype.resetStyle = function() {
                var e, t, n, i, o;
                for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e.style.visibility = "visible");
                return o
            }, o.prototype.customStyle = function(e, t, n, i, o) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                    animationDuration: n
                }), i && this.vendorSet(e.style, {
                    animationDelay: i
                }), o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(e, t) {
                var n, i, o, r;
                r = [];
                for (n in t) i = t[n], e["" + n] = i, r.push(function() {
                    var t, r, s, a;
                    for (s = this.vendors, a = [], t = 0, r = s.length; r > t; t++) o = s[t], a.push(e["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                    return a
                }.call(this));
                return r
            }, o.prototype.vendorCSS = function(e, t) {
                var n, o, r, s, a, l;
                for (o = i(e), n = o.getPropertyCSSValue(t), l = this.vendors, s = 0, a = l.length; a > s; s++) r = l[s], n = n || o.getPropertyCSSValue("-" + r + "-" + t);
                return n
            }, o.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (n) {
                    t = i(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, o.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, o.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, o.prototype.scrollCallback = function() {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : o.push(e));
                    return o
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, o.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, o.prototype.isVisible = function(e) {
                var t, n, i, o, r;
                return n = e.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, o >= i && t >= r
            }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, o
        }()
    }.call(this),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, i) {
                var o, r, s = this;
                if (s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return '<button type="button" data-role="none">' + (t + 1) + "</button>"
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        fade: !1,
                        focusOnSelect: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        onBeforeChange: null,
                        onAfterChange: null,
                        onInit: null,
                        onReInit: null,
                        onSetPosition: null,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rtl: !1,
                        slide: "div",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        variableWidth: !1,
                        vertical: !1,
                        waitForAnimate: !0
                    }, s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1
                    }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.paused = !1, s.positionProp = null, s.respondTo = null, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.windowWidth = 0, s.windowTimer = null, s.options = e.extend({}, s.defaults, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, o = s.options.responsive || null, o && o.length > -1) {
                    s.respondTo = s.options.respondTo || "window";
                    for (r in o) o.hasOwnProperty(r) && (s.breakpoints.push(o[r].breakpoint), s.breakpointSettings[o[r].breakpoint] = o[r].settings);
                    s.breakpoints.sort(function(e, t) {
                        return t - e
                    })
                }
                s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init(), s.checkResponsive()
            }
            var n = 0;
            return t
        }(), t.prototype.addSlide = function(t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
                e(n).attr("index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateSlide = function(t, n) {
            var i = {},
                o = this;
            if (1 === o.options.slidesToShow && o.options.adaptiveHeight === !0 && o.options.vertical === !1) {
                var r = o.$slides.eq(o.currentSlide).outerHeight(!0);
                o.$list.animate({
                    height: r
                }, o.options.speed)
            }
            o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            }) : (o.applyTransition(), i[o.animType] = o.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var n = this,
                i = null != n.options.asNavFor ? e(n.options.asNavFor).getSlick() : null;
            null != i && i.slideHandler(t, !0)
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
        }, t.prototype.buildDots = function() {
            var t, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1) n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
                n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
                e(n).attr("index", t)
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode === !0 && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.prop("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.checkResponsive = function() {
            var t, n, i, o = this,
                r = o.$slider.width(),
                s = window.innerWidth || e(window).width();
            if ("window" === o.respondTo ? i = s : "slider" === o.respondTo ? i = r : "min" === o.respondTo && (i = Math.min(s, r)), o.originalSettings.responsive && o.originalSettings.responsive.length > -1 && null !== o.originalSettings.responsive) {
                n = null;
                for (t in o.breakpoints) o.breakpoints.hasOwnProperty(t) && i < o.breakpoints[t] && (n = o.breakpoints[t]);
                null !== n ? null !== o.activeBreakpoint ? n !== o.activeBreakpoint && (o.activeBreakpoint = n, o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), o.refresh()) : (o.activeBreakpoint = n, o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), o.refresh()) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, o.refresh())
            }
        }, t.prototype.changeSlide = function(t, n) {
            var i, o, r, s, a, l = this,
                c = e(t.target);
            switch (c.is("a") && t.preventDefault(), r = l.slideCount % l.options.slidesToScroll !== 0, i = r ? 0 : (l.slideCount - l.currentSlide) % l.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? l.options.slidesToScroll : l.options.slidesToShow - i, l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? l.options.slidesToScroll : i, l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide + o, !1, n);
                    break;
                case "index":
                    var u = 0 === t.data.index ? 0 : t.data.index || e(t.target).parent().index() * l.options.slidesToScroll;
                    if (s = l.getNavigableIndexes(), a = 0, s[u] && s[u] === u)
                        if (u > s[s.length - 1]) u = s[s.length - 1];
                        else
                            for (var d in s) {
                                if (u < s[d]) {
                                    u = a;
                                    break
                                }
                                a = s[d]
                            }
                        l.slideHandler(u, !1, n);
                default:
                    return
            }
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function() {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.parent().hasClass("slick-track") && t.$slides.unwrap().unwrap(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
                position: "",
                left: "",
                top: "",
                zIndex: "",
                opacity: "",
                width: ""
            }), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.off(".slick"), e(window).off(".slick-" + t.instanceUid), e(document).off(".slick-" + t.instanceUid)
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function(e, t, n) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: 1e3
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, n), i.$slides.eq(e).animate({
                opacity: 0
            }, i.options.speed, i.options.easing)) : (i.applyTransition(t), i.applyTransition(e), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: 1e3
            }), i.$slides.eq(e).css({
                opacity: 0
            }), n && setTimeout(function() {
                i.disableTransition(t), i.disableTransition(e), n.call()
            }, i.options.speed))
        }, t.prototype.filterSlides = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (e.options.infinite === !0) i = Math.ceil(e.slideCount / e.options.slidesToScroll);
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToShow, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i - 1
        }, t.prototype.getLeft = function(e) {
            var t, n, i, o = this,
                r = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, o.options.variableWidth === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? e : e + o.options.slidesToShow), t = i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? e : e + o.options.slidesToShow + 1), t = i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getNavigableIndexes = function() {
            for (var e = this, t = 0, n = 0, i = []; t < e.slideCount;) i.push(t), t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return i
        }, t.prototype.getSlideCount = function() {
            var t, n = this;
            if (n.options.swipeToSlide === !0) {
                var i = null;
                return n.$slideTrack.find(".slick-slide").each(function(t, o) {
                    return o.offsetLeft + e(o).outerWidth() / 2 > -1 * n.swipeLeft ? (i = o, !1) : void 0
                }), t = Math.abs(e(i).attr("index") - n.currentSlide)
            }
            return n.options.slidesToScroll
        }, t.prototype.init = function() {
            var t = this;
            e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), null !== t.options.onInit && t.options.onInit.call(this, t)
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }).on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), t.options.pauseOnHover === !0 && t.options.autoplay === !0 && (t.$list.on("mouseenter.slick", function() {
                t.paused = !0, t.autoPlayClear()
            }), t.$list.on("mouseleave.slick", function() {
                t.paused = !1, t.autoPlay()
            })), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
                t.checkResponsive(), t.setPosition()
            }), e(window).on("resize.slick.slick-" + t.instanceUid, function() {
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition()
                }, 50))
            }), e("*[draggable!=true]", t.$slideTrack).on("dragstart", function(e) {
                e.preventDefault()
            }), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        n = e(this).attr("data-lazy");
                    t.load(function() {
                        t.animate({
                            opacity: 1
                        }, 200)
                    }).css({
                        opacity: 0
                    }).attr("src", n).removeAttr("data-lazy").removeClass("slick-loading")
                })
            }
            var n, i, o, r, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = o + s.options.slidesToShow, s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            null !== t.options.onAfterChange && t.options.onAfterChange.call(this, t, e), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
        }, t.prototype.progressiveLazyLoad = function() {
            var t, n, i = this;
            t = e("img[data-lazy]", i.$slider).length, t > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }).error(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function() {
            var t = this,
                n = t.currentSlide;
            t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !0)
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), null !== t.options.onReInit && t.options.onReInit.call(this, t)
        }, t.prototype.removeSlide = function(e, t, n) {
            var i = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, n, i = this,
                o = {};
            i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? e + "px" : "0px", n = "top" == i.positionProp ? e + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var t = this;
            if (t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                    padding: "0px " + t.options.centerPadding
                }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                    padding: t.options.centerPadding + " 0px"
                })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1) t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length));
            else if (t.options.variableWidth === !0) {
                var n = 0;
                t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.children(".slick-slide").each(function() {
                    n += Math.ceil(e(this).outerWidth(!0))
                }), t.$slideTrack.width(Math.ceil(n) + 1)
            } else t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length));
            var i = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - i)
        }, t.prototype.setFade = function() {
            var t, n = this;
            n.$slides.each(function(i, o) {
                t = n.slideWidth * i * -1, e(o).css(n.options.rtl === !0 ? {
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                } : {
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: 800,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: 900,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), null !== e.options.onSetPosition && e.options.onSetPosition.call(this, e)
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, n, i, o, r = this;
            r.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), n = r.$slider.find(".slick-slide"), r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active") : n.length <= r.options.slidesToShow ? n.addClass("slick-active") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, n, i, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.selectHandler = function(t) {
            var n = this,
                i = parseInt(e(t.target).parents(".slick-slide").attr("index"));
            return i || (i = 0), n.slideCount <= n.options.slidesToShow ? (n.$slider.find(".slick-slide").removeClass("slick-active"), n.$slides.eq(i).addClass("slick-active"), n.options.centerMode === !0 && (n.$slider.find(".slick-slide").removeClass("slick-center"), n.$slides.eq(i).addClass("slick-center")), void n.asNavFor(i)) : void n.slideHandler(i)
        }, t.prototype.slideHandler = function(e, t, n) {
            var i, o, r, s, a = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), i = e, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > i ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, null !== l.options.onBeforeChange && e !== l.currentSlide && l.options.onBeforeChange.call(this, l, l.currentSlide, o), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? void(n !== !0 ? l.fadeSlide(r, o, function() {
                l.postSlide(o)
            }) : l.postSlide(o)) : void(n !== !0 ? l.animateSlide(a, function() {
                l.postSlide(o)
            }) : l.postSlide(o))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : "vertical"
        }, t.prototype.swipeEnd = function() {
            var e = this;
            if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX) return !1;
            if (e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
                case "left":
                    e.slideHandler(e.currentSlide + e.getSlideCount()), e.currentDirection = 0, e.touchObject = {};
                    break;
                case "right":
                    e.slideHandler(e.currentSlide - e.getSlideCount()), e.currentDirection = 1, e.touchObject = {}
            } else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, n, i, o, r = this;
            return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || o && 1 !== o.length ? !1 : (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), n = r.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), i = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.swipeLeft = r.options.vertical === !1 ? t + r.touchObject.swipeLength * i : t + r.touchObject.swipeLength * (r.$list.height() / r.listWidth) * i, r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
        }, t.prototype.unfilterSlides = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled"), t.$nextArrow.removeClass("slick-disabled")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")) : t.currentSlide > t.slideCount - t.options.slidesToShow + e && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled"), t.$prevArrow.removeClass("slick-disabled")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, e.fn.slick = function(e) {
            var n = this;
            return n.each(function(n, i) {
                i.slick = new t(i, e)
            })
        }, e.fn.slickAdd = function(e, t, n) {
            var i = this;
            return i.each(function(i, o) {
                o.slick.addSlide(e, t, n)
            })
        }, e.fn.slickCurrentSlide = function() {
            var e = this;
            return e.get(0).slick.getCurrent()
        }, e.fn.slickFilter = function(e) {
            var t = this;
            return t.each(function(t, n) {
                n.slick.filterSlides(e)
            })
        }, e.fn.slickGoTo = function(e, t) {
            var n = this;
            return n.each(function(n, i) {
                i.slick.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            })
        }, e.fn.slickNext = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            })
        }, e.fn.slickPause = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.autoPlayClear(), t.slick.paused = !0
            })
        }, e.fn.slickPlay = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.paused = !1, t.slick.autoPlay()
            })
        }, e.fn.slickPrev = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            })
        }, e.fn.slickRemove = function(e, t) {
            var n = this;
            return n.each(function(n, i) {
                i.slick.removeSlide(e, t)
            })
        }, e.fn.slickRemoveAll = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.removeSlide(null, null, !0)
            })
        }, e.fn.slickGetOption = function(e) {
            var t = this;
            return t.get(0).slick.options[e]
        }, e.fn.slickSetOption = function(e, t, n) {
            var i = this;
            return i.each(function(i, o) {
                o.slick.options[e] = t, n === !0 && (o.slick.unload(), o.slick.reinit())
            })
        }, e.fn.slickUnfilter = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick.unfilterSlides()
            })
        }, e.fn.unslick = function() {
            var e = this;
            return e.each(function(e, t) {
                t.slick && t.slick.destroy()
            })
        }, e.fn.getSlick = function() {
            var e = null,
                t = this;
            return t.each(function(t, n) {
                e = n.slick
            }), e
        }
    }),
    function(e) {
        e.fn.fitText = function(t, n) {
            var i = t || 1,
                o = e.extend({
                    minFontSize: Number.NEGATIVE_INFINITY,
                    maxFontSize: Number.POSITIVE_INFINITY
                }, n);
            return this.each(function() {
                var t = e(this),
                    n = function() {
                        t.css("font-size", Math.max(Math.min(t.width() / (10 * i), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
                    };
                n(), e(window).on("resize.fittext orientationchange.fittext", n)
            })
        }
    }(jQuery),
    function(e) {
        "use strict";

        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function n(e, t) {
            var n = i(e, t) ? r : o;
            n(e, t)
        }
        var i, o, r;
        "classList" in document.documentElement ? (i = function(e, t) {
            return e.classList.contains(t)
        }, o = function(e, t) {
            e.classList.add(t)
        }, r = function(e, t) {
            e.classList.remove(t)
        }) : (i = function(e, n) {
            return t(n).test(e.className)
        }, o = function(e, t) {
            i(e, t) || (e.className = e.className + " " + t)
        }, r = function(e, n) {
            e.className = e.className.replace(t(n), " ")
        });
        var s = {
            hasClass: i,
            addClass: o,
            removeClass: r,
            toggleClass: n,
            has: i,
            add: o,
            remove: r,
            toggle: n
        };
        "function" == typeof define && define.amd ? define(s) : e.classie = s
    }(window),
    function(e) {
        var t = {
                common: {
                    init: function() {
                        function t() {
                            var t = e(this).scrollTop();
                            Math.abs(i - t) <= o || (t > i && t > r ? e(".site-header").removeClass("nav-down").addClass("nav-up") : t + e(window).height() < e(document).height() && e(".site-header").removeClass("nav-up").addClass("nav-down"), i = t)
                        }
                        Modernizr.addTest("firefox", function() {
                                return !!navigator.userAgent.match(/firefox/i)
                            }), (-1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0) && e("html").addClass("msie"), e(function() {
                                FastClick.attach(document.body)
                            }),
                            function() {
                                function t() {
                                    if (classie.has(i, "navigation-open")) {
                                        classie.remove(i, "navigation-open"), classie.add(i, "navigation-close");
                                        var e = function(t) {
                                            if (support.transitions) {
                                                if ("visibility" !== t.propertyName) return;
                                                this.removeEventListener(transEndEventName, e)
                                            }
                                            classie.remove(i, "navigation-close")
                                        };
                                        support.transitions ? i.addEventListener(transEndEventName, e) : e()
                                    } else classie.has(i, "navigation-close") || classie.add(i, "navigation-open")
                                } {
                                    var n = document.getElementById("trigger-overlay"),
                                        i = document.querySelector("div.site-container");
                                    e.Event("keydown", {
                                        keyCode: 27
                                    })
                                }
                                transEndEventNames = {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    msTransition: "MSTransitionEnd",
                                    transition: "transitionend"
                                }, transEndEventName = transEndEventNames[Modernizr.prefixed("transition")], support = {
                                    transitions: Modernizr.csstransitions
                                }, n.addEventListener("click", function() {
                                    var n = e("body").scrollTop();
                                    0 != n ? e("body").animate({
                                        scrollTop: 0
                                    }, .3 * n, t) : t()
                                }), e("body").keydown(function(e) {
                                    return 27 == e.keyCode ? (t(), !1) : void 0
                                })
                            }(), e(".navigation-overlay nav ul li:first-child").hover(function() {
                                e("#trigger-overlay .toggle-button").attr("style", "background-color: #a7b3c3")
                            }, function() {
                                e("#trigger-overlay .toggle-button").attr("style", "")
                            }), e(".case-inner, .page-inner").waypoint(function(t) {
                                case_background = e(".top-image-veil")[0].style.cssText, "down" === t ? (e(".toggle-button").attr("style", case_background), e(".logo a").attr("style", case_background), e(".site-header").addClass("white")) : (e(".toggle-button").attr("style", ""), e(".logo a").attr("style", ""), e(".site-header").removeClass("white"))
                            }, {
                                offset: 40
                            });
                        var n, i = 0,
                            o = 5,
                            r = e(".site-header").outerHeight();
                        e(window).scroll(function() {
                            n = !0
                        }), setInterval(function() {
                            n && (t(), n = !1)
                        }, 250)
                    }
                },
                home: {
                    init: function() {
                        function t() {
                            current_background = e(".slick-active .slide-veil")[0].style.cssText, e(".navigation-overlay").attr("style", current_background).find("ul li .active").attr("style", current_background)
                        }

                        function n(t) {
                            newDate = new Date;
                            var n = !0;
                            10 > i && newDate.getTime() - o.getTime() < 50 ? (r -= t.deltaY * (10 - i), i++) : newDate.getTime() - o.getTime() > 50 ? (i = 0, r -= 50 * t.deltaY) : n = !1, o = new Date, n && (t.deltaY < 0 ? e(".frontpage-slider").slickNext() : e(".frontpage-slider").slickPrev())
                        }
                        e("body").addClass("initial-loading"), setTimeout(function() {
                            e("body").removeClass("initial-loading")
                        }, 2e3), Modernizr.touch && e("body.home .frontpage-slide").css({
                            height: e("body").height() + "px"
                        }), e(".frontpage-slider").slick({
                            dots: !0,
                            infinite: !1,
                            speed: Modernizr.touch ? 600 : 800,
                            arrows: !1,
                            slide: ".frontpage-slide",
                            cssEase: "ease",
                            vertical: Modernizr.touch ? !1 : !0,
                            draggable: !0,
                            onInit: function() {
                                t(), [].forEach.call(document.querySelectorAll("html.no-touch .slide-video"), function(e) {
                                    e.play()
                                })
                            },
                            onAfterChange: function() {
                                t()
                            }
                        });
                        var i = 0,
                            o = new Date,
                            r = 0;
                        e(".frontpage-slider").on("mousewheel", function(e) {
                            n(e)
                        }), e("body").on({
                            mousewheel: function(e) {
                                "el" != e.target.id && (e.preventDefault(), e.stopPropagation())
                            }
                        }), e(".navigation-overlay nav ul li:first-child").hover(function() {
                            e("#trigger-overlay .toggle-button").attr("style", current_background)
                        }, function() {
                            e("#trigger-overlay .toggle-button").attr("style", "")
                        })
                    }
                },
                single: {
                    init: function() {
                        current_svg = e(".top-image-veil")[0].style.cssText, e(".navigation-overlay nav ul li:first-child").hover(function() {
                            e("#trigger-overlay .toggle-button").attr("style", current_svg)
                        }, function() {
                            e("#trigger-overlay .toggle-button").attr("style", "")
                        }), e(".navigation-overlay").attr("style", current_svg).find("ul li .active").attr("style", current_svg), e(function() {
                            e(".case-text a, .case-intro p a, .get-in-touch a").each(function() {
                                e(this).attr("style", current_svg)
                            })
                        })
                    }
                },
                single_cases: {
                    init: function() {
                        e(".case-slideshow .slideshow").slick({
                            slide: ".case-slide",
                            speed: 500,
                            arrows: !1,
                            lazyLoad: "ondemand",
                            centerMode: !0,
                            centerPadding: "150px",
                            slidesToShow: 3,
                            responsive: [{
                                breakpoint: 1600,
                                settings: {
                                    slide: ".case-slide",
                                    speed: 500,
                                    arrows: !1,
                                    centerMode: !0,
                                    centerPadding: "300px",
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 1023,
                                settings: {
                                    slide: ".case-slide",
                                    speed: 500,
                                    arrows: !1,
                                    centerMode: !0,
                                    centerPadding: "200px",
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slide: ".case-slide",
                                    speed: 500,
                                    arrows: !1,
                                    centerMode: !0,
                                    centerPadding: "100px",
                                    slidesToShow: 1
                                }
                            }, {
                                breakpoint: 480,
                                settings: {
                                    slide: ".case-slide",
                                    speed: 500,
                                    arrows: !1,
                                    centerMode: !0,
                                    centerPadding: "50px",
                                    slidesToShow: 1
                                }
                            }]
                        });
                        var t = new WOW({
                            boxClass: "superstar",
                            animateClass: "enter-stage",
                            offset: 0,
                            mobile: !1,
                            live: !0
                        });
                        t.init()
                    }
                },
                page: {
                    init: function() {
                        var e = new WOW({
                            boxClass: "superstar",
                            animateClass: "enter-stage",
                            offset: 0,
                            mobile: !1,
                            live: !0
                        });
                        e.init()
                    }
                },
                archive: {
                    init: function() {
                        if (!Modernizr.touch) {
                            var t, n = document.body,
                                i = document.createElement("div");
                            i.setAttribute("class", "disable-hover"), window.addEventListener("scroll", function() {
                                clearTimeout(t), n.appendChild(i), t = setTimeout(function() {
                                    n.removeChild(i)
                                }, 250)
                            }, !1)
                        }
                        e(".footer-logo").click(function() {
                            return e("body,html").animate({
                                scrollTop: 0
                            }, 700), !1
                        })
                    }
                }
            },
            n = {
                fire: function(e, n, i) {
                    var o = t;
                    n = void 0 === n ? "init" : n, "" !== e && o[e] && "function" == typeof o[e][n] && o[e][n](i)
                },
                loadEvents: function() {
                    n.fire("common"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, t) {
                        n.fire(t)
                    })
                }
            };
        e(document).ready(n.loadEvents)
    }(jQuery), jQuery(document).ready(function(e) {
        e(".navigation-overlay nav ul li").fitText(1.2, {
            minFontSize: "15px",
            maxFontSize: "120px"
        }), e(".frontpage-slider h2").fitText(1.2, {
            minFontSize: "30px",
            maxFontSize: "70px"
        })
    });