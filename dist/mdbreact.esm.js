import React, { useState, Component, Fragment, useEffect, useRef, useContext } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { Manager, Popper as Popper$1, Reference } from 'react-popper';
import NumericInput from 'react-numeric-input';
import { NavLink as NavLink$1 } from 'react-router-dom';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var Alert = function Alert(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var closeAlert = function closeAlert() {
    setIsOpen(false);
  };

  var handleOnExit = function handleOnExit(node) {
    node.classList.add("fade");
    props.onClose && props.onClose();
  };

  var handleOnExited = function handleOnExited(node) {
    props.onClosed && props.onClosed();
  };

  var className = props.className,
      color = props.color,
      children = props.children,
      dismiss = props.dismiss;
  var alertClasses = classNames("alert", color && "alert-".concat(color), className);
  var alertComponent;

  if (dismiss) {
    alertComponent = React.createElement(Transition, {
      "in": isOpen,
      timeout: 150,
      unmountOnExit: true,
      onExit: function onExit(node) {
        return handleOnExit(node);
      },
      onExited: function onExited(node) {
        return handleOnExited(node);
      }
    }, React.createElement("div", {
      className: alertClasses,
      role: "alert"
    }, children, React.createElement("button", {
      onClick: closeAlert,
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))));
  } else {
    alertComponent = React.createElement("div", {
      className: alertClasses,
      role: "alert"
    }, children);
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: "primary"
};
Alert.propTypes = {
  className: propTypes.string,
  color: propTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  onClose: propTypes.func,
  onClosed: propTypes.func
};

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;

      if (windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) && scroll < _this.getOffset(_this.elemRef.current) || windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight && scroll < _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(_this.elemRef.current) + 100 > docHeight) {
        // if the predicate is true, change state
        _this.setState({
          isVisible: true,
          revealed: true
        });
      } else {
        //  was the "revealing" fired at least once?
        if (_this.state.revealed) {
          return;
        } else {
          // if it wasn't, hide
          _this.setState({
            isVisible: false,
            revealed: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIteration", function (e) {
      if (_this.props.onAnimationIteration) {
        _this.setState({
          countIterations: _this.state.countIterations + 1
        });

        _this.props.onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationEnd && _this.props.count === _this.state.countIterations) {
        _this.props.onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    _this.state = {
      isVisible: _this.props.reveal ? false : true,
      revealed: _this.props.reveal ? false : true,
      countIterations: 0
    };
    _this.elemRef = React.createRef();
    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add EL on window if the animation is to "reveal"
      if (this.props.reveal) {
        window.addEventListener("scroll", this.updatePredicate);
        this.updatePredicate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.reveal) {
        window.removeEventListener("scroll", this.updatePredicate);
      }
    } // the function to judge whether the animation should be started

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          type = _this$props.type,
          duration = _this$props.duration,
          delay = _this$props.delay,
          count = _this$props.count,
          reveal = _this$props.reveal,
          infinite = _this$props.infinite,
          style = _this$props.style,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "type", "duration", "delay", "count", "reveal", "infinite", "style", "children"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? "visible" : "hidden",
        animationName: type
      };
      var hiddenStyles = {
        animationName: "none",
        visibility: "hidden"
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(this.state.isVisible && "animated", // will this work?
      type && type, infinite && "infinite", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: isVisible && revealed ? getAllStyles : hiddenStyles,
        ref: this.elemRef,
        onAnimationStart: this.handleStart,
        onAnimationIteration: this.handleIteration,
        onAnimationEnd: this.handleEnd
      }), children);
    }
  }]);

  return Animation;
}(Component);

Animation.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  type: propTypes.string,
  delay: propTypes.string,
  count: propTypes.number,
  onAnimationEnd: propTypes.func,
  onAnimationStart: propTypes.func
};
Animation.defaultProps = {
  tag: "div",
  reveal: false,
  duration: 1,
  count: 1
};

var Badge = function Badge(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      color = props.color,
      pill = props.pill,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "color", "pill"]);

  var classes = classNames("badge", color, "badge-" + color, pill ? "badge-pill" : false, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Badge.defaultProps = {
  tag: "span",
  color: "default",
  pill: false
};
Badge.propTypes = {
  color: propTypes.string,
  pill: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};
var returnAttributes = function returnAttributes(attributes) {
  var newAttributesObject = Object.keys(attributes).reduce(function (previousValue, currentElement) {
    if (attributes[currentElement]) previousValue[currentElement] = attributes[currentElement];
    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(" ");
  var specialColors = ["danger", "warning", "success", "info", "default", "primary", "secondary", "elegant", "stylish", "unique", "special"];
  var colorClasses = "";
  colorArray.forEach(function (color) {
    if (specialColors.includes(color)) {
      if (color.includes("dark")) {
        color.replace("-", "-color-");
        colorClasses += "".concat(color, " ");
      } else {
        colorClasses += "".concat(color, "-color");
      }
    } else {
      colorClasses += "".concat(color, " ");
    }
  });
  return colorClasses;
};

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames("breadcrumb", uppercase && "text-uppercase", bold && "font-up-bold", light && "white-text", color && getColorClass(color), className);
  var children;

  if (bold) {
    children = React.Children.map(props.children, function (child) {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React.createElement("nav", null, React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  light: propTypes.bool,
  uppercase: propTypes.bool,
  bold: propTypes.bool
};

var Fa = function Fa(props) {
  var border = props.border,
      brand = props.brand,
      className = props.className,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      fixed = props.fixed,
      flip = props.flip,
      icon = props.icon,
      inverse = props.inverse,
      light = props.light,
      list = props.list,
      pull = props.pull,
      pulse = props.pulse,
      regular = props.regular,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      stack = props.stack,
      attributes = _objectWithoutProperties(props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

  var iconPrefix = brand || fab ? "fab" : light || fal ? "fal" : regular || far ? "far" : "fa";
  var classes = classNames(iconPrefix, list ? "fa-li" : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? "fa-fw" : false, pull ? "fa-pull-".concat(pull) : false, border ? "fa-border" : false, spin ? "fa-spin" : false, pulse ? "fa-pulse" : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? "fa-inverse" : false, stack ? "fa-".concat(stack) : false, className);
  return React.createElement("i", _extends({}, attributes, {
    className: classes
  }));
};

Fa.propTypes = {
  icon: propTypes.string.isRequired,
  border: propTypes.bool,
  brand: propTypes.bool,
  className: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  fixed: propTypes.bool,
  flip: propTypes.string,
  inverse: propTypes.string,
  light: propTypes.bool,
  list: propTypes.bool,
  pull: propTypes.string,
  pulse: propTypes.bool,
  regular: propTypes.bool,
  rotate: propTypes.string,
  spin: propTypes.bool,
  size: propTypes.string,
  stack: propTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: "",
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: "",
  inverse: "",
  light: false,
  list: false,
  pull: "",
  pulse: false,
  regular: false,
  rotate: "",
  spin: false,
  size: "",
  stack: ""
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".bc-icons.breadcrumb-item::before,\n.bc-icons.breadcrumb-item::after {\n  content: none;\n}\n\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\n  content: none;\n}\n\n.bc-icons.breadcrumb-item.active {\n  color: #eeeeee;\n}\n";
styleInject(css);

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      appendIcon = props.appendIcon,
      children = props.children,
      className = props.className,
      bold = props.bold,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClassName = props.iconClassName,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      attributes = _objectWithoutProperties(props, ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"]);

  var classes = classNames(active ? "active" : false, icon && "bc-icons", "breadcrumb-item", className);
  var iconClasses = classNames(appendIcon ? "mx-2" : "mr-2", iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React.createElement(Fragment, null, appendIcon && children, React.createElement(Fa, {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }

    return children;
  };

  return React.createElement("li", _extends({}, attributes, {
    className: classes
  }), React.createElement(WithBold, null, React.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: propTypes.bool,
  appendIcon: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  bold: propTypes.bool,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClassName: propTypes.string,
  iconLight: propTypes.bool,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string
};
BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: "",
  bold: false,
  icon: "",
  iconBrand: false,
  iconClassName: "",
  iconLight: false,
  iconRegular: false,
  iconSize: ""
};

var css$1 = ".Ripple {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  opacity: 1;\n  transform: scale(0);\n}\n\n.Ripple-outline {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.Ripple.is-reppling {\n  animation: ripple 0.5s linear;\n}\n\n.Ripple-parent {\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n@keyframes ripple {\n  100% {\n    opacity: 0;\n    transform: scale(3);\n  }\n}\n";
styleInject(css$1);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves(props) {
    var _this;

    _classCallCheck(this, Waves);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Waves).call(this, props));
    _this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevState.cursorPos.time !== this.props.cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: this.props.cursorPos
          }, function () {
            _this2.reppling();
          });
        } else this.reppling();
      }
    }
  }, {
    key: "reppling",
    value: function reppling() {
      // Get the element
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight; // Make a Square Ripple

      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth); // Make Ripple Position to be center

      var centerize = rippleWidthShouldBe / 2;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: this.state.cursorPos.top - buttonPos.top - centerize,
        left: this.state.cursorPos.left - buttonPos.left - centerize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: 'Ripple ' + (this.props.outline || this.props.flat || this.props.dark ? 'Ripple-outline ' : '') + (this.state.animate ? 'is-reppling' : ''),
        style: {
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }
      });
    }
  }]);

  return Waves;
}(React.Component);

Waves.propTypes = {
  outline: propTypes.bool,
  flat: propTypes.bool,
  animate: propTypes.bool,
  cursorPos: propTypes.object,
  children: propTypes.node
};

var Button = function Button(props) {
  var _classNames;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    e.stopPropagation(); // Waves - Get Cursor Position

    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var active = props.active,
      block = props.block,
      circle = props.circle,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      download = props.download,
      outline = props.outline,
      size = props.size,
      rounded = props.rounded,
      gradient = props.gradient,
      floating = props.floating,
      flat = props.flat,
      role = props.role,
      type = props.type,
      social = props.social,
      action = props.action,
      Tag = props.tag,
      target = props.target,
      innerRef = props.innerRef,
      attributes = _objectWithoutProperties(props, ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"]);

  var classes = classNames(flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? "-outline" : "", "-").concat(color), "btn", "Ripple-parent", className, (_classNames = {
    active: active,
    "btn-floating": floating,
    "btn-rounded": rounded,
    "btn-circle": circle,
    "btn-block": block,
    "btn-action": action
  }, _defineProperty(_classNames, "btn-".concat(social), social), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", disabled), _classNames));

  if (attributes.href && Tag === "button") {
    Tag = "a";
  }

  return React.createElement(Tag, _extends({
    type: Tag === "button" && !type ? "button" : type,
    target: target,
    role: Tag === "a" && !role ? "button" : role,
    className: classes,
    ref: innerRef,
    onMouseUp: handleClick,
    onTouchStart: handleClick
  }, attributes, {
    download: download,
    disabled: disabled
  }), props.children, disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos,
    outline: outline,
    flat: flat
  }));
};

Button.defaultProps = {
  color: "default",
  tag: "button"
};
Button.propTypes = {
  active: propTypes.bool,
  action: propTypes.bool,
  block: propTypes.bool,
  color: propTypes.string,
  disabled: propTypes.bool,
  download: propTypes.string,
  gradient: propTypes.string,
  role: propTypes.string,
  type: propTypes.string,
  outline: propTypes.bool,
  rounded: propTypes.bool,
  circle: propTypes.bool,
  floating: propTypes.bool,
  flat: propTypes.bool,
  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string]),
  onClick: propTypes.func,
  size: propTypes.string,
  social: propTypes.string,
  children: propTypes.node,
  tag: propTypes.string,
  target: propTypes.string,
  className: propTypes.string
};

var css$2 = ".btn-group-vertical>.btn,\n.btn-group-vertical>.btn+.btn-group,\n.btn-group-vertical>.btn-group+.btn,\n.btn-group-vertical>.btn-group+.btn-group {\n  margin-left: 0px;\n}\n\n.btn-group-lg>.btn {\n  font-size: 0.9rem;\n  padding: 1rem 2.4rem;\n}\n\n.btn-group-sm>.btn {\n  font-size: 0.6rem;\n  padding: 0.5rem 1.6rem;\n}\n\n.btn-floating.btn.btn-sm,\n.btn-floating.btn.btn-lg {\n  padding: 0;\n}\n";
styleInject(css$2);

