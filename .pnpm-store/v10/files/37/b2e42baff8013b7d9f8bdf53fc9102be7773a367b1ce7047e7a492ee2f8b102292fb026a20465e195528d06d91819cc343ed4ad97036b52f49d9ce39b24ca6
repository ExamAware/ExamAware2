import { g as oi, s as si, r as ui, a as li, w as ci } from "../core-gSM15mHH.js";
import { b as bi, c as wi, e as Ti, f as Pi, d as Ci, j as Ai, d as Fi, j as Ei, h as Si, p as Ri, i as Di, t as Wi, k as ki } from "../core-gSM15mHH.js";
var le = (() => {
  var k = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(B = {}) {
    var l = B, Xe, ce;
    l.ready = new Promise((e, r) => {
      Xe = e, ce = r;
    });
    var Ge = Object.assign({}, l), Ze = "./this.program", qe = typeof window == "object", fe = typeof importScripts == "function";
    typeof process == "object" && typeof process.versions == "object" && process.versions.node;
    var H = "";
    function Hr(e) {
      return l.locateFile ? l.locateFile(e, H) : H + e;
    }
    var Fe;
    (qe || fe) && (fe ? H = self.location.href : typeof document < "u" && document.currentScript && (H = document.currentScript.src), k && (H = k), H.indexOf("blob:") !== 0 ? H = H.substr(0, H.replace(/[?#].*/, "").lastIndexOf("/") + 1) : H = "", fe && (Fe = (e) => {
      var r = new XMLHttpRequest();
      return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
    })), l.print || console.log.bind(console);
    var K = l.printErr || console.error.bind(console);
    Object.assign(l, Ge), Ge = null, l.arguments && l.arguments, l.thisProgram && (Ze = l.thisProgram), l.quit && l.quit;
    var Q;
    l.wasmBinary && (Q = l.wasmBinary), typeof WebAssembly != "object" && de("no native wasm support detected");
    var ve, Je = !1, j, W, X, ee, D, m, Ke, Qe;
    function er() {
      var e = ve.buffer;
      l.HEAP8 = j = new Int8Array(e), l.HEAP16 = X = new Int16Array(e), l.HEAPU8 = W = new Uint8Array(e), l.HEAPU16 = ee = new Uint16Array(e), l.HEAP32 = D = new Int32Array(e), l.HEAPU32 = m = new Uint32Array(e), l.HEAPF32 = Ke = new Float32Array(e), l.HEAPF64 = Qe = new Float64Array(e);
    }
    var rr = [], tr = [], nr = [];
    function Ir() {
      if (l.preRun)
        for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; )
          Vr(l.preRun.shift());
      Ee(rr);
    }
    function Ur() {
      Ee(tr);
    }
    function xr() {
      if (l.postRun)
        for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; )
          Br(l.postRun.shift());
      Ee(nr);
    }
    function Vr(e) {
      rr.unshift(e);
    }
    function Yr(e) {
      tr.unshift(e);
    }
    function Br(e) {
      nr.unshift(e);
    }
    var L = 0, re = null;
    function Lr(e) {
      var r;
      L++, (r = l.monitorRunDependencies) === null || r === void 0 || r.call(l, L);
    }
    function Nr(e) {
      var r;
      if (L--, (r = l.monitorRunDependencies) === null || r === void 0 || r.call(l, L), L == 0 && re) {
        var t = re;
        re = null, t();
      }
    }
    function de(e) {
      var r;
      (r = l.onAbort) === null || r === void 0 || r.call(l, e), e = "Aborted(" + e + ")", K(e), Je = !0, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw ce(t), t;
    }
    var zr = "data:application/octet-stream;base64,", ir = (e) => e.startsWith(zr), G;
    G = "zxing_full.wasm", ir(G) || (G = Hr(G));
    function ar(e) {
      if (e == G && Q)
        return new Uint8Array(Q);
      if (Fe)
        return Fe(e);
      throw "both async and sync fetching of the wasm failed";
    }
    function Xr(e) {
      return !Q && (qe || fe) && typeof fetch == "function" ? fetch(e, {
        credentials: "same-origin"
      }).then((r) => {
        if (!r.ok)
          throw "failed to load wasm binary file at '" + e + "'";
        return r.arrayBuffer();
      }).catch(() => ar(e)) : Promise.resolve().then(() => ar(e));
    }
    function or(e, r, t) {
      return Xr(e).then((n) => WebAssembly.instantiate(n, r)).then((n) => n).then(t, (n) => {
        K(`failed to asynchronously prepare wasm: ${n}`), de(n);
      });
    }
    function Gr(e, r, t, n) {
      return !e && typeof WebAssembly.instantiateStreaming == "function" && !ir(r) && typeof fetch == "function" ? fetch(r, {
        credentials: "same-origin"
      }).then((i) => {
        var a = WebAssembly.instantiateStreaming(i, t);
        return a.then(n, function(o) {
          return K(`wasm streaming compile failed: ${o}`), K("falling back to ArrayBuffer instantiation"), or(r, t, n);
        });
      }) : or(r, t, n);
    }
    function Zr() {
      var e = {
        a: Hn
      };
      function r(n, i) {
        return F = n.exports, ve = F.ja, er(), _r = F.na, Yr(F.ka), Nr(), F;
      }
      Lr();
      function t(n) {
        r(n.instance);
      }
      if (l.instantiateWasm)
        try {
          return l.instantiateWasm(e, r);
        } catch (n) {
          K(`Module.instantiateWasm callback failed with error: ${n}`), ce(n);
        }
      return Gr(Q, G, e, t).catch(ce), {};
    }
    var Ee = (e) => {
      for (; e.length > 0; )
        e.shift()(l);
    };
    l.noExitRuntime;
    var he = [], pe = 0, qr = (e) => {
      var r = new Se(e);
      return r.get_caught() || (r.set_caught(!0), pe--), r.set_rethrown(!1), he.push(r), Rr(r.excPtr), r.get_exception_ptr();
    }, x = 0, Jr = () => {
      $(0, 0);
      var e = he.pop();
      Sr(e.excPtr), x = 0;
    };
    function Se(e) {
      this.excPtr = e, this.ptr = e - 24, this.set_type = function(r) {
        m[this.ptr + 4 >> 2] = r;
      }, this.get_type = function() {
        return m[this.ptr + 4 >> 2];
      }, this.set_destructor = function(r) {
        m[this.ptr + 8 >> 2] = r;
      }, this.get_destructor = function() {
        return m[this.ptr + 8 >> 2];
      }, this.set_caught = function(r) {
        r = r ? 1 : 0, j[this.ptr + 12 >> 0] = r;
      }, this.get_caught = function() {
        return j[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(r) {
        r = r ? 1 : 0, j[this.ptr + 13 >> 0] = r;
      }, this.get_rethrown = function() {
        return j[this.ptr + 13 >> 0] != 0;
      }, this.init = function(r, t) {
        this.set_adjusted_ptr(0), this.set_type(r), this.set_destructor(t);
      }, this.set_adjusted_ptr = function(r) {
        m[this.ptr + 16 >> 2] = r;
      }, this.get_adjusted_ptr = function() {
        return m[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var r = Wr(this.get_type());
        if (r)
          return m[this.excPtr >> 2];
        var t = this.get_adjusted_ptr();
        return t !== 0 ? t : this.excPtr;
      };
    }
    var Kr = (e) => {
      throw x || (x = e), x;
    }, Re = (e) => {
      var r = x;
      if (!r)
        return ue(0), 0;
      var t = new Se(r);
      t.set_adjusted_ptr(r);
      var n = t.get_type();
      if (!n)
        return ue(0), r;
      for (var i in e) {
        var a = e[i];
        if (a === 0 || a === n)
          break;
        var o = t.ptr + 16;
        if (Dr(a, n, o))
          return ue(a), r;
      }
      return ue(n), r;
    }, Qr = () => Re([]), et = (e) => Re([e]), rt = (e, r) => Re([e, r]), tt = () => {
      var e = he.pop();
      e || de("no exception to throw");
      var r = e.excPtr;
      throw e.get_rethrown() || (he.push(e), e.set_rethrown(!0), e.set_caught(!1), pe++), x = r, x;
    }, nt = (e, r, t) => {
      var n = new Se(e);
      throw n.init(r, t), x = e, pe++, x;
    }, it = () => pe, _e = {}, De = (e) => {
      for (; e.length; ) {
        var r = e.pop(), t = e.pop();
        t(r);
      }
    };
    function We(e) {
      return this.fromWireType(D[e >> 2]);
    }
    var Z = {}, N = {}, ge = {}, sr, ye = (e) => {
      throw new sr(e);
    }, z = (e, r, t) => {
      e.forEach(function(s) {
        ge[s] = r;
      });
      function n(s) {
        var u = t(s);
        u.length !== e.length && ye("Mismatched type converter count");
        for (var f = 0; f < e.length; ++f)
          I(e[f], u[f]);
      }
      var i = new Array(r.length), a = [], o = 0;
      r.forEach((s, u) => {
        N.hasOwnProperty(s) ? i[u] = N[s] : (a.push(s), Z.hasOwnProperty(s) || (Z[s] = []), Z[s].push(() => {
          i[u] = N[s], ++o, o === a.length && n(i);
        }));
      }), a.length === 0 && n(i);
    }, at = (e) => {
      var r = _e[e];
      delete _e[e];
      var t = r.rawConstructor, n = r.rawDestructor, i = r.fields, a = i.map((o) => o.getterReturnType).concat(i.map((o) => o.setterArgumentType));
      z([e], a, (o) => {
        var s = {};
        return i.forEach((u, f) => {
          var v = u.fieldName, h = o[f], p = u.getter, _ = u.getterContext, P = o[f + i.length], C = u.setter, y = u.setterContext;
          s[v] = {
            read: (R) => h.fromWireType(p(_, R)),
            write: (R, c) => {
              var d = [];
              C(y, R, P.toWireType(d, c)), De(d);
            }
          };
        }), [{
          name: r.name,
          fromWireType: (u) => {
            var f = {};
            for (var v in s)
              f[v] = s[v].read(u);
            return n(u), f;
          },
          toWireType: (u, f) => {
            for (var v in s)
              if (!(v in f))
                throw new TypeError(`Missing field: "${v}"`);
            var h = t();
            for (v in s)
              s[v].write(h, f[v]);
            return u !== null && u.push(n, h), h;
          },
          argPackAdvance: U,
          readValueFromPointer: We,
          destructorFunction: n
        }];
      });
    }, ot = (e, r, t, n, i) => {
    }, st = () => {
      for (var e = new Array(256), r = 0; r < 256; ++r)
        e[r] = String.fromCharCode(r);
      ur = e;
    }, ur, S = (e) => {
      for (var r = "", t = e; W[t]; )
        r += ur[W[t++]];
      return r;
    }, q, g = (e) => {
      throw new q(e);
    };
    function ut(e, r) {
      let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var n = r.name;
      if (e || g(`type "${n}" must have a positive integer typeid pointer`), N.hasOwnProperty(e)) {
        if (t.ignoreDuplicateRegistrations)
          return;
        g(`Cannot register type '${n}' twice`);
      }
      if (N[e] = r, delete ge[e], Z.hasOwnProperty(e)) {
        var i = Z[e];
        delete Z[e], i.forEach((a) => a());
      }
    }
    function I(e, r) {
      let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!("argPackAdvance" in r))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return ut(e, r, t);
    }
    var U = 8, lt = (e, r, t, n) => {
      r = S(r), I(e, {
        name: r,
        fromWireType: function(i) {
          return !!i;
        },
        toWireType: function(i, a) {
          return a ? t : n;
        },
        argPackAdvance: U,
        readValueFromPointer: function(i) {
          return this.fromWireType(W[i]);
        },
        destructorFunction: null
      });
    }, ct = (e) => ({
      count: e.count,
      deleteScheduled: e.deleteScheduled,
      preservePointerOnDelete: e.preservePointerOnDelete,
      ptr: e.ptr,
      ptrType: e.ptrType,
      smartPtr: e.smartPtr,
      smartPtrType: e.smartPtrType
    }), ke = (e) => {
      function r(t) {
        return t.$$.ptrType.registeredClass.name;
      }
      g(r(e) + " instance already deleted");
    }, Oe = !1, lr = (e) => {
    }, ft = (e) => {
      e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }, cr = (e) => {
      e.count.value -= 1;
      var r = e.count.value === 0;
      r && ft(e);
    }, fr = (e, r, t) => {
      if (r === t)
        return e;
      if (t.baseClass === void 0)
        return null;
      var n = fr(e, r, t.baseClass);
      return n === null ? null : t.downcast(n);
    }, vr = {}, vt = () => Object.keys(ie).length, dt = () => {
      var e = [];
      for (var r in ie)
        ie.hasOwnProperty(r) && e.push(ie[r]);
      return e;
    }, te = [], je = () => {
      for (; te.length; ) {
        var e = te.pop();
        e.$$.deleteScheduled = !1, e.delete();
      }
    }, ne, ht = (e) => {
      ne = e, te.length && ne && ne(je);
    }, pt = () => {
      l.getInheritedInstanceCount = vt, l.getLiveInheritedInstances = dt, l.flushPendingDeletes = je, l.setDelayFunction = ht;
    }, ie = {}, _t = (e, r) => {
      for (r === void 0 && g("ptr should not be undefined"); e.baseClass; )
        r = e.upcast(r), e = e.baseClass;
      return r;
    }, gt = (e, r) => (r = _t(e, r), ie[r]), me = (e, r) => {
      (!r.ptrType || !r.ptr) && ye("makeClassHandle requires ptr and ptrType");
      var t = !!r.smartPtrType, n = !!r.smartPtr;
      return t !== n && ye("Both smartPtrType and smartPtr must be specified"), r.count = {
        value: 1
      }, ae(Object.create(e, {
        $$: {
          value: r,
          writable: !0
        }
      }));
    };
    function yt(e) {
      var r = this.getPointee(e);
      if (!r)
        return this.destructor(e), null;
      var t = gt(this.registeredClass, r);
      if (t !== void 0) {
        if (t.$$.count.value === 0)
          return t.$$.ptr = r, t.$$.smartPtr = e, t.clone();
        var n = t.clone();
        return this.destructor(e), n;
      }
      function i() {
        return this.isSmartPointer ? me(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: r,
          smartPtrType: this,
          smartPtr: e
        }) : me(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr: e
        });
      }
      var a = this.registeredClass.getActualType(r), o = vr[a];
      if (!o)
        return i.call(this);
      var s;
      this.isConst ? s = o.constPointerType : s = o.pointerType;
      var u = fr(r, this.registeredClass, s.registeredClass);
      return u === null ? i.call(this) : this.isSmartPointer ? me(s.registeredClass.instancePrototype, {
        ptrType: s,
        ptr: u,
        smartPtrType: this,
        smartPtr: e
      }) : me(s.registeredClass.instancePrototype, {
        ptrType: s,
        ptr: u
      });
    }
    var ae = (e) => typeof FinalizationRegistry > "u" ? (ae = (r) => r, e) : (Oe = new FinalizationRegistry((r) => {
      cr(r.$$);
    }), ae = (r) => {
      var t = r.$$, n = !!t.smartPtr;
      if (n) {
        var i = {
          $$: t
        };
        Oe.register(r, i, r);
      }
      return r;
    }, lr = (r) => Oe.unregister(r), ae(e)), mt = () => {
      Object.assign($e.prototype, {
        isAliasOf(e) {
          if (!(this instanceof $e) || !(e instanceof $e))
            return !1;
          var r = this.$$.ptrType.registeredClass, t = this.$$.ptr;
          e.$$ = e.$$;
          for (var n = e.$$.ptrType.registeredClass, i = e.$$.ptr; r.baseClass; )
            t = r.upcast(t), r = r.baseClass;
          for (; n.baseClass; )
            i = n.upcast(i), n = n.baseClass;
          return r === n && t === i;
        },
        clone() {
          if (this.$$.ptr || ke(this), this.$$.preservePointerOnDelete)
            return this.$$.count.value += 1, this;
          var e = ae(Object.create(Object.getPrototypeOf(this), {
            $$: {
              value: ct(this.$$)
            }
          }));
          return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
        },
        delete() {
          this.$$.ptr || ke(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), lr(this), cr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          return this.$$.ptr || ke(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && g("Object already scheduled for deletion"), te.push(this), te.length === 1 && ne && ne(je), this.$$.deleteScheduled = !0, this;
        }
      });
    };
    function $e() {
    }
    var oe = (e, r) => Object.defineProperty(r, "name", {
      value: e
    }), dr = (e, r, t) => {
      if (e[r].overloadTable === void 0) {
        var n = e[r];
        e[r] = function() {
          return e[r].overloadTable.hasOwnProperty(arguments.length) || g(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`), e[r].overloadTable[arguments.length].apply(this, arguments);
        }, e[r].overloadTable = [], e[r].overloadTable[n.argCount] = n;
      }
    }, Me = (e, r, t) => {
      l.hasOwnProperty(e) ? ((t === void 0 || l[e].overloadTable !== void 0 && l[e].overloadTable[t] !== void 0) && g(`Cannot register public name '${e}' twice`), dr(l, e, e), l.hasOwnProperty(t) && g(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`), l[e].overloadTable[t] = r) : (l[e] = r, t !== void 0 && (l[e].numArguments = t));
    }, $t = 48, bt = 57, wt = (e) => {
      if (e === void 0)
        return "_unknown";
      e = e.replace(/[^a-zA-Z0-9_]/g, "$");
      var r = e.charCodeAt(0);
      return r >= $t && r <= bt ? `_${e}` : e;
    };
    function Tt(e, r, t, n, i, a, o, s) {
      this.name = e, this.constructor = r, this.instancePrototype = t, this.rawDestructor = n, this.baseClass = i, this.getActualType = a, this.upcast = o, this.downcast = s, this.pureVirtualFunctions = [];
    }
    var He = (e, r, t) => {
      for (; r !== t; )
        r.upcast || g(`Expected null or instance of ${t.name}, got an instance of ${r.name}`), e = r.upcast(e), r = r.baseClass;
      return e;
    };
    function Pt(e, r) {
      if (r === null)
        return this.isReference && g(`null is not a valid ${this.name}`), 0;
      r.$$ || g(`Cannot pass "${Ye(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var t = r.$$.ptrType.registeredClass, n = He(r.$$.ptr, t, this.registeredClass);
      return n;
    }
    function Ct(e, r) {
      var t;
      if (r === null)
        return this.isReference && g(`null is not a valid ${this.name}`), this.isSmartPointer ? (t = this.rawConstructor(), e !== null && e.push(this.rawDestructor, t), t) : 0;
      (!r || !r.$$) && g(`Cannot pass "${Ye(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && r.$$.ptrType.isConst && g(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
      var n = r.$$.ptrType.registeredClass;
      if (t = He(r.$$.ptr, n, this.registeredClass), this.isSmartPointer)
        switch (r.$$.smartPtr === void 0 && g("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            r.$$.smartPtrType === this ? t = r.$$.smartPtr : g(`Cannot convert argument of type ${r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name} to parameter type ${this.name}`);
            break;
          case 1:
            t = r.$$.smartPtr;
            break;
          case 2:
            if (r.$$.smartPtrType === this)
              t = r.$$.smartPtr;
            else {
              var i = r.clone();
              t = this.rawShare(t, V.toHandle(() => i.delete())), e !== null && e.push(this.rawDestructor, t);
            }
            break;
          default:
            g("Unsupporting sharing policy");
        }
      return t;
    }
    function At(e, r) {
      if (r === null)
        return this.isReference && g(`null is not a valid ${this.name}`), 0;
      r.$$ || g(`Cannot pass "${Ye(r)}" as a ${this.name}`), r.$$.ptr || g(`Cannot pass deleted object as a pointer of type ${this.name}`), r.$$.ptrType.isConst && g(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);
      var t = r.$$.ptrType.registeredClass, n = He(r.$$.ptr, t, this.registeredClass);
      return n;
    }
    function hr(e) {
      return this.fromWireType(m[e >> 2]);
    }
    var Ft = () => {
      Object.assign(be.prototype, {
        getPointee(e) {
          return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
        },
        destructor(e) {
          var r;
          (r = this.rawDestructor) === null || r === void 0 || r.call(this, e);
        },
        argPackAdvance: U,
        readValueFromPointer: hr,
        deleteObject(e) {
          e !== null && e.delete();
        },
        fromWireType: yt
      });
    };
    function be(e, r, t, n, i, a, o, s, u, f, v) {
      this.name = e, this.registeredClass = r, this.isReference = t, this.isConst = n, this.isSmartPointer = i, this.pointeeType = a, this.sharingPolicy = o, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = f, this.rawDestructor = v, !i && r.baseClass === void 0 ? n ? (this.toWireType = Pt, this.destructorFunction = null) : (this.toWireType = At, this.destructorFunction = null) : this.toWireType = Ct;
    }
    var pr = (e, r, t) => {
      l.hasOwnProperty(e) || ye("Replacing nonexistant public symbol"), l[e].overloadTable !== void 0 && t !== void 0 ? l[e].overloadTable[t] = r : (l[e] = r, l[e].argCount = t);
    }, Et = (e, r, t) => {
      var n = l["dynCall_" + e];
      return t && t.length ? n.apply(null, [r].concat(t)) : n.call(null, r);
    }, we = [], _r, b = (e) => {
      var r = we[e];
      return r || (e >= we.length && (we.length = e + 1), we[e] = r = _r.get(e)), r;
    }, St = (e, r, t) => {
      if (e.includes("j"))
        return Et(e, r, t);
      var n = b(r).apply(null, t);
      return n;
    }, Rt = (e, r) => {
      var t = [];
      return function() {
        return t.length = 0, Object.assign(t, arguments), St(e, r, t);
      };
    }, M = (e, r) => {
      e = S(e);
      function t() {
        return e.includes("j") ? Rt(e, r) : b(r);
      }
      var n = t();
      return typeof n != "function" && g(`unknown function pointer with signature ${e}: ${r}`), n;
    }, Dt = (e, r) => {
      var t = oe(r, function(n) {
        this.name = r, this.message = n;
        var i = new Error(n).stack;
        i !== void 0 && (this.stack = this.toString() + `
` + i.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, t;
    }, gr, yr = (e) => {
      var r = Er(e), t = S(r);
      return Y(r), t;
    }, Te = (e, r) => {
      var t = [], n = {};
      function i(a) {
        if (!n[a] && !N[a]) {
          if (ge[a]) {
            ge[a].forEach(i);
            return;
          }
          t.push(a), n[a] = !0;
        }
      }
      throw r.forEach(i), new gr(`${e}: ` + t.map(yr).join([", "]));
    }, Wt = (e, r, t, n, i, a, o, s, u, f, v, h, p) => {
      v = S(v), a = M(i, a), s && (s = M(o, s)), f && (f = M(u, f)), p = M(h, p);
      var _ = wt(v);
      Me(_, function() {
        Te(`Cannot construct ${v} due to unbound types`, [n]);
      }), z([e, r, t], n ? [n] : [], function(P) {
        P = P[0];
        var C, y;
        n ? (C = P.registeredClass, y = C.instancePrototype) : y = $e.prototype;
        var R = oe(v, function() {
          if (Object.getPrototypeOf(this) !== c)
            throw new q("Use 'new' to construct " + v);
          if (d.constructor_body === void 0)
            throw new q(v + " has no accessible constructor");
          var Mr = d.constructor_body[arguments.length];
          if (Mr === void 0)
            throw new q(`Tried to invoke ctor of ${v} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(d.constructor_body).toString()}) parameters instead!`);
          return Mr.apply(this, arguments);
        }), c = Object.create(y, {
          constructor: {
            value: R
          }
        });
        R.prototype = c;
        var d = new Tt(v, R, c, p, C, a, s, f);
        if (d.baseClass) {
          var A, E;
          (E = (A = d.baseClass).__derivedClasses) !== null && E !== void 0 || (A.__derivedClasses = []), d.baseClass.__derivedClasses.push(d);
        }
        var J = new be(v, d, !0, !1, !1), Ae = new be(v + "*", d, !1, !1, !1), jr = new be(v + " const*", d, !1, !0, !1);
        return vr[e] = {
          pointerType: Ae,
          constPointerType: jr
        }, pr(_, R), [J, Ae, jr];
      });
    }, Ie = (e, r) => {
      for (var t = [], n = 0; n < e; n++)
        t.push(m[r + n * 4 >> 2]);
      return t;
    };
    function kt(e) {
      for (var r = 1; r < e.length; ++r)
        if (e[r] !== null && e[r].destructorFunction === void 0)
          return !0;
      return !1;
    }
    function Ue(e, r, t, n, i, a) {
      var o = r.length;
      o < 2 && g("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var s = r[1] !== null && t !== null, u = kt(r), f = r[0].name !== "void", v = o - 2, h = new Array(v), p = [], _ = [], P = function() {
        arguments.length !== v && g(`function ${e} called with ${arguments.length} arguments, expected ${v}`), _.length = 0;
        var C;
        p.length = s ? 2 : 1, p[0] = i, s && (C = r[1].toWireType(_, this), p[1] = C);
        for (var y = 0; y < v; ++y)
          h[y] = r[y + 2].toWireType(_, arguments[y]), p.push(h[y]);
        var R = n.apply(null, p);
        function c(d) {
          if (u)
            De(_);
          else
            for (var A = s ? 1 : 2; A < r.length; A++) {
              var E = A === 1 ? C : h[A - 2];
              r[A].destructorFunction !== null && r[A].destructorFunction(E);
            }
          if (f)
            return r[0].fromWireType(d);
        }
        return c(R);
      };
      return oe(e, P);
    }
    var Ot = (e, r, t, n, i, a) => {
      var o = Ie(r, t);
      i = M(n, i), z([], [e], function(s) {
        s = s[0];
        var u = `constructor ${s.name}`;
        if (s.registeredClass.constructor_body === void 0 && (s.registeredClass.constructor_body = []), s.registeredClass.constructor_body[r - 1] !== void 0)
          throw new q(`Cannot register multiple constructors with identical number of parameters (${r - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return s.registeredClass.constructor_body[r - 1] = () => {
          Te(`Cannot construct ${s.name} due to unbound types`, o);
        }, z([], o, (f) => (f.splice(1, 0, null), s.registeredClass.constructor_body[r - 1] = Ue(u, f, null, i, a), [])), [];
      });
    }, mr = (e) => {
      e = e.trim();
      const r = e.indexOf("(");
      return r !== -1 ? e.substr(0, r) : e;
    }, jt = (e, r, t, n, i, a, o, s, u) => {
      var f = Ie(t, n);
      r = S(r), r = mr(r), a = M(i, a), z([], [e], function(v) {
        v = v[0];
        var h = `${v.name}.${r}`;
        r.startsWith("@@") && (r = Symbol[r.substring(2)]), s && v.registeredClass.pureVirtualFunctions.push(r);
        function p() {
          Te(`Cannot call ${h} due to unbound types`, f);
        }
        var _ = v.registeredClass.instancePrototype, P = _[r];
        return P === void 0 || P.overloadTable === void 0 && P.className !== v.name && P.argCount === t - 2 ? (p.argCount = t - 2, p.className = v.name, _[r] = p) : (dr(_, r, h), _[r].overloadTable[t - 2] = p), z([], f, function(C) {
          var y = Ue(h, C, v, a, o);
          return _[r].overloadTable === void 0 ? (y.argCount = t - 2, _[r] = y) : _[r].overloadTable[t - 2] = y, [];
        }), [];
      });
    };
    function Mt() {
      Object.assign($r.prototype, {
        get(e) {
          return this.allocated[e];
        },
        has(e) {
          return this.allocated[e] !== void 0;
        },
        allocate(e) {
          var r = this.freelist.pop() || this.allocated.length;
          return this.allocated[r] = e, r;
        },
        free(e) {
          this.allocated[e] = void 0, this.freelist.push(e);
        }
      });
    }
    function $r() {
      this.allocated = [void 0], this.freelist = [];
    }
    var O = new $r(), xe = (e) => {
      e >= O.reserved && --O.get(e).refcount === 0 && O.free(e);
    }, Ht = () => {
      for (var e = 0, r = O.reserved; r < O.allocated.length; ++r)
        O.allocated[r] !== void 0 && ++e;
      return e;
    }, It = () => {
      O.allocated.push({
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }), O.reserved = O.allocated.length, l.count_emval_handles = Ht;
    }, V = {
      toValue: (e) => (e || g("Cannot use deleted val. handle = " + e), O.get(e).value),
      toHandle: (e) => {
        switch (e) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            return O.allocate({
              refcount: 1,
              value: e
            });
        }
      }
    }, Ut = (e, r) => {
      r = S(r), I(e, {
        name: r,
        fromWireType: (t) => {
          var n = V.toValue(t);
          return xe(t), n;
        },
        toWireType: (t, n) => V.toHandle(n),
        argPackAdvance: U,
        readValueFromPointer: We,
        destructorFunction: null
      });
    }, xt = (e, r, t) => {
      switch (r) {
        case 1:
          return t ? function(n) {
            return this.fromWireType(j[n >> 0]);
          } : function(n) {
            return this.fromWireType(W[n >> 0]);
          };
        case 2:
          return t ? function(n) {
            return this.fromWireType(X[n >> 1]);
          } : function(n) {
            return this.fromWireType(ee[n >> 1]);
          };
        case 4:
          return t ? function(n) {
            return this.fromWireType(D[n >> 2]);
          } : function(n) {
            return this.fromWireType(m[n >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${r}): ${e}`);
      }
    }, Vt = (e, r, t, n) => {
      r = S(r);
      function i() {
      }
      i.values = {}, I(e, {
        name: r,
        constructor: i,
        fromWireType: function(a) {
          return this.constructor.values[a];
        },
        toWireType: (a, o) => o.value,
        argPackAdvance: U,
        readValueFromPointer: xt(r, t, n),
        destructorFunction: null
      }), Me(r, i);
    }, Ve = (e, r) => {
      var t = N[e];
      return t === void 0 && g(r + " has unknown type " + yr(e)), t;
    }, Yt = (e, r, t) => {
      var n = Ve(e, "enum");
      r = S(r);
      var i = n.constructor, a = Object.create(n.constructor.prototype, {
        value: {
          value: t
        },
        constructor: {
          value: oe(`${n.name}_${r}`, function() {
          })
        }
      });
      i.values[t] = a, i[r] = a;
    }, Ye = (e) => {
      if (e === null)
        return "null";
      var r = typeof e;
      return r === "object" || r === "array" || r === "function" ? e.toString() : "" + e;
    }, Bt = (e, r) => {
      switch (r) {
        case 4:
          return function(t) {
            return this.fromWireType(Ke[t >> 2]);
          };
        case 8:
          return function(t) {
            return this.fromWireType(Qe[t >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${r}): ${e}`);
      }
    }, Lt = (e, r, t) => {
      r = S(r), I(e, {
        name: r,
        fromWireType: (n) => n,
        toWireType: (n, i) => i,
        argPackAdvance: U,
        readValueFromPointer: Bt(r, t),
        destructorFunction: null
      });
    }, Nt = (e, r, t, n, i, a, o) => {
      var s = Ie(r, t);
      e = S(e), e = mr(e), i = M(n, i), Me(e, function() {
        Te(`Cannot call ${e} due to unbound types`, s);
      }, r - 1), z([], s, function(u) {
        var f = [u[0], null].concat(u.slice(1));
        return pr(e, Ue(e, f, null, i, a), r - 1), [];
      });
    }, zt = (e, r, t) => {
      switch (r) {
        case 1:
          return t ? (n) => j[n >> 0] : (n) => W[n >> 0];
        case 2:
          return t ? (n) => X[n >> 1] : (n) => ee[n >> 1];
        case 4:
          return t ? (n) => D[n >> 2] : (n) => m[n >> 2];
        default:
          throw new TypeError(`invalid integer width (${r}): ${e}`);
      }
    }, Xt = (e, r, t, n, i) => {
      r = S(r);
      var a = (v) => v;
      if (n === 0) {
        var o = 32 - 8 * t;
        a = (v) => v << o >>> o;
      }
      var s = r.includes("unsigned"), u = (v, h) => {
      }, f;
      s ? f = function(v, h) {
        return u(h, this.name), h >>> 0;
      } : f = function(v, h) {
        return u(h, this.name), h;
      }, I(e, {
        name: r,
        fromWireType: a,
        toWireType: f,
        argPackAdvance: U,
        readValueFromPointer: zt(r, t, n !== 0),
        destructorFunction: null
      });
    }, Gt = (e, r, t) => {
      var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], i = n[r];
      function a(o) {
        var s = m[o >> 2], u = m[o + 4 >> 2];
        return new i(j.buffer, u, s);
      }
      t = S(t), I(e, {
        name: t,
        fromWireType: a,
        argPackAdvance: U,
        readValueFromPointer: a
      }, {
        ignoreDuplicateRegistrations: !0
      });
    }, br = (e, r, t, n) => {
      if (!(n > 0))
        return 0;
      for (var i = t, a = t + n - 1, o = 0; o < e.length; ++o) {
        var s = e.charCodeAt(o);
        if (s >= 55296 && s <= 57343) {
          var u = e.charCodeAt(++o);
          s = 65536 + ((s & 1023) << 10) | u & 1023;
        }
        if (s <= 127) {
          if (t >= a)
            break;
          r[t++] = s;
        } else if (s <= 2047) {
          if (t + 1 >= a)
            break;
          r[t++] = 192 | s >> 6, r[t++] = 128 | s & 63;
        } else if (s <= 65535) {
          if (t + 2 >= a)
            break;
          r[t++] = 224 | s >> 12, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | s & 63;
        } else {
          if (t + 3 >= a)
            break;
          r[t++] = 240 | s >> 18, r[t++] = 128 | s >> 12 & 63, r[t++] = 128 | s >> 6 & 63, r[t++] = 128 | s & 63;
        }
      }
      return r[t] = 0, t - i;
    }, Zt = (e, r, t) => br(e, W, r, t), wr = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var n = e.charCodeAt(t);
        n <= 127 ? r++ : n <= 2047 ? r += 2 : n >= 55296 && n <= 57343 ? (r += 4, ++t) : r += 3;
      }
      return r;
    }, Tr = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, qt = (e, r, t) => {
      for (var n = r + t, i = r; e[i] && !(i >= n); )
        ++i;
      if (i - r > 16 && e.buffer && Tr)
        return Tr.decode(e.subarray(r, i));
      for (var a = ""; r < i; ) {
        var o = e[r++];
        if (!(o & 128)) {
          a += String.fromCharCode(o);
          continue;
        }
        var s = e[r++] & 63;
        if ((o & 224) == 192) {
          a += String.fromCharCode((o & 31) << 6 | s);
          continue;
        }
        var u = e[r++] & 63;
        if ((o & 240) == 224 ? o = (o & 15) << 12 | s << 6 | u : o = (o & 7) << 18 | s << 12 | u << 6 | e[r++] & 63, o < 65536)
          a += String.fromCharCode(o);
        else {
          var f = o - 65536;
          a += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
        }
      }
      return a;
    }, Be = (e, r) => e ? qt(W, e, r) : "", Jt = (e, r) => {
      r = S(r);
      var t = r === "std::string";
      I(e, {
        name: r,
        fromWireType(n) {
          var i = m[n >> 2], a = n + 4, o;
          if (t)
            for (var s = a, u = 0; u <= i; ++u) {
              var f = a + u;
              if (u == i || W[f] == 0) {
                var v = f - s, h = Be(s, v);
                o === void 0 ? o = h : (o += "\0", o += h), s = f + 1;
              }
            }
          else {
            for (var p = new Array(i), u = 0; u < i; ++u)
              p[u] = String.fromCharCode(W[a + u]);
            o = p.join("");
          }
          return Y(n), o;
        },
        toWireType(n, i) {
          i instanceof ArrayBuffer && (i = new Uint8Array(i));
          var a, o = typeof i == "string";
          o || i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Int8Array || g("Cannot pass non-string to std::string"), t && o ? a = wr(i) : a = i.length;
          var s = ze(4 + a + 1), u = s + 4;
          if (m[s >> 2] = a, t && o)
            Zt(i, u, a + 1);
          else if (o)
            for (var f = 0; f < a; ++f) {
              var v = i.charCodeAt(f);
              v > 255 && (Y(u), g("String has UTF-16 code units that do not fit in 8 bits")), W[u + f] = v;
            }
          else
            for (var f = 0; f < a; ++f)
              W[u + f] = i[f];
          return n !== null && n.push(Y, s), s;
        },
        argPackAdvance: U,
        readValueFromPointer: hr,
        destructorFunction(n) {
          Y(n);
        }
      });
    }, Pr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Kt = (e, r) => {
      for (var t = e, n = t >> 1, i = n + r / 2; !(n >= i) && ee[n]; )
        ++n;
      if (t = n << 1, t - e > 32 && Pr)
        return Pr.decode(W.subarray(e, t));
      for (var a = "", o = 0; !(o >= r / 2); ++o) {
        var s = X[e + o * 2 >> 1];
        if (s == 0)
          break;
        a += String.fromCharCode(s);
      }
      return a;
    }, Qt = (e, r, t) => {
      var n;
      if ((n = t) !== null && n !== void 0 || (t = 2147483647), t < 2)
        return 0;
      t -= 2;
      for (var i = r, a = t < e.length * 2 ? t / 2 : e.length, o = 0; o < a; ++o) {
        var s = e.charCodeAt(o);
        X[r >> 1] = s, r += 2;
      }
      return X[r >> 1] = 0, r - i;
    }, en = (e) => e.length * 2, rn = (e, r) => {
      for (var t = 0, n = ""; !(t >= r / 4); ) {
        var i = D[e + t * 4 >> 2];
        if (i == 0)
          break;
        if (++t, i >= 65536) {
          var a = i - 65536;
          n += String.fromCharCode(55296 | a >> 10, 56320 | a & 1023);
        } else
          n += String.fromCharCode(i);
      }
      return n;
    }, tn = (e, r, t) => {
      var n;
      if ((n = t) !== null && n !== void 0 || (t = 2147483647), t < 4)
        return 0;
      for (var i = r, a = i + t - 4, o = 0; o < e.length; ++o) {
        var s = e.charCodeAt(o);
        if (s >= 55296 && s <= 57343) {
          var u = e.charCodeAt(++o);
          s = 65536 + ((s & 1023) << 10) | u & 1023;
        }
        if (D[r >> 2] = s, r += 4, r + 4 > a)
          break;
      }
      return D[r >> 2] = 0, r - i;
    }, nn = (e) => {
      for (var r = 0, t = 0; t < e.length; ++t) {
        var n = e.charCodeAt(t);
        n >= 55296 && n <= 57343 && ++t, r += 4;
      }
      return r;
    }, an = (e, r, t) => {
      t = S(t);
      var n, i, a, o, s;
      r === 2 ? (n = Kt, i = Qt, o = en, a = () => ee, s = 1) : r === 4 && (n = rn, i = tn, o = nn, a = () => m, s = 2), I(e, {
        name: t,
        fromWireType: (u) => {
          for (var f = m[u >> 2], v = a(), h, p = u + 4, _ = 0; _ <= f; ++_) {
            var P = u + 4 + _ * r;
            if (_ == f || v[P >> s] == 0) {
              var C = P - p, y = n(p, C);
              h === void 0 ? h = y : (h += "\0", h += y), p = P + r;
            }
          }
          return Y(u), h;
        },
        toWireType: (u, f) => {
          typeof f != "string" && g(`Cannot pass non-string to C++ string type ${t}`);
          var v = o(f), h = ze(4 + v + r);
          return m[h >> 2] = v >> s, i(f, h + 4, v + r), u !== null && u.push(Y, h), h;
        },
        argPackAdvance: U,
        readValueFromPointer: We,
        destructorFunction(u) {
          Y(u);
        }
      });
    }, on = (e, r, t, n, i, a) => {
      _e[e] = {
        name: S(r),
        rawConstructor: M(t, n),
        rawDestructor: M(i, a),
        fields: []
      };
    }, sn = (e, r, t, n, i, a, o, s, u, f) => {
      _e[e].fields.push({
        fieldName: S(r),
        getterReturnType: t,
        getter: M(n, i),
        getterContext: a,
        setterArgumentType: o,
        setter: M(s, u),
        setterContext: f
      });
    }, un = (e, r) => {
      r = S(r), I(e, {
        isVoid: !0,
        name: r,
        argPackAdvance: 0,
        fromWireType: () => {
        },
        toWireType: (t, n) => {
        }
      });
    }, Le = [], ln = (e, r, t, n) => (e = Le[e], r = V.toValue(r), e(null, r, t, n)), cn = {}, fn = (e) => {
      var r = cn[e];
      return r === void 0 ? S(e) : r;
    }, Cr = () => {
      if (typeof globalThis == "object")
        return globalThis;
      function e(r) {
        r.$$$embind_global$$$ = r;
        var t = typeof $$$embind_global$$$ == "object" && r.$$$embind_global$$$ == r;
        return t || delete r.$$$embind_global$$$, t;
      }
      if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && e(global) ? $$$embind_global$$$ = global : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object"))
        return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }, vn = (e) => e === 0 ? V.toHandle(Cr()) : (e = fn(e), V.toHandle(Cr()[e])), dn = (e) => {
      var r = Le.length;
      return Le.push(e), r;
    }, hn = (e, r) => {
      for (var t = new Array(e), n = 0; n < e; ++n)
        t[n] = Ve(m[r + n * 4 >> 2], "parameter " + n);
      return t;
    }, pn = Reflect.construct, _n = (e, r, t) => {
      var n = [], i = e.toWireType(n, t);
      return n.length && (m[r >> 2] = V.toHandle(n)), i;
    }, gn = (e, r, t) => {
      var n = hn(e, r), i = n.shift();
      e--;
      var a = new Array(e), o = (u, f, v, h) => {
        for (var p = 0, _ = 0; _ < e; ++_)
          a[_] = n[_].readValueFromPointer(h + p), p += n[_].argPackAdvance;
        for (var P = t === 1 ? pn(f, a) : f.apply(u, a), _ = 0; _ < e; ++_) {
          var C, y;
          (C = (y = n[_]).deleteObject) === null || C === void 0 || C.call(y, a[_]);
        }
        return _n(i, v, P);
      }, s = `methodCaller<(${n.map((u) => u.name).join(", ")}) => ${i.name}>`;
      return dn(oe(s, o));
    }, yn = (e) => {
      e > 4 && (O.get(e).refcount += 1);
    }, mn = (e) => {
      var r = V.toValue(e);
      De(r), xe(e);
    }, $n = (e, r) => {
      e = Ve(e, "_emval_take_value");
      var t = e.readValueFromPointer(r);
      return V.toHandle(t);
    }, bn = () => {
      de("");
    }, wn = (e, r, t) => W.copyWithin(e, r, r + t), Tn = () => 2147483648, Pn = (e) => {
      var r = ve.buffer, t = (e - r.byteLength + 65535) / 65536;
      try {
        return ve.grow(t), er(), 1;
      } catch {
      }
    }, Cn = (e) => {
      var r = W.length;
      e >>>= 0;
      var t = Tn();
      if (e > t)
        return !1;
      for (var n = (u, f) => u + (f - u % f) % f, i = 1; i <= 4; i *= 2) {
        var a = r * (1 + 0.2 / i);
        a = Math.min(a, e + 100663296);
        var o = Math.min(t, n(Math.max(e, a), 65536)), s = Pn(o);
        if (s)
          return !0;
      }
      return !1;
    }, Ne = {}, An = () => Ze || "./this.program", se = () => {
      if (!se.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", r = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: An()
        };
        for (var t in Ne)
          Ne[t] === void 0 ? delete r[t] : r[t] = Ne[t];
        var n = [];
        for (var t in r)
          n.push(`${t}=${r[t]}`);
        se.strings = n;
      }
      return se.strings;
    }, Fn = (e, r) => {
      for (var t = 0; t < e.length; ++t)
        j[r++ >> 0] = e.charCodeAt(t);
      j[r >> 0] = 0;
    }, En = (e, r) => {
      var t = 0;
      return se().forEach((n, i) => {
        var a = r + t;
        m[e + i * 4 >> 2] = a, Fn(n, a), t += n.length + 1;
      }), 0;
    }, Sn = (e, r) => {
      var t = se();
      m[e >> 2] = t.length;
      var n = 0;
      return t.forEach((i) => n += i.length + 1), m[r >> 2] = n, 0;
    }, Rn = (e) => e, Pe = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), Dn = (e, r) => {
      for (var t = 0, n = 0; n <= r; t += e[n++])
        ;
      return t;
    }, Ar = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Fr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Wn = (e, r) => {
      for (var t = new Date(e.getTime()); r > 0; ) {
        var n = Pe(t.getFullYear()), i = t.getMonth(), a = (n ? Ar : Fr)[i];
        if (r > a - t.getDate())
          r -= a - t.getDate() + 1, t.setDate(1), i < 11 ? t.setMonth(i + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
        else
          return t.setDate(t.getDate() + r), t;
      }
      return t;
    };
    function kn(e, r, t) {
      var n = t > 0 ? t : wr(e) + 1, i = new Array(n), a = br(e, i, 0, i.length);
      return r && (i.length = a), i;
    }
    var On = (e, r) => {
      j.set(e, r);
    }, jn = (e, r, t, n) => {
      var i = m[n + 40 >> 2], a = {
        tm_sec: D[n >> 2],
        tm_min: D[n + 4 >> 2],
        tm_hour: D[n + 8 >> 2],
        tm_mday: D[n + 12 >> 2],
        tm_mon: D[n + 16 >> 2],
        tm_year: D[n + 20 >> 2],
        tm_wday: D[n + 24 >> 2],
        tm_yday: D[n + 28 >> 2],
        tm_isdst: D[n + 32 >> 2],
        tm_gmtoff: D[n + 36 >> 2],
        tm_zone: i ? Be(i) : ""
      }, o = Be(t), s = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var u in s)
        o = o.replace(new RegExp(u, "g"), s[u]);
      var f = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function h(c, d, A) {
        for (var E = typeof c == "number" ? c.toString() : c || ""; E.length < d; )
          E = A[0] + E;
        return E;
      }
      function p(c, d) {
        return h(c, d, "0");
      }
      function _(c, d) {
        function A(J) {
          return J < 0 ? -1 : J > 0 ? 1 : 0;
        }
        var E;
        return (E = A(c.getFullYear() - d.getFullYear())) === 0 && (E = A(c.getMonth() - d.getMonth())) === 0 && (E = A(c.getDate() - d.getDate())), E;
      }
      function P(c) {
        switch (c.getDay()) {
          case 0:
            return new Date(c.getFullYear() - 1, 11, 29);
          case 1:
            return c;
          case 2:
            return new Date(c.getFullYear(), 0, 3);
          case 3:
            return new Date(c.getFullYear(), 0, 2);
          case 4:
            return new Date(c.getFullYear(), 0, 1);
          case 5:
            return new Date(c.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(c.getFullYear() - 1, 11, 30);
        }
      }
      function C(c) {
        var d = Wn(new Date(c.tm_year + 1900, 0, 1), c.tm_yday), A = new Date(d.getFullYear(), 0, 4), E = new Date(d.getFullYear() + 1, 0, 4), J = P(A), Ae = P(E);
        return _(J, d) <= 0 ? _(Ae, d) <= 0 ? d.getFullYear() + 1 : d.getFullYear() : d.getFullYear() - 1;
      }
      var y = {
        "%a": (c) => f[c.tm_wday].substring(0, 3),
        "%A": (c) => f[c.tm_wday],
        "%b": (c) => v[c.tm_mon].substring(0, 3),
        "%B": (c) => v[c.tm_mon],
        "%C": (c) => {
          var d = c.tm_year + 1900;
          return p(d / 100 | 0, 2);
        },
        "%d": (c) => p(c.tm_mday, 2),
        "%e": (c) => h(c.tm_mday, 2, " "),
        "%g": (c) => C(c).toString().substring(2),
        "%G": (c) => C(c),
        "%H": (c) => p(c.tm_hour, 2),
        "%I": (c) => {
          var d = c.tm_hour;
          return d == 0 ? d = 12 : d > 12 && (d -= 12), p(d, 2);
        },
        "%j": (c) => p(c.tm_mday + Dn(Pe(c.tm_year + 1900) ? Ar : Fr, c.tm_mon - 1), 3),
        "%m": (c) => p(c.tm_mon + 1, 2),
        "%M": (c) => p(c.tm_min, 2),
        "%n": () => `
`,
        "%p": (c) => c.tm_hour >= 0 && c.tm_hour < 12 ? "AM" : "PM",
        "%S": (c) => p(c.tm_sec, 2),
        "%t": () => "	",
        "%u": (c) => c.tm_wday || 7,
        "%U": (c) => {
          var d = c.tm_yday + 7 - c.tm_wday;
          return p(Math.floor(d / 7), 2);
        },
        "%V": (c) => {
          var d = Math.floor((c.tm_yday + 7 - (c.tm_wday + 6) % 7) / 7);
          if ((c.tm_wday + 371 - c.tm_yday - 2) % 7 <= 2 && d++, d) {
            if (d == 53) {
              var E = (c.tm_wday + 371 - c.tm_yday) % 7;
              E != 4 && (E != 3 || !Pe(c.tm_year)) && (d = 1);
            }
          } else {
            d = 52;
            var A = (c.tm_wday + 7 - c.tm_yday - 1) % 7;
            (A == 4 || A == 5 && Pe(c.tm_year % 400 - 1)) && d++;
          }
          return p(d, 2);
        },
        "%w": (c) => c.tm_wday,
        "%W": (c) => {
          var d = c.tm_yday + 7 - (c.tm_wday + 6) % 7;
          return p(Math.floor(d / 7), 2);
        },
        "%y": (c) => (c.tm_year + 1900).toString().substring(2),
        "%Y": (c) => c.tm_year + 1900,
        "%z": (c) => {
          var d = c.tm_gmtoff, A = d >= 0;
          return d = Math.abs(d) / 60, d = d / 60 * 100 + d % 60, (A ? "+" : "-") + ("0000" + d).slice(-4);
        },
        "%Z": (c) => c.tm_zone,
        "%%": () => "%"
      };
      o = o.replace(/%%/g, "\0\0");
      for (var u in y)
        o.includes(u) && (o = o.replace(new RegExp(u, "g"), y[u](a)));
      o = o.replace(/\0\0/g, "%");
      var R = kn(o, !1);
      return R.length > r ? 0 : (On(R, e), R.length - 1);
    }, Mn = (e, r, t, n, i) => jn(e, r, t, n);
    sr = l.InternalError = class extends Error {
      constructor(r) {
        super(r), this.name = "InternalError";
      }
    }, st(), q = l.BindingError = class extends Error {
      constructor(r) {
        super(r), this.name = "BindingError";
      }
    }, mt(), pt(), Ft(), gr = l.UnboundTypeError = Dt(Error, "UnboundTypeError"), Mt(), It();
    var Hn = {
      s: qr,
      t: Jr,
      b: Qr,
      g: et,
      m: rt,
      K: tt,
      e: nt,
      W: it,
      d: Kr,
      ea: at,
      R: ot,
      $: lt,
      da: Wt,
      ca: Ot,
      x: jt,
      Z: Ut,
      y: Vt,
      j: Yt,
      M: Lt,
      E: Nt,
      u: Xt,
      q: Gt,
      L: Jt,
      D: an,
      w: on,
      fa: sn,
      aa: un,
      S: ln,
      ia: xe,
      ha: vn,
      _: gn,
      N: yn,
      P: mn,
      ba: $n,
      C: bn,
      Y: wn,
      X: Cn,
      U: En,
      V: Sn,
      G: ei,
      B: Yn,
      H: Qn,
      p: ri,
      a: In,
      f: Ln,
      n: Vn,
      k: zn,
      J: Jn,
      v: qn,
      I: Kn,
      A: ni,
      Q: ai,
      l: Nn,
      i: Bn,
      c: xn,
      o: Un,
      F: Gn,
      ga: Xn,
      r: ti,
      h: Zn,
      z: ii,
      O: Rn,
      T: Mn
    }, F = Zr(), Y = l._free = (e) => (Y = l._free = F.la)(e), ze = l._malloc = (e) => (ze = l._malloc = F.ma)(e), Er = (e) => (Er = F.oa)(e), $ = (e, r) => ($ = F.pa)(e, r), ue = (e) => (ue = F.qa)(e), w = () => (w = F.ra)(), T = (e) => (T = F.sa)(e), Sr = (e) => (Sr = F.ta)(e), Rr = (e) => (Rr = F.ua)(e), Dr = (e, r, t) => (Dr = F.va)(e, r, t), Wr = (e) => (Wr = F.wa)(e);
    l.dynCall_viijii = (e, r, t, n, i, a, o) => (l.dynCall_viijii = F.xa)(e, r, t, n, i, a, o);
    var kr = l.dynCall_jiiii = (e, r, t, n, i) => (kr = l.dynCall_jiiii = F.ya)(e, r, t, n, i);
    l.dynCall_iiiiij = (e, r, t, n, i, a, o) => (l.dynCall_iiiiij = F.za)(e, r, t, n, i, a, o), l.dynCall_iiiiijj = (e, r, t, n, i, a, o, s, u) => (l.dynCall_iiiiijj = F.Aa)(e, r, t, n, i, a, o, s, u), l.dynCall_iiiiiijj = (e, r, t, n, i, a, o, s, u, f) => (l.dynCall_iiiiiijj = F.Ba)(e, r, t, n, i, a, o, s, u, f);
    function In(e, r) {
      var t = w();
      try {
        return b(e)(r);
      } catch (n) {
        if (T(t), n !== n + 0)
          throw n;
        $(1, 0);
      }
    }
    function Un(e, r, t, n) {
      var i = w();
      try {
        b(e)(r, t, n);
      } catch (a) {
        if (T(i), a !== a + 0)
          throw a;
        $(1, 0);
      }
    }
    function xn(e, r, t) {
      var n = w();
      try {
        b(e)(r, t);
      } catch (i) {
        if (T(n), i !== i + 0)
          throw i;
        $(1, 0);
      }
    }
    function Vn(e, r, t, n) {
      var i = w();
      try {
        return b(e)(r, t, n);
      } catch (a) {
        if (T(i), a !== a + 0)
          throw a;
        $(1, 0);
      }
    }
    function Yn(e, r, t, n, i) {
      var a = w();
      try {
        return b(e)(r, t, n, i);
      } catch (o) {
        if (T(a), o !== o + 0)
          throw o;
        $(1, 0);
      }
    }
    function Bn(e, r) {
      var t = w();
      try {
        b(e)(r);
      } catch (n) {
        if (T(t), n !== n + 0)
          throw n;
        $(1, 0);
      }
    }
    function Ln(e, r, t) {
      var n = w();
      try {
        return b(e)(r, t);
      } catch (i) {
        if (T(n), i !== i + 0)
          throw i;
        $(1, 0);
      }
    }
    function Nn(e) {
      var r = w();
      try {
        b(e)();
      } catch (t) {
        if (T(r), t !== t + 0)
          throw t;
        $(1, 0);
      }
    }
    function zn(e, r, t, n, i) {
      var a = w();
      try {
        return b(e)(r, t, n, i);
      } catch (o) {
        if (T(a), o !== o + 0)
          throw o;
        $(1, 0);
      }
    }
    function Xn(e, r, t, n, i, a) {
      var o = w();
      try {
        b(e)(r, t, n, i, a);
      } catch (s) {
        if (T(o), s !== s + 0)
          throw s;
        $(1, 0);
      }
    }
    function Gn(e, r, t, n, i) {
      var a = w();
      try {
        b(e)(r, t, n, i);
      } catch (o) {
        if (T(a), o !== o + 0)
          throw o;
        $(1, 0);
      }
    }
    function Zn(e, r, t, n, i, a, o, s, u, f, v) {
      var h = w();
      try {
        b(e)(r, t, n, i, a, o, s, u, f, v);
      } catch (p) {
        if (T(h), p !== p + 0)
          throw p;
        $(1, 0);
      }
    }
    function qn(e, r, t, n, i, a, o) {
      var s = w();
      try {
        return b(e)(r, t, n, i, a, o);
      } catch (u) {
        if (T(s), u !== u + 0)
          throw u;
        $(1, 0);
      }
    }
    function Jn(e, r, t, n, i, a) {
      var o = w();
      try {
        return b(e)(r, t, n, i, a);
      } catch (s) {
        if (T(o), s !== s + 0)
          throw s;
        $(1, 0);
      }
    }
    function Kn(e, r, t, n, i, a, o, s) {
      var u = w();
      try {
        return b(e)(r, t, n, i, a, o, s);
      } catch (f) {
        if (T(u), f !== f + 0)
          throw f;
        $(1, 0);
      }
    }
    function Qn(e, r, t, n) {
      var i = w();
      try {
        return b(e)(r, t, n);
      } catch (a) {
        if (T(i), a !== a + 0)
          throw a;
        $(1, 0);
      }
    }
    function ei(e, r, t, n) {
      var i = w();
      try {
        return b(e)(r, t, n);
      } catch (a) {
        if (T(i), a !== a + 0)
          throw a;
        $(1, 0);
      }
    }
    function ri(e) {
      var r = w();
      try {
        return b(e)();
      } catch (t) {
        if (T(r), t !== t + 0)
          throw t;
        $(1, 0);
      }
    }
    function ti(e, r, t, n, i, a, o, s) {
      var u = w();
      try {
        b(e)(r, t, n, i, a, o, s);
      } catch (f) {
        if (T(u), f !== f + 0)
          throw f;
        $(1, 0);
      }
    }
    function ni(e, r, t, n, i, a, o, s, u, f, v, h) {
      var p = w();
      try {
        return b(e)(r, t, n, i, a, o, s, u, f, v, h);
      } catch (_) {
        if (T(p), _ !== _ + 0)
          throw _;
        $(1, 0);
      }
    }
    function ii(e, r, t, n, i, a, o, s, u, f, v, h, p, _, P, C) {
      var y = w();
      try {
        b(e)(r, t, n, i, a, o, s, u, f, v, h, p, _, P, C);
      } catch (R) {
        if (T(y), R !== R + 0)
          throw R;
        $(1, 0);
      }
    }
    function ai(e, r, t, n, i) {
      var a = w();
      try {
        return kr(e, r, t, n, i);
      } catch (o) {
        if (T(a), o !== o + 0)
          throw o;
        $(1, 0);
      }
    }
    var Ce;
    re = function e() {
      Ce || Or(), Ce || (re = e);
    };
    function Or() {
      if (L > 0 || (Ir(), L > 0))
        return;
      function e() {
        Ce || (Ce = !0, l.calledRun = !0, !Je && (Ur(), Xe(l), l.onRuntimeInitialized && l.onRuntimeInitialized(), xr()));
      }
      l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          l.setStatus("");
        }, 1), e();
      }, 1)) : e();
    }
    if (l.preInit)
      for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); l.preInit.length > 0; )
        l.preInit.pop()();
    return Or(), B.ready;
  };
})();
function hi(k) {
  return oi(
    le,
    k
  );
}
function pi(k) {
  return si(
    le,
    k
  );
}
async function _i(k, B) {
  return ui(
    le,
    k,
    B
  );
}
async function gi(k, B) {
  return li(
    le,
    k,
    B
  );
}
async function yi(k, B) {
  return ci(
    le,
    k,
    B
  );
}
export {
  bi as barcodeFormats,
  wi as binarizers,
  Ti as characterSets,
  Pi as contentTypes,
  Ci as defaultDecodeHints,
  Ai as defaultEncodeHints,
  Fi as defaultReaderOptions,
  Ei as defaultWriterOptions,
  Si as eanAddOnSymbols,
  hi as getZXingModule,
  Ri as purgeZXingModule,
  gi as readBarcodesFromImageData,
  _i as readBarcodesFromImageFile,
  Di as readOutputEccLevels,
  pi as setZXingModuleOverrides,
  Wi as textModes,
  yi as writeBarcodeToImageFile,
  ki as writeInputEccLevels
};
