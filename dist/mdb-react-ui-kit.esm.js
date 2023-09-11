(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode(".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { jsx as l, jsxs as G, Fragment as Q } from "react/jsx-runtime";
import N, { useState as T, useEffect as I, useRef as K, useCallback as V, useMemo as ce, useImperativeHandle as we, createContext as ve, useContext as se, Children as Te, cloneElement as Be } from "react";
import m from "clsx";
import re, { createPortal as he } from "react-dom";
import { usePopper as ie } from "react-popper";
import { flip as De } from "@popperjs/core";
const nt = N.forwardRef(
  ({ breakpoint: e, fluid: t, children: s, className: n, tag: r = "div", ...a }, c) => {
    const o = m(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, n);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: s });
  }
), rt = N.forwardRef(
  ({
    center: e,
    children: t,
    className: s,
    end: n,
    lg: r,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: i,
    order: u,
    size: d,
    sm: p,
    start: f,
    tag: g = "div",
    xl: b,
    xxl: h,
    xs: v,
    ...M
  }, $) => {
    const B = m(
      d && `col-${d}`,
      v && `col-xs-${v}`,
      p && `col-sm-${p}`,
      a && `col-md-${a}`,
      r && `col-lg-${r}`,
      b && `col-xl-${b}`,
      h && `col-xxl-${h}`,
      !d && !v && !p && !a && !r && !b && !h ? "col" : "",
      u && `order-${u}`,
      f && "align-self-start",
      e && "align-self-center",
      n && "align-self-end",
      i && `offset-sm-${i}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      s
    );
    return /* @__PURE__ */ l(g, { className: B, ref: $, ...M, children: t });
  }
), at = N.forwardRef(
  ({ className: e, color: t = "primary", pill: s, light: n, dot: r, tag: a = "span", children: c, notification: o, ...i }, u) => {
    const d = m(
      "badge",
      n ? t && `badge-${t}` : t && `bg-${t}`,
      r && "badge-dot",
      s && "rounded-pill",
      o && "badge-notification",
      e
    );
    return /* @__PURE__ */ l(a, { className: d, ref: u, ...i, children: c });
  }
), Me = ({ ...e }) => {
  const [t, s] = T(!1), n = m("ripple-wave", t && "active");
  return I(() => {
    const r = setTimeout(() => {
      s(!0);
    }, 50);
    return () => {
      clearTimeout(r);
    };
  }, []), /* @__PURE__ */ l("div", { className: n, ...e });
}, $e = (...e) => {
  const t = N.useRef();
  return N.useEffect(() => {
    e.forEach((s) => {
      s && (typeof s == "function" ? s(t.current) : s.current = t.current);
    });
  }, [e]), t;
}, Re = N.forwardRef(
  ({
    className: e,
    rippleTag: t = "div",
    rippleCentered: s,
    rippleDuration: n = 500,
    rippleUnbound: r,
    rippleRadius: a = 0,
    rippleColor: c = "dark",
    children: o,
    onMouseDown: i,
    ...u
  }, d) => {
    const p = K(null), f = $e(d, p), g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", b = [0, 0, 0], h = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [v, M] = T([]), [$, B] = T(!1), x = m(
      "ripple",
      "ripple-surface",
      r && "ripple-surface-unbound",
      $ && `ripple-surface-${c}`,
      e
    ), y = () => {
      if (h.find((E) => E === (c == null ? void 0 : c.toLowerCase())))
        return B(!0);
      {
        const E = k(c).join(",");
        return `radial-gradient(circle, ${g.split("{{color}}").join(`${E}`)})`;
      }
    }, k = (w) => {
      const E = (D) => (D.length < 7 && (D = `#${D[1]}${D[1]}${D[2]}${D[2]}${D[3]}${D[3]}`), [parseInt(D.substr(1, 2), 16), parseInt(D.substr(3, 2), 16), parseInt(D.substr(5, 2), 16)]), R = (D) => {
        const S = document.body.appendChild(document.createElement("fictum")), j = "rgb(1, 2, 3)";
        return S.style.color = j, S.style.color !== j || (S.style.color = D, S.style.color === j || S.style.color === "") ? b : (D = getComputedStyle(S).color, document.body.removeChild(S), D);
      }, W = (D) => (D = D.match(/[.\d]+/g).map((S) => +Number(S)), D.length = 3, D);
      return w.toLowerCase() === "transparent" ? b : w[0] === "#" ? E(w) : (w.indexOf("rgb") === -1 && (w = R(w)), w.indexOf("rgb") === 0 ? W(w) : b);
    }, L = (w) => {
      const { offsetX: E, offsetY: R, height: W, width: D } = w, S = R <= W / 2, j = E <= D / 2, O = (X, Z) => Math.sqrt(X ** 2 + Z ** 2), _ = R === W / 2 && E === D / 2, q = {
        first: S === !0 && j === !1,
        second: S === !0 && j === !0,
        third: S === !1 && j === !0,
        fourth: S === !1 && j === !1
      }, Y = {
        topLeft: O(E, R),
        topRight: O(D - E, R),
        bottomLeft: O(E, W - R),
        bottomRight: O(D - E, W - R)
      };
      let U = 0;
      return _ || q.fourth ? U = Y.topLeft : q.third ? U = Y.topRight : q.second ? U = Y.bottomRight : q.first && (U = Y.bottomLeft), U * 2;
    }, F = (w) => {
      var U;
      const E = (U = f.current) == null ? void 0 : U.getBoundingClientRect(), R = w.clientX - E.left, W = w.clientY - E.top, D = E.height, S = E.width, j = {
        offsetX: s ? D / 2 : R,
        offsetY: s ? S / 2 : W,
        height: D,
        width: S
      }, O = {
        delay: n && n * 0.5,
        duration: n && n - n * 0.5
      }, _ = L(j), q = a || _ / 2, Y = {
        left: s ? `${S / 2 - q}px` : `${R - q}px`,
        top: s ? `${D / 2 - q}px` : `${W - q}px`,
        height: a ? `${a * 2}px` : `${_}px`,
        width: a ? `${a * 2}px` : `${_}px`,
        transitionDelay: `0s, ${O.delay}ms`,
        transitionDuration: `${n}ms, ${O.duration}ms`
      };
      return $ ? Y : { ...Y, backgroundImage: `${y()}` };
    }, P = (w) => {
      const E = F(w), R = v.concat(E);
      M(R), i && i(w);
    };
    return I(() => {
      const w = setTimeout(() => {
        v.length > 0 && M(v.splice(1, v.length - 1));
      }, n);
      return () => {
        clearTimeout(w);
      };
    }, [n, v]), /* @__PURE__ */ G(t, { className: x, onMouseDown: (w) => P(w), ref: f, ...u, children: [
      o,
      v.map((w, E) => /* @__PURE__ */ l(Me, { style: w }, E))
    ] });
  }
), ue = N.forwardRef(
  ({
    className: e,
    color: t = "primary",
    outline: s,
    children: n,
    rounded: r,
    disabled: a,
    floating: c,
    size: o,
    href: i,
    block: u,
    active: d,
    toggle: p,
    noRipple: f,
    tag: g = "button",
    role: b = "button",
    ...h
  }, v) => {
    const [M, $] = T(d || !1);
    let B;
    const x = t && ["light", "link"].includes(t) || s ? "dark" : "light";
    t !== "none" ? s ? t ? B = `btn-outline-${t}` : B = "btn-outline-primary" : t ? B = `btn-${t}` : B = "btn-primary" : B = "";
    const y = m(
      t !== "none" && "btn",
      B,
      r && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(i || g !== "button") && a ? "disabled" : ""}`,
      u && "btn-block",
      M && "active",
      e
    );
    return i && g !== "a" && (g = "a"), ["hr", "img", "input"].includes(g) || f ? /* @__PURE__ */ l(
      g,
      {
        className: y,
        onClick: p ? () => {
          $(!M);
        } : void 0,
        disabled: a && g === "button" ? !0 : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: n
      }
    ) : /* @__PURE__ */ l(
      Re,
      {
        rippleTag: g,
        rippleColor: x,
        className: y,
        onClick: p ? () => {
          $(!M);
        } : void 0,
        disabled: a && g === "button" ? !0 : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: n
      }
    );
  }
), ot = N.forwardRef(
  ({ className: e, children: t, shadow: s, toolbar: n, size: r, vertical: a, tag: c = "div", role: o = "group", ...i }, u) => {
    let d;
    n ? d = "btn-toolbar" : a ? d = "btn-group-vertical" : d = "btn-group";
    const p = m(d, s && `shadow-${s}`, r && `btn-group-${r}`, e);
    return /* @__PURE__ */ l(c, { className: p, ref: u, role: o, ...i, children: t });
  }
), ct = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", color: n, grow: r, size: a, ...c }, o) => {
    const i = m(
      `${r ? "spinner-grow" : "spinner-border"}`,
      n && `text-${n}`,
      `${a ? r ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return /* @__PURE__ */ l(s, { className: i, ref: o, ...c, children: t });
  }
), lt = N.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", shadow: a, alignment: c, ...o }, i) => {
    const u = m(
      "card",
      s && `border border-${s}`,
      n && `bg-${n}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return /* @__PURE__ */ l(r, { className: u, ref: i, ...o, children: t });
  }
), it = N.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", ...a }, c) => {
    const o = m("card-header", s && `border-${s}`, n && `bg-${n}`, e);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: t });
  }
), ut = N.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...n }, r) => {
    const a = m("card-subtitle", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), dt = N.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...n }, r) => {
    const a = m("card-title", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), ft = N.forwardRef(
  ({ className: e, children: t, tag: s = "p", ...n }, r) => {
    const a = m("card-text", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), mt = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("card-body", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), pt = N.forwardRef(
  ({ className: e, children: t, border: s, background: n, tag: r = "div", ...a }, c) => {
    const o = m("card-footer", s && `border-${s}`, n && `bg-${n}`, e);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: t });
  }
), gt = ({ className: e, children: t, overlay: s, position: n, fluid: r, ...a }) => {
  const c = m(n && `card-img-${n}`, r && "img-fluid", s && "card-img", e);
  return /* @__PURE__ */ l("img", { className: c, ...a, children: t });
}, bt = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("card-img-overlay", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), vt = ({ className: e, children: t, ...s }) => {
  const n = m("card-link", e);
  return /* @__PURE__ */ l("a", { className: n, ...s, children: t });
}, ht = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("card-group", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), yt = N.forwardRef(
  ({ className: e, tag: t = "ul", horizontal: s, horizontalSize: n, light: r, numbered: a, children: c, small: o, ...i }, u) => {
    const d = m(
      "list-group",
      s && (n ? `list-group-horizontal-${n}` : "list-group-horizontal"),
      r && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return /* @__PURE__ */ l(t, { className: d, ref: u, ...i, children: c });
  }
), Nt = N.forwardRef(
  ({ className: e, tag: t = "li", active: s, disabled: n, action: r, color: a, children: c, noBorders: o, ...i }, u) => {
    const d = t === "button", p = m(
      "list-group-item",
      s && "active",
      n && !d && "disabled",
      r && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return /* @__PURE__ */ l(t, { className: p, disabled: d && n, ref: u, ...i, children: c });
  }
), wt = ({
  className: e,
  children: t,
  disableMouseDown: s,
  tag: n = ue,
  tooltipTag: r = "div",
  options: a,
  placement: c = "top",
  title: o,
  wrapperProps: i,
  wrapperClass: u,
  onShow: d,
  onHide: p,
  onMouseEnter: f,
  onMouseLeave: g,
  ...b
}) => {
  const [h, v] = T(null), [M, $] = T(null), [B, x] = T(!1), [y, k] = T(!1), [L, F] = T(!1), [P, w] = T(!1), E = m("tooltip", L && "show", "fade", `bs-tooltip-${c}`, e), { styles: R, attributes: W } = ie(h, M, {
    placement: c,
    ...a
  });
  I(() => {
    let O, _;
    return B || y ? (w(!0), O = setTimeout(() => {
      F(!0);
    }, 4)) : (F(!1), _ = setTimeout(() => {
      w(!1);
    }, 300)), () => {
      clearTimeout(O), clearTimeout(_);
    };
  }, [B, y]);
  const D = (O) => {
    d == null || d(O), !O.defaultPrevented && x(!0), f == null || f(O);
  }, S = (O) => {
    p == null || p(O), !O.defaultPrevented && x(!1), g == null || g(O);
  }, j = V(
    (O) => {
      O.target === h ? k(!0) : k(!1);
    },
    [h]
  );
  return I(() => {
    if (!s)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [j, s]), /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(
      n,
      {
        className: u,
        onMouseEnter: D,
        onMouseLeave: S,
        ref: v,
        ...i,
        children: t
      }
    ),
    P && re.createPortal(
      /* @__PURE__ */ l(
        r,
        {
          ref: $,
          className: E,
          style: R.popper,
          ...W.popper,
          role: "tooltip",
          ...b,
          children: /* @__PURE__ */ l("div", { className: "tooltip-inner", children: o })
        }
      ),
      document.body
    )
  ] });
}, Tt = N.forwardRef(
  ({
    around: e,
    between: t,
    bottom: s,
    center: n,
    children: r,
    className: a,
    evenly: c,
    end: o,
    middle: i,
    start: u,
    tag: d = "div",
    top: p,
    ...f
  }, g) => {
    const b = m(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      s && "align-self-end",
      n && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      i && "align-self-center",
      u && "justify-content-start",
      p && "align-self-start",
      a
    );
    return /* @__PURE__ */ l(d, { className: b, ...f, ref: g, children: r });
  }
), Bt = ({
  animate: e,
  className: t,
  icon: s,
  fab: n,
  fas: r,
  fal: a,
  far: c,
  flag: o,
  spin: i,
  fixed: u,
  flip: d,
  list: p,
  size: f,
  pull: g,
  pulse: b,
  color: h,
  border: v,
  rotate: M,
  inverse: $,
  stack: B,
  iconType: x,
  children: y,
  ...k
}) => {
  let L;
  o ? L = "flag" : n ? L = "fab" : r ? L = "fas" : c ? L = "far" : a ? L = "fal" : L = "fa";
  const F = m(
    x ? `fa-${x}` : L,
    e && `fa-${e}`,
    o ? `flag-${o}` : s && `fa-${s}`,
    f && `fa-${f}`,
    h && `text-${h}`,
    v && "fa-border",
    M && `fa-rotate-${M}`,
    g && `fa-pull-${g}`,
    i && !e && "fa-spin",
    p && "fa-li",
    u && "fa-fw",
    b && !e && "fa-pulse",
    $ && "fa-inverse",
    d && `fa-flip-${d}`,
    B && `fa-stack-${B}`,
    t
  );
  return /* @__PURE__ */ l("i", { className: F, ...k, children: y });
}, Dt = N.forwardRef(
  ({
    className: e,
    children: t,
    tag: s = "p",
    variant: n,
    color: r,
    blockquote: a,
    note: c,
    noteColor: o,
    listUnStyled: i,
    listInLine: u,
    ...d
  }, p) => {
    const f = m(
      n && n,
      a && "blockquote",
      c && "note",
      r && `text-${r}`,
      o && `note-${o}`,
      i && "list-unstyled",
      u && "list-inline",
      e
    );
    return a && (s = "blockquote"), (i || u) && (s = "ul"), /* @__PURE__ */ l(s, { className: f, ref: p, ...d, children: t });
  }
), Mt = N.forwardRef(
  ({ className: e, color: t, uppercase: s, bold: n, children: r, ...a }, c) => {
    const o = m(
      "breadcrumb",
      n && "font-weight-bold",
      t && `text-${t}`,
      s && "text-uppercase",
      e
    );
    return /* @__PURE__ */ l("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ l("ol", { className: o, ref: c, ...a, children: r }) });
  }
), $t = N.forwardRef(
  ({ className: e, active: t, current: s = "page", children: n, ...r }, a) => {
    const c = m("breadcrumb-item", t && "active", e);
    return /* @__PURE__ */ l("li", { className: c, ref: a, "aria-current": t && s, ...r, children: n });
  }
), Ee = (e) => {
  if (e !== !1)
    return `navbar-expand-${e}`;
}, Rt = N.forwardRef(
  ({
    className: e,
    children: t,
    light: s,
    dark: n,
    scrolling: r,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: i,
    transparent: u,
    expand: d,
    tag: p = "nav",
    bgColor: f,
    ...g
  }, b) => {
    const [h, v] = T(!1), M = m(
      {
        "navbar-light": s,
        "navbar-dark": n,
        "scrolling-navbar": r || o,
        "top-nav-collapse": h,
        [`text-${i}`]: i && u ? h : i
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      d && Ee(d),
      f && `bg-${f}`,
      e
    ), $ = V(() => {
      o && window.pageYOffset > o ? v(!0) : v(!1);
    }, [o]);
    return I(() => ((r || o) && window.addEventListener("scroll", $), () => {
      window.removeEventListener("scroll", $);
    }), [$, r, o]), /* @__PURE__ */ l(p, { className: M, role: "navigation", ...g, ref: b, children: t });
  }
), Et = N.forwardRef(
  ({ children: e, className: t = "", disabled: s = !1, active: n = !1, tag: r = "a", ...a }, c) => {
    const o = m("nav-link", s ? "disabled" : n ? "active" : "", t);
    return /* @__PURE__ */ l(r, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
), Ct = N.forwardRef(
  ({ className: e, children: t, tag: s = "a", ...n }, r) => {
    const a = m("navbar-brand", e);
    return /* @__PURE__ */ l(s, { className: a, ref: r, ...n, children: t });
  }
), It = N.forwardRef(
  ({ children: e, className: t, active: s, text: n, tag: r = "li", ...a }, c) => {
    const o = m("nav-item", s && "active", n && "navbar-text", t);
    return /* @__PURE__ */ l(r, { ...a, className: o, ref: c, children: e });
  }
), xt = N.forwardRef(
  ({ children: e, className: t, right: s, fullWidth: n = !0, left: r, tag: a = "ul", ...c }, o) => {
    const i = m("navbar-nav", n && "w-100", s && "ms-auto", r && "me-auto", t);
    return /* @__PURE__ */ l(a, { className: i, ref: o, ...c, children: e });
  }
), Lt = N.forwardRef(
  ({ children: e, className: t, tag: s = "button", ...n }, r) => {
    const a = m("navbar-toggler", t);
    return /* @__PURE__ */ l(s, { ...n, className: a, ref: r, children: e });
  }
), kt = N.forwardRef(
  ({ children: e, bgColor: t, color: s, className: n, ...r }, a) => {
    const c = m(t && `bg-${t}`, s && `text-${s}`, n);
    return /* @__PURE__ */ l("footer", { className: c, ...r, ref: a, children: e });
  }
), Ot = N.forwardRef(
  ({ children: e, size: t, circle: s, center: n, end: r, start: a, className: c, ...o }, i) => {
    const u = m(
      "pagination",
      n && "justify-content-center",
      s && "pagination-circle",
      r && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return /* @__PURE__ */ l("ul", { className: u, ...o, ref: i, children: e });
  }
), At = N.forwardRef(
  ({ children: e, className: t, tag: s = "a", ...n }, r) => {
    const a = m("page-link", t);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: e });
  }
), Pt = N.forwardRef(
  ({ children: e, className: t, active: s, disabled: n, ...r }, a) => {
    const c = m("page-item", s && "active", n && "disabled", t);
    return /* @__PURE__ */ l("li", { className: c, ...r, ref: a, children: e });
  }
), St = ({
  className: e,
  classNameResponsive: t,
  responsive: s,
  align: n,
  borderColor: r,
  bordered: a,
  borderless: c,
  children: o,
  color: i,
  hover: u,
  small: d,
  striped: p,
  ...f
}) => {
  const g = m(
    "table",
    n && `align-${n}`,
    r && `border-${r}`,
    a && "table-bordered",
    c && "table-borderless",
    i && `table-${i}`,
    u && "table-hover",
    d && "table-sm",
    p && "table-striped",
    e
  ), b = ce(() => /* @__PURE__ */ l("table", { className: g, ...f, children: o }), [o, g, f]);
  if (s) {
    const h = m(
      typeof s == "string" ? `table-responsive-${s}` : "table-responsive",
      t
    );
    return /* @__PURE__ */ l("div", { className: h, children: b });
  } else
    return b;
}, Ft = ({ className: e, children: t, dark: s, light: n, ...r }) => {
  const a = m(s && "table-dark", n && "table-light", e);
  return /* @__PURE__ */ l("thead", { className: a, ...r, children: t });
}, Wt = ({ className: e, children: t, ...s }) => {
  const n = m(e);
  return /* @__PURE__ */ l("tbody", { className: n, ...s, children: t });
}, Ce = N.forwardRef(
  ({
    animated: e,
    children: t,
    className: s,
    style: n,
    tag: r = "div",
    valuenow: a,
    valuemax: c,
    striped: o,
    bgColor: i,
    valuemin: u,
    width: d,
    ...p
  }, f) => {
    const g = m(
      "progress-bar",
      i && `bg-${i}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      s
    ), b = { width: `${d}%`, ...n };
    return /* @__PURE__ */ l(
      r,
      {
        className: g,
        style: b,
        ref: f,
        role: "progressbar",
        ...p,
        "aria-valuenow": Number(d) ?? a,
        "aria-valuemin": Number(u),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
), Xt = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", height: n, style: r, ...a }, c) => {
    const o = m("progress", e), i = { height: `${n}px`, ...r };
    return /* @__PURE__ */ l(s, { className: o, ref: c, style: i, ...a, children: N.Children.map(t, (u) => {
      if (!N.isValidElement(u) || u.type !== Ce) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return u;
    }) });
  }
), Ie = (e) => {
  const [t, s] = T(!1), n = ce(() => new IntersectionObserver(([r]) => {
    s(r.isIntersecting);
  }), []);
  return I(() => {
    if (e.current)
      return n.observe(e.current), () => n.disconnect();
  }, [n, e]), t;
}, _t = N.forwardRef(
  ({
    className: e,
    size: t,
    contrast: s,
    value: n,
    defaultValue: r,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: i,
    wrapperTag: u = "div",
    label: d,
    onChange: p,
    children: f,
    labelRef: g,
    labelStyle: b,
    type: h,
    onBlur: v,
    readonly: M = !1,
    ...$
  }, B) => {
    var Y, U;
    const [x, y] = T(n || r), [k, L] = T(0), [F, P] = T(!1), w = K(null), E = Ie(w);
    we(B, () => w.current);
    const R = K(null), W = g || R, D = m("form-outline", s && "form-white", o), S = m(
      "form-control",
      F && "active",
      h === "date" && "active",
      t && `form-control-${t}`,
      e
    ), j = m("form-label", c);
    I(() => {
      if (!w.current)
        return;
      const { value: X } = w.current;
      X != "" ? P(!0) : P(!1);
    }, [(Y = w.current) == null ? void 0 : Y.value]), I(() => {
      n !== void 0 && (n != "" ? P(!0) : P(!1));
    }, [n]), I(() => {
      r !== void 0 && (r != "" ? P(!0) : P(!1));
    }, [r]);
    const O = V(() => {
      var X;
      (X = W.current) != null && X.clientWidth && L(W.current.clientWidth * 0.8 + 8);
    }, [W]);
    I(() => {
      O();
    }, [(U = W.current) == null ? void 0 : U.clientWidth, O, E]);
    const _ = (X) => {
      y(X.target.value), p == null || p(X);
    }, q = V(
      (X) => {
        w.current && (x !== void 0 && x != "" || n !== void 0 && n != "" || w.current.value != "" ? P(!0) : P(!1), v && v(X));
      },
      [x, n, v]
    );
    return /* @__PURE__ */ G(u, { className: D, style: i, children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: h,
          readOnly: M,
          className: S,
          onBlur: q,
          onChange: _,
          onFocus: O,
          value: n,
          defaultValue: r,
          id: a,
          ref: w,
          ...$
        }
      ),
      d && /* @__PURE__ */ l("label", { className: j, style: b, htmlFor: a, ref: W, children: d }),
      /* @__PURE__ */ G("div", { className: "form-notch", children: [
        /* @__PURE__ */ l("div", { className: "form-notch-leading" }),
        /* @__PURE__ */ l("div", { className: "form-notch-middle", style: { width: k } }),
        /* @__PURE__ */ l("div", { className: "form-notch-trailing" })
      ] }),
      f
    ] });
  }
), de = ({
  className: e,
  inputRef: t,
  labelClass: s,
  wrapperClass: n,
  labelStyle: r,
  wrapperTag: a = "div",
  wrapperStyle: c,
  label: o,
  inline: i,
  btn: u,
  id: d,
  btnColor: p,
  disableWrapper: f,
  toggleSwitch: g,
  ...b
}) => {
  let h = "form-check-input", v = "form-check-label";
  u && (h = "btn-check", p ? v = `btn btn-${p}` : v = "btn btn-primary");
  const M = m(
    o && !u && "form-check",
    i && !u && "form-check-inline",
    g && "form-switch",
    n
  ), $ = m(h, e), B = m(v, s), x = /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l("input", { className: $, id: d, ref: t, ...b }),
    o && /* @__PURE__ */ l("label", { className: B, style: r, htmlFor: d, children: o })
  ] });
  return /* @__PURE__ */ l(Q, { children: f ? x : /* @__PURE__ */ l(a, { style: c, className: M, children: x }) });
}, jt = ({ ...e }) => /* @__PURE__ */ l(de, { type: "checkbox", ...e }), Yt = ({ ...e }) => /* @__PURE__ */ l(de, { type: "radio", ...e }), xe = ({
  className: e,
  children: t,
  show: s = !1,
  id: n,
  navbar: r,
  tag: a = "div",
  collapseRef: c,
  style: o,
  onShow: i,
  onHide: u,
  ...d
}) => {
  const [p, f] = T(!1), [g, b] = T(void 0), [h, v] = T(!1), M = m(
    h ? "collapsing" : "collapse",
    !h && p && "show",
    r && "navbar-collapse",
    e
  ), $ = K(null), B = c ?? $, x = V(() => {
    p && b(void 0);
  }, [p]);
  return I(() => {
    var y;
    g === void 0 && p && b((y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight);
  }, [g, p, B]), I(() => {
    p !== s && (s ? i == null || i() : u == null || u(), f(s)), p && v(!0);
    const y = setTimeout(() => {
      v(!1);
    }, 350);
    return () => {
      clearTimeout(y);
    };
  }, [s, p, i, u]), I(() => {
    var y;
    b(p ? (y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight : 0);
  }, [p, B, t]), I(() => (window.addEventListener("resize", x), () => {
    window.removeEventListener("resize", x);
  }), [x]), /* @__PURE__ */ l(a, { style: { height: g, ...o }, id: n, className: M, ...d, ref: B, children: t });
}, ye = ve(null), Le = ({
  children: e,
  isOpen: t = !1,
  options: s,
  animation: n = !0,
  dropup: r,
  dropright: a,
  dropleft: c,
  onHide: o,
  onShow: i
}) => {
  const [u, d] = T(t), [p, f] = T(null), [g, b] = T(null), [h, v] = T(-1);
  return /* @__PURE__ */ l(
    ye.Provider,
    {
      value: {
        animation: n,
        activeIndex: h,
        isOpenState: u,
        setReferenceElement: f,
        setPopperElement: b,
        setActiveIndex: v,
        popperElement: g,
        setIsOpenState: d,
        referenceElement: p,
        onHide: o,
        onShow: i,
        dropup: r,
        options: s,
        dropright: a,
        dropleft: c
      },
      children: e
    }
  );
}, ke = (e) => e instanceof HTMLElement, Oe = (e) => e instanceof Node, ne = () => {
  const e = se(ye);
  if (!e)
    throw new Error("Missing context data");
  return e;
}, Ae = () => {
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: s, popperElement: n, referenceElement: r, onHide: a } = ne(), c = V(
    (o) => {
      a == null || a(o), !(!e || !Oe(o.target) || n && n.contains(o.target) || r && r.contains(o.target) || o.defaultPrevented) && (t(!1), setTimeout(() => s(-1), 300));
    },
    [e, t, s, n, r, a]
  );
  I(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
}, Pe = ({
  className: e,
  tag: t = "div",
  group: s,
  children: n,
  dropup: r,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  Ae();
  const i = m(
    s ? "btn-group" : "dropdown",
    r && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return /* @__PURE__ */ l(t, { className: i, ...o, children: n });
}, Vt = ({ animation: e, onHide: t, onShow: s, ...n }) => /* @__PURE__ */ l(Le, { animation: e, onHide: t, onShow: s, ...n, children: /* @__PURE__ */ l(Pe, { ...n }) }), Se = ({
  childTag: e,
  children: t,
  disabled: s,
  link: n,
  divider: r,
  header: a,
  href: c = "#"
}) => {
  const o = m("dropdown-item", s && "disabled");
  return n ? e ? /* @__PURE__ */ l(e, { className: o, children: t }) : /* @__PURE__ */ l("a", { href: c, className: o, children: t }) : r ? e ? /* @__PURE__ */ l(e, { className: "dropdown-divider", children: t }) : /* @__PURE__ */ l("hr", { className: "dropdown-divider" }) : a ? e ? /* @__PURE__ */ l(e, { className: "dropdown-header", children: t }) : /* @__PURE__ */ l("h6", { className: "dropdown-header", children: t }) : /* @__PURE__ */ l(Q, { children: t });
};
const qt = ({
  onClick: e,
  tag: t = "li",
  childTag: s,
  children: n,
  style: r,
  link: a,
  divider: c,
  header: o,
  disabled: i,
  href: u,
  preventCloseOnClick: d,
  ...p
}) => {
  const { setIsOpenState: f, onHide: g, setActiveIndex: b } = ne();
  return /* @__PURE__ */ l(t, { style: r, onClick: (v) => {
    g == null || g(v), e == null || e(v), !(i || d || v.defaultPrevented) && (setTimeout(() => b(-1), 300), f(!1));
  }, ...p, children: /* @__PURE__ */ l(
    Se,
    {
      link: a,
      divider: c,
      header: o,
      disabled: i,
      href: u,
      childTag: s,
      children: n
    }
  ) });
}, ge = (e, t, s) => s === "up" ? e <= 0 ? t[t.length - 1].props.divider === !0 || t[t.length - 1].props.disabled === !0 : t[e - 1].props.divider === !0 || t[e - 1].props.disabled === !0 : e === t.length - 1 ? t[0].props.divider === !0 || t[0].props.disabled === !0 : t[e + 1].props.divider === !0 || t[e + 1].props.disabled === !0, Fe = (e) => {
  const { activeIndex: t, isOpenState: s, setIsOpenState: n, setActiveIndex: r, onHide: a } = ne(), c = V(
    (o) => {
      const i = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !i.includes(o.key))) {
        if (ke(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const u = ge(t, e, "up");
          if (t === 1) {
            r(u ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            r(u ? e.length - 2 : e.length - 1);
            return;
          }
          r((d) => u ? d - 2 : d - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const u = ge(t, e, "down");
          if (t === e.length - 2) {
            r((d) => u ? 0 : d + 1);
            return;
          }
          if (t === e.length - 1) {
            r(u ? 1 : 0);
            return;
          }
          r((d) => u ? d + 2 : d + 1);
        }
        if (o.key === "Enter") {
          const u = document.querySelector('[data-active="true"]'), d = u == null ? void 0 : u.firstElementChild;
          if (d)
            return d.click();
          if (a == null || a(o), o.defaultPrevented)
            return;
          n(!1), setTimeout(() => r(-1), 300);
        }
        if (o.key === "Escape") {
          if (a == null || a(o), o.defaultPrevented)
            return;
          n(!1), setTimeout(() => r(-1), 300);
        }
      }
    },
    [e, n, r, t, a]
  );
  I(() => (s && document.addEventListener("keydown", c), () => {
    s && document.removeEventListener("keydown", c);
  }), [s, c]), I(() => {
    const o = document.querySelector('[data-active="true"]'), i = o == null ? void 0 : o.firstElementChild;
    return i == null || i.focus(), () => i == null ? void 0 : i.blur();
  }, [t]);
}, We = () => {
  const { isOpenState: e } = ne(), [t, s] = T(!1), [n, r] = T(!1), [a, c] = T(e);
  return I(() => {
    let o;
    return e || (r(!0), s(!1), o = setTimeout(() => {
      r(!1), c(!1);
    }, 300)), e && (s(!0), r(!1), c(!0), o = setTimeout(() => {
      s(!1);
    }, 300)), () => clearTimeout(o);
  }, [e]), { show: a, isFadeIn: t, isFadeOut: n };
};
const Gt = ({
  className: e,
  tag: t = "ul",
  children: s,
  style: n,
  dark: r,
  responsive: a = "",
  appendToBody: c = !1,
  alwaysOpen: o,
  ...i
}) => {
  const {
    activeIndex: u,
    setPopperElement: d,
    isOpenState: p,
    animation: f,
    referenceElement: g,
    popperElement: b,
    options: h,
    dropleft: v,
    dropup: M,
    dropright: $
  } = ne(), { show: B, isFadeIn: x, isFadeOut: y } = We();
  Fe(s);
  const k = () => {
    if ($)
      return "right-start";
    if (v)
      return "left-start";
    const w = b && getComputedStyle(b).getPropertyValue("--mdb-position").trim() === "end";
    return M ? w ? "top-end" : "top-start" : w ? "bottom-end" : "bottom-start";
  }, { styles: L } = ie(g, b, {
    placement: k(),
    modifiers: [De],
    ...h
  }), F = m(
    "dropdown-menu",
    r && "dropdown-menu-dark",
    p && "show",
    f && "animation",
    x && "fade-in",
    y && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!B && !o)
    return null;
  const P = /* @__PURE__ */ l(
    t,
    {
      className: F,
      style: { position: "absolute", zIndex: 1e3, ...L.popper, ...n },
      ref: d,
      ...i,
      children: Te.map(
        s,
        (w, E) => Be(w, {
          tabIndex: 1,
          "data-active": u === E && !0,
          className: m(u === E ? "active" : "", w.props.className)
        })
      )
    }
  );
  return /* @__PURE__ */ l(Q, { children: c ? he(P, document.body) : P });
}, Kt = ({
  className: e,
  tag: t = ue,
  children: s,
  onClick: n,
  split: r,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: i, setActiveIndex: u, onHide: d, onShow: p } = ne(), f = m("dropdown-toggle", r && "dropdown-toggle-split", e);
  return /* @__PURE__ */ l(
    t,
    {
      onClick: (b) => {
        n == null || n(b), i ? d == null || d(b) : p == null || p(b), !b.defaultPrevented && (c((h) => !h), setTimeout(() => u(-1), 300));
      },
      ref: o,
      className: f,
      "aria-expanded": !!i,
      ...a,
      children: s
    }
  );
}, Ut = ({
  className: e,
  btnClassName: t,
  btnChildren: s,
  children: n,
  tag: r = ue,
  onShow: a,
  onHide: c,
  popperTag: o = "div",
  isOpen: i,
  placement: u = "bottom",
  dismiss: d,
  options: p,
  poperStyle: f,
  onClick: g,
  ...b
}) => {
  const [h, v] = T(), [M, $] = T(), { styles: B, attributes: x } = ie(h, M, { placement: u, ...p }), [y, k] = T(i ?? !1), [L, F] = T(!1), [P, w] = T(!1), E = m(
    "popover fade",
    L && y && "show",
    `bs-popover-${u === "left" ? "start" : u === "right" ? "end" : u}`,
    e
  ), R = (D) => {
    y && !d ? c == null || c() : y || a == null || a(), d ? (w(!0), k(!0)) : k(!y), g && g(D);
  };
  I(() => {
    i || k(!1);
  }, [i]);
  const W = V(
    (D) => {
      P && M && M !== null && y && h && h !== null && (h.contains(D.target) || (k(!1), c == null || c()));
    },
    [P, y, M, h, c]
  );
  return I(() => {
    const D = setTimeout(() => {
      F(y);
    }, 150);
    return () => {
      clearTimeout(D);
    };
  }, [y]), I(() => (y && document.addEventListener("mousedown", W), () => {
    document.removeEventListener("mousedown", W);
  }), [W, y]), /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(r, { onClick: R, className: t, ...b, ref: v, children: s }),
    (L || y) && re.createPortal(
      /* @__PURE__ */ l(
        o,
        {
          className: E,
          ref: $,
          style: { ...B.popper, ...f },
          ...x.popper,
          children: n
        }
      ),
      document.body
    )
  ] });
}, Jt = ({
  className: e,
  children: t,
  tag: s = "div",
  ...n
}) => {
  const r = m("popover-body", e);
  return /* @__PURE__ */ l(s, { className: r, ...n, children: t });
}, Qt = ({
  className: e,
  children: t,
  tag: s = "h3",
  ...n
}) => {
  const r = m("popover-header", e);
  return /* @__PURE__ */ l(s, { className: r, ...n, children: t });
}, Zt = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: s = !0,
  children: n,
  className: r,
  closeOnEsc: a = !0,
  setShow: c,
  leaveHiddenModal: o = !0,
  modalRef: i,
  onHide: u,
  onHidePrevented: d,
  onShow: p,
  show: f,
  staticBackdrop: g,
  nonInvasive: b = !1,
  tag: h = "div",
  ...v
}) => {
  const [M, $] = T(f), [B, x] = T(f), [y, k] = T(f), [L, F] = T(!1), [P, w] = T(0), [E, R] = T([]), W = K(null), D = i || W, S = m(
    "modal",
    L && "modal-static",
    e,
    "fade",
    B && "show",
    M && b && "modal-non-invasive-show",
    r
  ), j = m("modal-backdrop", "fade", M && "show"), O = V(() => {
    x((X) => (X && (u == null || u()), !1)), setTimeout(() => {
      $(!1), c == null || c(!1);
    }, 150), setTimeout(() => {
      k(!1);
    }, 350);
  }, [u, c]), _ = V(
    (X) => {
      b || B && X.target === D.current && (g ? (F(!0), d == null || d(), setTimeout(() => {
        F(!1);
      }, 300)) : O());
    },
    [B, D, g, O, d, b]
  ), q = V(
    (X) => {
      B && X.key === "Tab" && (X.preventDefault(), w(P + 1)), a && B && X.key === "Escape" && (g ? (F(!0), d == null || d(), setTimeout(() => {
        F(!1);
      }, 300)) : O());
    },
    [B, a, P, g, O, d]
  );
  I(() => {
    var z;
    const X = (z = D.current) == null ? void 0 : z.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), Z = Array.from(X).filter((C) => C.tabIndex !== -1).sort((C, A) => C.tabIndex === A.tabIndex ? 0 : A.tabIndex === null ? -1 : C.tabIndex === null ? 1 : C.tabIndex - A.tabIndex);
    R(Z), w(Z.length - 1);
  }, [D]), I(() => {
    E && E.length > 0 && (P === E.length ? (E[0].focus(), w(0)) : E[P].focus());
  }, [P, E]), I(() => {
    const X = () => {
      const z = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - z);
    }, Z = window.innerWidth > document.documentElement.clientWidth && window.innerWidth >= 576;
    if (y && Z && !b) {
      const z = X();
      document.body.classList.add("modal-open"), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${z}px`;
    } else
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    return () => {
      document.body.classList.remove("modal-open"), document.body.style.overflow = "", document.body.style.paddingRight = "";
    };
  }, [y, b]), I(() => {
    f ? (p == null || p(), k(!0), setTimeout(() => {
      $(!0);
    }, 0), setTimeout(() => {
      x(!0), c == null || c(!0);
    }, 150)) : O();
  }, [f, O, c, p]), I(() => {
    const X = (Z) => {
      Z.target.closest(".modal-dialog") || window.addEventListener("mouseup", _, { once: !0 });
    };
    return window.addEventListener("mousedown", X), window.addEventListener("keydown", q), () => {
      window.removeEventListener("mousedown", X), window.removeEventListener("keydown", q);
    };
  }, [q, _]);
  const Y = /* @__PURE__ */ l(Q, { children: (o || f || y) && re.createPortal(
    /* @__PURE__ */ G(Q, { children: [
      /* @__PURE__ */ l(
        h,
        {
          className: S,
          ref: D,
          style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
          ...v,
          children: n
        }
      ),
      re.createPortal(
        s && y && !b && /* @__PURE__ */ l("div", { className: j }),
        document.body
      )
    ] }),
    document.body
  ) }), U = /* @__PURE__ */ l(Q, { children: (o || f || y) && /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(
      h,
      {
        className: S,
        ref: D,
        style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
        ...v,
        children: n
      }
    ),
    re.createPortal(
      s && y && !b && /* @__PURE__ */ l("div", { onClick: O, className: j }),
      document.body
    )
  ] }) });
  return /* @__PURE__ */ l(Q, { children: t ? Y : U });
}, zt = N.forwardRef(
  ({ className: e, centered: t, children: s, size: n, scrollable: r, tag: a = "div", ...c }, o) => {
    const i = m(
      "modal-dialog",
      r && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      n && `modal-${n}`,
      e
    );
    return /* @__PURE__ */ l(a, { className: i, ...c, ref: o, children: s });
  }
), Ht = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("modal-content", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), es = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("modal-header", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), ts = N.forwardRef(
  ({ className: e, children: t, tag: s = "h5", ...n }, r) => {
    const a = m("modal-title", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), ss = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("modal-body", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), ns = N.forwardRef(
  ({ className: e, children: t, tag: s = "div", ...n }, r) => {
    const a = m("modal-footer", e);
    return /* @__PURE__ */ l(s, { className: a, ...n, ref: r, children: t });
  }
), fe = N.createContext({
  activeElement: null,
  setTargets: null
}), rs = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: s,
  offset: n = 10,
  ...r
}) => {
  const a = m("sticky-top", t), [c, o] = T(null), [i, u] = T([]), d = e instanceof Window, p = V(() => {
    var M, $, B;
    if (!i.length)
      return;
    const f = d ? window.pageYOffset : (M = e == null ? void 0 : e.current) == null ? void 0 : M.scrollTop, g = Number(n), b = ($ = i[i.length - 1]) == null ? void 0 : $.current, h = (B = i[0]) == null ? void 0 : B.current;
    f + g < h.offsetTop && o(null), i.forEach((x, y) => {
      var P;
      const k = (P = i[y + 1]) == null ? void 0 : P.current, L = x.current;
      if (f > L.offsetTop - g && f < (k == null ? void 0 : k.offsetTop) - g) {
        o(L);
        return;
      }
    }), f > b.offsetTop - g && o(b);
  }, [n, i, d, e]);
  return I(() => {
    const f = d ? e : e == null ? void 0 : e.current;
    return p(), f == null || f.addEventListener("scroll", p), () => {
      f == null || f.removeEventListener("scroll", p);
    };
  }, [p, e, d]), /* @__PURE__ */ l("div", { className: a, ...r, children: /* @__PURE__ */ l("ul", { className: "nav flex-column nav-pills menu-sidebar", children: /* @__PURE__ */ l(fe.Provider, { value: { activeElement: c, setTargets: u }, children: s }) }) });
}, as = ({
  className: e,
  collapsible: t,
  targetRef: s,
  children: n,
  subsections: r,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var h;
  const { activeElement: i, setTargets: u } = se(fe), d = () => r == null ? void 0 : r.some((v) => v.current.id === (i == null ? void 0 : i.id)), p = (i == null ? void 0 : i.id) === ((h = s.current) == null ? void 0 : h.id), f = p || d();
  p && (c == null || c(i == null ? void 0 : i.id));
  const g = m("nav-link", t && "collapsible-scrollspy", f && "active", e), b = (v) => {
    const M = s == null ? void 0 : s.current;
    M == null || M.scrollIntoView({ behavior: "smooth" }), a == null || a(v);
  };
  return I(() => {
    u((v) => [...v, s]);
  }, [u, s]), /* @__PURE__ */ l("li", { className: "nav-item", style: { cursor: "pointer" }, children: /* @__PURE__ */ l("a", { className: g, onClick: b, ...o, children: n }) });
}, os = ({
  collapsible: e,
  className: t,
  children: s,
  style: n,
  ...r
}) => {
  const [a, c] = T("0px"), { activeElement: o } = se(fe), i = m("nav flex-column", t), u = K(null);
  I(() => {
    const p = () => e == null ? void 0 : e.some((g) => g.current.id === (o == null ? void 0 : o.id)), f = u.current;
    p() ? c(`${f == null ? void 0 : f.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const d = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...n
  };
  return /* @__PURE__ */ l("ul", { className: i, ref: u, style: e ? d : n, ...r, children: s });
}, cs = ({ ...e }) => /* @__PURE__ */ l(de, { type: "checkbox", toggleSwitch: !0, ...e }), Xe = ({ value: e, min: t = "0", max: s = "100", showThumb: n }) => {
  const r = Number(e), [a, c] = T(
    (r || 0 - Number(t)) * 100 / (Number(s) - Number(t))
  ), o = m("thumb", n && "thumb-active");
  return I(() => {
    c((Number(e) - Number(t)) * 100 / (Number(s) - Number(t)));
  }, [e, s, t]), /* @__PURE__ */ l("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: /* @__PURE__ */ l("span", { className: "thumb-value", children: e }) });
}, ls = ({
  className: e,
  defaultValue: t = 0,
  disableTooltip: s,
  labelId: n,
  max: r,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: i,
  onTouchEnd: u,
  onChange: d,
  labelClass: p,
  value: f,
  label: g,
  id: b,
  inputRef: h,
  ...v
}) => {
  const [M, $] = T(t), [B, x] = T(!1), y = m("form-range", e), k = m("form-label", p);
  return /* @__PURE__ */ G(Q, { children: [
    g && /* @__PURE__ */ l("label", { className: k, id: n, htmlFor: b, children: g }),
    /* @__PURE__ */ G("div", { className: "range", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "range",
          onMouseDown: (R) => {
            x(!0), c && c(R);
          },
          onMouseUp: (R) => {
            x(!1), o && o(R);
          },
          onTouchStart: (R) => {
            x(!0), i && i(R);
          },
          onTouchEnd: (R) => {
            x(!1), u && u(R);
          },
          onChange: (R) => {
            $(R.target.value), d && d(R);
          },
          className: y,
          value: f || M,
          id: b,
          min: a,
          max: r,
          ref: h,
          ...v
        }
      ),
      !s && /* @__PURE__ */ l(Xe, { value: f || M, showThumb: B, min: a, max: r })
    ] })
  ] });
}, is = ({ className: e, labelClass: t, labelStyle: s, inputRef: n, size: r, label: a, id: c, ...o }) => {
  const i = m("form-control", `form-control-${r}`, e), u = m("form-label", t);
  return /* @__PURE__ */ G(Q, { children: [
    a && /* @__PURE__ */ l("label", { className: u, style: s, htmlFor: c, children: a }),
    /* @__PURE__ */ l("input", { className: i, type: "file", id: c, ref: n, ...o })
  ] });
}, us = N.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: s,
    textBefore: n,
    textAfter: r,
    noWrap: a,
    tag: c = "div",
    textTag: o = "span",
    textClass: i,
    size: u,
    textProps: d,
    ...p
  }, f) => {
    const g = m("input-group", a && "flex-nowrap", u && `input-group-${u}`, e), b = m("input-group-text", s && "border-0", i), h = (v) => /* @__PURE__ */ l(Q, { children: v && Array.isArray(v) ? v.map((M, $) => /* @__PURE__ */ l(o, { className: b, ...d, children: M }, $)) : /* @__PURE__ */ l(o, { className: b, ...d, children: v }) });
    return /* @__PURE__ */ G(c, { className: g, ref: f, ...p, children: [
      n && h(n),
      t,
      r && h(r)
    ] });
  }
), ds = N.forwardRef(
  ({ className: e, children: t, isValidated: s = !1, onReset: n, onSubmit: r, noValidate: a = !0, ...c }, o) => {
    const [i, u] = T(s), d = m("needs-validation", i && "was-validated", e), p = (g) => {
      g.preventDefault(), u(!0), r && r(g);
    }, f = (g) => {
      g.preventDefault(), u(!1), n && n(g);
    };
    return I(() => {
      u(s);
    }, [s]), /* @__PURE__ */ l(
      "form",
      {
        className: d,
        onSubmit: p,
        onReset: f,
        ref: o,
        noValidate: a,
        ...c,
        children: t
      }
    );
  }
), fs = N.forwardRef(
  ({ className: e, fill: t, pills: s, justify: n, children: r, ...a }, c) => {
    const o = m(
      "nav",
      s ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      n && "nav-justified",
      e
    );
    return /* @__PURE__ */ l("ul", { className: o, ref: c, ...a, children: r });
  }
), ms = N.forwardRef(
  ({ className: e, children: t, style: s, tag: n = "li", ...r }, a) => {
    const c = m("nav-item", e);
    return /* @__PURE__ */ l(n, { className: c, style: { cursor: "pointer", ...s }, role: "presentation", ref: a, ...r, children: t });
  }
), ps = N.forwardRef(
  ({ className: e, color: t, active: s, onShow: n, onHide: r, children: a, ...c }, o) => {
    const i = m("nav-link", s && "active", t && `bg-${t}`, e);
    return I(() => {
      s ? n == null || n() : r == null || r();
    }, [s]), /* @__PURE__ */ l("a", { className: i, ref: o, ...c, children: a });
  }
), gs = N.forwardRef(
  ({ className: e, tag: t = "div", children: s, ...n }, r) => {
    const a = m("tab-content", e);
    return /* @__PURE__ */ l(t, { className: a, ref: r, ...n, children: s });
  }
), bs = N.forwardRef(
  ({ className: e, tag: t = "div", show: s, children: n, ...r }, a) => {
    const [c, o] = T(!1), i = m("tab-pane", "fade", c && "show", s && "active", e);
    return I(() => {
      let u;
      return s ? u = setTimeout(() => {
        o(!0);
      }, 100) : o(!1), () => {
        clearTimeout(u);
      };
    }, [s]), /* @__PURE__ */ l(t, { className: i, role: "tabpanel", ref: a, ...r, children: n });
  }
), me = ve({
  active: 0
}), _e = ({ imagesCount: e, to: t }) => {
  const { active: s } = se(me);
  return /* @__PURE__ */ l("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((n, r) => /* @__PURE__ */ l("li", { "data-mdb-target": r, className: m(s === r && "active"), onClick: () => t(r) }, r)) });
}, je = ({ move: e }) => /* @__PURE__ */ G(Q, { children: [
  /* @__PURE__ */ G("a", { role: "button", className: "carousel-control-prev", onClick: () => e("prev"), children: [
    /* @__PURE__ */ l("span", { className: "carousel-control-prev-icon" }),
    /* @__PURE__ */ l("span", { className: "visually-hidden", children: "Previous" })
  ] }),
  /* @__PURE__ */ G("a", { role: "button", className: "carousel-control-next", onClick: () => e("next"), children: [
    /* @__PURE__ */ l("span", { className: "carousel-control-next-icon" }),
    /* @__PURE__ */ l("span", { className: "visually-hidden", children: "Next" })
  ] })
] }), Ye = (e) => {
  const t = getComputedStyle(e), s = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && s.display !== "none" && t.visibility !== "hidden";
}, Ve = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item")), qe = (e) => e.offsetHeight, Ge = (e, t, s = !0) => {
  if (!s) {
    be(e);
    return;
  }
  const n = Ke(t);
  t.addEventListener("transitionend", () => be(e), { once: !0 }), Je(t, n);
}, be = (e) => {
  typeof e == "function" && e();
}, Ke = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: s } = window.getComputedStyle(e);
  const n = Number.parseFloat(t), r = Number.parseFloat(s);
  return !n && !r ? 0 : (t = t.split(",")[0], s = s.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(s)) * 1e3);
}, Ue = (e) => {
  e.dispatchEvent(new Event("transitionend"));
}, Je = (e, t) => {
  let s = !1;
  const r = t + 5;
  function a() {
    s = !0, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    s || Ue(e);
  }, r);
}, vs = ({
  fade: e = !1,
  className: t,
  carouselInnerClassName: s,
  dark: n,
  children: r,
  interval: a = 5e3,
  keyboard: c = !1,
  touch: o = !0,
  showControls: i,
  showIndicators: u,
  onSlide: d,
  ...p
}) => {
  const f = K([]), g = K(null), b = K(0), h = K(!1), [v, M] = T(0), [$, B] = T(0), [x, y] = T({ initialX: 0, initialY: 0 }), [k, L] = T(!1), F = K(null), P = m("carousel", "slide", e && "carousel-fade", n && "carousel-dark", t), w = m("carousel-inner", s), E = V(
    (C, A) => {
      if (A !== void 0)
        b.current = A, M(A);
      else {
        const J = v === $ - 1 ? 0 : v + 1, ee = v === 0 ? $ - 1 : v - 1;
        b.current = C === "next" ? J : ee, M(C === "next" ? J : ee);
      }
    },
    [v, $]
  ), R = V(() => {
    g.current && (clearInterval(g.current), g.current = null);
  }, []), W = V(
    (C, A, J) => {
      var pe;
      if (!f.current || f.current.length < 2)
        return;
      L(!0);
      const H = f.current[v], te = Boolean(g.current), ae = C === "next", oe = ae ? "carousel-item-start" : "carousel-item-end", le = ae ? "carousel-item-next" : "carousel-item-prev";
      if (A.classList.contains("active")) {
        h.current = !1;
        return;
      }
      E(C, J), !(!H || !A) && (h.current = !0, te && R(), (pe = F.current) != null && pe.classList.contains("slide") ? (A.classList.add(le), qe(A), H.classList.add(oe), A.classList.add(oe), Ge(() => {
        L(!1), A.classList.remove(oe, le), A.classList.add("active"), H.classList.remove("active", le, oe), h.current = !1;
      }, H, !0)) : (H.classList.remove("active"), A.classList.add("active"), h.current = !1));
    },
    [F, v, E, R]
  ), D = (C) => {
    h.current || (h.current = !0, setTimeout(() => {
      h.current = !1;
    }, C));
  }, S = V(
    (C) => {
      const A = C === "prev", H = (b.current + (A ? -1 : 1)) % $, te = f.current;
      return H === -1 ? te[$ - 1] : te[H];
    },
    [$]
  ), j = (C) => {
    const A = b.current, J = C > A ? "next" : "prev", ee = f.current;
    return { direction: J, nextElement: ee[C] };
  }, O = (C) => {
    if (h.current || (D(700), C > $ - 1 || C < 0))
      return;
    const { direction: A, nextElement: J } = j(C);
    W(A, J, C);
  }, _ = V(
    (C) => {
      if (h.current)
        return;
      D(600);
      const A = S(C);
      W(C, A);
    },
    [S, W]
  ), q = V(() => {
    const { visibilityState: C, hidden: A } = document;
    if (C)
      return A || !Ye(F.current) ? void 0 : _("next");
    _("next");
  }, [F, _]), Y = V(() => {
    var A, J;
    const C = (J = (A = r == null ? void 0 : r[v]) == null ? void 0 : A.props) == null ? void 0 : J.interval;
    g.current && (clearInterval(g.current), g.current = null), g.current = setInterval(q, C || a);
  }, [q, a, r, v]), U = (C) => {
    o && y({ initialX: C.touches[0].clientX, initialY: C.touches[0].clientY });
  }, X = (C) => {
    h.current = !0;
    const { initialX: A, initialY: J } = x;
    if (!A || !J)
      return;
    const ee = C.touches[0].clientX, H = C.touches[0].clientY, te = A - ee, ae = J - H;
    Math.abs(te) > Math.abs(ae) && (te > 0 ? _("prev") : _("next")), y({ initialX: 0, initialY: 0 });
  }, Z = () => {
    h.current = !1;
  }, z = V(
    (C) => {
      switch (C.key) {
        case "ArrowLeft":
          C.preventDefault(), _("prev");
          break;
        case "ArrowRight":
          C.preventDefault(), _("next");
          break;
      }
    },
    [_]
  );
  return I(() => {
    if (c)
      return window.addEventListener("keydown", z), () => {
        window.removeEventListener("keydown", z);
      };
  }, [z, c]), I(() => {
    const C = F.current, A = Ve(C);
    f.current = A, B(A.length);
  }, [F]), I(() => {
    k && (d == null || d());
  }, [k, d]), I(() => (Y(), () => {
    R();
  }), [Y, R]), /* @__PURE__ */ l(
    "div",
    {
      onTouchStart: U,
      onTouchMove: X,
      onTouchEnd: Z,
      onMouseEnter: R,
      onMouseLeave: Y,
      className: P,
      ref: F,
      ...p,
      children: /* @__PURE__ */ l("div", { className: w, children: /* @__PURE__ */ G(me.Provider, { value: { active: v }, children: [
        u && /* @__PURE__ */ l(_e, { to: O, imagesCount: $ }),
        r,
        i && /* @__PURE__ */ l(je, { move: _ })
      ] }) })
    }
  );
}, hs = ({
  className: e,
  captionClassName: t,
  children: s,
  src: n,
  alt: r,
  itemId: a,
  video: c,
  ...o
}) => {
  const { active: i } = se(me), u = K(!0), d = K(null), p = m("carousel-caption d-none d-md-block", t);
  return I(() => {
    if (u.current && i === a - 1) {
      const f = d.current;
      f == null || f.classList.add("active");
    }
    u.current = !1;
  }, [i, a]), /* @__PURE__ */ G("div", { className: "carousel-item", ref: d, children: [
    c ? /* @__PURE__ */ l("video", { className: e, autoPlay: !0, loop: !0, muted: !0, ...o, children: /* @__PURE__ */ l("source", { src: n, type: "video/mp4" }) }) : /* @__PURE__ */ l("img", { className: e, src: n, alt: r, ...o }),
    /* @__PURE__ */ l("div", { className: p, children: s })
  ] });
}, Ne = N.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: !1,
  initialActive: 0
}), ys = N.forwardRef(
  ({
    alwaysOpen: e,
    borderless: t,
    className: s,
    flush: n,
    active: r,
    initialActive: a = 0,
    tag: c = "div",
    children: o,
    onChange: i,
    ...u
  }, d) => {
    const p = ce(() => typeof r < "u", [r]), f = m("accordion", n && "accordion-flush", t && "accordion-borderless", s), [g, b] = T(a);
    return /* @__PURE__ */ l(c, { className: f, ref: d, ...u, children: /* @__PURE__ */ l(
      Ne.Provider,
      {
        value: { activeItem: p ? r : g, setActiveItem: b, alwaysOpen: e, initialActive: a, onChange: i },
        children: o
      }
    ) });
  }
), Ns = N.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: s,
    headerClassName: n,
    collapseId: r,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: i = "div",
    children: u,
    ...d
  }, p) => {
    const { activeItem: f, setActiveItem: g, alwaysOpen: b, onChange: h } = se(Ne), v = ce(() => Array.isArray(f) ? f.includes(r) : f === r, [f, r]), M = m("accordion-item", e), $ = m("accordion-header", n), B = m("accordion-body", t), x = m("accordion-button", !v && "collapsed", o), y = V(
      (k) => {
        let L = k;
        Array.isArray(f) ? f.includes(k) ? L = f.filter((P) => P !== k) : L = b ? [...f, k] : [k] : (L = f === k ? 0 : k, b && (L = [L])), h == null || h(L), g(L);
      },
      [h, f, g, b]
    );
    return /* @__PURE__ */ G(i, { className: M, ref: p, ...d, children: [
      /* @__PURE__ */ l("h2", { className: $, style: c, children: /* @__PURE__ */ l("button", { onClick: () => y(r), className: x, type: "button", children: a }) }),
      /* @__PURE__ */ l(xe, { id: r.toString(), show: v, children: /* @__PURE__ */ l("div", { className: B, style: s, children: u }) })
    ] });
  }
), ws = ({
  className: e,
  size: t,
  contrast: s,
  value: n,
  defaultValue: r,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: i,
  wrapperTag: u = "div",
  label: d,
  onChange: p,
  children: f,
  labelRef: g,
  labelStyle: b,
  inputRef: h,
  onBlur: v,
  readonly: M = !1,
  ...$
}) => {
  var q;
  const B = K(null), x = K(null), y = g || B, k = h || x, [L, F] = T(n || r), [P, w] = T(0), [E, R] = T(
    n !== void 0 && n.length > 0 || r !== void 0 && r.length > 0
  ), W = m("form-outline", s && "form-white", o), D = m("form-control", E && "active", t && `form-control-${t}`, e), S = m("form-label", c);
  I(() => {
    var Y;
    y.current && ((Y = y.current) == null ? void 0 : Y.clientWidth) !== 0 && w(y.current.clientWidth * 0.8 + 8);
  }, [y, (q = y.current) == null ? void 0 : q.clientWidth]);
  const j = () => {
    y.current && w(y.current.clientWidth * 0.8 + 8);
  };
  I(() => {
    n !== void 0 && (n.length > 0 ? R(!0) : R(!1));
  }, [n]), I(() => {
    r !== void 0 && (r.length > 0 ? R(!0) : R(!1));
  }, [r]);
  const O = (Y) => {
    F(Y.currentTarget.value), p && p(Y);
  }, _ = V(
    (Y) => {
      L !== void 0 && L.length > 0 || n !== void 0 && n.length > 0 ? R(!0) : R(!1), v && v(Y);
    },
    [L, n, v]
  );
  return /* @__PURE__ */ G(u, { className: W, style: { ...i }, children: [
    /* @__PURE__ */ l(
      "textarea",
      {
        readOnly: M,
        className: D,
        onBlur: _,
        onChange: O,
        onFocus: j,
        defaultValue: r,
        value: n,
        id: a,
        ref: k,
        ...$
      }
    ),
    d && /* @__PURE__ */ l("label", { className: S, style: b, htmlFor: a, ref: y, children: d }),
    /* @__PURE__ */ G("div", { className: "form-notch", children: [
      /* @__PURE__ */ l("div", { className: "form-notch-leading" }),
      /* @__PURE__ */ l("div", { className: "form-notch-middle", style: { width: P } }),
      /* @__PURE__ */ l("div", { className: "form-notch-trailing" })
    ] }),
    f
  ] });
}, Ts = ({
  children: e,
  invalid: t,
  feedback: s = "Looks good!",
  tooltip: n,
  tag: r = "div",
  ...a
}) => {
  const [c, o] = T(null), i = K(null), u = m(
    t ? `invalid-${n ? "tooltip" : "feedback"}` : `valid-${n ? "tooltip" : "feedback"}`
  );
  return I(() => {
    var p, f;
    const d = (f = (p = i.current) == null ? void 0 : p.querySelector("input, textarea")) == null ? void 0 : f.parentElement;
    d && o(d);
  }, []), /* @__PURE__ */ G(r, { ref: i, ...a, children: [
    c && he(/* @__PURE__ */ l("div", { className: u, children: s }), c),
    e
  ] });
};
export {
  ys as MDBAccordion,
  Ns as MDBAccordionItem,
  at as MDBBadge,
  Mt as MDBBreadcrumb,
  $t as MDBBreadcrumbItem,
  ue as MDBBtn,
  ot as MDBBtnGroup,
  lt as MDBCard,
  mt as MDBCardBody,
  pt as MDBCardFooter,
  ht as MDBCardGroup,
  it as MDBCardHeader,
  gt as MDBCardImage,
  vt as MDBCardLink,
  bt as MDBCardOverlay,
  ut as MDBCardSubTitle,
  ft as MDBCardText,
  dt as MDBCardTitle,
  vs as MDBCarousel,
  hs as MDBCarouselItem,
  jt as MDBCheckbox,
  rt as MDBCol,
  xe as MDBCollapse,
  nt as MDBContainer,
  Vt as MDBDropdown,
  qt as MDBDropdownItem,
  Gt as MDBDropdownMenu,
  Kt as MDBDropdownToggle,
  is as MDBFile,
  kt as MDBFooter,
  Bt as MDBIcon,
  _t as MDBInput,
  us as MDBInputGroup,
  yt as MDBListGroup,
  Nt as MDBListGroupItem,
  Zt as MDBModal,
  ss as MDBModalBody,
  Ht as MDBModalContent,
  zt as MDBModalDialog,
  ns as MDBModalFooter,
  es as MDBModalHeader,
  ts as MDBModalTitle,
  Rt as MDBNavbar,
  Ct as MDBNavbarBrand,
  It as MDBNavbarItem,
  Et as MDBNavbarLink,
  xt as MDBNavbarNav,
  Lt as MDBNavbarToggler,
  Ot as MDBPagination,
  Pt as MDBPaginationItem,
  At as MDBPaginationLink,
  Ut as MDBPopover,
  Jt as MDBPopoverBody,
  Qt as MDBPopoverHeader,
  Xt as MDBProgress,
  Ce as MDBProgressBar,
  Yt as MDBRadio,
  ls as MDBRange,
  Re as MDBRipple,
  Tt as MDBRow,
  rs as MDBScrollspy,
  as as MDBScrollspyLink,
  os as MDBScrollspySubList,
  ct as MDBSpinner,
  cs as MDBSwitch,
  St as MDBTable,
  Wt as MDBTableBody,
  Ft as MDBTableHead,
  fs as MDBTabs,
  gs as MDBTabsContent,
  ms as MDBTabsItem,
  ps as MDBTabsLink,
  bs as MDBTabsPane,
  ws as MDBTextArea,
  wt as MDBTooltip,
  Dt as MDBTypography,
  ds as MDBValidation,
  Ts as MDBValidationItem
};