var ButtonGroup = function ButtonGroup(props) {
  var className = props.className,
      size = props.size,
      vertical = props.vertical,
      attributes = _objectWithoutProperties(props, ["className", "size", "vertical"]);

  var classes = classNames(className, size ? "btn-group-" + size : false, vertical ? "btn-group-vertical" : "btn-group");
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), props.children);
};

ButtonGroup.propTypes = {
  "aria-label": propTypes.string,
  className: propTypes.string,
  role: propTypes.string,
  size: propTypes.string,
  children: propTypes.node,
  vertical: propTypes.bool
};
ButtonGroup.defaultProps = {
  role: "group"
};

var ButtonToolbar = function ButtonToolbar(props) {
  var className = props.className,
      attributes = _objectWithoutProperties(props, ["className"]);

  var classes = classNames(className, "btn-toolbar");
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), props.children);
};

ButtonToolbar.propTypes = {
  "aria-label": propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  role: propTypes.string
};
ButtonToolbar.defaultProps = {
  role: "toolbar"
};

var Card = function Card(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      wide = props.wide,
      narrow = props.narrow,
      reverse = props.reverse,
      testimonial = props.testimonial,
      ecommerce = props.ecommerce,
      collection = props.collection,
      pricing = props.pricing,
      personal = props.personal,
      news = props.news,
      color = props.color,
      text = props.text,
      border = props.border,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

  var classes = classNames((_classNames = {
    "card-cascade": cascade,
    "card-cascade wider": wide,
    "card-cascade narrower": narrow,
    "card-cascade wider reverse": reverse,
    "testimonial-card": testimonial,
    "card-ecommerce": ecommerce,
    "collection-card": collection,
    "pricing-card": pricing,
    "card-personal": personal,
    "news-card": news
  }, _defineProperty(_classNames, "".concat(text, "-text"), text), _defineProperty(_classNames, "border-".concat(border), border), _classNames), "card", color, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Card.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  border: propTypes.string
};
Card.defaultProps = {
  tag: "div"
};

var CardBody = function CardBody(props) {
  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade"]);

  var classes = classNames("card-body", cascade && "card-body-cascade", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardBody.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  cascade: propTypes.bool
};
CardBody.defaultProps = {
  tag: "div"
};

var CardFooter = function CardFooter(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      small = props.small,
      muted = props.muted,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent", "small", "muted"]);

  var classes = classNames((_classNames = {
    " white-text": color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, "bg-transparent", transparent), _defineProperty(_classNames, "text-muted", muted), _defineProperty(_classNames, "color", color), _defineProperty(_classNames, "text", text), _classNames), "card-footer", className);
  var component = React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));

  if (small) {
    component = React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React.createElement("small", null, " ", props.children, " "));
  }

  return component;
};

CardFooter.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool,
  small: propTypes.bool,
  muted: propTypes.bool
};
CardFooter.defaultProps = {
  tag: "div"
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      Tag = props.tag,
      deck = props.deck,
      column = props.column,
      attributes = _objectWithoutProperties(props, ["className", "tag", "deck", "column"]);

  var classes = classNames(deck ? "card-deck" : column ? "card-columns" : "card-group", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  deck: propTypes.bool,
  column: propTypes.bool
};
CardGroup.defaultProps = {
  tag: "div"
};

var CardHeader = function CardHeader(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "text", "border", "transparent"]);

  var classes = classNames((_classNames = {
    " white-text": color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, "bg-transparent", transparent), _classNames), "card-header", className, color, text);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  color: propTypes.string,
  text: propTypes.string,
  border: propTypes.string,
  transparent: propTypes.bool
};
CardHeader.defaultProps = {
  tag: "div"
};

var Mask = function Mask(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      pattern = props.pattern,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "overlay", "pattern", "tag"]);

  var classes = classNames("mask", pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Mask.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  overlay: propTypes.string,
  pattern: propTypes.oneOfType([propTypes.string, propTypes.number]),
  tag: propTypes.string
};
Mask.defaultProps = {
  className: "",
  overlay: "",
  pattern: "",
  tag: "div"
};

var View = function View(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var cascade = props.cascade,
      children = props.children,
      className = props.className,
      hover = props.hover,
      rounded = props.rounded,
      src = props.src,
      Tag = props.tag,
      waves = props.waves,
      zoom = props.zoom,
      fixed = props.fixed,
      attributes = _objectWithoutProperties(props, ["cascade", "children", "className", "hover", "rounded", "src", "tag", "waves", "zoom", "fixed"]);

  var classes = classNames("view", rounded && "rounded", zoom && "zoom", hover && "overlay", cascade && "view-cascade", waves ? "Ripple-parent" : false, className);
  var viewStyle = src ? {
    backgroundImage: "url(\"".concat(src, "\")"),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    backgroundAttachment: fixed ? "fixed" : null
  } : {};
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick,
    style: viewStyle
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

View.defaultProps = {
  cascade: false,
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
  waves: false,
  zoom: false
};
View.propTypes = {
  cascade: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  hover: propTypes.bool,
  rounded: propTypes.bool,
  src: propTypes.string,
  tag: propTypes.string,
  waves: propTypes.bool,
  zoom: propTypes.bool
};

var CardImage = function CardImage(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      overlay = props.overlay,
      top = props.top,
      waves = props.waves,
      hover = props.hover,
      cascade = props.cascade,
      tag = props.tag,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["className", "overlay", "top", "waves", "hover", "cascade", "tag", "zoom"]);

  var classes = classNames(top && "card-img-top", className);
  var Tag = tag;
  var innerContent = React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), props.children);

  if (props.src) {
    return React.createElement(View, {
      zoom: zoom,
      hover: hover,
      cascade: cascade
    }, React.createElement("div", {
      className: "Ripple-parent",
      onMouseDown: handleClick,
      style: {
        touchAction: "unset"
      }
    }, innerContent, React.createElement(Mask, {
      overlay: overlay
    }), waves && React.createElement(Waves, {
      cursorPos: cursorPos
    })));
  } else {
    return React.createElement("div", null, innerContent);
  }
};

CardImage.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  zoom: propTypes.bool,
  waves: propTypes.bool,
  className: propTypes.string,
  cascade: propTypes.bool,
  hover: propTypes.bool,
  overlay: propTypes.string,
  top: propTypes.bool,
  src: propTypes.string,
  children: propTypes.node
};
CardImage.defaultProps = {
  tag: "img",
  overlay: "white-slight",
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText = function CardText(props) {
  var className = props.className,
      Tag = props.tag,
      muted = props.muted,
      small = props.small,
      attributes = _objectWithoutProperties(props, ["className", "tag", "muted", "small"]);

  var classes = classNames("card-text", muted && "text-muted", className);
  var text = React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));

  if (small) {
    text = React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React.createElement("small", null, " ", props.children, " "));
  }

  return text;
};

CardText.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  muted: propTypes.bool,
  small: propTypes.bool
};
CardText.defaultProps = {
  tag: "p"
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      Tag = props.tag,
      sub = props.sub,
      attributes = _objectWithoutProperties(props, ["className", "tag", "sub"]);

  var classes = classNames(sub ? "card-subtitle" : "card-title", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  sub: propTypes.bool,
  className: propTypes.string
};
CardTitle.defaultProps = {
  tag: "h4",
  sub: false
};

var Control = function Control(props) {
  var direction = props.direction,
      className = props.className,
      onClick = props.onClick,
      Tag = props.tag,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      testimonial = props.testimonial,
      multiItem = props.multiItem;
  var text;

  if (direction === "prev") {
    text = "Previous";
  } else if (direction === "next") {
    text = "Next";
  }

  var classes = classNames("carousel-control-" + direction, className);
  var caretClasses = classNames("carousel-control-" + direction + "-icon");

  if (testimonial) {
    var arrow = direction === "prev" ? "left" : "right";
    classes = classNames("carousel-control-" + direction, arrow, "carousel-control", className);
    caretClasses = classNames("icon-" + direction);
  }

  if (multiItem) {
    classes = classNames("btn-floating");
  }

  return React.createElement(Tag, {
    className: classes,
    "data-slide": direction,
    onClick: onClick
  }, iconLeft ? React.createElement(Fa, {
    icon: "chevron-left"
  }) : iconRight ? React.createElement(Fa, {
    icon: "chevron-right"
  }) : React.createElement("div", null, React.createElement("span", {
    className: caretClasses,
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "sr-only"
  }, text)));
};

Control.propTypes = {
  onClick: propTypes.any,
  direction: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  iconLeft: propTypes.bool,
  iconRight: propTypes.bool,
  testimonial: propTypes.bool,
  multiItem: propTypes.bool
};
Control.defaultProps = {
  tag: "a"
};

var CarouselIndicator = function CarouselIndicator(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      img = props.img,
      alt = props.alt,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "img", "alt"]);

  var classes = classNames(active && "active", className);
  return React.createElement("li", _extends({}, attributes, {
    className: classes
  }), img && React.createElement("img", {
    src: img,
    alt: alt,
    className: "img-fluid"
  }), children);
};

CarouselIndicator.propTypes = {
  active: propTypes.bool.isRequired,
  alt: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  img: propTypes.string
};
CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: ""
};

var CarouselIndicators = function CarouselIndicators(props) {
  var children = props.children,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames("carousel-indicators", className);
  return React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children);
};

CarouselIndicators.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};
CarouselIndicators.defaultProps = {
  className: ""
};

