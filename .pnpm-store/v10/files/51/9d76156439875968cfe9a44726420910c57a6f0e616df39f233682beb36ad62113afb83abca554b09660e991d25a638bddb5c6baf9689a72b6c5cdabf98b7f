import { defineComponent as te, toRefs as re, ref as W, computed as _e, reactive as De, onMounted as be, nextTick as ae, onBeforeUnmount as Me, openBlock as b, createElementBlock as P, normalizeClass as oe, normalizeStyle as ye, createElementVNode as z, renderSlot as E, unref as l, createCommentVNode as D, inject as T, provide as J, createBlock as F, mergeProps as He, createVNode as ie, toDisplayString as Re, resolveComponent as qe, watch as Be, Teleport as et, Transition as dt, withCtx as pe, Fragment as Oe, renderList as Pe, createSlots as tt, useSlots as nt, h as xe, normalizeProps as ft, guardReactiveProps as vt, render as Ne } from "vue";
let le = null;
function ht() {
  return le !== null;
}
function mt(e) {
  le && ot(), le = e;
}
function Ke(e) {
  e === le && (le = null);
}
function ot() {
  le && (le.closeMenu(), le = null);
}
const ee = {
  defaultDirection: "br",
  defaultMinWidth: 100,
  defaultMaxWidth: 600,
  defaultZindex: 100,
  defaultZoom: 1,
  defaultAdjustPadding: {
    x: 0,
    y: 10
  }
};
function se(e, o) {
  let s = e.offsetTop;
  return e.offsetParent != null && e.offsetParent != o && (s -= e.offsetParent.scrollTop, s += se(e.offsetParent, o)), s;
}
function ue(e, o) {
  let s = e.offsetLeft;
  return e.offsetParent != null && e.offsetParent != o && (s -= e.offsetParent.scrollLeft, s += ue(e.offsetParent, o)), s;
}
function pt(e, o, s, u) {
  return {
    x: ue(e, u) + o,
    y: se(e, u) + s
  };
}
const We = "mx-menu-default-container", gt = "mx-menu-container-";
let bt = 0;
function lt(e) {
  const { getContainer: o, zIndex: s } = e;
  if (o) {
    const v = typeof o == "function" ? o() : o;
    if (v) {
      let n = v.getAttribute("id");
      return n || (n = gt + bt++, v.setAttribute("id", n)), {
        eleId: n,
        container: v,
        isNew: !1
      };
    }
  }
  let u = document.getElementById(We);
  return u || (u = document.createElement("div"), u.setAttribute("id", We), u.setAttribute("class", "mx-menu-ghost-host fullscreen"), document.body.appendChild(u)), u.style.zIndex = (s == null ? void 0 : s.toString()) || ee.defaultZindex.toString(), {
    eleId: We,
    container: u,
    isNew: !0
  };
}
function Ct(e) {
  let o = 0;
  for (let s = 0; s < e.length; s++) {
    const u = e.charCodeAt(s);
    o = (o << 5) - o + u, o |= 0;
  }
  return o;
}
function Ye(e) {
  return typeof e == "number" ? `${e}px` : e;
}
const q = te({
  props: {
    /**
     * Can be VNode or (data: unknown) => VNode
     */
    vnode: {
      type: null
    },
    /**
     * If vnode is a callback, this data will be passed to the callback first parameter.
     * @default null
     */
    data: {
      type: null,
      default: null
    }
  },
  setup(e) {
    const { vnode: o, data: s } = re(e);
    return () => typeof o.value == "function" ? o.value(s.value) : o.value;
  }
});
function yt(e, o) {
  const s = { ...e };
  return delete s[o], s;
}
var xt = Object.defineProperty, Mt = (e, o, s) => o in e ? xt(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[o] = s, Ve = (e, o, s) => Mt(e, typeof o != "symbol" ? o + "" : o, s);
class Ue {
  constructor(o, s) {
    Ve(this, "x", 0), Ve(this, "y", 0), this.x = o || 0, this.y = s || 0;
  }
  set(o, s) {
    this.x = o, this.y = s;
  }
  substract(o) {
    this.x -= o.x, this.y -= o.y;
  }
}
function Xe(e) {
  const { onDown: o, onMove: s, onUp: u } = e, v = new Ue(), n = new Ue();
  let _;
  function d(h) {
    h.stopPropagation(), n.set(h.x, h.y), n.substract(v), s(v, n, h, _);
  }
  function p(h) {
    u(h, _), v.set(0, 0), document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", p);
  }
  return (h, x) => o(h, x) ? (_ = x, v.set(h.x, h.y), document.addEventListener("mousemove", d), document.addEventListener("mouseup", p), h.stopPropagation(), !0) : !1;
}
function kt(e, o) {
  let s = 0;
  return {
    start() {
      s > 0 && clearInterval(s), s = setInterval(() => {
        s = 0, o();
      }, e);
    },
    stop() {
      s > 0 && (clearInterval(s), s = 0);
    }
  };
}
const me = [], Ze = kt(100, () => {
  for (const e of me)
    e();
});
function St(e, o, s, u) {
  let v = 0, n = 0;
  function _() {
    e.value && (o && v !== e.value.offsetWidth && o(e.value.offsetWidth), s && n !== e.value.offsetHeight && s(e.value.offsetHeight), u && (v !== e.value.offsetWidth || n !== e.value.offsetHeight) && u(e.value.offsetWidth, e.value.offsetHeight), v = e.value.offsetWidth, n = e.value.offsetHeight);
  }
  return {
    startResizeChecker() {
      Ze.start(), me.push(_);
    },
    stopResizeChecker() {
      const d = me.indexOf(_);
      d >= 0 && me.splice(d, 1), me.length === 0 && Ze.stop();
    }
  };
}
const Ge = 140, wt = 70, It = /* @__PURE__ */ te({
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
    height: {
      type: Number,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    /**
     * 
     */
    maxHeight: {
      type: Number,
      default: void 0
    },
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
    }
  },
  emits: ["scroll", "resized"],
  setup(e, { expose: o, emit: s }) {
    const u = e, v = s, n = W(), _ = W(), d = W(), p = W(), h = W(), x = W(), B = W(!1), L = _e(() => u.scroll === "horizontal" || u.scroll === "both"), S = _e(() => u.scroll === "vertical" || u.scroll === "both"), M = De({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    }), k = De({
      show: !1,
      size: 0,
      sizeRaw: 0,
      pos: 0
    });
    let H = 0, r = 0, f = 0, C = 0, y = null;
    const I = { attributes: !0, childList: !0 };
    function i() {
      if (n.value) {
        if (M.show) {
          const t = n.value.offsetWidth / n.value.scrollWidth;
          M.sizeRaw = t * n.value.offsetWidth, M.size = t * 100, M.pos = n.value.scrollLeft / (n.value.scrollWidth - n.value.offsetWidth) * (100 - M.size), t >= 1 && (M.show = !1);
        }
        if (k.show) {
          const t = n.value.offsetHeight / n.value.scrollHeight;
          k.sizeRaw = t * n.value.offsetHeight, k.size = t * 100, k.pos = n.value.scrollTop / (n.value.scrollHeight - n.value.offsetHeight) * (100 - k.size), t >= 1 && (k.show = !1);
        }
        v("scroll", n.value.scrollLeft, n.value.scrollTop);
      }
    }
    function g(t = !1) {
      if (!n.value)
        return;
      let c = L.value, m = S.value;
      const a = c && (H !== n.value.scrollWidth || f !== n.value.offsetWidth), de = S && (r !== n.value.scrollHeight || C !== n.value.offsetHeight);
      if (!t && !a && !de)
        return;
      const j = window.getComputedStyle(n.value);
      (j.overflow === "hidden" || j.overflowX === "hidden") && (c = !1), (j.overflow === "hidden" || j.overflowY === "hidden") && (m = !1), M.show = c, k.show = m, i(), f = n.value.offsetWidth, C = n.value.offsetHeight, H = n.value.scrollWidth, r = n.value.scrollHeight, v("resized", H, r);
    }
    function K(t) {
      var c;
      u.scroll == "horizontal" && (t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
        left: n.value.scrollLeft + (t.deltaY > 0 ? Ge : -140),
        behavior: "smooth"
      })), t.preventDefault(), t.stopPropagation());
    }
    function R(t) {
      var c;
      t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
        left: n.value.scrollLeft + (t.deltaY > 0 ? Ge : -140),
        behavior: "smooth"
      }), t.preventDefault(), t.stopPropagation());
    }
    function N(t) {
      var c;
      t.deltaMode == 0 && ((c = n.value) == null || c.scrollTo({
        top: n.value.scrollTop + (t.deltaY > 0 ? wt : -70),
        behavior: "smooth"
      }), t.preventDefault(), t.stopPropagation());
    }
    let V = 0, U = 0, A = 0, w = 0;
    const $ = Xe({
      onDown(t) {
        return !d.value || !h.value ? !1 : (V = t.offsetX, U = t.x - t.offsetX - h.value.offsetLeft, t.preventDefault(), B.value = !0, !0);
      },
      onMove(t, c, m) {
        n.value && d.value && (Q(m.x - V - U), m.preventDefault(), m.stopPropagation());
      },
      onUp() {
        B.value = !1;
      }
    }), Z = Xe({
      onDown(t) {
        return !p.value || !x.value ? !1 : (A = t.offsetY, w = t.y - t.offsetY - x.value.offsetTop, t.preventDefault(), B.value = !0, !0);
      },
      onMove(t, c, m) {
        n.value && p.value && (ne(m.y - A - w), m.preventDefault(), m.stopPropagation());
      },
      onUp() {
        B.value = !1;
      }
    });
    function Y(t) {
      n.value && (n.value.scrollLeft = t / 100 * (n.value.scrollWidth - n.value.offsetWidth));
    }
    function G(t) {
      n.value && (n.value.scrollLeft = t / 100 * (n.value.scrollHeight - n.value.offsetHeight));
    }
    function Q(t) {
      n.value && (n.value.scrollLeft = t / (n.value.offsetWidth - M.sizeRaw) * (n.value.scrollWidth - n.value.offsetWidth));
    }
    function ne(t) {
      n.value && (n.value.scrollTop = t / (n.value.offsetHeight - k.sizeRaw) * (n.value.scrollHeight - n.value.offsetHeight));
    }
    function O(t) {
      u.scrollBarBackgroundClickable && Q(t.offsetX - M.sizeRaw / 2);
    }
    function ce(t) {
      u.scrollBarBackgroundClickable && ne(t.offsetY - k.sizeRaw / 2);
    }
    const {
      startResizeChecker: Fe,
      stopResizeChecker: Ce
    } = St(
      n,
      () => g(),
      () => g()
    );
    return be(() => {
      ae(() => {
        setTimeout(() => g(!0), 200), g(!0), Fe(), y = new MutationObserver(() => g()), y.observe(n.value, I);
      });
    }), Me(() => {
      Ce(), y && (y.disconnect(), y = null);
    }), o({
      refreshScrollState() {
        g(!0);
      },
      getScrollContainer() {
        return n.value;
      },
      scrollTo(t, c) {
        var m;
        (m = n.value) == null || m.scrollTo(t, c);
      },
      scrollToTop() {
        var t;
        (t = n.value) == null || t.scrollTo(0, 0);
      },
      scrollToBottom() {
        var t;
        (t = n.value) == null || t.scrollTo(n.value.scrollWidth, n.value.scrollHeight);
      }
    }), (t, c) => (b(), P("div", {
      ref_key: "scrollrect",
      ref: _,
      class: oe([
        "vue-scroll-rect",
        e.scrollBarAlwaysShow ? "always-show-scrollbar" : "",
        e.scrollBarBackgroundClickable ? "background-clickable" : "",
        B.value ? "dragging" : ""
      ]),
      style: ye({
        width: e.width ? `${e.width}px` : void 0,
        height: e.height ? `${e.height}px` : void 0
      }),
      onWheel: K
    }, [
      z("div", {
        ref_key: "container",
        ref: n,
        class: oe(["scroll-content", e.scroll, e.containerClass]),
        style: ye({
          maxWidth: e.maxWidth ? `${e.maxWidth}px` : void 0,
          maxHeight: e.maxHeight ? `${e.maxHeight}px` : void 0,
          ...e.containerStyle
        }),
        onScroll: i
      }, [
        E(t.$slots, "default")
      ], 38),
      M.show ? E(t.$slots, "scrollBarX", {
        key: 0,
        scrollBarValue: M,
        onScroll: Y
      }, () => [
        z("div", {
          ref_key: "scrollBarRefX",
          ref: d,
          class: "scrollbar horizontal",
          onClick: O,
          onWheel: R
        }, [
          z("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefX",
            ref: h,
            style: ye({ left: `${M.pos}%`, width: `${M.size}%` }),
            onMousedown: c[0] || (c[0] = //@ts-ignore
            (...m) => l($) && l($)(...m)),
            onWheel: R
          }, null, 36)
        ], 544)
      ]) : D("", !0),
      k.show ? E(t.$slots, "scrollBarY", {
        key: 1,
        scrollBarValue: k,
        onScroll: G
      }, () => [
        k.show ? (b(), P("div", {
          key: 0,
          ref_key: "scrollBarRefY",
          ref: p,
          class: "scrollbar vertical",
          onClick: ce,
          onWheel: N
        }, [
          z("div", {
            class: "thumb",
            ref_key: "scrollBarThumbRefY",
            ref: x,
            style: ye({ top: `${k.pos}%`, height: `${k.size}%` }),
            onMousedown: c[1] || (c[1] = //@ts-ignore
            (...m) => l(Z) && l(Z)(...m)),
            onWheel: N
          }, null, 36)
        ], 544)) : D("", !0)
      ]) : D("", !0)
    ], 38));
  }
}), ke = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [u, v] of o)
    s[u] = v;
  return s;
}, Wt = {}, _t = {
  class: "mx-checked-mark",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, Ht = /* @__PURE__ */ z("path", { d: "M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z" }, null, -1), Rt = [
  Ht
];
function Ot(e, o) {
  return b(), P("svg", _t, Rt);
}
const Bt = /* @__PURE__ */ ke(Wt, [["render", Ot]]), Pt = {}, $t = {
  class: "mx-right-arrow",
  "aria-hidden": "true",
  viewBox: "0 0 1024 1024"
}, At = /* @__PURE__ */ z("path", { d: "M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z" }, null, -1), Ft = [
  At
];
function Lt(e, o) {
  return b(), P("svg", $t, Ft);
}
const Tt = /* @__PURE__ */ ke(Pt, [["render", Lt]]), Et = { class: "mx-item-row" }, zt = ["xlink:href"], jt = {
  key: 1,
  class: "label"
}, Dt = { class: "mx-item-row" }, Nt = { class: "mx-shortcut" }, $e = /* @__PURE__ */ te({
  __name: "ContextMenuItem",
  props: {
    /**
     * Is this menu disabled? 
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Is this menu hidden? 
     */
    hidden: {
      type: Boolean,
      default: !1
    },
    customRender: {
      type: Function,
      default: null
    },
    /**
     * Custom css class for submenu
     */
    customClass: {
      type: String,
      default: ""
    },
    clickHandler: {
      type: Function,
      default: null
    },
    /**
     * Menu label
     */
    label: {
      type: [String, Object, Function],
      default: ""
    },
    /**
     * Menu icon (for icon class)
     */
    icon: {
      type: [String, Object, Function],
      default: ""
    },
    /**
     * Custom icon library font class name.
     * 
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
      type: String,
      default: "iconfont"
    },
    /**
     * Is this menu item checked?
     * 
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
      type: Boolean,
      default: !1
    },
    /**
     * Shortcut key text display on the right.
     * 
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
      type: String,
      default: ""
    },
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
      type: String,
      default: ""
    },
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
      type: Object,
      default: null
    },
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     * 
     * Default is true .
     * 
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
      type: Boolean,
      default: !0
    },
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
      type: Boolean,
      default: !1
    },
    hasChildren: {
      type: Boolean,
      default: !1
    },
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
      type: Boolean,
      default: !0
    },
    /**
     * When there are subitems in this item, is it allowed to trigger its own click event? Default is false
     */
    clickableWhenHasChildren: {
      type: Boolean,
      default: !1
    },
    rawMenuItem: {
      type: Object,
      default: void 0
    }
  },
  emits: [
    "click",
    "subMenuOpen",
    "subMenuClose"
  ],
  setup(e, { expose: o, emit: s }) {
    const u = e, v = s, {
      clickHandler: n,
      clickClose: _,
      clickableWhenHasChildren: d,
      disabled: p,
      hidden: h,
      label: x,
      icon: B,
      iconFontClass: L,
      showRightArrow: S,
      shortcut: M,
      hasChildren: k
    } = re(u), H = W(!1), r = W(!1), f = W(), C = T("globalOptions"), y = T("globalHasSlot"), I = T("globalRenderSlot"), i = T("globalCloseMenu"), g = T("menuContext"), K = _e(() => typeof x.value == "string" ? x.value : typeof x.value == "function" ? Ct(x.value.toString()) : "MenuItem[unknow]");
    J("MenuItemName", K);
    const R = {
      getSubMenuInstance: () => {
      },
      showSubMenu: () => H.value ? (g.markActiveMenuItem(R, !0), !0) : k.value ? (V(), !0) : !1,
      hideSubMenu: () => {
        g.closeOtherSubMenu();
      },
      isDisabledOrHidden: () => p.value || h.value,
      getElement: () => f.value,
      focus: () => r.value = !0,
      blur: () => r.value = !1,
      click: N
    };
    J("menuItemInstance", R), be(() => {
      g.isMenuItemDataCollectedFlag() ? ae(() => {
        let w = 0;
        const $ = g.getElement();
        if ($) {
          let Z = 0;
          for (let Y = 0; Y < $.children.length; Y++) {
            const G = $.children[Y];
            if (G.getAttribute("data-type") === "ContextMenuItem") {
              if (G === f.value) {
                w = Z;
                break;
              }
              Z++;
            }
          }
        }
        g.addChildMenuItem(R, w);
      }) : g.addChildMenuItem(R);
    }), Me(() => {
      g.removeChildMenuItem(R);
    });
    function N(w) {
      if (!p.value) {
        if (w) {
          const $ = w.target;
          if ($.classList.contains("mx-context-no-clickable") || C.value.ignoreClickClassName && $.classList.contains(C.value.ignoreClickClassName))
            return;
          if (C.value.clickCloseClassName && $.classList.contains(C.value.clickCloseClassName)) {
            w.stopPropagation(), i(u.rawMenuItem);
            return;
          }
        }
        k.value ? d.value ? (typeof n.value == "function" && n.value(w), v("click", w)) : H.value || V() : (typeof n.value == "function" && n.value(w), v("click", w), _.value && i(u.rawMenuItem));
      }
    }
    function V(w) {
      r.value = !1, g.checkCloseOtherSubMenuTimeOut() || g.closeOtherSubMenu(), p.value || (g.markActiveMenuItem(R), k.value && (w || g.markThisOpenedByKeyBoard(), g.addOpenedSubMenu(U), H.value = !0, ae(() => v("subMenuOpen", R))));
    }
    function U() {
      r.value = !1, H.value = !1, v("subMenuClose", R);
    }
    function A() {
      return {
        disabled: p.value,
        label: x.value,
        icon: B.value,
        iconFontClass: L.value,
        showRightArrow: S.value,
        clickClose: _.value,
        clickableWhenHasChildren: d.value,
        shortcut: M.value,
        theme: C.value.theme,
        isOpen: H,
        hasChildren: k,
        onClick: N,
        onMouseEnter: V,
        closeMenu: i
      };
    }
    return o(R), (w, $) => l(h) ? D("", !0) : (b(), P("div", {
      key: 0,
      class: "mx-context-menu-item-wrapper",
      ref_key: "menuItemRef",
      ref: f,
      "data-type": "ContextMenuItem"
    }, [
      l(y)("itemRender") ? (b(), F(l(q), {
        key: 0,
        vnode: () => l(I)("itemRender", A())
      }, null, 8, ["vnode"])) : e.customRender ? (b(), F(l(q), {
        key: 1,
        vnode: e.customRender,
        data: A()
      }, null, 8, ["vnode", "data"])) : (b(), P("div", {
        key: 2,
        class: oe([
          "mx-context-menu-item",
          l(p) ? "disabled" : "",
          r.value ? "keyboard-focus" : "",
          e.customClass ? " " + e.customClass : "",
          H.value ? "open" : ""
        ]),
        onClick: N,
        onMouseenter: V
      }, [
        E(w.$slots, "default", {}, () => [
          z("div", Et, [
            z("div", {
              class: oe([
                "mx-icon-placeholder",
                e.preserveIconWidth ? "preserve-width" : ""
              ])
            }, [
              E(w.$slots, "icon", {}, () => [
                l(y)("itemIconRender") ? (b(), F(l(q), {
                  key: 0,
                  vnode: () => l(I)("itemIconRender", A())
                }, null, 8, ["vnode"])) : typeof e.svgIcon == "string" && e.svgIcon ? (b(), P("svg", He({
                  key: 1,
                  class: "icon svg"
                }, e.svgProps), [
                  z("use", { "xlink:href": e.svgIcon }, null, 8, zt)
                ], 16)) : typeof l(B) != "string" ? (b(), F(l(q), {
                  key: 2,
                  vnode: l(B),
                  data: l(B)
                }, null, 8, ["vnode", "data"])) : typeof l(B) == "string" && l(B) !== "" ? (b(), P("i", {
                  key: 3,
                  class: oe(l(B) + " icon " + l(L) + " " + l(C).iconFontClass)
                }, null, 2)) : D("", !0)
              ]),
              e.checked ? E(w.$slots, "check", { key: 0 }, () => [
                l(y)("itemCheckRender") ? (b(), F(l(q), {
                  key: 0,
                  vnode: () => l(I)("itemCheckRender", A())
                }, null, 8, ["vnode"])) : D("", !0),
                ie(Bt)
              ]) : D("", !0)
            ], 2),
            E(w.$slots, "label", {}, () => [
              l(y)("itemLabelRender") ? (b(), F(l(q), {
                key: 0,
                vnode: () => l(I)("itemLabelRender", A())
              }, null, 8, ["vnode"])) : typeof l(x) == "string" ? (b(), P("span", jt, Re(l(x)), 1)) : (b(), F(l(q), {
                key: 2,
                vnode: l(x),
                data: l(x)
              }, null, 8, ["vnode", "data"]))
            ])
          ]),
          z("div", Dt, [
            l(M) || w.$slots.shortcut ? E(w.$slots, "shortcut", { key: 0 }, () => [
              l(y)("itemShortcutRender") ? (b(), F(l(q), {
                key: 0,
                vnode: () => l(I)("itemShortcutRender", A())
              }, null, 8, ["vnode"])) : D("", !0),
              z("span", Nt, Re(l(M)), 1)
            ]) : D("", !0),
            l(S) ? E(w.$slots, "rightArrow", { key: 1 }, () => [
              l(y)("itemRightArrowRender") ? (b(), F(l(q), {
                key: 0,
                vnode: () => l(I)("itemRightArrowRender", A())
              }, null, 8, ["vnode"])) : D("", !0),
              ie(Tt)
            ]) : D("", !0)
          ])
        ])
      ], 34)),
      E(w.$slots, "submenu", {
        context: R,
        show: H.value
      })
    ], 512));
  }
}), Kt = te({
  name: "ContextMenuSperator",
  components: {
    VNodeRender: q
  },
  setup() {
    const e = T("globalHasSlot"), o = T("globalRenderSlot");
    return {
      globalHasSlot: e,
      globalRenderSlot: o
    };
  }
}), Yt = {
  key: 1,
  class: "mx-context-menu-item-sperator mx-context-no-clickable"
};
function Vt(e, o, s, u, v, n) {
  const _ = qe("VNodeRender");
  return e.globalHasSlot("separatorRender") ? (b(), F(_, {
    key: 0,
    vnode: () => e.globalRenderSlot("separatorRender", {})
  }, null, 8, ["vnode"])) : (b(), P("div", Yt));
}
const ge = /* @__PURE__ */ ke(Kt, [["render", Vt]]), Ae = /* @__PURE__ */ te({
  __name: "ContextSubMenu",
  props: {
    /**
     * Items from options
     */
    items: {
      type: Object,
      default: null
    },
    /**
     * Show
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Max height for this submenu
     */
    maxHeight: {
      type: Number,
      default: 0
    },
    /**
     * Max width for this submenu
     */
    maxWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Min width for this submenu
     */
    minWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Specifies should submenu adjust it position
     * when the menu exceeds the screen. The default is true
     */
    adjustPosition: {
      type: Boolean,
      default: !0
    },
    /**
     * Menu direction
     */
    direction: {
      type: String,
      default: "br"
    },
    parentMenuItemContext: {
      type: Object,
      default: null
    }
  },
  emits: ["closeAnimFinished"],
  setup(e, { expose: o, emit: s }) {
    const u = e, v = s, n = W(!1), _ = T("globalGetMenuHostId", ""), d = T("menuContext"), p = T("globalOptions");
    T("globalHasSlot"), T("globalRenderSlot");
    const h = W("UnknowOrRoot"), x = T("MenuItemName", h), { zIndex: B, getParentWidth: L, getParentHeight: S, getZoom: M } = d, { adjustPosition: k } = re(u), H = W(), r = W(), f = W(), C = [], y = T("globalSetCurrentSubMenu"), I = [];
    let i = null, g = 0;
    function K() {
      i && i.blur();
    }
    function R(t, c) {
      if (t) {
        for (let m = c !== void 0 ? c : 0; m < I.length; m++)
          if (!I[m].isDisabledOrHidden()) {
            N(m);
            break;
          }
      } else
        for (let m = c !== void 0 ? c : I.length - 1; m >= 0; m--)
          if (!I[m].isDisabledOrHidden()) {
            N(m);
            break;
          }
    }
    function N(t) {
      if (i && K(), t !== void 0 && (i = I[Math.max(0, Math.min(t, I.length - 1))]), !i)
        return;
      i.focus();
      const c = i.getElement();
      c && c.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest"
      });
    }
    function V() {
      y(U);
    }
    const U = {
      el: f,
      name: x,
      isTopLevel: () => d.getParentContext() === null,
      closeSelfAndActiveParent: () => {
        const t = $.getParentContext();
        if (t) {
          t.closeOtherSubMenu();
          const c = t.getSubMenuInstanceContext();
          if (c)
            return c.focusCurrentItem(), !0;
        }
        return !1;
      },
      closeCurrentSubMenu: () => {
        var t;
        return (t = $.getParentContext()) == null ? void 0 : t.closeOtherSubMenu();
      },
      moveCurrentItemFirst: () => R(!0),
      moveCurrentItemLast: () => R(!1),
      moveCurrentItemDown: () => R(!0, i ? I.indexOf(i) + 1 : 0),
      moveCurrentItemUp: () => R(!1, i ? I.indexOf(i) - 1 : 0),
      focusCurrentItem: () => N(),
      openCurrentItemSubMenu: () => i ? i == null ? void 0 : i.showSubMenu() : !1,
      triggerCurrentItemClick: (t) => i == null ? void 0 : i.click(t)
    };
    let A = !1, w = !1;
    const $ = {
      zIndex: B + 1,
      container: d.container,
      adjustPadding: p.value.adjustPadding || ee.defaultAdjustPadding,
      getParentWidth: () => {
        var t;
        return ((t = f.value) == null ? void 0 : t.offsetWidth) || 0;
      },
      getParentHeight: () => {
        var t;
        return ((t = f.value) == null ? void 0 : t.offsetHeight) || 0;
      },
      getPositon: () => [O.value.x, O.value.y],
      getZoom: () => p.value.zoom || ee.defaultZoom,
      addOpenedSubMenu(t) {
        C.push(t);
      },
      closeOtherSubMenu() {
        C.forEach((t) => t()), C.splice(0, C.length), y(U);
      },
      checkCloseOtherSubMenuTimeOut() {
        return g ? (clearTimeout(g), g = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        g = setTimeout(() => {
          g = 0, this.closeOtherSubMenu();
        }, 200);
      },
      addChildMenuItem: (t, c) => {
        c === void 0 ? I.push(t) : I.splice(c, 0, t);
      },
      removeChildMenuItem: (t) => {
        I.splice(I.indexOf(t), 1), t.getSubMenuInstance = () => {
        };
      },
      markActiveMenuItem: (t, c = !1) => {
        K(), i = t, c && N();
      },
      markThisOpenedByKeyBoard: () => {
        A = !0;
      },
      isOpenedByKeyBoardFlag: () => A ? (A = !1, !0) : !1,
      isMenuItemDataCollectedFlag: () => w,
      getElement: () => f.value || null,
      getParentContext: () => d,
      getSubMenuInstanceContext: () => U
    };
    J("menuContext", $);
    const Z = {
      getChildItem: (t) => I[t],
      getMenuDimensions: () => r.value ? {
        width: r.value.offsetWidth,
        height: r.value.offsetHeight
      } : { width: 0, height: 0 },
      getSubmenuRoot: () => r.value,
      getMenu: () => f.value,
      getScrollValue: () => {
        var t, c;
        return ((c = (t = H.value) == null ? void 0 : t.getScrollContainer()) == null ? void 0 : c.scrollTop) || 0;
      },
      setScrollValue: (t) => {
        var c;
        return (c = H.value) == null ? void 0 : c.scrollTo(0, t);
      },
      getScrollHeight: () => G.value,
      adjustPosition: () => {
        ce();
      },
      getMaxHeight: () => Q.value,
      getPosition: () => O.value,
      setPosition: (t, c) => {
        O.value.x = t, O.value.y = c;
      }
    }, Y = T("menuItemInstance", void 0);
    Y && (Y.getSubMenuInstance = () => Z);
    const G = W(0), Q = W(0), ne = W(!1), O = W({ x: 0, y: 0 });
    function ce() {
      ae(() => {
        const t = f.value, c = r.value;
        if (t && c && H.value) {
          const { container: m } = d, a = (L == null ? void 0 : L()) ?? 0, de = (S == null ? void 0 : S()) ?? 0, j = getComputedStyle(c), X = parseFloat(j.paddingLeft), fe = parseFloat(j.paddingTop), Se = de > 0 ? fe : 0, ut = document.documentElement.scrollHeight / M(), at = document.documentElement.scrollWidth / M(), it = Math.min(at, m.offsetWidth), Le = Math.min(ut, m.offsetHeight);
          let we = ue(t, m), Ie = se(t, m);
          u.direction.includes("l") ? O.value.x -= t.offsetWidth + X : u.direction.includes("r") ? O.value.x += a + X : (O.value.x += a / 2, O.value.x -= (t.offsetWidth + X) / 2), u.direction.includes("t") ? O.value.y -= (t.offsetHeight + fe * 2) / M() : u.direction.includes("b") ? O.value.y -= fe / M() : O.value.y -= (t.offsetHeight + fe) / 2 / M(), ae(() => {
            var ze, je;
            we = ue(t, m), Ie = se(t, m);
            const Te = ((je = (ze = H.value) == null ? void 0 : ze.getScrollContainer()) == null ? void 0 : je.scrollHeight) || 0, rt = u.maxHeight;
            G.value = u.maxHeight ? Math.min(Te, u.maxHeight) : Te;
            const ct = we + t.offsetWidth - it, Ee = Ie + G.value + Se * 2 - Le;
            if (ne.value = Ee > 0, k.value && ct > 0) {
              const ve = a + t.offsetWidth - X, he = we;
              ve > he ? O.value.x -= he : O.value.x -= ve;
            }
            if (ne.value) {
              if (k.value) {
                const ve = Ee, he = Ie;
                ve > he ? O.value.y -= he - Se : O.value.y -= ve - Se;
              }
              Q.value = Le - (O.value.y + fe);
            } else
              Q.value = rt || 0;
          });
        }
      });
    }
    function Fe() {
    }
    function Ce() {
      var c;
      const t = (c = u.parentMenuItemContext) == null ? void 0 : c.getElement();
      if (t) {
        const m = ue(t, d.container), a = se(t, d.container);
        O.value.x = m, O.value.y = a;
      } else {
        const [m, a] = d.getPositon();
        O.value.x = m, O.value.y = a;
      }
      ae(() => {
        var m;
        y(U), (m = f.value) == null || m.focus({ preventScroll: !0 }), d.isOpenedByKeyBoardFlag() && ae(() => R(!0)), w = !0;
      }), ce();
    }
    return Be(() => u.show, (t) => {
      t ? Ce() : void 0;
    }), be(() => {
      n.value = !0, u.show ? Ce() : ce();
    }), Me(() => {
      n.value = !1, Y && (Y.getSubMenuInstance = () => {
      });
    }), o(Z), (t, c) => {
      const m = qe("ContextSubMenu", !0);
      return n.value ? (b(), F(et, {
        key: 0,
        to: `#${l(_)}`
      }, [
        ie(dt, He({ appear: "" }, l(p).menuTransitionProps || {
          duration: 10
        }, {
          onAfterLeave: c[0] || (c[0] = (a) => v("closeAnimFinished"))
        }), {
          default: pe(() => [
            e.show ? (b(), P("div", He({
              key: 0,
              ref_key: "submenuRoot",
              ref: r
            }, t.$attrs, {
              class: [
                "mx-context-menu",
                l(p).customClass ? l(p).customClass : "",
                l(p).theme ?? ""
              ],
              style: {
                maxWidth: e.maxWidth ? l(Ye)(e.maxWidth) : `${l(ee).defaultMaxWidth}px`,
                minWidth: e.minWidth ? l(Ye)(e.minWidth) : `${l(ee).defaultMinWidth}px`,
                zIndex: l(B),
                left: `${O.value.x}px`,
                top: `${O.value.y}px`
              },
              "data-type": "ContextSubMenu",
              onClick: V
            }), [
              ie(l(It), {
                ref_key: "scrollRectRef",
                ref: H,
                scroll: "vertical",
                maxHeight: Q.value,
                containerClass: "mx-context-menu-scroll"
              }, {
                default: pe(() => [
                  z("div", {
                    class: oe(["mx-context-menu-items"]),
                    ref_key: "menu",
                    ref: f
                  }, [
                    E(t.$slots, "default", {}, () => [
                      (b(!0), P(Oe, null, Pe(e.items, (a, de) => (b(), P(Oe, { key: de }, [
                        a.hidden !== !0 && a.divided === "up" ? (b(), F(ge, { key: 0 })) : D("", !0),
                        a.hidden !== !0 && a.divided === "self" ? (b(), F(ge, { key: 1 })) : (b(), F($e, {
                          key: 2,
                          clickHandler: a.onClick ? (j) => a.onClick(j) : void 0,
                          disabled: typeof a.disabled == "object" ? a.disabled.value : a.disabled,
                          hidden: typeof a.hidden == "object" ? a.hidden.value : a.hidden,
                          icon: a.icon,
                          iconFontClass: a.iconFontClass,
                          svgIcon: a.svgIcon,
                          svgProps: a.svgProps,
                          label: a.label,
                          customRender: a.customRender,
                          customClass: a.customClass,
                          checked: typeof a.checked == "object" ? a.checked.value : a.checked,
                          shortcut: a.shortcut,
                          clickClose: a.clickClose,
                          clickableWhenHasChildren: a.clickableWhenHasChildren,
                          preserveIconWidth: a.preserveIconWidth !== void 0 ? a.preserveIconWidth : l(p).preserveIconWidth,
                          showRightArrow: a.children && a.children.length > 0,
                          hasChildren: a.children && a.children.length > 0,
                          rawMenuItem: a,
                          onSubMenuOpen: (j) => {
                            var X;
                            return (X = a.onSubMenuOpen) == null ? void 0 : X.call(a, j);
                          },
                          onSubMenuClose: (j) => {
                            var X;
                            return (X = a.onSubMenuClose) == null ? void 0 : X.call(a, j);
                          }
                        }, tt({ _: 2 }, [
                          a.children && a.children.length > 0 ? {
                            name: "submenu",
                            fn: pe(({ context: j, show: X }) => [
                              ie(m, {
                                show: X,
                                parentMenuItemContext: j,
                                items: a.children,
                                maxWidth: a.maxWidth,
                                minWidth: a.minWidth,
                                maxHeight: a.maxHeight,
                                adjustPosition: a.adjustSubMenuPosition !== void 0 ? a.adjustSubMenuPosition : l(p).adjustPosition,
                                direction: a.direction !== void 0 ? a.direction : l(p).direction
                              }, null, 8, ["show", "parentMenuItemContext", "items", "maxWidth", "minWidth", "maxHeight", "adjustPosition", "direction"])
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1032, ["clickHandler", "disabled", "hidden", "icon", "iconFontClass", "svgIcon", "svgProps", "label", "customRender", "customClass", "checked", "shortcut", "clickClose", "clickableWhenHasChildren", "preserveIconWidth", "showRightArrow", "hasChildren", "rawMenuItem", "onSubMenuOpen", "onSubMenuClose"])),
                        a.hidden !== !0 && (a.divided === "down" || a.divided === !0) ? (b(), F(ge, { key: 3 })) : D("", !0)
                      ], 64))), 128))
                    ])
                  ], 512)
                ]),
                _: 3
              }, 8, ["maxHeight"])
            ], 16)) : D("", !0)
          ]),
          _: 3
        }, 16)
      ], 8, ["to"])) : D("", !0);
    };
  }
});
const st = /* @__PURE__ */ te({
  __name: "ContextSubMenuWrapper",
  props: {
    /**
     * Menu options
     */
    options: {
      type: Object,
      default: null
    },
    /**
     * Show menu?
     */
    show: {
      type: null,
      default: null
    },
    /**
     * Current container, For calculation only
     */
    container: {
      type: Object,
      default: null
    },
    /**
     * Make sure is user set the custom container.
     */
    isFullScreenContainer: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["close", "closeAnimFinished"],
  setup(e, { expose: o, emit: s }) {
    const u = e, v = s, n = nt(), _ = W(), {
      options: d,
      show: p,
      container: h
    } = re(u);
    be(() => {
      p.value && L();
    }), Me(() => {
      H();
    }), Be(p, (i) => {
      i ? L() : (Ke(x), H());
    });
    const x = {
      closeMenu: S,
      isClosed: M,
      getMenuRef: () => _.value,
      getMenuDimensions: () => {
        var i;
        return ((i = _.value) == null ? void 0 : i.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    };
    let B = !1;
    function L() {
      k(), mt(x);
    }
    function S(i) {
      B = !0, v("close", i), d.value.menuTransitionProps || v("closeAnimFinished"), Ke(x);
    }
    function M() {
      return B;
    }
    function k() {
      setTimeout(() => {
        document.addEventListener("click", y, !0), document.addEventListener("contextmenu", y, !0), document.addEventListener("scroll", C, !0), !u.isFullScreenContainer && h.value && h.value.addEventListener("scroll", C, !0), d.value.keyboardControl !== !1 && document.addEventListener("keydown", f, !0);
      }, 50);
    }
    function H() {
      document.removeEventListener("contextmenu", y, !0), document.removeEventListener("click", y, !0), document.removeEventListener("scroll", C, !0), !u.isFullScreenContainer && h.value && h.value.removeEventListener("scroll", C, !0), d.value.keyboardControl !== !1 && document.removeEventListener("keydown", f, !0);
    }
    const r = W();
    J("globalSetCurrentSubMenu", (i) => r.value = i), J("globalGetMenuHostId", h.value.id);
    function f(i) {
      var K, R, N, V, U, A, w, $, Z, Y, G, Q, ne;
      let g = !0;
      switch (i.key) {
        case "Escape": {
          ((K = r.value) == null ? void 0 : K.isTopLevel()) === !1 ? (R = r.value) == null || R.closeCurrentSubMenu() : S();
          break;
        }
        case "ArrowDown":
          (N = r.value) == null || N.moveCurrentItemDown();
          break;
        case "ArrowUp":
          (V = r.value) == null || V.moveCurrentItemUp();
          break;
        case "Home":
          (U = r.value) == null || U.moveCurrentItemFirst();
          break;
        case "End":
          (A = r.value) == null || A.moveCurrentItemLast();
          break;
        case "ArrowLeft": {
          (w = r.value) != null && w.closeSelfAndActiveParent() || (Z = ($ = d.value).onKeyFocusMoveLeft) == null || Z.call($);
          break;
        }
        case "ArrowRight":
          (Y = r.value) != null && Y.openCurrentItemSubMenu() || (Q = (G = d.value).onKeyFocusMoveRight) == null || Q.call(G);
          break;
        case "Enter":
          (ne = r.value) == null || ne.triggerCurrentItemClick(i);
          break;
        default:
          g = !1;
          break;
      }
      g && r.value && (i.stopPropagation(), i.preventDefault());
    }
    function C(i) {
      d.value.closeWhenScroll !== !1 && I(i.target, null);
    }
    function y(i) {
      I(i.target, i);
    }
    function I(i, g) {
      var K, R;
      for (; i; ) {
        if (i.classList && i.classList.contains("mx-context-menu"))
          return;
        i = i.parentNode;
      }
      g ? d.value.clickCloseOnOutside !== !1 ? (H(), S()) : (R = (K = d.value).onClickOnOutside) == null || R.call(K, g) : (H(), S());
    }
    return J("globalOptions", d), J("globalCloseMenu", S), J("globalIsFullScreenContainer", u.isFullScreenContainer), J("globalHasSlot", (i) => n[i] !== void 0), J("globalRenderSlot", (i, g) => E(n, i, { ...g }, () => [xe("span", "Render slot failed")], !1)), J("menuContext", {
      zIndex: d.value.zIndex || ee.defaultZindex,
      container: h.value,
      adjustPadding: { x: 0, y: 0 },
      getZoom: () => d.value.zoom || ee.defaultZoom,
      getParentWidth: () => 0,
      getParentHeight: () => 0,
      getPositon: () => [d.value.x, d.value.y],
      closeOtherSubMenuWithTimeOut: () => {
      },
      checkCloseOtherSubMenuTimeOut: () => !1,
      addOpenedSubMenu: () => {
      },
      closeOtherSubMenu: () => {
      },
      getParentContext: () => null,
      getSubMenuInstanceContext: () => null,
      getElement: () => null,
      addChildMenuItem: () => {
      },
      removeChildMenuItem: () => {
      },
      markActiveMenuItem: () => {
      },
      markThisOpenedByKeyBoard: () => {
      },
      isOpenedByKeyBoardFlag: () => !1,
      isMenuItemDataCollectedFlag: () => !1
    }), o(x), (i, g) => (b(), F(Ae, {
      ref_key: "submenuInstance",
      ref: _,
      show: l(p),
      items: l(d).items,
      adjustPosition: l(d).adjustPosition,
      maxWidth: l(d).maxWidth || l(ee).defaultMaxWidth,
      minWidth: l(d).minWidth || l(ee).defaultMinWidth,
      maxHeight: l(d).maxHeight,
      direction: l(d).direction || l(ee).defaultDirection,
      onCloseAnimFinished: g[0] || (g[0] = (K) => v("closeAnimFinished"))
    }, {
      default: pe(() => [
        E(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["show", "items", "adjustPosition", "maxWidth", "minWidth", "maxHeight", "direction"]));
  }
});
const Ut = /* @__PURE__ */ te({
  __name: "ContextMenu",
  props: {
    /**
     * Menu options
     */
    options: {
      type: Object,
      default: null
    },
    /**
     * Show menu?
     */
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:show", "close"],
  setup(e, { expose: o, emit: s }) {
    const u = s, v = e, { options: n, show: _ } = re(v), { isNew: d, container: p, eleId: h } = lt(n.value), x = W(null), B = nt();
    function L(S) {
      var M, k;
      u("update:show", !1), u("close"), (k = (M = n.value).onClose) == null || k.call(M, S);
    }
    return o({
      closeMenu: () => u("update:show", !1),
      isClosed: () => !_.value,
      getMenuRef: () => {
        var S;
        return (S = x.value) == null ? void 0 : S.getMenuRef();
      },
      getMenuDimensions: () => {
        var S;
        return ((S = x.value) == null ? void 0 : S.getMenuDimensions()) ?? { width: 0, height: 0 };
      }
    }), (S, M) => (b(), F(et, {
      to: `#${l(h)}`
    }, [
      ie(st, {
        ref_key: "menuRef",
        ref: x,
        options: l(n),
        show: l(_),
        container: l(p),
        isFullScreenContainer: !l(d),
        onClose: L
      }, tt({ _: 2 }, [
        Pe(l(B), (k, H) => ({
          name: H,
          fn: pe((r) => [
            E(S.$slots, H, ft(vt(r)))
          ])
        }))
      ]), 1032, ["options", "show", "container", "isFullScreenContainer"])
    ], 8, ["to"]));
  }
}), Xt = te({
  name: "ContextMenuGroup",
  props: {
    /**
    * Is this menu disabled? 
    */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
    * Is this menu hidden? 
    */
    hidden: {
      type: Boolean,
      default: !1
    },
    /**
     * Is this menu disabled? 
     */
    clickHandler: {
      type: Function,
      default: null
    },
    /**
     * Menu label
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Menu icon (for icon class)
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Custom icon library font class name.
     * 
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
      type: String,
      default: "iconfont"
    },
    /**
     * Is this menu item checked?
     * 
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
      type: Boolean,
      default: !1
    },
    /**
     * Shortcut key text display on the right.
     * 
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
      type: String,
      default: ""
    },
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
      type: String,
      default: ""
    },
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
      type: Object,
      default: null
    },
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     * 
     * Default is true .
     * 
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
      type: Boolean,
      default: !0
    },
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
      type: Boolean,
      default: !1
    },
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
      type: Boolean,
      default: !0
    },
    /**
     * By default, the submenu will automatically adjust its position to prevent it overflow the container.
     * 
     * If you allow menu overflow containers, you can set this to false.
     * 
     * Default is inherit from `MenuOptions.adjustPosition`  .
     */
    adjustSubMenuPosition: {
      type: Boolean,
      default: void 0
    },
    /**
     * Max height of submenu
     */
    maxHeight: {
      type: [String, Number],
      default: 0
    },
    /**
     * Max width of submenu
     */
    maxWidth: {
      type: [String, Number],
      default: 0
    },
    /**
     * Min width of submenu
     */
    minWidth: {
      type: [String, Number],
      default: 0
    }
  },
  setup(e, o) {
    const s = T("globalOptions"), { adjustSubMenuPosition: u, maxWidth: v, minWidth: n, maxHeight: _ } = re(e), d = typeof u.value < "u" ? u.value : s.value.adjustPosition, p = W(), h = W();
    return o.expose({
      getSubMenuRef: () => p.value,
      getMenuItemRef: () => h.value
    }), () => xe($e, {
      ...e,
      ref: h,
      showRightArrow: !0,
      maxWidth: void 0,
      minWidth: void 0,
      maxHeight: void 0,
      adjustSubMenuPosition: void 0,
      hasChildren: typeof o.slots.default !== void 0
    }, o.slots.default ? {
      //Create SubMenu
      submenu: (x) => xe(Ae, {
        ref: p,
        show: x.show,
        maxWidth: v.value,
        minWidth: n.value,
        maxHeight: _.value,
        adjustPosition: d,
        parentMenuItemContext: x.context
      }, {
        default: o.slots.default
      }),
      //Add other slots
      ...yt(o.slots, "default")
    } : o.slots);
  }
});
function Zt(e, o, s, u) {
  const v = W(!0), n = xe(st, {
    options: e,
    show: v,
    container: o,
    isFullScreenContainer: !s,
    onCloseAnimFinished: () => {
      Ne(null, o);
    },
    onClose: (_) => {
      var d;
      (d = e.onClose) == null || d.call(e, _), v.value = !1;
    }
  }, u);
  return Ne(n, o), n.component;
}
function Je(e, o) {
  const s = lt(e);
  return Zt(e, s.container, s.isNew, o).exposed;
}
const Qe = {
  /**
   * For Vue install
   * @param app 
   */
  install(e) {
    e.config.globalProperties.$contextmenu = Je, e.component("ContextMenu", Ut), e.component("ContextMenuItem", $e), e.component("ContextMenuGroup", Xt), e.component("ContextMenuSperator", ge), e.component("ContextMenuSeparator", ge), e.component("ContextSubMenu", Ae);
  },
  /**
   * Show a ContextMenu in page, same as `this.$contextmenu`
   * 
   * For example:
   * 
   * ```ts
   * onContextMenu(e : MouseEvent) {
   *   //prevent the browser's default menu
   *   e.preventDefault();
   *   //show your menu
   *   ContextMenu.showContextMenu({
   *     x: e.x,
   *     y: e.y,
   *     items: [
   *       { 
   *         label: "A menu item", 
   *         onClick: () => {
   *           alert("You click a menu item");
   *         }
   *       },
   *       { 
   *         label: "A submenu", 
   *         children: [
   *           { label: "Item1" },
   *           { label: "Item2" },
   *           { label: "Item3" },
   *         ]
   *       },
   *     ]
   *   }); 
   * }
   * ```
   * 
   * You can pass customSlots to custom rendering this menu.
   * 
   * For example, custom rendering #itemRender and #separatorRender:
   * ```ts
   *   ContextMenu.showContextMenu({
   *     ...
   *   } as MenuOptions, {
   *     //Use slot in function mode
   *     itemRender: ({ disabled, label, icon, showRightArrow, onClick, onMouseEnter }) => [  h('div', { 
   *       class: 'my-menu-item'+(disabled?' disabled':''),
   *       onMouseenter: onMouseEnter,
   *       onClick: onClick,
   *     }, [
   *       icon ? h('img', { src: icon }) : h('div', { class: 'icon-place-holder' }),
   *       h('span', label),
   *       showRightArrow ? h('span', { class: 'right-arraw' }, '>>') : h('div'),
   *     ]) ],
   *     separatorRender: () => [ h('div', { class: 'my-menu-sperator' }) ]
   *   })
   * ```
   * 
   * @param options The options of ContextMenu
   * @param customSlots You can provide some custom slots to customize the rendering style of the menu. These slots are the same as the slots of component ContextMenu.
   * @returns Menu instance 
   */
  showContextMenu(e, o) {
    return Je(e, o);
  },
  /**
   * Get if there is a menu open now.
   */
  isAnyContextMenuOpen() {
    return ht();
  },
  /**
   * Close the currently open menu
   */
  closeContextMenu: ot,
  //Tools
  transformMenuPosition: pt
}, Gt = {}, Jt = {
  class: "mx-menu-bar-icon-menu",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200"
}, Qt = /* @__PURE__ */ z("path", { d: "M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" }, null, -1), qt = /* @__PURE__ */ z("path", { d: "M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" }, null, -1), en = /* @__PURE__ */ z("path", { d: "M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" }, null, -1), tn = [
  Qt,
  qt,
  en
];
function nn(e, o) {
  return b(), P("svg", Jt, tn);
}
const on = /* @__PURE__ */ ke(Gt, [["render", nn]]), ln = ["onClick", "onMouseenter"], un = /* @__PURE__ */ te({
  __name: "MenuBar",
  props: {
    /**
     * Menu options
     */
    options: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const o = e, s = W(), u = W(!1), v = W([]), n = W(null);
    function _() {
      u.value = !0;
    }
    function d() {
      u.value = !1;
    }
    be(() => {
      v.value = o.options.items || [];
    }), Be(() => o.options, () => {
      v.value = o.options.items || [];
    });
    let p = null, h = -1;
    function x() {
      h < v.value.length - 1 ? h++ : h = 0, S(h, v.value[h]);
    }
    function B() {
      h > 0 ? h-- : h = v.value.length - 1, S(h, v.value[h]);
    }
    function L(r) {
      const f = o.options.barPopDirection ?? "bl";
      let C = 0, y = 0;
      return f.startsWith("b") ? y = se(r) + r.offsetHeight : f.startsWith("t") ? y = se(r) : y = se(r) + r.offsetHeight / 2, f.endsWith("l") ? C = ue(r) : f.startsWith("r") ? C = ue(r) + r.offsetWidth : C = ue(r) + r.offsetWidth / 2, { x: C, y: y + 5 };
    }
    function S(r, f) {
      var y;
      if (h = r, !f.children)
        return;
      p && (p.closeMenu(), p = null, u.value = !0), n.value = f;
      const C = (y = s.value) == null ? void 0 : y.children[r];
      if (C) {
        const { x: I, y: i } = L(C);
        p = Qe.showContextMenu({
          ...o.options,
          items: f.children,
          x: I,
          y: i,
          onKeyFocusMoveLeft() {
            B();
          },
          onKeyFocusMoveRight() {
            x();
          },
          onClose() {
            n.value == f && (u.value = !1, n.value = null), typeof f.onSubMenuClose == "function" && f.onSubMenuClose(void 0);
          }
        }), p && typeof f.onSubMenuOpen == "function" && f.onSubMenuOpen(void 0);
      }
    }
    function M() {
      h = 0;
      const r = s.value;
      if (r) {
        const { x: f, y: C } = L(r);
        p = Qe.showContextMenu({
          ...o.options,
          x: f,
          y: C
        });
      }
    }
    function k(r, f) {
      f ? (u.value = !0, S(r, f), f.onClick && (f.clickableWhenHasChildren === !0 && f.children && f.children.length > 0 || !f.children || f.children.length === 0) && f.onClick()) : M();
    }
    function H(r, f) {
      u.value && S(r, f);
    }
    return (r, f) => (b(), P("div", {
      class: oe([
        "mx-menu-bar",
        e.options.theme ?? "",
        e.options.mini ? "mini" : ""
      ]),
      onFocus: _,
      onBlur: d
    }, [
      E(r.$slots, "prefix"),
      e.options.mini ? (b(), P("div", {
        key: 0,
        ref_key: "menuBarContent",
        ref: s,
        class: "mx-menu-bar-content"
      }, [
        z("div", {
          class: "mx-menu-bar-item",
          onClick: f[0] || (f[0] = (C) => k(0, null))
        }, [
          ie(on)
        ])
      ], 512)) : (b(), P("div", {
        key: 1,
        ref_key: "menuBarContent",
        ref: s,
        class: "mx-menu-bar-content"
      }, [
        (b(!0), P(Oe, null, Pe(v.value, (C, y) => (b(), P("div", {
          key: y,
          class: oe([
            "mx-menu-bar-item",
            C == n.value ? "active" : ""
          ]),
          onClick: (I) => k(y, C),
          onMouseenter: (I) => H(y, C)
        }, Re(C.label), 43, ln))), 128))
      ], 512)),
      E(r.$slots, "suffix")
    ], 34));
  }
});
export {
  Ut as ContextMenu,
  Xt as ContextMenuGroup,
  $e as ContextMenuItem,
  ge as ContextMenuSeparator,
  un as MenuBar,
  Qe as default
};
//# sourceMappingURL=vue3-context-menu.es.js.map
