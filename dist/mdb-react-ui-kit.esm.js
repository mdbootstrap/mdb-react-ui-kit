(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode(".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { jsx as l, jsxs as G, Fragment as Q } from "react/jsx-runtime";
import N, { useState as w, useEffect as I, useRef as K, useCallback as q, useMemo as be, useImperativeHandle as we, createContext as ve, useContext as se, Children as Te, cloneElement as Be } from "react";
import p from "clsx";
import re, { createPortal as he } from "react-dom";
import { usePopper as le } from "react-popper";
import { flip as De } from "@popperjs/core";
const nt = N.forwardRef(
  ({ breakpoint: e, fluid: t, children: n, className: s, tag: r = "div", ...a }, c) => {
    const o = p(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, s);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: n });
  }
), rt = N.forwardRef(
  ({
    center: e,
    children: t,
    className: n,
    end: s,
    lg: r,
    md: a,
    offsetLg: c,
    offsetMd: o,
    offsetSm: i,
    order: d,
    size: u,
    sm: m,
    start: f,
    tag: g = "div",
    xl: b,
    xxl: h,
    xs: v,
    ...D
  }, $) => {
    const B = p(
      u && `col-${u}`,
      v && `col-xs-${v}`,
      m && `col-sm-${m}`,
      a && `col-md-${a}`,
      r && `col-lg-${r}`,
      b && `col-xl-${b}`,
      h && `col-xxl-${h}`,
      !u && !v && !m && !a && !r && !b && !h ? "col" : "",
      d && `order-${d}`,
      f && "align-self-start",
      e && "align-self-center",
      s && "align-self-end",
      i && `offset-sm-${i}`,
      o && `offset-md-${o}`,
      c && `offset-lg-${c}`,
      n
    );
    return /* @__PURE__ */ l(g, { className: B, ref: $, ...D, children: t });
  }
), at = N.forwardRef(
  ({ className: e, color: t = "primary", pill: n, light: s, dot: r, tag: a = "span", children: c, notification: o, ...i }, d) => {
    const u = p(
      "badge",
      s ? t && `badge-${t}` : t && `bg-${t}`,
      r && "badge-dot",
      n && "rounded-pill",
      o && "badge-notification",
      e
    );
    return /* @__PURE__ */ l(a, { className: u, ref: d, ...i, children: c });
  }
), Me = ({ ...e }) => {
  const [t, n] = w(!1), s = p("ripple-wave", t && "active");
  return I(() => {
    const r = setTimeout(() => {
      n(!0);
    }, 50);
    return () => {
      clearTimeout(r);
    };
  }, []), /* @__PURE__ */ l("div", { className: s, ...e });
}, $e = (...e) => {
  const t = N.useRef();
  return N.useEffect(() => {
    e.forEach((n) => {
      n && (typeof n == "function" ? n(t.current) : n.current = t.current);
    });
  }, [e]), t;
}, Re = N.forwardRef(
  ({
    className: e,
    rippleTag: t = "div",
    rippleCentered: n,
    rippleDuration: s = 500,
    rippleUnbound: r,
    rippleRadius: a = 0,
    rippleColor: c = "dark",
    children: o,
    onMouseDown: i,
    ...d
  }, u) => {
    const m = K(null), f = $e(u, m), g = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%", b = [0, 0, 0], h = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"], [v, D] = w([]), [$, B] = w(!1), x = p(
      "ripple",
      "ripple-surface",
      r && "ripple-surface-unbound",
      $ && `ripple-surface-${c}`,
      e
    ), y = () => {
      if (h.find((E) => E === (c == null ? void 0 : c.toLowerCase())))
        return B(!0);
      {
        const E = P(c).join(",");
        return `radial-gradient(circle, ${g.split("{{color}}").join(`${E}`)})`;
      }
    }, P = (T) => {
      const E = (M) => (M.length < 7 && (M = `#${M[1]}${M[1]}${M[2]}${M[2]}${M[3]}${M[3]}`), [parseInt(M.substr(1, 2), 16), parseInt(M.substr(3, 2), 16), parseInt(M.substr(5, 2), 16)]), R = (M) => {
        const S = document.body.appendChild(document.createElement("fictum")), j = "rgb(1, 2, 3)";
        return S.style.color = j, S.style.color !== j || (S.style.color = M, S.style.color === j || S.style.color === "") ? b : (M = getComputedStyle(S).color, document.body.removeChild(S), M);
      }, W = (M) => (M = M.match(/[.\d]+/g).map((S) => +Number(S)), M.length = 3, M);
      return T.toLowerCase() === "transparent" ? b : T[0] === "#" ? E(T) : (T.indexOf("rgb") === -1 && (T = R(T)), T.indexOf("rgb") === 0 ? W(T) : b);
    }, L = (T) => {
      const { offsetX: E, offsetY: R, height: W, width: M } = T, S = R <= W / 2, j = E <= M / 2, k = (X, Z) => Math.sqrt(X ** 2 + Z ** 2), _ = R === W / 2 && E === M / 2, V = {
        first: S === !0 && j === !1,
        second: S === !0 && j === !0,
        third: S === !1 && j === !0,
        fourth: S === !1 && j === !1
      }, Y = {
        topLeft: k(E, R),
        topRight: k(M - E, R),
        bottomLeft: k(E, W - R),
        bottomRight: k(M - E, W - R)
      };
      let U = 0;
      return _ || V.fourth ? U = Y.topLeft : V.third ? U = Y.topRight : V.second ? U = Y.bottomRight : V.first && (U = Y.bottomLeft), U * 2;
    }, F = (T) => {
      var U;
      const E = (U = f.current) == null ? void 0 : U.getBoundingClientRect(), R = T.clientX - E.left, W = T.clientY - E.top, M = E.height, S = E.width, j = {
        offsetX: n ? M / 2 : R,
        offsetY: n ? S / 2 : W,
        height: M,
        width: S
      }, k = {
        delay: s && s * 0.5,
        duration: s && s - s * 0.5
      }, _ = L(j), V = a || _ / 2, Y = {
        left: n ? `${S / 2 - V}px` : `${R - V}px`,
        top: n ? `${M / 2 - V}px` : `${W - V}px`,
        height: a ? `${a * 2}px` : `${_}px`,
        width: a ? `${a * 2}px` : `${_}px`,
        transitionDelay: `0s, ${k.delay}ms`,
        transitionDuration: `${s}ms, ${k.duration}ms`
      };
      return $ ? Y : { ...Y, backgroundImage: `${y()}` };
    }, A = (T) => {
      const E = F(T), R = v.concat(E);
      D(R), i && i(T);
    };
    return I(() => {
      const T = setTimeout(() => {
        v.length > 0 && D(v.splice(1, v.length - 1));
      }, s);
      return () => {
        clearTimeout(T);
      };
    }, [s, v]), /* @__PURE__ */ G(t, { className: x, onMouseDown: (T) => A(T), ref: f, ...d, children: [
      o,
      v.map((T, E) => /* @__PURE__ */ l(Me, { style: T }, E))
    ] });
  }
), ie = N.forwardRef(
  ({
    className: e,
    color: t = "primary",
    outline: n,
    children: s,
    rounded: r,
    disabled: a,
    floating: c,
    size: o,
    href: i,
    block: d,
    active: u,
    toggle: m,
    noRipple: f,
    tag: g = "button",
    role: b = "button",
    ...h
  }, v) => {
    const [D, $] = w(u || !1);
    let B;
    const x = t && ["light", "link"].includes(t) || n ? "dark" : "light";
    t !== "none" ? n ? t ? B = `btn-outline-${t}` : B = "btn-outline-primary" : t ? B = `btn-${t}` : B = "btn-primary" : B = "";
    const y = p(
      t !== "none" && "btn",
      B,
      r && "btn-rounded",
      c && "btn-floating",
      o && `btn-${o}`,
      `${(i || g !== "button") && a ? "disabled" : ""}`,
      d && "btn-block",
      D && "active",
      e
    );
    return i && g !== "a" && (g = "a"), ["hr", "img", "input"].includes(g) || f ? /* @__PURE__ */ l(
      g,
      {
        className: y,
        onClick: m ? () => {
          $(!D);
        } : void 0,
        disabled: a && g === "button" ? !0 : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: s
      }
    ) : /* @__PURE__ */ l(
      Re,
      {
        rippleTag: g,
        rippleColor: x,
        className: y,
        onClick: m ? () => {
          $(!D);
        } : void 0,
        disabled: a && g === "button" ? !0 : void 0,
        href: i,
        ref: v,
        role: b,
        ...h,
        children: s
      }
    );
  }
), ot = N.forwardRef(
  ({ className: e, children: t, shadow: n, toolbar: s, size: r, vertical: a, tag: c = "div", role: o = "group", ...i }, d) => {
    let u;
    s ? u = "btn-toolbar" : a ? u = "btn-group-vertical" : u = "btn-group";
    const m = p(u, n && `shadow-${n}`, r && `btn-group-${r}`, e);
    return /* @__PURE__ */ l(c, { className: m, ref: d, role: o, ...i, children: t });
  }
), ct = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", color: s, grow: r, size: a, ...c }, o) => {
    const i = p(
      `${r ? "spinner-grow" : "spinner-border"}`,
      s && `text-${s}`,
      `${a ? r ? "spinner-grow-" + a : "spinner-border-" + a : ""}`,
      e
    );
    return /* @__PURE__ */ l(n, { className: i, ref: o, ...c, children: t });
  }
), lt = N.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", shadow: a, alignment: c, ...o }, i) => {
    const d = p(
      "card",
      n && `border border-${n}`,
      s && `bg-${s}`,
      a && `shadow-${a}`,
      c && `text-${c}`,
      e
    );
    return /* @__PURE__ */ l(r, { className: d, ref: i, ...o, children: t });
  }
), it = N.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", ...a }, c) => {
    const o = p("card-header", n && `border-${n}`, s && `bg-${s}`, e);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: t });
  }
), ut = N.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...s }, r) => {
    const a = p("card-subtitle", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), dt = N.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...s }, r) => {
    const a = p("card-title", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), ft = N.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...s }, r) => {
    const a = p("card-text", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), mt = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("card-body", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), pt = N.forwardRef(
  ({ className: e, children: t, border: n, background: s, tag: r = "div", ...a }, c) => {
    const o = p("card-footer", n && `border-${n}`, s && `bg-${s}`, e);
    return /* @__PURE__ */ l(r, { className: o, ...a, ref: c, children: t });
  }
), gt = ({ className: e, children: t, overlay: n, position: s, fluid: r, ...a }) => {
  const c = p(s && `card-img-${s}`, r && "img-fluid", n && "card-img", e);
  return /* @__PURE__ */ l("img", { className: c, ...a, children: t });
}, bt = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("card-img-overlay", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), vt = ({ className: e, children: t, ...n }) => {
  const s = p("card-link", e);
  return /* @__PURE__ */ l("a", { className: s, ...n, children: t });
}, ht = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("card-group", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), yt = N.forwardRef(
  ({ className: e, tag: t = "ul", horizontal: n, horizontalSize: s, light: r, numbered: a, children: c, small: o, ...i }, d) => {
    const u = p(
      "list-group",
      n && (s ? `list-group-horizontal-${s}` : "list-group-horizontal"),
      r && "list-group-light",
      a && "list-group-numbered",
      o && "list-group-small",
      e
    );
    return /* @__PURE__ */ l(t, { className: u, ref: d, ...i, children: c });
  }
), Nt = N.forwardRef(
  ({ className: e, tag: t = "li", active: n, disabled: s, action: r, color: a, children: c, noBorders: o, ...i }, d) => {
    const u = t === "button", m = p(
      "list-group-item",
      n && "active",
      s && !u && "disabled",
      r && "list-group-item-action",
      a && `list-group-item-${a}`,
      o && "border-0",
      e
    );
    return /* @__PURE__ */ l(t, { className: m, disabled: u && s, ref: d, ...i, children: c });
  }
), wt = ({
  className: e,
  children: t,
  disableMouseDown: n,
  tag: s = ie,
  tooltipTag: r = "div",
  options: a,
  placement: c = "top",
  title: o,
  wrapperProps: i,
  wrapperClass: d,
  onShow: u,
  onHide: m,
  onMouseEnter: f,
  onMouseLeave: g,
  ...b
}) => {
  const [h, v] = w(null), [D, $] = w(null), [B, x] = w(!1), [y, P] = w(!1), [L, F] = w(!1), [A, T] = w(!1), E = p("tooltip", L && "show", "fade", `bs-tooltip-${c}`, e), { styles: R, attributes: W } = le(h, D, {
    placement: c,
    ...a
  });
  I(() => {
    let k, _;
    return B || y ? (T(!0), k = setTimeout(() => {
      F(!0);
    }, 4)) : (F(!1), _ = setTimeout(() => {
      T(!1);
    }, 300)), () => {
      clearTimeout(k), clearTimeout(_);
    };
  }, [B, y]);
  const M = (k) => {
    u == null || u(k), !k.defaultPrevented && x(!0), f == null || f(k);
  }, S = (k) => {
    m == null || m(k), !k.defaultPrevented && x(!1), g == null || g(k);
  }, j = q(
    (k) => {
      k.target === h ? P(!0) : P(!1);
    },
    [h]
  );
  return I(() => {
    if (!n)
      return document.addEventListener("mousedown", j), () => {
        document.removeEventListener("mousedown", j);
      };
  }, [j, n]), /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(
      s,
      {
        className: d,
        onMouseEnter: M,
        onMouseLeave: S,
        ref: v,
        ...i,
        children: t
      }
    ),
    A && re.createPortal(
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
    bottom: n,
    center: s,
    children: r,
    className: a,
    evenly: c,
    end: o,
    middle: i,
    start: d,
    tag: u = "div",
    top: m,
    ...f
  }, g) => {
    const b = p(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      n && "align-self-end",
      s && "justify-content-center",
      c && "justifty-content-evenly",
      o && "justify-content-end",
      i && "align-self-center",
      d && "justify-content-start",
      m && "align-self-start",
      a
    );
    return /* @__PURE__ */ l(u, { className: b, ...f, ref: g, children: r });
  }
), Bt = ({
  animate: e,
  className: t,
  icon: n,
  fab: s,
  fas: r,
  fal: a,
  far: c,
  flag: o,
  spin: i,
  fixed: d,
  flip: u,
  list: m,
  size: f,
  pull: g,
  pulse: b,
  color: h,
  border: v,
  rotate: D,
  inverse: $,
  stack: B,
  iconType: x,
  children: y,
  ...P
}) => {
  let L;
  o ? L = "flag" : s ? L = "fab" : r ? L = "fas" : c ? L = "far" : a ? L = "fal" : L = "fa";
  const F = p(
    x ? `fa-${x}` : L,
    e && `fa-${e}`,
    o ? `flag-${o}` : n && `fa-${n}`,
    f && `fa-${f}`,
    h && `text-${h}`,
    v && "fa-border",
    D && `fa-rotate-${D}`,
    g && `fa-pull-${g}`,
    i && !e && "fa-spin",
    m && "fa-li",
    d && "fa-fw",
    b && !e && "fa-pulse",
    $ && "fa-inverse",
    u && `fa-flip-${u}`,
    B && `fa-stack-${B}`,
    t
  );
  return /* @__PURE__ */ l("i", { className: F, ...P, children: y });
}, Dt = N.forwardRef(
  ({
    className: e,
    children: t,
    tag: n = "p",
    variant: s,
    color: r,
    blockquote: a,
    note: c,
    noteColor: o,
    listUnStyled: i,
    listInLine: d,
    ...u
  }, m) => {
    const f = p(
      s && s,
      a && "blockquote",
      c && "note",
      r && `text-${r}`,
      o && `note-${o}`,
      i && "list-unstyled",
      d && "list-inline",
      e
    );
    return a && (n = "blockquote"), (i || d) && (n = "ul"), /* @__PURE__ */ l(n, { className: f, ref: m, ...u, children: t });
  }
), Mt = N.forwardRef(
  ({ className: e, color: t, uppercase: n, bold: s, children: r, ...a }, c) => {
    const o = p(
      "breadcrumb",
      s && "font-weight-bold",
      t && `text-${t}`,
      n && "text-uppercase",
      e
    );
    return /* @__PURE__ */ l("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ l("ol", { className: o, ref: c, ...a, children: r }) });
  }
), $t = N.forwardRef(
  ({ className: e, active: t, current: n = "page", children: s, ...r }, a) => {
    const c = p("breadcrumb-item", t && "active", e);
    return /* @__PURE__ */ l("li", { className: c, ref: a, "aria-current": t && n, ...r, children: s });
  }
), Ee = (e) => {
  if (e !== !1)
    return `navbar-expand-${e}`;
}, Rt = N.forwardRef(
  ({
    className: e,
    children: t,
    light: n,
    dark: s,
    scrolling: r,
    fixed: a,
    sticky: c,
    scrollingNavbarOffset: o,
    color: i,
    transparent: d,
    expand: u,
    tag: m = "nav",
    bgColor: f,
    ...g
  }, b) => {
    const [h, v] = w(!1), D = p(
      {
        "navbar-light": n,
        "navbar-dark": s,
        "scrolling-navbar": r || o,
        "top-nav-collapse": h,
        [`text-${i}`]: i && d ? h : i
      },
      a && `fixed-${a}`,
      c && "sticky-top",
      "navbar",
      u && Ee(u),
      f && `bg-${f}`,
      e
    ), $ = q(() => {
      o && window.pageYOffset > o ? v(!0) : v(!1);
    }, [o]);
    return I(() => ((r || o) && window.addEventListener("scroll", $), () => {
      window.removeEventListener("scroll", $);
    }), [$, r, o]), /* @__PURE__ */ l(m, { className: D, role: "navigation", ...g, ref: b, children: t });
  }
), Et = N.forwardRef(
  ({ children: e, className: t = "", disabled: n = !1, active: s = !1, tag: r = "a", ...a }, c) => {
    const o = p("nav-link", n ? "disabled" : s ? "active" : "", t);
    return /* @__PURE__ */ l(r, { "data-test": "nav-link", className: o, style: { cursor: "pointer" }, ref: c, ...a, children: e });
  }
), Ct = N.forwardRef(
  ({ className: e, children: t, tag: n = "a", ...s }, r) => {
    const a = p("navbar-brand", e);
    return /* @__PURE__ */ l(n, { className: a, ref: r, ...s, children: t });
  }
), It = N.forwardRef(
  ({ children: e, className: t, active: n, text: s, tag: r = "li", ...a }, c) => {
    const o = p("nav-item", n && "active", s && "navbar-text", t);
    return /* @__PURE__ */ l(r, { ...a, className: o, ref: c, children: e });
  }
), xt = N.forwardRef(
  ({ children: e, className: t, right: n, fullWidth: s = !0, left: r, tag: a = "ul", ...c }, o) => {
    const i = p("navbar-nav", s && "w-100", n && "ms-auto", r && "me-auto", t);
    return /* @__PURE__ */ l(a, { className: i, ref: o, ...c, children: e });
  }
), Lt = N.forwardRef(
  ({ children: e, className: t, tag: n = "button", ...s }, r) => {
    const a = p("navbar-toggler", t);
    return /* @__PURE__ */ l(n, { ...s, className: a, ref: r, children: e });
  }
), kt = N.forwardRef(
  ({ children: e, bgColor: t, color: n, className: s, ...r }, a) => {
    const c = p(t && `bg-${t}`, n && `text-${n}`, s);
    return /* @__PURE__ */ l("footer", { className: c, ...r, ref: a, children: e });
  }
), Ot = N.forwardRef(
  ({ children: e, size: t, circle: n, center: s, end: r, start: a, className: c, ...o }, i) => {
    const d = p(
      "pagination",
      s && "justify-content-center",
      n && "pagination-circle",
      r && "justify-content-end",
      t && `pagination-${t}`,
      a && "justify-content-start",
      c
    );
    return /* @__PURE__ */ l("ul", { className: d, ...o, ref: i, children: e });
  }
), At = N.forwardRef(
  ({ children: e, className: t, tag: n = "a", ...s }, r) => {
    const a = p("page-link", t);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: e });
  }
), Pt = N.forwardRef(
  ({ children: e, className: t, active: n, disabled: s, ...r }, a) => {
    const c = p("page-item", n && "active", s && "disabled", t);
    return /* @__PURE__ */ l("li", { className: c, ...r, ref: a, children: e });
  }
), St = ({
  className: e,
  classNameResponsive: t,
  responsive: n,
  align: s,
  borderColor: r,
  bordered: a,
  borderless: c,
  children: o,
  color: i,
  hover: d,
  small: u,
  striped: m,
  ...f
}) => {
  const g = p(
    "table",
    s && `align-${s}`,
    r && `border-${r}`,
    a && "table-bordered",
    c && "table-borderless",
    i && `table-${i}`,
    d && "table-hover",
    u && "table-sm",
    m && "table-striped",
    e
  ), b = be(() => /* @__PURE__ */ l("table", { className: g, ...f, children: o }), [o, g, f]);
  if (n) {
    const h = p(
      typeof n == "string" ? `table-responsive-${n}` : "table-responsive",
      t
    );
    return /* @__PURE__ */ l("div", { className: h, children: b });
  } else
    return b;
}, Ft = ({ className: e, children: t, dark: n, light: s, ...r }) => {
  const a = p(n && "table-dark", s && "table-light", e);
  return /* @__PURE__ */ l("thead", { className: a, ...r, children: t });
}, Wt = ({ className: e, children: t, ...n }) => {
  const s = p(e);
  return /* @__PURE__ */ l("tbody", { className: s, ...n, children: t });
}, Ce = N.forwardRef(
  ({
    animated: e,
    children: t,
    className: n,
    style: s,
    tag: r = "div",
    valuenow: a,
    valuemax: c,
    striped: o,
    bgColor: i,
    valuemin: d,
    width: u,
    ...m
  }, f) => {
    const g = p(
      "progress-bar",
      i && `bg-${i}`,
      o && "progress-bar-striped",
      e && "progress-bar-animated",
      n
    ), b = { width: `${u}%`, ...s };
    return /* @__PURE__ */ l(
      r,
      {
        className: g,
        style: b,
        ref: f,
        role: "progressbar",
        ...m,
        "aria-valuenow": Number(u) ?? a,
        "aria-valuemin": Number(d),
        "aria-valuemax": Number(c),
        children: t
      }
    );
  }
), Xt = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", height: s, style: r, ...a }, c) => {
    const o = p("progress", e), i = { height: `${s}px`, ...r };
    return /* @__PURE__ */ l(n, { className: o, ref: c, style: i, ...a, children: N.Children.map(t, (d) => {
      if (!N.isValidElement(d) || d.type !== Ce) {
        console.error("Progress component only allows ProgressBar as child");
        return;
      } else
        return d;
    }) });
  }
), Ie = (e) => {
  const [t, n] = w(!1), s = be(() => new IntersectionObserver(([r]) => {
    n(r.isIntersecting);
  }), []);
  return I(() => {
    if (e.current)
      return s.observe(e.current), () => s.disconnect();
  }, [s, e]), t;
}, _t = N.forwardRef(
  ({
    className: e,
    size: t,
    contrast: n,
    value: s,
    defaultValue: r,
    id: a,
    labelClass: c,
    wrapperClass: o,
    wrapperStyle: i,
    wrapperTag: d = "div",
    label: u,
    onChange: m,
    children: f,
    labelRef: g,
    labelStyle: b,
    type: h,
    onBlur: v,
    readonly: D = !1,
    ...$
  }, B) => {
    var Y, U;
    const [x, y] = w(s || r), [P, L] = w(0), [F, A] = w(!1), T = K(null), E = Ie(T);
    we(B, () => T.current);
    const R = K(null), W = g || R, M = p("form-outline", n && "form-white", o), S = p(
      "form-control",
      F && "active",
      h === "date" && "active",
      t && `form-control-${t}`,
      e
    ), j = p("form-label", c);
    I(() => {
      if (!T.current)
        return;
      const { value: X } = T.current;
      X != "" ? A(!0) : A(!1);
    }, [(Y = T.current) == null ? void 0 : Y.value]), I(() => {
      s !== void 0 && (s != "" ? A(!0) : A(!1));
    }, [s]), I(() => {
      r !== void 0 && (r != "" ? A(!0) : A(!1));
    }, [r]);
    const k = q(() => {
      var X;
      (X = W.current) != null && X.clientWidth && L(W.current.clientWidth * 0.8 + 8);
    }, [W]);
    I(() => {
      k();
    }, [(U = W.current) == null ? void 0 : U.clientWidth, k, E]);
    const _ = (X) => {
      y(X.target.value), m == null || m(X);
    }, V = q(
      (X) => {
        T.current && (x !== void 0 && x != "" || s !== void 0 && s != "" || T.current.value != "" ? A(!0) : A(!1), v && v(X));
      },
      [x, s, v]
    );
    return /* @__PURE__ */ G(d, { className: M, style: i, children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: h,
          readOnly: D,
          className: S,
          onBlur: V,
          onChange: _,
          onFocus: k,
          value: s,
          defaultValue: r,
          id: a,
          ref: T,
          ...$
        }
      ),
      u && /* @__PURE__ */ l("label", { className: j, style: b, htmlFor: a, ref: W, children: u }),
      /* @__PURE__ */ G("div", { className: "form-notch", children: [
        /* @__PURE__ */ l("div", { className: "form-notch-leading" }),
        /* @__PURE__ */ l("div", { className: "form-notch-middle", style: { width: P } }),
        /* @__PURE__ */ l("div", { className: "form-notch-trailing" })
      ] }),
      f
    ] });
  }
), ue = ({
  className: e,
  inputRef: t,
  labelClass: n,
  wrapperClass: s,
  labelStyle: r,
  wrapperTag: a = "div",
  wrapperStyle: c,
  label: o,
  inline: i,
  btn: d,
  id: u,
  btnColor: m,
  disableWrapper: f,
  toggleSwitch: g,
  ...b
}) => {
  let h = "form-check-input", v = "form-check-label";
  d && (h = "btn-check", m ? v = `btn btn-${m}` : v = "btn btn-primary");
  const D = p(
    o && !d && "form-check",
    i && !d && "form-check-inline",
    g && "form-switch",
    s
  ), $ = p(h, e), B = p(v, n), x = /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l("input", { className: $, id: u, ref: t, ...b }),
    o && /* @__PURE__ */ l("label", { className: B, style: r, htmlFor: u, children: o })
  ] });
  return /* @__PURE__ */ l(Q, { children: f ? x : /* @__PURE__ */ l(a, { style: c, className: D, children: x }) });
}, jt = ({ ...e }) => /* @__PURE__ */ l(ue, { type: "checkbox", ...e }), Yt = ({ ...e }) => /* @__PURE__ */ l(ue, { type: "radio", ...e }), xe = ({
  className: e,
  children: t,
  show: n = !1,
  id: s,
  navbar: r,
  tag: a = "div",
  collapseRef: c,
  style: o,
  onShow: i,
  onHide: d,
  ...u
}) => {
  const [m, f] = w(!1), [g, b] = w(void 0), [h, v] = w(!1), D = p(
    h ? "collapsing" : "collapse",
    !h && m && "show",
    r && "navbar-collapse",
    e
  ), $ = K(null), B = c ?? $, x = q(() => {
    m && b(void 0);
  }, [m]);
  return I(() => {
    var y;
    g === void 0 && m && b((y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight);
  }, [g, m, B]), I(() => {
    m !== n && (n ? i == null || i() : d == null || d(), f(n)), m && v(!0);
    const y = setTimeout(() => {
      v(!1);
    }, 350);
    return () => {
      clearTimeout(y);
    };
  }, [n, m, i, d]), I(() => {
    var y;
    b(m ? (y = B == null ? void 0 : B.current) == null ? void 0 : y.scrollHeight : 0);
  }, [m, B, t]), I(() => (window.addEventListener("resize", x), () => {
    window.removeEventListener("resize", x);
  }), [x]), /* @__PURE__ */ l(a, { style: { height: g, ...o }, id: s, className: D, ...u, ref: B, children: t });
}, ye = ve(null), Le = ({
  children: e,
  isOpen: t = !1,
  options: n,
  animation: s = !0,
  dropup: r,
  dropright: a,
  dropleft: c,
  onHide: o,
  onShow: i
}) => {
  const [d, u] = w(t), [m, f] = w(null), [g, b] = w(null), [h, v] = w(-1);
  return /* @__PURE__ */ l(
    ye.Provider,
    {
      value: {
        animation: s,
        activeIndex: h,
        isOpenState: d,
        setReferenceElement: f,
        setPopperElement: b,
        setActiveIndex: v,
        popperElement: g,
        setIsOpenState: u,
        referenceElement: m,
        onHide: o,
        onShow: i,
        dropup: r,
        options: n,
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
  const { isOpenState: e, setIsOpenState: t, setActiveIndex: n, popperElement: s, referenceElement: r, onHide: a } = ne(), c = q(
    (o) => {
      a == null || a(o), !(!e || !Oe(o.target) || s && s.contains(o.target) || r && r.contains(o.target) || o.defaultPrevented) && (t(!1), setTimeout(() => n(-1), 300));
    },
    [e, t, n, s, r, a]
  );
  I(() => (document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c)), [c]);
}, Pe = ({
  className: e,
  tag: t = "div",
  group: n,
  children: s,
  dropup: r,
  dropright: a,
  dropleft: c,
  ...o
}) => {
  Ae();
  const i = p(
    n ? "btn-group" : "dropdown",
    r && "dropup",
    a && "dropend",
    c && "dropstart",
    e
  );
  return /* @__PURE__ */ l(t, { className: i, ...o, children: s });
}, Vt = ({ animation: e, onHide: t, onShow: n, ...s }) => /* @__PURE__ */ l(Le, { animation: e, onHide: t, onShow: n, ...s, children: /* @__PURE__ */ l(Pe, { ...s }) }), Se = ({
  childTag: e,
  children: t,
  disabled: n,
  link: s,
  divider: r,
  header: a,
  href: c = "#"
}) => {
  const o = p("dropdown-item", n && "disabled");
  return s ? e ? /* @__PURE__ */ l(e, { className: o, children: t }) : /* @__PURE__ */ l("a", { href: c, className: o, children: t }) : r ? e ? /* @__PURE__ */ l(e, { className: "dropdown-divider", children: t }) : /* @__PURE__ */ l("hr", { className: "dropdown-divider" }) : a ? e ? /* @__PURE__ */ l(e, { className: "dropdown-header", children: t }) : /* @__PURE__ */ l("h6", { className: "dropdown-header", children: t }) : /* @__PURE__ */ l(Q, { children: t });
};
const qt = ({
  onClick: e,
  tag: t = "li",
  childTag: n,
  children: s,
  style: r,
  link: a,
  divider: c,
  header: o,
  disabled: i,
  href: d,
  preventCloseOnClick: u,
  ...m
}) => {
  const { setIsOpenState: f, onHide: g, setActiveIndex: b } = ne();
  return /* @__PURE__ */ l(t, { style: r, onClick: (v) => {
    g == null || g(v), e == null || e(v), !(i || u || v.defaultPrevented) && (setTimeout(() => b(-1), 300), f(!1));
  }, ...m, children: /* @__PURE__ */ l(
    Se,
    {
      link: a,
      divider: c,
      header: o,
      disabled: i,
      href: d,
      childTag: n,
      children: s
    }
  ) });
}, pe = (e, t, n) => n === "up" ? e <= 0 ? t[t.length - 1].props.divider === !0 || t[t.length - 1].props.disabled === !0 : t[e - 1].props.divider === !0 || t[e - 1].props.disabled === !0 : e === t.length - 1 ? t[0].props.divider === !0 || t[0].props.disabled === !0 : t[e + 1].props.divider === !0 || t[e + 1].props.disabled === !0, Fe = (e) => {
  const { activeIndex: t, isOpenState: n, setIsOpenState: s, setActiveIndex: r, onHide: a } = ne(), c = q(
    (o) => {
      const i = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!(!Array.isArray(e) || !i.includes(o.key))) {
        if (ke(document.activeElement) && document.activeElement.blur(), o.key === "ArrowUp") {
          o.preventDefault();
          const d = pe(t, e, "up");
          if (t === 1) {
            r(d ? e.length - 1 : 0);
            return;
          }
          if (t <= 0) {
            r(d ? e.length - 2 : e.length - 1);
            return;
          }
          r((u) => d ? u - 2 : u - 1);
        }
        if (o.key === "ArrowDown" || o.key === "Tab") {
          o.preventDefault();
          const d = pe(t, e, "down");
          if (t === e.length - 2) {
            r((u) => d ? 0 : u + 1);
            return;
          }
          if (t === e.length - 1) {
            r(d ? 1 : 0);
            return;
          }
          r((u) => d ? u + 2 : u + 1);
        }
        if (o.key === "Enter") {
          const d = document.querySelector('[data-active="true"]'), u = d == null ? void 0 : d.firstElementChild;
          if (u)
            return u.click();
          if (a == null || a(o), o.defaultPrevented)
            return;
          s(!1), setTimeout(() => r(-1), 300);
        }
        if (o.key === "Escape") {
          if (a == null || a(o), o.defaultPrevented)
            return;
          s(!1), setTimeout(() => r(-1), 300);
        }
      }
    },
    [e, s, r, t, a]
  );
  I(() => (n && document.addEventListener("keydown", c), () => {
    n && document.removeEventListener("keydown", c);
  }), [n, c]), I(() => {
    const o = document.querySelector('[data-active="true"]'), i = o == null ? void 0 : o.firstElementChild;
    return i == null || i.focus(), () => i == null ? void 0 : i.blur();
  }, [t]);
}, We = () => {
  const { isOpenState: e } = ne(), [t, n] = w(!1), [s, r] = w(!1), [a, c] = w(e);
  return I(() => {
    let o;
    return e || (r(!0), n(!1), o = setTimeout(() => {
      r(!1), c(!1);
    }, 300)), e && (n(!0), r(!1), c(!0), o = setTimeout(() => {
      n(!1);
    }, 300)), () => clearTimeout(o);
  }, [e]), { show: a, isFadeIn: t, isFadeOut: s };
};
const Gt = ({
  className: e,
  tag: t = "ul",
  children: n,
  style: s,
  dark: r,
  responsive: a = "",
  appendToBody: c = !1,
  alwaysOpen: o,
  ...i
}) => {
  const {
    activeIndex: d,
    setPopperElement: u,
    isOpenState: m,
    animation: f,
    referenceElement: g,
    popperElement: b,
    options: h,
    dropleft: v,
    dropup: D,
    dropright: $
  } = ne(), { show: B, isFadeIn: x, isFadeOut: y } = We();
  Fe(n);
  const P = () => {
    if ($)
      return "right-start";
    if (v)
      return "left-start";
    const T = b && getComputedStyle(b).getPropertyValue("--mdb-position").trim() === "end";
    return D ? T ? "top-end" : "top-start" : T ? "bottom-end" : "bottom-start";
  }, { styles: L } = le(g, b, {
    placement: P(),
    modifiers: [De],
    ...h
  }), F = p(
    "dropdown-menu",
    r && "dropdown-menu-dark",
    m && "show",
    f && "animation",
    x && "fade-in",
    y && "fade-out",
    a && `dropdown-menu-${a}`,
    e
  );
  if (!B && !o)
    return null;
  const A = /* @__PURE__ */ l(
    t,
    {
      className: F,
      style: { position: "absolute", zIndex: 1e3, ...L.popper, ...s },
      ref: u,
      ...i,
      children: Te.map(
        n,
        (T, E) => Be(T, {
          tabIndex: 1,
          "data-active": d === E && !0,
          className: p(d === E ? "active" : "", T.props.className)
        })
      )
    }
  );
  return /* @__PURE__ */ l(Q, { children: c ? he(A, document.body) : A });
}, Kt = ({
  className: e,
  tag: t = ie,
  children: n,
  onClick: s,
  split: r,
  ...a
}) => {
  const { setIsOpenState: c, setReferenceElement: o, isOpenState: i, setActiveIndex: d, onHide: u, onShow: m } = ne(), f = p("dropdown-toggle", r && "dropdown-toggle-split", e);
  return /* @__PURE__ */ l(
    t,
    {
      onClick: (b) => {
        s == null || s(b), i ? u == null || u(b) : m == null || m(b), !b.defaultPrevented && (c((h) => !h), setTimeout(() => d(-1), 300));
      },
      ref: o,
      className: f,
      "aria-expanded": !!i,
      ...a,
      children: n
    }
  );
}, Ut = ({
  className: e,
  btnClassName: t,
  btnChildren: n,
  children: s,
  tag: r = ie,
  onShow: a,
  onHide: c,
  popperTag: o = "div",
  isOpen: i,
  placement: d = "bottom",
  dismiss: u,
  options: m,
  poperStyle: f,
  onClick: g,
  ...b
}) => {
  const [h, v] = w(), [D, $] = w(), { styles: B, attributes: x } = le(h, D, { placement: d, ...m }), [y, P] = w(i ?? !1), [L, F] = w(!1), [A, T] = w(!1), E = p(
    "popover fade",
    L && y && "show",
    `bs-popover-${d === "left" ? "start" : d === "right" ? "end" : d}`,
    e
  ), R = (M) => {
    y && !u ? c == null || c() : y || a == null || a(), u ? (T(!0), P(!0)) : P(!y), g && g(M);
  };
  I(() => {
    i || P(!1);
  }, [i]);
  const W = q(
    (M) => {
      A && D && D !== null && y && h && h !== null && (h.contains(M.target) || (P(!1), c == null || c()));
    },
    [A, y, D, h, c]
  );
  return I(() => {
    const M = setTimeout(() => {
      F(y);
    }, 150);
    return () => {
      clearTimeout(M);
    };
  }, [y]), I(() => (y && document.addEventListener("mousedown", W), () => {
    document.removeEventListener("mousedown", W);
  }), [W, y]), /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(r, { onClick: R, className: t, ...b, ref: v, children: n }),
    (L || y) && re.createPortal(
      /* @__PURE__ */ l(
        o,
        {
          className: E,
          ref: $,
          style: { ...B.popper, ...f },
          ...x.popper,
          children: s
        }
      ),
      document.body
    )
  ] });
}, Jt = ({
  className: e,
  children: t,
  tag: n = "div",
  ...s
}) => {
  const r = p("popover-body", e);
  return /* @__PURE__ */ l(n, { className: r, ...s, children: t });
}, Qt = ({
  className: e,
  children: t,
  tag: n = "h3",
  ...s
}) => {
  const r = p("popover-header", e);
  return /* @__PURE__ */ l(n, { className: r, ...s, children: t });
}, Zt = ({
  animationDirection: e,
  appendToBody: t,
  backdrop: n = !0,
  children: s,
  className: r,
  closeOnEsc: a = !0,
  setShow: c,
  leaveHiddenModal: o = !0,
  modalRef: i,
  onHide: d,
  onHidePrevented: u,
  onShow: m,
  show: f,
  staticBackdrop: g,
  nonInvasive: b = !1,
  tag: h = "div",
  ...v
}) => {
  const [D, $] = w(f), [B, x] = w(f), [y, P] = w(f), [L, F] = w(!1), [A, T] = w(0), [E, R] = w([]), W = K(null), M = i || W, S = p(
    "modal",
    L && "modal-static",
    e,
    "fade",
    B && "show",
    D && b && "modal-non-invasive-show",
    r
  ), j = p("modal-backdrop", "fade", D && "show"), k = q(() => {
    x((X) => (X && (d == null || d()), !1)), setTimeout(() => {
      $(!1), c == null || c(!1);
    }, 150), setTimeout(() => {
      P(!1);
    }, 350);
  }, [d, c]), _ = q(
    (X) => {
      b || B && X.target === M.current && (g ? (F(!0), u == null || u(), setTimeout(() => {
        F(!1);
      }, 300)) : k());
    },
    [B, M, g, k, u, b]
  ), V = q(
    (X) => {
      B && X.key === "Tab" && (X.preventDefault(), T(A + 1)), a && B && X.key === "Escape" && (g ? (F(!0), u == null || u(), setTimeout(() => {
        F(!1);
      }, 300)) : k());
    },
    [B, a, A, g, k, u]
  );
  I(() => {
    var z;
    const X = (z = M.current) == null ? void 0 : z.querySelectorAll(
      "button, a, input, select, textarea, [tabindex]"
    ), Z = Array.from(X).filter((C) => C.tabIndex !== -1).sort((C, O) => C.tabIndex === O.tabIndex ? 0 : O.tabIndex === null ? -1 : C.tabIndex === null ? 1 : C.tabIndex - O.tabIndex);
    R(Z), T(Z.length - 1);
  }, [M]), I(() => {
    E && E.length > 0 && (A === E.length ? (E[0].focus(), T(0)) : E[A].focus());
  }, [A, E]), I(() => {
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
    f ? (m == null || m(), P(!0), setTimeout(() => {
      $(!0);
    }, 0), setTimeout(() => {
      x(!0), c == null || c(!0);
    }, 150)) : k();
  }, [f, k, c, m]), I(() => {
    const X = (Z) => {
      Z.target.closest(".modal-dialog") || window.addEventListener("mouseup", _, { once: !0 });
    };
    return window.addEventListener("mousedown", X), window.addEventListener("keydown", V), () => {
      window.removeEventListener("mousedown", X), window.removeEventListener("keydown", V);
    };
  }, [V, _]);
  const Y = /* @__PURE__ */ l(Q, { children: (o || f || y) && re.createPortal(
    /* @__PURE__ */ G(Q, { children: [
      /* @__PURE__ */ l(
        h,
        {
          className: S,
          ref: M,
          style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
          ...v,
          children: s
        }
      ),
      re.createPortal(
        n && y && !b && /* @__PURE__ */ l("div", { className: j }),
        document.body
      )
    ] }),
    document.body
  ) }), U = /* @__PURE__ */ l(Q, { children: (o || f || y) && /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ l(
      h,
      {
        className: S,
        ref: M,
        style: { display: y || f ? "block" : "none", pointerEvents: b ? "none" : "initial" },
        ...v,
        children: s
      }
    ),
    re.createPortal(
      n && y && !b && /* @__PURE__ */ l("div", { onClick: k, className: j }),
      document.body
    )
  ] }) });
  return /* @__PURE__ */ l(Q, { children: t ? Y : U });
}, zt = N.forwardRef(
  ({ className: e, centered: t, children: n, size: s, scrollable: r, tag: a = "div", ...c }, o) => {
    const i = p(
      "modal-dialog",
      r && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      s && `modal-${s}`,
      e
    );
    return /* @__PURE__ */ l(a, { className: i, ...c, ref: o, children: n });
  }
), Ht = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("modal-content", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), es = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("modal-header", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), ts = N.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...s }, r) => {
    const a = p("modal-title", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), ss = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("modal-body", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), ns = N.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...s }, r) => {
    const a = p("modal-footer", e);
    return /* @__PURE__ */ l(n, { className: a, ...s, ref: r, children: t });
  }
), de = N.createContext({
  activeElement: null,
  setTargets: null
}), rs = ({
  container: e = typeof window !== void 0 ? window : null,
  className: t,
  children: n,
  offset: s = 10,
  ...r
}) => {
  const a = p("sticky-top", t), [c, o] = w(null), [i, d] = w([]), u = e instanceof Window, m = q(() => {
    var D, $, B;
    if (!i.length)
      return;
    const f = u ? window.pageYOffset : (D = e == null ? void 0 : e.current) == null ? void 0 : D.scrollTop, g = Number(s), b = ($ = i[i.length - 1]) == null ? void 0 : $.current, h = (B = i[0]) == null ? void 0 : B.current;
    f + g < h.offsetTop && o(null), i.forEach((x, y) => {
      var A;
      const P = (A = i[y + 1]) == null ? void 0 : A.current, L = x.current;
      if (f > L.offsetTop - g && f < (P == null ? void 0 : P.offsetTop) - g) {
        o(L);
        return;
      }
    }), f > b.offsetTop - g && o(b);
  }, [s, i, u, e]);
  return I(() => {
    const f = u ? e : e == null ? void 0 : e.current;
    return m(), f == null || f.addEventListener("scroll", m), () => {
      f == null || f.removeEventListener("scroll", m);
    };
  }, [m, e, u]), /* @__PURE__ */ l("div", { className: a, ...r, children: /* @__PURE__ */ l("ul", { className: "nav flex-column nav-pills menu-sidebar", children: /* @__PURE__ */ l(de.Provider, { value: { activeElement: c, setTargets: d }, children: n }) }) });
}, as = ({
  className: e,
  collapsible: t,
  targetRef: n,
  children: s,
  subsections: r,
  onClick: a,
  onActivate: c,
  ...o
}) => {
  var h;
  const { activeElement: i, setTargets: d } = se(de), u = () => r == null ? void 0 : r.some((v) => v.current.id === (i == null ? void 0 : i.id)), m = (i == null ? void 0 : i.id) === ((h = n.current) == null ? void 0 : h.id), f = m || u();
  m && (c == null || c(i == null ? void 0 : i.id));
  const g = p("nav-link", t && "collapsible-scrollspy", f && "active", e), b = (v) => {
    const D = n == null ? void 0 : n.current;
    D == null || D.scrollIntoView({ behavior: "smooth" }), a == null || a(v);
  };
  return I(() => {
    d((v) => [...v, n]);
  }, [d, n]), /* @__PURE__ */ l("li", { className: "nav-item", style: { cursor: "pointer" }, children: /* @__PURE__ */ l("a", { className: g, onClick: b, ...o, children: s }) });
}, os = ({
  collapsible: e,
  className: t,
  children: n,
  style: s,
  ...r
}) => {
  const [a, c] = w("0px"), { activeElement: o } = se(de), i = p("nav flex-column", t), d = K(null);
  I(() => {
    const m = () => e == null ? void 0 : e.some((g) => g.current.id === (o == null ? void 0 : o.id)), f = d.current;
    m() ? c(`${f == null ? void 0 : f.scrollHeight}px`) : c("0px");
  }, [o, e]);
  const u = {
    overflow: "hidden",
    height: a,
    transition: "height .5s ease",
    flexWrap: "nowrap",
    ...s
  };
  return /* @__PURE__ */ l("ul", { className: i, ref: d, style: e ? u : s, ...r, children: n });
}, cs = ({ ...e }) => /* @__PURE__ */ l(ue, { type: "checkbox", toggleSwitch: !0, ...e }), Xe = ({ value: e, min: t = "0", max: n = "100", showThumb: s }) => {
  const r = Number(e), [a, c] = w(
    (r || 0 - Number(t)) * 100 / (Number(n) - Number(t))
  ), o = p("thumb", s && "thumb-active");
  return I(() => {
    c((Number(e) - Number(t)) * 100 / (Number(n) - Number(t)));
  }, [e, n, t]), /* @__PURE__ */ l("span", { className: o, style: { left: `calc(${a}% + (${8 - a * 0.15}px))` }, children: /* @__PURE__ */ l("span", { className: "thumb-value", children: e }) });
}, ls = ({
  className: e,
  defaultValue: t = 0,
  disableTooltip: n,
  labelId: s,
  max: r,
  min: a,
  onMouseDown: c,
  onMouseUp: o,
  onTouchStart: i,
  onTouchEnd: d,
  onChange: u,
  labelClass: m,
  value: f,
  label: g,
  id: b,
  inputRef: h,
  ...v
}) => {
  const [D, $] = w(t), [B, x] = w(!1), y = p("form-range", e), P = p("form-label", m);
  return /* @__PURE__ */ G(Q, { children: [
    g && /* @__PURE__ */ l("label", { className: P, id: s, htmlFor: b, children: g }),
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
            x(!1), d && d(R);
          },
          onChange: (R) => {
            $(R.target.value), u && u(R);
          },
          className: y,
          value: f || D,
          id: b,
          min: a,
          max: r,
          ref: h,
          ...v
        }
      ),
      !n && /* @__PURE__ */ l(Xe, { value: f || D, showThumb: B, min: a, max: r })
    ] })
  ] });
}, is = ({ className: e, labelClass: t, labelStyle: n, inputRef: s, size: r, label: a, id: c, ...o }) => {
  const i = p("form-control", `form-control-${r}`, e), d = p("form-label", t);
  return /* @__PURE__ */ G(Q, { children: [
    a && /* @__PURE__ */ l("label", { className: d, style: n, htmlFor: c, children: a }),
    /* @__PURE__ */ l("input", { className: i, type: "file", id: c, ref: s, ...o })
  ] });
}, us = N.forwardRef(
  ({
    className: e,
    children: t,
    noBorder: n,
    textBefore: s,
    textAfter: r,
    noWrap: a,
    tag: c = "div",
    textTag: o = "span",
    textClass: i,
    size: d,
    textProps: u,
    ...m
  }, f) => {
    const g = p("input-group", a && "flex-nowrap", d && `input-group-${d}`, e), b = p("input-group-text", n && "border-0", i), h = (v) => /* @__PURE__ */ l(Q, { children: v && Array.isArray(v) ? v.map((D, $) => /* @__PURE__ */ l(o, { className: b, ...u, children: D }, $)) : /* @__PURE__ */ l(o, { className: b, ...u, children: v }) });
    return /* @__PURE__ */ G(c, { className: g, ref: f, ...m, children: [
      s && h(s),
      t,
      r && h(r)
    ] });
  }
), ds = N.forwardRef(
  ({ className: e, children: t, isValidated: n, onReset: s, onSubmit: r, noValidate: a = !0, ...c }, o) => {
    const [i, d] = w(n), u = p("needs-validation", i && "was-validated", e);
    return /* @__PURE__ */ l(
      "form",
      {
        className: u,
        onSubmit: (g) => {
          g.preventDefault(), d(!0), r && r(g);
        },
        onReset: (g) => {
          g.preventDefault(), d(!1), s && s(g);
        },
        ref: o,
        noValidate: a,
        ...c,
        children: t
      }
    );
  }
), fs = N.forwardRef(
  ({ className: e, fill: t, pills: n, justify: s, children: r, ...a }, c) => {
    const o = p(
      "nav",
      n ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      s && "nav-justified",
      e
    );
    return /* @__PURE__ */ l("ul", { className: o, ref: c, ...a, children: r });
  }
), ms = N.forwardRef(
  ({ className: e, children: t, style: n, tag: s = "li", ...r }, a) => {
    const c = p("nav-item", e);
    return /* @__PURE__ */ l(s, { className: c, style: { cursor: "pointer", ...n }, role: "presentation", ref: a, ...r, children: t });
  }
), ps = N.forwardRef(
  ({ className: e, color: t, active: n, onShow: s, onHide: r, children: a, ...c }, o) => {
    const i = p("nav-link", n && "active", t && `bg-${t}`, e);
    return I(() => {
      n ? s == null || s() : r == null || r();
    }, [n]), /* @__PURE__ */ l("a", { className: i, ref: o, ...c, children: a });
  }
), gs = N.forwardRef(
  ({ className: e, tag: t = "div", children: n, ...s }, r) => {
    const a = p("tab-content", e);
    return /* @__PURE__ */ l(t, { className: a, ref: r, ...s, children: n });
  }
), bs = N.forwardRef(
  ({ className: e, tag: t = "div", show: n, children: s, ...r }, a) => {
    const [c, o] = w(!1), i = p("tab-pane", "fade", c && "show", n && "active", e);
    return I(() => {
      let d;
      return n ? d = setTimeout(() => {
        o(!0);
      }, 100) : o(!1), () => {
        clearTimeout(d);
      };
    }, [n]), /* @__PURE__ */ l(t, { className: i, role: "tabpanel", ref: a, ...r, children: s });
  }
), fe = ve({
  active: 0
}), _e = ({ imagesCount: e, to: t }) => {
  const { active: n } = se(fe);
  return /* @__PURE__ */ l("ol", { className: "carousel-indicators", children: Array.from(Array(e)).map((s, r) => /* @__PURE__ */ l("li", { "data-mdb-target": r, className: p(n === r && "active"), onClick: () => t(r) }, r)) });
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
  const t = getComputedStyle(e), n = getComputedStyle(e == null ? void 0 : e.parentNode);
  return t.display !== "none" && n.display !== "none" && t.visibility !== "hidden";
}, Ve = (e) => Array.from(e == null ? void 0 : e.querySelectorAll(".carousel-item")), qe = (e) => e.offsetHeight, Ge = (e, t, n = !0) => {
  if (!n) {
    ge(e);
    return;
  }
  const s = Ke(t);
  t.addEventListener("transitionend", () => ge(e), { once: !0 }), Je(t, s);
}, ge = (e) => {
  typeof e == "function" && e();
}, Ke = (e) => {
  if (!e)
    return 0;
  let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
  const s = Number.parseFloat(t), r = Number.parseFloat(n);
  return !s && !r ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * 1e3);
}, Ue = (e) => {
  e.dispatchEvent(new Event("transitionend"));
}, Je = (e, t) => {
  let n = !1;
  const r = t + 5;
  function a() {
    n = !0, e.removeEventListener("transitionend", a);
  }
  e.addEventListener("transitionend", a), setTimeout(() => {
    n || Ue(e);
  }, r);
}, vs = ({
  fade: e = !1,
  className: t,
  carouselInnerClassName: n,
  dark: s,
  children: r,
  interval: a = 5e3,
  keyboard: c = !1,
  touch: o = !0,
  showControls: i,
  showIndicators: d,
  onSlide: u,
  ...m
}) => {
  const f = K([]), g = K(null), b = K(0), h = K(!1), [v, D] = w(0), [$, B] = w(0), [x, y] = w({ initialX: 0, initialY: 0 }), [P, L] = w(!1), F = K(null), A = p("carousel", "slide", e && "carousel-fade", s && "carousel-dark", t), T = p("carousel-inner", n), E = q(
    (C, O) => {
      if (O !== void 0)
        b.current = O, D(O);
      else {
        const J = v === $ - 1 ? 0 : v + 1, ee = v === 0 ? $ - 1 : v - 1;
        b.current = C === "next" ? J : ee, D(C === "next" ? J : ee);
      }
    },
    [v, $]
  ), R = q(() => {
    g.current && (clearInterval(g.current), g.current = null);
  }, []), W = q(
    (C, O, J) => {
      var me;
      if (!f.current || f.current.length < 2)
        return;
      L(!0);
      const H = f.current[v], te = Boolean(g.current), ae = C === "next", oe = ae ? "carousel-item-start" : "carousel-item-end", ce = ae ? "carousel-item-next" : "carousel-item-prev";
      if (O.classList.contains("active")) {
        h.current = !1;
        return;
      }
      E(C, J), !(!H || !O) && (h.current = !0, te && R(), (me = F.current) != null && me.classList.contains("slide") ? (O.classList.add(ce), qe(O), H.classList.add(oe), O.classList.add(oe), Ge(() => {
        L(!1), O.classList.remove(oe, ce), O.classList.add("active"), H.classList.remove("active", ce, oe), h.current = !1;
      }, H, !0)) : (H.classList.remove("active"), O.classList.add("active"), h.current = !1));
    },
    [F, v, E, R]
  ), M = (C) => {
    h.current || (h.current = !0, setTimeout(() => {
      h.current = !1;
    }, C));
  }, S = q(
    (C) => {
      const O = C === "prev", H = (b.current + (O ? -1 : 1)) % $, te = f.current;
      return H === -1 ? te[$ - 1] : te[H];
    },
    [$]
  ), j = (C) => {
    const O = b.current, J = C > O ? "next" : "prev", ee = f.current;
    return { direction: J, nextElement: ee[C] };
  }, k = (C) => {
    if (h.current || (M(700), C > $ - 1 || C < 0))
      return;
    const { direction: O, nextElement: J } = j(C);
    W(O, J, C);
  }, _ = q(
    (C) => {
      if (h.current)
        return;
      M(600);
      const O = S(C);
      W(C, O);
    },
    [S, W]
  ), V = q(() => {
    const { visibilityState: C, hidden: O } = document;
    if (C)
      return O || !Ye(F.current) ? void 0 : _("next");
    _("next");
  }, [F, _]), Y = q(() => {
    var O, J;
    const C = (J = (O = r == null ? void 0 : r[v]) == null ? void 0 : O.props) == null ? void 0 : J.interval;
    g.current && (clearInterval(g.current), g.current = null), g.current = setInterval(V, C || a);
  }, [V, a, r, v]), U = (C) => {
    o && y({ initialX: C.touches[0].clientX, initialY: C.touches[0].clientY });
  }, X = (C) => {
    h.current = !0;
    const { initialX: O, initialY: J } = x;
    if (!O || !J)
      return;
    const ee = C.touches[0].clientX, H = C.touches[0].clientY, te = O - ee, ae = J - H;
    Math.abs(te) > Math.abs(ae) && (te > 0 ? _("prev") : _("next")), y({ initialX: 0, initialY: 0 });
  }, Z = () => {
    h.current = !1;
  }, z = q(
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
    const C = F.current, O = Ve(C);
    f.current = O, B(O.length);
  }, [F]), I(() => {
    P && (u == null || u());
  }, [P, u]), I(() => (Y(), () => {
    R();
  }), [Y, R]), /* @__PURE__ */ l(
    "div",
    {
      onTouchStart: U,
      onTouchMove: X,
      onTouchEnd: Z,
      onMouseEnter: R,
      onMouseLeave: Y,
      className: A,
      ref: F,
      ...m,
      children: /* @__PURE__ */ l("div", { className: T, children: /* @__PURE__ */ G(fe.Provider, { value: { active: v }, children: [
        d && /* @__PURE__ */ l(_e, { to: k, imagesCount: $ }),
        r,
        i && /* @__PURE__ */ l(je, { move: _ })
      ] }) })
    }
  );
}, hs = ({
  className: e,
  captionClassName: t,
  children: n,
  src: s,
  alt: r,
  itemId: a,
  video: c,
  ...o
}) => {
  const { active: i } = se(fe), d = K(!0), u = K(null), m = p("carousel-caption d-none d-md-block", t);
  return I(() => {
    if (d.current && i === a - 1) {
      const f = u.current;
      f == null || f.classList.add("active");
    }
    d.current = !1;
  }, [i, a]), /* @__PURE__ */ G("div", { className: "carousel-item", ref: u, children: [
    c ? /* @__PURE__ */ l("video", { className: e, autoPlay: !0, loop: !0, muted: !0, ...o, children: /* @__PURE__ */ l("source", { src: s, type: "video/mp4" }) }) : /* @__PURE__ */ l("img", { className: e, src: s, alt: r, ...o }),
    /* @__PURE__ */ l("div", { className: m, children: n })
  ] });
}, Ne = N.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: !1,
  initialActive: 0
}), ys = N.forwardRef(
  ({ alwaysOpen: e, borderless: t, className: n, flush: s, initialActive: r = 0, tag: a = "div", children: c, onChange: o, ...i }, d) => {
    const u = p("accordion", s && "accordion-flush", t && "accordion-borderless", n), [m, f] = w(r);
    return I(() => {
      m && o && o(m);
    }, [o, m]), /* @__PURE__ */ l(a, { className: u, ref: d, ...i, children: /* @__PURE__ */ l(Ne.Provider, { value: { activeItem: m, setActiveItem: f, alwaysOpen: e, initialActive: r }, children: c }) });
  }
), Ns = N.forwardRef(
  ({
    className: e,
    bodyClassName: t,
    bodyStyle: n,
    headerClassName: s,
    collapseId: r,
    headerTitle: a,
    headerStyle: c,
    btnClassName: o,
    tag: i = "div",
    children: d,
    ...u
  }, m) => {
    const { activeItem: f, setActiveItem: g, alwaysOpen: b, initialActive: h } = se(Ne), [v, D] = w(h), $ = p("accordion-item", e), B = p("accordion-header", s), x = p("accordion-body", t), y = p(
      "accordion-button",
      b ? r !== v && "collapsed" : r !== f && "collapsed",
      o
    ), P = (L) => {
      b ? D(L !== v ? L : 0) : g(L !== f ? L : 0);
    };
    return /* @__PURE__ */ G(i, { className: $, ref: m, ...u, children: [
      /* @__PURE__ */ l("h2", { className: B, style: c, children: /* @__PURE__ */ l("button", { onClick: () => P(r), className: y, type: "button", children: a }) }),
      /* @__PURE__ */ l(
        xe,
        {
          id: r.toString(),
          show: b ? v === r : f === r,
          children: /* @__PURE__ */ l("div", { className: x, style: n, children: d })
        }
      )
    ] });
  }
), ws = ({
  className: e,
  size: t,
  contrast: n,
  value: s,
  defaultValue: r,
  id: a,
  labelClass: c,
  wrapperClass: o,
  wrapperStyle: i,
  wrapperTag: d = "div",
  label: u,
  onChange: m,
  children: f,
  labelRef: g,
  labelStyle: b,
  inputRef: h,
  onBlur: v,
  readonly: D = !1,
  ...$
}) => {
  var V;
  const B = K(null), x = K(null), y = g || B, P = h || x, [L, F] = w(s || r), [A, T] = w(0), [E, R] = w(
    s !== void 0 && s.length > 0 || r !== void 0 && r.length > 0
  ), W = p("form-outline", n && "form-white", o), M = p("form-control", E && "active", t && `form-control-${t}`, e), S = p("form-label", c);
  I(() => {
    var Y;
    y.current && ((Y = y.current) == null ? void 0 : Y.clientWidth) !== 0 && T(y.current.clientWidth * 0.8 + 8);
  }, [y, (V = y.current) == null ? void 0 : V.clientWidth]);
  const j = () => {
    y.current && T(y.current.clientWidth * 0.8 + 8);
  };
  I(() => {
    s !== void 0 && (s.length > 0 ? R(!0) : R(!1));
  }, [s]), I(() => {
    r !== void 0 && (r.length > 0 ? R(!0) : R(!1));
  }, [r]);
  const k = (Y) => {
    F(Y.currentTarget.value), m && m(Y);
  }, _ = q(
    (Y) => {
      L !== void 0 && L.length > 0 || s !== void 0 && s.length > 0 ? R(!0) : R(!1), v && v(Y);
    },
    [L, s, v]
  );
  return /* @__PURE__ */ G(d, { className: W, style: { ...i }, children: [
    /* @__PURE__ */ l(
      "textarea",
      {
        readOnly: D,
        className: M,
        onBlur: _,
        onChange: k,
        onFocus: j,
        defaultValue: r,
        value: s,
        id: a,
        ref: P,
        ...$
      }
    ),
    u && /* @__PURE__ */ l("label", { className: S, style: b, htmlFor: a, ref: y, children: u }),
    /* @__PURE__ */ G("div", { className: "form-notch", children: [
      /* @__PURE__ */ l("div", { className: "form-notch-leading" }),
      /* @__PURE__ */ l("div", { className: "form-notch-middle", style: { width: A } }),
      /* @__PURE__ */ l("div", { className: "form-notch-trailing" })
    ] }),
    f
  ] });
}, Ts = ({
  children: e,
  invalid: t,
  feedback: n = "Looks good!",
  tooltip: s,
  tag: r = "div",
  ...a
}) => {
  const [c, o] = w(null), i = K(null), d = p(
    t ? `invalid-${s ? "tooltip" : "feedback"}` : `valid-${s ? "tooltip" : "feedback"}`
  );
  return I(() => {
    var m, f;
    const u = (f = (m = i.current) == null ? void 0 : m.querySelector("input, textarea")) == null ? void 0 : f.parentElement;
    u && o(u);
  }, []), /* @__PURE__ */ G(r, { ref: i, ...a, children: [
    c && he(/* @__PURE__ */ l("div", { className: d, children: n }), c),
    e
  ] });
};
export {
  ys as MDBAccordion,
  Ns as MDBAccordionItem,
  at as MDBBadge,
  Mt as MDBBreadcrumb,
  $t as MDBBreadcrumbItem,
  ie as MDBBtn,
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