var css$3 = ".carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.carousel-fade .carousel-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: block !important;\n  opacity: 0;\n  z-index: 0;\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\n}\n\n.carousel-fade .carousel-item.active {\n  position: relative;\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-multi-item .carousel-item {\n  display: inline-block !important;\n}\n\n.carousel .carousel-slide-item {\n  transition: left 0.5s;\n}\n\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\n  z-index: 2;\n}\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "restartInterval", function () {
      if (_this.props.interval !== false) {
        clearInterval(_this.cycleInterval);
        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      var nextItem = _this.state.activeItem + 1;

      if (nextItem > _this.state.length) {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: 1
        }));
      } else {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: nextItem
        }));
      }

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      var prevItem = _this.state.activeItem - 1;

      if (prevItem < 1) {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: _this.state.length
        }));
      } else {
        _this.setState(_objectSpread({}, _this.state, {
          activeItem: prevItem
        }));
      }

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (_this.props.interval === false) {
        return;
      }

      _this.cycleInterval = setInterval(_this.next, _this.props.interval); // get images src atr

      if (_this.props.thumbnails) {
        var CarouselItemsArray = _this.carouselRef.current.querySelectorAll(".carousel-item img");

        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });

        _this.setState(_objectSpread({}, _this.state, {
          srcArray: srcArray
        }));
      }
    });

    _this.state = {
      activeItem: _this.props.activeItem,
      length: _this.props.length,
      slide: _this.props.slide,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    };
    _this.carouselRef = React.createRef();
    return _this;
  }

  _createClass(Carousel, [{
    key: "goToIndex",
    value: function goToIndex(item) {
      if (this.state.activeItem !== item) {
        this.setState(_objectSpread({}, this.state, {
          activeItem: item
        }));
      }

      this.restartInterval();
    }
  }, {
    key: "startTouch",
    value: function startTouch(e) {
      this.setState({
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY
      });
    }
  }, {
    key: "moveTouch",
    value: function moveTouch(e) {
      this.setState({
        swipeAvailable: false
      });
      var _this$state = this.state,
          initialX = _this$state.initialX,
          initialY = _this$state.initialY;

      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          this.next();
        } else {
          this.prev();
        }
      }

      this.setState({
        initialX: null,
        initialY: null
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.interval === false) {
        return;
      }

      clearInterval(this.cycleInterval);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItem: this.state.activeItem,
        length: this.state.length,
        slide: this.state.slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeItem = _this$props.activeItem,
          children = _this$props.children,
          className = _this$props.className,
          multiItem = _this$props.multiItem,
          slide = _this$props.slide,
          thumbnails = _this$props.thumbnails,
          interval = _this$props.interval,
          testimonial = _this$props.testimonial,
          Tag = _this$props.tag,
          length = _this$props.length,
          showControls = _this$props.showControls,
          showIndicators = _this$props.showIndicators,
          onHoverStop = _this$props.onHoverStop,
          attributes = _objectWithoutProperties(_this$props, ["activeItem", "children", "className", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators", "onHoverStop"]);

      var ariaLabel = "carousel";
      var classes = classNames("carousel", multiItem ? "carousel-multi-item" : "carousel-fade", thumbnails ? "carousel-thumbnails" : "", testimonial ? "testimonial-carousel" : "", className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(React.createElement(CarouselIndicator, {
          img: thumbnails ? _this2.state.srcArray[i - 1] : null,
          key: i,
          active: _this2.state.activeItem === i ? true : false,
          onClick: function onClick() {
            _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= this.state.length; i++) {
        _loop(i);
      }

      return React.createElement(Tag, _extends({
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel,
        onTouchStart: function onTouchStart(touchStart) {
          return _this2.startTouch(touchStart);
        },
        onTouchMove: function onTouchMove(touchMove) {
          return _this2.state.swipeAvailable ? _this2.moveTouch(touchMove) : null;
        },
        onTouchEnd: function onTouchEnd() {
          return _this2.setState({
            swipeAvailable: true
          });
        },
        onMouseEnter: function onMouseEnter() {
          return onHoverStop ? clearInterval(_this2.cycleInterval) : false;
        },
        onMouseLeave: function onMouseLeave() {
          return onHoverStop ? _this2.restartInterval() : false;
        }
      }), showControls && multiItem && React.createElement("div", {
        className: "controls-top"
      }, React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React.createElement(React.Fragment, null, React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "next",
        role: "button",
        onClick: this.next
      })), React.createElement(CarouselIndicators, null, showIndicators && CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(Component);

Carousel.propTypes = {
  activeItem: propTypes.number,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  multiItem: propTypes.bool,
  interval: propTypes.oneOfType([propTypes.number, propTypes.bool]),
  thumbnails: propTypes.bool,
  testimonial: propTypes.bool,
  showControls: propTypes.bool,
  showIndicators: propTypes.bool,
  slide: propTypes.bool,
  length: propTypes.number,
  onHoverStop: propTypes.bool
};
Carousel.defaultProps = {
  tag: "div",
  interval: 6000,
  showControls: true,
  showIndicators: true,
  onHoverStop: true
};
Carousel.childContextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var CarouselCaption = function CarouselCaption(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames("carousel-caption", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

CarouselCaption.propTypes = {
  active: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselCaption.defaultProps = {
  tag: "div"
};

var CarouselInner =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselInner, _Component);

  function CarouselInner(props) {
    var _this;

    _classCallCheck(this, CarouselInner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselInner).call(this, props));
    _this.state = {
      childrenCount: React.Children.count(_this.props.children)
    };
    return _this;
  }

  _createClass(CarouselInner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          childrenCount = _this$props.childrenCount,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "childrenCount", "className", "tag"]);

      var classes = classNames("carousel-inner", active ? "active" : "", className);
      childrenCount = React.Children.count(this.props.children);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselInner;
}(Component);

CarouselInner.propTypes = {
  childrenCount: propTypes.any,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  active: propTypes.bool,
  children: propTypes.node
};
CarouselInner.defaultProps = {
  tag: "div"
};
CarouselInner.contextTypes = {
  childrenCount: propTypes.any
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem(props) {
    var _this;

    _classCallCheck(this, CarouselItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselItem).call(this, props));
    _this.moveForward = _this.moveForward.bind(_assertThisInitialized(_this));
    _this.moveBackwards = _this.moveBackwards.bind(_assertThisInitialized(_this));
    _this.makeVisible = _this.makeVisible.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CarouselItem, [{
    key: "moveForward",
    value: function moveForward() {
      this.style = {
        position: "absolute",
        left: "100%"
      };
    }
  }, {
    key: "moveBackwards",
    value: function moveBackwards() {
      this.style = {
        position: "absolute",
        left: "-100%"
      };
    }
  }, {
    key: "makeVisible",
    value: function makeVisible() {
      this.style = {
        left: "0"
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      itemId = parseInt(itemId, 10);
      var classes = classNames("carousel-item", this.context.slide ? "active carousel-slide-item" : itemId === this.context.activeItem ? "active" : false, className);
      var slideIndex = this.context.activeItem - itemId;

      if (this.context.slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      }

      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(Component);

CarouselItem.propTypes = {
  active: propTypes.bool,
  itemId: propTypes.any,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
CarouselItem.defaultProps = {
  tag: "div"
};
CarouselItem.contextTypes = {
  activeItem: propTypes.any,
  length: propTypes.any,
  slide: propTypes.any
};

var MDBCloseIcon = function MDBCloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      props = _objectWithoutProperties(_ref, ["onClick", "className", "ariaLabel"]);

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e);
  };

  var btnClasses = className ? ['close'].concat(_toConsumableArray(className.split(" "))) : ['close'];
  return React.createElement("button", _extends({
    "data-test": "close-button",
    type: "button"
  }, props, {
    className: btnClasses.join(" "),
    onClick: onClickHandler,
    "aria-label": ariaLabel
  }), React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
MDBCloseIcon.defaultProps = {
  ariaLabel: "Close"
};
MDBCloseIcon.propTypes = {
  className: propTypes.string,
  ariaLabel: propTypes.string,
  onClick: propTypes.func
};

var Col = function Col(props) {
  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      size = props.size,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

  var classes = classNames(size && "col-" + size, xs && "col-xs-" + xs, sm && "col-sm-" + sm, md && "col-md-" + md, lg && "col-lg-" + lg, xl && "col-xl-" + xl, !size && !xs && !sm && !md && !lg && !xl ? "col" : "", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Col.propTypes = {
  size: propTypes.string,
  xs: propTypes.string,
  sm: propTypes.string,
  md: propTypes.string,
  lg: propTypes.string,
  xl: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Col.defaultProps = {
  tag: "div",
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = "SHOW";
var SHOWN = "SHOWN";
var HIDE = "HIDE";
var HIDDEN = "HIDDEN";
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.transitionTag = setTimeout(function () {
          _this.setState({
            collapse: SHOWN,
            height: null
          }, _this.props.onOpened());
        }, _this.getDelay("show"));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollapse", function () {
      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });

      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: HIDDEN,
          height: null
        }, _this.props.onClosed());
      }, _this.getDelay("hide"));
    });

    _this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var collapse = prevState.collapse;
      var willOpen = typeof this.props.isOpen !== "boolean" ? this.props.isOpen === prevState.id : this.props.isOpen;

      if (willOpen && this.state.collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (_typeof(delay) === "object") {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navbar = _this$props.navbar,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          delay = _this$props.delay,
          onOpened = _this$props.onOpened,
          onClosed = _this$props.onClosed,
          attributes = _objectWithoutProperties(_this$props, ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"]);

      var _this$state = this.state,
          collapse = _this$state.collapse,
          height = _this$state.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = "collapsing";
          break;

        case SHOWN:
          collapseClass = "collapse show";
          break;

        case HIDE:
          collapseClass = "collapsing";
          break;

        case HIDDEN:
          collapseClass = "collapse";
          break;

        default:
          // HIDDEN
          collapseClass = "collapse";
      }

      var classes = classNames(collapseClass, navbar ? "navbar-collapse" : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement("div", _extends({}, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(Component);

Collapse.propTypes = {
  isOpen: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  id: propTypes.string,
  className: propTypes.node,
  children: propTypes.node,
  navbar: propTypes.bool,
  delay: propTypes.oneOfType([propTypes.shape({
    show: propTypes.number,
    hide: propTypes.number
  }), propTypes.number]),
  onOpened: propTypes.func,
  onClosed: propTypes.func
};
Collapse.defaultProps = {
  isOpen: "",
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container = function Container(props) {
  var fluid = props.fluid,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["fluid", "className", "tag"]);

  var classes = classNames(fluid ? "container-fluid" : "container", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container.propTypes = {
  fluid: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
Container.defaultProps = {
  tag: "div",
  fluid: false
};

var DataTableHead = function DataTableHead(props) {
  var color = props.color,
      columns = props.columns,
      handleSort = props.handleSort,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      sortable = props.sortable,
      sorted = props.sorted,
      textWhite = props.textWhite;
  var theadClasses = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), textWhite && "text-white");
  return React.createElement(Fragment, null, (scrollY || scrollX) && React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement("thead", {
    className: theadClasses || undefined
  }, React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: classNames(col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : null, sortable && col.sort !== 'disabled' && (sorted && col.sort ? "sorting_".concat(col.sort === 'asc' ? 'desc' : 'asc') : 'sorting'))
    }, col.attributes), col.label);
  }))));
};

DataTableHead.propTypes = {
  sorted: propTypes.bool.isRequired,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  handleSort: propTypes.func,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool,
  sortable: propTypes.bool,
  textWhite: propTypes.bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};

var css$4 = ".table-wrapper-scroll-y {\n  display: block;\n  max-height: 200px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n";
styleInject(css$4);

var Table = function Table(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      dark = props.dark,
      fixed = props.fixed,
      theadColor = props.theadColor,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      scrollY = props.scrollY,
      small = props.small,
      striped = props.striped,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "fixed", "theadColor", "hover", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "scrollY", "small", "striped", "className"]);

  var tableClasses = classNames("table", {
    "w-auto": autoWidth,
    "table-bordered": bordered,
    "table-borderless": borderless,
    "btn-table": btn,
    "table-fixed": fixed,
    "table-hover": hover,
    "table-sm": small,
    "table-striped": striped
  }, className);
  var wrapperClasses = classNames({
    "table-dark": dark,
    "table-responsive": responsive,
    "table-responsive-sm": responsiveSm,
    "table-responsive-md": responsiveMd,
    "table-responsive-lg": responsiveLg,
    "table-responsive-xl": responsiveXl,
    "table-wrapper-scroll-y": scrollY
  });
  var wrapperStyles = {
    maxHeight: maxHeight ? "".concat(maxHeight) : null
  };
  return React.createElement("div", {
    className: wrapperClasses,
    style: wrapperStyles
  }, React.createElement("table", _extends({}, attributes, {
    className: tableClasses
  }), children));
};

Table.propTypes = {
  autoWidth: propTypes.bool,
  bordered: propTypes.bool,
  borderless: propTypes.bool,
  btn: propTypes.bool,
  children: propTypes.node,
  dark: propTypes.bool,
  fixed: propTypes.bool,
  theadColor: propTypes.string,
  hover: propTypes.bool,
  maxHeight: propTypes.string,
  responsive: propTypes.bool,
  responsiveSm: propTypes.bool,
  responsiveMd: propTypes.bool,
  responsiveLg: propTypes.bool,
  responsiveXl: propTypes.bool,
  scrollY: propTypes.bool,
  small: propTypes.bool,
  striped: propTypes.bool,
  className: propTypes.string
};

var TableBody = function TableBody(props) {
  var children = props.children,
      color = props.color,
      rows = props.rows,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "rows", "textWhite"]);

  var classes = classNames(color, {
    "text-white": textWhite
  });
  return React.createElement("tbody", _extends({}, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React.createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;

      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? React.createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return React.createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};

TableBody.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  rows: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableBody.defaultProps = {
  textWhite: false
};

var TableFoot = function TableFoot(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var classes = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), {
    "text-white": textWhite
  });
  return React.createElement("thead", _extends({}, attributes, {
    className: classes || undefined
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableFoot.defaultProps = {
  textWhite: false
};

var DataTableTable = function DataTableTable(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable,
    sorted: sorted
  }), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), React.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: propTypes.bool.isRequired,
  bordered: propTypes.bool.isRequired,
  borderless: propTypes.bool.isRequired,
  btn: propTypes.bool.isRequired,
  dark: propTypes.bool.isRequired,
  fixed: propTypes.bool.isRequired,
  hover: propTypes.bool.isRequired,
  handleSort: propTypes.func.isRequired,
  responsive: propTypes.bool.isRequired,
  responsiveSm: propTypes.bool.isRequired,
  responsiveMd: propTypes.bool.isRequired,
  responsiveLg: propTypes.bool.isRequired,
  responsiveXl: propTypes.bool.isRequired,
  sortable: propTypes.bool.isRequired,
  sorted: propTypes.bool.isRequired,
  small: propTypes.bool.isRequired,
  striped: propTypes.bool.isRequired,
  theadColor: propTypes.string.isRequired,
  theadTextWhite: propTypes.bool.isRequired,
  tbodyColor: propTypes.string.isRequired,
  tbodyTextWhite: propTypes.bool.isRequired,
  columns: propTypes.arrayOf(propTypes.object),
  rows: propTypes.arrayOf(propTypes.object),
  children: propTypes.node
};

var DataTableTableScroll = function DataTableTableScroll(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      handleSort = props.handleSort,
      handleTableBodyScroll = props.handleTableBodyScroll,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveSm = props.responsiveSm,
      responsiveMd = props.responsiveMd,
      responsiveLg = props.responsiveLg,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      translateScrollHead = props.translateScrollHead,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "handleTableBodyScroll", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  return React.createElement("div", {
    className: "col-sm-12"
  }, React.createElement("div", {
    className: "dataTables_scroll"
  }, React.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, React.createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: "relative",
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: "content-box",
      paddingRight: "15px",
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    }
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable,
    sorted: sorted
  })))), React.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, React.createElement(Table, _extends({
    style: {
      minWidth: "".concat(scrollX ? columns.map(function (col) {
        return col.width;
      }).reduce(function (prev, curr) {
        return prev + curr;
      }, 0) + "px" : "auto")
    },
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    maxHeight: maxHeight,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    scrollY: scrollY,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: propTypes.bool.isRequired,
  bordered: propTypes.bool.isRequired,
  borderless: propTypes.bool.isRequired,
  btn: propTypes.bool.isRequired,
  dark: propTypes.bool.isRequired,
  fixed: propTypes.bool.isRequired,
  hover: propTypes.bool.isRequired,
  handleSort: propTypes.func.isRequired,
  handleTableBodyScroll: propTypes.func.isRequired,
  responsive: propTypes.bool.isRequired,
  responsiveSm: propTypes.bool.isRequired,
  responsiveMd: propTypes.bool.isRequired,
  responsiveLg: propTypes.bool.isRequired,
  responsiveXl: propTypes.bool.isRequired,
  sortable: propTypes.bool.isRequired,
  sorted: propTypes.bool.isRequired,
  small: propTypes.bool.isRequired,
  striped: propTypes.bool.isRequired,
  theadColor: propTypes.string.isRequired,
  theadTextWhite: propTypes.bool.isRequired,
  tbodyColor: propTypes.string.isRequired,
  tbodyTextWhite: propTypes.bool.isRequired,
  translateScrollHead: propTypes.number.isRequired,
  columns: propTypes.arrayOf(propTypes.object),
  rows: propTypes.arrayOf(propTypes.object),
  children: propTypes.node,
  maxHeight: propTypes.string,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool
};

var DataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      entries = _ref.entries,
      label = _ref.label;

  var getValue = function getValue(e) {
    var value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return React.createElement("div", {
    className: "dataTables_length bs-select"
  }, React.createElement("label", null, label, React.createElement("select", {
    value: value,
    onChange: getValue,
    className: "custom-select custom-select-sm form-control form-control-sm",
    style: {
      marginLeft: ".5rem"
    }
  }, entries.map(function (entry) {
    return React.createElement("option", {
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  entries: propTypes.arrayOf(propTypes.number).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]).isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired
};

var DataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
      displayEntries = props.displayEntries,
      entries = props.entries,
      entriesArr = props.entriesArr,
      paging = props.paging,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && displayEntries && React.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label,
    barReverse: barReverse
  }));
};

DataTableEntries.propTypes = {
  barReverse: propTypes.bool,
  handleEntriesChange: propTypes.func.isRequired,
  displayEntries: propTypes.bool.isRequired,
  entries: propTypes.number.isRequired,
  entriesArr: propTypes.arrayOf(propTypes.number).isRequired,
  paging: propTypes.bool.isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]).isRequired
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label;
  return React.createElement("div", {
    className: "dataTables_filter"
  }, React.createElement("label", null, label || "Search", React.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  })));
};

DataTableInput.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  onChange: propTypes.func,
  value: propTypes.string
};

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && React.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label,
    barReverse: barReverse
  }));
};

