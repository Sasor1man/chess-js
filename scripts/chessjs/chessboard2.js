/*! chessboard2 v0.5.0 | (c) 2021 Chris Oakman | ISC License | https://chessboardjs.com/v2 */
(function () {
    'use strict';
    var g, aa = this || self;
    function q(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function wa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function da(a) {
        return Object.prototype.hasOwnProperty.call(a, ba) && a[ba] || (a[ba] = ++ca)
    }
    var ba = "closure_uid_" + (1E9 * Math.random() >>> 0)
        , ca = 0;
    function bc(a) {
        let b = 0;
        return function (c) {
            aa.clearTimeout(b);
            const d = arguments;
            b = aa.setTimeout(function () {
                a.apply(void 0, d)
            }, 10)
        }
    }
    ; function fa(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = d;
        return b
    }
    function O(a, b) {
        return null !== a && b in a ? a[b] : void 0
    }
    ; function ha(a, b) {
        a.sort(b || ia)
    }
    function ja(a, b) {
        const c = Array(a.length);
        for (let e = 0; e < a.length; e++)
            c[e] = {
                index: e,
                value: a[e]
            };
        const d = b || ia;
        ha(c, function (e, f) {
            return d(e.value, f.value) || e.index - f.index
        });
        for (b = 0; b < a.length; b++)
            a[b] = c[b].value
    }
    function ia(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ; var ka;
    a: {
        const a = aa.navigator;
        if (a) {
            const b = a.userAgent;
            if (b) {
                ka = b;
                break a
            }
        }
        ka = ""
    }
    let la = ka;
    function Q(a) {
        return -1 != la.indexOf(a)
    }
    ; function ma() {
        return Q("Firefox") || Q("FxiOS")
    }
    function na() {
        return (Q("Chrome") || Q("CriOS")) && !Q("Edge")
    }
    ; function Oa(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    g = Oa.prototype;
    g.Qa = "";
    g.set = function (a) {
        this.Qa = "" + a
    }
        ;
    g.append = function (a, b, c) {
        this.Qa += String(a);
        if (null != b)
            for (let d = 1; d < arguments.length; d++)
                this.Qa += arguments[d];
        return this
    }
        ;
    g.clear = function () {
        this.Qa = ""
    }
        ;
    g.toString = function () {
        return this.Qa
    }
        ;
    var Pa = {}, Ra = {}, oa, t = {}, Ta = null;
    function Ua() {
        return new u(null, 5, [Va, !0, Wa, !0, Xa, !1, Ya, !1, Za, null], null)
    }
    function w(a) {
        return null != a && !1 !== a
    }
    function $a(a) {
        return null == a
    }
    function ab(a) {
        return a instanceof Array
    }
    function bb(a) {
        return null == a ? !0 : !1 === a ? !0 : !1
    }
    function cb(a) {
        return null != a ? a.constructor === Object : !1
    }
    function x(a, b) {
        return a[q(null == b ? null : b)] ? !0 : a._ ? !0 : !1
    }
    function db(a) {
        return null == a ? null : a.constructor
    }
    function fb(a, b) {
        var c = db(b);
        return Error(["No protocol method ", a, " defined for type ", w(w(c) ? c.Kb : c) ? c.tb : q(b), ": ", b].join(""))
    }
    function gb(a) {
        var b = a.tb;
        return w(b) ? b : z.ic(a)
    }
    var hb = "undefined" !== typeof Symbol && "function" === q(Symbol) ? Symbol.iterator : "@@iterator";
    function ib(a) {
        for (var b = a.length, c = Array(b), d = 0; ;)
            if (d < b)
                c[d] = a[d],
                    d += 1;
            else
                break;
        return c
    }
    function jb(a) {
        function b(d, e) {
            d.push(e);
            return d
        }
        var c = [];
        return kb ? kb(b, c, a) : lb.call(null, b, c, a)
    }
    function nb() { }
    function ob() { }
    function pb(a) {
        if (null != a && null != a.K)
            a = a.K(a);
        else {
            var b = pb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = pb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("ICounted.-count", a);
        }
        return a
    }
    function qb() { }
    function rb(a) {
        if (null != a && null != a.W)
            a = a.W(a);
        else {
            var b = rb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = rb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IEmptyableCollection.-empty", a);
        }
        return a
    }
    function sb() { }
    function tb(a, b) {
        if (null != a && null != a.Y)
            a = a.Y(a, b);
        else {
            var c = tb[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = tb._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("ICollection.-conj", a);
        }
        return a
    }
    function ub() { }
    var pa = function () {
        function a(d, e, f) {
            var h = vb[q(null == d ? null : d)];
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            h = vb._;
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            throw fb("IIndexed.-nth", d);
        }
        function b(d, e) {
            var f = vb[q(null == d ? null : d)];
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            f = vb._;
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            throw fb("IIndexed.-nth", d);
        }
        var c = null;
        c = function (d, e, f) {
            switch (arguments.length) {
                case 2:
                    return b.call(this, d, e);
                case 3:
                    return a.call(this, d, e, f)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        c.fc = b;
        c.Ac = a;
        return c
    }()
        , vb = function vb(a) {
            switch (arguments.length) {
                case 2:
                    return vb.fc(arguments[0], arguments[1]);
                case 3:
                    return vb.Ac(arguments[0], arguments[1], arguments[2]);
                default:
                    throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
            }
        };
    vb.fc = function (a, b) {
        return null != a && null != a.C ? a.C(a, b) : pa(a, b)
    }
        ;
    vb.Ac = function (a, b, c) {
        return null != a && null != a.da ? a.da(a, b, c) : pa(a, b, c)
    }
        ;
    vb.G = 3;
    function xb() { }
    function yb(a) {
        if (null != a && null != a.ba)
            a = a.ba(a);
        else {
            var b = yb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = yb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("ISeq.-first", a);
        }
        return a
    }
    function zb(a) {
        if (null != a && null != a.ga)
            a = a.ga(a);
        else {
            var b = zb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = zb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("ISeq.-rest", a);
        }
        return a
    }
    function Bb() { }
    function Cb() { }
    var qa = function () {
        function a(d, e, f) {
            var h = Db[q(null == d ? null : d)];
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            h = Db._;
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            throw fb("ILookup.-lookup", d);
        }
        function b(d, e) {
            var f = Db[q(null == d ? null : d)];
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            f = Db._;
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            throw fb("ILookup.-lookup", d);
        }
        var c = null;
        c = function (d, e, f) {
            switch (arguments.length) {
                case 2:
                    return b.call(this, d, e);
                case 3:
                    return a.call(this, d, e, f)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        c.fc = b;
        c.Ac = a;
        return c
    }()
        , Db = function Db(a) {
            switch (arguments.length) {
                case 2:
                    return Db.fc(arguments[0], arguments[1]);
                case 3:
                    return Db.Ac(arguments[0], arguments[1], arguments[2]);
                default:
                    throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
            }
        };
    Db.fc = function (a, b) {
        return null != a && null != a.M ? a.M(a, b) : qa(a, b)
    }
        ;
    Db.Ac = function (a, b, c) {
        return null != a && null != a.B ? a.B(a, b, c) : qa(a, b, c)
    }
        ;
    Db.G = 3;
    function sa() { }
    function ta(a, b) {
        if (null != a && null != a.Bc)
            a = a.Bc(a, b);
        else {
            var c = ta[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = ta._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IAssociative.-contains-key?", a);
        }
        return a
    }
    function Fb(a, b, c) {
        if (null != a && null != a.Oa)
            a = a.Oa(a, b, c);
        else {
            var d = Fb[q(null == a ? null : a)];
            if (null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else if (d = Fb._,
                null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else
                throw fb("IAssociative.-assoc", a);
        }
        return a
    }
    function Gb(a, b) {
        if (null != a && null != a.cb)
            a = a.cb(a, b);
        else {
            var c = Gb[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = Gb._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IFind.-find", a);
        }
        return a
    }
    function Hb() { }
    function Ib(a, b) {
        if (null != a && null != a.Bb)
            a = a.Bb(a, b);
        else {
            var c = Ib[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = Ib._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IMap.-dissoc", a);
        }
        return a
    }
    function Jb(a) {
        if (null != a && null != a.Ub)
            a = a.key;
        else {
            var b = Jb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Jb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IMapEntry.-key", a);
        }
        return a
    }
    function Kb(a) {
        if (null != a && null != a.Vb)
            a = a.O;
        else {
            var b = Kb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Kb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IMapEntry.-val", a);
        }
        return a
    }
    function Lb() { }
    function Mb(a) {
        if (null != a && null != a.fb)
            a = a.fb(a);
        else {
            var b = Mb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Mb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IStack.-peek", a);
        }
        return a
    }
    function Nb(a) {
        if (null != a && null != a.gb)
            a = a.gb(a);
        else {
            var b = Nb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Nb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IStack.-pop", a);
        }
        return a
    }
    function Ob() { }
    function C(a) {
        if (null != a && null != a.Ab)
            a = a.Ab(a);
        else {
            var b = C[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = C._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IDeref.-deref", a);
        }
        return a
    }
    function Pb() { }
    function Qb(a) {
        if (null != a && null != a.U)
            a = a.U(a);
        else {
            var b = Qb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Qb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IMeta.-meta", a);
        }
        return a
    }
    function Rb(a, b) {
        if (null != a && null != a.V)
            a = a.V(a, b);
        else {
            var c = Rb[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = Rb._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IWithMeta.-with-meta", a);
        }
        return a
    }
    function Sb() { }
    var ua = function () {
        function a(d, e, f) {
            var h = Tb[q(null == d ? null : d)];
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            h = Tb._;
            if (null != h)
                return h.Ac ? h.Ac(d, e, f) : h.call(null, d, e, f);
            throw fb("IReduce.-reduce", d);
        }
        function b(d, e) {
            var f = Tb[q(null == d ? null : d)];
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            f = Tb._;
            if (null != f)
                return f.fc ? f.fc(d, e) : f.call(null, d, e);
            throw fb("IReduce.-reduce", d);
        }
        var c = null;
        c = function (d, e, f) {
            switch (arguments.length) {
                case 2:
                    return b.call(this, d, e);
                case 3:
                    return a.call(this, d, e, f)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        c.fc = b;
        c.Ac = a;
        return c
    }()
        , Tb = function Tb(a) {
            switch (arguments.length) {
                case 2:
                    return Tb.fc(arguments[0], arguments[1]);
                case 3:
                    return Tb.Ac(arguments[0], arguments[1], arguments[2]);
                default:
                    throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
            }
        };
    Tb.fc = function (a, b) {
        return null != a && null != a.ea ? a.ea(a, b) : ua(a, b)
    }
        ;
    Tb.Ac = function (a, b, c) {
        return null != a && null != a.fa ? a.fa(a, b, c) : ua(a, b, c)
    }
        ;
    Tb.G = 3;
    function Vb() { }
    function Wb(a, b) {
        if (null != a && null != a.rb)
            a = a.rb(a, b, !0);
        else {
            var c = Wb[q(null == a ? null : a)];
            if (null != c)
                a = c.Ac ? c.Ac(a, b, !0) : c.call(null, a, b, !0);
            else if (c = Wb._,
                null != c)
                a = c.Ac ? c.Ac(a, b, !0) : c.call(null, a, b, !0);
            else
                throw fb("IKVReduce.-kv-reduce", a);
        }
        return a
    }
    function Xb(a, b) {
        if (null != a && null != a.P)
            a = a.P(a, b);
        else {
            var c = Xb[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = Xb._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IEquiv.-equiv", a);
        }
        return a
    }
    function Yb(a) {
        if (null != a && null != a.T)
            a = a.T(a);
        else {
            var b = Yb[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = Yb._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IHash.-hash", a);
        }
        return a
    }
    function Zb() { }
    function $b(a) {
        if (null != a && null != a.N)
            a = a.N(a);
        else {
            var b = $b[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = $b._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("ISeqable.-seq", a);
        }
        return a
    }
    function ac() { }
    function cc() { }
    function dc() { }
    function ec() { }
    function fc(a) {
        if (null != a && null != a.sb)
            a = a.sb(a);
        else {
            var b = fc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = fc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IReversible.-rseq", a);
        }
        return a
    }
    function gc(a, b) {
        if (null != a && null != a.Jb)
            a = a.Jb(a, b);
        else {
            var c = gc[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = gc._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IWriter.-write", a);
        }
        return a
    }
    function hc() { }
    function ic(a, b, c) {
        if (null != a && null != a.S)
            a = a.S(a, b, c);
        else {
            var d = ic[q(null == a ? null : a)];
            if (null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else if (d = ic._,
                null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else
                throw fb("IPrintWithWriter.-pr-writer", a);
        }
        return a
    }
    function jc(a) {
        var b = kc
            , c = lc;
        if (null != a && null != a.Ib)
            a.Ib(a, b, c);
        else {
            var d = jc[q(null == a ? null : a)];
            if (null != d)
                d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else if (d = jc._,
                null != d)
                d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else
                throw fb("IWatchable.-add-watch", a);
        }
    }
    function mc(a) {
        if (null != a && null != a.Xa)
            a = a.Xa(a);
        else {
            var b = mc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = mc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IEditableCollection.-as-transient", a);
        }
        return a
    }
    function nc(a, b) {
        if (null != a && null != a.Za)
            a = a.Za(a, b);
        else {
            var c = nc[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = nc._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("ITransientCollection.-conj!", a);
        }
        return a
    }
    function oc(a) {
        if (null != a && null != a.hb)
            a = a.hb(a);
        else {
            var b = oc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = oc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("ITransientCollection.-persistent!", a);
        }
        return a
    }
    function pc(a, b, c) {
        if (null != a && null != a.Ya)
            a = a.Ya(a, b, c);
        else {
            var d = pc[q(null == a ? null : a)];
            if (null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else if (d = pc._,
                null != d)
                a = d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c);
            else
                throw fb("ITransientAssociative.-assoc!", a);
        }
        return a
    }
    function qc() { }
    function rc(a, b) {
        if (null != a && null != a.Wa)
            a = a.Wa(a, b);
        else {
            var c = rc[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = rc._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IComparable.-compare", a);
        }
        return a
    }
    function sc(a) {
        if (null != a && null != a.yb)
            a = a.yb(a);
        else {
            var b = sc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = sc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IChunk.-drop-first", a);
        }
        return a
    }
    function tc(a) {
        if (null != a && null != a.qb)
            a = a.qb(a);
        else {
            var b = tc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = tc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IChunkedSeq.-chunked-first", a);
        }
        return a
    }
    function uc(a) {
        if (null != a && null != a.Va)
            a = a.Va(a);
        else {
            var b = uc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = uc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IChunkedSeq.-chunked-rest", a);
        }
        return a
    }
    function vc(a, b) {
        if (null != a && null != a.Zb)
            a = a.Zb(a, b);
        else {
            var c = vc[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = vc._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IReset.-reset!", a);
        }
        return a
    }
    var va = function () {
        function a(f, h, k, l, m) {
            var n = wc[q(null == f ? null : f)];
            if (null != n)
                return n.R ? n.R(f, h, k, l, m) : n.call(null, f, h, k, l, m);
            n = wc._;
            if (null != n)
                return n.R ? n.R(f, h, k, l, m) : n.call(null, f, h, k, l, m);
            throw fb("ISwap.-swap!", f);
        }
        function b(f, h, k, l) {
            var m = wc[q(null == f ? null : f)];
            if (null != m)
                return m.o ? m.o(f, h, k, l) : m.call(null, f, h, k, l);
            m = wc._;
            if (null != m)
                return m.o ? m.o(f, h, k, l) : m.call(null, f, h, k, l);
            throw fb("ISwap.-swap!", f);
        }
        function c(f, h, k) {
            var l = wc[q(null == f ? null : f)];
            if (null != l)
                return l.Ac ? l.Ac(f, h, k) : l.call(null, f, h, k);
            l = wc._;
            if (null != l)
                return l.Ac ? l.Ac(f, h, k) : l.call(null, f, h, k);
            throw fb("ISwap.-swap!", f);
        }
        function d(f, h) {
            var k = wc[q(null == f ? null : f)];
            if (null != k)
                return k.fc ? k.fc(f, h) : k.call(null, f, h);
            k = wc._;
            if (null != k)
                return k.fc ? k.fc(f, h) : k.call(null, f, h);
            throw fb("ISwap.-swap!", f);
        }
        var e = null;
        e = function (f, h, k, l, m) {
            switch (arguments.length) {
                case 2:
                    return d.call(this, f, h);
                case 3:
                    return c.call(this, f, h, k);
                case 4:
                    return b.call(this, f, h, k, l);
                case 5:
                    return a.call(this, f, h, k, l, m)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        e.fc = d;
        e.Ac = c;
        e.o = b;
        e.R = a;
        return e
    }()
        , wc = function wc(a) {
            switch (arguments.length) {
                case 2:
                    return wc.fc(arguments[0], arguments[1]);
                case 3:
                    return wc.Ac(arguments[0], arguments[1], arguments[2]);
                case 4:
                    return wc.o(arguments[0], arguments[1], arguments[2], arguments[3]);
                case 5:
                    return wc.R(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                default:
                    throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
            }
        };
    wc.fc = function (a, b) {
        return null != a && null != a.ac ? a.ac(a, b) : va(a, b)
    }
        ;
    wc.Ac = function (a, b, c) {
        return null != a && null != a.bc ? a.bc(a, b, c) : va(a, b, c)
    }
        ;
    wc.o = function (a, b, c, d) {
        return null != a && null != a.cc ? a.cc(a, b, c, d) : va(a, b, c, d)
    }
        ;
    wc.R = function (a, b, c, d, e) {
        return null != a && null != a.dc ? a.dc(a, b, c, d, e) : va(a, b, c, d, e)
    }
        ;
    wc.G = 5;
    function yc() { }
    function zc(a) {
        if (null != a && null != a.oa)
            a = a.oa(a);
        else {
            var b = zc[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = zc._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IIterable.-iterator", a);
        }
        return a
    }
    function Ac(a) {
        this.hc = a;
        this.g = 1073741824;
        this.v = 0
    }
    Ac.prototype.Jb = function (a, b) {
        return this.hc.append(b)
    }
        ;
    function Bc(a) {
        var b = new Oa;
        a.S(null, new Ac(b), Ua());
        return z.ic(b)
    }
    var Cc = "undefined" !== typeof Math && "undefined" !== typeof Math.imul ? function (a, b) {
        return Math.imul(a, b)
    }
        : function (a, b) {
            var c = a & 65535
                , d = b & 65535;
            return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0
        }
        ;
    function Dc(a) {
        a = Cc(a | 0, -862048943);
        return Cc(a << 15 | a >>> -15, 461845907)
    }
    function Ec(a, b) {
        a = (a | 0) ^ (b | 0);
        return Cc(a << 13 | a >>> -13, 5) + -430675100 | 0
    }
    function Fc(a, b) {
        a = (a | 0) ^ b;
        a = Cc(a ^ a >>> 16, -2048144789);
        a = Cc(a ^ a >>> 13, -1028477387);
        return a ^ a >>> 16
    }
    function Gc(a) {
        a: {
            var b = 1;
            for (var c = 0; ;)
                if (b < a.length)
                    c = Ec(c, Dc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16)),
                        b += 2;
                else {
                    b = c;
                    break a
                }
        }
        return Fc(1 === (a.length & 1) ? b ^ Dc(a.charCodeAt(a.length - 1)) : b, Cc(2, a.length))
    }
    var Hc = {}
        , Ic = 0;
    function Jc(a) {
        255 < Ic && (Hc = {},
            Ic = 0);
        if (null == a)
            return 0;
        var b = Hc[a];
        if ("number" === typeof b)
            a = b;
        else {
            a: if (null != a)
                if (b = a.length,
                    0 < b)
                    for (var c = 0, d = 0; ;)
                        if (c < b)
                            d = Cc(31, d) + a.charCodeAt(c),
                                c += 1;
                        else {
                            b = d;
                            break a
                        }
                else
                    b = 0;
            else
                b = 0;
            Hc[a] = b;
            Ic += 1;
            a = b
        }
        return a
    }
    function Kc(a) {
        if (null != a && (a.g & 4194304 || t === a.pc))
            return a.T(null) ^ 0;
        if ("number" === typeof a) {
            if (isFinite(a))
                return Math.floor(a) % 2147483647;
            switch (a) {
                case Infinity:
                    return 2146435072;
                case -Infinity:
                    return -1048576;
                default:
                    return 2146959360
            }
        } else
            return !0 === a ? a = 1231 : !1 === a ? a = 1237 : "string" === typeof a ? (a = Jc(a),
                a = 0 === a ? a : Fc(Ec(0, Dc(a)), 4)) : a = a instanceof Date ? a.valueOf() ^ 0 : null == a ? 0 : Yb(a) ^ 0,
                a
    }
    function Lc(a, b) {
        return a ^ b + 2654435769 + (a << 6) + (a >> 2)
    }
    function Mc(a, b) {
        if (a.wa === b.wa)
            return 0;
        var c = bb(a.la);
        if (w(c ? b.la : c))
            return -1;
        if (w(a.la)) {
            if (bb(b.la))
                return 1;
            c = ia(a.la, b.la);
            return 0 === c ? ia(a.name, b.name) : c
        }
        return ia(a.name, b.name)
    }
    function Nc(a, b, c, d, e) {
        this.la = a;
        this.name = b;
        this.wa = c;
        this.Ua = d;
        this.va = e;
        this.g = 2154168321;
        this.v = 4096
    }
    g = Nc.prototype;
    g.toString = function () {
        return this.wa
    }
        ;
    g.P = function (a, b) {
        return b instanceof Nc ? this.wa === b.wa : !1
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return D.fc ? D.fc(a, this) : D.call(null, a, this)
    }
        ;
    g.fc = function (a, b) {
        return D.Ac ? D.Ac(a, this, b) : D.call(null, a, this, b)
    }
        ;
    g.U = function () {
        return this.va
    }
        ;
    g.V = function (a, b) {
        return new Nc(this.la, this.name, this.wa, this.Ua, b)
    }
        ;
    g.T = function () {
        var a = this.Ua;
        return null != a ? a : this.Ua = a = Lc(Gc(this.name), Jc(this.la))
    }
        ;
    g.S = function (a, b) {
        return gc(b, this.wa)
    }
        ;
    var Oc = function Oc(a) {
        switch (arguments.length) {
            case 1:
                return Oc.ic(arguments[0]);
            case 2:
                return Oc.fc(arguments[0], arguments[1]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    };
    Oc.ic = function (a) {
        for (; ;) {
            if (a instanceof Nc)
                return a;
            if ("string" === typeof a) {
                var b = a.indexOf("/");
                return 1 > b ? Oc.fc(null, a) : Oc.fc(a.substring(0, b), a.substring(b + 1, a.length))
            }
            if (a instanceof F)
                a = a.pa;
            else
                throw Error("no conversion to symbol");
        }
    }
        ;
    Oc.fc = function (a, b) {
        var c = null != a ? [z.ic(a), "/", z.ic(b)].join("") : b;
        return new Nc(a, b, c, null, null)
    }
        ;
    Oc.G = 2;
    function Pc(a) {
        return null != a ? a.v & 131072 || t === a.qc ? !0 : a.v ? !1 : x(yc, a) : x(yc, a)
    }
    function J(a) {
        if (null == a)
            return null;
        if (null != a && (a.g & 8388608 || t === a.$b))
            return a.N(null);
        if (ab(a) || "string" === typeof a)
            return 0 === a.length ? null : new Qc(a, 0, null);
        if (null != a && null != a[hb])
            return a = O(a, hb).call(a),
                Rc.ic ? Rc.ic(a) : Rc.call(null, a);
        if (x(Zb, a))
            return $b(a);
        throw Error([z.ic(a), " is not ISeqable"].join(""));
    }
    function N(a) {
        if (null == a)
            return null;
        if (null != a && (a.g & 64 || t === a.A))
            return a.ba(null);
        a = J(a);
        return null == a ? null : yb(a)
    }
    function Sc(a) {
        return null != a ? null != a && (a.g & 64 || t === a.A) ? a.ga(null) : (a = J(a)) ? a.ga(null) : Tc : Tc
    }
    function P(a) {
        return null == a ? null : null != a && (a.g & 128 || t === a.eb) ? a.aa() : J(Sc(a))
    }
    var R = function R(a) {
        switch (arguments.length) {
            case 1:
                return R.ic(arguments[0]);
            case 2:
                return R.fc(arguments[0], arguments[1]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return R.l(arguments[0], arguments[1], new Qc(c.slice(2), 0, null))
        }
    };
    R.ic = function () {
        return !0
    }
        ;
    R.fc = function (a, b) {
        return null == a ? null == b : a === b || Xb(a, b)
    }
        ;
    R.l = function (a, b, c) {
        for (; ;)
            if (R.fc(a, b))
                if (P(c))
                    a = b,
                        b = N(c),
                        c = P(c);
                else
                    return R.fc(b, N(c));
            else
                return !1
    }
        ;
    R.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        c = P(c);
        return this.l(b, a, c)
    }
        ;
    R.G = 2;
    function Uc(a) {
        this.D = a
    }
    Uc.prototype.next = function () {
        if (null != this.D) {
            var a = N(this.D);
            this.D = P(this.D);
            return {
                value: a,
                done: !1
            }
        }
        return {
            value: null,
            done: !0
        }
    }
        ;
    function Vc(a) {
        return new Uc(J(a))
    }
    function Wc(a, b) {
        this.value = a;
        this.ab = b;
        this.vb = null;
        this.g = 8388672;
        this.v = 0
    }
    Wc.prototype.N = function () {
        return this
    }
        ;
    Wc.prototype.ba = function () {
        return this.value
    }
        ;
    Wc.prototype.ga = function () {
        null == this.vb && (this.vb = Rc.ic ? Rc.ic(this.ab) : Rc.call(null, this.ab));
        return this.vb
    }
        ;
    function Rc(a) {
        var b = a.next();
        return w(b.done) ? null : new Wc(b.value, a)
    }
    function Xc(a) {
        var b = 0
            , c = 1;
        for (a = J(a); ;)
            if (null != a)
                b += 1,
                    c = Cc(31, c) + Kc(N(a)) | 0,
                    a = P(a);
            else
                return Fc(Ec(0, Dc(c)), b)
    }
    var Yc = Fc(Ec(0, Dc(1)), 0);
    function Zc(a) {
        var b = 0
            , c = 0;
        for (a = J(a); ;)
            if (null != a)
                b += 1,
                    c = c + Kc(N(a)) | 0,
                    a = P(a);
            else
                return Fc(Ec(0, Dc(c)), b)
    }
    var $c = Fc(Ec(0, Dc(0)), 0);
    ob["null"] = !0;
    pb["null"] = function () {
        return 0
    }
        ;
    Date.prototype.P = function (a, b) {
        return b instanceof Date && this.valueOf() === b.valueOf()
    }
        ;
    Date.prototype.bb = t;
    Date.prototype.Wa = function (a, b) {
        if (b instanceof Date)
            return ia(this.valueOf(), b.valueOf());
        throw Error(["Cannot compare ", z.ic(this), " to ", z.ic(b)].join(""));
    }
        ;
    Xb.number = function (a, b) {
        return a === b
    }
        ;
    nb["function"] = !0;
    Pb["function"] = !0;
    Qb["function"] = function () {
        return null
    }
        ;
    Yb._ = function (a) {
        return da(a)
    }
        ;
    function ad(a) {
        this.O = a;
        this.g = 32768;
        this.v = 0
    }
    ad.prototype.Ab = function () {
        return this.O
    }
        ;
    function bd(a) {
        return a instanceof ad
    }
    function cd(a) {
        return C(a)
    }
    function dd(a, b) {
        var c = a.K(null);
        if (0 === c)
            return b.s ? b.s() : b.call(null);
        for (var d = a.C(null, 0), e = 1; ;)
            if (e < c) {
                var f = a.C(null, e);
                d = b.fc ? b.fc(d, f) : b.call(null, d, f);
                if (bd(d))
                    return C(d);
                e += 1
            } else
                return d
    }
    function ed(a, b) {
        var c = a.length;
        if (0 === a.length)
            return b.s ? b.s() : b.call(null);
        for (var d = a[0], e = 1; ;)
            if (e < c) {
                var f = a[e];
                d = b.fc ? b.fc(d, f) : b.call(null, d, f);
                if (bd(d))
                    return C(d);
                e += 1
            } else
                return d
    }
    function fd(a, b, c) {
        var d = a.length
            , e = c;
        for (c = 0; ;)
            if (c < d) {
                var f = a[c];
                e = b.fc ? b.fc(e, f) : b.call(null, e, f);
                if (bd(e))
                    return C(e);
                c += 1
            } else
                return e
    }
    function gd(a, b, c, d) {
        for (var e = a.length; ;)
            if (d < e) {
                var f = a[d];
                c = b.fc ? b.fc(c, f) : b.call(null, c, f);
                if (bd(c))
                    return C(c);
                d += 1
            } else
                return c
    }
    function hd(a) {
        return null != a ? a.g & 2 || t === a.Nb ? !0 : a.g ? !1 : x(ob, a) : x(ob, a)
    }
    function id(a) {
        return null != a ? a.g & 16 || t === a.Gb ? !0 : a.g ? !1 : x(ub, a) : x(ub, a)
    }
    function T(a, b, c) {
        var d = U.ic ? U.ic(a) : U.call(null, a);
        if (c >= d)
            return -1;
        !(0 < c) && 0 > c && (c += d,
            c = 0 > c ? 0 : c);
        for (; ;)
            if (c < d) {
                if (R.fc(jd ? jd(a, c) : kd.call(null, a, c), b))
                    return c;
                c += 1
            } else
                return -1
    }
    function ld(a, b, c) {
        var d = U.ic ? U.ic(a) : U.call(null, a);
        if (0 === d)
            return -1;
        0 < c ? (--d,
            c = d < c ? d : c) : c = 0 > c ? d + c : c;
        for (; ;)
            if (0 <= c) {
                if (R.fc(jd ? jd(a, c) : kd.call(null, a, c), b))
                    return c;
                --c
            } else
                return -1
    }
    function md(a, b) {
        this.zc = a;
        this.j = b
    }
    md.prototype.ha = function () {
        return this.j < this.zc.length
    }
        ;
    md.prototype.next = function () {
        var a = this.zc[this.j];
        this.j += 1;
        return a
    }
        ;
    function Qc(a, b, c) {
        this.zc = a;
        this.j = b;
        this.m = c;
        this.g = 166592766;
        this.v = 139264
    }
    g = Qc.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U.ic ? U.ic(this) : U.call(null, this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.C = function (a, b) {
        a = b + this.j;
        if (0 <= a && a < this.zc.length)
            return this.zc[a];
        throw Error("Index out of bounds");
    }
        ;
    g.da = function (a, b, c) {
        a = b + this.j;
        return 0 <= a && a < this.zc.length ? this.zc[a] : c
    }
        ;
    g.oa = function () {
        return new md(this.zc, this.j)
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return this.j + 1 < this.zc.length ? new Qc(this.zc, this.j + 1, null) : null
    }
        ;
    g.K = function () {
        var a = this.zc.length - this.j;
        return 0 > a ? 0 : a
    }
        ;
    g.sb = function () {
        var a = this.K(null);
        return 0 < a ? new od(this, a - 1, null) : null
    }
        ;
    g.T = function () {
        return Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd.fc ? pd.fc(this, b) : pd.call(null, this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return gd(this.zc, b, this.zc[this.j], this.j + 1)
    }
        ;
    g.fa = function (a, b, c) {
        return gd(this.zc, b, c, this.j)
    }
        ;
    g.ba = function () {
        return this.zc[this.j]
    }
        ;
    g.ga = function () {
        return this.j + 1 < this.zc.length ? new Qc(this.zc, this.j + 1, null) : Tc
    }
        ;
    g.N = function () {
        return this.j < this.zc.length ? this : null
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Qc(this.zc, this.j, b)
    }
        ;
    g.Y = function (a, b) {
        return qd.fc ? qd.fc(b, this) : qd.call(null, b, this)
    }
        ;
    Qc.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function rd(a) {
        return 0 < a.length ? new Qc(a, 0, null) : null
    }
    function od(a, b, c) {
        this.pb = a;
        this.j = b;
        this.m = c;
        this.g = 32374990;
        this.v = 8192
    }
    g = od.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U.ic ? U.ic(this) : U.call(null, this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return 0 < this.j ? new od(this.pb, this.j - 1, null) : null
    }
        ;
    g.K = function () {
        return this.j + 1
    }
        ;
    g.T = function () {
        return Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd.fc ? pd.fc(this, b) : pd.call(null, this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd ? sd(b, this) : td.call(null, b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud ? ud(b, c, this) : td.call(null, b, c, this)
    }
        ;
    g.ba = function () {
        return vb(this.pb, this.j)
    }
        ;
    g.ga = function () {
        return 0 < this.j ? new od(this.pb, this.j - 1, null) : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new od(this.pb, this.j, b)
    }
        ;
    g.Y = function (a, b) {
        return qd.fc ? qd.fc(b, this) : qd.call(null, b, this)
    }
        ;
    od.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function vd(a) {
        for (; ;) {
            var b = P(a);
            if (null != b)
                a = b;
            else
                return N(a)
        }
    }
    Xb._ = function (a, b) {
        return a === b
    }
        ;
    var wd = function wd(a) {
        switch (arguments.length) {
            case 0:
                return wd.s();
            case 1:
                return wd.ic(arguments[0]);
            case 2:
                return wd.fc(arguments[0], arguments[1]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return wd.l(arguments[0], arguments[1], new Qc(c.slice(2), 0, null))
        }
    };
    wd.s = function () {
        return xd
    }
        ;
    wd.ic = function (a) {
        return a
    }
        ;
    wd.fc = function (a, b) {
        return null != a ? tb(a, b) : new yd(null, b, null, 1, null)
    }
        ;
    wd.l = function (a, b, c) {
        for (; ;)
            if (w(c))
                a = wd.fc(a, b),
                    b = N(c),
                    c = P(c);
            else
                return wd.fc(a, b)
    }
        ;
    wd.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        c = P(c);
        return this.l(b, a, c)
    }
        ;
    wd.G = 2;
    function zd(a) {
        return null == a ? null : null != a && (a.g & 4 || t === a.Pb) ? a.W(null) : (null != a ? a.g & 4 || t === a.Pb || (a.g ? 0 : x(qb, a)) : x(qb, a)) ? rb(a) : null
    }
    function U(a) {
        if (null != a)
            if (null != a && (a.g & 2 || t === a.Nb))
                a = a.K(null);
            else if (ab(a))
                a = a.length;
            else if ("string" === typeof a)
                a = a.length;
            else if (null != a && (a.g & 8388608 || t === a.$b))
                a: {
                    a = J(a);
                    for (var b = 0; ;) {
                        if (hd(a)) {
                            a = b + pb(a);
                            break a
                        }
                        a = P(a);
                        b += 1
                    }
                }
            else
                a = pb(a);
        else
            a = 0;
        return a
    }
    function Ad(a, b, c) {
        for (; ;) {
            if (null == a)
                return c;
            if (0 === b)
                return J(a) ? N(a) : c;
            if (id(a))
                return vb(a, b, c);
            if (J(a))
                a = P(a),
                    --b;
            else
                return c
        }
    }
    function kd(a) {
        switch (arguments.length) {
            case 2:
                return jd(arguments[0], arguments[1]);
            case 3:
                return Bd(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function jd(a, b) {
        if ("number" !== typeof b)
            throw Error("Index argument to nth must be a number");
        if (null == a)
            return a;
        if (null != a && (a.g & 16 || t === a.Gb))
            return a.C(null, b);
        if (ab(a)) {
            if (-1 < b && b < a.length)
                return a[b | 0];
            throw Error("Index out of bounds");
        }
        if ("string" === typeof a) {
            if (-1 < b && b < a.length)
                return a.charAt(b | 0);
            throw Error("Index out of bounds");
        }
        if (null != a && (a.g & 64 || t === a.A) || null != a && (a.g & 16777216 || t === a.Hb)) {
            if (0 > b)
                throw Error("Index out of bounds");
            a: for (; ;) {
                if (null == a)
                    throw Error("Index out of bounds");
                if (0 === b) {
                    if (J(a)) {
                        a = N(a);
                        break a
                    }
                    throw Error("Index out of bounds");
                }
                if (id(a)) {
                    a = vb(a, b);
                    break a
                }
                if (J(a))
                    a = P(a),
                        --b;
                else
                    throw Error("Index out of bounds");
            }
            return a
        }
        if (x(ub, a))
            return vb(a, b);
        throw Error(["nth not supported on this type ", z.ic(gb(db(a)))].join(""));
    }
    function Bd(a, b, c) {
        if ("number" !== typeof b)
            throw Error("Index argument to nth must be a number.");
        if (null == a)
            return c;
        if (null != a && (a.g & 16 || t === a.Gb))
            return a.da(null, b, c);
        if (ab(a))
            return -1 < b && b < a.length ? a[b | 0] : c;
        if ("string" === typeof a)
            return -1 < b && b < a.length ? a.charAt(b | 0) : c;
        if (null != a && (a.g & 64 || t === a.A) || null != a && (a.g & 16777216 || t === a.Hb))
            return 0 > b ? c : Ad(a, b, c);
        if (x(ub, a))
            return vb(a, b, c);
        throw Error(["nth not supported on this type ", z.ic(gb(db(a)))].join(""));
    }
    var D = function D(a) {
        switch (arguments.length) {
            case 2:
                return D.fc(arguments[0], arguments[1]);
            case 3:
                return D.Ac(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    };
    D.fc = function (a, b) {
        return null == a ? null : null != a && (a.g & 256 || t === a.Tb) ? a.M(null, b) : ab(a) ? null != b && b < a.length ? a[b | 0] : null : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : null : x(Cb, a) ? Db(a, b) : null
    }
        ;
    D.Ac = function (a, b, c) {
        return null != a ? null != a && (a.g & 256 || t === a.Tb) ? a.B(null, b, c) : ab(a) ? null != b && -1 < b && b < a.length ? a[b | 0] : c : "string" === typeof a ? null != b && -1 < b && b < a.length ? a.charAt(b | 0) : c : x(Cb, a) ? Db(a, b, c) : c : c
    }
        ;
    D.G = 3;
    var V = function V(a) {
        switch (arguments.length) {
            case 3:
                return V.Ac(arguments[0], arguments[1], arguments[2]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return V.l(arguments[0], arguments[1], arguments[2], new Qc(c.slice(3), 0, null))
        }
    };
    V.Ac = function (a, b, c) {
        return null != a && (a.g & 512 || t === a.lc) ? a.Oa(null, b, c) : null != a ? Fb(a, b, c) : Cd([b, c])
    }
        ;
    V.l = function (a, b, c, d) {
        for (; ;)
            if (a = V.Ac(a, b, c),
                w(d))
                b = N(d),
                    c = N(P(d)),
                    d = P(P(d));
            else
                return a
    }
        ;
    V.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        var d = P(c);
        c = N(d);
        d = P(d);
        return this.l(b, a, c, d)
    }
        ;
    V.G = 3;
    var Dd = function Dd(a) {
        switch (arguments.length) {
            case 1:
                return Dd.ic(arguments[0]);
            case 2:
                return Dd.fc(arguments[0], arguments[1]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return Dd.l(arguments[0], arguments[1], new Qc(c.slice(2), 0, null))
        }
    };
    Dd.ic = function (a) {
        return a
    }
        ;
    Dd.fc = function (a, b) {
        return null == a ? null : Ib(a, b)
    }
        ;
    Dd.l = function (a, b, c) {
        for (; ;) {
            if (null == a)
                return null;
            a = Dd.fc(a, b);
            if (w(c))
                b = N(c),
                    c = P(c);
            else
                return a
        }
    }
        ;
    Dd.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        c = P(c);
        return this.l(b, a, c)
    }
        ;
    Dd.G = 2;
    function Ed(a) {
        var b = "function" === typeof a;
        return b ? b : null != a ? t === a.Mb ? !0 : a.Db ? !1 : x(nb, a) : x(nb, a)
    }
    function Fd(a, b) {
        this.h = a;
        this.m = b;
        this.g = 393217;
        this.v = 0
    }
    g = Fd.prototype;
    g.U = function () {
        return this.m
    }
        ;
    g.V = function (a, b) {
        return new Fd(this.h, b)
    }
        ;
    g.Mb = t;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 0:
                return this.s();
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            case 3:
                return this.Ac(arguments[1], arguments[2], arguments[3]);
            case 4:
                return this.o(arguments[1], arguments[2], arguments[3], arguments[4]);
            case 5:
                return this.R(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            case 6:
                return this.ma(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
            case 7:
                return this.Ia(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
            case 8:
                return this.Ja(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
            case 9:
                return this.Ka(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
            case 10:
                return this.xa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
            case 11:
                return this.ya(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
            case 12:
                return this.za(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
            case 13:
                return this.Aa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
            case 14:
                return this.Ba(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
            case 15:
                return this.Ca(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
            case 16:
                return this.Da(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16]);
            case 17:
                return this.Ea(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
            case 18:
                return this.Fa(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18]);
            case 19:
                return this.Ga(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
            case 20:
                return this.Ha(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20]);
            case 21:
                var b = arguments[1]
                    , c = arguments[2]
                    , d = arguments[3]
                    , e = arguments[4]
                    , f = arguments[5]
                    , h = arguments[6]
                    , k = arguments[7]
                    , l = arguments[8]
                    , m = arguments[9]
                    , n = arguments[10]
                    , p = arguments[11]
                    , r = arguments[12]
                    , y = arguments[13]
                    , B = arguments[14]
                    , A = arguments[15]
                    , M = arguments[16]
                    , S = arguments[17]
                    , W = arguments[18]
                    , ra = arguments[19]
                    , Da = arguments[20]
                    , ea = arguments[21];
                return Gd.Fb ? Gd.Fb(this.h, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da, ea) : Gd.call(null, this.h, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da, ea);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.s = function () {
        return this.h.s ? this.h.s() : this.h.call(null)
    }
        ;
    g.ic = function (a) {
        return this.h.ic ? this.h.ic(a) : this.h.call(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.h.fc ? this.h.fc(a, b) : this.h.call(null, a, b)
    }
        ;
    g.Ac = function (a, b, c) {
        return this.h.Ac ? this.h.Ac(a, b, c) : this.h.call(null, a, b, c)
    }
        ;
    g.o = function (a, b, c, d) {
        return this.h.o ? this.h.o(a, b, c, d) : this.h.call(null, a, b, c, d)
    }
        ;
    g.R = function (a, b, c, d, e) {
        return this.h.R ? this.h.R(a, b, c, d, e) : this.h.call(null, a, b, c, d, e)
    }
        ;
    g.ma = function (a, b, c, d, e, f) {
        return this.h.ma ? this.h.ma(a, b, c, d, e, f) : this.h.call(null, a, b, c, d, e, f)
    }
        ;
    g.Ia = function (a, b, c, d, e, f, h) {
        return this.h.Ia ? this.h.Ia(a, b, c, d, e, f, h) : this.h.call(null, a, b, c, d, e, f, h)
    }
        ;
    g.Ja = function (a, b, c, d, e, f, h, k) {
        return this.h.Ja ? this.h.Ja(a, b, c, d, e, f, h, k) : this.h.call(null, a, b, c, d, e, f, h, k)
    }
        ;
    g.Ka = function (a, b, c, d, e, f, h, k, l) {
        return this.h.Ka ? this.h.Ka(a, b, c, d, e, f, h, k, l) : this.h.call(null, a, b, c, d, e, f, h, k, l)
    }
        ;
    g.xa = function (a, b, c, d, e, f, h, k, l, m) {
        return this.h.xa ? this.h.xa(a, b, c, d, e, f, h, k, l, m) : this.h.call(null, a, b, c, d, e, f, h, k, l, m)
    }
        ;
    g.ya = function (a, b, c, d, e, f, h, k, l, m, n) {
        return this.h.ya ? this.h.ya(a, b, c, d, e, f, h, k, l, m, n) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n)
    }
        ;
    g.za = function (a, b, c, d, e, f, h, k, l, m, n, p) {
        return this.h.za ? this.h.za(a, b, c, d, e, f, h, k, l, m, n, p) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p)
    }
        ;
    g.Aa = function (a, b, c, d, e, f, h, k, l, m, n, p, r) {
        return this.h.Aa ? this.h.Aa(a, b, c, d, e, f, h, k, l, m, n, p, r) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r)
    }
        ;
    g.Ba = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y) {
        return this.h.Ba ? this.h.Ba(a, b, c, d, e, f, h, k, l, m, n, p, r, y) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y)
    }
        ;
    g.Ca = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B) {
        return this.h.Ca ? this.h.Ca(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B)
    }
        ;
    g.Da = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A) {
        return this.h.Da ? this.h.Da(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A)
    }
        ;
    g.Ea = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M) {
        return this.h.Ea ? this.h.Ea(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M)
    }
        ;
    g.Fa = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S) {
        return this.h.Fa ? this.h.Fa(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S)
    }
        ;
    g.Ga = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W) {
        return this.h.Ga ? this.h.Ga(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W)
    }
        ;
    g.Ha = function (a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra) {
        return this.h.Ha ? this.h.Ha(a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra) : this.h.call(null, a, b, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra)
    }
        ;
    function Hd(a, b) {
        return "function" === typeof a ? new Fd(a, b) : null == a ? null : Rb(a, b)
    }
    function Id(a) {
        var b = null != a;
        return (b ? null != a ? a.g & 131072 || t === a.Wb || (a.g ? 0 : x(Pb, a)) : x(Pb, a) : b) ? Qb(a) : null
    }
    function Jd(a) {
        return null == a ? !1 : null != a ? a.g & 8 || t === a.nc ? !0 : a.g ? !1 : x(sb, a) : x(sb, a)
    }
    function Kd(a) {
        return null == a ? !1 : null != a ? a.g & 4096 || t === a.xc ? !0 : a.g ? !1 : x(Lb, a) : x(Lb, a)
    }
    function Ld(a) {
        return null != a ? a.g & 16777216 || t === a.Hb ? !0 : a.g ? !1 : x(ac, a) : x(ac, a)
    }
    function Md(a) {
        return null == a ? !1 : null != a ? a.g & 1024 || t === a.tc ? !0 : a.g ? !1 : x(Hb, a) : x(Hb, a)
    }
    function Nd(a) {
        return null != a ? a.g & 67108864 || t === a.vc ? !0 : a.g ? !1 : x(dc, a) : x(dc, a)
    }
    function Od(a) {
        return null != a ? a.g & 16384 || t === a.yc ? !0 : a.g ? !1 : x(Ob, a) : x(Ob, a)
    }
    function Pd(a) {
        return null != a ? a.v & 512 || t === a.mc ? !0 : !1 : !1
    }
    function Qd(a, b, c, d, e) {
        for (; ;) {
            if (0 === e)
                return c;
            c[d] = a[b];
            d += 1;
            --e;
            b += 1
        }
    }
    var Rd = {};
    function Sd(a) {
        return !1 === a
    }
    function ji(a) {
        return !0 === a || !1 === a
    }
    function Ud(a) {
        return null == a ? !1 : !1 === a ? !1 : !0
    }
    function Vd(a) {
        return "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)
    }
    function Wd(a, b) {
        return null != a && (a.g & 512 || t === a.lc) ? a.Bc(null, b) : x(sa, a) ? ta(a, b) : D.Ac(a, b, Rd) === Rd ? !1 : !0
    }
    function Xd(a, b) {
        if (a === b)
            return 0;
        if (null == a)
            return -1;
        if (null == b)
            return 1;
        if ("number" === typeof a) {
            if ("number" === typeof b)
                return ia(a, b);
            throw Error(["Cannot compare ", z.ic(a), " to ", z.ic(b)].join(""));
        }
        if (null != a ? a.v & 2048 || t === a.bb || (a.v ? 0 : x(qc, a)) : x(qc, a))
            return rc(a, b);
        if ("string" !== typeof a && !ab(a) && !0 !== a && !1 !== a || db(a) !== db(b))
            throw Error(["Cannot compare ", z.ic(a), " to ", z.ic(b)].join(""));
        return ia(a, b)
    }
    function Yd(a, b) {
        var c = U(a)
            , d = U(b);
        if (c < d)
            a = -1;
        else if (c > d)
            a = 1;
        else if (0 === c)
            a = 0;
        else
            a: for (d = 0; ;) {
                var e = Xd(jd(a, d), jd(b, d));
                if (0 === e && d + 1 < c)
                    d += 1;
                else {
                    a = e;
                    break a
                }
            }
        return a
    }
    function Zd(a) {
        return R.fc(a, Xd) ? Xd : function (b, c) {
            var d = a.fc ? a.fc(b, c) : a.call(null, b, c);
            return "number" === typeof d ? d : w(d) ? -1 : w(a.fc ? a.fc(c, b) : a.call(null, c, b)) ? 1 : 0
        }
    }
    function $d(a, b) {
        if (J(b)) {
            var c = ae.ic ? ae.ic(b) : ae.call(null, b);
            ja(c, Zd(a));
            return Hd(J(c), Id(b))
        }
        return Tc
    }
    function be(a) {
        var b = ce;
        return $d(function (c, d) {
            c = b.ic ? b.ic(c) : b.call(null, c);
            d = b.ic ? b.ic(d) : b.call(null, d);
            var e = Zd(Xd);
            return e.fc ? e.fc(c, d) : e.call(null, c, d)
        }, a)
    }
    function td(a) {
        switch (arguments.length) {
            case 2:
                return sd(arguments[0], arguments[1]);
            case 3:
                return ud(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function sd(a, b) {
        var c = J(b);
        return c ? (b = N(c),
            c = P(c),
            kb ? kb(a, b, c) : lb.call(null, a, b, c)) : a.s ? a.s() : a.call(null)
    }
    function ud(a, b, c) {
        for (c = J(c); ;)
            if (c) {
                var d = N(c);
                b = a.fc ? a.fc(b, d) : a.call(null, b, d);
                if (bd(b))
                    return C(b);
                c = P(c)
            } else
                return b
    }
    function de(a, b) {
        a = zc(a);
        if (w(a.ha()))
            for (var c = a.next(); ;)
                if (a.ha()) {
                    var d = a.next();
                    c = b.fc ? b.fc(c, d) : b.call(null, c, d);
                    if (bd(c))
                        return C(c)
                } else
                    return c;
        else
            return b.s ? b.s() : b.call(null)
    }
    function ee(a, b, c) {
        for (a = zc(a); ;)
            if (a.ha()) {
                var d = a.next();
                c = b.fc ? b.fc(c, d) : b.call(null, c, d);
                if (bd(c))
                    return C(c)
            } else
                return c
    }
    function lb(a) {
        switch (arguments.length) {
            case 2:
                return fe(arguments[0], arguments[1]);
            case 3:
                return kb(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function fe(a, b) {
        return null != b && (b.g & 524288 || t === b.Yb) ? b.ea(null, a) : ab(b) ? ed(b, a) : "string" === typeof b ? ed(b, a) : x(Sb, b) ? Tb(b, a) : Pc(b) ? de(b, a) : sd(a, b)
    }
    function kb(a, b, c) {
        return null != c && (c.g & 524288 || t === c.Yb) ? c.fa(null, a, b) : ab(c) ? fd(c, a, b) : "string" === typeof c ? fd(c, a, b) : x(Sb, c) ? Tb(c, a, b) : Pc(c) ? ee(c, a, b) : ud(a, b, c)
    }
    function ge(a, b) {
        return null != b ? Wb(b, a) : !0
    }
    function he(a) {
        return a
    }
    function ie(a, b, c, d) {
        a = a.ic ? a.ic(b) : a.call(null, b);
        c = kb(a, c, d);
        return a.ic ? a.ic(c) : a.call(null, c)
    }
    function je(a) {
        a = (a - a % 2) / 2;
        return 0 <= a ? Math.floor(a) : Math.ceil(a)
    }
    function ke(a) {
        a -= a >> 1 & 1431655765;
        a = (a & 858993459) + (a >> 2 & 858993459);
        return 16843009 * (a + (a >> 4) & 252645135) >> 24
    }
    var z = function z(a) {
        switch (arguments.length) {
            case 0:
                return z.s();
            case 1:
                return z.ic(arguments[0]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return z.l(arguments[0], new Qc(c.slice(1), 0, null))
        }
    };
    z.s = function () {
        return ""
    }
        ;
    z.ic = function (a) {
        return null == a ? "" : [a].join("")
    }
        ;
    z.l = function (a, b) {
        for (a = new Oa(z.ic(a)); ;)
            if (w(b))
                a = a.append(z.ic(N(b))),
                    b = P(b);
            else
                return a.toString()
    }
        ;
    z.F = function (a) {
        var b = N(a);
        a = P(a);
        return this.l(b, a)
    }
        ;
    z.G = 1;
    function pd(a, b) {
        if (Ld(b))
            if (hd(a) && hd(b) && U(a) !== U(b))
                a = !1;
            else
                a: for (a = J(a),
                    b = J(b); ;) {
                    if (null == a) {
                        a = null == b;
                        break a
                    }
                    if (null != b && R.fc(N(a), N(b)))
                        a = P(a),
                            b = P(b);
                    else {
                        a = !1;
                        break a
                    }
                }
        else
            a = null;
        return Ud(a)
    }
    function yd(a, b, c, d, e) {
        this.m = a;
        this.first = b;
        this.Ma = c;
        this.count = d;
        this.u = e;
        this.g = 65937646;
        this.v = 8192
    }
    g = yd.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, this.count)
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return 1 === this.count ? null : this.Ma
    }
        ;
    g.K = function () {
        return this.count
    }
        ;
    g.fb = function () {
        return this.first
    }
        ;
    g.gb = function () {
        return this.ga(null)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Rb(Tc, this.m)
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return this.first
    }
        ;
    g.ga = function () {
        return 1 === this.count ? Tc : this.Ma
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new yd(b, this.first, this.Ma, this.count, this.u)
    }
        ;
    g.Y = function (a, b) {
        return new yd(this.m, b, this, this.count + 1, null)
    }
        ;
    yd.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function le(a) {
        this.m = a;
        this.g = 65937614;
        this.v = 8192
    }
    g = le.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return null
    }
        ;
    g.K = function () {
        return 0
    }
        ;
    g.fb = function () {
        return null
    }
        ;
    g.gb = function () {
        throw Error("Can't pop empty list");
    }
        ;
    g.T = function () {
        return Yc
    }
        ;
    g.P = function (a, b) {
        return (null != b ? b.g & 33554432 || t === b.sc || (b.g ? 0 : x(cc, b)) : x(cc, b)) || Ld(b) ? null == J(b) : !1
    }
        ;
    g.W = function () {
        return this
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return null
    }
        ;
    g.ga = function () {
        return Tc
    }
        ;
    g.N = function () {
        return null
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new le(b)
    }
        ;
    g.Y = function (a, b) {
        return new yd(this.m, b, null, 1, null)
    }
        ;
    var Tc = new le(null);
    le.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function me(a) {
        return (null != a ? a.g & 134217728 || t === a.wc || (a.g ? 0 : x(ec, a)) : x(ec, a)) ? (a = fc(a)) ? a : Tc : kb(wd, Tc, a)
    }
    function ne(a, b, c, d) {
        this.m = a;
        this.first = b;
        this.Ma = c;
        this.u = d;
        this.g = 65929452;
        this.v = 8192
    }
    g = ne.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return null == this.Ma ? null : J(this.Ma)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return this.first
    }
        ;
    g.ga = function () {
        return null == this.Ma ? Tc : this.Ma
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new ne(b, this.first, this.Ma, this.u)
    }
        ;
    g.Y = function (a, b) {
        return new ne(null, b, this, null)
    }
        ;
    ne.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function qd(a, b) {
        return null == b ? new yd(null, a, null, 1, null) : null != b && (b.g & 64 || t === b.A) ? new ne(null, a, b, null) : new ne(null, a, J(b), null)
    }
    function oe(a, b) {
        if (a.pa === b.pa)
            return 0;
        var c = bb(a.la);
        if (w(c ? b.la : c))
            return -1;
        if (w(a.la)) {
            if (bb(b.la))
                return 1;
            c = ia(a.la, b.la);
            return 0 === c ? ia(a.name, b.name) : c
        }
        return ia(a.name, b.name)
    }
    function F(a, b, c, d) {
        this.la = a;
        this.name = b;
        this.pa = c;
        this.Ua = d;
        this.g = 2153775105;
        this.v = 4096
    }
    g = F.prototype;
    g.toString = function () {
        return [":", z.ic(this.pa)].join("")
    }
        ;
    g.P = function (a, b) {
        return b instanceof F ? this.pa === b.pa : !1
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return D.fc(a, this)
    }
        ;
    g.fc = function (a, b) {
        return D.Ac(a, this, b)
    }
        ;
    g.T = function () {
        var a = this.Ua;
        return null != a ? a : this.Ua = a = Lc(Gc(this.name), Jc(this.la)) + 2654435769 | 0
    }
        ;
    g.S = function (a, b) {
        return gc(b, [":", z.ic(this.pa)].join(""))
    }
        ;
    function pe(a) {
        if (null != a && (a.v & 4096 || t === a.Xb))
            return a.la;
        throw Error(["Doesn't support namespace: ", z.ic(a)].join(""));
    }
    var qe = function qe(a) {
        switch (arguments.length) {
            case 1:
                return qe.ic(arguments[0]);
            case 2:
                return qe.fc(arguments[0], arguments[1]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    };
    qe.ic = function (a) {
        if (a instanceof F)
            return a;
        if (a instanceof Nc)
            return new F(pe(a), re.ic ? re.ic(a) : re.call(null, a), a.wa, null);
        if (R.fc("/", a))
            return new F(null, a, a, null);
        if ("string" === typeof a) {
            var b = a.split("/");
            return 2 === b.length ? new F(b[0], b[1], a, null) : new F(null, b[0], a, null)
        }
        return null
    }
        ;
    qe.fc = function (a, b) {
        a = a instanceof F ? re.ic ? re.ic(a) : re.call(null, a) : a instanceof Nc ? re.ic ? re.ic(a) : re.call(null, a) : a;
        b = b instanceof F ? re.ic ? re.ic(b) : re.call(null, b) : b instanceof Nc ? re.ic ? re.ic(b) : re.call(null, b) : b;
        return new F(a, b, [w(a) ? [z.ic(a), "/"].join("") : null, z.ic(b)].join(""), null)
    }
        ;
    qe.G = 2;
    function se(a, b, c) {
        this.m = a;
        this.ib = b;
        this.D = null;
        this.u = c;
        this.g = 32374988;
        this.v = 1
    }
    g = se.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    function te(a) {
        null != a.ib && (a.D = a.ib.s ? a.ib.s() : a.ib.call(null),
            a.ib = null);
        return a.D
    }
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        this.N(null);
        return null == this.D ? null : P(this.D)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Rb(Tc, this.m)
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        this.N(null);
        return null == this.D ? null : N(this.D)
    }
        ;
    g.ga = function () {
        this.N(null);
        return null != this.D ? Sc(this.D) : Tc
    }
        ;
    g.N = function () {
        te(this);
        if (null == this.D)
            return null;
        for (var a = this.D; ;)
            if (a instanceof se)
                a = te(a);
            else
                return this.D = a,
                    J(this.D)
    }
        ;
    g.V = function (a, b) {
        var c = this;
        return b === this.m ? c : new se(b, function () {
            return c.N(null)
        }
            , this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    se.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function ue(a) {
        this.xb = a;
        this.end = 0;
        this.g = 2;
        this.v = 0
    }
    ue.prototype.add = function (a) {
        this.xb[this.end] = a;
        return this.end += 1
    }
        ;
    ue.prototype.X = function () {
        var a = new ve(this.xb, 0, this.end);
        this.xb = null;
        return a
    }
        ;
    ue.prototype.K = function () {
        return this.end
    }
        ;
    function we(a) {
        return new ue(Array(a))
    }
    function ve(a, b, c) {
        this.zc = a;
        this.ca = b;
        this.end = c;
        this.g = 524306;
        this.v = 0
    }
    g = ve.prototype;
    g.K = function () {
        return this.end - this.ca
    }
        ;
    g.C = function (a, b) {
        return this.zc[this.ca + b]
    }
        ;
    g.da = function (a, b, c) {
        return 0 <= b && b < this.end - this.ca ? this.zc[this.ca + b] : c
    }
        ;
    g.yb = function () {
        if (this.ca === this.end)
            throw Error("-drop-first of empty chunk");
        return new ve(this.zc, this.ca + 1, this.end)
    }
        ;
    g.ea = function (a, b) {
        return gd(this.zc, b, this.zc[this.ca], this.ca + 1)
    }
        ;
    g.fa = function (a, b, c) {
        return gd(this.zc, b, c, this.ca)
    }
        ;
    function xe(a, b, c, d) {
        this.X = a;
        this.sa = b;
        this.m = c;
        this.u = d;
        this.g = 31850732;
        this.v = 1536
    }
    g = xe.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return 1 < pb(this.X) ? new xe(sc(this.X), this.sa, null, null) : null == this.sa ? null : $b(this.sa)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ba = function () {
        return vb(this.X, 0)
    }
        ;
    g.ga = function () {
        return 1 < pb(this.X) ? new xe(sc(this.X), this.sa, null, null) : null == this.sa ? Tc : this.sa
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.qb = function () {
        return this.X
    }
        ;
    g.Va = function () {
        return null == this.sa ? Tc : this.sa
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new xe(this.X, this.sa, b, this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    g.zb = function () {
        return null == this.sa ? null : this.sa
    }
        ;
    xe.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function ye(a, b) {
        return 0 === pb(a) ? b : new xe(a, b, null, null)
    }
    function ze(a, b) {
        a.add(b)
    }
    function ae(a) {
        var b = [];
        for (a = J(a); ;)
            if (null != a)
                b.push(N(a)),
                    a = P(a);
            else
                return b
    }
    function Ae(a, b) {
        if (hd(b))
            return U(b);
        var c = 0;
        for (b = J(b); ;)
            if (null != b && c < a)
                c += 1,
                    b = P(b);
            else
                return c
    }
    var Be = function Be(a) {
        if (null == a)
            return null;
        var c = P(a);
        return null == c ? J(N(a)) : qd(N(a), Be.ic ? Be.ic(c) : Be.call(null, c))
    }
        , Ce = function Ce(a) {
            switch (arguments.length) {
                case 0:
                    return Ce.s();
                case 1:
                    return Ce.ic(arguments[0]);
                case 2:
                    return Ce.fc(arguments[0], arguments[1]);
                default:
                    for (var c = [], d = arguments.length, e = 0; ;)
                        if (e < d)
                            c.push(arguments[e]),
                                e += 1;
                        else
                            break;
                    return Ce.l(arguments[0], arguments[1], new Qc(c.slice(2), 0, null))
            }
        };
    Ce.s = function () {
        return new se(null, function () {
            return null
        }
            , null)
    }
        ;
    Ce.ic = function (a) {
        return new se(null, function () {
            return a
        }
            , null)
    }
        ;
    Ce.fc = function (a, b) {
        return new se(null, function () {
            var c = J(a);
            return c ? Pd(c) ? ye(tc(c), Ce.fc(uc(c), b)) : qd(N(c), Ce.fc(Sc(c), b)) : b
        }
            , null)
    }
        ;
    Ce.l = function (a, b, c) {
        return function h(e, f) {
            return new se(null, function () {
                var k = J(e);
                return k ? Pd(k) ? ye(tc(k), h(uc(k), f)) : qd(N(k), h(Sc(k), f)) : w(f) ? h(N(f), P(f)) : null
            }
                , null)
        }(Ce.fc(a, b), c)
    }
        ;
    Ce.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        c = P(c);
        return this.l(b, a, c)
    }
        ;
    Ce.G = 2;
    function Ge(a, b, c) {
        var d = J(c);
        if (0 === b)
            return a.s ? a.s() : a.call(null);
        c = yb(d);
        var e = zb(d);
        if (1 === b)
            return a.ic ? a.ic(c) : a.call(null, c);
        d = yb(e);
        var f = zb(e);
        if (2 === b)
            return a.fc ? a.fc(c, d) : a.call(null, c, d);
        e = yb(f);
        var h = zb(f);
        if (3 === b)
            return a.Ac ? a.Ac(c, d, e) : a.call(null, c, d, e);
        f = yb(h);
        var k = zb(h);
        if (4 === b)
            return a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
        h = yb(k);
        var l = zb(k);
        if (5 === b)
            return a.R ? a.R(c, d, e, f, h) : a.call(null, c, d, e, f, h);
        k = yb(l);
        var m = zb(l);
        if (6 === b)
            return a.ma ? a.ma(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
        l = yb(m);
        var n = zb(m);
        if (7 === b)
            return a.Ia ? a.Ia(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
        m = yb(n);
        var p = zb(n);
        if (8 === b)
            return a.Ja ? a.Ja(c, d, e, f, h, k, l, m) : a.call(null, c, d, e, f, h, k, l, m);
        n = yb(p);
        var r = zb(p);
        if (9 === b)
            return a.Ka ? a.Ka(c, d, e, f, h, k, l, m, n) : a.call(null, c, d, e, f, h, k, l, m, n);
        p = yb(r);
        var y = zb(r);
        if (10 === b)
            return a.xa ? a.xa(c, d, e, f, h, k, l, m, n, p) : a.call(null, c, d, e, f, h, k, l, m, n, p);
        r = yb(y);
        var B = zb(y);
        if (11 === b)
            return a.ya ? a.ya(c, d, e, f, h, k, l, m, n, p, r) : a.call(null, c, d, e, f, h, k, l, m, n, p, r);
        y = yb(B);
        var A = zb(B);
        if (12 === b)
            return a.za ? a.za(c, d, e, f, h, k, l, m, n, p, r, y) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y);
        B = yb(A);
        var M = zb(A);
        if (13 === b)
            return a.Aa ? a.Aa(c, d, e, f, h, k, l, m, n, p, r, y, B) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B);
        A = yb(M);
        var S = zb(M);
        if (14 === b)
            return a.Ba ? a.Ba(c, d, e, f, h, k, l, m, n, p, r, y, B, A) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A);
        M = yb(S);
        var W = zb(S);
        if (15 === b)
            return a.Ca ? a.Ca(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M);
        S = yb(W);
        var ra = zb(W);
        if (16 === b)
            return a.Da ? a.Da(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S);
        W = yb(ra);
        var Da = zb(ra);
        if (17 === b)
            return a.Ea ? a.Ea(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W);
        ra = yb(Da);
        var ea = zb(Da);
        if (18 === b)
            return a.Fa ? a.Fa(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra);
        Da = yb(ea);
        ea = zb(ea);
        if (19 === b)
            return a.Ga ? a.Ga(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da);
        var v = yb(ea);
        zb(ea);
        if (20 === b)
            return a.Ha ? a.Ha(c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da, v) : a.call(null, c, d, e, f, h, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da, v);
        throw Error("Only up to 20 arguments supported on functions");
    }
    function He(a) {
        return null != a && (a.g & 128 || t === a.eb) ? a.aa() : J(Sc(a))
    }
    function Ie(a, b, c) {
        return null == c ? a.ic ? a.ic(b) : a.call(a, b) : Je(a, b, yb(c), He(c))
    }
    function Je(a, b, c, d) {
        return null == d ? a.fc ? a.fc(b, c) : a.call(a, b, c) : Ke(a, b, c, yb(d), He(d))
    }
    function Ke(a, b, c, d, e) {
        return null == e ? a.Ac ? a.Ac(b, c, d) : a.call(a, b, c, d) : Le(a, b, c, d, yb(e), He(e))
    }
    function Le(a, b, c, d, e, f) {
        if (null == f)
            return a.o ? a.o(b, c, d, e) : a.call(a, b, c, d, e);
        var h = yb(f)
            , k = P(f);
        if (null == k)
            return a.R ? a.R(b, c, d, e, h) : a.call(a, b, c, d, e, h);
        f = yb(k);
        var l = P(k);
        if (null == l)
            return a.ma ? a.ma(b, c, d, e, h, f) : a.call(a, b, c, d, e, h, f);
        k = yb(l);
        var m = P(l);
        if (null == m)
            return a.Ia ? a.Ia(b, c, d, e, h, f, k) : a.call(a, b, c, d, e, h, f, k);
        l = yb(m);
        var n = P(m);
        if (null == n)
            return a.Ja ? a.Ja(b, c, d, e, h, f, k, l) : a.call(a, b, c, d, e, h, f, k, l);
        m = yb(n);
        var p = P(n);
        if (null == p)
            return a.Ka ? a.Ka(b, c, d, e, h, f, k, l, m) : a.call(a, b, c, d, e, h, f, k, l, m);
        n = yb(p);
        var r = P(p);
        if (null == r)
            return a.xa ? a.xa(b, c, d, e, h, f, k, l, m, n) : a.call(a, b, c, d, e, h, f, k, l, m, n);
        p = yb(r);
        var y = P(r);
        if (null == y)
            return a.ya ? a.ya(b, c, d, e, h, f, k, l, m, n, p) : a.call(a, b, c, d, e, h, f, k, l, m, n, p);
        r = yb(y);
        var B = P(y);
        if (null == B)
            return a.za ? a.za(b, c, d, e, h, f, k, l, m, n, p, r) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r);
        y = yb(B);
        var A = P(B);
        if (null == A)
            return a.Aa ? a.Aa(b, c, d, e, h, f, k, l, m, n, p, r, y) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y);
        B = yb(A);
        var M = P(A);
        if (null == M)
            return a.Ba ? a.Ba(b, c, d, e, h, f, k, l, m, n, p, r, y, B) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B);
        A = yb(M);
        var S = P(M);
        if (null == S)
            return a.Ca ? a.Ca(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A);
        M = yb(S);
        var W = P(S);
        if (null == W)
            return a.Da ? a.Da(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M);
        S = yb(W);
        var ra = P(W);
        if (null == ra)
            return a.Ea ? a.Ea(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S);
        W = yb(ra);
        var Da = P(ra);
        if (null == Da)
            return a.Fa ? a.Fa(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W);
        ra = yb(Da);
        var ea = P(Da);
        if (null == ea)
            return a.Ga ? a.Ga(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W, ra) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W, ra);
        Da = yb(ea);
        ea = P(ea);
        if (null == ea)
            return a.Ha ? a.Ha(b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da) : a.call(a, b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da);
        b = [b, c, d, e, h, f, k, l, m, n, p, r, y, B, A, M, S, W, ra, Da];
        for (c = ea; ;)
            if (c)
                b.push(yb(c)),
                    c = P(c);
            else
                break;
        return a.apply(a, b)
    }
    function Gd(a) {
        switch (arguments.length) {
            case 2:
                return Me(arguments[0], arguments[1]);
            case 3:
                return Ne(arguments[0], arguments[1], arguments[2]);
            case 4:
                return Oe(arguments[0], arguments[1], arguments[2], arguments[3]);
            case 5:
                return Pe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
            default:
                for (var b = [], c = arguments.length, d = 0; ;)
                    if (d < c)
                        b.push(arguments[d]),
                            d += 1;
                    else
                        break;
                return Qe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new Qc(b.slice(5), 0, null))
        }
    }
    function Me(a, b) {
        if (a.F) {
            var c = a.G
                , d = Ae(c + 1, b);
            return d <= c ? Ge(a, d, b) : a.F(b)
        }
        b = J(b);
        return null == b ? a.s ? a.s() : a.call(a) : Ie(a, yb(b), He(b))
    }
    function Ne(a, b, c) {
        if (a.F) {
            b = qd(b, c);
            var d = a.G;
            c = Ae(d, c) + 1;
            return c <= d ? Ge(a, c, b) : a.F(b)
        }
        return Ie(a, b, J(c))
    }
    function Oe(a, b, c, d) {
        return a.F ? (b = qd(b, qd(c, d)),
            c = a.G,
            d = 2 + Ae(c - 1, d),
            d <= c ? Ge(a, d, b) : a.F(b)) : Je(a, b, c, J(d))
    }
    function Pe(a, b, c, d, e) {
        return a.F ? (b = qd(b, qd(c, qd(d, e))),
            c = a.G,
            e = 3 + Ae(c - 2, e),
            e <= c ? Ge(a, e, b) : a.F(b)) : Ke(a, b, c, d, J(e))
    }
    function Qe(a, b, c, d, e, f) {
        return a.F ? (f = Be(f),
            b = qd(b, qd(c, qd(d, qd(e, f)))),
            c = a.G,
            f = 4 + Ae(c - 3, f),
            f <= c ? Ge(a, f, b) : a.F(b)) : Le(a, b, c, d, e, Be(f))
    }
    function X(a) {
        return null != a && (a.g & 64 || t === a.A) ? P(a) ? Cd(ae(a)) : J(a) ? N(a) : Te : a
    }
    function Re(a, b) {
        return !R.fc(a, b)
    }
    function Se() {
        if ("undefined" === typeof Pa || "undefined" === typeof Ra || "undefined" === typeof oa)
            oa = function (a) {
                this.Dc = a;
                this.g = 393216;
                this.v = 0
            }
                ,
                oa.prototype.V = function (a, b) {
                    return new oa(b)
                }
                ,
                oa.prototype.U = function () {
                    return this.Dc
                }
                ,
                oa.prototype.ha = function () {
                    return !1
                }
                ,
                oa.prototype.next = function () {
                    return Error("No such element")
                }
                ,
                oa.prototype.remove = function () {
                    return Error("Unsupported operation")
                }
                ,
                oa.Kb = !0,
                oa.tb = "cljs.core/t_cljs$core10220",
                oa.ec = function (a) {
                    return gc(a, "cljs.core/t_cljs$core10220")
                }
                ;
        return new oa(Te)
    }
    function Ue(a, b) {
        for (; ;) {
            if (null == J(b))
                return !0;
            var c = N(b);
            c = a.ic ? a.ic(c) : a.call(null, c);
            if (w(c))
                b = P(b);
            else
                return !1
        }
    }
    function Ve(a, b) {
        for (; ;)
            if (b = J(b)) {
                var c = N(b);
                c = a.ic ? a.ic(c) : a.call(null, c);
                if (w(c))
                    return c;
                b = P(b)
            } else
                return null
    }
    function We(a) {
        return function () {
            function b(h, k) {
                return bb(a.fc ? a.fc(h, k) : a.call(null, h, k))
            }
            function c(h) {
                return bb(a.ic ? a.ic(h) : a.call(null, h))
            }
            function d() {
                return bb(a.s ? a.s() : a.call(null))
            }
            var e = null
                , f = function () {
                    function h(l, m, n) {
                        var p = null;
                        if (2 < arguments.length) {
                            p = 0;
                            for (var r = Array(arguments.length - 2); p < r.length;)
                                r[p] = arguments[p + 2],
                                    ++p;
                            p = new Qc(r, 0, null)
                        }
                        return k.call(this, l, m, p)
                    }
                    function k(l, m, n) {
                        return bb(Oe(a, l, m, n))
                    }
                    h.G = 2;
                    h.F = function (l) {
                        var m = N(l);
                        l = P(l);
                        var n = N(l);
                        l = Sc(l);
                        return k(m, n, l)
                    }
                        ;
                    h.l = k;
                    return h
                }();
            e = function (h, k, l) {
                switch (arguments.length) {
                    case 0:
                        return d.call(this);
                    case 1:
                        return c.call(this, h);
                    case 2:
                        return b.call(this, h, k);
                    default:
                        var m = null;
                        if (2 < arguments.length) {
                            m = 0;
                            for (var n = Array(arguments.length - 2); m < n.length;)
                                n[m] = arguments[m + 2],
                                    ++m;
                            m = new Qc(n, 0, null)
                        }
                        return f.l(h, k, m)
                }
                throw Error("Invalid arity: " + arguments.length);
            }
                ;
            e.G = 2;
            e.F = f.F;
            e.s = d;
            e.ic = c;
            e.fc = b;
            e.l = f.l;
            return e
        }()
    }
    function Xe(a, b) {
        return function () {
            function c(l, m, n) {
                return a.o ? a.o(b, l, m, n) : a.call(null, b, l, m, n)
            }
            function d(l, m) {
                return a.Ac ? a.Ac(b, l, m) : a.call(null, b, l, m)
            }
            function e(l) {
                return a.fc ? a.fc(b, l) : a.call(null, b, l)
            }
            function f() {
                return a.ic ? a.ic(b) : a.call(null, b)
            }
            var h = null
                , k = function () {
                    function l(n, p, r, y) {
                        var B = null;
                        if (3 < arguments.length) {
                            B = 0;
                            for (var A = Array(arguments.length - 3); B < A.length;)
                                A[B] = arguments[B + 3],
                                    ++B;
                            B = new Qc(A, 0, null)
                        }
                        return m.call(this, n, p, r, B)
                    }
                    function m(n, p, r, y) {
                        return Qe(a, b, n, p, r, rd([y]))
                    }
                    l.G = 3;
                    l.F = function (n) {
                        var p = N(n);
                        n = P(n);
                        var r = N(n);
                        n = P(n);
                        var y = N(n);
                        n = Sc(n);
                        return m(p, r, y, n)
                    }
                        ;
                    l.l = m;
                    return l
                }();
            h = function (l, m, n, p) {
                switch (arguments.length) {
                    case 0:
                        return f.call(this);
                    case 1:
                        return e.call(this, l);
                    case 2:
                        return d.call(this, l, m);
                    case 3:
                        return c.call(this, l, m, n);
                    default:
                        var r = null;
                        if (3 < arguments.length) {
                            r = 0;
                            for (var y = Array(arguments.length - 3); r < y.length;)
                                y[r] = arguments[r + 3],
                                    ++r;
                            r = new Qc(y, 0, null)
                        }
                        return k.l(l, m, n, r)
                }
                throw Error("Invalid arity: " + arguments.length);
            }
                ;
            h.G = 3;
            h.F = k.F;
            h.s = f;
            h.ic = e;
            h.fc = d;
            h.Ac = c;
            h.l = k.l;
            return h
        }()
    }
    function Ye(a) {
        var b = Ze;
        return function () {
            function c(l, m, n) {
                return b.R ? b.R(a, null, l, m, n) : b.call(null, a, null, l, m, n)
            }
            function d(l, m) {
                return b.o ? b.o(a, null, l, m) : b.call(null, a, null, l, m)
            }
            function e(l) {
                return b.Ac ? b.Ac(a, null, l) : b.call(null, a, null, l)
            }
            function f() {
                return b.fc ? b.fc(a, null) : b.call(null, a, null)
            }
            var h = null
                , k = function () {
                    function l(n, p, r, y) {
                        var B = null;
                        if (3 < arguments.length) {
                            B = 0;
                            for (var A = Array(arguments.length - 3); B < A.length;)
                                A[B] = arguments[B + 3],
                                    ++B;
                            B = new Qc(A, 0, null)
                        }
                        return m.call(this, n, p, r, B)
                    }
                    function m(n, p, r, y) {
                        return Qe(b, a, null, n, p, rd([r, y]))
                    }
                    l.G = 3;
                    l.F = function (n) {
                        var p = N(n);
                        n = P(n);
                        var r = N(n);
                        n = P(n);
                        var y = N(n);
                        n = Sc(n);
                        return m(p, r, y, n)
                    }
                        ;
                    l.l = m;
                    return l
                }();
            h = function (l, m, n, p) {
                switch (arguments.length) {
                    case 0:
                        return f.call(this);
                    case 1:
                        return e.call(this, l);
                    case 2:
                        return d.call(this, l, m);
                    case 3:
                        return c.call(this, l, m, n);
                    default:
                        var r = null;
                        if (3 < arguments.length) {
                            r = 0;
                            for (var y = Array(arguments.length - 3); r < y.length;)
                                y[r] = arguments[r + 3],
                                    ++r;
                            r = new Qc(y, 0, null)
                        }
                        return k.l(l, m, n, r)
                }
                throw Error("Invalid arity: " + arguments.length);
            }
                ;
            h.G = 3;
            h.F = k.F;
            h.s = f;
            h.ic = e;
            h.fc = d;
            h.Ac = c;
            h.l = k.l;
            return h
        }()
    }
    function $e(a, b) {
        return function f(d, e) {
            return new se(null, function () {
                var h = J(e);
                if (h) {
                    if (Pd(h)) {
                        for (var k = tc(h), l = U(k), m = we(l), n = 0; ;)
                            if (n < l)
                                ze(m, function () {
                                    var p = d + n
                                        , r = vb(k, n);
                                    return a.fc ? a.fc(p, r) : a.call(null, p, r)
                                }()),
                                    n += 1;
                            else
                                break;
                        return ye(m.X(), f(d + l, uc(h)))
                    }
                    return qd(function () {
                        var p = N(h);
                        return a.fc ? a.fc(d, p) : a.call(null, d, p)
                    }(), f(d + 1, Sc(h)))
                }
                return null
            }
                , null)
        }(0, b)
    }
    function af(a) {
        this.state = a;
        this.ub = this.kc = this.m = null;
        this.v = 16386;
        this.g = 6455296
    }
    g = af.prototype;
    g.P = function (a, b) {
        return this === b
    }
        ;
    g.Ab = function () {
        return this.state
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.Ib = function (a, b, c) {
        this.ub = V.Ac(this.ub, b, c);
        return this
    }
        ;
    g.T = function () {
        return da(this)
    }
        ;
    function bf(a, b) {
        if (a instanceof af) {
            var c = a.kc;
            if (null != c && !w(c.ic ? c.ic(b) : c.call(null, b)))
                throw Error("Validator rejected reference state");
            c = a.state;
            a.state = b;
            if (null != a.ub)
                a: for (var d = J(a.ub), e = null, f = 0, h = 0; ;)
                    if (h < f) {
                        var k = e.C(null, h)
                            , l = Bd(k, 0, null);
                        k = Bd(k, 1, null);
                        k.o ? k.o(l, a, c, b) : k.call(null, l, a, c, b);
                        h += 1
                    } else if (d = J(d))
                        Pd(d) ? (e = tc(d),
                            d = uc(d),
                            l = e,
                            f = U(e),
                            e = l) : (e = N(d),
                                l = Bd(e, 0, null),
                                k = Bd(e, 1, null),
                                k.o ? k.o(l, a, c, b) : k.call(null, l, a, c, b),
                                d = P(d),
                                e = null,
                                f = 0),
                            h = 0;
                    else
                        break a;
            return b
        }
        return vc(a, b)
    }
    var Y = function Y(a) {
        switch (arguments.length) {
            case 2:
                return Y.fc(arguments[0], arguments[1]);
            case 3:
                return Y.Ac(arguments[0], arguments[1], arguments[2]);
            case 4:
                return Y.o(arguments[0], arguments[1], arguments[2], arguments[3]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return Y.l(arguments[0], arguments[1], arguments[2], arguments[3], new Qc(c.slice(4), 0, null))
        }
    };
    Y.fc = function (a, b) {
        if (a instanceof af) {
            var c = a.state;
            b = b.ic ? b.ic(c) : b.call(null, c);
            a = bf(a, b)
        } else
            a = wc(a, b);
        return a
    }
        ;
    Y.Ac = function (a, b, c) {
        if (a instanceof af) {
            var d = a.state;
            b = b.fc ? b.fc(d, c) : b.call(null, d, c);
            a = bf(a, b)
        } else
            a = wc(a, b, c);
        return a
    }
        ;
    Y.o = function (a, b, c, d) {
        if (a instanceof af) {
            var e = a.state;
            b = b.Ac ? b.Ac(e, c, d) : b.call(null, e, c, d);
            a = bf(a, b)
        } else
            a = wc(a, b, c, d);
        return a
    }
        ;
    Y.l = function (a, b, c, d, e) {
        return a instanceof af ? bf(a, Pe(b, a.state, c, d, e)) : wc(a, b, c, d, e)
    }
        ;
    Y.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        var d = P(c);
        c = N(d);
        var e = P(d);
        d = N(e);
        e = P(e);
        return this.l(b, a, c, d, e)
    }
        ;
    Y.G = 4;
    var Z = function Z(a) {
        switch (arguments.length) {
            case 1:
                return Z.ic(arguments[0]);
            case 2:
                return Z.fc(arguments[0], arguments[1]);
            case 3:
                return Z.Ac(arguments[0], arguments[1], arguments[2]);
            case 4:
                return Z.o(arguments[0], arguments[1], arguments[2], arguments[3]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return Z.l(arguments[0], arguments[1], arguments[2], arguments[3], new Qc(c.slice(4), 0, null))
        }
    };
    Z.ic = function (a) {
        return function (b) {
            return function () {
                function c(k, l) {
                    l = a.ic ? a.ic(l) : a.call(null, l);
                    return b.fc ? b.fc(k, l) : b.call(null, k, l)
                }
                function d(k) {
                    return b.ic ? b.ic(k) : b.call(null, k)
                }
                function e() {
                    return b.s ? b.s() : b.call(null)
                }
                var f = null
                    , h = function () {
                        function k(m, n, p) {
                            var r = null;
                            if (2 < arguments.length) {
                                r = 0;
                                for (var y = Array(arguments.length - 2); r < y.length;)
                                    y[r] = arguments[r + 2],
                                        ++r;
                                r = new Qc(y, 0, null)
                            }
                            return l.call(this, m, n, r)
                        }
                        function l(m, n, p) {
                            n = Ne(a, n, p);
                            return b.fc ? b.fc(m, n) : b.call(null, m, n)
                        }
                        k.G = 2;
                        k.F = function (m) {
                            var n = N(m);
                            m = P(m);
                            var p = N(m);
                            m = Sc(m);
                            return l(n, p, m)
                        }
                            ;
                        k.l = l;
                        return k
                    }();
                f = function (k, l, m) {
                    switch (arguments.length) {
                        case 0:
                            return e.call(this);
                        case 1:
                            return d.call(this, k);
                        case 2:
                            return c.call(this, k, l);
                        default:
                            var n = null;
                            if (2 < arguments.length) {
                                n = 0;
                                for (var p = Array(arguments.length - 2); n < p.length;)
                                    p[n] = arguments[n + 2],
                                        ++n;
                                n = new Qc(p, 0, null)
                            }
                            return h.l(k, l, n)
                    }
                    throw Error("Invalid arity: " + arguments.length);
                }
                    ;
                f.G = 2;
                f.F = h.F;
                f.s = e;
                f.ic = d;
                f.fc = c;
                f.l = h.l;
                return f
            }()
        }
    }
        ;
    Z.fc = function (a, b) {
        return new se(null, function () {
            var c = J(b);
            if (c) {
                if (Pd(c)) {
                    for (var d = tc(c), e = U(d), f = we(e), h = 0; ;)
                        if (h < e)
                            ze(f, function () {
                                var k = vb(d, h);
                                return a.ic ? a.ic(k) : a.call(null, k)
                            }()),
                                h += 1;
                        else
                            break;
                    return ye(f.X(), Z.fc(a, uc(c)))
                }
                return qd(function () {
                    var k = N(c);
                    return a.ic ? a.ic(k) : a.call(null, k)
                }(), Z.fc(a, Sc(c)))
            }
            return null
        }
            , null)
    }
        ;
    Z.Ac = function (a, b, c) {
        return new se(null, function () {
            var d = J(b)
                , e = J(c);
            if (d && e) {
                var f = N(d);
                var h = N(e);
                f = a.fc ? a.fc(f, h) : a.call(null, f, h);
                d = qd(f, Z.Ac(a, Sc(d), Sc(e)))
            } else
                d = null;
            return d
        }
            , null)
    }
        ;
    Z.o = function (a, b, c, d) {
        return new se(null, function () {
            var e = J(b)
                , f = J(c)
                , h = J(d);
            if (e && f && h) {
                var k = N(e);
                var l = N(f)
                    , m = N(h);
                k = a.Ac ? a.Ac(k, l, m) : a.call(null, k, l, m);
                e = qd(k, Z.o(a, Sc(e), Sc(f), Sc(h)))
            } else
                e = null;
            return e
        }
            , null)
    }
        ;
    Z.l = function (a, b, c, d, e) {
        return Z.fc(function (f) {
            return Me(a, f)
        }, function k(h) {
            return new se(null, function () {
                var l = Z.fc(J, h);
                return Ue(he, l) ? qd(Z.fc(N, l), k(Z.fc(Sc, l))) : null
            }
                , null)
        }(wd.l(e, d, rd([c, b]))))
    }
        ;
    Z.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        var d = P(c);
        c = N(d);
        var e = P(d);
        d = N(e);
        e = P(e);
        return this.l(b, a, c, d, e)
    }
        ;
    Z.G = 4;
    function cf(a, b) {
        return new se(null, function () {
            if (0 < a) {
                var c = J(b);
                return c ? qd(N(c), cf(a - 1, Sc(c))) : null
            }
            return null
        }
            , null)
    }
    function df(a) {
        return new se(null, function () {
            a: for (var b = 2, c = a; ;)
                if (c = J(c),
                    0 < b && c)
                    --b,
                        c = Sc(c);
                else
                    break a;
            return c
        }
            , null)
    }
    function ef(a) {
        return Z.Ac(function (b) {
            return b
        }, a, df(a))
    }
    function ff(a) {
        return new se(null, function () {
            return qd(a.s ? a.s() : a.call(null), ff(a))
        }
            , null)
    }
    function gf(a, b) {
        return new se(null, function () {
            var c = J(b);
            if (c) {
                if (Pd(c)) {
                    for (var d = tc(c), e = U(d), f = we(e), h = 0; ;)
                        if (h < e) {
                            var k = vb(d, h);
                            k = a.ic ? a.ic(k) : a.call(null, k);
                            w(k) && (k = vb(d, h),
                                f.add(k));
                            h += 1
                        } else
                            break;
                    return ye(f.X(), gf(a, uc(c)))
                }
                d = N(c);
                c = Sc(c);
                return w(a.ic ? a.ic(d) : a.call(null, d)) ? qd(d, gf(a, c)) : gf(a, c)
            }
            return null
        }
            , null)
    }
    function hf(a, b) {
        return gf(We(a), b)
    }
    function jf(a) {
        return function d(c) {
            return new se(null, function () {
                if (w(Ld.ic ? Ld.ic(c) : Ld.call(null, c))) {
                    var e = rd([J.ic ? J.ic(c) : J.call(null, c)]);
                    e = Me(Ce, Ne(Z, d, e))
                } else
                    e = null;
                return qd(c, e)
            }
                , null)
        }(a)
    }
    function kf(a) {
        return gf(function (b) {
            return !Ld(b)
        }, Sc(jf(a)))
    }
    function Rj(a, b) {
        return null != a ? null != a && (a.v & 4 || t === a.Ob) ? Rb(oc(kb(nc, mc(a), b)), Id(a)) : kb(tb, a, b) : kb(wd, a, b)
    }
    function Nk(a, b, c) {
        if (null != a && (a.v & 4 || t === a.Ob)) {
            var d = Id(a);
            return ie(b, function () {
                function e(h) {
                    return Rb(oc(h), d)
                }
                var f = null;
                f = function (h, k) {
                    switch (arguments.length) {
                        case 1:
                            return e.call(this, h);
                        case 2:
                            return nc(h, k)
                    }
                    throw Error("Invalid arity: " + arguments.length);
                }
                    ;
                f.ic = e;
                f.fc = function (h, k) {
                    return nc(h, k)
                }
                    ;
                return f
            }(), mc(a), c)
        }
        return ie(b, wd, a, c)
    }
    function mf(a, b) {
        return kb(D, a, b)
    }
    var nf = function nf(a, b, c) {
        var e = J(b);
        b = N(e);
        var f = P(e);
        if (f) {
            e = V.Ac;
            var h = D.fc(a, b);
            c = nf.Ac ? nf.Ac(h, f, c) : nf.call(null, h, f, c);
            a = e.call(V, a, b, c)
        } else
            a = V.Ac(a, b, c);
        return a
    }
        , of = function of(a) {
            switch (arguments.length) {
                case 3:
                    return of.Ac(arguments[0], arguments[1], arguments[2]);
                case 4:
                    return of.o(arguments[0], arguments[1], arguments[2], arguments[3]);
                case 5:
                    return of.R(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                case 6:
                    return of.ma(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                default:
                    for (var c = [], d = arguments.length, e = 0; ;)
                        if (e < d)
                            c.push(arguments[e]),
                                e += 1;
                        else
                            break;
                    return of.l(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new Qc(c.slice(6), 0, null))
            }
        };
    of.Ac = function (a, b, c) {
        var d = J(b);
        b = N(d);
        if (d = P(d))
            a = V.Ac(a, b, of.Ac(D.fc(a, b), d, c));
        else {
            d = V.Ac;
            var e = D.fc(a, b);
            c = c.ic ? c.ic(e) : c.call(null, e);
            a = d.call(V, a, b, c)
        }
        return a
    }
        ;
    of.o = function (a, b, c, d) {
        var e = J(b);
        b = N(e);
        if (e = P(e))
            a = V.Ac(a, b, of.o(D.fc(a, b), e, c, d));
        else {
            e = V.Ac;
            var f = D.fc(a, b);
            c = c.fc ? c.fc(f, d) : c.call(null, f, d);
            a = e.call(V, a, b, c)
        }
        return a
    }
        ;
    of.R = function (a, b, c, d, e) {
        var f = J(b);
        b = N(f);
        if (f = P(f))
            a = V.Ac(a, b, of.R(D.fc(a, b), f, c, d, e));
        else {
            f = V.Ac;
            var h = D.fc(a, b);
            c = c.Ac ? c.Ac(h, d, e) : c.call(null, h, d, e);
            a = f.call(V, a, b, c)
        }
        return a
    }
        ;
    of.ma = function (a, b, c, d, e, f) {
        var h = J(b);
        b = N(h);
        if (h = P(h))
            a = V.Ac(a, b, of.ma(D.fc(a, b), h, c, d, e, f));
        else {
            h = V.Ac;
            var k = D.fc(a, b);
            c = c.o ? c.o(k, d, e, f) : c.call(null, k, d, e, f);
            a = h.call(V, a, b, c)
        }
        return a
    }
        ;
    of.l = function (a, b, c, d, e, f, h) {
        var k = J(b);
        b = N(k);
        return (k = P(k)) ? V.Ac(a, b, Qe(of, D.fc(a, b), k, c, d, rd([e, f, h]))) : V.Ac(a, b, Qe(c, D.fc(a, b), d, e, f, rd([h])))
    }
        ;
    of.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        var d = P(c);
        c = N(d);
        var e = P(d);
        d = N(e);
        var f = P(e);
        e = N(f);
        var h = P(f);
        f = N(h);
        h = P(h);
        return this.l(b, a, c, d, e, f, h)
    }
        ;
    of.G = 6;
    var pf = function pf(a) {
        switch (arguments.length) {
            case 3:
                return pf.Ac(arguments[0], arguments[1], arguments[2]);
            case 4:
                return pf.o(arguments[0], arguments[1], arguments[2], arguments[3]);
            case 5:
                return pf.R(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
            case 6:
                return pf.ma(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            default:
                for (var c = [], d = arguments.length, e = 0; ;)
                    if (e < d)
                        c.push(arguments[e]),
                            e += 1;
                    else
                        break;
                return pf.l(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new Qc(c.slice(6), 0, null))
        }
    };
    pf.Ac = function (a, b, c) {
        var d = V.Ac
            , e = D.fc(a, b);
        c = c.ic ? c.ic(e) : c.call(null, e);
        return d.call(V, a, b, c)
    }
        ;
    pf.o = function (a, b, c, d) {
        var e = V.Ac
            , f = D.fc(a, b);
        c = c.fc ? c.fc(f, d) : c.call(null, f, d);
        return e.call(V, a, b, c)
    }
        ;
    pf.R = function (a, b, c, d, e) {
        var f = V.Ac
            , h = D.fc(a, b);
        c = c.Ac ? c.Ac(h, d, e) : c.call(null, h, d, e);
        return f.call(V, a, b, c)
    }
        ;
    pf.ma = function (a, b, c, d, e, f) {
        var h = V.Ac
            , k = D.fc(a, b);
        c = c.o ? c.o(k, d, e, f) : c.call(null, k, d, e, f);
        return h.call(V, a, b, c)
    }
        ;
    pf.l = function (a, b, c, d, e, f, h) {
        return V.Ac(a, b, Qe(c, D.fc(a, b), d, e, f, rd([h])))
    }
        ;
    pf.F = function (a) {
        var b = N(a)
            , c = P(a);
        a = N(c);
        var d = P(c);
        c = N(d);
        var e = P(d);
        d = N(e);
        var f = P(e);
        e = N(f);
        var h = P(f);
        f = N(h);
        h = P(h);
        return this.l(b, a, c, d, e, f, h)
    }
        ;
    pf.G = 6;
    function qf(a, b) {
        this.I = a;
        this.zc = b
    }
    function rf(a) {
        return new qf(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null])
    }
    function sf(a) {
        return new qf(a.I, ib(a.zc))
    }
    function tf(a) {
        a = a.i;
        return 32 > a ? 0 : a - 1 >>> 5 << 5
    }
    function uf(a, b, c) {
        for (; ;) {
            if (0 === b)
                return c;
            var d = rf(a);
            d.zc[0] = c;
            c = d;
            b -= 5
        }
    }
    var vf = function vf(a, b, c, d) {
        var f = sf(c)
            , h = a.i - 1 >>> b & 31;
        5 === b ? f.zc[h] = d : (c = c.zc[h],
            null != c ? (b -= 5,
                a = vf.o ? vf.o(a, b, c, d) : vf.call(null, a, b, c, d)) : a = uf(null, b - 5, d),
            f.zc[h] = a);
        return f
    };
    function wf(a, b) {
        if (b >= tf(a))
            return a.ka;
        var c = a.root;
        for (a = a.shift; ;)
            if (0 < a) {
                var d = a - 5;
                c = c.zc[b >>> a & 31];
                a = d
            } else
                return c.zc
    }
    function xf(a, b) {
        if (0 <= b && b < a.i)
            b = wf(a, b);
        else
            throw a = a.i,
            Error(["No item ", z.ic(b), " in vector of length ", z.ic(a)].join(""));
        return b
    }
    var yf = function yf(a, b, c, d, e) {
        var h = sf(c);
        if (0 === b)
            h.zc[d & 31] = e;
        else {
            var k = d >>> b & 31;
            b -= 5;
            c = c.zc[k];
            a = yf.R ? yf.R(a, b, c, d, e) : yf.call(null, a, b, c, d, e);
            h.zc[k] = a
        }
        return h
    }
        , zf = function zf(a, b, c) {
            var e = a.i - 2 >>> b & 31;
            if (5 < b) {
                b -= 5;
                var f = c.zc[e];
                a = zf.Ac ? zf.Ac(a, b, f) : zf.call(null, a, b, f);
                if (null == a && 0 === e)
                    return null;
                c = sf(c);
                c.zc[e] = a;
                return c
            }
            if (0 === e)
                return null;
            c = sf(c);
            c.zc[e] = null;
            return c
        };
    function Af(a, b, c) {
        this.wb = this.j = 0;
        this.zc = a;
        this.jc = b;
        this.start = 0;
        this.end = c
    }
    Af.prototype.ha = function () {
        return this.j < this.end
    }
        ;
    Af.prototype.next = function () {
        32 === this.j - this.wb && (this.zc = wf(this.jc, this.j),
            this.wb += 32);
        var a = this.zc[this.j & 31];
        this.j += 1;
        return a
    }
        ;
    function Bf(a, b, c, d) {
        return c < d ? Cf(a, b, jd(a, c), c + 1, d) : b.s ? b.s() : b.call(null)
    }
    function Cf(a, b, c, d, e) {
        var f = c;
        c = d;
        for (d = wf(a, d); ;)
            if (c < e) {
                var h = c & 31;
                d = 0 === h ? wf(a, c) : d;
                h = d[h];
                f = b.fc ? b.fc(f, h) : b.call(null, f, h);
                if (bd(f))
                    return C(f);
                c += 1
            } else
                return f
    }
    function Df(a, b, c, d, e, f) {
        this.m = a;
        this.i = b;
        this.shift = c;
        this.root = d;
        this.ka = e;
        this.u = f;
        this.g = 167666463;
        this.v = 139268
    }
    g = Df.prototype;
    g.cb = function (a, b) {
        return 0 <= b && b < this.i ? new Ef(b, wf(this, b)[b & 31]) : null
    }
        ;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        return "number" === typeof b ? this.da(null, b, c) : c
    }
        ;
    g.rb = function (a, b, c) {
        a = 0;
        for (var d = c; ;)
            if (a < this.i) {
                var e = wf(this, a);
                c = e.length;
                a: for (var f = 0; ;)
                    if (f < c) {
                        var h = f + a
                            , k = e[f];
                        d = b.Ac ? b.Ac(d, h, k) : b.call(null, d, h, k);
                        if (bd(d)) {
                            e = d;
                            break a
                        }
                        f += 1
                    } else {
                        e = d;
                        break a
                    }
                if (bd(e))
                    return C(e);
                a += c;
                d = e
            } else
                return d
    }
        ;
    g.C = function (a, b) {
        return xf(this, b)[b & 31]
    }
        ;
    g.da = function (a, b, c) {
        return 0 <= b && b < this.i ? wf(this, b)[b & 31] : c
    }
        ;
    g.Cb = function (a, b) {
        if (0 <= a && a < this.i) {
            if (tf(this) <= a) {
                var c = ib(this.ka);
                c[a & 31] = b;
                return new Df(this.m, this.i, this.shift, this.root, c, null)
            }
            return new Df(this.m, this.i, this.shift, yf(this, this.shift, this.root, a, b), this.ka, null)
        }
        if (a === this.i)
            return this.Y(null, b);
        throw Error(["Index ", z.ic(a), " out of bounds  [0,", z.ic(this.i), "]"].join(""));
    }
        ;
    g.oa = function () {
        var a = this.i;
        return new Af(0 < U(this) ? wf(this, 0) : null, this, a)
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.K = function () {
        return this.i
    }
        ;
    g.fb = function () {
        return 0 < this.i ? this.C(null, this.i - 1) : null
    }
        ;
    g.gb = function () {
        if (0 === this.i)
            throw Error("Can't pop empty vector");
        if (1 === this.i)
            return Rb(xd, this.m);
        if (1 < this.i - tf(this))
            return new Df(this.m, this.i - 1, this.shift, this.root, this.ka.slice(0, -1), null);
        var a = wf(this, this.i - 2)
            , b = zf(this, this.shift, this.root);
        b = null == b ? Ff : b;
        var c = this.i - 1;
        return 5 < this.shift && null == b.zc[1] ? new Df(this.m, c, this.shift - 5, b.zc[0], a, null) : new Df(this.m, c, this.shift, b, a, null)
    }
        ;
    g.sb = function () {
        return 0 < this.i ? new od(this, this.i - 1, null) : null
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        if (b instanceof Df)
            if (this.i === U(b))
                for (a = this.oa(null),
                    b = b.oa(null); ;)
                    if (a.ha()) {
                        var c = a.next()
                            , d = b.next();
                        if (!R.fc(c, d))
                            return !1
                    } else
                        return !0;
            else
                return !1;
        else
            return pd(this, b)
    }
        ;
    g.Xa = function () {
        return new Gf(this.i, this.shift, Hf.ic ? Hf.ic(this.root) : Hf.call(null, this.root), If.ic ? If.ic(this.ka) : If.call(null, this.ka))
    }
        ;
    g.W = function () {
        return Rb(xd, this.m)
    }
        ;
    g.ea = function (a, b) {
        return Bf(this, b, 0, this.i)
    }
        ;
    g.fa = function (a, b, c) {
        a = 0;
        for (var d = c; ;)
            if (a < this.i) {
                var e = wf(this, a);
                c = e.length;
                a: for (var f = 0; ;)
                    if (f < c) {
                        var h = e[f];
                        d = b.fc ? b.fc(d, h) : b.call(null, d, h);
                        if (bd(d)) {
                            e = d;
                            break a
                        }
                        f += 1
                    } else {
                        e = d;
                        break a
                    }
                if (bd(e))
                    return C(e);
                a += c;
                d = e
            } else
                return d
    }
        ;
    g.Oa = function (a, b, c) {
        if ("number" === typeof b)
            return this.Cb(b, c);
        throw Error("Vector's key for assoc must be a number.");
    }
        ;
    g.Bc = function (a, b) {
        return Vd(b) ? 0 <= b && b < this.i : !1
    }
        ;
    g.N = function () {
        if (0 === this.i)
            return null;
        if (32 >= this.i)
            return new Qc(this.ka, 0, null);
        a: {
            var a = this.root;
            for (var b = this.shift; ;)
                if (0 < b)
                    b -= 5,
                        a = a.zc[0];
                else {
                    a = a.zc;
                    break a
                }
        }
        return Jf ? Jf(this, a, 0, 0) : Kf.call(null, this, a, 0, 0)
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Df(b, this.i, this.shift, this.root, this.ka, this.u)
    }
        ;
    g.Y = function (a, b) {
        if (32 > this.i - tf(this)) {
            a = this.ka.length;
            for (var c = Array(a + 1), d = 0; ;)
                if (d < a)
                    c[d] = this.ka[d],
                        d += 1;
                else
                    break;
            c[a] = b;
            return new Df(this.m, this.i + 1, this.shift, this.root, c, null)
        }
        a = (c = this.i >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
        c ? (c = rf(null),
            c.zc[0] = this.root,
            d = uf(null, this.shift, new qf(null, this.ka)),
            c.zc[1] = d) : c = vf(this, this.shift, this.root, new qf(null, this.ka));
        return new Df(this.m, this.i + 1, a, c, [b], null)
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        if ("number" === typeof a)
            return this.C(null, a);
        throw Error("Key must be integer");
    }
        ;
    var Ff = new qf(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null])
        , xd = new Df(null, 0, 5, Ff, [], Yc);
    Df.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function Lf(a) {
        if (w(Mf.ic ? Mf.ic(a) : Mf.call(null, a)))
            a = new Df(null, 2, 5, Ff, [Nf.ic ? Nf.ic(a) : Nf.call(null, a), Of.ic ? Of.ic(a) : Of.call(null, a)], null);
        else if (Od(a))
            a = Hd(a, null);
        else if (ab(a))
            a: {
                var b = a.length;
                if (32 > b)
                    a = new Df(null, b, 5, Ff, a, null);
                else
                    for (var c = 32, d = (new Df(null, 32, 5, Ff, a.slice(0, 32), null)).Xa(null); ;)
                        if (c < b) {
                            var e = c + 1;
                            d = nc(d, a[c]);
                            c = e
                        } else {
                            a = oc(d);
                            break a
                        }
            }
        else
            a = oc(kb(nc, mc(xd), a));
        return a
    }
    function Pf(a, b, c, d, e) {
        this.na = a;
        this.node = b;
        this.j = c;
        this.ca = d;
        this.m = e;
        this.u = null;
        this.g = 32375020;
        this.v = 1536
    }
    g = Pf.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        if (this.ca + 1 < this.node.length) {
            var a = this.na;
            var b = this.node
                , c = this.j
                , d = this.ca + 1;
            a = Jf ? Jf(a, b, c, d) : Kf.call(null, a, b, c, d);
            return null == a ? null : a
        }
        return this.zb()
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return Bf(this.na, b, this.j + this.ca, U(this.na))
    }
        ;
    g.fa = function (a, b, c) {
        return Cf(this.na, b, c, this.j + this.ca, U(this.na))
    }
        ;
    g.ba = function () {
        return this.node[this.ca]
    }
        ;
    g.ga = function () {
        if (this.ca + 1 < this.node.length) {
            var a = this.na;
            var b = this.node
                , c = this.j
                , d = this.ca + 1;
            a = Jf ? Jf(a, b, c, d) : Kf.call(null, a, b, c, d);
            return null == a ? Tc : a
        }
        return this.Va(null)
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.qb = function () {
        var a = this.node;
        return new ve(a, this.ca, a.length)
    }
        ;
    g.Va = function () {
        var a = this.j + this.node.length;
        if (a < pb(this.na)) {
            var b = this.na
                , c = wf(this.na, a);
            return Jf ? Jf(b, c, a, 0) : Kf.call(null, b, c, a, 0)
        }
        return Tc
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : Qf ? Qf(this.na, this.node, this.j, this.ca, b) : Kf.call(null, this.na, this.node, this.j, this.ca, b)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    g.zb = function () {
        var a = this.j + this.node.length;
        if (a < pb(this.na)) {
            var b = this.na
                , c = wf(this.na, a);
            return Jf ? Jf(b, c, a, 0) : Kf.call(null, b, c, a, 0)
        }
        return null
    }
        ;
    Pf.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function Kf(a) {
        switch (arguments.length) {
            case 3:
                var b = arguments[0]
                    , c = arguments[1]
                    , d = arguments[2];
                return new Pf(b, xf(b, c), c, d, null);
            case 4:
                return Jf(arguments[0], arguments[1], arguments[2], arguments[3]);
            case 5:
                return Qf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function Jf(a, b, c, d) {
        return new Pf(a, b, c, d, null)
    }
    function Qf(a, b, c, d, e) {
        return new Pf(a, b, c, d, e)
    }
    function Rf(a, b) {
        return a === b.I ? b : new qf(a, ib(b.zc))
    }
    function Hf(a) {
        return new qf({}, ib(a.zc))
    }
    function If(a) {
        var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        Qd(a, 0, b, 0, a.length);
        return b
    }
    var Sf = function Sf(a, b, c, d) {
        c = Rf(a.root.I, c);
        var f = a.i - 1 >>> b & 31;
        if (5 === b)
            a = d;
        else {
            var h = c.zc[f];
            null != h ? (b -= 5,
                a = Sf.o ? Sf.o(a, b, h, d) : Sf.call(null, a, b, h, d)) : a = uf(a.root.I, b - 5, d)
        }
        c.zc[f] = a;
        return c
    };
    function Gf(a, b, c, d) {
        this.i = a;
        this.shift = b;
        this.root = c;
        this.ka = d;
        this.v = 88;
        this.g = 275
    }
    g = Gf.prototype;
    g.Za = function (a, b) {
        if (this.root.I) {
            if (32 > this.i - tf(this))
                this.ka[this.i & 31] = b;
            else {
                a = new qf(this.root.I, this.ka);
                var c = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                c[0] = b;
                this.ka = c;
                this.i >>> 5 > 1 << this.shift ? (b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                    c = this.shift + 5,
                    b[0] = this.root,
                    b[1] = uf(this.root.I, this.shift, a),
                    this.root = new qf(this.root.I, b),
                    this.shift = c) : this.root = Sf(this, this.shift, this.root, a)
            }
            this.i += 1;
            return this
        }
        throw Error("conj! after persistent!");
    }
        ;
    g.hb = function () {
        if (this.root.I) {
            this.root.I = null;
            var a = this.i - tf(this)
                , b = Array(a);
            Qd(this.ka, 0, b, 0, a);
            return new Df(null, this.i, this.shift, this.root, b, null)
        }
        throw Error("persistent! called twice");
    }
        ;
    g.Ya = function (a, b, c) {
        if ("number" === typeof b)
            return Tf(this, b, c);
        throw Error("TransientVector's key for assoc! must be a number.");
    }
        ;
    function Tf(a, b, c) {
        if (a.root.I) {
            if (0 <= b && b < a.i) {
                if (tf(a) <= b)
                    a.ka[b & 31] = c;
                else {
                    var d = function k(f, h) {
                        h = Rf(a.root.I, h);
                        if (0 === f)
                            h.zc[b & 31] = c;
                        else {
                            var l = b >>> f & 31;
                            f = k(f - 5, h.zc[l]);
                            h.zc[l] = f
                        }
                        return h
                    }(a.shift, a.root);
                    a.root = d
                }
                return a
            }
            if (b === a.i)
                return a.Za(null, c);
            throw Error(["Index ", z.ic(b), " out of bounds for TransientVector of length", z.ic(a.i)].join(""));
        }
        throw Error("assoc! after persistent!");
    }
    g.K = function () {
        if (this.root.I)
            return this.i;
        throw Error("count after persistent!");
    }
        ;
    g.C = function (a, b) {
        if (this.root.I)
            return xf(this, b)[b & 31];
        throw Error("nth after persistent!");
    }
        ;
    g.da = function (a, b, c) {
        return 0 <= b && b < this.i ? this.C(null, b) : c
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        if (this.root.I)
            return "number" === typeof b ? this.da(null, b, c) : c;
        throw Error("lookup after persistent!");
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.M(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    function Uf() {
        this.g = 2097152;
        this.v = 0
    }
    Uf.prototype.P = function () {
        return !1
    }
        ;
    var Vf = new Uf;
    function Wf(a, b) {
        return Ud(Md(b) && !Nd(b) ? U(a) === U(b) ? (null != a ? a.g & 1048576 || t === a.rc || (a.g ? 0 : x(Vb, a)) : x(Vb, a)) ? ge(function (c, d, e) {
            return R.fc(D.Ac(b, d, Vf), e) ? !0 : new ad(!1)
        }, a) : Ue(function (c) {
            return R.fc(D.Ac(b, N(c), Vf), N(P(c)))
        }, a) : null : null)
    }
    function Xf(a) {
        this.D = a
    }
    Xf.prototype.next = function () {
        if (null != this.D) {
            var a = N(this.D)
                , b = Bd(a, 0, null);
            a = Bd(a, 1, null);
            this.D = P(this.D);
            return {
                value: [b, a],
                done: !1
            }
        }
        return {
            value: null,
            done: !0
        }
    }
        ;
    function Yf(a) {
        this.D = a
    }
    Yf.prototype.next = function () {
        if (null != this.D) {
            var a = N(this.D);
            this.D = P(this.D);
            return {
                value: [a, a],
                done: !1
            }
        }
        return {
            value: null,
            done: !0
        }
    }
        ;
    function Zf(a, b) {
        if (b instanceof F)
            a: {
                var c = a.length;
                b = b.pa;
                for (var d = 0; ;) {
                    if (c <= d) {
                        a = -1;
                        break a
                    }
                    if (a[d] instanceof F && b === a[d].pa) {
                        a = d;
                        break a
                    }
                    d += 2
                }
            }
        else if ("string" === typeof b || "number" === typeof b)
            a: for (c = a.length,
                d = 0; ;) {
                if (c <= d) {
                    a = -1;
                    break a
                }
                if (b === a[d]) {
                    a = d;
                    break a
                }
                d += 2
            }
        else if (b instanceof Nc)
            a: for (c = a.length,
                b = b.wa,
                d = 0; ;) {
                if (c <= d) {
                    a = -1;
                    break a
                }
                if (a[d] instanceof Nc && b === a[d].wa) {
                    a = d;
                    break a
                }
                d += 2
            }
        else if (null == b)
            a: for (b = a.length,
                c = 0; ;) {
                if (b <= c) {
                    a = -1;
                    break a
                }
                if (null == a[c]) {
                    a = c;
                    break a
                }
                c += 2
            }
        else
            a: for (c = a.length,
                d = 0; ;) {
                if (c <= d) {
                    a = -1;
                    break a
                }
                if (R.fc(b, a[d])) {
                    a = d;
                    break a
                }
                d += 2
            }
        return a
    }
    function Ef(a, b) {
        this.key = a;
        this.O = b;
        this.u = null;
        this.g = 166619935;
        this.v = 0
    }
    g = Ef.prototype;
    g.cb = function (a, b) {
        switch (b) {
            case 0:
                return new Ef(0, this.key);
            case 1:
                return new Ef(1, this.O);
            default:
                return null
        }
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.M = function (a, b) {
        return this.da(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        return this.da(null, b, c)
    }
        ;
    g.C = function (a, b) {
        if (0 === b)
            return this.key;
        if (1 === b)
            return this.O;
        throw Error("Index out of bounds");
    }
        ;
    g.da = function (a, b, c) {
        return 0 === b ? this.key : 1 === b ? this.O : c
    }
        ;
    g.Cb = function (a, b) {
        return (new Df(null, 2, 5, Ff, [this.key, this.O], null)).Cb(a, b)
    }
        ;
    g.U = function () {
        return null
    }
        ;
    g.K = function () {
        return 2
    }
        ;
    g.Ub = function () {
        return this.key
    }
        ;
    g.Vb = function () {
        return this.O
    }
        ;
    g.fb = function () {
        return this.O
    }
        ;
    g.gb = function () {
        return new Df(null, 1, 5, Ff, [this.key], null)
    }
        ;
    g.sb = function () {
        return new Qc([this.O, this.key], 0, null)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return null
    }
        ;
    g.ea = function (a, b) {
        return dd(this, b)
    }
        ;
    g.fa = function (a, b, c) {
        a: {
            a = this.K(null);
            var d = c;
            for (c = 0; ;)
                if (c < a) {
                    var e = this.C(null, c);
                    d = b.fc ? b.fc(d, e) : b.call(null, d, e);
                    if (bd(d)) {
                        b = C(d);
                        break a
                    }
                    c += 1
                } else {
                    b = d;
                    break a
                }
        }
        return b
    }
        ;
    g.Oa = function (a, b, c) {
        return V.Ac(new Df(null, 2, 5, Ff, [this.key, this.O], null), b, c)
    }
        ;
    g.Bc = function (a, b) {
        return 0 === b || 1 === b
    }
        ;
    g.N = function () {
        return new Qc([this.key, this.O], 0, null)
    }
        ;
    g.V = function (a, b) {
        return Hd(new Df(null, 2, 5, Ff, [this.key, this.O], null), b)
    }
        ;
    g.Y = function (a, b) {
        return new Df(null, 3, 5, Ff, [this.key, this.O, b], null)
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.C(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.da(null, a, b)
    }
        ;
    function Mf(a) {
        return null != a ? a.g & 2048 || t === a.uc ? !0 : !1 : !1
    }
    function $f(a, b, c) {
        this.zc = a;
        this.j = b;
        this.va = c;
        this.g = 32374990;
        this.v = 0
    }
    g = $f.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.va
    }
        ;
    g.aa = function () {
        return this.j < this.zc.length - 2 ? new $f(this.zc, this.j + 2, null) : null
    }
        ;
    g.K = function () {
        return (this.zc.length - this.j) / 2
    }
        ;
    g.T = function () {
        return Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return new Ef(this.zc[this.j], this.zc[this.j + 1])
    }
        ;
    g.ga = function () {
        return this.j < this.zc.length - 2 ? new $f(this.zc, this.j + 2, null) : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.va ? this : new $f(this.zc, this.j, b)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    $f.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function ag(a, b) {
        this.zc = a;
        this.j = 0;
        this.i = b
    }
    ag.prototype.ha = function () {
        return this.j < this.i
    }
        ;
    ag.prototype.next = function () {
        var a = new Ef(this.zc[this.j], this.zc[this.j + 1]);
        this.j += 2;
        return a
    }
        ;
    function u(a, b, c, d) {
        this.m = a;
        this.i = b;
        this.zc = c;
        this.u = d;
        this.g = 16647951;
        this.v = 139268
    }
    g = u.prototype;
    g.cb = function (a, b) {
        a = Zf(this.zc, b);
        return -1 === a ? null : new Ef(this.zc[a], this.zc[a + 1])
    }
        ;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.keys = function () {
        return Vc(bg.ic ? bg.ic(this) : bg.call(null, this))
    }
        ;
    g.entries = function () {
        return new Xf(J(J(this)))
    }
        ;
    g.values = function () {
        return Vc(cg.ic ? cg.ic(this) : cg.call(null, this))
    }
        ;
    g.has = function (a) {
        return Wd(this, a)
    }
        ;
    g.get = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    g.forEach = function (a) {
        for (var b = J(this), c = null, d = 0, e = 0; ;)
            if (e < d) {
                var f = c.C(null, e)
                    , h = Bd(f, 0, null);
                f = Bd(f, 1, null);
                a.fc ? a.fc(f, h) : a.call(null, f, h);
                e += 1
            } else if (b = J(b))
                Pd(b) ? (c = tc(b),
                    b = uc(b),
                    h = c,
                    d = U(c),
                    c = h) : (c = N(b),
                        h = Bd(c, 0, null),
                        f = Bd(c, 1, null),
                        a.fc ? a.fc(f, h) : a.call(null, f, h),
                        b = P(b),
                        c = null,
                        d = 0),
                    e = 0;
            else
                return null
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        a = Zf(this.zc, b);
        return -1 === a ? c : this.zc[a + 1]
    }
        ;
    g.rb = function (a, b, c) {
        a = this.zc.length;
        for (var d = 0; ;)
            if (d < a) {
                var e = this.zc[d]
                    , f = this.zc[d + 1];
                c = b.Ac ? b.Ac(c, e, f) : b.call(null, c, e, f);
                if (bd(c))
                    return C(c);
                d += 2
            } else
                return c
    }
        ;
    g.oa = function () {
        return new ag(this.zc, 2 * this.i)
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.K = function () {
        return this.i
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Zc(this)
    }
        ;
    g.P = function (a, b) {
        if (Md(b) && !Nd(b))
            if (a = this.zc.length,
                this.i === b.K(null))
                for (var c = 0; ;)
                    if (c < a) {
                        var d = b.B(null, this.zc[c], Rd);
                        if (d !== Rd)
                            if (R.fc(this.zc[c + 1], d))
                                c += 2;
                            else
                                return !1;
                        else
                            return !1
                    } else
                        return !0;
            else
                return !1;
        else
            return !1
    }
        ;
    g.Xa = function () {
        return new dg(this.zc.length, ib(this.zc))
    }
        ;
    g.W = function () {
        return Rb(Te, this.m)
    }
        ;
    g.ea = function (a, b) {
        return de(this, b)
    }
        ;
    g.fa = function (a, b, c) {
        return ee(this, b, c)
    }
        ;
    g.Bb = function (a, b) {
        if (0 <= Zf(this.zc, b)) {
            a = this.zc.length;
            var c = a - 2;
            if (0 === c)
                return this.W(null);
            c = Array(c);
            for (var d = 0, e = 0; ;) {
                if (d >= a)
                    return new u(this.m, this.i - 1, c, null);
                R.fc(b, this.zc[d]) ? d += 2 : (c[e] = this.zc[d],
                    c[e + 1] = this.zc[d + 1],
                    e += 2,
                    d += 2)
            }
        } else
            return this
    }
        ;
    g.Oa = function (a, b, c) {
        a = Zf(this.zc, b);
        if (-1 === a) {
            if (this.i < eg) {
                a = this.zc;
                for (var d = a.length, e = Array(d + 2), f = 0; ;)
                    if (f < d)
                        e[f] = a[f],
                            f += 1;
                    else
                        break;
                e[d] = b;
                e[d + 1] = c;
                return new u(this.m, this.i + 1, e, null)
            }
            return Rb(Fb(Rj(fg, this), b, c), this.m)
        }
        if (c === this.zc[a + 1])
            return this;
        b = ib(this.zc);
        b[a + 1] = c;
        return new u(this.m, this.i, b, null)
    }
        ;
    g.Bc = function (a, b) {
        return -1 !== Zf(this.zc, b)
    }
        ;
    g.N = function () {
        var a = this.zc;
        return 0 <= a.length - 2 ? new $f(a, 0, null) : null
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new u(b, this.i, this.zc, this.u)
    }
        ;
    g.Y = function (a, b) {
        if (Od(b))
            return this.Oa(null, vb(b, 0), vb(b, 1));
        a = this;
        for (b = J(b); ;) {
            if (null == b)
                return a;
            var c = N(b);
            if (Od(c))
                a = Fb(a, vb(c, 0), vb(c, 1)),
                    b = P(b);
            else
                throw Error("conj on a map takes map entries or seqables of map entries");
        }
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.M(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    var Te = new u(null, 0, [], $c)
        , eg = 8;
    function ig(a, b) {
        return a === b ? !0 : a === b || a instanceof F && b instanceof F && a.pa === b.pa ? !0 : R.fc(a, b)
    }
    function xa(a) {
        for (var b = 0, c = 0; ;)
            if (b < a.length) {
                var d;
                a: for (d = 0; ;)
                    if (d < b) {
                        var e = ig(a[b], a[d]);
                        if (e) {
                            d = e;
                            break a
                        }
                        d = 2 + d
                    } else {
                        d = !1;
                        break a
                    }
                c = d ? c : c + 2;
                b = 2 + b
            } else
                return c
    }
    function ya(a, b) {
        var c = a.length - 1
            , d = J(b);
        b = Array(c + 2 * U(d));
        a = Qd(a, 0, b, 0, c);
        for (b = c; ;)
            if (d) {
                var e = N(d);
                a[b] = Jb(e);
                a[b + 1] = Kb(e);
                b = 2 + c;
                d = P(d)
            } else
                return a
    }
    function Cd(a) {
        var b = a.length, c = 1 === (b & 1), d;
        if (!(d = c))
            a: for (d = 0; ;)
                if (d < a.length) {
                    var e;
                    b: for (e = 0; ;)
                        if (e < d) {
                            var f = ig(a[d], a[e]);
                            if (f) {
                                e = f;
                                break b
                            }
                            e = 2 + e
                        } else {
                            e = !1;
                            break b
                        }
                    if (e) {
                        d = e;
                        break a
                    }
                    d = 2 + d
                } else {
                    d = !1;
                    break a
                }
        return d ? za(a, c) : new u(null, b / 2, a, null)
    }
    function za(a, b) {
        var c = b ? ya(a, Rj(Te, a[a.length - 1])) : a;
        a = xa(c);
        var d = c.length;
        if (a < d) {
            a = Array(a);
            for (var e = 0, f = 0; ;)
                if (e < d)
                    (function () {
                        for (var h = 0; ;)
                            if (h < f) {
                                var k = ig(c[e], c[h]);
                                if (k)
                                    return k;
                                h = 2 + h
                            } else
                                return !1
                    }
                    )() ? (b = f,
                        e = 2 + e,
                        f = b) : (b = function () {
                            for (var h = d - 2; ;)
                                if (h >= e) {
                                    if (ig(c[e], c[h]))
                                        return h;
                                    h -= 2
                                } else
                                    return h
                        }(),
                            a[f] = c[e],
                            a[f + 1] = c[b + 1],
                            b = 2 + f,
                            e = 2 + e,
                            f = b);
                else
                    break;
            return new u(null, a.length / 2, a, null)
        }
        return new u(null, c.length / 2, c, null)
    }
    u.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function dg(a, b) {
        this.$a = {};
        this.Ta = a;
        this.zc = b;
        this.g = 259;
        this.v = 56
    }
    g = dg.prototype;
    g.K = function () {
        if (this.$a)
            return je(this.Ta);
        throw Error("count after persistent!");
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        if (this.$a)
            return a = Zf(this.zc, b),
                -1 === a ? c : this.zc[a + 1];
        throw Error("lookup after persistent!");
    }
        ;
    g.Za = function (a, b) {
        if (this.$a) {
            if (Mf(b))
                return this.Ya(null, Nf.ic ? Nf.ic(b) : Nf.call(null, b), Of.ic ? Of.ic(b) : Of.call(null, b));
            if (Od(b))
                return this.Ya(null, b.ic ? b.ic(0) : b.call(null, 0), b.ic ? b.ic(1) : b.call(null, 1));
            a = J(b);
            for (b = this; ;) {
                var c = N(a);
                if (w(c))
                    a = P(a),
                        b = pc(b, Nf.ic ? Nf.ic(c) : Nf.call(null, c), Of.ic ? Of.ic(c) : Of.call(null, c));
                else
                    return b
            }
        } else
            throw Error("conj! after persistent!");
    }
        ;
    g.hb = function () {
        if (this.$a)
            return this.$a = !1,
                new u(null, je(this.Ta), this.zc, null);
        throw Error("persistent! called twice");
    }
        ;
    g.Ya = function (a, b, c) {
        if (this.$a) {
            a = Zf(this.zc, b);
            if (-1 === a) {
                if (this.Ta + 2 <= 2 * eg)
                    return this.Ta += 2,
                        this.zc.push(b),
                        this.zc.push(c),
                        this;
                a = gg.fc ? gg.fc(this.Ta, this.zc) : gg.call(null, this.Ta, this.zc);
                return pc(a, b, c)
            }
            c !== this.zc[a + 1] && (this.zc[a + 1] = c);
            return this
        }
        throw Error("assoc! after persistent!");
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.B(null, a, null)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    function gg(a, b) {
        for (var c = mc(fg), d = 0; ;)
            if (d < a)
                c = pc(c, b[d], b[d + 1]),
                    d += 2;
            else
                return c
    }
    function hg() {
        this.O = !1
    }
    function jg(a, b, c) {
        a = ib(a);
        a[b] = c;
        return a
    }
    function kg(a, b) {
        var c = Array(a.length - 2);
        Qd(a, 0, c, 0, 2 * b);
        Qd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
        return c
    }
    function lg(a, b, c, d) {
        a = a.Ra(b);
        a.zc[c] = d;
        return a
    }
    function mg(a, b, c) {
        for (var d = a.length, e = 0, f = c; ;)
            if (e < d) {
                c = a[e];
                if (null != c) {
                    var h = a[e + 1];
                    c = b.Ac ? b.Ac(f, c, h) : b.call(null, f, c, h)
                } else
                    c = a[e + 1],
                        c = null != c ? c.mb(b, f) : f;
                if (bd(c))
                    return c;
                e += 2;
                f = c
            } else
                return f
    }
    function ng(a) {
        this.zc = a;
        this.j = 0;
        this.ta = this.nb = null
    }
    ng.prototype.advance = function () {
        for (var a = this.zc.length; ;)
            if (this.j < a) {
                var b = this.zc[this.j]
                    , c = this.zc[this.j + 1];
                null != b ? b = this.nb = new Ef(b, c) : null != c ? (b = zc(c),
                    b = b.ha() ? this.ta = b : !1) : b = !1;
                this.j += 2;
                if (b)
                    return !0
            } else
                return !1
    }
        ;
    ng.prototype.ha = function () {
        var a = null != this.nb;
        return a ? a : (a = null != this.ta) ? a : this.advance()
    }
        ;
    ng.prototype.next = function () {
        if (null != this.nb) {
            var a = this.nb;
            this.nb = null;
            return a
        }
        if (null != this.ta)
            return a = this.ta.next(),
                this.ta.ha() || (this.ta = null),
                a;
        if (this.advance())
            return this.next();
        throw Error("No such element");
    }
        ;
    ng.prototype.remove = function () {
        return Error("Unsupported operation")
    }
        ;
    function og(a, b, c) {
        this.I = a;
        this.J = b;
        this.zc = c;
        this.v = 131072;
        this.g = 0
    }
    g = og.prototype;
    g.Ra = function (a) {
        if (a === this.I)
            return this;
        var b = ke(this.J)
            , c = Array(0 > b ? 4 : 2 * (b + 1));
        Qd(this.zc, 0, c, 0, 2 * b);
        return new og(a, this.J, c)
    }
        ;
    g.kb = function () {
        return pg ? pg(this.zc) : qg.call(null, this.zc)
    }
        ;
    g.mb = function (a, b) {
        return mg(this.zc, a, b)
    }
        ;
    g.Sa = function (a, b, c, d) {
        var e = 1 << (b >>> a & 31);
        if (0 === (this.J & e))
            return d;
        var f = ke(this.J & e - 1);
        e = this.zc[2 * f];
        f = this.zc[2 * f + 1];
        return null == e ? f.Sa(a + 5, b, c, d) : ig(c, e) ? f : d
    }
        ;
    g.ra = function (a, b, c, d, e, f) {
        var h = 1 << (c >>> b & 31)
            , k = ke(this.J & h - 1);
        if (0 === (this.J & h)) {
            var l = ke(this.J);
            if (2 * l < this.zc.length) {
                a = this.Ra(a);
                b = a.zc;
                f.O = !0;
                c = 2 * (l - k);
                f = 2 * k + (c - 1);
                for (l = 2 * (k + 1) + (c - 1); 0 !== c;)
                    b[l] = b[f],
                        --l,
                        --c,
                        --f;
                b[2 * k] = d;
                b[2 * k + 1] = e;
                a.J |= h;
                return a
            }
            if (16 <= l) {
                k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                k[c >>> b & 31] = rg.ra(a, b + 5, c, d, e, f);
                for (e = d = 0; ;)
                    if (32 > d)
                        0 === (this.J >>> d & 1) ? d += 1 : (k[d] = null != this.zc[e] ? rg.ra(a, b + 5, Kc(this.zc[e]), this.zc[e], this.zc[e + 1], f) : this.zc[e + 1],
                            e += 2,
                            d += 1);
                    else
                        break;
                return new sg(a, l + 1, k)
            }
            b = Array(2 * (l + 4));
            Qd(this.zc, 0, b, 0, 2 * k);
            b[2 * k] = d;
            b[2 * k + 1] = e;
            Qd(this.zc, 2 * k, b, 2 * (k + 1), 2 * (l - k));
            f.O = !0;
            a = this.Ra(a);
            a.zc = b;
            a.J |= h;
            return a
        }
        l = this.zc[2 * k];
        h = this.zc[2 * k + 1];
        if (null == l)
            return l = h.ra(a, b + 5, c, d, e, f),
                l === h ? this : lg(this, a, 2 * k + 1, l);
        if (ig(d, l))
            return e === h ? this : lg(this, a, 2 * k + 1, e);
        f.O = !0;
        f = b + 5;
        d = tg ? tg(a, f, l, h, c, d, e) : ug.call(null, a, f, l, h, c, d, e);
        e = 2 * k;
        k = 2 * k + 1;
        a = this.Ra(a);
        a.zc[e] = null;
        a.zc[k] = d;
        return a
    }
        ;
    g.qa = function (a, b, c, d, e) {
        var f = 1 << (b >>> a & 31)
            , h = ke(this.J & f - 1);
        if (0 === (this.J & f)) {
            var k = ke(this.J);
            if (16 <= k) {
                h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                h[b >>> a & 31] = rg.qa(a + 5, b, c, d, e);
                for (d = c = 0; ;)
                    if (32 > c)
                        0 === (this.J >>> c & 1) ? c += 1 : (h[c] = null != this.zc[d] ? rg.qa(a + 5, Kc(this.zc[d]), this.zc[d], this.zc[d + 1], e) : this.zc[d + 1],
                            d += 2,
                            c += 1);
                    else
                        break;
                return new sg(null, k + 1, h)
            }
            a = Array(2 * (k + 1));
            Qd(this.zc, 0, a, 0, 2 * h);
            a[2 * h] = c;
            a[2 * h + 1] = d;
            Qd(this.zc, 2 * h, a, 2 * (h + 1), 2 * (k - h));
            e.O = !0;
            return new og(null, this.J | f, a)
        }
        var l = this.zc[2 * h];
        f = this.zc[2 * h + 1];
        if (null == l)
            return k = f.qa(a + 5, b, c, d, e),
                k === f ? this : new og(null, this.J, jg(this.zc, 2 * h + 1, k));
        if (ig(c, l))
            return d === f ? this : new og(null, this.J, jg(this.zc, 2 * h + 1, d));
        e.O = !0;
        e = this.J;
        k = this.zc;
        a += 5;
        a = vg ? vg(a, l, f, b, c, d) : ug.call(null, a, l, f, b, c, d);
        c = 2 * h;
        h = 2 * h + 1;
        d = ib(k);
        d[c] = null;
        d[h] = a;
        return new og(null, e, d)
    }
        ;
    g.jb = function (a, b, c, d) {
        var e = 1 << (b >>> a & 31);
        if (0 === (this.J & e))
            return d;
        var f = ke(this.J & e - 1);
        e = this.zc[2 * f];
        f = this.zc[2 * f + 1];
        return null == e ? f.jb(a + 5, b, c, d) : ig(c, e) ? new Ef(e, f) : d
    }
        ;
    g.lb = function (a, b, c) {
        var d = 1 << (b >>> a & 31);
        if (0 === (this.J & d))
            return this;
        var e = ke(this.J & d - 1)
            , f = this.zc[2 * e]
            , h = this.zc[2 * e + 1];
        return null == f ? (a = h.lb(a + 5, b, c),
            a === h ? this : null != a ? new og(null, this.J, jg(this.zc, 2 * e + 1, a)) : this.J === d ? null : new og(null, this.J ^ d, kg(this.zc, e))) : ig(c, f) ? this.J === d ? null : new og(null, this.J ^ d, kg(this.zc, e)) : this
    }
        ;
    g.oa = function () {
        return new ng(this.zc)
    }
        ;
    var rg = new og(null, 0, []);
    function wg(a) {
        this.zc = a;
        this.j = 0;
        this.ta = null
    }
    wg.prototype.ha = function () {
        for (var a = this.zc.length; ;) {
            if (null != this.ta && this.ta.ha())
                return !0;
            if (this.j < a) {
                var b = this.zc[this.j];
                this.j += 1;
                null != b && (this.ta = zc(b))
            } else
                return !1
        }
    }
        ;
    wg.prototype.next = function () {
        if (this.ha())
            return this.ta.next();
        throw Error("No such element");
    }
        ;
    wg.prototype.remove = function () {
        return Error("Unsupported operation")
    }
        ;
    function sg(a, b, c) {
        this.I = a;
        this.i = b;
        this.zc = c;
        this.v = 131072;
        this.g = 0
    }
    g = sg.prototype;
    g.Ra = function (a) {
        return a === this.I ? this : new sg(a, this.i, ib(this.zc))
    }
        ;
    g.kb = function () {
        return xg ? xg(this.zc) : yg.call(null, this.zc)
    }
        ;
    g.mb = function (a, b) {
        for (var c = this.zc.length, d = 0; ;)
            if (d < c) {
                var e = this.zc[d];
                if (null != e) {
                    b = e.mb(a, b);
                    if (bd(b))
                        return b;
                    d += 1
                } else
                    d += 1
            } else
                return b
    }
        ;
    g.Sa = function (a, b, c, d) {
        var e = this.zc[b >>> a & 31];
        return null != e ? e.Sa(a + 5, b, c, d) : d
    }
        ;
    g.ra = function (a, b, c, d, e, f) {
        var h = c >>> b & 31
            , k = this.zc[h];
        if (null == k)
            return a = lg(this, a, h, rg.ra(a, b + 5, c, d, e, f)),
                a.i += 1,
                a;
        b = k.ra(a, b + 5, c, d, e, f);
        return b === k ? this : lg(this, a, h, b)
    }
        ;
    g.qa = function (a, b, c, d, e) {
        var f = b >>> a & 31
            , h = this.zc[f];
        if (null == h)
            return new sg(null, this.i + 1, jg(this.zc, f, rg.qa(a + 5, b, c, d, e)));
        a = h.qa(a + 5, b, c, d, e);
        return a === h ? this : new sg(null, this.i, jg(this.zc, f, a))
    }
        ;
    g.jb = function (a, b, c, d) {
        var e = this.zc[b >>> a & 31];
        return null != e ? e.jb(a + 5, b, c, d) : d
    }
        ;
    g.lb = function (a, b, c) {
        var d = b >>> a & 31
            , e = this.zc[d];
        if (null != e) {
            a = e.lb(a + 5, b, c);
            if (a === e)
                d = this;
            else if (null == a)
                if (8 >= this.i)
                    a: {
                        e = this.zc;
                        a = e.length;
                        b = Array(2 * (this.i - 1));
                        c = 0;
                        for (var f = 1, h = 0; ;)
                            if (c < a)
                                c !== d && null != e[c] ? (b[f] = e[c],
                                    f += 2,
                                    h |= 1 << c,
                                    c += 1) : c += 1;
                            else {
                                d = new og(null, h, b);
                                break a
                            }
                    }
                else
                    d = new sg(null, this.i - 1, jg(this.zc, d, a));
            else
                d = new sg(null, this.i, jg(this.zc, d, a));
            return d
        }
        return this
    }
        ;
    g.oa = function () {
        return new wg(this.zc)
    }
        ;
    function zg(a, b, c) {
        b *= 2;
        for (var d = 0; ;)
            if (d < b) {
                if (ig(c, a[d]))
                    return d;
                d += 2
            } else
                return -1
    }
    function Ag(a, b, c, d) {
        this.I = a;
        this.La = b;
        this.i = c;
        this.zc = d;
        this.v = 131072;
        this.g = 0
    }
    g = Ag.prototype;
    g.Ra = function (a) {
        if (a === this.I)
            return this;
        var b = Array(2 * (this.i + 1));
        Qd(this.zc, 0, b, 0, 2 * this.i);
        return new Ag(a, this.La, this.i, b)
    }
        ;
    g.kb = function () {
        return pg ? pg(this.zc) : qg.call(null, this.zc)
    }
        ;
    g.mb = function (a, b) {
        return mg(this.zc, a, b)
    }
        ;
    g.Sa = function (a, b, c, d) {
        a = zg(this.zc, this.i, c);
        return 0 > a ? d : ig(c, this.zc[a]) ? this.zc[a + 1] : d
    }
        ;
    g.ra = function (a, b, c, d, e, f) {
        if (c === this.La) {
            b = zg(this.zc, this.i, d);
            if (-1 === b) {
                if (this.zc.length > 2 * this.i)
                    return b = 2 * this.i,
                        c = 2 * this.i + 1,
                        a = this.Ra(a),
                        a.zc[b] = d,
                        a.zc[c] = e,
                        f.O = !0,
                        a.i += 1,
                        a;
                c = this.zc.length;
                b = Array(c + 2);
                Qd(this.zc, 0, b, 0, c);
                b[c] = d;
                b[c + 1] = e;
                f.O = !0;
                d = this.i + 1;
                a === this.I ? (this.zc = b,
                    this.i = d,
                    a = this) : a = new Ag(this.I, this.La, d, b);
                return a
            }
            return this.zc[b + 1] === e ? this : lg(this, a, b + 1, e)
        }
        return (new og(a, 1 << (this.La >>> b & 31), [null, this, null, null])).ra(a, b, c, d, e, f)
    }
        ;
    g.qa = function (a, b, c, d, e) {
        return b === this.La ? (a = zg(this.zc, this.i, c),
            -1 === a ? (a = 2 * this.i,
                b = Array(a + 2),
                Qd(this.zc, 0, b, 0, a),
                b[a] = c,
                b[a + 1] = d,
                e.O = !0,
                new Ag(null, this.La, this.i + 1, b)) : R.fc(this.zc[a + 1], d) ? this : new Ag(null, this.La, this.i, jg(this.zc, a + 1, d))) : (new og(null, 1 << (this.La >>> a & 31), [null, this])).qa(a, b, c, d, e)
    }
        ;
    g.jb = function (a, b, c, d) {
        a = zg(this.zc, this.i, c);
        return 0 > a ? d : ig(c, this.zc[a]) ? new Ef(this.zc[a], this.zc[a + 1]) : d
    }
        ;
    g.lb = function (a, b, c) {
        a = zg(this.zc, this.i, c);
        return -1 === a ? this : 1 === this.i ? null : new Ag(null, this.La, this.i - 1, kg(this.zc, je(a)))
    }
        ;
    g.oa = function () {
        return new ng(this.zc)
    }
        ;
    function ug(a) {
        switch (arguments.length) {
            case 6:
                return vg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            case 7:
                return tg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function vg(a, b, c, d, e, f) {
        var h = Kc(b);
        if (h === d)
            return new Ag(null, h, 2, [b, c, e, f]);
        var k = new hg;
        return rg.qa(a, h, b, c, k).qa(a, d, e, f, k)
    }
    function tg(a, b, c, d, e, f, h) {
        var k = Kc(c);
        if (k === e)
            return new Ag(null, k, 2, [c, d, f, h]);
        var l = new hg;
        return rg.ra(a, b, k, c, d, l).ra(a, b, e, f, h, l)
    }
    function Bg(a, b, c, d, e) {
        this.m = a;
        this.ua = b;
        this.j = c;
        this.D = d;
        this.u = e;
        this.g = 32374988;
        this.v = 0
    }
    g = Bg.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        if (null == this.D) {
            var a = this.ua
                , b = this.j + 2;
            return Cg ? Cg(a, b, null) : qg.call(null, a, b, null)
        }
        a = this.ua;
        b = this.j;
        var c = P(this.D);
        return Cg ? Cg(a, b, c) : qg.call(null, a, b, c)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return null == this.D ? new Ef(this.ua[this.j], this.ua[this.j + 1]) : N(this.D)
    }
        ;
    g.ga = function () {
        var a = this
            , b = null == a.D ? function () {
                var c = a.ua
                    , d = a.j + 2;
                return Cg ? Cg(c, d, null) : qg.call(null, c, d, null)
            }() : function () {
                var c = a.ua
                    , d = a.j
                    , e = P(a.D);
                return Cg ? Cg(c, d, e) : qg.call(null, c, d, e)
            }();
        return null != b ? b : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Bg(b, this.ua, this.j, this.D, this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    Bg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function qg(a) {
        switch (arguments.length) {
            case 1:
                return pg(arguments[0]);
            case 3:
                return Cg(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function pg(a) {
        return Cg(a, 0, null)
    }
    function Cg(a, b, c) {
        if (null == c)
            for (c = a.length; ;)
                if (b < c) {
                    if (null != a[b])
                        return new Bg(null, a, b, null, null);
                    var d = a[b + 1];
                    if (w(d) && (d = d.kb(),
                        w(d)))
                        return new Bg(null, a, b + 2, d, null);
                    b += 2
                } else
                    return null;
        else
            return new Bg(null, a, b, c, null)
    }
    function Dg(a, b, c, d, e) {
        this.m = a;
        this.ua = b;
        this.j = c;
        this.D = d;
        this.u = e;
        this.g = 32374988;
        this.v = 0
    }
    g = Dg.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        var a = this.ua
            , b = this.j
            , c = P(this.D);
        return Eg ? Eg(a, b, c) : yg.call(null, a, b, c)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return N(this.D)
    }
        ;
    g.ga = function () {
        var a = this.ua;
        var b = this.j
            , c = P(this.D);
        a = Eg ? Eg(a, b, c) : yg.call(null, a, b, c);
        return null != a ? a : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Dg(b, this.ua, this.j, this.D, this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    Dg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function yg(a) {
        switch (arguments.length) {
            case 1:
                return xg(arguments[0]);
            case 3:
                return Eg(arguments[0], arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    function xg(a) {
        return Eg(a, 0, null)
    }
    function Eg(a, b, c) {
        if (null == c)
            for (c = a.length; ;)
                if (b < c) {
                    var d = a[b];
                    if (w(d) && (d = d.kb(),
                        w(d)))
                        return new Dg(null, a, b + 1, d, null);
                    b += 1
                } else
                    return null;
        else
            return new Dg(null, a, b, c, null)
    }
    function Fg(a, b) {
        this.ia = a;
        this.Lb = b;
        this.Eb = !1
    }
    Fg.prototype.ha = function () {
        return !this.Eb || this.Lb.ha()
    }
        ;
    Fg.prototype.next = function () {
        if (this.Eb)
            return this.Lb.next();
        this.Eb = !0;
        return new Ef(null, this.ia)
    }
        ;
    Fg.prototype.remove = function () {
        return Error("Unsupported operation")
    }
        ;
    function Gg(a, b, c, d, e, f) {
        this.m = a;
        this.i = b;
        this.root = c;
        this.ja = d;
        this.ia = e;
        this.u = f;
        this.g = 16123663;
        this.v = 139268
    }
    g = Gg.prototype;
    g.cb = function (a, b) {
        return null == b ? this.ja ? new Ef(null, this.ia) : null : null == this.root ? null : this.root.jb(0, Kc(b), b, null)
    }
        ;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.keys = function () {
        return Vc(bg.ic ? bg.ic(this) : bg.call(null, this))
    }
        ;
    g.entries = function () {
        return new Xf(J(J(this)))
    }
        ;
    g.values = function () {
        return Vc(cg.ic ? cg.ic(this) : cg.call(null, this))
    }
        ;
    g.has = function (a) {
        return Wd(this, a)
    }
        ;
    g.get = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    g.forEach = function (a) {
        for (var b = J(this), c = null, d = 0, e = 0; ;)
            if (e < d) {
                var f = c.C(null, e)
                    , h = Bd(f, 0, null);
                f = Bd(f, 1, null);
                a.fc ? a.fc(f, h) : a.call(null, f, h);
                e += 1
            } else if (b = J(b))
                Pd(b) ? (c = tc(b),
                    b = uc(b),
                    h = c,
                    d = U(c),
                    c = h) : (c = N(b),
                        h = Bd(c, 0, null),
                        f = Bd(c, 1, null),
                        a.fc ? a.fc(f, h) : a.call(null, f, h),
                        b = P(b),
                        c = null,
                        d = 0),
                    e = 0;
            else
                return null
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        return null == b ? this.ja ? this.ia : c : null == this.root ? c : this.root.Sa(0, Kc(b), b, c)
    }
        ;
    g.rb = function (a, b, c) {
        a = this.ja ? b.Ac ? b.Ac(c, null, this.ia) : b.call(null, c, null, this.ia) : c;
        bd(a) ? b = C(a) : null != this.root ? (b = this.root.mb(b, a),
            b = bd(b) ? cd.ic ? cd.ic(b) : cd.call(null, b) : b) : b = a;
        return b
    }
        ;
    g.oa = function () {
        var a = this.root ? zc(this.root) : Se();
        return this.ja ? new Fg(this.ia, a) : a
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.K = function () {
        return this.i
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Zc(this)
    }
        ;
    g.P = function (a, b) {
        return Wf(this, b)
    }
        ;
    g.Xa = function () {
        return new Hg(this.root, this.i, this.ja, this.ia)
    }
        ;
    g.W = function () {
        return Rb(fg, this.m)
    }
        ;
    g.Bb = function (a, b) {
        if (null == b)
            return this.ja ? new Gg(this.m, this.i - 1, this.root, !1, null, null) : this;
        if (null == this.root)
            return this;
        a = this.root.lb(0, Kc(b), b);
        return a === this.root ? this : new Gg(this.m, this.i - 1, a, this.ja, this.ia, null)
    }
        ;
    g.Oa = function (a, b, c) {
        if (null == b)
            return this.ja && c === this.ia ? this : new Gg(this.m, this.ja ? this.i : this.i + 1, this.root, !0, c, null);
        a = new hg;
        b = (null == this.root ? rg : this.root).qa(0, Kc(b), b, c, a);
        return b === this.root ? this : new Gg(this.m, a.O ? this.i + 1 : this.i, b, this.ja, this.ia, null)
    }
        ;
    g.Bc = function (a, b) {
        return null == b ? this.ja : null == this.root ? !1 : this.root.Sa(0, Kc(b), b, Rd) !== Rd
    }
        ;
    g.N = function () {
        if (0 < this.i) {
            var a = null != this.root ? this.root.kb() : null;
            return this.ja ? qd(new Ef(null, this.ia), a) : a
        }
        return null
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Gg(b, this.i, this.root, this.ja, this.ia, this.u)
    }
        ;
    g.Y = function (a, b) {
        if (Od(b))
            return this.Oa(null, vb(b, 0), vb(b, 1));
        a = this;
        for (b = J(b); ;) {
            if (null == b)
                return a;
            var c = N(b);
            if (Od(c))
                a = Fb(a, vb(c, 0), vb(c, 1)),
                    b = P(b);
            else
                throw Error("conj on a map takes map entries or seqables of map entries");
        }
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.M(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    var fg = new Gg(null, 0, null, !1, null, $c);
    function Ig(a, b) {
        for (var c = a.length, d = 0, e = mc(fg); ;)
            if (d < c) {
                if (b.length <= d)
                    throw Error(["No value supplied for key: ", z.ic(a[d])].join(""));
                var f = d + 1;
                e = pc(e, a[d], b[d]);
                d = f
            } else
                return oc(e)
    }
    Gg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function Hg(a, b, c, d) {
        this.I = {};
        this.root = a;
        this.count = b;
        this.ja = c;
        this.ia = d;
        this.g = 259;
        this.v = 56
    }
    function Jg(a, b, c) {
        if (a.I) {
            if (null == b)
                a.ia !== c && (a.ia = c),
                    a.ja || (a.count += 1,
                        a.ja = !0);
            else {
                var d = new hg;
                b = (null == a.root ? rg : a.root).ra(a.I, 0, Kc(b), b, c, d);
                b !== a.root && (a.root = b);
                d.O && (a.count += 1)
            }
            return a
        }
        throw Error("assoc! after persistent!");
    }
    g = Hg.prototype;
    g.K = function () {
        if (this.I)
            return this.count;
        throw Error("count after persistent!");
    }
        ;
    g.M = function (a, b) {
        return null == b ? this.ja ? this.ia : null : null == this.root ? null : this.root.Sa(0, Kc(b), b)
    }
        ;
    g.B = function (a, b, c) {
        return null == b ? this.ja ? this.ia : c : null == this.root ? c : this.root.Sa(0, Kc(b), b, c)
    }
        ;
    g.Za = function (a, b) {
        a: if (this.I)
            if (Mf(b))
                a = Jg(this, Nf.ic ? Nf.ic(b) : Nf.call(null, b), Of.ic ? Of.ic(b) : Of.call(null, b));
            else if (Od(b))
                a = Jg(this, b.ic ? b.ic(0) : b.call(null, 0), b.ic ? b.ic(1) : b.call(null, 1));
            else
                for (a = J(b),
                    b = this; ;) {
                    var c = N(a);
                    if (w(c))
                        a = P(a),
                            b = Jg(b, Nf.ic ? Nf.ic(c) : Nf.call(null, c), Of.ic ? Of.ic(c) : Of.call(null, c));
                    else {
                        a = b;
                        break a
                    }
                }
        else
            throw Error("conj! after persistent");
        return a
    }
        ;
    g.hb = function () {
        if (this.I) {
            this.I = null;
            var a = new Gg(null, this.count, this.root, this.ja, this.ia, null)
        } else
            throw Error("persistent! called twice");
        return a
    }
        ;
    g.Ya = function (a, b, c) {
        return Jg(this, b, c)
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.M(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    var Lg = function Lg(a) {
        for (var c = [], d = arguments.length, e = 0; ;)
            if (e < d)
                c.push(arguments[e]),
                    e += 1;
            else
                break;
        return Lg.l(0 < c.length ? new Qc(c.slice(0), 0, null) : null)
    };
    Lg.l = function (a) {
        a = a instanceof Qc && 0 === a.j ? a.zc : jb(a);
        var b = a.length;
        if (!Vd(b))
            throw Error(["Argument must be an integer: ", z.ic(b)].join(""));
        if (0 !== (b & 1))
            throw Error(["No value supplied for key: ", z.ic(vd(a))].join(""));
        return Cd(a)
    }
        ;
    Lg.G = 0;
    Lg.F = function (a) {
        return this.l(J(a))
    }
        ;
    function Mg(a, b) {
        this.H = a;
        this.va = b;
        this.g = 32374988;
        this.v = 0
    }
    g = Mg.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.va
    }
        ;
    g.aa = function () {
        var a = (null != this.H ? this.H.g & 128 || t === this.H.eb || (this.H.g ? 0 : x(Bb, this.H)) : x(Bb, this.H)) ? this.H.aa() : P(this.H);
        return null == a ? null : new Mg(a, null)
    }
        ;
    g.T = function () {
        return Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return this.H.ba(null).key
    }
        ;
    g.ga = function () {
        var a = (null != this.H ? this.H.g & 128 || t === this.H.eb || (this.H.g ? 0 : x(Bb, this.H)) : x(Bb, this.H)) ? this.H.aa() : P(this.H);
        return null != a ? new Mg(a, null) : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.va ? this : new Mg(this.H, b)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    Mg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function bg(a) {
        return (a = J(a)) ? new Mg(a, null) : null
    }
    function Nf(a) {
        return Jb(a)
    }
    function Ng(a, b) {
        this.H = a;
        this.va = b;
        this.g = 32374988;
        this.v = 0
    }
    g = Ng.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.U = function () {
        return this.va
    }
        ;
    g.aa = function () {
        var a = (null != this.H ? this.H.g & 128 || t === this.H.eb || (this.H.g ? 0 : x(Bb, this.H)) : x(Bb, this.H)) ? this.H.aa() : P(this.H);
        return null == a ? null : new Ng(a, null)
    }
        ;
    g.T = function () {
        return Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        return ud(b, c, this)
    }
        ;
    g.ba = function () {
        return this.H.ba(null).O
    }
        ;
    g.ga = function () {
        var a = (null != this.H ? this.H.g & 128 || t === this.H.eb || (this.H.g ? 0 : x(Bb, this.H)) : x(Bb, this.H)) ? this.H.aa() : P(this.H);
        return null != a ? new Ng(a, null) : Tc
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.V = function (a, b) {
        return b === this.va ? this : new Ng(this.H, b)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    Ng.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function cg(a) {
        return (a = J(a)) ? new Ng(a, null) : null
    }
    function Of(a) {
        return Kb(a)
    }
    var Og = function Og(a) {
        for (var c = [], d = arguments.length, e = 0; ;)
            if (e < d)
                c.push(arguments[e]),
                    e += 1;
            else
                break;
        return Og.l(0 < c.length ? new Qc(c.slice(0), 0, null) : null)
    };
    Og.l = function (a) {
        return w(Ve(he, a)) ? fe(function (b, c) {
            return wd.fc(w(b) ? b : Te, c)
        }, a) : null
    }
        ;
    Og.G = 0;
    Og.F = function (a) {
        return this.l(J(a))
    }
        ;
    function Pg(a, b) {
        var c = Te;
        for (b = J(b); ;)
            if (b) {
                var d = N(b)
                    , e = D.Ac(a, d, Qg);
                c = Re(e, Qg) ? V.Ac(c, d, e) : c;
                b = P(b)
            } else
                return Rb(c, Id(a))
    }
    function Rg(a) {
        this.ab = a
    }
    Rg.prototype.ha = function () {
        return this.ab.ha()
    }
        ;
    Rg.prototype.next = function () {
        if (this.ab.ha())
            return this.ab.next().key;
        throw Error("No such element");
    }
        ;
    Rg.prototype.remove = function () {
        return Error("Unsupported operation")
    }
        ;
    function Sg(a, b, c) {
        this.m = a;
        this.Pa = b;
        this.u = c;
        this.g = 15077647;
        this.v = 139268
    }
    g = Sg.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.keys = function () {
        return Vc(J(this))
    }
        ;
    g.entries = function () {
        return new Yf(J(J(this)))
    }
        ;
    g.values = function () {
        return Vc(J(this))
    }
        ;
    g.has = function (a) {
        return Wd(this, a)
    }
        ;
    g.forEach = function (a) {
        for (var b = J(this), c = null, d = 0, e = 0; ;)
            if (e < d) {
                var f = c.C(null, e)
                    , h = Bd(f, 0, null);
                f = Bd(f, 1, null);
                a.fc ? a.fc(f, h) : a.call(null, f, h);
                e += 1
            } else if (b = J(b))
                Pd(b) ? (c = tc(b),
                    b = uc(b),
                    h = c,
                    d = U(c),
                    c = h) : (c = N(b),
                        h = Bd(c, 0, null),
                        f = Bd(c, 1, null),
                        a.fc ? a.fc(f, h) : a.call(null, f, h),
                        b = P(b),
                        c = null,
                        d = 0),
                    e = 0;
            else
                return null
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        a = Gb(this.Pa, b);
        return w(a) ? Jb(a) : c
    }
        ;
    g.oa = function () {
        return new Rg(zc(this.Pa))
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.K = function () {
        return pb(this.Pa)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Zc(this)
    }
        ;
    g.P = function (a, b) {
        if (a = Kd(b))
            if (a = U(this) === U(b))
                try {
                    return ge(function (c, d) {
                        return (c = Wd(b, d)) ? c : new ad(!1)
                    }, this.Pa)
                } catch (c) {
                    if (c instanceof Error)
                        return !1;
                    throw c;
                }
            else
                return a;
        else
            return a
    }
        ;
    g.Xa = function () {
        return new Tg(mc(this.Pa))
    }
        ;
    g.W = function () {
        return Rb(Ug, this.m)
    }
        ;
    g.N = function () {
        return bg(this.Pa)
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Sg(b, this.Pa, this.u)
    }
        ;
    g.Y = function (a, b) {
        return new Sg(this.m, V.Ac(this.Pa, b, null), null)
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return this.M(null, a)
    }
        ;
    g.fc = function (a, b) {
        return this.B(null, a, b)
    }
        ;
    var Ug = new Sg(null, Te, $c);
    Sg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function Tg(a) {
        this.Na = a;
        this.v = 136;
        this.g = 259
    }
    g = Tg.prototype;
    g.Za = function (a, b) {
        this.Na = pc(this.Na, b, null);
        return this
    }
        ;
    g.hb = function () {
        return new Sg(null, oc(this.Na), null)
    }
        ;
    g.K = function () {
        return U(this.Na)
    }
        ;
    g.M = function (a, b) {
        return this.B(null, b, null)
    }
        ;
    g.B = function (a, b, c) {
        return Db(this.Na, b, Rd) === Rd ? c : b
    }
        ;
    g.call = function (a) {
        switch (arguments.length - 1) {
            case 1:
                return this.ic(arguments[1]);
            case 2:
                return this.fc(arguments[1], arguments[2]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length - 1)].join(""));
        }
    }
        ;
    g.apply = function (a, b) {
        return this.call.apply(this, [this].concat(ib(b)))
    }
        ;
    g.ic = function (a) {
        return Db(this.Na, a, Rd) === Rd ? null : a
    }
        ;
    g.fc = function (a, b) {
        return Db(this.Na, a, Rd) === Rd ? b : a
    }
        ;
    function Vg(a) {
        if (Kd(a))
            return Hd(a, null);
        a = J(a);
        if (null == a)
            return Ug;
        if (a instanceof Qc && 0 === a.j) {
            a = a.zc;
            for (var b = a.length, c = mc(Ug), d = 0; ;)
                if (d < b)
                    nc(c, a[d]),
                        d += 1;
                else
                    break;
            return oc(c)
        }
        for (c = mc(Ug); ;)
            if (null != a)
                b = P(a),
                    c = nc(c, yb(a)),
                    a = b;
            else
                return oc(c)
    }
    function re(a) {
        if (null != a && (a.v & 4096 || t === a.Xb))
            return a.name;
        if ("string" === typeof a)
            return a;
        throw Error(["Doesn't support name: ", z.ic(a)].join(""));
    }
    function Wg(a, b) {
        var c = mc(Te);
        a = J(a);
        for (b = J(b); ;)
            if (a && b) {
                var d = N(a)
                    , e = N(b);
                c = pc(c, d, e);
                a = P(a);
                b = P(b)
            } else
                return oc(c)
    }
    function Aa(a, b, c) {
        this.start = a;
        this.step = b;
        this.count = c;
        this.g = 82;
        this.v = 0
    }
    g = Aa.prototype;
    g.K = function () {
        return this.count
    }
        ;
    g.ba = function () {
        return this.start
    }
        ;
    g.C = function (a, b) {
        return this.start + b * this.step
    }
        ;
    g.da = function (a, b, c) {
        return 0 <= b && b < this.count ? this.start + b * this.step : c
    }
        ;
    g.yb = function () {
        if (1 >= this.count)
            throw Error("-drop-first of empty chunk");
        return new Aa(this.start + this.step, this.step, this.count - 1)
    }
        ;
    function Yg(a, b, c) {
        this.j = a;
        this.end = b;
        this.step = c
    }
    Yg.prototype.ha = function () {
        return 0 < this.step ? this.j < this.end : this.j > this.end
    }
        ;
    Yg.prototype.next = function () {
        var a = this.j;
        this.j += this.step;
        return a
    }
        ;
    function Ba(a, b, c, d, e, f, h) {
        this.m = a;
        this.start = b;
        this.end = c;
        this.step = d;
        this.X = e;
        this.ob = f;
        this.u = h;
        this.g = 32375006;
        this.v = 140800
    }
    g = Ba.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.Cc = function () {
        if (null == this.X) {
            var a = this.K(null);
            32 < a ? (this.ob = new Ba(null, this.start + 32 * this.step, this.end, this.step, null, null, null),
                this.X = new Aa(this.start, this.step, 32)) : this.X = new Aa(this.start, this.step, a)
        }
    }
        ;
    g.C = function (a, b) {
        if (0 <= b && b < this.K(null))
            return this.start + b * this.step;
        if (0 <= b && this.start > this.end && 0 === this.step)
            return this.start;
        throw Error("Index out of bounds");
    }
        ;
    g.da = function (a, b, c) {
        return 0 <= b && b < this.K(null) ? this.start + b * this.step : 0 <= b && this.start > this.end && 0 === this.step ? this.start : c
    }
        ;
    g.oa = function () {
        return new Yg(this.start, this.end, this.step)
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return 0 < this.step ? this.start + this.step < this.end ? new Ba(null, this.start + this.step, this.end, this.step, null, null, null) : null : this.start + this.step > this.end ? new Ba(null, this.start + this.step, this.end, this.step, null, null, null) : null
    }
        ;
    g.K = function () {
        return Math.ceil((this.end - this.start) / this.step)
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return dd(this, b)
    }
        ;
    g.fa = function (a, b, c) {
        for (a = this.start; ;)
            if (0 < this.step ? a < this.end : a > this.end) {
                c = b.fc ? b.fc(c, a) : b.call(null, c, a);
                if (bd(c))
                    return C(c);
                a += this.step
            } else
                return c
    }
        ;
    g.ba = function () {
        return this.start
    }
        ;
    g.ga = function () {
        var a = this.aa();
        return null == a ? Tc : a
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.qb = function () {
        this.Cc();
        return this.X
    }
        ;
    g.Va = function () {
        this.Cc();
        return null == this.ob ? Tc : this.ob
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Ba(b, this.start, this.end, this.step, this.X, this.ob, this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    g.zb = function () {
        return J(this.Va(null))
    }
        ;
    Ba.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function Zg(a, b, c, d, e, f, h) {
        this.m = a;
        this.start = b;
        this.end = c;
        this.step = d;
        this.X = e;
        this.ob = f;
        this.u = h;
        this.v = 140800;
        this.g = 32374988
    }
    g = Zg.prototype;
    g.toString = function () {
        return Bc(this)
    }
        ;
    g.indexOf = function () {
        var a = null;
        a = function (b, c) {
            switch (arguments.length) {
                case 1:
                    return T(this, b, 0);
                case 2:
                    return T(this, b, c)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        a.ic = function (b) {
            return T(this, b, 0)
        }
            ;
        a.fc = function (b, c) {
            return T(this, b, c)
        }
            ;
        return a
    }();
    g.lastIndexOf = function () {
        function a(c) {
            return ld(this, c, U(this))
        }
        var b = null;
        b = function (c, d) {
            switch (arguments.length) {
                case 1:
                    return a.call(this, c);
                case 2:
                    return ld(this, c, d)
            }
            throw Error("Invalid arity: " + arguments.length);
        }
            ;
        b.ic = a;
        b.fc = function (c, d) {
            return ld(this, c, d)
        }
            ;
        return b
    }();
    g.Cc = function () {
        if (null == this.X) {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            a: {
                var b = 0;
                for (var c = this.start; ;)
                    if (32 > b) {
                        if (a[b] = c,
                            b += 1,
                            c += this.step,
                            !(0 < this.step ? c < this.end : c > this.end)) {
                            b = this.X = new ve(a, 0, b);
                            break a
                        }
                    } else {
                        b = c;
                        break a
                    }
            }
            null == this.X && (this.X = new ve(a, 0, 32),
                (0 < this.step ? b < this.end : b > this.end) && (this.ob = new Zg(null, b, this.end, this.step, null, null, null)))
        }
    }
        ;
    g.oa = function () {
        return new Yg(this.start, this.end, this.step)
    }
        ;
    g.U = function () {
        return this.m
    }
        ;
    g.aa = function () {
        return 0 < this.step ? this.start + this.step < this.end ? new Zg(null, this.start + this.step, this.end, this.step, null, null, null) : null : this.start + this.step > this.end ? new Zg(null, this.start + this.step, this.end, this.step, null, null, null) : null
    }
        ;
    g.T = function () {
        var a = this.u;
        return null != a ? a : this.u = a = Xc(this)
    }
        ;
    g.P = function (a, b) {
        return pd(this, b)
    }
        ;
    g.W = function () {
        return Tc
    }
        ;
    g.ea = function (a, b) {
        return sd(b, this)
    }
        ;
    g.fa = function (a, b, c) {
        for (a = this.start; ;)
            if (0 < this.step ? a < this.end : a > this.end) {
                c = b.fc ? b.fc(c, a) : b.call(null, c, a);
                if (bd(c))
                    return C(c);
                a += this.step
            } else
                return c
    }
        ;
    g.ba = function () {
        return this.start
    }
        ;
    g.ga = function () {
        var a = this.aa();
        return null == a ? Tc : a
    }
        ;
    g.N = function () {
        return this
    }
        ;
    g.qb = function () {
        this.Cc();
        return this.X
    }
        ;
    g.Va = function () {
        this.Cc();
        return null == this.ob ? Tc : this.ob
    }
        ;
    g.V = function (a, b) {
        return b === this.m ? this : new Zg(b, this.start, this.end, this.step, this.X, this.ob, this.u)
    }
        ;
    g.Y = function (a, b) {
        return qd(b, this)
    }
        ;
    g.zb = function () {
        return J(this.Va(null))
    }
        ;
    Zg.prototype[hb] = function () {
        return Vc(this)
    }
        ;
    function nd() {
        var a = U(bh);
        return ch(0, a)
    }
    function ch(a, b) {
        return b <= a ? Tc : Vd(a) && Vd(b) && Vd(1) ? new Ba(null, a, b, 1, null, null, null) : new Zg(null, a, b, 1, null, null, null)
    }
    function dh(a) {
        a: for (var b = a; ;)
            if (b = J(b))
                b = P(b);
            else
                break a;
        return a
    }
    function eh(a, b, c, d, e, f, h) {
        var k = Ta;
        Ta = null == Ta ? null : Ta - 1;
        try {
            if (null != Ta && 0 > Ta)
                return gc(a, "#");
            gc(a, c);
            if (0 === Za.ic(f))
                J(h) && gc(a, function () {
                    var y = fh.ic(f);
                    return w(y) ? y : "..."
                }());
            else {
                if (J(h)) {
                    var l = N(h);
                    b.Ac ? b.Ac(l, a, f) : b.call(null, l, a, f)
                }
                for (var m = P(h), n = Za.ic(f) - 1; ;)
                    if (!m || null != n && 0 === n) {
                        J(m) && 0 === n && (gc(a, d),
                            gc(a, function () {
                                var y = fh.ic(f);
                                return w(y) ? y : "..."
                            }()));
                        break
                    } else {
                        gc(a, d);
                        var p = N(m);
                        c = a;
                        h = f;
                        b.Ac ? b.Ac(p, c, h) : b.call(null, p, c, h);
                        var r = P(m);
                        c = n - 1;
                        m = r;
                        n = c
                    }
            }
            return gc(a, e)
        } finally {
            Ta = k
        }
    }
    function gh(a, b) {
        b = J(b);
        for (var c = null, d = 0, e = 0; ;)
            if (e < d) {
                var f = c.C(null, e);
                gc(a, f);
                e += 1
            } else if (b = J(b))
                c = b,
                    Pd(c) ? (b = tc(c),
                        d = uc(c),
                        c = b,
                        f = U(b),
                        b = d,
                        d = f) : (f = N(c),
                            gc(a, f),
                            b = P(c),
                            c = null,
                            d = 0),
                    e = 0;
            else
                return null
    }
    var hh = {
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t"
    };
    function ih(a) {
        return ['"', z.ic(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function (b) {
            return hh[b]
        })), '"'].join("")
    }
    function jh(a, b) {
        return (a = Ud(D.fc(a, Xa))) ? (a = null != b ? b.g & 131072 || t === b.Wb ? !0 : !1 : !1) ? null != Id(b) : a : a
    }
    function kh(a, b, c) {
        if (null == a)
            return gc(b, "nil");
        if (jh(c, a)) {
            gc(b, "^");
            var d = Id(a);
            lh.Ac ? lh.Ac(d, b, c) : lh.call(null, d, b, c);
            gc(b, " ")
        }
        if (a.Kb)
            return a.ec(b);
        if (null != a ? a.g & 2147483648 || t === a.Z || (a.g ? 0 : x(hc, a)) : x(hc, a))
            return ic(a, b, c);
        if (!0 === a || !1 === a)
            return gc(b, z.ic(a));
        if ("number" === typeof a)
            return gc(b, isNaN(a) ? "##NaN" : a === Number.POSITIVE_INFINITY ? "##Inf" : a === Number.NEGATIVE_INFINITY ? "##-Inf" : z.ic(a));
        if (cb(a))
            return gc(b, "#js "),
                d = Z.fc(function (f) {
                    var h = /[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/;
                    if ("string" === typeof f)
                        h = h.exec(f),
                            h = null != h && R.fc(h[0], f) ? 1 === h.length ? h[0] : Lf(h) : null;
                    else
                        throw new TypeError("re-matches must match against a string.");
                    return new Ef(null != h ? qe.ic(f) : f, a[f])
                }, fa(a)),
                mh.o ? mh.o(d, lh, b, c) : mh.call(null, d, lh, b, c);
        if (ab(a))
            return eh(b, lh, "#js [", " ", "]", c, a);
        if ("string" === typeof a)
            return w(Wa.ic(c)) ? gc(b, ih(a)) : gc(b, a);
        if ("function" === typeof a) {
            var e = a.name;
            c = w(function () {
                var f = null == e;
                return f ? f : /^[\s\xa0]*$/.test(e)
            }()) ? "Function" : e;
            return gh(b, rd(["#object[", c, w(!1) ? [' "', z.ic(a), '"'].join("") : "", "]"]))
        }
        if (a instanceof Date)
            return c = function (f, h) {
                for (f = z.ic(f); ;)
                    if (f.length < h)
                        f = ["0", f].join("");
                    else
                        return f
            }
                ,
                gh(b, rd(['#inst "', c(a.getUTCFullYear(), 4), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"']));
        if (a instanceof RegExp)
            return gh(b, rd(['#"', a.source, '"']));
        if ("symbol" === q(a) || "undefined" !== typeof Symbol && a instanceof Symbol)
            return gh(b, rd(["#object[", a.toString(), "]"]));
        if (w(function () {
            var f = null == a ? null : a.constructor;
            return null == f ? null : f.tb
        }()))
            return gh(b, rd(["#object[", a.constructor.tb.replace(RegExp("/", "g"), "."), "]"]));
        e = function () {
            var f = null == a ? null : a.constructor;
            return null == f ? null : f.name
        }();
        c = w(function () {
            var f = null == e;
            return f ? f : /^[\s\xa0]*$/.test(e)
        }()) ? "Object" : e;
        return null == a.constructor ? gh(b, rd(["#object[", c, "]"])) : gh(b, rd(["#object[", c, " ", z.ic(a), "]"]))
    }
    function lh(a, b, c) {
        var d = nh.ic(c);
        return w(d) ? (c = V.Ac(c, oh, kh),
            d.Ac ? d.Ac(a, b, c) : d.call(null, a, b, c)) : kh(a, b, c)
    }
    function qh(a) {
        var b = Ua();
        if (null == a || bb(J(a)))
            b = "";
        else {
            var c = z
                , d = c.ic
                , e = new Oa
                , f = new Ac(e);
            lh(N(a), f, b);
            a = J(P(a));
            for (var h = null, k = 0, l = 0; ;)
                if (l < k) {
                    var m = h.C(null, l);
                    gc(f, " ");
                    lh(m, f, b);
                    l += 1
                } else if (a = J(a))
                    h = a,
                        Pd(h) ? (a = tc(h),
                            k = uc(h),
                            h = a,
                            m = U(a),
                            a = k,
                            k = m) : (m = N(h),
                                gc(f, " "),
                                lh(m, f, b),
                                a = P(h),
                                h = null,
                                k = 0),
                        l = 0;
                else
                    break;
            b = d.call(c, e)
        }
        return b
    }
    function rh(a) {
        return a instanceof Nc ? Oc.fc(null, re(a)) : qe.fc(null, re(a))
    }
    function sh(a) {
        if (w(!1)) {
            var b = J(a)
                , c = J(b)
                , d = N(c);
            P(c);
            Bd(d, 0, null);
            Bd(d, 1, null);
            c = zd(a);
            for (a = null; ;) {
                d = a;
                b = J(b);
                a = N(b);
                var e = P(b)
                    , f = a;
                a = Bd(f, 0, null);
                b = Bd(f, 1, null);
                if (w(f))
                    if (a instanceof F || a instanceof Nc)
                        if (w(d))
                            if (R.fc(d, pe(a)))
                                c = V.Ac(c, rh(a), b),
                                    a = d,
                                    b = e;
                            else
                                return null;
                        else if (d = pe(a),
                            w(d))
                            c = V.Ac(c, rh(a), b),
                                a = d,
                                b = e;
                        else
                            return null;
                    else
                        return null;
                else
                    return new Df(null, 2, 5, Ff, [d, c], null)
            }
        } else
            return null
    }
    function th(a, b, c, d, e) {
        return eh(d, function (f, h, k) {
            var l = Jb(f);
            c.Ac ? c.Ac(l, h, k) : c.call(null, l, h, k);
            gc(h, " ");
            f = Kb(f);
            return c.Ac ? c.Ac(f, h, k) : c.call(null, f, h, k)
        }, [z.ic(a), "{"].join(""), ", ", "}", e, J(b))
    }
    function mh(a, b, c, d) {
        var e = Md(a) ? sh(a) : null
            , f = Bd(e, 0, null);
        e = Bd(e, 1, null);
        return w(f) ? th(["#:", z.ic(f)].join(""), e, b, c, d) : th(null, a, b, c, d)
    }
    Qc.prototype.Z = t;
    Qc.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    se.prototype.Z = t;
    se.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Ef.prototype.Z = t;
    Ef.prototype.S = function (a, b, c) {
        return eh(b, lh, "[", " ", "]", c, this)
    }
        ;
    Bg.prototype.Z = t;
    Bg.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    $f.prototype.Z = t;
    $f.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Wc.prototype.Z = t;
    Wc.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Pf.prototype.Z = t;
    Pf.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    ne.prototype.Z = t;
    ne.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    od.prototype.Z = t;
    od.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Ba.prototype.Z = t;
    Ba.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Gg.prototype.Z = t;
    Gg.prototype.S = function (a, b, c) {
        return mh(this, lh, b, c)
    }
        ;
    Dg.prototype.Z = t;
    Dg.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Sg.prototype.Z = t;
    Sg.prototype.S = function (a, b, c) {
        return eh(b, lh, "#{", " ", "}", c, this)
    }
        ;
    xe.prototype.Z = t;
    xe.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    af.prototype.Z = t;
    af.prototype.S = function (a, b, c) {
        gc(b, "#object[cljs.core.Atom ");
        lh(new u(null, 1, [uh, this.state], null), b, c);
        return gc(b, "]")
    }
        ;
    Ng.prototype.Z = t;
    Ng.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Df.prototype.Z = t;
    Df.prototype.S = function (a, b, c) {
        return eh(b, lh, "[", " ", "]", c, this)
    }
        ;
    le.prototype.Z = t;
    le.prototype.S = function (a, b) {
        return gc(b, "()")
    }
        ;
    u.prototype.Z = t;
    u.prototype.S = function (a, b, c) {
        return mh(this, lh, b, c)
    }
        ;
    Zg.prototype.Z = t;
    Zg.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Mg.prototype.Z = t;
    Mg.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    yd.prototype.Z = t;
    yd.prototype.S = function (a, b, c) {
        return eh(b, lh, "(", " ", ")", c, this)
    }
        ;
    Nc.prototype.bb = t;
    Nc.prototype.Wa = function (a, b) {
        if (b instanceof Nc)
            return Mc(this, b);
        throw Error(["Cannot compare ", z.ic(this), " to ", z.ic(b)].join(""));
    }
        ;
    F.prototype.bb = t;
    F.prototype.Wa = function (a, b) {
        if (b instanceof F)
            return oe(this, b);
        throw Error(["Cannot compare ", z.ic(this), " to ", z.ic(b)].join(""));
    }
        ;
    Df.prototype.bb = t;
    Df.prototype.Wa = function (a, b) {
        if (Od(b))
            return Yd(this, b);
        throw Error(["Cannot compare ", z.ic(this), " to ", z.ic(b)].join(""));
    }
        ;
    Ef.prototype.bb = t;
    Ef.prototype.Wa = function (a, b) {
        if (Od(b))
            return Yd(this, b);
        throw Error(["Cannot compare ", z.ic(this), " to ", z.ic(b)].join(""));
    }
        ;
    function vh() { }
    function wh(a) {
        if (null != a && null != a.Sb)
            a = a.Sb(a);
        else {
            var b = wh[q(null == a ? null : a)];
            if (null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else if (b = wh._,
                null != b)
                a = b.ic ? b.ic(a) : b.call(null, a);
            else
                throw fb("IEncodeJS.-clj-\x3ejs", a);
        }
        return a
    }
    function xh(a, b) {
        return (null != a ? t === a.Rb || (a.Db ? 0 : x(vh, a)) : x(vh, a)) ? wh(a) : "string" === typeof a || "number" === typeof a || a instanceof F || a instanceof Nc ? b.ic ? b.ic(a) : b.call(null, a) : qh(rd([a]))
    }
    var yh = function yh(a) {
        for (var c = [], d = arguments.length, e = 0; ;)
            if (e < d)
                c.push(arguments[e]),
                    e += 1;
            else
                break;
        return yh.l(arguments[0], 1 < c.length ? new Qc(c.slice(1), 0, null) : null)
    };
    yh.l = function (a, b) {
        b = X(b);
        var c = D.Ac(b, zh, re)
            , d = function h(f) {
                if (null == f)
                    return null;
                if (null != f ? t === f.Rb || (f.Db ? 0 : x(vh, f)) : x(vh, f))
                    return wh(f);
                if (f instanceof F)
                    return c.ic ? c.ic(f) : c.call(null, f);
                if (f instanceof Nc)
                    return z.ic(f);
                if (Md(f)) {
                    var k = {};
                    f = J(f);
                    for (var l = null, m = 0, n = 0; ;)
                        if (n < m) {
                            var p = l.C(null, n)
                                , r = Bd(p, 0, null);
                            p = Bd(p, 1, null);
                            r = xh(r, d);
                            p = h(p);
                            k[r] = p;
                            n += 1
                        } else if (f = J(f))
                            Pd(f) ? (m = tc(f),
                                f = uc(f),
                                l = m,
                                m = U(m)) : (m = N(f),
                                    l = Bd(m, 0, null),
                                    m = Bd(m, 1, null),
                                    l = xh(l, d),
                                    m = h(m),
                                    k[l] = m,
                                    f = P(f),
                                    l = null,
                                    m = 0),
                                n = 0;
                        else
                            break;
                    return k
                }
                if (Jd(f)) {
                    k = [];
                    f = J(Z.fc(h, f));
                    l = null;
                    for (n = m = 0; ;)
                        if (n < m)
                            r = l.C(null, n),
                                k.push(r),
                                n += 1;
                        else if (f = J(f))
                            l = f,
                                Pd(l) ? (f = tc(l),
                                    n = uc(l),
                                    l = f,
                                    m = U(f),
                                    f = n) : (f = N(l),
                                        k.push(f),
                                        f = P(l),
                                        l = null,
                                        m = 0),
                                n = 0;
                        else
                            break;
                    return k
                }
                return f
            };
        return d(a)
    }
        ;
    yh.G = 1;
    yh.F = function (a) {
        var b = N(a);
        a = P(a);
        return this.l(b, a)
    }
        ;
    function Ah() { }
    function Bh(a, b) {
        if (null != a && null != a.Qb)
            a = a.Qb(a, b);
        else {
            var c = Bh[q(null == a ? null : a)];
            if (null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else if (c = Bh._,
                null != c)
                a = c.fc ? c.fc(a, b) : c.call(null, a, b);
            else
                throw fb("IEncodeClojure.-js-\x3eclj", a);
        }
        return a
    }
    function ij(a) {
        return Dh(a, rd([Eh, !1]))
    }
    function Dh(a, b) {
        var c = X(b);
        c = D.fc(c, Eh);
        var d = w(c) ? qe : z;
        return function h(f) {
            return (null != f ? t === f.oc || (f.Db ? 0 : x(Ah, f)) : x(Ah, f)) ? Bh(f, Me(Lg, b)) : (null == f ? 0 : null != f ? f.g & 64 || t === f.A || (f.g ? 0 : x(xb, f)) : x(xb, f)) ? dh(Z.fc(h, f)) : Mf(f) ? new Ef(h(Jb(f)), h(Kb(f))) : Jd(f) ? Nk(zd(f), Z.ic(h), f) : ab(f) ? oc(kb(function (k, l) {
                l = h(l);
                return nc(k, l)
            }, mc(xd), f)) : db(f) === Object ? oc(kb(function (k, l) {
                var m = d.ic ? d.ic(l) : d.call(null, l);
                l = h(O(f, l));
                return pc(k, m, l)
            }, mc(Te), fa(f))) : f
        }(a)
    }
    ; var Ka = new F(null, "show-notation", "show-notation", -1070729314)
        , Ih = new F(null, "new-html", "new-html", 1747475686)
        , Lh = new F(null, "center-left-pct", "center-left-pct", -1698591085)
        , Gh = new F(null, "NotationFiles", "NotationFiles", 1523281785)
        , Kh = new F(null, "angle", "angle", 1622094254)
        , Ha = new F(null, "coord", "coord", -1453656639)
        , Mh = new F(null, "center-left", "center-left", 49172678)
        , zl = new F(null, "onMousedownSquare", "onMousedownSquare", -262263630)
        , Nh = new F(null, "items-container-id", "items-container-id", 1710847349)
        , uh = new F(null, "val", "val", 128701612)
        , kc = new F(null, "on-change", "on-change", -732046149)
        , Oh = new F(null, "size", "size", 1098693007)
        , ah = new F(null, "start-x", "start-x", -193941684)
        , ph = new F(null, "start-y", "start-y", -771244577)
        , Ph = new F(null, "rank-idx", "rank-idx", 1726637510)
        , li = new F(null, "valid-fn", "valid-fn", -1326082256)
        , Qh = new F(null, "remove-el", "remove-el", 1434219205)
        , Rh = new F(null, "left", "left", -399115937)
        , Sh = new F(null, "capture?", "capture?", -741966441)
        , Xa = new F(null, "meta", "meta", 1499536964)
        , Th = new F(null, "square-\x3epiece-id", "square-\x3epiece-id", -1820965360)
        , Uh = new F(null, "top", "top", -1856271961)
        , dl = new F(null, "dragging-starting-square", "dragging-starting-square", -13619411)
        , Vh = new F(null, "right", "right", -452581833)
        , Nl = new F(null, "mouseDraggable", "mouseDraggable", 2079819797)
        , Wh = new F(null, "from", "from", 1815293044)
        , Fa = new F(null, "data", "data", -232669377)
        , Ia = new F(null, "html", "html", -998796897)
        , Xh = new F(null, "animate-speed-ms", "animate-speed-ms", -110361176)
        , ck = new F(null, "dragging-el", "dragging-el", -211205166)
        , Yh = new F(null, "source", "source", -433931539)
        , Zh = new F(null, "items", "items", 1031954938)
        , $h = new F(null, "animate", "animate", 1850194573)
        , bj = new F(null, "dragging-piece-id", "dragging-piece-id", 1842910239)
        , ai = new F(null, "defer-fn", "defer-fn", 2016113287)
        , ci = new F(null, "start", "start", -355208981)
        , di = new F(null, "num-cols", "num-cols", -911042386)
        , Sl = new F(null, "onMouseupSquare", "onMouseupSquare", -1366293260)
        , ei = new F(null, "capture-piece-id", "capture-piece-id", 789635268)
        , fi = new F(null, "instant?", "instant?", -2019232077)
        , gi = new F(null, "coords", "coords", -599429112)
        , lf = new F(null, "left-pct", "left-pct", 1200460558)
        , ii = new F(null, "piece-square-pct", "piece-square-pct", 514902445)
        , ki = new F(null, "color", "color", 1011675173)
        , Al = new F(null, "square-mouse-is-currently-hovering-over", "square-mouse-is-currently-hovering-over", -326215771)
        , Jh = new F(null, "NotationRanks", "NotationRanks", -1316137666)
        , Fe = new F(null, "onDrop", "onDrop", 41220475)
        , nh = new F(null, "alt-impl", "alt-impl", 670969595)
        , ni = new F(null, "opacity", "opacity", 397153780)
        , oi = new F(null, "piece", "piece", 1396691784)
        , pi = new F(null, "duration-ms", "duration-ms", 1993555055)
        , qi = new F(null, "root-el", "root-el", 1068654895)
        , ri = new F(null, "arrow-width", "arrow-width", 1926673833)
        , ce = new F(null, "distance", "distance", -1671893894)
        , Ek = new F(null, "dragging?", "dragging?", -995941410)
        , si = new F(null, "hidden?", "hidden?", 1339691380)
        , Qg = new F("cljs.core", "not-found", "cljs.core/not-found", -1572889185)
        , ti = new F(null, "show?", "show?", 1543842127)
        , yl = new F(null, "dragging-starting-piece", "dragging-starting-piece", 1374747404)
        , ui = new F(null, "delete-square-\x3epiece", "delete-square-\x3epiece", -1933366978)
        , vi = new F(null, "animation-end-callbacks", "animation-end-callbacks", -1844258358)
        , wi = new F(null, "destination", "destination", -253872483)
        , Ya = new F(null, "dup", "dup", 556298533)
        , Zi = new F(null, "default-val", "default-val", 1110970409)
        , xi = new F(null, "square", "square", 812434677)
        , Za = new F(null, "print-length", "print-length", 1931866356)
        , De = new F(null, "Squares", "Squares", 946930677)
        , Va = new F(null, "flush-on-newline", "flush-on-newline", -151457939)
        , zi = new F(null, "animateSpeed", "animateSpeed", -261442538)
        , Ai = new F(null, "onComplete", "onComplete", -661010670)
        , Gj = new F(null, "touchMove", "touchMove", -1767817390)
        , xc = new F(null, "squares-container-id", "squares-container-id", 2018754960)
        , Ch = new F(null, "onDragStart", "onDragStart", -2108300997)
        , mi = new F(null, "show-notation?", "show-notation?", -192510961)
        , Ci = new F(null, "fade-out-piece", "fade-out-piece", -367103352)
        , Eh = new F(null, "keywordize-keys", "keywordize-keys", 1310784252)
        , Di = new F(null, "show-coords?", "show-coords?", -351670346)
        , Ol = new F(null, "touchDraggable", "touchDraggable", -2032933022)
        , Lj = new F(null, "onTouchSquare", "onTouchSquare", 1002083556)
        , Ei = new F(null, "to", "to", 192099007)
        , Fi = new F(null, "arrow-height", "arrow-height", 110204050)
        , Gi = new F(null, "y", "y", -1757859776)
        , Hi = new F(null, "file-idx", "file-idx", 2008975387)
        , Ii = new F(null, "x", "x", 2099068185)
        , Fh = new F(null, "head-width", "head-width", -652130664)
        , Ji = new F(null, "bottom", "bottom", -1550509018)
        , hi = new F(null, "onSnapEnd", "onSnapEnd", -1317688335)
        , Ki = new F(null, "container-id", "container-id", 1274665684)
        , Tl = new F(null, "onMouseenterSquare", "onMouseenterSquare", 1147925211)
        , Pl = new F(null, "onDragMove", "onDragMove", 810982990)
        , Vj = new F(null, "onChange", "onChange", -312891301)
        , Li = new F(null, "position", "position", -2011731912)
        , oh = new F(null, "fallback-impl", "fallback-impl", -1501286995)
        , Mi = new F(null, "num-rows", "num-rows", 406644986)
        , Ja = new F(null, "html-str", "html-str", 494765866)
        , Ee = new F(null, "square-\x3esquare-ids", "square-\x3esquare-ids", 768519898)
        , Ni = new F(null, "height", "height", 1025178622)
        , Oi = new F(null, "fen-code", "fen-code", -498385731)
        , Pi = new F(null, "orientation", "orientation", 623557579)
        , Wa = new F(null, "readably", "readably", 1129599760)
        , zh = new F(null, "keyword-fn", "keyword-fn", -64566675)
        , Qi = new F(null, "on-finish", "on-finish", 743031869)
        , Ri = new F(null, "board-width", "board-width", -1036611769)
        , Si = new F(null, "id", "id", -1388402092)
        , Ti = new F(null, "center-top", "center-top", 1455140316)
        , Ui = new F(null, "width", "width", -384071477)
        , Ub = new F(null, "board-height", "board-height", -2028928684)
        , yk = new F(null, "draggable", "draggable", 1676206163)
        , Wi = new F(null, "end", "end", -268185958)
        , La = new F(null, "className", "className", -1983287057)
        , Ml = new F(null, "dropOffBoard", "dropOffBoard", 673565619)
        , Hh = new F(null, "line-width", "line-width", -906934988)
        , Yi = new F(null, "_color", "_color", -343016222)
        , Xi = new F(null, "new-square-\x3epiece", "new-square-\x3epiece", -2093972477)
        , Ll = new F(null, "onMouseleaveSquare", "onMouseleaveSquare", 1699519615)
        , yi = new F(null, "center-top-pct", "center-top-pct", 978561977)
        , $g = new F(null, "top-pct", "top-pct", 48769222)
        , bi = new F(null, "base-offset", "base-offset", 643283679)
        , $i = new F(null, "type", "type", 1174270348)
        , fh = new F(null, "more-marker", "more-marker", -14717935)
        , cj = new F(null, "board-orientation", "board-orientation", 1715600461);
    function uj(a, b, c) {
        var d = w(b.ignoreCase) ? "gi" : "g";
        d = w(b.multiline) ? [d, "m"].join("") : d;
        return a.replace(new RegExp(b.source, w(b.unicode) ? [d, "u"].join("") : d), c)
    }
    function vj(a) {
        return function () {
            function b(d) {
                var e = null;
                if (0 < arguments.length) {
                    e = 0;
                    for (var f = Array(arguments.length - 0); e < f.length;)
                        f[e] = arguments[e + 0],
                            ++e;
                    e = new Qc(f, 0, null)
                }
                return c.call(this, e)
            }
            function c(d) {
                d = ef(d);
                if (R.fc(U(d), 1))
                    return d = N(d),
                        a.ic ? a.ic(d) : a.call(null, d);
                d = Lf(d);
                return a.ic ? a.ic(d) : a.call(null, d)
            }
            b.G = 0;
            b.F = function (d) {
                d = J(d);
                return c(d)
            }
                ;
            b.l = c;
            return b
        }()
    }
    function wj(a, b, c) {
        if ("string" === typeof b)
            return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c);
        if (b instanceof RegExp)
            return "string" === typeof c ? uj(a, b, c) : uj(a, b, vj(c));
        throw ["Invalid match arg: ", z.ic(b)].join("");
    }
    function Kg(a) {
        var b = new Oa;
        for (a = J(a); ;)
            if (null != a)
                b.append(z.ic(N(a))),
                    a = P(a),
                    null != a && b.append(", ");
            else
                return b.toString()
    }
    ; var sj = Ig("bB wP wK wR bN bQ bK bR wQ wB wN bP".split(" "), '\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/\x3e\x3cpath d\x3d"M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke\x3d"#fff" stroke-linecap\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" fill\x3d"#fff" stroke\x3d"#000" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linecap\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22.5 11.63V6"/\x3e\x3cpath d\x3d"M20 8h5"/\x3e\x3c/g\x3e\x3cpath d\x3d"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-width\x3d"1.5" fill\x3d"#fff"/\x3e\x3cg stroke-width\x3d"1.5" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"\x3e\x3cpath d\x3d"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill\x3d"#fff"/\x3e\x3cpath d\x3d"M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"#fff" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 39h27v-3H9v3z"/\x3e\x3cpath d\x3d"M12 36v-4h21v4H12z"/\x3e\x3cpath d\x3d"M11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap\x3d"butt"/\x3e\x3cpath d\x3d"M34 14l-3 3H14l-3-3" stroke-linecap\x3d"round"/\x3e\x3c/g\x3e\x3cpath d\x3d"M31 17v12.5H14V17" stroke-linecap\x3d"butt" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cg stroke-linecap\x3d"round"\x3e\x3cpath d\x3d"M31 29.5l1.5 2.5h-20l1.5-2.5" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M11 14h23" fill\x3d"none" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#000" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/\x3e\x3cpath d\x3d"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/\x3e\x3c/g\x3e\x3cg fill\x3d"#fff"\x3e\x3cpath d\x3d"M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin\x3d"round" stroke-width\x3d"1.5" stroke\x3d"#fff"/\x3e\x3cpath d\x3d"M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16l-.51-.1z" stroke\x3d"none"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/\x3e\x3cpath d\x3d"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/\x3e\x3cpath d\x3d"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" stroke-linecap\x3d"round"/\x3e\x3ccircle cx\x3d"6" cy\x3d"12" r\x3d"2"/\x3e\x3ccircle cx\x3d"14" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"22.5" cy\x3d"8" r\x3d"2"/\x3e\x3ccircle cx\x3d"31" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"39" cy\x3d"12" r\x3d"2"/\x3e\x3cpath d\x3d"M11 38.5a35 35 1 0 0 23 0" stroke-linecap\x3d"butt" fill\x3d"none"/\x3e\x3c/g\x3e\x3cpath d\x3d"M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0" fill\x3d"none" stroke\x3d"#fff" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22.5 11.63V6" stroke-linecap\x3d"round"/\x3e\x3cpath d\x3d"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap\x3d"butt" fill\x3d"#000"/\x3e\x3c/g\x3e\x3cg stroke-linecap\x3d"round"\x3e\x3cpath d\x3d"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M20 8h5" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5m-.5.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" stroke-width\x3d"1.5" stroke-linejoin\x3d"round" stroke\x3d"#fff"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20z"/\x3e\x3cpath d\x3d"M12 36v-4h21v4H12z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M14 29.5v-13h17v13H14z" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cg stroke-linejoin\x3d"round"\x3e\x3cpath d\x3d"M14 16.5L11 14h23l-3 2.5H14z" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-width\x3d"1.5"/\x3e\x3c/g\x3e\x3cpath d\x3d"M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" stroke-linejoin\x3d"miter" fill\x3d"none" stroke\x3d"#fff" stroke-width\x3d"1" stroke-linecap\x3d"round"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"#fff" stroke\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/\x3e\x3cpath d\x3d"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/\x3e\x3cpath d\x3d"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill\x3d"none"/\x3e\x3ccircle cx\x3d"6" cy\x3d"12" r\x3d"2"/\x3e\x3ccircle cx\x3d"14" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"22.5" cy\x3d"8" r\x3d"2"/\x3e\x3ccircle cx\x3d"31" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"39" cy\x3d"12" r\x3d"2"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#fff" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/\x3e\x3cpath d\x3d"M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linecap\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#fff" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/\x3e\x3cpath d\x3d"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/\x3e\x3c/g\x3e\x3cpath d\x3d"M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" stroke\x3d"#000" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e'.split(";"));
    function tj() {
        return Me(z, cf(12, ff(function () {
            var a = U("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
            return jd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Math.floor(Math.random() * a))
        })))
    }
    ; var yj = Vg("rnbqkpRNBQKP".split(""))
        , zj = Lf("abcdefgh".split(""));
    function Aj(a) {
        return wj(wj(wj(wj(wj(wj(wj(a, "8", "11111111"), "7", "1111111"), "6", "111111"), "5", "11111"), "4", "1111"), "3", "111"), "2", "11")
    }
    function Bj(a) {
        a = Aj(wj(a, / .+$/, ""));
        a = me(a.split("/"));
        a = kf($e(function (b, c) {
            return $e(function (d, e) {
                return new u(null, 3, [Ph, b, Hi, d, Oi, e], null)
            }, c)
        }, a));
        return kb(function (b, c) {
            c = X(c);
            var d = D.fc(c, Hi)
                , e = D.fc(c, Ph);
            c = D.fc(c, Oi);
            return Wd(yj, c) ? (d = [z.ic(jd(zj, d)), z.ic(e + 1)].join(""),
                e = V.Ac,
                c = R.fc(c, c.toLowerCase()) ? ["b", c.toUpperCase()].join("") : ["w", c.toUpperCase()].join(""),
                e.call(V, b, d, c)) : b
        }, Te, a)
    }
    function Cj(a) {
        var b = ch(0, 8)
            , c = ch(1, 9)
            , d = function () {
                return function h(f) {
                    return new se(null, function () {
                        for (var k = f; ;) {
                            var l = J(k);
                            if (l) {
                                var m = l
                                    , n = N(m);
                                if (l = J(function (p, r, y, B, A, M) {
                                    return function ra(W) {
                                        return new se(null, function (Da, ea) {
                                            return function () {
                                                for (; ;) {
                                                    var v = J(W);
                                                    if (v) {
                                                        if (Pd(v)) {
                                                            var E = tc(v)
                                                                , G = U(E)
                                                                , H = we(G);
                                                            a: for (var I = 0; ;)
                                                                if (I < G) {
                                                                    var K = vb(E, I);
                                                                    K = [z.ic(K), z.ic(ea)].join("");
                                                                    H.add(K);
                                                                    I += 1
                                                                } else {
                                                                    E = !0;
                                                                    break a
                                                                }
                                                            return E ? ye(H.X(), ra(uc(v))) : ye(H.X(), null)
                                                        }
                                                        H = N(v);
                                                        return qd([z.ic(H), z.ic(ea)].join(""), ra(Sc(v)))
                                                    }
                                                    return null
                                                }
                                            }
                                        }(p, r, y, B, A, M), null)
                                    }
                                }(k, n, m, l, b, c)(Z.fc(zj, b))))
                                    return Ce.fc(l, h(Sc(k)));
                                k = Sc(k)
                            } else
                                return null
                        }
                    }
                        , null)
                }(me(c))
            }();
        d = kb(function (e, f) {
            e = z.ic(e);
            var h = D.fc(a, f);
            if (w(h)) {
                h = "/(?:)/" === z.ic("") ? wd.fc(Lf(qd("", Z.fc(z, J(h)))), "") : Lf(z.ic(h).split(""));
                if (1 < U(h))
                    a: for (; ;)
                        if ("" === (null == h ? null : Mb(h)))
                            h = null == h ? null : Nb(h);
                        else
                            break a;
                h = R.fc(N(h), "w") ? N(P(h)).toUpperCase() : N(P(h)).toLowerCase()
            } else
                h = "1";
            return [e, h, -1 != f.indexOf("h") && Re(f, "h1") ? "/" : null].join("")
        }, "", d);
        return wj(wj(wj(wj(wj(wj(wj(d, "11111111", "8"), "1111111", "7"), "111111", "6"), "11111", "5"), "1111", "4"), "111", "3"), "11", "2")
    }
    function Dj(a) {
        return R.fc(8, U(a)) && R.fc(-1, a.search(/[^kqrnbpKQRNBP1]/))
    }
    function Ej(a) {
        if ("string" !== typeof a)
            return !1;
        a = Aj(wj(a, / .+$/, "")).split("/");
        return R.fc(8, U(a)) && Ue(Dj, a)
    }
    ; var Fj = new u(null, 8, ["8", 0, "7", 1, "6", 2, "5", 3, "4", 4, "3", 5, "2", 6, "1", 7], null);
    Bj("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
    var Hj = new u(null, 8, ["1", 0, "2", 1, "3", 2, "4", 3, "5", 4, "6", 5, "7", 6, "8", 7], null)
        , Ij = new u(null, 8, ["a", 7, "b", 6, "c", 5, "d", 4, "e", 3, "f", 2, "g", 1, "h", 0], null)
        , bh = Lf("abcdefghijklmnopqrstuvwxyz".split(""))
        , Jj = Wg(bh, nd());
    Wg(me(bh), nd());
    function Kj() {
        return function c(b) {
            return new se(null, function () {
                for (var d = b; ;) {
                    var e = J(d);
                    if (e) {
                        var f = e
                            , h = N(f);
                        if (e = J(function (k, l, m, n) {
                            return function y(r) {
                                return new se(null, function (B, A) {
                                    return function () {
                                        for (; ;) {
                                            var M = J(r);
                                            if (M) {
                                                if (Pd(M)) {
                                                    var S = tc(M)
                                                        , W = U(S)
                                                        , ra = we(W);
                                                    a: for (var Da = 0; ;)
                                                        if (Da < W) {
                                                            var ea = vb(S, Da);
                                                            ea = [z.ic(jd(bh, A)), z.ic(ea + 1)].join("");
                                                            ra.add(ea);
                                                            Da += 1
                                                        } else {
                                                            S = !0;
                                                            break a
                                                        }
                                                    return S ? ye(ra.X(), y(uc(M))) : ye(ra.X(), null)
                                                }
                                                ra = N(M);
                                                return qd([z.ic(jd(bh, A)), z.ic(ra + 1)].join(""), y(Sc(M)))
                                            }
                                            return null
                                        }
                                    }
                                }(k, l, m, n), null)
                            }
                        }(d, h, f, e)(ch(0, 8))))
                            return Ce.fc(e, c(Sc(d)));
                        d = Sc(d)
                    } else
                        return null
                }
            }
                , null)
        }(ch(0, 8))
    }
    function xj() {
        return kb(function (a, b) {
            return V.Ac(a, b, ["square-", z.ic(tj())].join(""))
        }, Te, Kj())
    }
    function Nj(a, b) {
        var c = a.split("");
        a = c[0];
        c = c[1];
        return R.fc(b, "white") ? new u(null, 2, [Ii, D.fc(Jj, a), Gi, D.fc(Fj, c)], null) : new u(null, 2, [Ii, D.fc(Ij, a), Gi, D.fc(Hj, c)], null)
    }
    function Oj(a, b, c) {
        a = Nj(a, c);
        a = X(a);
        c = D.fc(a, Ii);
        var d = D.fc(a, Gi);
        a = b / 8;
        c *= a;
        d *= a;
        var e = c + a / 2;
        a = d + a / 2;
        return new u(null, 8, [Mh, e, Ti, a, Rh, c, Uh, d, Lh, e / b * 100, yi, a / b * 100, lf, c / b * 100, $g, d / b * 100], null)
    }
    ; function Qj(a, b) {
        return kb(function (c, d) {
            var e = Bd(d, 0, null);
            d = Bd(d, 1, null);
            e = ["{", re(e), "}"].join("");
            return wj(c, e, z.ic(d))
        }, a, b)
    }
    ; function Ca() {
        return Q("iPhone") && !Q("iPod") && !Q("iPad")
    }
    function Ea() {
        Ca() || Q("iPad") || Q("iPod")
    }
    ; Q("Opera");
    Q("Trident") || Q("MSIE");
    Q("Edge");
    var gj = Q("Gecko") && !(-1 != la.toLowerCase().indexOf("webkit") && !Q("Edge")) && !(Q("Trident") || Q("MSIE")) && !Q("Edge")
        , hj = -1 != la.toLowerCase().indexOf("webkit") && !Q("Edge");
    hj && Q("Mobile");
    Q("Macintosh");
    Q("Windows");
    Q("Linux") || Q("CrOS");
    var Ab = aa.navigator || null;
    Ab && (Ab.appVersion || "").indexOf("X11");
    Q("Android");
    Ca();
    Q("iPad");
    Q("iPod");
    Ea();
    la.toLowerCase().indexOf("kaios");
    ma();
    Ca() || Q("iPod");
    Q("iPad");
    !Q("Android") || na() || ma() || Q("Opera") || Q("Silk");
    na();
    !Q("Safari") || na() || Q("Coast") || Q("Opera") || Q("Edge") || Q("Edg/") || Q("OPR") || ma() || Q("Silk") || Q("Android") || Ea();
    var Sj = {}
        , Tj = null
        , Uj = gj || hj || "function" == typeof aa.btoa;
    function nj() {
        return Me(z, Z.fc(function (a) {
            return ["\x3cdiv class\x3d'file-44ae4'\x3e", z.ic(jd(bh, a)), "\x3c/div\x3e"].join("")
        }, ch(0, 8)))
    }
    function oj() {
        return Me(z, Z.fc(function (a) {
            return ["\x3cdiv class\x3d'rank-3d54c'\x3e", z.ic(a), "\x3c/div\x3e"].join("")
        }, ch(0, 8)))
    }
    function Yj(a) {
        var b = X(a)
            , c = D.fc(b, Ri);
        a = D.fc(b, ki);
        var d = D.fc(b, Si)
            , e = D.fc(b, ni)
            , f = D.fc(b, Pi)
            , h = D.fc(b, Oh);
        b = D.fc(b, xi);
        f = Oj(b, c, f);
        var k = c / 8 * h;
        h = k / c * 100;
        b = (Mh.ic(f) - k / 2) / c * 100;
        c = (Ti.ic(f) - k / 2) / c * 100;
        return Qj("\x3cdiv class\x3d'item-18a5b circle-a0266' id\x3d'{id}'style\x3d'background-color:{color};height:{height}%;left:{left}%;opacity:{opacity};top:{top}%;width:{width}%;'\x3e\x3c/div\x3e", new u(null, 7, [ki, a, Ni, h, Si, d, Rh, b, ni, e, Uh, c, Ui, h], null))
    }
    function Zj(a) {
        var b = X(a);
        a = D.fc(b, ki);
        var c = D.fc(b, Si)
            , d = D.fc(b, ni);
        b = X(b);
        var e = D.fc(b, Ri)
            , f = D.fc(b, Wi)
            , h = D.fc(b, Pi)
            , k = D.fc(b, Oh);
        b = D.fc(b, ci);
        b = Oj(b, e, h);
        var l = X(b);
        b = D.fc(l, Lh);
        l = D.fc(l, yi);
        e = Oj(f, e, h);
        f = X(e);
        e = D.fc(f, Lh);
        f = D.fc(f, yi);
        e -= b;
        f -= l;
        k *= 12.5;
        h = k / 6;
        var m = Math.sqrt(Math.pow(f, 2) + Math.pow(e, 2)) + h + k / 6
            , n = 80 * k / m;
        return Qj("\x3cdiv class\x3d'item-18a5b arrow-bc3c7' id\x3d'{id}'style\x3d'top:{start-y}%;left:{start-x}%;opacity:{opacity};transform:translateY(-50%)rotate({angle}rad);width:{arrow-width}%;height:{arrow-height}%;'\x3e\x3cdiv class\x3d'arrow-line-a8dce' style\x3d'background-color:{color};width:{line-width}%;margin-left:{base-offset}%;'\x3e\x3c/div\x3e\x3cdiv class\x3d'arrow-head-38dfa' style\x3d'background-color:{color};width:{head-width}%;'\x3e\x3c/div\x3e\x3c/div\x3e", Og.l(rd([new u(null, 8, [Kh, Math.atan(f / e) + (0 > e ? Math.PI : 0), Fi, k, ri, m, bi, 100 * -h / m, Fh, n, Hh, 100 - n, ah, b, ph, l], null), new u(null, 3, [ki, a, Si, c, ni, d], null)])))
    }
    function Jl(a) {
        var b = D.fc(sj, re(a));
        if (Uj)
            a = aa.btoa(b);
        else {
            a = [];
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                255 < e && (a[c++] = e & 255,
                    e >>= 8);
                a[c++] = e
            }
            b = void 0;
            void 0 === b && (b = 0);
            if (!Tj)
                for (Tj = {},
                    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                    d = ["+/\x3d", "+/", "-_\x3d", "-_.", "-_"],
                    e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Sj[e] = f;
                    for (var h = 0; h < f.length; h++) {
                        var k = f[h];
                        void 0 === Tj[k] && (Tj[k] = h)
                    }
                }
            b = Sj[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                var l = a[f]
                    , m = a[f + 1];
                k = a[f + 2];
                h = b[l >> 2];
                l = b[(l & 3) << 4 | m >> 4];
                m = b[(m & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[e++] = "" + h + l + m + k
            }
            h = 0;
            k = d;
            switch (a.length - f) {
                case 2:
                    h = a[f + 1],
                        k = b[(h & 15) << 2] || d;
                case 1:
                    a = a[f],
                        c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d
            }
            a = c.join("")
        }
        return a
    }
    function bk(a) {
        var b = X(a)
            , c = D.fc(b, cj)
            , d = D.fc(b, Ri);
        D.fc(b, Yi);
        a = D.fc(b, Si);
        var e = D.fc(b, si)
            , f = D.fc(b, oi)
            , h = D.fc(b, ii);
        b = D.fc(b, xi);
        c = Oj(b, d, c);
        b = X(c);
        c = D.fc(b, lf);
        b = D.fc(b, $g);
        h *= 100;
        d = d / 8 / d * 100;
        return ["\x3cdiv class\x3d'piece-349f8' id\x3d'", z.ic(a), "' style\x3d'left:", z.ic(c), "%;top:", z.ic(b), "%;height:", z.ic(d), "%;width:", z.ic(d), "%;", w(e) ? "opacity:0;" : null, "'\x3e\x3cimg src\x3d'data:image/svg+xml;base64,", z.ic(Jl(f)), "' alt\x3d'' style\x3d'height:", z.ic(h), "%;width:", z.ic(h), "%;' /\x3e\x3c/div\x3e"].join("")
    }
    function Td(a) {
        var b = X(a);
        a = D.fc(b, ki);
        var c = D.fc(b, Ha);
        b = D.fc(b, Si);
        return ["\x3cdiv class\x3d'", ["square-4b72b ", R.fc(a, "white") ? "white-3b784" : "black-b7cb6"].join(""), "' id\x3d'", z.ic(b), "' data-square-coord\x3d'", z.ic(c), "'\x3e\x3c/div\x3e"].join("")
    }
    ; function dj(a) {
        setTimeout(function () {
            return a.s ? a.s() : a.call(null)
        }, 1)
    }
    ; function Hl(a) {
        Ed(O(a, "preventDefault")) && a.preventDefault()
    }
    function jj(a) {
        var b = document;
        b = "string" === typeof a ? b.getElementById(a) : a;
        if (w(b))
            return b;
        a = document.querySelector(a);
        return w(a) ? a : null
    }
    function lj(a, b, c) {
        O(jj(a), "style")[b] = c
    }
    function mj(a, b) {
        jj(a).insertAdjacentHTML("beforeend", b)
    }
    function Wj(a, b) {
        O(jj(a), "classList").add(b)
    }
    function Xj(a, b) {
        O(jj(a), "classList").remove(b)
    }
    function pj(a) {
        (a = jj(a)) && a.parentNode && a.parentNode.removeChild(a)
    }
    function qj(a, b) {
        var c = jj(a);
        w(c) && (lj(c, "transition", ""),
            c.addEventListener("transitionend", function () {
                pj(c);
                return Ed(null) ? null.s ? null.s() : null.call(null) : null
            }),
            dj(function () {
                lj(c, "transition", ["all ", z.ic(b), "ms"].join(""));
                return lj(c, "opacity", "0")
            }))
    }
    ; function dk() {
        return ["piece-", z.ic(tj())].join("")
    }
    ; function ek(a, b) {
        var c = X(a);
        a = D.fc(c, pi);
        var d = D.fc(c, fi)
            , e = D.fc(c, Qi)
            , f = D.fc(c, oi);
        c = D.fc(c, xi);
        var h = C(b)
            , k = X(h);
        h = D.fc(k, Xh);
        var l = D.fc(k, Ri)
            , m = D.fc(k, Pi);
        k = D.fc(k, ii);
        var n = dk();
        f = bk(new u(null, 8, [Ri, l, cj, m, Si, n, si, !0, oi, f, ii, k, xi, c, Ui, l / 8], null));
        var p = !0 === d ? 0 : w(a) ? a : h;
        return new u(null, 3, [Ih, f, ai, function () {
            lj(n, "transition", ["all ", z.ic(p), "ms"].join(""));
            lj(n, "opacity", "100%");
            return Ed(e) ? Y.o(b, nf, new Df(null, 2, 5, Ff, [vi, n], null), function () {
                return e.s ? e.s() : e.call(null)
            }) : null
        }
            , Xi, Ig([c], [n])], null)
    }
    function fk(a, b) {
        var c = X(a);
        a = D.fc(c, Sh);
        var d = D.fc(c, wi)
            , e = D.fc(c, pi)
            , f = D.fc(c, fi)
            , h = D.fc(c, Qi)
            , k = D.fc(c, oi);
        c = D.fc(c, Yh);
        var l = C(b)
            , m = X(l);
        l = D.fc(m, Xh);
        var n = D.fc(m, Ri)
            , p = D.fc(m, Pi)
            , r = D.fc(m, ii);
        m = D.fc(m, Th);
        var y = D.fc(m, c)
            , B = dk();
        k = bk(new u(null, 8, [Ri, n, cj, p, Si, B, si, !1, oi, k, ii, r, xi, c, Ui, n / 8], null));
        var A = Oj(d, n, p)
            , M = !0 === f ? 0 : w(e) ? e : l;
        return Og.l(rd([new u(null, 6, [Ih, k, ai, function () {
            lj(B, "transition", ["all ", z.ic(M), "ms"].join(""));
            lj(B, "left", [z.ic(lf.ic(A)), "%"].join(""));
            lj(B, "top", [z.ic($g.ic(A)), "%"].join(""));
            return Ed(h) ? Y.o(b, nf, new Df(null, 2, 5, Ff, [vi, B], null), function () {
                return h.s ? h.s() : h.call(null)
            }) : null
        }
            , pi, M, Qh, y, Xi, Ig([d], [B]), ui, c], null), w(a) ? new u(null, 1, [ei, D.fc(m, d)], null) : null]))
    }
    function gk(a, b) {
        var c = X(a);
        a = D.fc(c, pi);
        var d = D.fc(c, fi)
            , e = D.fc(c, Qi);
        c = D.fc(c, xi);
        var f = C(b)
            , h = X(f);
        f = D.fc(h, Xh);
        h = D.fc(h, Th);
        var k = D.fc(h, c);
        return Og.l(rd([new u(null, 3, [ui, c, pi, !0 === d ? 0 : w(a) ? a : f, Ci, k], null), Ed(e) ? new u(null, 1, [ai, function () {
            return Y.o(b, nf, new Df(null, 2, 5, Ff, [vi, k], null), function () {
                return e.s ? e.s() : e.call(null)
            })
        }
        ], null) : null]))
    }
    function hk(a, b) {
        switch ($i.ic(a)) {
            case "ANIMATION_ADD":
                return ek(a, b);
            case "ANIMATION_MOVE":
                return fk(a, b);
            case "ANIMATION_CLEAR":
                return gk(a, b);
            default:
                return console.warn("Unknown animation type:", $i.ic(a))
        }
    }
    var ik = function (a) {
        var b = new af(Te);
        return function () {
            function c(e) {
                var f = null;
                if (0 < arguments.length) {
                    f = 0;
                    for (var h = Array(arguments.length - 0); f < h.length;)
                        h[f] = arguments[f + 0],
                            ++f;
                    f = new Qc(h, 0, null)
                }
                return d.call(this, f)
            }
            function d(e) {
                var f = D.Ac(C(b), e, Rd);
                return f === Rd ? (f = Me(a, e),
                    Y.o(b, V, e, f),
                    f) : f
            }
            c.G = 0;
            c.F = function (e) {
                e = J(e);
                return d(e)
            }
                ;
            c.l = d;
            return c
        }()
    }(function (a) {
        var b = Z.fc(function (c) {
            if (R.fc(c, a))
                var d = 0;
            else {
                var e = Nj(c, "white")
                    , f = Nj(a, "white");
                d = Math.abs(Ii.ic(e) - Ii.ic(f));
                e = Math.abs(Gi.ic(e) - Gi.ic(f));
                d = d >= e ? d : e
            }
            return new u(null, 2, [ce, d, xi, c], null)
        }, Kj());
        b = be(b);
        b = Z.fc(xi, b);
        return Sc(b)
    });
    function jk(a, b, c) {
        c = ik(c);
        return N(gf(function (d) {
            return R.fc(b, D.fc(a, d))
        }, c))
    }
    function kk(a, b) {
        var c = kb(function (l, m) {
            return R.fc(D.fc(a, m), D.fc(b, m)) ? wd.fc(l, m) : l
        }, Ug, bg(b))
            , d = new af(Ne(Dd, a, c))
            , e = new af(Ne(Dd, b, c));
        c = kb(function (l, m) {
            var n = Bd(m, 0, null)
                , p = Bd(m, 1, null);
            m = jk(C(d), p, n);
            return w(m) ? (p = new u(null, 4, [$i, "ANIMATION_MOVE", Yh, m, wi, n, oi, p], null),
                Y.Ac(d, Dd, m),
                Y.Ac(e, Dd, n),
                wd.fc(l, p)) : l
        }, xd, $d(Xd, Lf(C(e))));
        var f = Vg(Z.fc(wi, c));
        c = Z.fc(function (l) {
            l = X(l);
            var m = D.fc(l, wi);
            return V.Ac(l, Sh, Wd(C(d), m))
        }, c);
        var h = kb(function (l, m) {
            var n = Bd(m, 0, null);
            m = Bd(m, 1, null);
            return wd.fc(l, new u(null, 3, [$i, "ANIMATION_ADD", xi, n, oi, m], null))
        }, xd, $d(Xd, Lf(C(e))))
            , k = kb(function (l, m) {
                var n = Bd(m, 0, null);
                m = Bd(m, 1, null);
                return Wd(f, n) ? l : wd.fc(l, new u(null, 3, [$i, "ANIMATION_CLEAR", xi, n, oi, m], null))
            }, xd, $d(Xd, Lf(C(d))));
        return Lf(Ce.l(c, h, rd([k])))
    }
    ; function qk(a) {
        var b = {
            z: mc(Te)
        };
        a.forEach(function (c, d) {
            c = pc(O(b, "z"), d, c);
            b.z = c
        });
        return oc(O(b, "z"))
    }
    function rk(a) {
        var b = new Map;
        a = J(a);
        for (var c = null, d = 0, e = 0; ;)
            if (e < d) {
                var f = c.C(null, e)
                    , h = Bd(f, 0, null);
                f = Bd(f, 1, null);
                b.set(yh(h), yh(f));
                e += 1
            } else if (a = J(a))
                Pd(a) ? (d = tc(a),
                    a = uc(a),
                    c = d,
                    d = U(d)) : (d = N(a),
                        c = Bd(d, 0, null),
                        d = Bd(d, 1, null),
                        b.set(yh(c), yh(d)),
                        a = P(a),
                        c = null,
                        d = 0),
                    e = 0;
            else
                break;
        return b
    }
    function sk(a, b) {
        switch (b) {
            case "object":
                return yh(a);
            case "map":
                return rk(a);
            default:
                return yh(Lf(cg(a)))
        }
    }
    ; function tk(a) {
        return "string" === typeof a && R.fc("map", a.toLowerCase())
    }
    function uk(a) {
        return "string" === typeof a && R.fc("fen", a.toLowerCase())
    }
    function vk(a) {
        return "string" === typeof a && R.fc("start", a.toLowerCase())
    }
    function wk(a) {
        return "string" === typeof a && Re(-1, a.search(/^[bw][KQRNBP]$/))
    }
    function xk(a) {
        return "string" === typeof a && Re(-1, a.search(/^[a-h][1-8]$/))
    }
    function Sa(a) {
        return Md(a) && Ue(xk, bg(a)) && Ue(wk, cg(a))
    }
    function zk(a) {
        var b = cb(a);
        return b ? (a = ij(a),
            Ue(xk, bg(a)) && Ue(wk, cg(a))) : b
    }
    function Ak(a) {
        var b = a instanceof Map;
        return b ? (a = qk(a),
            Ue(xk, bg(a)) && Ue(wk, cg(a))) : b
    }
    function Bk(a) {
        var b = "string" === typeof a;
        return b ? (a = a.split("-"),
            R.fc(U(a), 2) && Re(a[0], a[1]) && xk(a[0]) && xk(a[1])) : b
    }
    function Ck(a) {
        return R.fc("CHESSBOARD_ARROW", $i.ic(a))
    }
    function Dk(a) {
        return R.fc("CHESSBOARD_CIRCLE", $i.ic(a))
    }
    ; function Ik(a) {
        return "string" === typeof a ? a.toLowerCase() : null
    }
    function Jk(a) {
        return "string" === typeof a ? a.toLowerCase() : a
    }
    ; var ej = Ig([Ol, Lj, Pi, Pl, hi, zl, Gj, yk, Ml, Sl, Nl, Li, Vj, Ch, Fe, Tl, Ll], [new u(null, 2, [Zi, !1, li, ji], null), new u(null, 1, [li, Ed], null), new u(null, 2, [Zi, "white", li, function (a) {
        return R.fc(a, "white") || R.fc(a, "black")
    }
    ], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null), new u(null, 2, [Zi, !1, li, ji], null), new u(null, 2, [Zi, !1, li, ji], null), new u(null, 2, [Zi, "snapback", li, function (a) {
        return Wd(new Sg(null, new u(null, 2, ["remove", null, "snapback", null], null), null), a)
    }
    ], null), new u(null, 1, [li, Ed], null), new u(null, 2, [Zi, !1, li, ji], null), new u(null, 2, [Zi, Te, li, Sa], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null), new u(null, 1, [li, Ed], null)]);
    kb(function (a, b) {
        var c = Bd(b, 0, null);
        b = Bd(b, 1, null);
        b = X(b);
        b = D.fc(b, Zi);
        return V.Ac(a, c, b)
    }, Te, ej);
    var eb = Vg(bg(ej))
        , Vl = Vg(Z.fc(re, eb));
    function fj(a) {
        return kb(function (b, c) {
            var d = Bd(c, 0, null);
            c = Bd(c, 1, null);
            var e = X(c);
            c = D.fc(e, Zi);
            var f = D.fc(e, li);
            e = D.fc(a, d);
            f = f.ic ? f.ic(e) : f.call(null, e);
            return w(f) ? V.Ac(b, d, e) : V.Ac(b, d, c)
        }, Te, ej)
    }
    ; var lk = Bj("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
        , mk = new u(null, 6, ["superfast", 40, "super fast", 40, "fast", 80, "slow", 300, "superslow", 800, "super slow", 800], null)
        , nk = Vg(bg(mk));
    function rj(a, b) {
        var c = C(a);
        c = X(c);
        c = D.fc(c, Nh);
        var d = Z.fc(Qh, b);
        d = J(d);
        for (var e = null, f = 0, h = 0; ;)
            if (h < f) {
                var k = e.C(null, h);
                w(k) && pj(k);
                h += 1
            } else if (d = J(d))
                e = d,
                    Pd(e) ? (d = tc(e),
                        h = uc(e),
                        e = d,
                        f = U(d),
                        d = h) : (d = N(e),
                            w(d) && pj(d),
                            d = P(e),
                            e = null,
                            f = 0),
                    h = 0;
            else
                break;
        d = Me(z, Z.fc(Ih, b));
        mj(c, d);
        dj(function () {
            for (var p = J(b), r = null, y = 0, B = 0; ;)
                if (B < y) {
                    var A = r.C(null, B);
                    A = X(A);
                    A = D.fc(A, ai);
                    Ed(A) && (A.s ? A.s() : A.call(null));
                    B += 1
                } else if (p = J(p))
                    Pd(p) ? (y = tc(p),
                        p = uc(p),
                        r = y,
                        y = U(y)) : (r = N(p),
                            r = X(r),
                            A = D.fc(r, ai),
                            Ed(A) && (A.s ? A.s() : A.call(null)),
                            p = P(p),
                            r = null,
                            y = 0),
                        B = 0;
                else
                    return null
        });
        c = J(b);
        d = null;
        for (f = e = 0; ;)
            if (f < e) {
                h = d.C(null, f);
                var l = X(h);
                h = D.fc(l, pi);
                k = D.fc(l, ei);
                l = D.fc(l, Ci);
                w(l) && qj(l, h);
                w(k) && qj(k, h);
                f += 1
            } else if (c = J(c))
                Pd(c) ? (e = tc(c),
                    c = uc(c),
                    d = e,
                    e = U(e)) : (d = N(c),
                        f = X(d),
                        d = D.fc(f, pi),
                        e = D.fc(f, ei),
                        f = D.fc(f, Ci),
                        w(f) && qj(f, d),
                        w(e) && qj(e, d),
                        c = P(c),
                        d = null,
                        e = 0),
                    f = 0;
            else
                break;
        var m = Z.fc(ui, b)
            , n = Z.fc(Xi, b);
        Y.o(a, pf, Th, function (p) {
            p = Ne(Dd, p, m);
            return Ne(Og, p, n)
        })
    }
    ; function Pj(a) {
        return [z.ic(a), "-", z.ic(tj())].join("")
    }
    ; function ak(a) {
        return Me(console.error, wd.fc(a, "[Chessboard2]"))
    }
    function Hk(a) {
        return Me(console.warn, wd.fc(a, "[Chessboard2]"))
    }
    ; function ok(a, b) {
        a = a.split("-");
        switch (b) {
            case "ARROW_FORMAT":
                return new u(null, 2, [ci, a[0], Wi, a[1]], null);
            case "MOVE_FORMAT":
                return new u(null, 2, [Wh, a[0], Ei, a[1]], null);
            default:
                return null
        }
    }
    function pk(a, b) {
        var c = X(b);
        b = D.fc(c, Wh);
        c = D.fc(c, Ei);
        if (w(D.fc(a, b))) {
            var d = D.fc(a, b);
            return V.Ac(Dd.fc(a, b), c, d)
        }
        return a
    }
    ; function Vi(a, b) {
        a = gf(function (c) {
            return R.fc(b, $i.ic(c))
        }, cg(Zh.ic(C(a))));
        return Wg(Z.fc(Si, a), a)
    }
    function Mj(a) {
        var b = Z.fc(Si, gf(Ck, cg(Zh.ic(C(a)))))
            , c = Z.fc(function (d) {
                return new u(null, 1, [Qh, d], null)
            }, b);
        rj(a, c);
        Y.o(a, of, new Df(null, 1, 5, Ff, [Zh], null), function (d) {
            return Ne(Dd, d, b)
        });
        return null
    }
    function Fk(a, b) {
        var c = C(a)
            , d = Li.ic(c)
            , e = Xh.ic(c);
        c = kb(pk, d, b);
        var f = yh(d)
            , h = yh(c);
        d = kk(d, c);
        var k = Wg(Z.fc(Wh, b), b);
        d = Z.fc(function (m) {
            m = X(m);
            var n = D.fc(m, Yh);
            n = D.fc(k, n);
            var p = X(n);
            n = D.fc(p, $h);
            var r = V.Ac
                , y = X(p);
            p = D.fc(y, $h);
            y = D.fc(y, zi);
            p = !1 === p ? 0 : "number" === typeof y ? y : w(D.fc(mk, y)) ? D.fc(mk, y) : e;
            m = r.call(V, m, pi, p);
            return !1 === n ? V.Ac(m, fi, !0) : m
        }, d);
        var l = kb(function (m, n) {
            n = X(n);
            n = D.fc(n, Yh);
            m[n] = null;
            return m
        }, {}, d);
        b = kb(function (m, n) {
            n = X(n);
            var p = D.fc(n, Yh);
            return wd.fc(m, new Promise(function (r) {
                l[p] = r
            }
            ))
        }, xd, d);
        d = Z.fc(function (m) {
            m = X(m);
            var n = D.fc(m, pi)
                , p = D.fc(m, Yh)
                , r = D.fc(m, wi)
                , y = D.fc(m, oi);
            return V.Ac(m, Qi, function () {
                var B = {
                    afterPosition: h,
                    beforePosition: f,
                    duration: n,
                    from: p,
                    to: r,
                    piece: y
                }
                    , A = mf(k, new Df(null, 2, 5, Ff, [p, Ai], null));
                w(A) && Ed(A) && (A.ic ? A.ic(B) : A.call(null, B));
                A = O(l, p);
                return w(A) ? Ed(A) ? A.ic ? A.ic(B) : A.call(null, B) : null : null
            })
        }, d);
        d = Z.fc(function (m) {
            return hk(m, a)
        }, d);
        rj(a, d);
        Y.o(a, V, Li, c);
        return b
    }
    function Gk(a, b, c) {
        var d = C(a)
            , e = X(d);
        d = D.fc(e, Xh);
        e = D.fc(e, Nh);
        e = jj(e);
        if (w(e)) {
            e = D.fc(C(a), Li);
            var f = kk(e, b)
                , h = zi.ic(c)
                , k = !1 === $h.ic(c) ? 0 : "number" === typeof h ? h : w(D.fc(mk, h)) ? D.fc(mk, h) : d;
            d = Z.fc(function (p) {
                p = V.Ac(p, pi, k);
                return !1 === $h.ic(c) ? V.Ac(p, fi, !0) : p
            }, f);
            var l = {};
            f = new Promise(function (p) {
                l.$ = p
            }
            );
            e = yh(e);
            var m = {
                afterPosition: yh(b),
                beforePosition: e,
                duration: k
            }
                , n = function () {
                    var p = Ai.ic(c);
                    w(p) && Ed(p) && (p.ic ? p.ic(m) : p.call(null, m));
                    p = O(l, "$");
                    return w(p) ? p.ic ? p.ic(m) : p.call(null, m) : null
                };
            rj(a, $e(function (p, r) {
                return 0 === p ? hk(V.Ac(r, Qi, n), a) : hk(r, a)
            }, d));
            Y.o(a, V, Li, b);
            return f
        }
        return null
    }
    function Na(a, b) {
        var c = C(a)
            , d = Ri.ic(c)
            , e = Pi.ic(c)
            , f = kb(function (h, k) {
                k = X(k);
                k = D.fc(k, Si);
                h[k] = null;
                return h
            }, {}, b);
        c = kb(function (h, k) {
            k = X(k);
            var l = D.fc(k, Si);
            return wd.fc(h, new Promise(function (m) {
                f[l] = m
            }
            ))
        }, xd, b);
        b = Z.fc(function (h) {
            h = X(h);
            var k = D.fc(h, Si)
                , l = D.fc(h, Ei);
            return V.Ac(h, Qi, function () {
                var m = {
                    to: l,
                    id: k
                }
                    , n = O(f, k);
                return w(n) ? Ed(n) ? n.ic ? n.ic(m) : n.call(null, m) : null : null
            })
        }, b);
        b = Z.fc(function (h) {
            h = X(h);
            var k = D.fc(h, Si)
                , l = D.fc(h, Qi);
            h = D.fc(h, Ei);
            var m = Oj(h, d, e);
            return new u(null, 2, [ai, function () {
                lj(k, "transition", ["all ", z.ic(800), "ms"].join(""));
                lj(k, "left", [z.ic(Rh.ic(m)), "px"].join(""));
                lj(k, "top", [z.ic(Uh.ic(m)), "px"].join(""));
                return Ed(l) ? Y.o(a, nf, new Df(null, 2, 5, Ff, [vi, k], null), function () {
                    return l.s ? l.s() : l.call(null)
                }) : null
            }
                , pi, 800], null)
        }, b);
        rj(a, b);
        return c
    }
    function Xg(a) {
        var b = C(a);
        b = X(b);
        var c = D.fc(b, Ki)
            , d = D.fc(b, Nh);
        b = D.fc(b, xc);
        c = jj(c);
        var e = jj(d);
        w(w(c) ? e : c) && (lj(c, "width", ""),
            d = O(c.getBoundingClientRect(), "width"),
            e = O(e.getBoundingClientRect(), "width"),
            Y.l(a, V, Ri, e, rd([Ub, e])),
            lj(b, "height", [z.ic(e), "px"].join("")),
            lj(c, "width", [z.ic(d), "px"].join("")));
        return null
    }
    function kj(a) {
        var b = C(a);
        b = X(b);
        b = D.fc(b, qi);
        w(b) && (jj(b).innerHTML = "");
        bf(a, null);
        return null
    }
    function Wl(a, b) {
        b = Dd.fc(b, Li);
        b = kb(function (c, d) {
            var e = Bd(d, 0, null);
            d = Bd(d, 1, null);
            if (Wd(eb, e)) {
                var f = mf(ej, new Df(null, 2, 5, Ff, [e, li], null));
                f = f.ic ? f.ic(d) : f.call(null, d);
                return bb(f) ? (Hk(rd([['Invalid value for config property "', re(e), '": ', z.ic(d)].join("")])),
                    c) : V.Ac(c, e, d)
            }
            0 == re(e).lastIndexOf("closure_uid", 0) || Hk(rd(["Invalid config property:", re(e)]));
            return c
        }, Te, b);
        Y.Ac(a, Og, b)
    }
    ; function mb(a) {
        var b = ij(a)
            , c = Dh(a, rd([Eh, !0]));
        return vk(a) ? new u(null, 1, [Li, lk], null) : Ej(a) ? new u(null, 1, [Li, Bj(a)], null) : Sa(b) ? new u(null, 1, [Li, b], null) : Md(b) ? (a = Pg(c, eb),
            b = D.fc(b, "position"),
            a = vk(b) ? V.Ac(a, Li, lk) : a,
            a = Ej(b) ? V.Ac(a, Li, Bj(b)) : a,
            Sa(b) ? V.Ac(a, Li, b) : a) : Te
    }
    var Kk = new Sg(null, new u(null, 5, [$h, null, Ai, null, Wh, null, zi, null, Ei, null], null), null)
        , Lk = new Sg(null, new u(null, 3, [$h, null, Ai, null, zi, null], null), null);
    function Mk(a) {
        return (Vd(a) || !1) && 0 < a || Wd(nk, a)
    }
    function Ok(a) {
        return Bk(a) ? ok(a, "MOVE_FORMAT") : cb(a) && xk(O(a, "from")) && xk(O(a, "to")) ? Dh(a, rd([Eh, !0])) : null
    }
    function Pk(a) {
        return Pg(a, Kk)
    }
    function Qk(a) {
        var b = Ve(Sd, a)
            , c = vd(gf(Ed, a))
            , d = Z.fc(Jk, a)
            , e = vd(gf(Mk, d));
        return Z.fc(function (f) {
            var h = Og.l
                , k = Te
                , l = w(b) ? new u(null, 1, [$h, !1], null) : null;
            if (w(e)) {
                var m = D.fc(mk, Ik(e));
                w(m) || (m = (m = (Vd(e) || !1) && 0 < e) ? e : m);
                m = new u(null, 1, [zi, m], null)
            } else
                m = null;
            return h.call(Og, rd([k, l, m, w(c) ? new u(null, 1, [Ai, c], null) : null, f]))
        }, Z.fc(Pk, hf($a, Z.fc(Ok, a))))
    }
    function Rk(a) {
        return Pg(a, Lk)
    }
    function Sk(a) {
        return !1 === a ? new u(null, 1, [$h, !1], null) : Ed(a) ? new u(null, 1, [Ai, a], null) : Mk(a) ? new u(null, 1, [zi, a], null) : cb(a) ? Dh(a, rd([Eh, !0])) : Te
    }
    function Tk(a) {
        a = Me(Og, Z.fc(Rk, Z.fc(Sk, a)));
        return w(a) ? a : Te
    }
    function Uk(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        b = Qk(b);
        b = Fk(a, b);
        return R.fc(1, U(b)) ? yh(N(b)) : yh(b)
    }
    function Vk(a, b) {
        a = D.fc(C(a), Li);
        return tk(b) ? rk(a) : uk(b) ? Cj(a) : yh(a)
    }
    function Wk(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        c = b[0];
        b = Tk(b);
        return vk(c) ? Gk(a, lk, b) : Ej(c) ? Gk(a, Bj(c), b) : zk(c) ? Gk(a, ij(c), b) : Ak(c) ? Gk(a, qk(c), b) : Hk(rd(["Invalid position passed to setPosition():", c]))
    }
    function Xk(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        c = b[0];
        d = b.length;
        b = Tk(b);
        return 0 === d ? Vk(a, null) : uk(c) ? Vk(a, c) : tk(c) ? Vk(a, c) : vk(c) ? Gk(a, lk, b) : Ej(c) ? Gk(a, Bj(c), b) : zk(c) ? Gk(a, ij(c), b) : Ak(c) ? Gk(a, qk(c), b) : Hk(rd(["Invalid value passed to position():", c]))
    }
    function Yk(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        b = Tk(b);
        return Gk(a, Te, b)
    }
    function Zk(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        b = Tk(b);
        return Gk(a, lk, b)
    }
    function $k(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        c = b[0];
        b = Tk(b);
        return Ej(c) ? Gk(a, Bj(c), b) : Vk(a, "fen")
    }
    function Ga(a, b) {
        var c = Dh(b, rd([Eh, !0]));
        b = X(c);
        var d = D.fc(b, La)
            , e = D.fc(b, Fa)
            , f = D.fc(b, Ia)
            , h = D.fc(b, xi)
            , k = D.fc(b, $i);
        b = Pj(k);
        e = new u(null, 3, [Si, b, $i, k, Fa, e], null);
        "string" !== typeof f && (Ed(f) ? (c = yh(e),
            f = f.ic ? f.ic(c) : f.call(null, c)) : (Hk(rd(["Invalid html property of custom Item:", qh(rd([c]))])),
                f = ""));
        c = X(new u(null, 4, [La, d, Ja, f, Si, b, xi, h], null));
        d = D.fc(c, La);
        h = D.fc(c, Ja);
        f = D.fc(c, Si);
        k = D.fc(c, xi);
        c = C(a);
        c = X(c);
        var l = D.fc(c, Ri)
            , m = D.fc(c, Pi);
        c = D.fc(c, ii);
        k = Oj(k, l, m);
        m = l / 8;
        l = c * m;
        c *= m;
        d = Qj(["\x3cdiv class\x3d'item-18a5b {className}' id\x3d'{id}'style\x3d'height:{height}px;left:{left}px;top:{top}px;width:{width}px;'\x3e", z.ic(h), "\x3c/div\x3e"].join(""), new u(null, 6, [La, d, Ni, l, Si, f, Rh, Mh.ic(k) - c / 2, Uh, Ti.ic(k) - l / 2, Ui, c], null));
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Ih, d], null)], null));
        Y.o(a, nf, new Df(null, 2, 5, Ff, [Zh, b], null), e);
        return b
    }
    function Ma(a, b) {
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Qh, b], null)], null));
        Y.l(a, of, new Df(null, 1, 5, Ff, [Zh], null), Dd, rd([b]));
        return null
    }
    function Qa(a, b) {
        a = Na(a, new Df(null, 1, 5, Ff, [Dh(b, rd([Eh, !0]))], null));
        return R.fc(1, U(a)) ? yh(N(a)) : yh(a)
    }
    function Xl(a) {
        return yh(Pg(C(a), eb))
    }
    function Yl(a, b, c) {
        return Wd(Vl, b) ? (Wl(a, Cd([qe.ic(b), c])),
            Xl(a)) : w(wa(b)) ? (Wl(a, Dh(b, rd([Eh, !0]))),
                Xl(a)) : Hk(rd(["Invalid args passed to setConfig():", b, c]))
    }
    function Zl(a) {
        for (var b = [], c = arguments.length, d = 0; ;)
            if (d < c)
                b.push(arguments[d]),
                    d += 1;
            else
                break;
        b.shift();
        c = b[0];
        b = b[1];
        return bb(c) ? Xl(a) : "string" === typeof c ? Yl(a, c, b) : w(wa(c)) ? Yl(a, c, null) : Hk(rd(["Invalid args passed to config():", c, b]))
    }
    ; function Kl(a, b, c) {
        c = Kg(Z.fc(function (d) {
            return ["#", z.ic(d)].join("")
        }, cg(c)));
        return kb(function (d, e) {
            var f = e.getBoundingClientRect();
            d = O(f, "left");
            var h = O(f, "width")
                , k = O(f, "height");
            f = O(f, "top");
            return a >= d && a < d + h && b >= f && b < f + k ? new ad(O(O(e, "dataset"), "squareCoord")) : null
        }, null, document.querySelectorAll(c))
    }
    function Ql(a, b, c, d, e) {
        var f = C(a)
            , h = X(f);
        f = D.fc(h, bj);
        var k = D.fc(h, Ch)
            , l = D.fc(h, Pi)
            , m = D.fc(h, ii)
            , n = D.fc(h, Li);
        h = D.fc(h, Th);
        if (Ed(k)) {
            n = yh(n);
            try {
                l = {
                    orientation: l,
                    piece: c,
                    position: n,
                    square: b
                };
                var p = k.ic ? k.ic(l) : k.call(null, l)
            } catch (r) {
                if (r instanceof Error)
                    ak(rd(["Runtime error with provided onDragStart function:", r])),
                        p = null;
                else
                    throw r;
            }
        } else
            p = null;
        !1 !== p && (p = D.fc(h, b),
            p = jj(p),
            k = O(p.getBoundingClientRect(), "height"),
            l = O(p.getBoundingClientRect(), "width"),
            w(jj(f)) || (p = window.document.body,
                n = X(new u(null, 7, [Ni, k, Si, f, oi, c, ii, m, Ui, l, Ii, d, Gi, e], null)),
                d = D.fc(n, Ni),
                e = D.fc(n, Si),
                m = D.fc(n, oi),
                h = D.fc(n, ii),
                k = D.fc(n, Ui),
                l = D.fc(n, Ii),
                n = D.fc(n, Gi),
                h *= 100,
                d = Qj(["\x3cdiv id\x3d'{id}' class\x3d'dragging-4a6c1' style\x3d'left:{left}px;top:{top}px;height:{height}px;width:{width}px;'\x3e\x3cimg src\x3d'data:image/svg+xml;base64,", z.ic(Jl.ic ? Jl.ic(m) : Jl.call(null, m)), "' alt\x3d'' style\x3d'height:", z.ic(h), "%;width:", z.ic(h), "%;' /\x3e\x3c/div\x3e"].join(""), new u(null, 5, [Ni, d, Si, e, Rh, l, Uh, n, Ui, k], null)),
                mj(p, d)),
            Y.l(a, V, Ek, !0, rd([ck, jj(f), dl, b, yl, c])))
    }
    function Rl(a, b, c) {
        return window.requestAnimationFrame(function () {
            lj(a, "left", [z.ic(b), "px"].join(""));
            return lj(a, "top", [z.ic(c), "px"].join(""))
        })
    }
    function Gl(a, b, c) {
        var d = C(a)
            , e = X(d);
        d = D.fc(e, ck);
        var f = D.fc(e, yl)
            , h = D.fc(e, dl)
            , k = D.fc(e, Ml)
            , l = D.fc(e, Fe)
            , m = D.fc(e, Pi)
            , n = D.fc(e, Li);
        e = D.fc(e, Ee);
        e = Kl(b, c, e);
        var p = w(e) ? e : "offboard";
        if (Ed(l))
            try {
                b = {
                    orientation: m,
                    piece: f,
                    source: h,
                    target: p,
                    x: b,
                    y: c
                };
                var r = l.ic ? l.ic(b) : l.call(null, b)
            } catch (y) {
                if (y instanceof Error)
                    ak(rd(["Runtime error with provided onDrop function:", y])),
                        r = null;
                else
                    throw y;
            }
        else
            r = null;
        return R.fc(r, "snapback") ? (pj(d),
            Y.l(a, Dd, Ek, ck, rd([yl, dl]))) : R.fc(r, "remove") ? (h = Dd.fc(n, h),
                pj(d),
                Gk(a, h, new u(null, 1, [$h, !1], null)),
                Y.l(a, Dd, Ek, ck, rd([yl, dl]))) : w(e) ? (pj(d),
                    Fk(a, new Df(null, 1, 5, Ff, [new u(null, 3, [$h, !1, Wh, h, Ei, e], null)], null)),
                    Y.l(a, Dd, Ek, ck, rd([yl, dl]))) : R.fc(p, "offboard") && R.fc(k, "snapback") ? (pj(d),
                        Y.l(a, Dd, Ek, ck, rd([yl, dl]))) : R.fc(p, "offboard") && R.fc(k, "remove") ? (h = Dd.fc(n, h),
                            pj(d),
                            Gk(a, h, new u(null, 1, [$h, !1], null)),
                            Y.l(a, Dd, Ek, ck, rd([yl, dl]))) : null
    }
    function Eb(a, b) {
        window.addEventListener("mousemove", function (c) {
            var d = C(b)
                , e = X(d);
            d = D.fc(e, Ek);
            e = D.fc(e, ck);
            return w(d) ? Rl(e, O(c, "clientX"), O(c, "clientY")) : null
        });
        window.addEventListener("mouseup", function (c) {
            var d = C(b);
            d = X(d);
            d = D.fc(d, Ek);
            return w(d) ? Gl(b, O(c, "clientX"), O(c, "clientY")) : null
        });
        window.addEventListener("touchend", function (c) {
            var d = C(b);
            d = X(d);
            d = D.fc(d, Ek);
            c = O(c, "changedTouches");
            c = null == c ? null : c[0];
            return w(w(d) ? c : d) ? Gl(b, O(c, "clientX"), O(c, "clientY")) : null
        });
        window.addEventListener("touchmove", function (c) {
            var d = C(b)
                , e = X(d);
            d = D.fc(e, Ek);
            e = D.fc(e, ck);
            c = O(c, "touches");
            c = null == c ? null : c[0];
            return w(w(d) ? c : d) ? Rl(e, O(c, "clientX"), O(c, "clientY")) : null
        });
        window.addEventListener("resize", bc(function () {
            return Xg(b)
        }));
        a.addEventListener("mouseleave", function () {
            return Y.o(b, V, Al, null)
        });
        a.addEventListener("mousemove", function (c) {
            var d = O(c, "clientX")
                , e = O(c, "clientY")
                , f = C(b)
                , h = X(f)
                , k = D.fc(h, Pi);
            f = D.fc(h, Tl);
            var l = D.fc(h, Ll)
                , m = D.fc(h, Li)
                , n = D.fc(h, Ee);
            h = D.fc(h, Al);
            d = Kl(d, e, n);
            R.fc(d, h) ? c = null : (Y.o(b, V, Al, d),
                w(w(h) ? Ed(l) : h) && (e = D.fc(m, h),
                    e = {
                        orientation: k,
                        piece: e,
                        position: yh(m),
                        square: h,
                        toSquare: w(d) ? d : "off-board"
                    },
                    l.fc ? l.fc(e, c) : l.call(null, e, c)),
                w(w(d) ? Ed(f) : d) ? (l = D.fc(m, d),
                    k = {
                        orientation: k,
                        piece: l,
                        position: yh(m),
                        square: d,
                        fromSquare: w(h) ? h : "off-board"
                    },
                    c = f.fc ? f.fc(k, c) : f.call(null, k, c)) : c = null);
            return c
        });
        a.addEventListener("mousedown", function (c) {
            Hl(c);
            var d = C(b)
                , e = X(d);
            d = D.fc(e, yk);
            var f = D.fc(e, Nl)
                , h = D.fc(e, zl)
                , k = D.fc(e, Pi)
                , l = D.fc(e, Li)
                , m = D.fc(e, Ee);
            D.fc(e, Gj);
            e = O(c, "clientX");
            var n = O(c, "clientY");
            m = Kl(e, n, m);
            var p = D.fc(l, m);
            Ed(h) && (k = {
                orientation: k,
                piece: p,
                position: yh(l),
                square: m
            },
                h.fc ? h.fc(k, c) : h.call(null, k, c));
            w(w(p) ? !0 === d || !0 === f : p) && Ql(b, m, p, e, n);
            return null
        });
        a.addEventListener("mouseup", function (c) {
            var d = C(b)
                , e = X(d);
            d = D.fc(e, Sl);
            var f = D.fc(e, Pi)
                , h = D.fc(e, Li);
            e = D.fc(e, Ee);
            e = Kl(O(c, "clientX"), O(c, "clientY"), e);
            var k = D.fc(h, e);
            Ed(d) ? (f = {
                orientation: f,
                piece: k,
                position: yh(h),
                square: e
            },
                c = d.fc ? d.fc(f, c) : d.call(null, f, c)) : c = null;
            return c
        });
        a.addEventListener("touchstart", function (c) {
            Hl(c);
            var d = C(b)
                , e = X(d);
            d = D.fc(e, yk);
            var f = D.fc(e, Lj)
                , h = D.fc(e, Pi)
                , k = D.fc(e, Li)
                , l = D.fc(e, Ee)
                , m = D.fc(e, Ol);
            D.fc(e, Gj);
            e = O(c, "touches")[0];
            c = O(e, "clientX");
            e = O(e, "clientY");
            l = Kl(c, e, l);
            var n = D.fc(k, l);
            Ed(f) && (h = {
                orientation: h,
                position: yh(k)
            },
                f.Ac ? f.Ac(l, n, h) : f.call(null, l, n, h));
            w(w(n) ? !0 === d || !0 === m : n) && Ql(b, l, n, c, e);
            return null
        });
        a.addEventListener("transitionend", function (c) {
            c = O(O(c, "target"), "id");
            var d = mf(C(b), new Df(null, 2, 5, Ff, [vi, c], null));
            w(d) ? (d.s ? d.s() : d.call(null),
                c = Y.l(b, of, new Df(null, 1, 5, Ff, [vi], null), Dd, rd([c]))) : c = null;
            return c
        })
    }
    function bl(a) {
        return R.fc(a, "white") ? "black" : "white"
    }
    function cl(a) {
        var b = C(a)
            , c = X(b);
        b = D.fc(c, Ri);
        var d = D.fc(c, Zh)
            , e = D.fc(c, Nh)
            , f = D.fc(c, Pi)
            , h = D.fc(c, ii)
            , k = D.fc(c, Li)
            , l = D.fc(c, Th);
        c = new af("");
        for (var m = J(bg(d)), n = null, p = 0, r = 0; ;)
            if (r < p) {
                var y = n.C(null, r);
                pj(y);
                r += 1
            } else if (m = J(m))
                n = m,
                    Pd(n) ? (m = tc(n),
                        r = uc(n),
                        n = m,
                        p = U(m),
                        m = r) : (m = N(n),
                            pj(m),
                            m = P(n),
                            n = null,
                            p = 0),
                    r = 0;
            else
                break;
        l = J(cg(l));
        m = null;
        for (p = n = 0; ;)
            if (p < n)
                r = m.C(null, p),
                    pj(r),
                    p += 1;
            else if (l = J(l))
                m = l,
                    Pd(m) ? (l = tc(m),
                        p = uc(m),
                        m = l,
                        n = U(l),
                        l = p) : (l = N(m),
                            pj(l),
                            l = P(m),
                            m = null,
                            n = 0),
                    p = 0;
            else
                break;
        Y.o(a, V, Th, Te);
        k = J(k);
        l = null;
        for (n = m = 0; ;)
            if (n < m)
                r = l.C(null, n),
                    p = Bd(r, 0, null),
                    r = Bd(r, 1, null),
                    y = dk(),
                    Y.Ac(c, z, bk(new u(null, 8, [cj, f, Ri, b, Si, y, si, !1, oi, r, ii, h, xi, p, Ui, b / 8], null))),
                    Y.o(a, nf, new Df(null, 2, 5, Ff, [Th, p], null), y),
                    n += 1;
            else if (k = J(k))
                Pd(k) ? (m = tc(k),
                    k = uc(k),
                    l = m,
                    m = U(m)) : (m = N(k),
                        l = Bd(m, 0, null),
                        m = Bd(m, 1, null),
                        n = dk(),
                        Y.Ac(c, z, bk(new u(null, 8, [cj, f, Ri, b, Si, n, si, !1, oi, m, ii, h, xi, l, Ui, b / 8], null))),
                        Y.o(a, nf, new Df(null, 2, 5, Ff, [Th, l], null), n),
                        k = P(k),
                        l = null,
                        m = 0),
                    n = 0;
            else
                break;
        a = J(cg(d));
        d = null;
        for (k = h = 0; ;)
            if (k < h)
                l = d.C(null, k),
                    Ck(l) ? Y.Ac(c, z, Zj(Og.l(rd([l, new u(null, 2, [Ri, b, Pi, f], null)])))) : Dk(l) ? Y.Ac(c, z, Yj(Og.l(rd([l, new u(null, 2, [Ri, b, Pi, f], null)])))) : console.warn("draw-items-instant! Unrecognized Item type:", qh(rd([l]))),
                    k += 1;
            else if (a = J(a))
                d = a,
                    Pd(d) ? (a = tc(d),
                        k = uc(d),
                        d = a,
                        h = U(a),
                        a = k) : (a = N(d),
                            Ck(a) ? Y.Ac(c, z, Zj(Og.l(rd([a, new u(null, 2, [Ri, b, Pi, f], null)])))) : Dk(a) ? Y.Ac(c, z, Yj(Og.l(rd([a, new u(null, 2, [Ri, b, Pi, f], null)])))) : console.warn("draw-items-instant! Unrecognized Item type:", qh(rd([a]))),
                            a = P(d),
                            d = null,
                            h = 0),
                    k = 0;
            else
                break;
        mj(e, C(c))
    }
    function el(a) {
        a = gf(Dk, cg(Zh.ic(C(a))));
        return Wg(Z.fc(xi, a), a)
    }
    function fl(a, b) {
        return sk(Vi(a, "CHESSBOARD_CIRCLE"), Ik(b))
    }
    function gl(a, b) {
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Qh, b], null)], null));
        return Y.l(a, of, new Df(null, 1, 5, Ff, [Zh], null), Dd, rd([b]))
    }
    function hl(a, b) {
        if (xk(b)) {
            var c = el(a);
            b = D.fc(c, b);
            a = w(b) ? gl(a, Si.ic(b)) : null
        } else
            a = gl(a, b);
        return a
    }
    function il(a) {
        var b = Z.fc(Si, gf(Dk, cg(Zh.ic(C(a)))))
            , c = Z.fc(function (d) {
                return new u(null, 1, [Qh, d], null)
            }, b);
        rj(a, c);
        Y.o(a, of, new Df(null, 1, 5, Ff, [Zh], null), function (d) {
            return Ne(Dd, d, b)
        });
        return null
    }
    function jl(a, b) {
        var c = X(b);
        b = D.fc(c, ki);
        var d = D.fc(c, Si)
            , e = D.fc(c, ni)
            , f = D.fc(c, Oh);
        c = D.fc(c, xi);
        var h = C(a)
            , k = X(h);
        h = D.fc(k, Ri);
        k = D.fc(k, Pi);
        d = w(d) ? d : Pj("item");
        var l = kl.ic ? kl.ic(f) : kl.call(null, f);
        f = new u(null, 6, [ki, b, Si, d, ni, e, Oh, l, xi, c, $i, "CHESSBOARD_CIRCLE"], null);
        b = Yj(new u(null, 7, [Ri, h, ki, b, Si, d, ni, e, Pi, k, Oh, l, xi, c], null));
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Ih, b], null)], null));
        Y.o(a, nf, new Df(null, 2, 5, Ff, [Zh, d], null), f);
        return d
    }
    var ll = new u(null, 3, [ki, "#777", ni, .8, Oh, "small"], null);
    function ml(a) {
        var b = Wd(nl, a);
        return b ? b : ol.ic ? ol.ic(a) : ol.call(null, a)
    }
    function pl(a, b, c, d) {
        var e = xk(b) ? Og.l(rd([ll, new u(null, 1, [xi, b], null)])) : ll;
        e = "string" === typeof c && bb(ml(c)) ? Og.l(rd([e, new u(null, 1, [ki, c], null)])) : e;
        c = w(ml(c)) ? Og.l(rd([e, new u(null, 1, [Oh, c], null)])) : e;
        d = w(ml(d)) ? Og.l(rd([c, new u(null, 1, [Oh, d], null)])) : c;
        b = cb(b) && xk(O(b, "square")) ? Og.l(rd([d, Dh(b, rd([Eh, !0]))])) : d;
        xk(xi.ic(b)) ? (b = X(b),
            d = D.fc(b, xi),
            c = el(a),
            d = D.fc(c, d),
            w(d) ? (gl(a, Si.ic(d)),
                a = jl(a, V.Ac(b, Si, Si.ic(d)))) : a = jl(a, b)) : a = Hk(rd(["Invalid square passed to .addCircle() method:", xi.ic(b)]));
        return a
    }
    var ql = new u(null, 3, [ki, "#777", ni, .8, Oh, "large"], null)
        , nl = new Sg(null, new u(null, 3, ["small", null, "medium", null, "large", null], null), null);
    function ol(a) {
        return "number" === typeof a && 0 <= a
    }
    function rl(a) {
        return Wd(nl, a) || ol(a)
    }
    function kl(a) {
        var b = Ik(a);
        return R.fc(b, "small") ? .4 : R.fc(b, "medium") ? .7 : R.fc(b, "large") ? .9 : "number" === typeof a ? a : .9
    }
    function sl(a, b) {
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Qh, b], null)], null));
        return Y.l(a, of, new Df(null, 1, 5, Ff, [Zh], null), Dd, rd([b]))
    }
    function tl(a, b) {
        b = X(b);
        var c = D.fc(b, ci)
            , d = D.fc(b, Wi);
        return kb(function (e, f) {
            var h = Bd(f, 0, null);
            f = Bd(f, 1, null);
            return R.fc($i.ic(f), "CHESSBOARD_ARROW") && R.fc(ci.ic(f), c) && R.fc(Wi.ic(f), d) ? V.Ac(e, h, f) : e
        }, Te, Zh.ic(C(a)))
    }
    function ul(a, b) {
        if (Bk(b)) {
            b = tl(a, ok(b, "ARROW_FORMAT"));
            b = J(bg(b));
            for (var c = null, d = 0, e = 0; ;)
                if (e < d) {
                    var f = c.C(null, e);
                    sl(a, f);
                    e += 1
                } else if (b = J(b))
                    c = b,
                        Pd(c) ? (b = tc(c),
                            d = uc(c),
                            c = b,
                            f = U(b),
                            b = d,
                            d = f) : (f = N(c),
                                sl(a, f),
                                b = P(c),
                                c = null,
                                d = 0),
                        e = 0;
                else
                    return null
        } else
            return c = mf(C(a), new Df(null, 2, 5, Ff, [Zh, b], null)),
                w(c) ? sl(a, b) : Hk(rd(["Invalid argument passed to removeArrow():", b]))
    }
    function vl(a, b, c, d) {
        var e = Bk(b) ? Og.l(rd([ql, ok(b, "ARROW_FORMAT")])) : ql;
        e = "string" !== typeof c || rl(c) ? e : Og.l(rd([e, new u(null, 1, [ki, c], null)]));
        c = rl(c) ? Og.l(rd([e, new u(null, 1, [Oh, c], null)])) : e;
        d = rl(d) ? Og.l(rd([c, new u(null, 1, [Oh, d], null)])) : c;
        b = cb(b) && xk(O(b, "start")) && xk(O(b, "end")) ? Og.l(rd([d, Dh(b, rd([Eh, !0]))])) : d;
        e = X(b);
        b = D.fc(e, ki);
        d = D.fc(e, Wi);
        c = D.fc(e, ni);
        var f = D.fc(e, Oh);
        e = D.fc(e, ci);
        var h = C(a)
            , k = X(h);
        h = D.fc(k, Ri);
        var l = D.fc(k, Pi);
        k = Pj("item");
        var m = kl(f);
        f = new u(null, 7, [Si, k, ki, b, Wi, d, ni, c, Oh, m, ci, e, $i, "CHESSBOARD_ARROW"], null);
        b = Zj(new u(null, 8, [Ri, h, ki, b, Wi, d, Si, k, ni, c, Pi, l, Oh, m, ci, e], null));
        rj(a, new Df(null, 1, 5, Ff, [new u(null, 1, [Ih, b], null)], null));
        Y.o(a, nf, new Df(null, 2, 5, Ff, [Zh, k], null), f);
        return k
    }
    function wl(a, b) {
        return sk(Vi(a, "CHESSBOARD_ARROW"), Ik(b))
    }
    function xl(a, b) {
        return sk(Zh.ic(C(a)), Ik(b))
    }
    var Ze = function Ze(a) {
        switch (arguments.length) {
            case 1:
                return Ze.ic(arguments[0]);
            case 2:
                return Ze.fc(arguments[0], arguments[1]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    };
    Ze.ic = function (a) {
        return Ze.fc(a, null)
    }
        ;
    Ze.fc = function (a, b) {
        b = Ik(b);
        return R.fc(b, "white") ? (Y.o(a, V, Pi, "white"),
            "white") : R.fc(b, "black") ? (Y.o(a, V, Pi, "black"),
                "black") : R.fc(b, "flip") ? (Y.o(a, pf, Pi, bl),
                    b = Pi.ic(C(a)),
                    R.fc(b, "white") ? Y.o(a, V, Pi, "white") : Y.o(a, V, Pi, "black"),
                    b) : Pi.ic(C(a))
    }
        ;
    Ze.G = 2;
    function Bl(a, b) {
        return sk(Vi(a, "CHESSBOARD_PIECE"), Ik(b))
    }
    function Cl(a) {
        return Y.o(a, V, Di, !1)
    }
    function Dl(a) {
        return Y.o(a, V, Di, !0)
    }
    function El(a) {
        return Y.o(a, pf, Di, bb)
    }
    function Fl(a) {
        var b = C(a)
            , c = X(b);
        b = D.fc(c, qi);
        var d = X(c);
        c = D.fc(d, Ki);
        var e = D.fc(d, Pi)
            , f = D.fc(d, mi)
            , h = D.fc(d, Nh)
            , k = D.fc(d, xc);
        e = ["\x3cdiv class\x3d'chessboard-21da3{show-notation}' id\x3d'{container-id}'\x3e\x3cdiv class\x3dboard-container-41a68\x3e\x3cdiv id\x3d'{items-container-id}' class\x3d'items-container-c9182'\x3e\x3c/div\x3e\x3cdiv id\x3d'{squares-container-id}' class\x3d'squares-2dea6 ", R.fc(e, "white") ? "orientation-white-4de03" : "orientation-black-a8276", "' style\x3d'height:0'\x3e{Squares}\x3c/div\x3e\x3cdiv class\x3d'notation-files-c3c0a'\x3e{NotationFiles}\x3c/div\x3e\x3cdiv class\x3d'notation-ranks-d3f97'\x3e{NotationRanks}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"].join("");
        var l = nj()
            , m = oj();
        f = w(f) ? "" : " hide-notation-cbe71";
        var n = X(d)
            , p = D.fc(n, Mi);
        d = D.fc(n, di);
        n = D.fc(n, Ee);
        var r = new af("")
            , y = new af(!0);
        p = J(me(ch(0, p)));
        for (var B = null, A = 0, M = 0; ;)
            if (M < A) {
                var S = B.C(null, M);
                Y.Ac(r, z, ["\x3cdiv class\x3d'rank-98fa8' data-rank-idx\x3d'", z.ic(S + 1), "'\x3e"].join(""));
                for (var W = J(ch(0, d)), ra = null, Da = 0, ea = 0; ;)
                    if (ea < Da) {
                        var v = ra.C(null, ea);
                        v = [z.ic(jd(bh, v)), z.ic(S + 1)].join("");
                        Y.Ac(r, z, Td(new u(null, 3, [Ha, v, ki, w(C(y)) ? "white" : "black", Si, D.fc(n, v)], null)));
                        Y.fc(y, bb);
                        ea += 1
                    } else if (W = J(W))
                        Pd(W) ? (Da = tc(W),
                            W = uc(W),
                            ra = Da,
                            Da = U(Da)) : (ra = N(W),
                                ra = [z.ic(jd(bh, ra)), z.ic(S + 1)].join(""),
                                Y.Ac(r, z, Td(new u(null, 3, [Ha, ra, ki, w(C(y)) ? "white" : "black", Si, D.fc(n, ra)], null))),
                                Y.fc(y, bb),
                                W = P(W),
                                ra = null,
                                Da = 0),
                            ea = 0;
                    else
                        break;
                Y.Ac(r, z, "\x3c/div\x3e");
                Y.fc(y, bb);
                M += 1
            } else if (p = J(p)) {
                if (Pd(p))
                    A = tc(p),
                        p = uc(p),
                        B = A,
                        A = U(A);
                else {
                    B = N(p);
                    Y.Ac(r, z, ["\x3cdiv class\x3d'rank-98fa8' data-rank-idx\x3d'", z.ic(B + 1), "'\x3e"].join(""));
                    A = J(ch(0, d));
                    M = null;
                    for (W = S = 0; ;)
                        if (W < S)
                            ra = M.C(null, W),
                                ra = [z.ic(jd(bh, ra)), z.ic(B + 1)].join(""),
                                Y.Ac(r, z, Td(new u(null, 3, [Ha, ra, ki, w(C(y)) ? "white" : "black", Si, D.fc(n, ra)], null))),
                                Y.fc(y, bb),
                                W += 1;
                        else if (A = J(A))
                            Pd(A) ? (S = tc(A),
                                A = uc(A),
                                M = S,
                                S = U(S)) : (M = N(A),
                                    M = [z.ic(jd(bh, M)), z.ic(B + 1)].join(""),
                                    Y.Ac(r, z, Td(new u(null, 3, [Ha, M, ki, w(C(y)) ? "white" : "black", Si, D.fc(n, M)], null))),
                                    Y.fc(y, bb),
                                    A = P(A),
                                    M = null,
                                    S = 0),
                                W = 0;
                        else
                            break;
                    Y.Ac(r, z, "\x3c/div\x3e");
                    Y.fc(y, bb);
                    p = P(p);
                    B = null;
                    A = 0
                }
                M = 0
            } else
                break;
        d = C(r);
        c = Qj(e, new u(null, 7, [Ki, c, Nh, h, Gh, l, Jh, m, Ka, f, De, d, xc, k], null));
        jj(b).innerHTML = c;
        Xg(a)
    }
    var aj = new u(null, 4, [Ji, new u(null, 3, [Li, "outside", ti, !1, $i, "letters"], null), Rh, new u(null, 3, [Li, "outside", ti, !1, $i, "numbers"], null), Vh, new u(null, 3, [Li, "outside", ti, !1, $i, "numbers"], null), Uh, new u(null, 3, [Li, "outside", ti, !1, $i, "letters"], null)], null);
    function lc(a, b, c, d) {
        return w(d) && (R.fc(Pi.ic(c), Pi.ic(d)) || (R.fc("white", Pi.ic(d)) ? (a = ["#", z.ic(Ki.ic(C(b))), " .squares-2dea6"].join(""),
            a = jj(a),
            Xj(a, "orientation-black-a8276"),
            Wj(a, "orientation-white-4de03")) : (a = ["#", z.ic(Ki.ic(C(b))), " .squares-2dea6"].join(""),
                a = jj(a),
                Xj(a, "orientation-white-4de03"),
                Wj(a, "orientation-black-a8276")),
            cl(b)),
            R.fc(Di.ic(c), Di.ic(d)) || (w(Di.ic(d)) ? Xj(jj(Ki.ic(d)), "hide-notation-cbe71") : Wj(jj(Ki.ic(d)), "hide-notation-cbe71")),
            b = Vj.ic(d),
            c = Li.ic(c),
            d = Li.ic(d),
            Ed(b) && Re(c, d)) ? (c = yh(c),
                d = yh(d),
                b.fc ? b.fc(c, d) : b.call(null, c, d)) : null
    }
    function wb(a, b) {
        var c = Pj("container")
            , d = Pj("items-container")
            , e = Pj("squares-container")
            , f = Pj("dragging-piece");
        b = mb(b);
        b = fj(b);
        var h = xj();
        c = V.l(b, Xh, 80, rd([vi, Te, Ki, c, gi, aj, bj, f, Zh, Te, Nh, d, di, 8, Mi, 8, ii, .95, qi, a, Di, !0, Th, Te, Ee, h, xc, e]));
        var k = new af(c);
        jc(k);
        Fl(k);
        Eb(a, k);
        cl(k);
        return {
            getCircles: Xe(fl, k),
            setConfig: Xe(Yl, k),
            getOrientation: Ye(k),
            clearPieces: Xe(Yk, k),
            pieces: Xe(Bl, k),
            addItem: Xe(Ga, k),
            removeItem: Xe(Ma, k),
            config: Xe(Zl, k),
            setPosition: Xe(Wk, k),
            clearArrows: Xe(Mj, k),
            showCoordinates: Xe(Dl, k),
            getPosition: Xe(Vk, k),
            toggleCoordinates: Xe(El, k),
            clearCircles: Xe(il, k),
            hideCoordinates: Xe(Cl, k),
            flip: function () {
                return Ze.fc(k, "flip")
            },
            coordinates: function () {
                return Tc
            },
            arrows: Xe(wl, k),
            getArrows: Xe(wl, k),
            position: Xe(Xk, k),
            setCoordinates: function () {
                return Tc
            },
            items: Xe(xl, k),
            destroy: Xe(kj, k),
            getItems: Xe(xl, k),
            start: Xe(Zk, k),
            clearItems: function () {
                return Tc
            },
            move: Xe(Uk, k),
            getPieces: Xe(Bl, k),
            setOrientation: Xe(Ze, k),
            getCoordinates: function () {
                return Tc
            },
            fen: Xe($k, k),
            resize: Xe(Xg, k),
            clear: Xe(Yk, k),
            removeArrow: Xe(ul, k),
            getConfig: Xe(Xl, k),
            circles: Xe(fl, k),
            addCircle: Xe(pl, k),
            orientation: Xe(Ze, k),
            addArrow: Xe(vl, k),
            removeCircle: Xe(hl, k),
            moveItem: Xe(Qa, k)
        }
    }
    function Il(a) {
        switch (arguments.length) {
            case 0:
                return Il.s();
            case 1:
                return Il.ic(arguments[0]);
            case 2:
                return Il.fc(arguments[0], arguments[1]);
            default:
                throw Error(["Invalid arity: ", z.ic(arguments.length)].join(""));
        }
    }
    Il.s = function () {
        return ak(rd(["Please pass a DOM element, element ID, or query selector as the first argument to the Chessboard2() function."]))
    }
        ;
    Il.ic = function (a) {
        return Il.fc(a, Te)
    }
        ;
    Il.fc = function (a, b) {
        var c = jj(a);
        return bb(c) ? ak(rd(["Unable to find DOM element:", a])) : wb(c, b)
    }
        ;
    Il.G = 2;
    "undefined" === typeof window || Ed(O(window, "Chessboard2")) || (window.Chessboard2 = Il);
    "undefined" !== typeof exports && Re(db(O(exports, "nodeName")), "string") && (exports.Chessboard2 = Il);
}
).call(this);
