var ue = Object.defineProperty;
var fe = (o, s, t) => s in o ? ue(o, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[s] = t;
var H = (o, s, t) => fe(o, typeof s != "symbol" ? s + "" : s, t);
import { defineComponent as he, ref as d, computed as A, reactive as j, onMounted as ve, nextTick as de, onBeforeUnmount as me, createElementBlock as q, openBlock as F, normalizeStyle as y, normalizeClass as G, createElementVNode as W, renderSlot as C, createCommentVNode as D, unref as B } from "vue";
class J {
  constructor(s, t) {
    H(this, "x", 0);
    H(this, "y", 0);
    this.x = s || 0, this.y = t || 0;
  }
  set(s, t) {
    this.x = s, this.y = t;
  }
  substract(s) {
    this.x -= s.x, this.y -= s.y;
  }
}
function K(o) {
  const { onDown: s, onMove: t, onUp: r } = o, a = new J(), e = new J();
  let v;
  function h(c) {
    c.stopPropagation(), e.set(c.x, c.y), e.substract(a), t(a, e, c, v);
  }
  function m(c) {
    r(c, v), a.set(0, 0), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m);
  }
  return (c, g) => s(c, g) ? (v = g, a.set(c.x, c.y), document.addEventListener("mousemove", h), document.addEventListener("mouseup", m), c.stopPropagation(), !0) : !1;
}
function ye(o) {
  const { onDown: s, onUp: t } = o;
  function r(a) {
    t(a), document.removeEventListener("mouseup", r);
  }
  return (a) => s(a) ? (document.addEventListener("mouseup", r), a.preventDefault(), a.stopPropagation(), !0) : !1;
}
function We(o, s) {
  let t = 0;
  return {
    start() {
      t > 0 && clearTimeout(t), t = setTimeout(() => {
        t = 0, s();
      }, o);
    },
    stop() {
      t > 0 && (clearTimeout(t), t = 0);
    }
  };
}
function ge(o, s) {
  let t = 0;
  return {
    start() {
      t > 0 && clearInterval(t), t = setInterval(() => {
        t = 0, s();
      }, o);
    },
    stop() {
      t > 0 && (clearInterval(t), t = 0);
    }
  };
}
const S = [], Q = ge(100, () => {
  for (const o of S)
    o();
});
function pe(o, s, t, r) {
  let a = 0, e = 0;
  function v() {
    o.value && (s && a !== o.value.offsetWidth && s(o.value.offsetWidth), t && e !== o.value.offsetHeight && t(o.value.offsetHeight), r && (a !== o.value.offsetWidth || e !== o.value.offsetHeight) && r(o.value.offsetWidth, o.value.offsetHeight), a = o.value.offsetWidth, e = o.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      Q.start(), S.push(v);
    },
    stopResizeChecker() {
      const h = S.indexOf(v);
      h >= 0 && S.splice(h, 1), S.length === 0 && Q.stop();
    }
  };
}
const Z = 140, Te = 70, we = /* @__PURE__ */ he({
  __name: "ScrollRect",
  props: {
    /**
     * Scroll direction
     * 
     * * both : Scroll in both directions
     * * vertical : Scroll only in vertical direction
     * * horizontal : Scroll only in horizontal direction
     * * none : Disable scroll
     * 
     * @default both
     */
    scroll: {
      type: String,
      default: "both"
    },
    /**
     * Show scroll bar always, otherwise show scroll bar when mouse over
     * @default false
     */
    scrollBarAlwaysShow: {
      type: Boolean,
      default: !1
    },
    /**
     * Is able to click scroll bar background to set scroll position? (When `scrollBarAlwaysShow` is true)
     * @default true
     */
    scrollBarBackgroundClickable: {
      type: Boolean,
      default: !1
    },
    /**
     * Height of scroll rect
     */
    height: {
      type: Number,
      default: void 0
    },
    /**
     * Width of scroll rect
     */
    width: {
      type: Number,
      default: void 0
    },
    /**
     * Max height of inner container
     */
    maxHeight: {
      type: Number,
      default: void 0
    },
    /**
     * Max width of inner container
     */
    maxWidth: {
      type: Number,
      default: void 0
    },
    /**
     * CSS class of inner container
     */
    containerClass: {
      type: String,
      default: ""
    },
    /**
     * Container style
     */
    containerStyle: {
      type: null
    },
    /**
     * Specify how many pixels of scroll distance trigger `scrollToStart` event.
     * @default 50
     */
    scrollToStartThreshold: {
      type: Number,
      default: 50
    },
    /**
     * Specify how many pixels of scroll distance trigger `scrollToEnd` event.
     * @default 50
     */
    scrollToEndThreshold: {
      type: Number,
      default: 50
    }
  },
  emits: ["scroll", "resized", "scrollToStart", "scrollToEnd"],
  setup(o, { expose: s, emit: t }) {
    const r = o, a = t, e = d(), v = d(), h = d(), m = d(), c = d(), g = d(), T = d(!1), _ = A(() => r.scroll === "horizontal" || r.scroll === "both"), x = A(() => r.scroll === "vertical" || r.scroll === "both"), f = j({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), u = j({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let z = 0, k = 0, R = 0, Y = 0, w = null;
    const ee = { attributes: !0, childList: !0 };
    function L() {
      if (e.value) {
        if (f.show) {
          const l = e.value.offsetWidth / e.value.scrollWidth;
          f.sizeRaw = l * e.value.offsetWidth, f.size = l * 100, f.pos = e.value.scrollLeft / (e.value.scrollWidth - e.value.offsetWidth) * (100 - f.size), l >= 1 && (f.show = !1);
        }
        if (u.show) {
          const l = e.value.offsetHeight / e.value.scrollHeight;
          u.sizeRaw = l * e.value.offsetHeight, u.size = l * 100, u.pos = e.value.scrollTop / (e.value.scrollHeight - e.value.offsetHeight) * (100 - u.size), l >= 1 && (u.show = !1);
        }
        r.scroll === "vertical" ? (r.scrollToStartThreshold && e.value.scrollTop <= r.scrollToStartThreshold && a("scrollToStart"), r.scrollToEndThreshold && e.value.scrollTop >= e.value.scrollHeight - r.scrollToEndThreshold - e.value.offsetHeight && a("scrollToEnd")) : r.scroll === "horizontal" && (r.scrollToStartThreshold && e.value.scrollLeft <= r.scrollToStartThreshold && a("scrollToStart"), r.scrollToEndThreshold && e.value.scrollLeft >= e.value.scrollWidth - r.scrollToEndThreshold - e.value.offsetWidth && a("scrollToEnd")), a("scroll", e.value.scrollLeft, e.value.scrollTop);
      }
    }
    function p(l = !1) {
      if (!e.value)
        return;
      let i = _.value, n = x.value;
      const ne = i && (z !== e.value.scrollWidth || R !== e.value.offsetWidth), ce = x && (k !== e.value.scrollHeight || Y !== e.value.offsetHeight);
      if (!l && !ne && !ce)
        return;
      const b = window.getComputedStyle(e.value);
      (b.overflow === "hidden" || b.overflowX === "hidden") && (i = !1), (b.overflow === "hidden" || b.overflowY === "hidden") && (n = !1), f.show = i, u.show = n, L(), R = e.value.offsetWidth, Y = e.value.offsetHeight, z = e.value.scrollWidth, k = e.value.scrollHeight, a("resized", z, k);
    }
    function le(l) {
      var i;
      r.scroll == "horizontal" && (l.deltaMode == 0 && ((i = e.value) == null || i.scrollTo({
        left: e.value.scrollLeft + (l.deltaY > 0 ? Z : -140),
        behavior: "smooth"
      })), l.preventDefault(), l.stopPropagation());
    }
    function X(l) {
      var i;
      l.deltaMode == 0 && ((i = e.value) == null || i.scrollTo({
        left: e.value.scrollLeft + (l.deltaY > 0 ? Z : -140),
        behavior: "smooth"
      }), l.preventDefault(), l.stopPropagation());
    }
    function P(l) {
      var i;
      l.deltaMode == 0 && ((i = e.value) == null || i.scrollTo({
        top: e.value.scrollTop + (l.deltaY > 0 ? Te : -70),
        behavior: "smooth"
      }), l.preventDefault(), l.stopPropagation());
    }
    let E = 0, M = 0, $ = 0, N = 0;
    const V = K({
      onDown(l) {
        return !h.value || !c.value ? !1 : (E = l.offsetX, M = l.x - l.offsetX - c.value.offsetLeft, l.preventDefault(), T.value = !0, !0);
      },
      onMove(l, i, n) {
        e.value && h.value && (O(n.x - E - M), n.preventDefault(), n.stopPropagation());
      },
      onUp() {
        T.value = !1;
      }
    }), I = K({
      onDown(l) {
        return !m.value || !g.value ? !1 : ($ = l.offsetY, N = l.y - l.offsetY - g.value.offsetTop, l.preventDefault(), T.value = !0, !0);
      },
      onMove(l, i, n) {
        e.value && m.value && (U(n.y - $ - N), n.preventDefault(), n.stopPropagation());
      },
      onUp() {
        T.value = !1;
      }
    });
    function oe(l) {
      e.value && (e.value.scrollLeft = l / 100 * (e.value.scrollWidth - e.value.offsetWidth));
    }
    function te(l) {
      e.value && (e.value.scrollLeft = l / 100 * (e.value.scrollHeight - e.value.offsetHeight));
    }
    function O(l) {
      e.value && (e.value.scrollLeft = l / (e.value.offsetWidth - f.sizeRaw) * (e.value.scrollWidth - e.value.offsetWidth));
    }
    function U(l) {
      e.value && (e.value.scrollTop = l / (e.value.offsetHeight - u.sizeRaw) * (e.value.scrollHeight - e.value.offsetHeight));
    }
    function se(l) {
      r.scrollBarBackgroundClickable && O(l.offsetX - f.sizeRaw / 2);
    }
    function re(l) {
      r.scrollBarBackgroundClickable && U(l.offsetY - u.sizeRaw / 2);
    }
    const {
      startResizeChecker: ae,
      stopResizeChecker: ie
    } = pe(
      e,
      () => p(),
      () => p()
    );
    return ve(() => {
      de(() => {
        setTimeout(() => p(!0), 200), p(!0), ae(), w = new MutationObserver(() => p()), w.observe(e.value, ee);
      });
    }), me(() => {
      ie(), w && (w.disconnect(), w = null);
    }), s({
      refreshScrollState() {
        p(!0);
      },
      getScrollContainer() {
        return e.value;
      },
      scrollTo(l, i) {
        var n;
        (n = e.value) == null || n.scrollTo(l, i);
      },
      scrollToTop() {
        var l;
        (l = e.value) == null || l.scrollTo(0, 0);
      },
      scrollToBottom() {
        var l;
        (l = e.value) == null || l.scrollTo(e.value.scrollWidth, e.value.scrollHeight);
      }
    }), (l, i) => (F(), q("div", {
      ref_key: "scrollrect",
      ref: v,
      class: G([
        "vue-scroll-rect",
        o.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        o.scrollBarBackgroundClickable ? "background-clickable" : "",
        T.value ? "dragging" : ""
      ]),
      style: y({
        width: o.width ? `${o.width}px` : void 0,
        height: o.height ? `${o.height}px` : void 0
      }),
      onWheel: le
    }, [
      W("div", {
        ref_key: "container",
        ref: e,
        class: G(["scroll-content", o.scroll, o.containerClass]),
        style: y({
          maxWidth: o.maxWidth ? `${o.maxWidth}px` : void 0,
          maxHeight: o.maxHeight ? `${o.maxHeight}px` : void 0,
          ...o.containerStyle
        }),
        onScroll: L
      }, [
        C(l.$slots, "default")
      ], 38),
      f.show ? C(l.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: f,
        onScroll: oe
      }, () => [
        W("div", {
          ref_key: "scrollBarRefX",
          ref: h,
          class: "scrollbar horizontal",
          onClick: se,
          onWheel: X
        }, [
          W("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: c,
            style: y({ left: `${f.pos}%`, width: `${f.size}%` }),
            onMousedown: i[0] || (i[0] = //@ts-ignore
            (...n) => B(V) && B(V)(...n)),
            onWheel: X
          }, null, 36)
        ], 544)
      ]) : D("", !0),
      u.show ? C(l.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: u,
        onScroll: te
      }, () => [
        u.show ? (F(), q("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: m,
          class: "scrollbar vertical",
          onClick: re,
          onWheel: P
        }, [
          W("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: g,
            style: y({ top: `${u.pos}%`, height: `${u.size}%` }),
            onMousedown: i[1] || (i[1] = //@ts-ignore
            (...n) => B(I) && B(I)(...n)),
            onWheel: P
          }, null, 36)
        ], 544)) : D("", !0)
      ]) : D("", !0)
    ], 38));
  }
}), Be = {
  install(o) {
    o.component("scroll-rect", we);
  }
};
export {
  we as ScrollRect,
  We as createMiniTimeOut,
  ge as createMiniTimer,
  ye as createMouseDownAndUpHandler,
  K as createMouseDragHandler,
  Be as default,
  pe as useResizeChecker
};
//# sourceMappingURL=vue-scroll-rect.es.js.map