DataTableSearch.propTypes = {
  barReverse: propTypes.bool,
  handleSearchChange: propTypes.func.isRequired,
  search: propTypes.string.isRequired,
  searching: propTypes.bool.isRequired,
  label: propTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      pages = props.pages,
      label = props.label;
  return React.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && React.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};

DataTableInfo.propTypes = {
  activePage: propTypes.number.isRequired,
  entries: propTypes.number.isRequired,
  filteredRows: propTypes.array.isRequired,
  info: propTypes.bool.isRequired,
  pages: propTypes.array.isRequired,
  label: propTypes.arrayOf(propTypes.string)
};
DataTableInfo.defaultProps = {
  label: ["Showing", "to", "of", "entries"]
};

var Pagination = function Pagination(props) {
  var _classNames;

  var children = props.children,
      circle = props.circle,
      className = props.className,
      color = props.color,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutProperties(props, ["children", "circle", "className", "color", "tag", "size"]);

  var classes = classNames((_classNames = {
    "pagination-circle": circle
  }, _defineProperty(_classNames, "pg-".concat(color), color), _defineProperty(_classNames, "pagination-".concat(size), size), _classNames), "pagination", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Pagination.propTypes = {
  children: propTypes.node,
  circle: propTypes.bool,
  className: propTypes.string,
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  size: propTypes.oneOf(["lg", "sm"])
};
Pagination.defaultProps = {
  circle: false,
  className: "",
  color: "",
  tag: "ul"
};

var PageItem = function PageItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "className", "children", "disabled", "tag"]);

  var classes = classNames("page-item", disabled && "disabled", active && "active", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PageItem.propTypes = {
  active: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  disabled: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  tag: "li"
};

var PageLink = function PageLink(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames("page-link", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PageLink.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
PageLink.defaultProps = {
  tag: "a"
};

var DataTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTablePagination, _Component);

  function DataTablePagination(props) {
    var _this;

    _classCallCheck(this, DataTablePagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTablePagination).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.pages !== _this.props.pages) {
        _this.setState({
          pages: _this.props.pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pagesIndexify", function () {
      var mutablePages = _toConsumableArray(_this.state.pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_this), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, _this.props.pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "choosePagesGroup", function () {
      var pGroupNumber = Math.floor(_this.props.activePage / _this.props.pagesAmount);
      return _this.state.pGroups.length ? _this.state.pGroups[pGroupNumber] : [];
    });

    _this.state = {
      pages: props.pages,
      pGroups: []
    };
    return _this;
  }

  _createClass(DataTablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.groupPages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activePage = _this$props.activePage,
          changeActivePage = _this$props.changeActivePage,
          pages = _this$props.pages,
          label = _this$props.label;
      return React.createElement("div", {
        className: "col-sm-12 col-md-7"
      }, React.createElement("div", {
        className: "dataTables_paginate"
      }, React.createElement(Pagination, null, React.createElement(PageItem, {
        disabled: activePage <= 0
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, page.index === activePage && React.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React.createElement(PageItem, {
        disabled: !pages.length || activePage === pages.length - 1
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(Component);

DataTablePagination.propTypes = {
  activePage: propTypes.number.isRequired,
  changeActivePage: propTypes.func.isRequired,
  pages: propTypes.array.isRequired,
  pagesAmount: propTypes.number.isRequired,
  label: propTypes.arrayOf(propTypes.string).isRequired
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setUnsearchable", function (columns) {
      var unsearchable = [];
      columns.forEach(function (column) {
        if (column.searchable !== undefined && column.searchable === false) {
          unsearchable.push(column.field);
        }
      });

      _this.setState({
        unsearchable: unsearchable
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function (link) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRowsInitialy", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.rows.length / _this.state.entries);

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * _this.state.entries;

        _this.state.pages.push(_this.state.rows.slice(pageEndIndex - _this.state.entries, pageEndIndex));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkFieldValue", function (array, field) {
      return array[field] && typeof array[field] !== "string" ? array[field].props.searchValue : array[field];
    });

    _defineProperty(_assertThisInitialized(_this), "checkField", function (field, a, b) {
      var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "desc";
      var _ref = [_this.checkFieldValue(a, field), _this.checkFieldValue(b, field)],
          aField = _ref[0],
          bField = _ref[1];
      return direction === "desc" ? aField < bField : aField > bField;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (field, sort) {
      if (sort !== "disabled") {
        _this.setState(function (prevState) {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort(function (a, b) {
                if (_this.props.sortRows && _this.props.sortRows.includes(field)) {
                  return _this.checkField(field, a, b);
                }

                return a[field] > b[field] ? -1 : 1;
              });
              break;

            default:
              prevState.rows.sort(function (a, b) {
                if (_this.props.sortRows && _this.props.sortRows.includes(field)) {
                  return _this.checkField(field, a, b, "asc");
                }

                return a[field] < b[field] ? -1 : 1;
              });
          }

          prevState.columns.forEach(function (col) {
            if (col.sort === "disabled") return;
            col.sort = col.field === field ? col.sort === "desc" ? "asc" : "desc" : "";
          });
          return {
            rows: prevState.rows,
            columns: prevState.columns,
            sorted: true
          };
        }, function () {
          return _this.filterRows();
        });
      } else return;
    });

    _defineProperty(_assertThisInitialized(_this), "filterRows", function () {
      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if ((!_this.state.unsearchable.length || !_this.state.unsearchable.includes(key)) && typeof row[key] !== "function") {
                var stringValue = "";

                if (_this.props.sortRows && typeof row[key] !== "string") {
                  stringValue = row[key].props.searchValue;
                } else {
                  if (row[key]) {
                    stringValue = row[key].toString();
                  }
                }

                if (stringValue.toLowerCase().match(_this.state.search.toLowerCase())) return true;
              }
            }
          }

          return false;
        });
        if (filteredRows.length === 0) filteredRows.push({
          message: "No matching records found",
          colspan: prevState.columns.length
        });
        return {
          filteredRows: filteredRows,
          activePage: 0
        };
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRows", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.filteredRows.length / _this.state.entries);

      _this.setState(function (prevState) {
        prevState.pages = [];

        if (_this.props.paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * prevState.entries;
            prevState.pages.push(prevState.filteredRows.slice(pageEndIndex - prevState.entries, pageEndIndex));
          }

          prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1;
        } else {
          prevState.pages.push(prevState.filteredRows);
          prevState.activePage = 0;
        }

        return _objectSpread({}, prevState);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeActivePage", function (page) {
      _this.setState({
        activePage: page
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });

    _this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: "",
      unsearchable: [],
      translateScrollHead: 0,
      order: props.order || [],
      sorted: false
    };

    if (_this.props.paging) {
      _this.paginateRowsInitialy();
    } else {
      _this.state.pages.push(_this.state.rows);
    }

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.data === "string") {
        this.fetchData(this.props.data);
      }

      this.state.order.length && this.handleSort(this.state.order[0], this.state.order[1]);
      this.setUnsearchable(this.state.columns);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevProps.data !== this.props.data) {
        if (typeof this.props.data === "string") {
          this.fetchData(this.props.data);
        } else {
          this.setState({
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          }, function () {
            return _this2.paginateRows();
          });
        }

        this.setUnsearchable(this.state.columns);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          barReverse = _this$props.barReverse,
          btn = _this$props.btn,
          className = _this$props.className,
          children = _this$props.children,
          dark = _this$props.dark,
          data = _this$props.data,
          displayEntries = _this$props.displayEntries,
          entriesOptions = _this$props.entriesOptions,
          entriesLabel = _this$props.entriesLabel,
          exportToCSV = _this$props.exportToCSV,
          fixed = _this$props.fixed,
          hover = _this$props.hover,
          info = _this$props.info,
          infoLabel = _this$props.infoLabel,
          maxHeight = _this$props.maxHeight,
          order = _this$props.order,
          pagesAmount = _this$props.pagesAmount,
          paging = _this$props.paging,
          paginationLabel = _this$props.paginationLabel,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          searching = _this$props.searching,
          searchLabel = _this$props.searchLabel,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY,
          small = _this$props.small,
          sortable = _this$props.sortable,
          striped = _this$props.striped,
          tbodyColor = _this$props.tbodyColor,
          tbodyTextWhite = _this$props.tbodyTextWhite,
          theadColor = _this$props.theadColor,
          theadTextWhite = _this$props.theadTextWhite,
          sortRows = _this$props.sortRows,
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "barReverse", "btn", "className", "children", "dark", "data", "displayEntries", "entriesOptions", "entriesLabel", "exportToCSV", "fixed", "hover", "info", "infoLabel", "maxHeight", "order", "pagesAmount", "paging", "paginationLabel", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "searching", "searchLabel", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "sortRows"]);

      var _this$state = this.state,
          columns = _this$state.columns,
          entries = _this$state.entries,
          filteredRows = _this$state.filteredRows,
          pages = _this$state.pages,
          activePage = _this$state.activePage,
          search = _this$state.search,
          translateScrollHead = _this$state.translateScrollHead;
      var tableClasses = classNames(className && "".concat(className), "dataTables_wrapper dt-bootstrap4");
      return React.createElement("div", {
        className: tableClasses
      }, React.createElement("div", {
        className: "row".concat(barReverse ? ' flex-row-reverse' : '')
      }, React.createElement(DataTableEntries, {
        paging: paging,
        displayEntries: displayEntries,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel,
        barReverse: barReverse
      }), React.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel,
        barReverse: barReverse
      })), !scrollY && !scrollX && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTable, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        hover: hover,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        sorted: this.state.sorted
      }, attributes))), (scrollY || scrollX) && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTableScroll, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        handleTableBodyScroll: this.handleTableBodyScroll,
        hover: hover,
        maxHeight: maxHeight,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        scrollX: scrollX,
        scrollY: scrollY,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        sorted: this.state.sorted,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), React.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })));
    }
  }]);

  return DataTable;
}(Component);

