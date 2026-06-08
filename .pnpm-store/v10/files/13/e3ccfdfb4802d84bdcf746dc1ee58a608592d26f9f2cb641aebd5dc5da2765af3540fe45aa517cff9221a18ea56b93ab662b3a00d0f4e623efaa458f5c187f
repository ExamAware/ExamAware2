import { g as Ht, s as Vt, w as Bt } from "../core-gSM15mHH.js";
import { b as Jt, e as Qt, j as Yt, j as rn, p as en, k as tn } from "../core-gSM15mHH.js";
var gr = (() => {
  var S = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(z = {}) {
    var u = z, yr, J;
    u.ready = new Promise((r, e) => {
      yr = r, J = e;
    });
    var mr = Object.assign({}, u), br = typeof window == "object", Q = typeof importScripts == "function";
    typeof process == "object" && typeof process.versions == "object" && process.versions.node;
    var R = "";
    function Qr(r) {
      return u.locateFile ? u.locateFile(r, R) : R + r;
    }
    var or;
    (br || Q) && (Q ? R = self.location.href : typeof document < "u" && document.currentScript && (R = document.currentScript.src), S && (R = S), R.indexOf("blob:") !== 0 ? R = R.substr(0, R.replace(/[?#].*/, "").lastIndexOf("/") + 1) : R = "", Q && (or = (r) => {
      var e = new XMLHttpRequest();
      return e.open("GET", r, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
    })), u.print || console.log.bind(console);
    var N = u.printErr || console.error.bind(console);
    Object.assign(u, mr), mr = null, u.arguments && u.arguments, u.thisProgram && u.thisProgram, u.quit && u.quit;
    var X;
    u.wasmBinary && (X = u.wasmBinary), typeof WebAssembly != "object" && sr("no native wasm support detected");
    var Y, wr = !1, U, y, O, L, j, _, Tr, $r;
    function Ar() {
      var r = Y.buffer;
      u.HEAP8 = U = new Int8Array(r), u.HEAP16 = O = new Int16Array(r), u.HEAPU8 = y = new Uint8Array(r), u.HEAPU16 = L = new Uint16Array(r), u.HEAP32 = j = new Int32Array(r), u.HEAPU32 = _ = new Uint32Array(r), u.HEAPF32 = Tr = new Float32Array(r), u.HEAPF64 = $r = new Float64Array(r);
    }
    var Er = [], Cr = [], Rr = [];
    function Yr() {
      if (u.preRun)
        for (typeof u.preRun == "function" && (u.preRun = [u.preRun]); u.preRun.length; )
          te(u.preRun.shift());
      ur(Er);
    }
    function re() {
      ur(Cr);
    }
    function ee() {
      if (u.postRun)
        for (typeof u.postRun == "function" && (u.postRun = [u.postRun]); u.postRun.length; )
          ae(u.postRun.shift());
      ur(Rr);
    }
    function te(r) {
      Er.unshift(r);
    }
    function ne(r) {
      Cr.unshift(r);
    }
    function ae(r) {
      Rr.unshift(r);
    }
    var x = 0, Z = null;
    function ie(r) {
      var e;
      x++, (e = u.monitorRunDependencies) === null || e === void 0 || e.call(u, x);
    }
    function oe(r) {
      var e;
      if (x--, (e = u.monitorRunDependencies) === null || e === void 0 || e.call(u, x), x == 0 && Z) {
        var t = Z;
        Z = null, t();
      }
    }
    function sr(r) {
      var e;
      (e = u.onAbort) === null || e === void 0 || e.call(u, r), r = "Aborted(" + r + ")", N(r), wr = !0, r += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(r);
      throw J(t), t;
    }
    var se = "data:application/octet-stream;base64,", Fr = (r) => r.startsWith(se), H;
    H = "zxing_writer.wasm", Fr(H) || (H = Qr(H));
    function Pr(r) {
      if (r == H && X)
        return new Uint8Array(X);
      if (or)
        return or(r);
      throw "both async and sync fetching of the wasm failed";
    }
    function ue(r) {
      return !X && (br || Q) && typeof fetch == "function" ? fetch(r, {
        credentials: "same-origin"
      }).then((e) => {
        if (!e.ok)
          throw "failed to load wasm binary file at '" + r + "'";
        return e.arrayBuffer();
      }).catch(() => Pr(r)) : Promise.resolve().then(() => Pr(r));
    }
    function Wr(r, e, t) {
      return ue(r).then((n) => WebAssembly.instantiate(n, e)).then((n) => n).then(t, (n) => {
        N(`failed to asynchronously prepare wasm: ${n}`), sr(n);
      });
    }
    function fe(r, e, t, n) {
      return !r && typeof WebAssembly.instantiateStreaming == "function" && !Fr(e) && typeof fetch == "function" ? fetch(e, {
        credentials: "same-origin"
      }).then((a) => {
        var i = WebAssembly.instantiateStreaming(a, t);
        return i.then(n, function(o) {
          return N(`wasm streaming compile failed: ${o}`), N("falling back to ArrayBuffer instantiation"), Wr(e, t, n);
        });
      }) : Wr(e, t, n);
    }
    function ce() {
      var r = {
        a: Rt
      };
      function e(n, a) {
        return g = n.exports, Y = g.R, Ar(), Vr = g.V, ne(g.S), oe(), g;
      }
      ie();
      function t(n) {
        e(n.instance);
      }
      if (u.instantiateWasm)
        try {
          return u.instantiateWasm(r, e);
        } catch (n) {
          N(`Module.instantiateWasm callback failed with error: ${n}`), J(n);
        }
      return fe(X, H, r, t).catch(J), {};
    }
    var ur = (r) => {
      for (; r.length > 0; )
        r.shift()(u);
    };
    u.noExitRuntime;
    var kr = [], le = (r) => {
      var e = new fr(r);
      return e.get_caught() || e.set_caught(!0), e.set_rethrown(!1), kr.push(e), Gr(e.excPtr), e.get_exception_ptr();
    }, M = 0, ve = () => {
      T(0, 0);
      var r = kr.pop();
      qr(r.excPtr), M = 0;
    };
    function fr(r) {
      this.excPtr = r, this.ptr = r - 24, this.set_type = function(e) {
        _[this.ptr + 4 >> 2] = e;
      }, this.get_type = function() {
        return _[this.ptr + 4 >> 2];
      }, this.set_destructor = function(e) {
        _[this.ptr + 8 >> 2] = e;
      }, this.get_destructor = function() {
        return _[this.ptr + 8 >> 2];
      }, this.set_caught = function(e) {
        e = e ? 1 : 0, U[this.ptr + 12 >> 0] = e;
      }, this.get_caught = function() {
        return U[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(e) {
        e = e ? 1 : 0, U[this.ptr + 13 >> 0] = e;
      }, this.get_rethrown = function() {
        return U[this.ptr + 13 >> 0] != 0;
      }, this.init = function(e, t) {
        this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
      }, this.set_adjusted_ptr = function(e) {
        _[this.ptr + 16 >> 2] = e;
      }, this.get_adjusted_ptr = function() {
        return _[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var e = zr(this.get_type());
        if (e)
          return _[this.excPtr >> 2];
        var t = this.get_adjusted_ptr();
        return t !== 0 ? t : this.excPtr;
      };
    }
    var de = (r) => {
      throw M || (M = r), M;
    }, cr = (r) => {
      var e = M;
      if (!e)
        return G(0), 0;
      var t = new fr(e);
      t.set_adjusted_ptr(e);
      var n = t.get_type();
      if (!n)
        return G(0), e;
      for (var a in r) {
        var i = r[a];
        if (i === 0 || i === n)
          break;
        var o = t.ptr + 16;
        if (Kr(i, n, o))
          return G(i), e;
      }
      return G(n), e;
    }, _e = () => cr([]), he = (r) => cr([r]), pe = (r, e) => cr([r, e]), ge = (r, e, t) => {
      var n = new fr(r);
      throw n.init(e, t), M = r, M;
    }, rr = {}, lr = (r) => {
      for (; r.length; ) {
        var e = r.pop(), t = r.pop();
        t(e);
      }
    };
    function vr(r) {
      return this.fromWireType(j[r >> 2]);
    }
    var V = {}, D = {}, er = {}, Sr, Ur = (r) => {
      throw new Sr(r);
    }, jr = (r, e, t) => {
      r.forEach(function(s) {
        er[s] = e;
      });
      function n(s) {
        var f = t(s);
        f.length !== r.length && Ur("Mismatched type converter count");
        for (var c = 0; c < r.length; ++c)
          F(r[c], f[c]);
      }
      var a = new Array(e.length), i = [], o = 0;
      e.forEach((s, f) => {
        D.hasOwnProperty(s) ? a[f] = D[s] : (i.push(s), V.hasOwnProperty(s) || (V[s] = []), V[s].push(() => {
          a[f] = D[s], ++o, o === i.length && n(a);
        }));
      }), i.length === 0 && n(a);
    }, ye = (r) => {
      var e = rr[r];
      delete rr[r];
      var t = e.rawConstructor, n = e.rawDestructor, a = e.fields, i = a.map((o) => o.getterReturnType).concat(a.map((o) => o.setterArgumentType));
      jr([r], i, (o) => {
        var s = {};
        return a.forEach((f, c) => {
          var l = f.fieldName, v = o[c], h = f.getter, d = f.getterContext, k = o[c + a.length], C = f.setter, m = f.setterContext;
          s[l] = {
            read: (K) => v.fromWireType(h(d, K)),
            write: (K, pr) => {
              var ir = [];
              C(m, K, k.toWireType(ir, pr)), lr(ir);
            }
          };
        }), [{
          name: e.name,
          fromWireType: (f) => {
            var c = {};
            for (var l in s)
              c[l] = s[l].read(f);
            return n(f), c;
          },
          toWireType: (f, c) => {
            for (var l in s)
              if (!(l in c))
                throw new TypeError(`Missing field: "${l}"`);
            var v = t();
            for (l in s)
              s[l].write(v, c[l]);
            return f !== null && f.push(n, v), v;
          },
          argPackAdvance: P,
          readValueFromPointer: vr,
          destructorFunction: n
        }];
      });
    }, me = (r, e, t, n, a) => {
    }, be = () => {
      for (var r = new Array(256), e = 0; e < 256; ++e)
        r[e] = String.fromCharCode(e);
      xr = r;
    }, xr, p = (r) => {
      for (var e = "", t = r; y[t]; )
        e += xr[y[t++]];
      return e;
    }, Mr, b = (r) => {
      throw new Mr(r);
    };
    function we(r, e) {
      let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var n = e.name;
      if (r || b(`type "${n}" must have a positive integer typeid pointer`), D.hasOwnProperty(r)) {
        if (t.ignoreDuplicateRegistrations)
          return;
        b(`Cannot register type '${n}' twice`);
      }
      if (D[r] = e, delete er[r], V.hasOwnProperty(r)) {
        var a = V[r];
        delete V[r], a.forEach((i) => i());
      }
    }
    function F(r, e) {
      let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!("argPackAdvance" in e))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return we(r, e, t);
    }
    var P = 8, Te = (r, e, t, n) => {
      e = p(e), F(r, {
        name: e,
        fromWireType: function(a) {
          return !!a;
        },
        toWireType: function(a, i) {
          return i ? t : n;
        },
        argPackAdvance: P,
        readValueFromPointer: function(a) {
          return this.fromWireType(y[a]);
        },
        destructorFunction: null
      });
    };
    function $e() {
      Object.assign(Dr.prototype, {
        get(r) {
          return this.allocated[r];
        },
        has(r) {
          return this.allocated[r] !== void 0;
        },
        allocate(r) {
          var e = this.freelist.pop() || this.allocated.length;
          return this.allocated[e] = r, e;
        },
        free(r) {
          this.allocated[r] = void 0, this.freelist.push(r);
        }
      });
    }
    function Dr() {
      this.allocated = [void 0], this.freelist = [];
    }
    var $ = new Dr(), dr = (r) => {
      r >= $.reserved && --$.get(r).refcount === 0 && $.free(r);
    }, Ae = () => {
      for (var r = 0, e = $.reserved; e < $.allocated.length; ++e)
        $.allocated[e] !== void 0 && ++r;
      return r;
    }, Ee = () => {
      $.allocated.push({
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }), $.reserved = $.allocated.length, u.count_emval_handles = Ae;
    }, I = {
      toValue: (r) => (r || b("Cannot use deleted val. handle = " + r), $.get(r).value),
      toHandle: (r) => {
        switch (r) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            return $.allocate({
              refcount: 1,
              value: r
            });
        }
      }
    }, Ce = (r, e) => {
      e = p(e), F(r, {
        name: e,
        fromWireType: (t) => {
          var n = I.toValue(t);
          return dr(t), n;
        },
        toWireType: (t, n) => I.toHandle(n),
        argPackAdvance: P,
        readValueFromPointer: vr,
        destructorFunction: null
      });
    }, Re = (r, e, t) => {
      if (r[e].overloadTable === void 0) {
        var n = r[e];
        r[e] = function() {
          return r[e].overloadTable.hasOwnProperty(arguments.length) || b(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[e].overloadTable})!`), r[e].overloadTable[arguments.length].apply(this, arguments);
        }, r[e].overloadTable = [], r[e].overloadTable[n.argCount] = n;
      }
    }, Ir = (r, e, t) => {
      u.hasOwnProperty(r) ? ((t === void 0 || u[r].overloadTable !== void 0 && u[r].overloadTable[t] !== void 0) && b(`Cannot register public name '${r}' twice`), Re(u, r, r), u.hasOwnProperty(t) && b(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`), u[r].overloadTable[t] = e) : (u[r] = e, t !== void 0 && (u[r].numArguments = t));
    }, Fe = (r, e, t) => {
      switch (e) {
        case 1:
          return t ? function(n) {
            return this.fromWireType(U[n >> 0]);
          } : function(n) {
            return this.fromWireType(y[n >> 0]);
          };
        case 2:
          return t ? function(n) {
            return this.fromWireType(O[n >> 1]);
          } : function(n) {
            return this.fromWireType(L[n >> 1]);
          };
        case 4:
          return t ? function(n) {
            return this.fromWireType(j[n >> 2]);
          } : function(n) {
            return this.fromWireType(_[n >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    }, Pe = (r, e, t, n) => {
      e = p(e);
      function a() {
      }
      a.values = {}, F(r, {
        name: e,
        constructor: a,
        fromWireType: function(i) {
          return this.constructor.values[i];
        },
        toWireType: (i, o) => o.value,
        argPackAdvance: P,
        readValueFromPointer: Fe(e, t, n),
        destructorFunction: null
      }), Ir(e, a);
    }, tr = (r, e) => Object.defineProperty(e, "name", {
      value: r
    }), Or = (r) => {
      var e = Zr(r), t = p(e);
      return W(e), t;
    }, Hr = (r, e) => {
      var t = D[r];
      return t === void 0 && b(e + " has unknown type " + Or(r)), t;
    }, We = (r, e, t) => {
      var n = Hr(r, "enum");
      e = p(e);
      var a = n.constructor, i = Object.create(n.constructor.prototype, {
        value: {
          value: t
        },
        constructor: {
          value: tr(`${n.name}_${e}`, function() {
          })
        }
      });
      a.values[t] = i, a[e] = i;
    }, ke = (r, e) => {
      switch (e) {
        case 4:
          return function(t) {
            return this.fromWireType(Tr[t >> 2]);
          };
        case 8:
          return function(t) {
            return this.fromWireType($r[t >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e}): ${r}`);
      }
    }, Se = (r, e, t) => {
      e = p(e), F(r, {
        name: e,
        fromWireType: (n) => n,
        toWireType: (n, a) => a,
        argPackAdvance: P,
        readValueFromPointer: ke(e, t),
        destructorFunction: null
      });
    };
    function Ue(r) {
      for (var e = 1; e < r.length; ++e)
        if (r[e] !== null && r[e].destructorFunction === void 0)
          return !0;
      return !1;
    }
    function je(r, e, t, n, a, i) {
      var o = e.length;
      o < 2 && b("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var s = e[1] !== null && t !== null, f = Ue(e), c = e[0].name !== "void", l = o - 2, v = new Array(l), h = [], d = [], k = function() {
        arguments.length !== l && b(`function ${r} called with ${arguments.length} arguments, expected ${l}`), d.length = 0;
        var C;
        h.length = s ? 2 : 1, h[0] = a, s && (C = e[1].toWireType(d, this), h[1] = C);
        for (var m = 0; m < l; ++m)
          v[m] = e[m + 2].toWireType(d, arguments[m]), h.push(v[m]);
        var K = n.apply(null, h);
        function pr(ir) {
          if (f)
            lr(d);
          else
            for (var B = s ? 1 : 2; B < e.length; B++) {
              var Ot = B === 1 ? C : v[B - 2];
              e[B].destructorFunction !== null && e[B].destructorFunction(Ot);
            }
          if (c)
            return e[0].fromWireType(ir);
        }
        return pr(K);
      };
      return tr(r, k);
    }
    var xe = (r, e) => {
      for (var t = [], n = 0; n < r; n++)
        t.push(_[e + n * 4 >> 2]);
      return t;
    }, Me = (r, e, t) => {
      u.hasOwnProperty(r) || Ur("Replacing nonexistant public symbol"), u[r].overloadTable !== void 0 && t !== void 0 ? u[r].overloadTable[t] = e : (u[r] = e, u[r].argCount = t);
    }, De = (r, e, t) => {
      var n = u["dynCall_" + r];
      return t && t.length ? n.apply(null, [e].concat(t)) : n.call(null, e);
    }, nr = [], Vr, w = (r) => {
      var e = nr[r];
      return e || (r >= nr.length && (nr.length = r + 1), nr[r] = e = Vr.get(r)), e;
    }, Ie = (r, e, t) => {
      if (r.includes("j"))
        return De(r, e, t);
      var n = w(e).apply(null, t);
      return n;
    }, Oe = (r, e) => {
      var t = [];
      return function() {
        return t.length = 0, Object.assign(t, arguments), Ie(r, e, t);
      };
    }, q = (r, e) => {
      r = p(r);
      function t() {
        return r.includes("j") ? Oe(r, e) : w(e);
      }
      var n = t();
      return typeof n != "function" && b(`unknown function pointer with signature ${r}: ${e}`), n;
    }, He = (r, e) => {
      var t = tr(e, function(n) {
        this.name = e, this.message = n;
        var a = new Error(n).stack;
        a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, t;
    }, Br, Ve = (r, e) => {
      var t = [], n = {};
      function a(i) {
        if (!n[i] && !D[i]) {
          if (er[i]) {
            er[i].forEach(a);
            return;
          }
          t.push(i), n[i] = !0;
        }
      }
      throw e.forEach(a), new Br(`${r}: ` + t.map(Or).join([", "]));
    }, Be = (r) => {
      r = r.trim();
      const e = r.indexOf("(");
      return e !== -1 ? r.substr(0, e) : r;
    }, Ne = (r, e, t, n, a, i, o) => {
      var s = xe(e, t);
      r = p(r), r = Be(r), a = q(n, a), Ir(r, function() {
        Ve(`Cannot call ${r} due to unbound types`, s);
      }, e - 1), jr([], s, function(f) {
        var c = [f[0], null].concat(f.slice(1));
        return Me(r, je(r, c, null, a, i), e - 1), [];
      });
    }, Xe = (r, e, t) => {
      switch (e) {
        case 1:
          return t ? (n) => U[n >> 0] : (n) => y[n >> 0];
        case 2:
          return t ? (n) => O[n >> 1] : (n) => L[n >> 1];
        case 4:
          return t ? (n) => j[n >> 2] : (n) => _[n >> 2];
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    }, Le = (r, e, t, n, a) => {
      e = p(e);
      var i = (l) => l;
      if (n === 0) {
        var o = 32 - 8 * t;
        i = (l) => l << o >>> o;
      }
      var s = e.includes("unsigned"), f = (l, v) => {
      }, c;
      s ? c = function(l, v) {
        return f(v, this.name), v >>> 0;
      } : c = function(l, v) {
        return f(v, this.name), v;
      }, F(r, {
        name: e,
        fromWireType: i,
        toWireType: c,
        argPackAdvance: P,
        readValueFromPointer: Xe(e, t, n !== 0),
        destructorFunction: null
      });
    }, Ze = (r, e, t) => {
      var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = n[e];
      function i(o) {
        var s = _[o >> 2], f = _[o + 4 >> 2];
        return new a(U.buffer, f, s);
      }
      t = p(t), F(r, {
        name: t,
        fromWireType: i,
        argPackAdvance: P,
        readValueFromPointer: i
      }, {
        ignoreDuplicateRegistrations: !0
      });
    };
    function qe(r) {
      return this.fromWireType(_[r >> 2]);
    }
    var Ge = (r, e, t, n) => {
      if (!(n > 0))
        return 0;
      for (var a = t, i = t + n - 1, o = 0; o < r.length; ++o) {
        var s = r.charCodeAt(o);
        if (s >= 55296 && s <= 57343) {
          var f = r.charCodeAt(++o);
          s = 65536 + ((s & 1023) << 10) | f & 1023;
        }
        if (s <= 127) {
          if (t >= i)
            break;
          e[t++] = s;
        } else if (s <= 2047) {
          if (t + 1 >= i)
            break;
          e[t++] = 192 | s >> 6, e[t++] = 128 | s & 63;
        } else if (s <= 65535) {
          if (t + 2 >= i)
            break;
          e[t++] = 224 | s >> 12, e[t++] = 128 | s >> 6 & 63, e[t++] = 128 | s & 63;
        } else {
          if (t + 3 >= i)
            break;
          e[t++] = 240 | s >> 18, e[t++] = 128 | s >> 12 & 63, e[t++] = 128 | s >> 6 & 63, e[t++] = 128 | s & 63;
        }
      }
      return e[t] = 0, t - a;
    }, Ke = (r, e, t) => Ge(r, y, e, t), ze = (r) => {
      for (var e = 0, t = 0; t < r.length; ++t) {
        var n = r.charCodeAt(t);
        n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++t) : e += 3;
      }
      return e;
    }, Nr = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Je = (r, e, t) => {
      for (var n = e + t, a = e; r[a] && !(a >= n); )
        ++a;
      if (a - e > 16 && r.buffer && Nr)
        return Nr.decode(r.subarray(e, a));
      for (var i = ""; e < a; ) {
        var o = r[e++];
        if (!(o & 128)) {
          i += String.fromCharCode(o);
          continue;
        }
        var s = r[e++] & 63;
        if ((o & 224) == 192) {
          i += String.fromCharCode((o & 31) << 6 | s);
          continue;
        }
        var f = r[e++] & 63;
        if ((o & 240) == 224 ? o = (o & 15) << 12 | s << 6 | f : o = (o & 7) << 18 | s << 12 | f << 6 | r[e++] & 63, o < 65536)
          i += String.fromCharCode(o);
        else {
          var c = o - 65536;
          i += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        }
      }
      return i;
    }, Qe = (r, e) => r ? Je(y, r, e) : "", Ye = (r, e) => {
      e = p(e);
      var t = e === "std::string";
      F(r, {
        name: e,
        fromWireType(n) {
          var a = _[n >> 2], i = n + 4, o;
          if (t)
            for (var s = i, f = 0; f <= a; ++f) {
              var c = i + f;
              if (f == a || y[c] == 0) {
                var l = c - s, v = Qe(s, l);
                o === void 0 ? o = v : (o += "\0", o += v), s = c + 1;
              }
            }
          else {
            for (var h = new Array(a), f = 0; f < a; ++f)
              h[f] = String.fromCharCode(y[i + f]);
            o = h.join("");
          }
          return W(n), o;
        },
        toWireType(n, a) {
          a instanceof ArrayBuffer && (a = new Uint8Array(a));
          var i, o = typeof a == "string";
          o || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || b("Cannot pass non-string to std::string"), t && o ? i = ze(a) : i = a.length;
          var s = hr(4 + i + 1), f = s + 4;
          if (_[s >> 2] = i, t && o)
            Ke(a, f, i + 1);
          else if (o)
            for (var c = 0; c < i; ++c) {
              var l = a.charCodeAt(c);
              l > 255 && (W(f), b("String has UTF-16 code units that do not fit in 8 bits")), y[f + c] = l;
            }
          else
            for (var c = 0; c < i; ++c)
              y[f + c] = a[c];
          return n !== null && n.push(W, s), s;
        },
        argPackAdvance: P,
        readValueFromPointer: qe,
        destructorFunction(n) {
          W(n);
        }
      });
    }, Xr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, rt = (r, e) => {
      for (var t = r, n = t >> 1, a = n + e / 2; !(n >= a) && L[n]; )
        ++n;
      if (t = n << 1, t - r > 32 && Xr)
        return Xr.decode(y.subarray(r, t));
      for (var i = "", o = 0; !(o >= e / 2); ++o) {
        var s = O[r + o * 2 >> 1];
        if (s == 0)
          break;
        i += String.fromCharCode(s);
      }
      return i;
    }, et = (r, e, t) => {
      var n;
      if ((n = t) !== null && n !== void 0 || (t = 2147483647), t < 2)
        return 0;
      t -= 2;
      for (var a = e, i = t < r.length * 2 ? t / 2 : r.length, o = 0; o < i; ++o) {
        var s = r.charCodeAt(o);
        O[e >> 1] = s, e += 2;
      }
      return O[e >> 1] = 0, e - a;
    }, tt = (r) => r.length * 2, nt = (r, e) => {
      for (var t = 0, n = ""; !(t >= e / 4); ) {
        var a = j[r + t * 4 >> 2];
        if (a == 0)
          break;
        if (++t, a >= 65536) {
          var i = a - 65536;
          n += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023);
        } else
          n += String.fromCharCode(a);
      }
      return n;
    }, at = (r, e, t) => {
      var n;
      if ((n = t) !== null && n !== void 0 || (t = 2147483647), t < 4)
        return 0;
      for (var a = e, i = a + t - 4, o = 0; o < r.length; ++o) {
        var s = r.charCodeAt(o);
        if (s >= 55296 && s <= 57343) {
          var f = r.charCodeAt(++o);
          s = 65536 + ((s & 1023) << 10) | f & 1023;
        }
        if (j[e >> 2] = s, e += 4, e + 4 > i)
          break;
      }
      return j[e >> 2] = 0, e - a;
    }, it = (r) => {
      for (var e = 0, t = 0; t < r.length; ++t) {
        var n = r.charCodeAt(t);
        n >= 55296 && n <= 57343 && ++t, e += 4;
      }
      return e;
    }, ot = (r, e, t) => {
      t = p(t);
      var n, a, i, o, s;
      e === 2 ? (n = rt, a = et, o = tt, i = () => L, s = 1) : e === 4 && (n = nt, a = at, o = it, i = () => _, s = 2), F(r, {
        name: t,
        fromWireType: (f) => {
          for (var c = _[f >> 2], l = i(), v, h = f + 4, d = 0; d <= c; ++d) {
            var k = f + 4 + d * e;
            if (d == c || l[k >> s] == 0) {
              var C = k - h, m = n(h, C);
              v === void 0 ? v = m : (v += "\0", v += m), h = k + e;
            }
          }
          return W(f), v;
        },
        toWireType: (f, c) => {
          typeof c != "string" && b(`Cannot pass non-string to C++ string type ${t}`);
          var l = o(c), v = hr(4 + l + e);
          return _[v >> 2] = l >> s, a(c, v + 4, l + e), f !== null && f.push(W, v), v;
        },
        argPackAdvance: P,
        readValueFromPointer: vr,
        destructorFunction(f) {
          W(f);
        }
      });
    }, st = (r, e, t, n, a, i) => {
      rr[r] = {
        name: p(e),
        rawConstructor: q(t, n),
        rawDestructor: q(a, i),
        fields: []
      };
    }, ut = (r, e, t, n, a, i, o, s, f, c) => {
      rr[r].fields.push({
        fieldName: p(e),
        getterReturnType: t,
        getter: q(n, a),
        getterContext: i,
        setterArgumentType: o,
        setter: q(s, f),
        setterContext: c
      });
    }, ft = (r, e) => {
      e = p(e), F(r, {
        isVoid: !0,
        name: e,
        argPackAdvance: 0,
        fromWireType: () => {
        },
        toWireType: (t, n) => {
        }
      });
    }, _r = [], ct = (r, e, t, n) => (r = _r[r], e = I.toValue(e), r(null, e, t, n)), lt = {}, vt = (r) => {
      var e = lt[r];
      return e === void 0 ? p(r) : e;
    }, Lr = () => {
      if (typeof globalThis == "object")
        return globalThis;
      function r(e) {
        e.$$$embind_global$$$ = e;
        var t = typeof $$$embind_global$$$ == "object" && e.$$$embind_global$$$ == e;
        return t || delete e.$$$embind_global$$$, t;
      }
      if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && r(global) ? $$$embind_global$$$ = global : typeof self == "object" && r(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object"))
        return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }, dt = (r) => r === 0 ? I.toHandle(Lr()) : (r = vt(r), I.toHandle(Lr()[r])), _t = (r) => {
      var e = _r.length;
      return _r.push(r), e;
    }, ht = (r, e) => {
      for (var t = new Array(r), n = 0; n < r; ++n)
        t[n] = Hr(_[e + n * 4 >> 2], "parameter " + n);
      return t;
    }, pt = Reflect.construct, gt = (r, e, t) => {
      var n = [], a = r.toWireType(n, t);
      return n.length && (_[e >> 2] = I.toHandle(n)), a;
    }, yt = (r, e, t) => {
      var n = ht(r, e), a = n.shift();
      r--;
      var i = new Array(r), o = (f, c, l, v) => {
        for (var h = 0, d = 0; d < r; ++d)
          i[d] = n[d].readValueFromPointer(v + h), h += n[d].argPackAdvance;
        for (var k = t === 1 ? pt(c, i) : c.apply(f, i), d = 0; d < r; ++d) {
          var C, m;
          (C = (m = n[d]).deleteObject) === null || C === void 0 || C.call(m, i[d]);
        }
        return gt(a, l, k);
      }, s = `methodCaller<(${n.map((f) => f.name).join(", ")}) => ${a.name}>`;
      return _t(tr(s, o));
    }, mt = (r) => {
      r > 4 && ($.get(r).refcount += 1);
    }, bt = (r) => {
      var e = I.toValue(r);
      lr(e), dr(r);
    }, wt = () => {
      sr("");
    }, Tt = (r, e, t) => y.copyWithin(r, e, e + t), $t = () => 2147483648, At = (r) => {
      var e = Y.buffer, t = (r - e.byteLength + 65535) / 65536;
      try {
        return Y.grow(t), Ar(), 1;
      } catch {
      }
    }, Et = (r) => {
      var e = y.length;
      r >>>= 0;
      var t = $t();
      if (r > t)
        return !1;
      for (var n = (f, c) => f + (c - f % c) % c, a = 1; a <= 4; a *= 2) {
        var i = e * (1 + 0.2 / a);
        i = Math.min(i, r + 100663296);
        var o = Math.min(t, n(Math.max(r, i), 65536)), s = At(o);
        if (s)
          return !0;
      }
      return !1;
    }, Ct = (r) => r;
    Sr = u.InternalError = class extends Error {
      constructor(e) {
        super(e), this.name = "InternalError";
      }
    }, be(), Mr = u.BindingError = class extends Error {
      constructor(e) {
        super(e), this.name = "BindingError";
      }
    }, $e(), Ee(), Br = u.UnboundTypeError = He(Error, "UnboundTypeError");
    var Rt = {
      r: le,
      q: ve,
      g: _e,
      d: he,
      k: pe,
      a: ge,
      i: de,
      M: ye,
      C: me,
      H: Te,
      G: Ce,
      K: Pe,
      b: We,
      v: Se,
      L: Ne,
      h: Le,
      e: Ze,
      u: Ye,
      p: ot,
      w: st,
      N: ut,
      I: ft,
      z: ct,
      P: dr,
      B: dt,
      A: yt,
      x: mt,
      Q: bt,
      s: wt,
      F: Tt,
      E: Et,
      y: Ut,
      c: Ft,
      l: jt,
      n: St,
      o: xt,
      f: Pt,
      t: It,
      m: Dt,
      D: kt,
      J: Wt,
      j: Mt,
      O: Ct
    }, g = ce(), hr = u._malloc = (r) => (hr = u._malloc = g.T)(r), W = u._free = (r) => (W = u._free = g.U)(r), Zr = (r) => (Zr = g.W)(r), T = (r, e) => (T = g.X)(r, e), G = (r) => (G = g.Y)(r), A = () => (A = g.Z)(), E = (r) => (E = g._)(r), qr = (r) => (qr = g.$)(r), Gr = (r) => (Gr = g.aa)(r), Kr = (r, e, t) => (Kr = g.ba)(r, e, t), zr = (r) => (zr = g.ca)(r);
    function Ft(r, e) {
      var t = A();
      try {
        return w(r)(e);
      } catch (n) {
        if (E(t), n !== n + 0)
          throw n;
        T(1, 0);
      }
    }
    function Pt(r, e) {
      var t = A();
      try {
        w(r)(e);
      } catch (n) {
        if (E(t), n !== n + 0)
          throw n;
        T(1, 0);
      }
    }
    function Wt(r, e, t, n, a, i) {
      var o = A();
      try {
        w(r)(e, t, n, a, i);
      } catch (s) {
        if (E(o), s !== s + 0)
          throw s;
        T(1, 0);
      }
    }
    function kt(r, e, t, n, a) {
      var i = A();
      try {
        w(r)(e, t, n, a);
      } catch (o) {
        if (E(i), o !== o + 0)
          throw o;
        T(1, 0);
      }
    }
    function St(r, e, t, n) {
      var a = A();
      try {
        return w(r)(e, t, n);
      } catch (i) {
        if (E(a), i !== i + 0)
          throw i;
        T(1, 0);
      }
    }
    function Ut(r, e, t, n, a) {
      var i = A();
      try {
        return w(r)(e, t, n, a);
      } catch (o) {
        if (E(i), o !== o + 0)
          throw o;
        T(1, 0);
      }
    }
    function jt(r, e, t) {
      var n = A();
      try {
        return w(r)(e, t);
      } catch (a) {
        if (E(n), a !== a + 0)
          throw a;
        T(1, 0);
      }
    }
    function xt(r) {
      var e = A();
      try {
        w(r)();
      } catch (t) {
        if (E(e), t !== t + 0)
          throw t;
        T(1, 0);
      }
    }
    function Mt(r, e, t, n, a, i, o, s, f, c, l) {
      var v = A();
      try {
        w(r)(e, t, n, a, i, o, s, f, c, l);
      } catch (h) {
        if (E(v), h !== h + 0)
          throw h;
        T(1, 0);
      }
    }
    function Dt(r, e, t, n) {
      var a = A();
      try {
        w(r)(e, t, n);
      } catch (i) {
        if (E(a), i !== i + 0)
          throw i;
        T(1, 0);
      }
    }
    function It(r, e, t) {
      var n = A();
      try {
        w(r)(e, t);
      } catch (a) {
        if (E(n), a !== a + 0)
          throw a;
        T(1, 0);
      }
    }
    var ar;
    Z = function r() {
      ar || Jr(), ar || (Z = r);
    };
    function Jr() {
      if (x > 0 || (Yr(), x > 0))
        return;
      function r() {
        ar || (ar = !0, u.calledRun = !0, !wr && (re(), yr(u), u.onRuntimeInitialized && u.onRuntimeInitialized(), ee()));
      }
      u.setStatus ? (u.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          u.setStatus("");
        }, 1), r();
      }, 1)) : r();
    }
    if (u.preInit)
      for (typeof u.preInit == "function" && (u.preInit = [u.preInit]); u.preInit.length > 0; )
        u.preInit.pop()();
    return Jr(), z.ready;
  };
})();
function Zt(S) {
  return Ht(
    gr,
    S
  );
}
function qt(S) {
  return Vt(
    gr,
    S
  );
}
async function Gt(S, z) {
  return Bt(
    gr,
    S,
    z
  );
}
export {
  Jt as barcodeFormats,
  Qt as characterSets,
  Yt as defaultEncodeHints,
  rn as defaultWriterOptions,
  Zt as getZXingModule,
  en as purgeZXingModule,
  qt as setZXingModuleOverrides,
  Gt as writeBarcodeToImageFile,
  tn as writeInputEccLevels
};