DataTable.propTypes = {
  autoWidth: propTypes.bool,
  barReverse: propTypes.bool,
  bordered: propTypes.bool,
  borderless: propTypes.bool,
  btn: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node,
  dark: propTypes.bool,
  data: propTypes.oneOfType([propTypes.object, propTypes.string]),
  displayEntries: propTypes.bool,
  entries: propTypes.number,
  entriesLabel: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object]),
  entriesOptions: propTypes.arrayOf(propTypes.number),
  exportToCSV: propTypes.bool,
  fixed: propTypes.bool,
  hover: propTypes.bool,
  info: propTypes.bool,
  infoLabel: propTypes.arrayOf(propTypes.string),
  maxHeight: propTypes.string,
  order: propTypes.arrayOf(propTypes.string),
  pagesAmount: propTypes.number,
  paging: propTypes.bool,
  paginationLabel: propTypes.arrayOf(propTypes.string),
  responsive: propTypes.bool,
  responsiveSm: propTypes.bool,
  responsiveMd: propTypes.bool,
  responsiveLg: propTypes.bool,
  responsiveXl: propTypes.bool,
  searching: propTypes.bool,
  searchLabel: propTypes.string,
  scrollX: propTypes.bool,
  scrollY: propTypes.bool,
  sortable: propTypes.bool,
  sortRows: propTypes.arrayOf(propTypes.string),
  small: propTypes.bool,
  striped: propTypes.bool,
  theadColor: propTypes.string,
  theadTextWhite: propTypes.bool,
  tbodyColor: propTypes.string,
  tbodyTextWhite: propTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  displayEntries: true,
  entries: 10,
  entriesLabel: "Show entries",
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ["Showing", "to", "of", "entries"],
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ["Previous", "Next"],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: "Search",
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: "",
  theadTextWhite: false,
  tbodyColor: "",
  tbodyTextWhite: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isOpen: this.state.isOpen,
        dropup: this.props.dropup,
        dropright: this.props.dropright,
        dropleft: this.props.dropleft,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      if (this.state.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return ReactDOM.findDOMNode(this);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      ["click", "touchstart", "keyup"].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== "keyup" || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;
      var container = this.getContainer();

      if (e.which === keyCodes.space && this.state.isOpen && container !== e.target) {
        e.target.click();
      }

      if (e.which === keyCodes.esc || !this.state.isOpen) {
        this.toggle(e);
        container.querySelector("[aria-expanded]").focus();
        return;
      }

      var menuClass = "dropdown-menu";
      var itemClass = "dropdown-item";
      var disabledClass = "disabled";
      var items = container.querySelectorAll(".".concat(menuClass, " .").concat(itemClass, ":not(.").concat(disabledClass, ")"));
      if (!items.length) return;
      var index = -1;

      for (var i = 0; i < items.length; i += 1) {
        if (items[i] === e.target) {
          index = i;
          break;
        }
      }

      if (e.which === keyCodes.up && index > 0) {
        index -= 1;
      }

      if (e.which === keyCodes.down && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ["toggle", "disabled"]),
          className = _omit.className,
          children = _omit.children,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          dropright = _omit.dropright,
          dropleft = _omit.dropleft;

      var classes = classNames((_classNames = {
        "btn-group": group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", this.state.isOpen), _defineProperty(_classNames, "dropup", dropup), _defineProperty(_classNames, "dropright", dropright), _defineProperty(_classNames, "dropleft", dropleft), _classNames), className);
      return React.createElement(Manager, null, React.createElement("div", {
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  disabled: propTypes.bool,
  dropup: propTypes.bool,
  dropright: propTypes.bool,
  dropleft: propTypes.bool,
  group: propTypes.bool,
  size: propTypes.string,
  tag: propTypes.string,
  toggle: propTypes.func,
  children: propTypes.node,
  className: propTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  dropright: false,
  dropleft: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: propTypes.func.isRequired,
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired
};

var propTypes$1 = {
  children: propTypes.node,
  active: propTypes.bool,
  disabled: propTypes.bool,
  divider: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  header: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  toggle: propTypes.bool
};
var contextTypes = {
  toggle: propTypes.func
};
var defaultProps = {
  tag: "button",
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownItem).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return "-1";
      }

      return "0";
    }
  }, {
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ["toggle"]),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "active"]);

      var classes = classNames({
        disabled: props.disabled,
        "dropdown-item": !divider && !header,
        active: active,
        "dropdown-header": header,
        "dropdown-divider": divider
      }, className);

      if (Tag === "button") {
        if (header) {
          Tag = "h6";
        } else if (divider) {
          Tag = "div";
        } else if (props.href) {
          Tag = "a";
        }
      }

      return React.createElement(Tag, _extends({
        type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = propTypes$1;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

var DropdownMenuComponent = function DropdownMenuComponent(_ref) {
  var Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React.createElement(Tag, _extends({
    tabIndex: tabIndex,
    role: role
  }, attributes, {
    "aria-hidden": aria,
    key: d_key
  }), children);
};

DropdownMenuComponent.propTypes = {
  aria: propTypes.bool.isRequired,
  attributes: propTypes.object.isRequired,
  d_key: propTypes.string.isRequired,
  role: propTypes.string.isRequired,
  tabIndex: propTypes.string.isRequired,
  tag: propTypes.any.isRequired,
  children: propTypes.node.isRequired
};

var css$5 = ".dropup .dropdown-menu {\n  top: auto !important;\n  bottom: 100% !important;\n  transform: translate3d(5px, 5px, 0px) !important;\n}\n\n.dropdown-menu-right {\n  left: 0 !important;\n  right: auto !important;\n}\n";
styleInject(css$5);

var noFlipModifier = {
  flip: {
    enabled: false
  }
};

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          basic = _this$props.basic,
          className = _this$props.className,
          right = _this$props.right,
          children = _this$props.children,
          tag = _this$props.tag,
          flip = _this$props.flip,
          color = _this$props.color,
          attrs = _objectWithoutProperties(_this$props, ["basic", "className", "right", "children", "tag", "flip", "color"]);

      var classes = classNames('dropdown-menu', color && "dropdown-".concat(color), {
        'dropdown-menu-right': right,
        show: this.context.isOpen,
        basic: basic
      }, className);
      var Tag = tag;

      if (this.context.isOpen) {
        var position1 = this.context.dropup ? 'top' : this.context.dropright ? 'right' : this.context.dropleft ? 'left' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
        attrs.modifiers = !flip ? noFlipModifier : undefined;
      }

      return React.createElement(Popper$1, {
        modifires: attrs.modifiers,
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement
      }, function (_ref) {
        var placement = _ref.placement,
            ref = _ref.ref,
            style = _ref.style;
        return React.createElement(Tag, {
          ref: ref,
          style: style,
          "data-placement": placement,
          className: classes
        }, React.createElement(DropdownMenuComponent, {
          isOpen: _this.context.isOpen,
          tag: Tag,
          tabIndex: "-1",
          role: "menu",
          attributes: attrs,
          aria: !_this.context.isOpen,
          d_key: "dropDownMenu",
          color: color
        }, children));
      });
    }
  }]);

  return DropdownMenu;
}(Component);

DropdownMenu.propTypes = {
  children: propTypes.node.isRequired,
  basic: propTypes.bool,
  className: propTypes.string,
  flip: propTypes.bool,
  right: propTypes.bool,
  tag: propTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: false,
  right: false,
  tag: 'div',
  color: false
};
DropdownMenu.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  dropup: propTypes.bool.isRequired,
  dropright: propTypes.bool.isRequired,
  dropleft: propTypes.bool.isRequired,
  color: propTypes.oneOfType([propTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), propTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _classCallCheck(this, DropdownToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          caret = _this$props.caret,
          nav = _this$props.nav,
          tag = _this$props.tag,
          props = _objectWithoutProperties(_this$props, ["className", "color", "caret", "nav", "tag"]);

      var ariaLabel = props["aria-label"] || "Toggle Dropdown";
      var classes = classNames({
        "dropdown-toggle": caret,
        "nav-link": nav
      }, className);
      var children = props.children || React.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag;

      if (nav && !tag) {
        Tag = "a";
        props.href = "#";
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      } else {
        Tag = tag;
      }

      return React.createElement(Reference, null, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          ref: ref
        }), children) : React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  caret: propTypes.bool,
  color: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  "aria-haspopup": propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  nav: propTypes.bool
};
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "secondary"
};
DropdownToggle.contextTypes = {
  isOpen: propTypes.bool.isRequired,
  toggle: propTypes.func.isRequired
};

var EdgeHeader = function EdgeHeader(props) {
  var color = props.color,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "className", "tag"]);

  var classes = classNames("edge-header", color, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

EdgeHeader.propTypes = {
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
EdgeHeader.defaultProps = {
  color: "deep-purple",
  tag: "div"
};

var Footer = function Footer(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "children", "className", "tag"]);

  var classes = classNames("page-footer", color && color, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Footer.propTypes = {
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
Footer.defaultProps = {
  tag: "footer"
};

var FormInline = function FormInline(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      waves = props.waves,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "waves", "children"]);

  var classes = classNames("form-inline", props.waves && "Ripple-parent", className);
  return React.createElement("form", _extends({}, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), props.children, props.waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

FormInline.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  waves: propTypes.bool
};

var FreeBird = function FreeBird(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames("container free-bird", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FreeBird.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string
};
FreeBird.defaultProps = {
  tag: "div"
};

var css$6 = ".hamburger-button__checkbox {\n  display: none;\n}\n\n.hamburger-button__button {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  top: -5px;\n}\n\nlabel.hamburger-button__button {\n  margin-bottom: 0;\n}\n\n#nav-icon1 {\n  width: 1.5em;\n  height: 1.5em;\n  position: relative;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .5s ease-in-out;\n  -moz-transition: .5s ease-in-out;\n  -o-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  cursor: pointer;\n}\n\n#nav-icon1 span {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  border-radius: 1px;\n  background-color: #fff;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .25s ease-in-out;\n  -moz-transition: .25s ease-in-out;\n  -o-transition: .25s ease-in-out;\n  transition: .25s ease-in-out;\n}\n\n#nav-icon1 span:nth-child(1) {\n  top: 5px;\n}\n\n#nav-icon1 span:nth-child(2) {\n  top: 16px;\n}\n\n#nav-icon1 span:nth-child(3) {\n  top: 27px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\n  top: 16px;\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\n  opacity: 0;\n  left: -60px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\n  top: 16px;\n  -webkit-transform: rotate(-135deg);\n  -moz-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n";
styleInject(css$6);

var HamburgerToggler = function HamburgerToggler(props) {
  var id = props.id,
      color = props.color,
      className = props.className,
      isOpen = props.isOpen,
      onClick = props.onClick;
  var classes = classNames("hamburger-button__button", className);
  return React.createElement(React.Fragment, null, React.createElement("input", {
    type: "checkbox",
    defaultChecked: isOpen || false,
    onChange: onClick,
    className: "hamburger-button__checkbox",
    id: id
  }), React.createElement("label", {
    id: "nav-icon1",
    className: classes,
    htmlFor: id
  }, React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  })));
};

HamburgerToggler.propTypes = {
  id: propTypes.string,
  color: propTypes.string,
  className: propTypes.string
};

var Iframe =
/*#__PURE__*/
function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Iframe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: "",
      height: "",
      ratio: ""
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var width = _this.props.width;
      var height = _this.props.height;
      var ratio = 9 / 16;

      if (_this.props.ratio) {
        var newRatio = _this.props.ratio.split("by")[0] / _this.props.ratio.split("by")[1];

        if (typeof ratio === "number") ratio = newRatio;
      }

      if (_this.props.width && _this.props.height) {
        return;
      } else if (_this.props.width) {
        height = _this.props.width * ratio;
      } else if (_this.props.height) {
        width = _this.props.height * (1 / ratio);
      }

      _this.setState(_objectSpread({}, _this.state, {
        width: width,
        height: height,
        ratio: ratio
      }));
    });

    return _this;
  }

  _createClass(Iframe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          allowFullScreen = _this$props.allowFullScreen,
          className = _this$props.className,
          id = _this$props.id,
          name = _this$props.name,
          onMouseOver = _this$props.onMouseOver,
          onMouseOut = _this$props.onMouseOut,
          onLoad = _this$props.onLoad,
          sandbox = _this$props.sandbox,
          src = _this$props.src,
          style = _this$props.style,
          title = _this$props.title,
          ratio = _this$props.ratio,
          height = _this$props.height,
          width = _this$props.width;
      var classes = classNames("embed-responsive-item", className);
      var wrapperClasses = classNames(!(height || width) && "embed-responsive", ratio ? "embed-responsive-".concat(ratio) : "embed-responsive-16by9", className);
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: "0",
        target: "_parent",
        allowFullScreen: allowFullScreen || true,
        height: this.state.height || "100%",
        name: name || undefined,
        width: this.state.width || "100%",
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = returnAttributes(iframeAttributes);
      return React.createElement("div", {
        className: wrapperClasses
      }, React.createElement("iframe", _extends({
        title: title || "",
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(Component);

Iframe.propTypes = {
  allowFullScreen: propTypes.bool,
  className: propTypes.string,
  height: propTypes.number,
  id: propTypes.string,
  name: propTypes.string,
  onMouseOver: propTypes.func,
  onMouseOut: propTypes.func,
  onLoad: propTypes.func,
  ratio: propTypes.string,
  sandbox: propTypes.string,
  src: propTypes.string.isRequired,
  styles: propTypes.object,
  width: propTypes.number,
  title: propTypes.string
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onChange && _this.props.onChange(event);
      _this.props.getValue && _this.props.getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onInput && _this.props.onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = React.createRef();
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          background = _this$props.background,
          children = _this$props.children,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          disabled = _this$props.disabled,
          error = _this$props.error,
          filled = _this$props.filled,
          gap = _this$props.gap,
          getValue = _this$props.getValue,
          group = _this$props.group,
          hint = _this$props.hint,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          onIconClick = _this$props.onIconClick,
          onIconMouseEnter = _this$props.onIconMouseEnter,
          onIconMouseLeave = _this$props.onIconMouseLeave,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          id = _this$props.id,
          inputRef = _this$props.inputRef,
          noTag = _this$props.noTag,
          outline = _this$props.outline,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          size = _this$props.size,
          success = _this$props.success,
          Tag = _this$props.tag,
          type = _this$props.type,
          validate = _this$props.validate,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          attributes = _objectWithoutProperties(_this$props, ["background", "children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "onIconClick", "onIconMouseEnter", "onIconMouseLeave", "iconRegular", "iconSize", "id", "inputRef", "noTag", "outline", "label", "labelClass", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var isNotEmpty = (!!this.state.innerValue || !!hint || this.state.isFocused || this.state.innerValue === 0) && type !== "checkbox" && type !== "radio";
      var TagInput = "";
      var formControlClass = "";

      if (type === "textarea") {
        formControlClass = outline ? "form-control" : "md-textarea form-control";
        TagInput = "textarea";
      } else {
        formControlClass = "form-control";
        TagInput = "input";
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? "validate" : false, filled ? "filled-in" : false, gap ? "with-gap" : false, type === "checkbox" ? gap ? false : "form-check-input" : false, type === "radio" ? "form-check-input" : false, className);
      var containerClassFix = classNames(type === "checkbox" || type === "radio" ? typeof label === "boolean" && label ? "d-flex" : "form-check my-3" : "md-form", group ? "form-group" : false, size ? "form-".concat(size) : false, outline && "md-outline", background && "md-bg", containerClass);
      var iconClassFix = classNames(isNotEmpty && this.state.isFocused ? "active" : false, iconClass, "prefix");
      var labelClassFix = classNames(isNotEmpty ? "active" : false, disabled ? "disabled" : false, type === "checkbox" ? typeof label === "boolean" && label ? "form-check-label" : "form-check-label mr-5" : false, type === "radio" ? typeof label === "boolean" && label ? "form-check-label" : "form-check-label mr-5" : false, labelClass);

      var renderFunction = function renderFunction() {
        return React.createElement(React.Fragment, null, icon && React.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix,
          onClick: onIconClick ? onIconClick : _this2.setFocus,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave
        }), React.createElement(TagInput, _extends({}, attributes, {
          className: classes,
          id: id,
          placeholder: hint,
          ref: _this2.inputElementRef,
          value: _this2.state.innerValue,
          onBlur: _this2.onBlur,
          onChange: _this2.onChange,
          onInput: _this2.onInput,
          onFocus: _this2.onFocus
        })), label && React.createElement("label", {
          className: labelClassFix,
          htmlFor: id,
          "data-error": error,
          "data-success": success,
          id: id,
          onClick: _this2.setFocus
        }, label), children);
      };

      return noTag ? renderFunction() : React.createElement(Tag, {
        className: containerClassFix
      }, renderFunction());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  containerClass: propTypes.string,
  disabled: propTypes.bool,
  error: propTypes.string,
  filled: propTypes.bool,
  gap: propTypes.bool,
  getValue: propTypes.func,
  group: propTypes.bool,
  hint: propTypes.string,
  icon: propTypes.string,
  iconBrand: propTypes.bool,
  iconClass: propTypes.string,
  iconLight: propTypes.bool,
  onIconClick: propTypes.func,
  onIconMouseEnter: propTypes.func,
  onIconMouseLeave: propTypes.func,
  iconRegular: propTypes.bool,
  iconSize: propTypes.string,
  id: propTypes.string,
  inputRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
  label: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.object, propTypes.bool]),
  labelClass: propTypes.string,
  noTag: propTypes.bool,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onInput: propTypes.func,
  outline: propTypes.bool,
  size: propTypes.string,
  success: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  validate: propTypes.bool,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  valueDefault: propTypes.oneOfType([propTypes.number, propTypes.string])
};
Input.defaultProps = {
  className: "",
  containerClass: "",
  disabled: false,
  error: "",
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: "",
  iconBrand: false,
  iconClass: "",
  iconLight: false,
  onIconMouseEnter: function onIconMouseEnter() {},
  onIconMouseLeave: function onIconMouseLeave() {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  noTag: false,
  outline: false,
  label: "",
  labelClass: "",
  size: "",
  success: "",
  tag: "div",
  type: "text",
  validate: false,
  valueDefault: ""
};

var InputGroup = function InputGroup(_ref) {
  var append = _ref.append,
      appendClassName = _ref.appendClassName,
      ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      containerId = _ref.containerId,
      hint = _ref.hint,
      id = _ref.id,
      inputs = _ref.inputs,
      inputTag = _ref.inputTag,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      material = _ref.material,
      prepend = _ref.prepend,
      prependClassName = _ref.prependClassName,
      size = _ref.size,
      Tag = _ref.tag,
      textClassName = _ref.textClassName,
      type = _ref.type,
      value = _ref.value,
      valueDefault = _ref.valueDefault,
      attributes = _objectWithoutProperties(_ref, ["append", "appendClassName", "ariaLabel", "children", "className", "containerClassName", "containerId", "hint", "id", "inputs", "inputTag", "label", "labelClassName", "material", "prepend", "prependClassName", "size", "tag", "textClassName", "type", "value", "valueDefault"]);

  var containerClassNames = classNames("input-group", material && "md-form", size && "input-group-".concat(size), containerClassName);
  var inputClassNames = classNames(className);
  var prependClassNames = classNames("input-group-prepend", prependClassName);
  var appendClassNames = classNames("input-group-append", appendClassName);
  var textClassNames = classNames("input-group-text", material && "md-addon", textClassName);
  return React.createElement(React.Fragment, null, label && React.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), React.createElement(Tag, _extends({}, attributes, {
    className: containerClassNames,
    id: containerId
  }), prepend && React.createElement("div", {
    className: prependClassNames
  }, typeof prepend === "string" ? React.createElement("span", {
    className: textClassNames
  }, prepend) : prepend), inputs || React.createElement(Input, {
    noTag: true,
    type: type,
    className: inputClassNames,
    id: id,
    value: value,
    valueDefault: valueDefault,
    hint: hint,
    "aria-label": ariaLabel
  }), append && React.createElement("div", {
    className: appendClassNames
  }, typeof append === "string" ? React.createElement("span", {
    className: textClassNames
  }, append) : append), children));
};

InputGroup.propTypes = {
  append: propTypes.oneOfType([propTypes.node, propTypes.string]),
  appendClassNames: propTypes.string,
  ariaLabel: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  containerClassName: propTypes.string,
  containerId: propTypes.string,
  hint: propTypes.string,
  id: propTypes.string,
  inputs: propTypes.node,
  label: propTypes.string,
  labelClassName: propTypes.string,
  material: propTypes.bool,
  prepend: propTypes.any,
  prependClassName: propTypes.string,
  size: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  textClassName: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  valueDefault: propTypes.string
};
InputGroup.defaultProps = {
  tag: "div",
  type: "text"
};

var InputNumeric = function InputNumeric(props) {
  var onChangeHandler = function onChangeHandler(value) {
    props.getValue && props.getValue(value);
  };

  var className = props.className,
      getValue = props.getValue,
      attributes = _objectWithoutProperties(props, ["className", "getValue"]);

  var classes = classNames("form-control", className);
  return React.createElement(NumericInput, _extends({}, attributes, {
    onChange: onChangeHandler,
    className: classes
  }));
};

InputNumeric.propTypes = {
  className: propTypes.string,
  getValue: propTypes.func
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      children = props.children,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["className", "children", "fluid"]);

  var classes = classNames("jumbotron", fluid ? "jumbotron-fluid" : false, className);
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

Jumbotron.propTypes = {
  fluid: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames("list-group", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

ListGroup.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node
};
ListGroup.defaultProps = {
  tag: "ul"
};

var ListGroupItem = function ListGroupItem(props) {
  var _classNames;

  var active = props.active,
      children = props.children,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      hover = props.hover,
      success = props.success,
      info = props.info,
      warning = props.warning,
      danger = props.danger,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

  var classes = classNames("list-group-item", className, (_classNames = {
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), " color"), _defineProperty(_classNames, "list-group-item-action", hover), _classNames));

  if (attributes.href && Tag === "li") {
    Tag = "a";
  }

  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

ListGroupItem.propTypes = {
  active: propTypes.bool,
  disabled: propTypes.bool,
  hover: propTypes.bool,
  success: propTypes.bool,
  info: propTypes.bool,
  warning: propTypes.bool,
  danger: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"])
};
ListGroupItem.defaultProps = {
  tag: "li"
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      round = props.round,
      thumbnail = props.thumbnail,
      figure = props.figure,
      figImg = props.figImg,
      figCap = props.figCap,
      figCapRight = props.figCapRight,
      figCapLeft = props.figCapLeft,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutProperties(props, ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"]);

  var defaultTag;

  if (heading) {
    defaultTag = "h4";
  } else if (left || right) {
    defaultTag = "a";
  } else if (object || figImg) {
    defaultTag = "img";
  } else if (list) {
    defaultTag = "ul";
  } else if (figure) {
    defaultTag = "figure";
  } else if (figCap || figCapRight || figCapLeft) {
    defaultTag = "figcaption";
  } else {
    defaultTag = "div";
  }

  var Tag = tag || defaultTag;
  var classes = classNames({
    "media-body": body,
    "mt-0": heading,
    "media-left": left,
    "media-right": right,
    "align-self-start": top,
    "align-self-center": middle,
    "align-self-end": bottom,
    "media-object": object,
    "img-thumbnail": thumbnail,
    "media-list": list,
    figure: figure,
    "figure-img": figImg,
    "figure-caption text-center": figCap,
    "figure-caption text-right": figCapRight,
    "figure-caption text-left": figCapLeft,
    "rounded-circle z-depth-1-half": round
  }, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? "media" : false, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Media.propTypes = {
  body: propTypes.bool,
  bottom: propTypes.bool,
  children: propTypes.node,
  className: propTypes.string,
  heading: propTypes.bool,
  figure: propTypes.bool,
  figImg: propTypes.bool,
  figCap: propTypes.bool,
  figCapRight: propTypes.bool,
  figCapLeft: propTypes.bool,
  left: propTypes.bool,
  list: propTypes.bool,
  middle: propTypes.bool,
  object: propTypes.bool,
  thumbnail: propTypes.bool,
  round: propTypes.bool,
  right: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  top: propTypes.bool
};

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.body.classList.add("modal-open");
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.body.classList.remove("modal-open");
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEntered", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.add("show");
      _this.props.autoFocus && node.focus();

      if (type === "modal") {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExit", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.remove("show");

      if (type === "modal") {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop || e.target.closest('[role="dialog"]') && !e.target.classList.contains("modal")) return;

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      if (e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          backdrop = _this$props.backdrop,
          backdropClassName = _this$props.backdropClassName,
          contentClassName = _this$props.contentClassName,
          className = _this$props.className,
          size = _this$props.size,
          side = _this$props.side,
          fullHeight = _this$props.fullHeight,
          frame = _this$props.frame,
          centered = _this$props.centered,
          position = _this$props.position,
          cascading = _this$props.cascading,
          modalStyle = _this$props.modalStyle,
          wrapClassName = _this$props.wrapClassName,
          animation = _this$props.animation,
          fade = _this$props.fade,
          tabIndex = _this$props.tabIndex,
          role = _this$props.role,
          id = _this$props.id,
          inline = _this$props.inline;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames("modal-dialog", className, size && "modal-".concat(size), side && "modal-side", fullHeight && "modal-full-height", frame && "modal-frame", centered && "modal-dialog-centered", position && "modal-".concat(this.props.position), cascading && "cascading-modal", modalStyle && "modal-notify white-text modal-".concat(this.props.modalStyle));
      var wrapperClasses = classNames(inline ? false : "modal", fade && "fade", wrapClassName, fade && (animation || position && position.split("-").slice(-1)[0] || "top"));
      var backdropClasses = classNames("modal-backdrop", fade ? "fade" : "show", backdropClassName);
      var contentClasses = classNames("modal-content", contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: "block"
        },
        id: id || undefined,
        tabIndex: tabIndex,
        role: role,
        "aria-hidden": "true"
      });
      return React.createElement(Fragment, null, backdrop && React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("backdrop", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("backdrop", node);
        },
        onExited: this.handleOnExited
      }, React.createElement("div", {
        className: backdropClasses
      })), React.createElement(Transition, {
        timeout: timeout,
        "in": this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onMouseDown: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("modal", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("modal", node);
        }
      }, React.createElement("div", _extends({
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  backdrop: true,
  fade: true,
  isOpen: false,
  autoFocus: true,
  role: "dialog",
  zIndex: 1050,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
  tabIndex: "-1"
};
Modal.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  backdrop: propTypes.bool,
  backdropClassName: propTypes.string,
  contentClassName: propTypes.string,
  modalClassName: propTypes.string,
  size: propTypes.string,
  side: propTypes.bool,
  fullHeight: propTypes.bool,
  frame: propTypes.bool,
  centered: propTypes.bool,
  position: propTypes.string,
  cascading: propTypes.bool,
  modalStyle: propTypes.string,
  wrapClassName: propTypes.string,
  animation: propTypes.string,
  fade: propTypes.bool,
  id: propTypes.string,
  role: propTypes.string,
  tabIndex: propTypes.string,
  showModal: propTypes.func,
  hiddenModal: propTypes.func,
  hideModal: propTypes.func
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames("modal-body", className);
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

ModalBody.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      children = props.children,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      attributes = _objectWithoutProperties(props, ["className", "children", "center", "start", "end", "around", "between"]);

  var classes = classNames("modal-footer", className, {
    "justify-content-start": start,
    "justify-content-end": end,
    "justify-content-center": center,
    "justify-content-between": between,
    "justify-content-around": around
  });
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

ModalFooter.propTypes = {
  className: propTypes.string,
  children: propTypes.node
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      closeAriaLabel = props.closeAriaLabel,
      titleClass = props.titleClass,
      attributes = _objectWithoutProperties(props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

  var classes = classNames("modal-header", className);
  var titleClasses = classNames("modal-title", titleClass);

  if (toggle) {
    closeButton = React.createElement("button", {
      type: "button",
      onClick: toggle,
      className: "close",
      "aria-label": closeAriaLabel
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, String.fromCharCode(215)));
  }

  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), React.createElement(Tag, {
    className: titleClasses
  }, children), closeButton);
};

ModalHeader.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  toggle: propTypes.func,
  className: propTypes.string,
  children: propTypes.node,
  closeAriaLabel: propTypes.string
};
ModalHeader.defaultProps = {
  tag: "h4",
  closeAriaLabel: "Close"
};

var Nav = function Nav(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      tabs = props.tabs,
      color = props.color,
      classicTabs = props.classicTabs,
      pills = props.pills,
      header = props.header,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

  var classes = classNames("nav", tabs && "md-tabs", pills && "md-pills", header && "nav-pills card-header-pills", color && !tabs && !classicTabs && !pills ? color : false, pills && color ? "pills-" + color : false, (tabs || classicTabs) && color ? "tabs-" + color : false, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  color: propTypes.string,
  classicTabs: propTypes.bool,
  pills: propTypes.bool,
  tabs: propTypes.bool,
  header: propTypes.bool
};
Nav.defaultProps = {
  tag: "ul",
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;

      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });

    _this.state = {
      isCollapsed: false
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.addEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.scrolling || this.props.scrollingNavbarOffset) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          expand = _this$props.expand,
          light = _this$props.light,
          dark = _this$props.dark,
          sticky = _this$props.sticky,
          fixed = _this$props.fixed,
          scrolling = _this$props.scrolling,
          color = _this$props.color,
          className = _this$props.className,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset,
          Tag = _this$props.tag,
          _double = _this$props["double"],
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var classes = classNames("navbar", light ? "navbar-light" : "", dark ? "navbar-dark" : "", sticky ? "sticky-" + sticky : "", fixed ? "fixed-" + fixed : "", getExpandClass(expand), scrolling || scrollingNavbarOffset ? "scrolling-navbar" : "", this.state.isCollapsed ? "top-nav-collapse" : "", color ? transparent ? this.state.isCollapsed ? color : "" : color : "", _double ? "double-nav" : "", className);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  light: propTypes.bool,
  dark: propTypes.bool,
  "double": propTypes.bool,
  fixed: propTypes.string,
  sticky: propTypes.string,
  scrolling: propTypes.bool,
  scrollingNavbarOffset: propTypes.number,
  color: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  expand: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  transparent: propTypes.bool
};
Navbar.defaultProps = {
  tag: "nav",
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames("navbar-brand", className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React.createElement(NavLink$1, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: propTypes.string,
  href: propTypes.string
};

var NavbarNav = function NavbarNav(props) {
  var children = props.children,
      className = props.className,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "right", "left", "tag"]);

  var classes = classNames("navbar-nav", right ? "ml-auto" : left ? "mr-auto" : "justify-content-around w-100", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavbarNav.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool
};
NavbarNav.defaultProps = {
  tag: "ul"
};

var NavbarToggler = function NavbarToggler(props) {
  var right = props.right,
      left = props.left,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      image = props.image,
      attributes = _objectWithoutProperties(props, ["right", "left", "children", "className", "tag", "image"]);

  var classes = classNames({
    "navbar-toggler-right": right,
    "navbar-toggler-left": left
  }, "navbar-toggler", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children ? children : image ? React.createElement("span", {
    className: "navbar-toggler-icon",
    style: {
      backgroundImage: "url(\"".concat(image, "\")")
    }
  }) : React.createElement("span", {
    className: "navbar-toggler-icon"
  }));
};

NavbarToggler.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  type: propTypes.string,
  className: propTypes.string,
  children: propTypes.node,
  right: propTypes.bool,
  left: propTypes.bool,
  image: propTypes.string
};
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      text = props.text,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "active", "text", "tag"]);

  var classes = classNames("nav-item", active && "active", text && "navbar-text", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  children: propTypes.node,
  active: propTypes.bool
};
NavItem.defaultProps = {
  tag: "li"
};

var NavLink = function NavLink(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to"]);

  var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
  return React.createElement(NavLink$1, _extends({
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, props.disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

NavLink.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
  to: propTypes.string,
  active: propTypes.bool
};
NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false
};

var Notification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      componentState: _this.props.show ? "show" : "hide"
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      setTimeout(function () {
        _this.setState({
          componentState: ""
        }, function () {
          setTimeout(function () {
            _this.setState({
              componentState: "hide"
            });
          }, 150);
        });
      }, time);
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autohide > 0) this.hide(this.props.autohide);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          show = _this$props.show,
          fade = _this$props.fade,
          message = _this$props.message,
          bodyClassName = _this$props.bodyClassName,
          icon = _this$props.icon,
          iconClassName = _this$props.iconClassName,
          title = _this$props.title,
          titleClassName = _this$props.titleClassName,
          text = _this$props.text,
          closeClassName = _this$props.closeClassName,
          attributes = _objectWithoutProperties(_this$props, ["tag", "className", "show", "fade", "message", "bodyClassName", "icon", "iconClassName", "title", "titleClassName", "text", "closeClassName"]);

      var classes = classNames("toast", fade && "fade", this.state.componentState, className);
      var headerClasses = classNames("toast-header", titleClassName);
      var iconClassNames = classNames("mr-2", iconClassName);
      var bodyClasses = classNames("toast-body", bodyClassName);
      var closeClasses = classNames("ml-2", "mb-1", closeClassName);
      return React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), React.createElement("div", {
        className: headerClasses
      }, React.createElement(Fa, {
        icon: icon,
        className: iconClassNames,
        size: "lg"
      }), React.createElement("strong", {
        className: "mr-auto"
      }, title), React.createElement("small", null, text), React.createElement(MDBCloseIcon, {
        className: closeClasses,
        onClick: function onClick() {
          return _this2.hide();
        }
      })), React.createElement("div", {
        className: bodyClasses
      }, message));
    }
  }]);

  return Notification;
}(React.Component);

Notification.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  show: propTypes.bool,
  fade: propTypes.bool,
  autohide: propTypes.number,
  iconClassName: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  titleColor: propTypes.string,
  titleClassName: propTypes.string,
  closeClassName: propTypes.string,
  bodyClassName: propTypes.string,
  bodyColor: propTypes.string,
  message: propTypes.string
};
Notification.defaultProps = {
  icon: "square",
  tag: "div",
  closeClassName: "text-dark"
};

var Popper = function Popper(_ref) {
  var children = _ref.children,
      clickable = _ref.clickable,
      domElement = _ref.domElement,
      modifiers = _ref.modifiers,
      id = _ref.id,
      isVisible = _ref.isVisible,
      onChange = _ref.onChange,
      placement = _ref.placement,
      popover = _ref.popover,
      style = _ref.style,
      tag = _ref.tag;

  var _useState = useState(isVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  useEffect(function () {
    setVisible(isVisible);
  }, [isVisible]);
  useEffect(function () {
    onChange && onChange(visible);
  }, [onChange, visible]);
  useEffect(function () {
    window.addEventListener('click', handleClick);
    return function () {
      return window.removeEventListener('click', handleClick);
    };
  });

  function handleClick(e) {
    var element = document.elementsFromPoint(e.clientX, e.clientY).find(function (el) {
      return el.dataset.popper === id;
    });
    if (element) return;
    setVisible(false);
  }

  var Wrapper = children[0];
  var Content = children[1];
  var Tag = tag;
  var tooltipClasses = classNames("fade", popover ? "popover bs-popover-".concat(placement, " popover-enter-done") : "tooltip bs-tooltip-".concat(placement), visible ? "show" : "");
  var contentClasses = classNames(!popover && "tooltip-inner");
  return React.createElement(Manager, null, React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return !domElement ? React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      innerRef: ref,
      "data-popper": id
    })) : React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
      onMouseEnter: function onMouseEnter() {
        return !clickable && setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        return !clickable && setVisible(false);
      },
      onTouchStart: function onTouchStart() {
        return !clickable && setVisible(true);
      },
      onTouchEnd: function onTouchEnd() {
        return !clickable && setVisible(false);
      },
      onMouseDown: function onMouseDown() {
        return clickable && setVisible(!visible);
      },
      ref: ref,
      "data-popper": id
    }));
  }), visible && Content.props.children && React.createElement(Tag, {
    style: style
  }, React.createElement(Popper$1, {
    modifiers: modifiers,
    eventsEnabled: true,
    positionFixed: false,
    placement: placement
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style,
        arrowProps = _ref3.arrowProps;
    return React.createElement(Tag, {
      ref: ref,
      style: style,
      "data-placement": placement,
      className: tooltipClasses,
      "data-popper": id
    }, React.createElement(Content.type, _extends({}, Content.props, {
      className: contentClasses
    }), Content.props.children), React.createElement("span", {
      ref: arrowProps.ref,
      style: arrowProps.style,
      "data-placement": placement,
      className: "arrow"
    }));
  })));
};

Popper.propTypes = {
  children: propTypes.node,
  clickable: propTypes.bool,
  domElement: propTypes.bool,
  modifiers: propTypes.object,
  id: propTypes.string,
  isVisible: propTypes.bool,
  placement: propTypes.string,
  popover: propTypes.bool,
  style: propTypes.objectOf(propTypes.string),
  tag: propTypes.string
};
Popper.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: {
    display: 'inline-block'
  },
  tag: 'div'
};

var PopoverBody = function PopoverBody(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-body', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverBody.defaultProps = {
  tag: "div"
};

var PopoverHeader = function PopoverHeader(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-header', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
PopoverHeader.defaultProps = {
  className: "",
  tag: "h3"
};

var Progress = function Progress(_ref) {
  var animated = _ref.animated,
      barClassName = _ref.barClassName,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      material = _ref.material,
      max = _ref.max,
      min = _ref.min,
      preloader = _ref.preloader,
      striped = _ref.striped,
      wrapperStyle = _ref.wrapperStyle,
      value = _ref.value,
      attributes = _ref.attributes;
  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames("progress", material && "md-progress", preloader && (color ? color + "-color" : "primary-color") + "-dark", className);
  var progressBarClasses = classNames(preloader ? "indeterminate" : "progress-bar", barClassName ? barClassName : null, animated ? "progress-bar-animated" : null, color ? "bg-".concat(color) : null, striped || animated ? "progress-bar-striped" : null);
  var computedHeight = height ? height : children && "1rem";

  var computedWrapperStyle = _objectSpread({}, wrapperStyle, {
    height: computedHeight
  });

  return React.createElement("div", _extends({}, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React.createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};

Progress.propTypes = {
  animated: propTypes.bool,
  barClassName: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  color: propTypes.string,
  height: propTypes.string,
  material: propTypes.bool,
  max: propTypes.number,
  min: propTypes.number,
  preloader: propTypes.bool,
  striped: propTypes.bool,
  wrapperStyle: propTypes.object,
  value: propTypes.number
};
Progress.defaultProps = {
  animated: false,
  barClassName: "",
  className: "",
  color: "indigo",
  height: "",
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  wrapperStyle: {},
  value: 0
};

var Row = function Row(props) {
  var className = props.className,
      Tag = props.tag,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "center", "start", "end", "around", "between", "top", "bottom", "middle"]);

  var classes = classNames("row", end && "justify-content-end", start && "justify-content-start", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row.propTypes = {
  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
  className: propTypes.string,
  top: propTypes.bool,
  bottom: propTypes.bool,
  middle: propTypes.bool,
  end: propTypes.bool,
  start: propTypes.bool,
  center: propTypes.bool,
  between: propTypes.bool,
  around: propTypes.bool
};
Row.defaultProps = {
  tag: "div"
};

var propTypes$2 = {
  activeItem: propTypes.any,
  tabId: propTypes.any,
  className: propTypes.string
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent(props) {
    var _this;

    _classCallCheck(this, TabContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabContent).call(this, props));
    _this.state = {
      activeItem: _this.props.activeItem
    };
    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        activeItemId: this.state.activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes$2));
      var classes = classNames("tab-content", className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return prevState.activeItem !== nextProps.activeItem ? {
        activeItem: nextProps.activeItem
      } : null;
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.childContextTypes = {
  activeItemId: propTypes.any
};
TabContent.propTypes = propTypes$2;

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPane).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabId = _this$props.tabId,
          attributes = _objectWithoutProperties(_this$props, ["className", "tabId"]);

      var classes = classNames("tab-pane", {
        active: tabId === this.context.activeItemId
      }, className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React.Component);

TabPane.contextTypes = {
  activeItemId: propTypes.any
};
TabPane.propTypes = {
  tabId: propTypes.any,
  className: propTypes.string
};

var TableHead = function TableHead(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var classes = classNames(color !== "dark" && color !== "light" ? color : "thead-".concat(color), {
    "text-white": textWhite
  });
  return React.createElement("thead", _extends({}, attributes, {
    className: classes
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : ""
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  columns: propTypes.arrayOf(propTypes.object),
  textWhite: propTypes.bool
};
TableHead.defaultProps = {
  textWhite: false
};

var TreeviewContext = React.createContext();

var Treeview = function Treeview(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  useEffect(function () {
    if (props.getValue) {
      props.getValue({
        item: active ? active.closest('li') : active,
        value: active ? active.closest('li').childNodes[1].textContent : active
      });
    }
  }, [active, props]);

  var getActive = function getActive(target) {
    setActive(target);
    return target;
  };

  var theme = props.theme,
      children = props.children,
      className = props.className,
      getValue = props.getValue,
      header = props.header,
      listClassName = props.listClassName,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["theme", "children", "className", "getValue", "header", "listClassName", "tag"]);

  var classes = classNames('border', theme ? "treeview-".concat(theme) : 'treeview', className);
  var ulClasses = classNames('list-unstyled', header ? 'pb-2 mb-1' : 'py-2 my-1', theme && "treeview-".concat(theme, "-list"), theme === 'animated' || !theme && 'pl-3', listClassName);
  var head = header && React.createElement(React.Fragment, null, React.createElement("h6", {
    className: "pt-3 pl-3"
  }, header), React.createElement("hr", null));
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), head, React.createElement("ul", {
    className: ulClasses
  }, React.createElement(TreeviewContext.Provider, {
    value: {
      active: active,
      theme: theme,
      getActive: getActive
    }
  }, children)));
};

Treeview.propTypes = {
  className: propTypes.string,
  header: propTypes.string,
  listClassName: propTypes.string,
  tag: propTypes.string,
  theme: propTypes.string,
  getValue: propTypes.func
};
Treeview.defaultProps = {
  tag: 'div',
  theme: '',
  getValue: function getValue() {}
};

var TreeviewItem = function TreeviewItem(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      target = _useState2[0],
      setTarget = _useState2[1];

  var targetRef = useRef(null);

  var className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      opened = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      theme = _useContext.theme,
      active = _useContext.active,
      getActive = _useContext.getActive;

  useEffect(function () {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
      opened && getActive(targetRef.current);
    }
  }, []);

  var handleClick = function handleClick() {
    return target.classList.contains('opened') ? getActive(null) : getActive(target);
  };

  var classes = classNames(disabled && disabledClassName, theme && "treeview-".concat(theme, "-items treeview-").concat(theme, "-element closed mb-1"), active === target && !active.classList.contains('opened') ? 'opened' : '', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: targetRef,
    onMouseDown: !disabled ? handleClick : null,
    style: {
      transform: 'translateY(0.3em)'
    }
  }), React.createElement(Fa, {
    className: "mr-2",
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), React.createElement("span", null, title));
};

TreeviewItem.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  disabledClassName: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  icon: propTypes.string,
  opened: propTypes.bool,
  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
};
TreeviewItem.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};

var TreeviewList = function TreeviewList(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    setOpen(props.opened);
  }, [props.opened]);

  var handleSwitch = function handleSwitch() {
    return setOpen(!opened);
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      _ = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      theme = _useContext.theme;

  var nestedClasses = classNames('nested', opened && 'active');
  var folder = classNames(theme && "closed treeview-".concat(theme, "-element d-block"), !children && 'ml-2', opened && 'opened', disabled && disabledClassName);
  var classes = classNames(theme && "treeview-".concat(theme, "-items px-0"), className);
  var iconClasses = classNames(theme ? 'mx-2' : 'mr-2');
  var child = children && React.createElement("ul", {
    className: nestedClasses,
    style: {
      height: 'calc(100% + 0.6rem)',
      marginLeft: '2px'
    }
  }, children);
  var collapse = theme && React.createElement(Collapse, {
    isOpen: opened
  }, child);
  var iconArrow = theme !== 'colorful' ? 'angle-right' : opened ? 'minus-circle' : 'plus-circle';
  var arrow = children && React.createElement(Fa, {
    icon: iconArrow,
    rotate: theme !== 'colorful' ? opened ? '90 down' : '0' : '',
    className: "rotate"
  });
  var btn = children && React.createElement(Button, {
    flat: true,
    className: "m-0 py-0 px-1 mr-1 z-depth-0",
    onClick: handleSwitch
  }, arrow);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), React.createElement("span", {
    className: folder,
    onClick: !disabled && theme ? handleSwitch : null
  }, theme ? arrow : btn, React.createElement("span", null, React.createElement(Fa, {
    className: iconClasses,
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), title)), collapse || child);
};

TreeviewList.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  disabledClassName: propTypes.string,
  fab: propTypes.bool,
  fal: propTypes.bool,
  far: propTypes.bool,
  icon: propTypes.string,
  opened: propTypes.bool,
  tag: propTypes.string
};
TreeviewList.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};
TreeviewList.contextTypes = {
  theme: propTypes.string
};

// FREE

export { Alert, Animation, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImage, CardText, CardTitle, Carousel, CarouselCaption, Control as CarouselControl, CarouselIndicator, CarouselIndicators, CarouselInner, CarouselItem, MDBCloseIcon as CloseIcon, Col, Collapse, Container, DataTable, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, EdgeHeader, Fa, Footer, FormInline, FreeBird, HamburgerToggler, Iframe, Input, InputGroup, InputNumeric, Jumbotron, ListGroup, ListGroupItem, Alert as MDBAlert, Animation as MDBAnimation, Badge as MDBBadge, Breadcrumb as MDBBreadcrumb, BreadcrumbItem as MDBBreadcrumbItem, Button as MDBBtn, ButtonGroup as MDBBtnGroup, ButtonToolbar as MDBBtnToolbar, Card as MDBCard, CardBody as MDBCardBody, CardFooter as MDBCardFooter, CardGroup as MDBCardGroup, CardHeader as MDBCardHeader, CardImage as MDBCardImage, CardText as MDBCardText, CardTitle as MDBCardTitle, Carousel as MDBCarousel, CarouselCaption as MDBCarouselCaption, CarouselIndicator as MDBCarouselIndicator, CarouselIndicators as MDBCarouselIndicators, CarouselInner as MDBCarouselInner, CarouselItem as MDBCarouselItem, MDBCloseIcon, Col as MDBCol, Collapse as MDBCollapse, Container as MDBContainer, Control as MDBControl, DataTable as MDBDataTable, Dropdown as MDBDropdown, DropdownItem as MDBDropdownItem, DropdownMenu as MDBDropdownMenu, DropdownToggle as MDBDropdownToggle, EdgeHeader as MDBEdgeHeader, Footer as MDBFooter, FormInline as MDBFormInline, FreeBird as MDBFreeBird, HamburgerToggler as MDBHamburgerToggler, Fa as MDBIcon, Iframe as MDBIframe, Input as MDBInput, InputGroup as MDBInputGroup, InputNumeric as MDBInputSelect, Jumbotron as MDBJumbotron, ListGroup as MDBListGroup, ListGroupItem as MDBListGroupItem, Mask as MDBMask, Media as MDBMedia, Modal as MDBModal, ModalBody as MDBModalBody, ModalFooter as MDBModalFooter, ModalHeader as MDBModalHeader, Nav as MDBNav, NavItem as MDBNavItem, NavLink as MDBNavLink, Navbar as MDBNavbar, NavbarBrand as MDBNavbarBrand, NavbarNav as MDBNavbarNav, NavbarToggler as MDBNavbarToggler, Notification as MDBNotification, PageItem as MDBPageItem, PageLink as MDBPageNav, Pagination as MDBPagination, Popper as MDBPopover, PopoverBody as MDBPopoverBody, PopoverHeader as MDBPopoverHeader, Popper as MDBPopper, Progress as MDBProgress, Row as MDBRow, TabContent as MDBTabContent, TabPane as MDBTabPane, Table as MDBTable, TableBody as MDBTableBody, TableFoot as MDBTableFoot, TableHead as MDBTableHead, Popper as MDBTooltip, Treeview as MDBTreeview, TreeviewItem as MDBTreeviewItem, TreeviewList as MDBTreeviewList, View as MDBView, Waves as MDBWaves, Mask, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Notification, PageItem, PageLink, Pagination, Popper as Popover, PopoverBody, PopoverHeader, Popper, Progress, Row, TabContent, TabPane, Table, TableBody, TableFoot, TableHead, Popper as Tooltip, Treeview, TreeviewItem, TreeviewList, View, Waves };
