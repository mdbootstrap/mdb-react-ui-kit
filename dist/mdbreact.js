'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var reactTransitionGroup = require('react-transition-group');
var ReactDOM = _interopDefault(require('react-dom'));
var reactPopper = require('react-popper');
var NumericInput = _interopDefault(require('react-numeric-input'));
var reactRouterDom = require('react-router-dom');
var reactToastify = require('react-toastify');

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

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation(props) {
    var _this;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;

      if (windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) && scroll < _this.getOffset(_this.elemRef.current) || windowHeight + scroll - 100 > _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight && scroll < _this.getOffset(_this.elemRef.current) + _this.elemRef.current.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(_this.elemRef.current) + 100 > docHeight) {
        // if the predicate is true, change state
        _this.setState({
          isVisible: true
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIteration", function (e) {
      if (_this.props.onAnimationIteration) {
        _this.setState({
          countIterations: _this.state.countIterations + 1
        });

        _this.props.onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnd", function (e) {
      _this.setState({
        countIterations: _this.state.countIterations + 1
      });

      if (_this.props.onAnimationEnd && _this.props.count === _this.state.countIterations) {
        _this.props.onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOffset", function (elem) {
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
    _this.elemRef = React__default.createRef();
    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // add EL on window if the animation is to "reveal"
      if (this.props.reveal) {
        window.addEventListener("scroll", this.updatePredicate);
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
      return React__default.createElement(Tag, _extends({}, attributes, {
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
}(React.Component);

Animation.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  type: PropTypes.string,
  delay: PropTypes.string,
  count: PropTypes.number,
  onAnimationEnd: PropTypes.func,
  onAnimationStart: PropTypes.func
};
Animation.defaultProps = {
  tag: "div",
  reveal: false,
  duration: 1,
  count: 1
};

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeAlert", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExit", function (node) {
      node.classList.add("fade");
      _this.props.onClose && _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExited", function (node) {
      _this.props.onClosed && _this.props.onClosed();
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          dismiss = _this$props.dismiss;
      var alertClasses = classNames("alert", color && "alert-".concat(color), className);
      var alertComponent;

      if (dismiss) {
        alertComponent = React__default.createElement(reactTransitionGroup.Transition, {
          in: this.state.isOpen,
          timeout: 150,
          unmountOnExit: true,
          onExit: function onExit(node) {
            return _this2.handleOnExit(node);
          },
          onExited: function onExited(node) {
            return _this2.handleOnExited(node);
          }
        }, React__default.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children, React__default.createElement("button", {
          onClick: this.closeAlert,
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }, React__default.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"))));
      } else {
        alertComponent = React__default.createElement("div", {
          className: alertClasses,
          role: "alert"
        }, children);
      }

      return alertComponent;
    }
  }]);

  return Alert;
}(React.Component);

Alert.defaultProps = {
  color: "primary"
};
Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func
};

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          pill = _this$props.pill,
          attributes = _objectWithoutProperties(_this$props, ["tag", "className", "children", "color", "pill"]);

      var classes = classNames("badge", color, "badge-" + color, pill ? "badge-pill" : false, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Badge;
}(React__default.Component);

Badge.defaultProps = {
  tag: "span",
  color: "default",
  pill: false
};
Badge.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
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
      if (color.includes('dark')) {
        color.replace('-', '-color-');
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
    children = React__default.Children.map(props.children, function (child) {
      return React__default.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React__default.createElement("nav", null, React__default.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool
};

var Fa =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fa, _React$Component);

  function Fa() {
    _classCallCheck(this, Fa);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fa).apply(this, arguments));
  }

  _createClass(Fa, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          border = _this$props.border,
          brand = _this$props.brand,
          className = _this$props.className,
          fab = _this$props.fab,
          fal = _this$props.fal,
          far = _this$props.far,
          fixed = _this$props.fixed,
          flip = _this$props.flip,
          icon = _this$props.icon,
          inverse = _this$props.inverse,
          light = _this$props.light,
          list = _this$props.list,
          pull = _this$props.pull,
          pulse = _this$props.pulse,
          regular = _this$props.regular,
          rotate = _this$props.rotate,
          size = _this$props.size,
          spin = _this$props.spin,
          stack = _this$props.stack,
          attributes = _objectWithoutProperties(_this$props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

      var iconPrefix = brand || fab ? "fab" : light || fal ? "fal" : regular || far ? "far" : "fa";
      var classes = classNames(iconPrefix, list ? "fa-li" : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? "fa-fw" : false, pull ? "fa-pull-".concat(pull) : false, border ? "fa-border" : false, spin ? "fa-spin" : false, pulse ? "fa-pulse" : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? "fa-inverse" : false, stack ? "fa-".concat(stack) : false, className);
      return React__default.createElement("i", _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Fa;
}(React__default.Component);

Fa.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.string,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  spin: PropTypes.bool,
  size: PropTypes.string,
  stack: PropTypes.string
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
    return bold ? React__default.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React__default.createElement(React.Fragment, null, appendIcon && children, React__default.createElement(Fa, {
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

  return React__default.createElement("li", _extends({}, attributes, {
    className: classes
  }), React__default.createElement(WithBold, null, React__default.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  bold: PropTypes.bool,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string
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
      return React__default.createElement("div", {
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
}(React__default.Component);

Waves.propTypes = {
  outline: PropTypes.bool,
  flat: PropTypes.bool,
  animate: PropTypes.bool,
  cursorPos: PropTypes.object,
  children: PropTypes.node
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };

      _this.setState({
        cursorPos: cursorPos
      });
    });

    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          disabled = _this$props.disabled,
          download = _this$props.download,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          social = _this$props.social,
          action = _this$props.action,
          Tag = _this$props.tag,
          target = _this$props.target,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "circle", "className", "color", "disabled", "download", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "social", "action", "tag", "target", "innerRef"]);

      var classes = classNames(floating ? "btn-floating btn" : "btn", flat ? "btn-flat" : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? "-outline" : "", "-").concat(color), size ? "btn-".concat(size) : false, rounded ? "btn-rounded" : false, circle && "btn-circle", block ? "btn-block" : false, social ? "btn-" + social : false, action ? "btn-action" : false, "Ripple-parent", className, {
        active: active,
        disabled: disabled
      });

      if (attributes.href && Tag === "button") {
        Tag = "a";
      }

      return React__default.createElement(Tag, _extends({
        type: Tag === "button" && !type ? "button" : type,
        target: target,
        role: Tag === "a" && !role ? "button" : role,
        className: classes,
        ref: innerRef,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick
      }, attributes, {
        download: download,
        disabled: disabled
      }), this.props.children, this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos,
        outline: outline,
        flat: flat
      }));
    }
  }]);

  return Button;
}(React__default.Component);

Button.defaultProps = {
  color: "default",
  tag: "button"
};
Button.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  social: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string
};

var css$2 = ".btn-group-vertical>.btn,\n.btn-group-vertical>.btn+.btn-group,\n.btn-group-vertical>.btn-group+.btn,\n.btn-group-vertical>.btn-group+.btn-group {\n  margin-left: 0px;\n}\n\n.btn-group-lg>.btn {\n  font-size: 0.9rem;\n  padding: 1rem 2.4rem;\n}\n\n.btn-group-sm>.btn {\n  font-size: 0.6rem;\n  padding: 0.5rem 1.6rem;\n}\n\n.btn-floating.btn.btn-sm,\n.btn-floating.btn.btn-lg {\n  padding: 0;\n}\n";
styleInject(css$2);

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonGroup).apply(this, arguments));
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          vertical = _this$props.vertical,
          attributes = _objectWithoutProperties(_this$props, ["className", "size", "vertical"]);

      var classes = classNames(className, size ? "btn-group-" + size : false, vertical ? "btn-group-vertical" : "btn-group");
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonGroup;
}(React__default.Component);

ButtonGroup.propTypes = {
  "aria-label": PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
  role: "group"
};

var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    _classCallCheck(this, ButtonToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonToolbar).apply(this, arguments));
  }

  _createClass(ButtonToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["className"]);

      var classes = classNames(className, "btn-toolbar");
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return ButtonToolbar;
}(React__default.Component);

ButtonToolbar.propTypes = {
  "aria-label": PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  role: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: "toolbar"
};

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          cascade = _this$props.cascade,
          wide = _this$props.wide,
          narrow = _this$props.narrow,
          reverse = _this$props.reverse,
          testimonial = _this$props.testimonial,
          ecommerce = _this$props.ecommerce,
          collection = _this$props.collection,
          pricing = _this$props.pricing,
          personal = _this$props.personal,
          news = _this$props.news,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

      var classes = classNames("card", cascade && "card-cascade", wide && "card-cascade wider", narrow && "card-cascade narrower", reverse && "card-cascade wider reverse", testimonial && "testimonial-card", ecommerce && "card-ecommerce", collection && "collection-card", pricing && "pricing-card", personal && "card-personal", news && "news-card", color && color, text && text + "-text", border && "border-" + border, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Card;
}(React.Component);

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string
};
Card.defaultProps = {
  tag: "div"
};

var CardBody =
/*#__PURE__*/
function (_Component) {
  _inherits(CardBody, _Component);

  function CardBody() {
    _classCallCheck(this, CardBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardBody).apply(this, arguments));
  }

  _createClass(CardBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          cascade = _this$props.cascade,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "cascade"]);

      var classes = classNames("card-body", cascade && "card-body-cascade", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardBody;
}(React.Component);

CardBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cascade: PropTypes.bool
};
CardBody.defaultProps = {
  tag: "div"
};

var CardFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(CardFooter, _Component);

  function CardFooter() {
    _classCallCheck(this, CardFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardFooter).apply(this, arguments));
  }

  _createClass(CardFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          transparent = _this$props.transparent,
          small = _this$props.small,
          muted = _this$props.muted,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "color", "text", "border", "transparent", "small", "muted"]);

      var classes = classNames("card-footer", color && color, text && text, color && !text && " white-text", border && "border-" + border, transparent && "bg-transparent", muted && "text-muted", className);
      var component = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        component = React__default.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React__default.createElement("small", null, " ", this.props.children, " "));
      }

      return component;
    }
  }]);

  return CardFooter;
}(React.Component);

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool,
  small: PropTypes.bool,
  muted: PropTypes.bool
};
CardFooter.defaultProps = {
  tag: "div"
};

var CardGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(CardGroup, _Component);

  function CardGroup() {
    _classCallCheck(this, CardGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardGroup).apply(this, arguments));
  }

  _createClass(CardGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          deck = _this$props.deck,
          column = _this$props.column,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "deck", "column"]);

      var classes = classNames(deck ? "card-deck" : column ? "card-columns" : "card-group", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardGroup;
}(React.Component);

CardGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  deck: PropTypes.bool,
  column: PropTypes.bool
};
CardGroup.defaultProps = {
  tag: "div"
};

var CardHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(CardHeader, _Component);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardHeader).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          color = _this$props.color,
          text = _this$props.text,
          border = _this$props.border,
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "color", "text", "border", "transparent"]);

      var classes = classNames("card-header", color && color, text && text, color && !text && " white-text", border && "border-" + border, transparent && "bg-transparent", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardHeader;
}(React.Component);

CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  border: PropTypes.string,
  transparent: PropTypes.bool
};
CardHeader.defaultProps = {
  tag: "div"
};

var Mask =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Mask, _React$Component);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mask).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          overlay = _this$props.overlay,
          pattern = _this$props.pattern,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "overlay", "pattern", "tag"]);

      var classes = classNames("mask", pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);
    }
  }]);

  return Mask;
}(React__default.Component);

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string
};
Mask.defaultProps = {
  className: "",
  overlay: "",
  pattern: "",
  tag: "div"
};

var View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(View, _React$Component);

  function View(props) {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(View, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cascade = _this$props.cascade,
          children = _this$props.children,
          className = _this$props.className,
          hover = _this$props.hover,
          rounded = _this$props.rounded,
          src = _this$props.src,
          Tag = _this$props.tag,
          waves = _this$props.waves,
          zoom = _this$props.zoom,
          fixed = _this$props.fixed,
          attributes = _objectWithoutProperties(_this$props, ["cascade", "children", "className", "hover", "rounded", "src", "tag", "waves", "zoom", "fixed"]);

      var classes = classNames("view", rounded && "rounded", zoom && "zoom", hover && "overlay", cascade && "view-cascade", waves ? "Ripple-parent" : false, className);
      var viewStyle = src ? {
        backgroundImage: "url(\"".concat(src, "\")"),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        backgroundAttachment: fixed ? "fixed" : null
      } : {};
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        style: viewStyle
      }), children, waves && React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return View;
}(React__default.Component);

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
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};

var CardImage =
/*#__PURE__*/
function (_Component) {
  _inherits(CardImage, _Component);

  function CardImage(props) {
    var _this;

    _classCallCheck(this, CardImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardImage).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(CardImage, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          overlay = _this$props.overlay,
          top = _this$props.top,
          waves = _this$props.waves,
          hover = _this$props.hover,
          cascade = _this$props.cascade,
          tag = _this$props.tag,
          zoom = _this$props.zoom,
          attributes = _objectWithoutProperties(_this$props, ["className", "overlay", "top", "waves", "hover", "cascade", "tag", "zoom"]);

      var classes = classNames(top && "card-img-top", className);
      var Tag = tag;
      var innerContent = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), this.props.children);

      if (this.props.src) {
        return React__default.createElement(View, {
          zoom: zoom,
          hover: this.props.hover,
          cascade: this.props.cascade
        }, React__default.createElement("div", {
          className: "Ripple-parent",
          onMouseDown: this.handleClick.bind(this),
          onTouchStart: this.handleClick.bind(this)
        }, innerContent, React__default.createElement(Mask, {
          overlay: overlay
        }), this.props.waves && React__default.createElement(Waves, {
          cursorPos: this.state.cursorPos
        })));
      } else {
        return React__default.createElement("div", null, innerContent);
      }
    }
  }]);

  return CardImage;
}(React.Component);

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  zoom: PropTypes.bool,
  waves: PropTypes.bool,
  className: PropTypes.string,
  cascade: PropTypes.bool,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  top: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.node
};
CardImage.defaultProps = {
  tag: "img",
  overlay: "white-slight",
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText =
/*#__PURE__*/
function (_Component) {
  _inherits(CardText, _Component);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardText).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          muted = _this$props.muted,
          small = _this$props.small,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "muted", "small"]);

      var classes = classNames("card-text", muted && "text-muted", className);
      var text = React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));

      if (small) {
        text = React__default.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), React__default.createElement("small", null, " ", this.props.children, " "));
      }

      return text;
    }
  }]);

  return CardText;
}(React.Component);

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool
};
CardText.defaultProps = {
  tag: "p"
};

var CardTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(CardTitle, _Component);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardTitle).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          sub = _this$props.sub,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "sub"]);

      var classes = classNames(sub ? "card-subtitle" : "card-title", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return CardTitle;
}(React.Component);

CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  sub: PropTypes.bool,
  className: PropTypes.string
};
CardTitle.defaultProps = {
  tag: "h4",
  sub: false
};

var Control =
/*#__PURE__*/
function (_Component) {
  _inherits(Control, _Component);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, _getPrototypeOf(Control).apply(this, arguments));
  }

  _createClass(Control, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          className = _this$props.className,
          onClick = _this$props.onClick,
          Tag = _this$props.tag,
          iconLeft = _this$props.iconLeft,
          iconRight = _this$props.iconRight,
          testimonial = _this$props.testimonial,
          multiItem = _this$props.multiItem;
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

      return React__default.createElement(Tag, {
        className: classes,
        "data-slide": direction,
        onClick: onClick
      }, iconLeft ? React__default.createElement(Fa, {
        icon: "chevron-left"
      }) : iconRight ? React__default.createElement(Fa, {
        icon: "chevron-right"
      }) : React__default.createElement("div", null, React__default.createElement("span", {
        className: caretClasses,
        "aria-hidden": "true"
      }), React__default.createElement("span", {
        className: "sr-only"
      }, text)));
    }
  }]);

  return Control;
}(React.Component);

Control.propTypes = {
  onClick: PropTypes.any,
  direction: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  testimonial: PropTypes.bool,
  multiItem: PropTypes.bool
};
Control.defaultProps = {
  tag: "a"
};

var CarouselIndicators =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselIndicators, _Component);

  function CarouselIndicators() {
    _classCallCheck(this, CarouselIndicators);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselIndicators).apply(this, arguments));
  }

  _createClass(CarouselIndicators, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["children", "className"]);

      var classes = classNames("carousel-indicators", className);
      return React__default.createElement("ol", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselIndicators;
}(React.Component);

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CarouselIndicators.defaultProps = {
  className: ""
};

var CarouselIndicator =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselIndicator, _Component);

  function CarouselIndicator() {
    _classCallCheck(this, CarouselIndicator);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselIndicator).apply(this, arguments));
  }

  _createClass(CarouselIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          img = _this$props.img,
          alt = _this$props.alt,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "img", "alt"]);

      var classes = classNames(this.props.active ? "active" : "", className);
      return React__default.createElement("li", _extends({}, attributes, {
        className: classes
      }), this.props.img && React__default.createElement("img", {
        src: this.props.img,
        alt: this.props.alt,
        className: "img-fluid"
      }), children);
    }
  }]);

  return CarouselIndicator;
}(React.Component);

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};
CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: ""
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "restartInterval", function () {
      if (_this.props.interval !== false) {
        clearInterval(_this.cycleInterval);
        _this.cycleInterval = setInterval(_this.next, _this.props.interval);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "next", function () {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prev", function () {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (_this.props.interval === false) {
        return;
      }

      _this.cycleInterval = setInterval(_this.next, _this.props.interval); // get images src atr

      if (_this.props.thumbnails) {
        var CarouselItemsArray = _this.carouselRef.current.querySelectorAll('.carousel-item img');

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
      srcArray: []
    };
    _this.carouselRef = React__default.createRef();
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
          attributes = _objectWithoutProperties(_this$props, ["activeItem", "children", "className", "multiItem", "slide", "thumbnails", "interval", "testimonial", "tag", "length", "showControls", "showIndicators"]);

      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        CarouselIndicatorsArray.push(React__default.createElement(CarouselIndicator, {
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

      return React__default.createElement(Tag, _extends({
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel
      }), showControls && multiItem && React__default.createElement("div", {
        className: "controls-top"
      }, React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React__default.createElement(React__default.Fragment, null, React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: testimonial ? true : false,
        multiItem: multiItem ? true : false,
        direction: "next",
        role: "button",
        onClick: this.next
      })), React__default.createElement(CarouselIndicators, null, showIndicators && CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(React.Component);

Carousel.propTypes = {
  activeItem: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  multiItem: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  thumbnails: PropTypes.bool,
  testimonial: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  length: PropTypes.number
};
Carousel.defaultProps = {
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true
};
Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var CarouselCaption =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselCaption, _Component);

  function CarouselCaption() {
    _classCallCheck(this, CarouselCaption);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarouselCaption).apply(this, arguments));
  }

  _createClass(CarouselCaption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("carousel-caption", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselCaption;
}(React.Component);

CarouselCaption.propTypes = {
  active: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
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
      childrenCount: React__default.Children.count(_this.props.children)
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
      childrenCount = React__default.Children.count(this.props.children);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return CarouselInner;
}(React.Component);

CarouselInner.propTypes = {
  childrenCount: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node
};
CarouselInner.defaultProps = {
  tag: "div"
};
CarouselInner.contextTypes = {
  childrenCount: PropTypes.any
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem(props) {
    var _this;

    _classCallCheck(this, CarouselItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CarouselItem).call(this, props));
    _this.moveForward = _this.moveForward.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.moveBackwards = _this.moveBackwards.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.makeVisible = _this.makeVisible.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(React.Component);

CarouselItem.propTypes = {
  active: PropTypes.bool,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
CarouselItem.defaultProps = {
  tag: "div"
};
CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var Col =
/*#__PURE__*/
function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          top = _this$props.top,
          bottom = _this$props.bottom,
          middle = _this$props.middle,
          size = _this$props.size,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

      var classes = classNames(size && "col-" + size, xs && "col-xs-" + xs, sm && "col-sm-" + sm, md && "col-md-" + md, lg && "col-lg-" + lg, xl && "col-xl-" + xl, !size && !xs && !sm && !md && !lg && !xl ? "col" : "", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Col;
}(React.Component);

Col.propTypes = {
  size: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCollapse", function () {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeCollapse", function () {
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
      return React__default.createElement("div", _extends({}, attributes, {
        style: _objectSpread({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(React.Component);

Collapse.propTypes = {
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.node,
  navbar: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
Collapse.defaultProps = {
  isOpen: "",
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fluid = _this$props.fluid,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["fluid", "className", "tag"]);

      var classes = classNames(fluid ? "container-fluid" : "container", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Container;
}(React.Component);

Container.propTypes = {
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
Container.defaultProps = {
  tag: "div",
  fluid: false
};

var css$4 = ".table-wrapper-scroll-y {\n  display: block;\n  max-height: 200px;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n";
styleInject(css$4);

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          btn = _this$props.btn,
          children = _this$props.children,
          dark = _this$props.dark,
          fixed = _this$props.fixed,
          theadColor = _this$props.theadColor,
          hover = _this$props.hover,
          maxHeight = _this$props.maxHeight,
          responsive = _this$props.responsive,
          responsiveSm = _this$props.responsiveSm,
          responsiveMd = _this$props.responsiveMd,
          responsiveLg = _this$props.responsiveLg,
          responsiveXl = _this$props.responsiveXl,
          scrollY = _this$props.scrollY,
          small = _this$props.small,
          striped = _this$props.striped,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "fixed", "theadColor", "hover", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "scrollY", "small", "striped", "className"]);

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
      return React__default.createElement("div", {
        className: wrapperClasses,
        style: wrapperStyles
      }, React__default.createElement("table", _extends({}, attributes, {
        className: tableClasses
      }), children));
    }
  }]);

  return Table;
}(React__default.Component);

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  theadColor: PropTypes.string,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string
};

var DataTableHead = function DataTableHead(props) {
  var color = props.color,
      columns = props.columns,
      handleSort = props.handleSort,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      sortable = props.sortable,
      textWhite = props.textWhite;
  var theadClasses = classNames(color && (color !== "dark" && color !== "light" ? color : "thead-".concat(color)), textWhite && "text-white");
  return React__default.createElement(React.Fragment, null, (scrollY || scrollX) && React__default.createElement("colgroup", null, columns.map(function (col) {
    return React__default.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React__default.createElement("thead", {
    className: theadClasses || undefined
  }, React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.attributes), col.label, sortable && col.sort !== 'disabled' && React__default.createElement(Fa, {
      icon: "sort",
      className: "float-right",
      "aria-hidden": "true"
    }));
  }))));
};

DataTableHead.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  textWhite: PropTypes.bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
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
  return React__default.createElement("tbody", _extends({}, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React__default.createElement("tr", {
      onClick: row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined,
      key: index
    }, Object.keys(row).map(function (key, index, array) {
      if (key === "clickEvent") return null;

      if (key !== "colspan") {
        return array[index + 1] !== "colspan" ? React__default.createElement("td", {
          key: key
        }, row[key]) : null;
      } else {
        return React__default.createElement("td", {
          key: key,
          colSpan: row[key]
        }, row[array[index - 1]]);
      }
    }));
  }), children);
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
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
  return React__default.createElement("thead", _extends({}, attributes, {
    className: classes || undefined
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
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
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React__default.createElement("div", {
    className: "col-sm-12"
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable
  }), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), React__default.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
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
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      translateScrollHead = props.translateScrollHead,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "hover", "handleSort", "handleTableBodyScroll", "maxHeight", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  return React__default.createElement("div", {
    className: "col-sm-12"
  }, React__default.createElement("div", {
    className: "dataTables_scroll"
  }, React__default.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: "hidden"
    }
  }, React__default.createElement("div", {
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
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable
  })))), React__default.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: "auto"
    },
    onScroll: handleTableBodyScroll
  }, React__default.createElement(Table, _extends({
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
  }, attributes), React__default.createElement("colgroup", null, columns.map(function (col) {
    return React__default.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || "auto",
        minWidth: "".concat(col.width, "px") || "auto"
      }
    });
  })), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  translateScrollHead: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  maxHeight: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool
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

  return React__default.createElement("div", {
    className: "dataTables_length bs-select"
  }, React__default.createElement("label", null, label, React__default.createElement("select", {
    value: value,
    onChange: getValue,
    className: "custom-select custom-select-sm form-control form-control-sm"
  }, entries.map(function (entry) {
    return React__default.createElement("option", {
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

var DataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
      displayEntries = props.displayEntries,
      entries = props.entries,
      entriesArr = props.entriesArr,
      paging = props.paging,
      label = props.label;
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, paging && displayEntries && React__default.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label
  }));
};

DataTableEntries.propTypes = {
  handleEntriesChange: PropTypes.func.isRequired,
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  paging: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label;
  return React__default.createElement("div", {
    className: "dataTables_filter"
  }, React__default.createElement("label", null, label || "Search", React__default.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || "Search"
  })));
};

DataTableInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label;
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, searching && React__default.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label
  }));
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  label: PropTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      pages = props.pages,
      label = props.label;
  return React__default.createElement("div", {
    className: "col-sm-12 col-md-5"
  }, info && React__default.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, label[0], " ", activePage > 0 ? activePage * entries + 1 : activePage + 1, " ", label[1], " ", pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length, " ", label[2], " ", filteredRows.length, " ", label[3]));
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};
DataTableInfo.defaultProps = {
  label: ["Showing", "to", "of", "entries"]
};

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          circle = _this$props.circle,
          className = _this$props.className,
          color = _this$props.color,
          Tag = _this$props.tag,
          size = _this$props.size,
          attributes = _objectWithoutProperties(_this$props, ["children", "circle", "className", "color", "tag", "size"]);

      var classes = classNames("pagination", circle && "pagination-circle", color && "pg-" + color, size ? "pagination-".concat(size) : false, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['lg', 'sm'])
};
Pagination.defaultProps = {
  circle: false,
  className: "",
  color: "",
  tag: "ul"
};

var PageItem =
/*#__PURE__*/
function (_Component) {
  _inherits(PageItem, _Component);

  function PageItem() {
    _classCallCheck(this, PageItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageItem).apply(this, arguments));
  }

  _createClass(PageItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "className", "children", "disabled", "tag"]);

      var classes = classNames("page-item", disabled ? "disabled" : "", active ? "active" : "", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageItem;
}(React.Component);

PageItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  tag: "li"
};

var PageLink =
/*#__PURE__*/
function (_Component) {
  _inherits(PageLink, _Component);

  function PageLink() {
    _classCallCheck(this, PageLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(PageLink).apply(this, arguments));
  }

  _createClass(PageLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("page-link", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return PageLink;
}(React.Component);

PageLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps) {
      if (prevProps.pages !== _this.props.pages) {
        _this.setState({
          pages: _this.props.pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pagesIndexify", function () {
      var mutablePages = _toConsumableArray(_this.state.pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, _this.props.pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "choosePagesGroup", function () {
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
      return React__default.createElement("div", {
        className: "col-sm-12 col-md-7"
      }, React__default.createElement("div", {
        className: "dataTables_paginate"
      }, React__default.createElement(Pagination, null, React__default.createElement(PageItem, {
        disabled: activePage === 0
      }, React__default.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React__default.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React__default.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React__default.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, " ", page.index === activePage && React__default.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React__default.createElement(PageItem, {
        disabled: activePage === pages.length - 1
      }, React__default.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React__default.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(React.Component);

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData", function (link) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "paginateRowsInitialy", function () {
      // findout how many pages there are need to be, then slice rows into pages
      var pagesAmount = Math.ceil(_this.state.rows.length / _this.state.entries);

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * _this.state.entries;

        _this.state.pages.push(_this.state.rows.slice(pageEndIndex - _this.state.entries, pageEndIndex));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSort", function (field, sort) {
      if (sort !== "disabled") {
        _this.setState(function (prevState) {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? -1 : 1;
              });
              break;

            default:
              prevState.rows.sort(function (a, b) {
                return a[field] > b[field] ? 1 : -1;
              });
          }

          prevState.columns[prevState.columns.findIndex(function (column) {
            return column.field === field;
          })].sort = sort === "asc" ? "desc" : "asc";
          return {
            rows: prevState.rows,
            columns: prevState.columns
          };
        }, function () {
          return _this.filterRows();
        });
      } else return;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterRows", function () {
      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              var stringValue = row[key] !== null ? row[key].toString() : '';
              if (stringValue.toLowerCase().match(_this.state.search.toLowerCase())) return true;
            }
          }

          return false;
        });
        if (filteredRows.length === 0) filteredRows.push({
          message: 'No matching records found',
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "paginateRows", function () {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeActivePage", function (page) {
      _this.setState({
        activePage: page
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleTableBodyScroll", function (e) {
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
      search: '',
      translateScrollHead: 0,
      order: props.order || []
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
      if (typeof this.props.data === 'string') {
        this.fetchData(this.props.data);
      }

      this.state.order.length && this.handleSort(this.state.order[0], this.state.order[1]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.data !== this.props.data) {
        if (typeof this.props.data === 'string') {
          this.fetchData(this.props.data);
        } else {
          this.setState({
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          });
        }
      }

      if (prevState.pages !== this.state.pages || prevState.rows !== this.state.rows) {
        this.paginateRows();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          bordered = _this$props.bordered,
          borderless = _this$props.borderless,
          btn = _this$props.btn,
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
          attributes = _objectWithoutProperties(_this$props, ["autoWidth", "bordered", "borderless", "btn", "children", "dark", "data", "displayEntries", "entriesOptions", "entriesLabel", "exportToCSV", "fixed", "hover", "info", "infoLabel", "maxHeight", "order", "pagesAmount", "paging", "paginationLabel", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "searching", "searchLabel", "scrollX", "scrollY", "small", "sortable", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

      var _this$state = this.state,
          columns = _this$state.columns,
          entries = _this$state.entries,
          filteredRows = _this$state.filteredRows,
          pages = _this$state.pages,
          activePage = _this$state.activePage,
          search = _this$state.search,
          translateScrollHead = _this$state.translateScrollHead;
      return React__default.createElement("div", {
        className: "dataTables_wrapper dt-bootstrap4"
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableEntries, {
        paging: paging,
        displayEntries: displayEntries,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel
      }), React__default.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel
      })), !scrollY && !scrollX && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableTable, _extends({
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
        rows: pages[activePage]
      }, attributes))), (scrollY || scrollX) && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableTableScroll, _extends({
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
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && React__default.createElement("div", {
        className: "row"
      }, React__default.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel
      }), React__default.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })));
    }
  }]);

  return DataTable;
}(React.Component);

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.arrayOf(PropTypes.string),
  maxHeight: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paging: PropTypes.bool,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
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
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};

var propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  toggle: PropTypes.bool
};
var contextTypes = {
  toggle: PropTypes.func
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
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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

      return React__default.createElement(Tag, _extends({
        type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : undefined
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }));
    }
  }]);

  return DropdownItem;
}(React__default.Component);

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
DropdownItem.contextTypes = contextTypes;

var css$5 = ".dropup .dropdown-menu {\n  top: auto !important;\n  bottom: 100% !important;\n  transform: translate3d(5px, 5px, 0px) !important;\n}\n\n.dropdown-menu-right {\n  left: 0 !important;\n  right: auto !important;\n}\n";
styleInject(css$5);

var DropdownMenuComponent = function DropdownMenuComponent(_ref) {
  var Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React__default.createElement(Tag, _extends({
    tabIndex: tabIndex,
    role: role
  }, attributes, {
    "aria-hidden": aria,
    key: d_key
  }), children);
};

DropdownMenuComponent.propTypes = {
  aria: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  d_key: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  tag: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired
};

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

      return React__default.createElement(reactPopper.Popper, {
        modifires: attrs.modifiers,
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement
      }, function (_ref) {
        var placement = _ref.placement,
            ref = _ref.ref,
            style = _ref.style;
        return React__default.createElement(Tag, {
          ref: ref,
          style: style,
          "data-placement": placement,
          className: classes
        }, React__default.createElement(DropdownMenuComponent, {
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
}(React.Component);

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  basic: PropTypes.bool,
  className: PropTypes.string,
  flip: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.string
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
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropleft: PropTypes.bool.isRequired,
  color: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), PropTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _classCallCheck(this, DropdownToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownToggle).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
      var children = props.children || React__default.createElement("span", {
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

      return React__default.createElement(reactPopper.Reference, null, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          ref: ref
        }), children) : React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "aria-haspopup": PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool
};
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  color: "secondary"
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var EdgeHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(EdgeHeader, _Component);

  function EdgeHeader() {
    _classCallCheck(this, EdgeHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(EdgeHeader).apply(this, arguments));
  }

  _createClass(EdgeHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["color", "className", "tag"]);

      var classes = classNames("edge-header", color, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return EdgeHeader;
}(React.Component);

EdgeHeader.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
EdgeHeader.defaultProps = {
  color: "deep-purple",
  tag: "div"
};

var FormInline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormInline, _React$Component);

  function FormInline(props) {
    var _this;

    _classCallCheck(this, FormInline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInline).call(this, props));
    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(FormInline, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          waves = _this$props.waves,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "waves", "children"]);

      var classes = classNames("form-inline", this.props.waves ? "Ripple-parent" : false, className);
      return React__default.createElement("form", _extends({}, attributes, {
        className: classes,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this)
      }), this.props.children, this.props.waves && React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return FormInline;
}(React__default.Component);

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["color", "children", "className", "tag"]);

      var classes = classNames("page-footer", color ? color : "", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Footer;
}(React.Component);

Footer.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
Footer.defaultProps = {
  tag: "footer"
};

var FreeBird =
/*#__PURE__*/
function (_Component) {
  _inherits(FreeBird, _Component);

  function FreeBird() {
    _classCallCheck(this, FreeBird);

    return _possibleConstructorReturn(this, _getPrototypeOf(FreeBird).apply(this, arguments));
  }

  _createClass(FreeBird, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag"]);

      var classes = classNames("container free-bird", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return FreeBird;
}(React.Component);

FreeBird.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
FreeBird.defaultProps = {
  tag: "div"
};

var css$6 = ".hamburger-button__checkbox {\n  display: none;\n}\n\n.hamburger-button__button {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n  top: -5px;\n}\n\nlabel.hamburger-button__button {\n  margin-bottom: 0;\n}\n\n#nav-icon1 {\n  width: 1.5em;\n  height: 1.5em;\n  position: relative;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .5s ease-in-out;\n  -moz-transition: .5s ease-in-out;\n  -o-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n  cursor: pointer;\n}\n\n#nav-icon1 span {\n  display: block;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  border-radius: 1px;\n  background-color: #fff;\n  opacity: 1;\n  left: 0;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .25s ease-in-out;\n  -moz-transition: .25s ease-in-out;\n  -o-transition: .25s ease-in-out;\n  transition: .25s ease-in-out;\n}\n\n#nav-icon1 span:nth-child(1) {\n  top: 5px;\n}\n\n#nav-icon1 span:nth-child(2) {\n  top: 16px;\n}\n\n#nav-icon1 span:nth-child(3) {\n  top: 27px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\n  top: 16px;\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\n  opacity: 0;\n  left: -60px;\n}\n\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\n  top: 16px;\n  -webkit-transform: rotate(-135deg);\n  -moz-transform: rotate(-135deg);\n  -o-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n";
styleInject(css$6);

var HamburgerToggler =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HamburgerToggler, _React$Component);

  function HamburgerToggler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HamburgerToggler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HamburgerToggler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      checked: _this.props.isOpen || false
    });

    return _this;
  }

  _createClass(HamburgerToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          color = _this$props.color,
          className = _this$props.className;
      var classes = classNames("hamburger-button__button", className);
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
        type: "checkbox",
        defaultChecked: this.state.checked,
        onChange: this.props.onClick,
        className: "hamburger-button__checkbox",
        id: id
      }), React__default.createElement("label", {
        id: "nav-icon1",
        className: classes,
        htmlFor: id
      }, React__default.createElement("span", {
        style: {
          background: color
        }
      }), React__default.createElement("span", {
        style: {
          background: color
        }
      }), React__default.createElement("span", {
        style: {
          background: color
        }
      })));
    }
  }]);

  return HamburgerToggler;
}(React__default.Component);

HamburgerToggler.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (event) {
      event.stopPropagation();

      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInput", function (event) {
      event.stopPropagation();

      if (_this.props.type !== "checkbox" && _this.props.type !== "radio") {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      _this.props.onInput && _this.props.onInput(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    _this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };
    _this.inputElementRef = React__default.createRef();
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
      var _this$props = this.props,
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
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          id = _this$props.id,
          inputRef = _this$props.inputRef,
          outline = _this$props.outline,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          size = _this$props.size,
          success = _this$props.success,
          tag = _this$props.tag,
          type = _this$props.type,
          validate = _this$props.validate,
          value = _this$props.value,
          valueDefault = _this$props.valueDefault,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "id", "inputRef", "outline", "label", "labelClass", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var isNotEmpty = !!this.state.innerValue || !!hint || this.state.isFocused;
      var Tag = "";
      var formControlClass = "";

      if (type === "textarea") {
        formControlClass = outline ? "form-control" : "md-textarea form-control";
        Tag = "textarea";
      } else {
        formControlClass = "form-control";
        Tag = "input";
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? "validate" : false, filled ? "filled-in" : false, gap ? "with-gap" : false, type === "checkbox" ? gap ? false : "form-check-input" : false, type === "radio" ? "form-check-input" : false, className);
      var containerClassFix = classNames(type === "checkbox" || type === "radio" ? "form-check my-3" : "md-form", group ? "form-group" : false, size ? "form-".concat(size) : false, outline && 'md-outline', containerClass);
      var iconClassFix = classNames(isNotEmpty && this.state.isFocused ? "active" : false, iconClass, "prefix");
      var labelClassFix = classNames(isNotEmpty ? "active" : false, disabled ? "disabled" : false, type === "checkbox" ? "form-check-label mr-5" : false, type === "radio" ? "form-check-label mr-5" : false, labelClass);
      return React__default.createElement("div", {
        className: containerClassFix
      }, icon && React__default.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClassFix,
        onClick: this.setFocus
      }), React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        id: id,
        placeholder: hint,
        ref: this.inputElementRef,
        value: this.state.innerValue,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onInput: this.onInput,
        onFocus: this.onFocus
      })), label && React__default.createElement("label", {
        className: labelClassFix,
        htmlFor: id,
        "data-error": error,
        "data-success": success,
        id: id,
        onClick: this.setFocus
      }, label), children);
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
}(React__default.Component);

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  containerClass: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  filled: PropTypes.bool,
  gap: PropTypes.bool,
  getValue: PropTypes.func,
  group: PropTypes.bool,
  hint: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelClass: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  validate: PropTypes.bool,
  value: PropTypes.string,
  valueDefault: PropTypes.string
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
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  outline: false,
  label: "",
  labelClass: "",
  size: "",
  success: "",
  tag: "input",
  type: "text",
  validate: false,
  valueDefault: ""
};

var InputNumeric =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputNumeric, _React$Component);

  function InputNumeric() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputNumeric);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputNumeric)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeHandler", function (value) {
      _this.props.getValue && _this.props.getValue(value);
    });

    return _this;
  }

  _createClass(InputNumeric, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          getValue = _this$props.getValue,
          attributes = _objectWithoutProperties(_this$props, ["className", "getValue"]);

      var classes = classNames("form-control", className);
      return React__default.createElement(NumericInput, _extends({}, attributes, {
        onChange: this.onChangeHandler,
        className: classes
      }));
    }
  }]);

  return InputNumeric;
}(React__default.Component);

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(this, _getPrototypeOf(Jumbotron).apply(this, arguments));
  }

  _createClass(Jumbotron, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          fluid = _this$props.fluid,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "fluid"]);

      var classes = classNames("jumbotron", fluid ? "jumbotron-fluid" : false, className);
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Jumbotron;
}(React__default.Component);

Jumbotron.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

var ListGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(ListGroup, _Component);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroup).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag"]);

      var classes = classNames("list-group", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroup;
}(React.Component);

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};
ListGroup.defaultProps = {
  tag: "ul"
};

var ListGroupItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListGroupItem, _Component);

  function ListGroupItem() {
    _classCallCheck(this, ListGroupItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListGroupItem).apply(this, arguments));
  }

  _createClass(ListGroupItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          disabled = _this$props.disabled,
          hover = _this$props.hover,
          success = _this$props.success,
          info = _this$props.info,
          warning = _this$props.warning,
          danger = _this$props.danger,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

      var classes = classNames("list-group-item", color && "list-group-item-".concat(color), active ? "active" : "", disabled ? "disabled" : "", hover ? "list-group-item-action" : "", success ? "list-group-item-success" : "", info ? "list-group-item-info" : "", warning ? "list-group-item-warning" : "", danger ? "list-group-item-danger" : "", className);

      if (attributes.href && Tag === "li") {
        Tag = "a";
      }

      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ListGroupItem;
}(React.Component);

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};
ListGroupItem.defaultProps = {
  tag: "li"
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, _getPrototypeOf(Media).apply(this, arguments));
  }

  _createClass(Media, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          body = _this$props.body,
          bottom = _this$props.bottom,
          className = _this$props.className,
          heading = _this$props.heading,
          left = _this$props.left,
          list = _this$props.list,
          middle = _this$props.middle,
          object = _this$props.object,
          right = _this$props.right,
          round = _this$props.round,
          thumbnail = _this$props.thumbnail,
          figure = _this$props.figure,
          figImg = _this$props.figImg,
          figCap = _this$props.figCap,
          figCapRight = _this$props.figCapRight,
          figCapLeft = _this$props.figCapLeft,
          tag = _this$props.tag,
          top = _this$props.top,
          attributes = _objectWithoutProperties(_this$props, ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"]);

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
      var classes = classNames(body ? "media-body" : false, heading ? "mt-0" : false, left ? "media-left" : false, right ? "media-right" : false, top ? "align-self-start" : false, middle ? "align-self-center" : false, bottom ? "align-self-end" : false, object ? "media-object" : false, thumbnail ? "img-thumbnail" : false, list ? "media-list" : false, figure ? "figure" : false, figImg ? "figure-img" : false, figCap ? "figure-caption text-center" : false, figCapRight ? "figure-caption text-right" : false, figCapLeft ? "figure-caption text-left" : false, round ? "rounded-circle z-depth-1-half" : false, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? "media" : false, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Media;
}(React__default.Component);

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  figure: PropTypes.bool,
  figImg: PropTypes.bool,
  figCap: PropTypes.bool,
  figCapRight: PropTypes.bool,
  figCapLeft: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  thumbnail: PropTypes.bool,
  round: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      document.body.classList.add("modal-open");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      document.body.classList.remove("modal-open");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps, prevState) {
      if (prevState.isOpen !== _this.props.isOpen) {
        _this.setState({
          isOpen: _this.props.isOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnEntered", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.add("show");
      _this.props.autoFocus && node.focus();

      if (type === "modal") {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExit", function (type, node) {
      if (type === "backdrop" && _this.props.fade === false) {
        return;
      }

      node.classList.remove("show");

      if (type === "modal") {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop) return;

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEscape", function (e) {
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
      return React__default.createElement(React.Fragment, null, backdrop && React__default.createElement(reactTransitionGroup.Transition, {
        timeout: timeout,
        in: this.state.isOpen,
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
      }, React__default.createElement("div", {
        className: backdropClasses
      })), React__default.createElement(reactTransitionGroup.Transition, {
        timeout: timeout,
        in: this.state.isOpen,
        appear: this.state.isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onClick: this.handleBackdropClick,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered("modal", node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit("modal", node);
        }
      }, React__default.createElement("div", _extends({
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React__default.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React__default.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)))));
    }
  }]);

  return Modal;
}(React.Component);

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
  children: PropTypes.node,
  className: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  size: PropTypes.string,
  side: PropTypes.bool,
  fullHeight: PropTypes.bool,
  frame: PropTypes.bool,
  centered: PropTypes.bool,
  position: PropTypes.string,
  cascading: PropTypes.bool,
  modalStyle: PropTypes.string,
  wrapClassName: PropTypes.string,
  animation: PropTypes.string,
  fade: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  showModal: PropTypes.func,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func
};

var ModalBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalBody, _React$Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["className", "children"]);

      var classes = classNames("modal-body", className);
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalBody;
}(React__default.Component);

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          center = _this$props.center,
          start = _this$props.start,
          end = _this$props.end,
          around = _this$props.around,
          between = _this$props.between,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "center", "start", "end", "around", "between"]);

      var classes = classNames("modal-footer", start && "justify-content-start", end && "justify-content-end", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", className);
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return ModalFooter;
}(React__default.Component);

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalHeader).apply(this, arguments));
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var closeButton;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          toggle = _this$props.toggle,
          Tag = _this$props.tag,
          closeAriaLabel = _this$props.closeAriaLabel,
          titleClass = _this$props.titleClass,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

      var classes = classNames("modal-header", className);
      var titleClasses = classNames("modal-title", this.props.titleClass);

      if (toggle) {
        closeButton = React__default.createElement("button", {
          type: "button",
          onClick: toggle,
          className: "close",
          "aria-label": closeAriaLabel
        }, React__default.createElement("span", {
          "aria-hidden": "true"
        }, String.fromCharCode(215)));
      }

      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }), React__default.createElement(Tag, {
        className: titleClasses
      }, children), closeButton);
    }
  }]);

  return ModalHeader;
}(React__default.Component);

ModalHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string
};
ModalHeader.defaultProps = {
  tag: "h4",
  closeAriaLabel: "Close"
};

var Nav =
/*#__PURE__*/
function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          tabs = _this$props.tabs,
          color = _this$props.color,
          classicTabs = _this$props.classicTabs,
          pills = _this$props.pills,
          header = _this$props.header,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

      var classes = classNames("nav", tabs && "md-tabs", pills && "md-pills", header && "nav-pills card-header-pills", color && !tabs && !classicTabs && !pills ? color : false, pills && color ? "pills-" + color : false, (tabs || classicTabs) && color ? "tabs-" + color : false, className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return Nav;
}(React.Component);

Nav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  classicTabs: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
  header: PropTypes.bool
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
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
          double = _this$props.double,
          transparent = _this$props.transparent,
          attributes = _objectWithoutProperties(_this$props, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var classes = classNames("navbar", light ? "navbar-light" : "", dark ? "navbar-dark" : "", sticky ? "sticky-" + sticky : "", fixed ? "fixed-" + fixed : "", getExpandClass(expand), scrolling || scrollingNavbarOffset ? "scrolling-navbar" : "", this.state.isCollapsed ? "top-nav-collapse" : "", color ? transparent ? this.state.isCollapsed ? color : "" : color : "", double ? "double-nav" : "", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(React.Component);

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  double: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  scrolling: PropTypes.bool,
  scrollingNavbarOffset: PropTypes.number,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  transparent: PropTypes.bool
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
      return React__default.createElement(reactRouterDom.NavLink, _extends({
        to: href
      }, attributes, {
        className: classes
      }));
    } else {
      return React__default.createElement("div", _extends({}, attributes, {
        className: classes
      }));
    }
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

var NavbarNav =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarNav, _Component);

  function NavbarNav() {
    _classCallCheck(this, NavbarNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarNav).apply(this, arguments));
  }

  _createClass(NavbarNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          right = _this$props.right,
          left = _this$props.left,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "right", "left", "tag"]);

      var classes = classNames("navbar-nav", right ? "ml-auto" : left ? "mr-auto" : "justify-content-around w-100", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavbarNav;
}(React.Component);

NavbarNav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool
};
NavbarNav.defaultProps = {
  tag: "ul"
};

var NavbarToggler =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarToggler, _Component);

  function NavbarToggler() {
    _classCallCheck(this, NavbarToggler);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavbarToggler).apply(this, arguments));
  }

  _createClass(NavbarToggler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          right = _this$props.right,
          left = _this$props.left,
          children = _this$props.children,
          className = _this$props.className,
          Tag = _this$props.tag,
          image = _this$props.image,
          attributes = _objectWithoutProperties(_this$props, ["right", "left", "children", "className", "tag", "image"]);

      var classes = classNames("navbar-toggler", right && "navbar-toggler-right", left && "navbar-toggler-left", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children ? children : image ? React__default.createElement("span", {
        className: "navbar-toggler-icon",
        style: {
          backgroundImage: "url(\"".concat(image, "\")")
        }
      }) : React__default.createElement("span", {
        className: "navbar-toggler-icon"
      }));
    }
  }]);

  return NavbarToggler;
}(React.Component);

NavbarToggler.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool,
  image: PropTypes.string
};
NavbarToggler.defaultProps = {
  tag: "button",
  type: "button"
};

var NavItem =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem, _Component);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          active = _this$props.active,
          text = _this$props.text,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "active", "text", "tag"]);

      var classes = classNames("nav-item", active ? "active" : "", text ? "navbar-text" : "", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), children);
    }
  }]);

  return NavItem;
}(React.Component);

NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool
};
NavItem.defaultProps = {
  tag: "li"
};

var NavLink =
/*#__PURE__*/
function (_Component) {
  _inherits(NavLink, _Component);

  function NavLink(props) {
    var _this;

    _classCallCheck(this, NavLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavLink).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      if (!_this.props.disabled) {
        e.stopPropagation(); // Waves - Get Cursor Position

        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        });
      }
    });

    _this.state = {
      cursorPos: {}
    };
    return _this;
  }

  _createClass(NavLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disabled = _this$props.disabled,
          active = _this$props.active,
          to = _this$props.to,
          attributes = _objectWithoutProperties(_this$props, ["children", "className", "disabled", "active", "to"]);

      var classes = classNames("nav-link", disabled ? "disabled" : "Ripple-parent", active && "active", className);
      return React__default.createElement(reactRouterDom.NavLink, _extends({
        className: classes,
        onMouseUp: this.handleClick,
        onTouchStart: this.handleClick,
        to: to
      }, attributes), children, this.props.disabled ? false : React__default.createElement(Waves, {
        cursorPos: this.state.cursorPos
      }));
    }
  }]);

  return NavLink;
}(React.Component);

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  active: PropTypes.bool
};
NavLink.defaultProps = {
  active: false,
  className: "",
  disabled: false
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

  var _useState = React.useState(isVisible),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  React.useEffect(function () {
    setVisible(isVisible);
  }, [isVisible]);
  React.useEffect(function () {
    onChange && onChange(visible);
  }, [visible]);
  React.useEffect(function () {
    window.addEventListener('click', handleClick);
    return function () {
      return window.removeEventListener('click', handleClick);
    };
  }, []);

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
  return React__default.createElement(reactPopper.Manager, null, React__default.createElement(reactPopper.Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return !domElement ? React__default.createElement(Wrapper.type, _extends({}, Wrapper.props, {
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
      onClick: function onClick() {
        return clickable && setVisible(!visible);
      },
      innerRef: ref,
      "data-popper": id
    })) : React__default.createElement(Wrapper.type, _extends({}, Wrapper.props, {
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
      onClick: function onClick() {
        return clickable && setVisible(!visible);
      },
      ref: ref,
      "data-popper": id
    }));
  }), visible && React__default.createElement(Tag, {
    style: style
  }, React__default.createElement(reactPopper.Popper, {
    modifiers: modifiers,
    eventsEnabled: true,
    positionFixed: false,
    placement: placement
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style,
        arrowProps = _ref3.arrowProps;
    return React__default.createElement(Tag, {
      ref: ref,
      style: style,
      "data-placement": placement,
      className: tooltipClasses,
      "data-popper": id
    }, React__default.createElement(Content.type, _extends({}, Content.props, {
      className: contentClasses
    }), Content.props.children), React__default.createElement("span", {
      ref: arrowProps.ref,
      style: arrowProps.style,
      "data-placement": placement,
      className: "arrow"
    }));
  })));
};

Popper.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  modifiers: PropTypes.object,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string
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
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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

  return React__default.createElement("div", _extends({}, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React__default.createElement("div", {
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
  animated: PropTypes.bool,
  barClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  material: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  preloader: PropTypes.bool,
  striped: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  value: PropTypes.number
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

var Row =
/*#__PURE__*/
function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          center = _this$props.center,
          start = _this$props.start,
          end = _this$props.end,
          around = _this$props.around,
          between = _this$props.between,
          top = _this$props.top,
          bottom = _this$props.bottom,
          middle = _this$props.middle,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "center", "start", "end", "around", "between", "top", "bottom", "middle"]);

      var classes = classNames("row", end && "justify-content-end", start && "justify-content-start", center && "justify-content-center", between && "justify-content-between", around && "justify-content-around", top && "align-self-start", middle && "align-self-center", bottom && "align-self-end", className);
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }));
    }
  }]);

  return Row;
}(React.Component);

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  middle: PropTypes.bool,
  end: PropTypes.bool,
  start: PropTypes.bool,
  center: PropTypes.bool,
  between: PropTypes.bool,
  around: PropTypes.bool
};
Row.defaultProps = {
  tag: "div"
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
  return React__default.createElement("thead", _extends({}, attributes, {
    className: classes
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty("minimal") ? "th-".concat(col.minimal) : ""
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableHead.defaultProps = {
  textWhite: false
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      width: "",
      height: "",
      ratio: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
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
      return React__default.createElement("div", {
        className: wrapperClasses
      }, React__default.createElement("iframe", _extends({
        title: title || "",
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(React.Component);

Iframe.propTypes = {
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onLoad: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  src: PropTypes.string.isRequired,
  styles: PropTypes.object,
  width: PropTypes.number,
  title: PropTypes.string
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false
    };
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_assertThisInitialized(_this)));
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
      return React__default.createElement(reactPopper.Manager, null, React__default.createElement("div", {
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(React__default.Component);

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  dropright: PropTypes.bool,
  dropleft: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  dropright: false,
  dropleft: false,
  tag: "div"
};
Dropdown.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropleft: PropTypes.bool.isRequired
};

// FREE

exports.cssTransition = reactToastify.cssTransition;
exports.toast = reactToastify.toast;
exports.ToastContainer = reactToastify.ToastContainer;
exports.Animation = Animation;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonToolbar = ButtonToolbar;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardGroup = CardGroup;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports.CardText = CardText;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel;
exports.CarouselCaption = CarouselCaption;
exports.CarouselControl = Control;
exports.CarouselInner = CarouselInner;
exports.CarouselItem = CarouselItem;
exports.CarouselIndicators = CarouselIndicators;
exports.CarouselIndicator = CarouselIndicator;
exports.Col = Col;
exports.Collapse = Collapse;
exports.Container = Container;
exports.DataTable = DataTable;
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.DropdownMenu = DropdownMenu;
exports.DropdownToggle = DropdownToggle;
exports.EdgeHeader = EdgeHeader;
exports.Fa = Fa;
exports.FormInline = FormInline;
exports.Footer = Footer;
exports.FreeBird = FreeBird;
exports.HamburgerToggler = HamburgerToggler;
exports.Input = Input;
exports.InputNumeric = InputNumeric;
exports.Jumbotron = Jumbotron;
exports.ListGroup = ListGroup;
exports.ListGroupItem = ListGroupItem;
exports.Mask = Mask;
exports.Media = Media;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Nav = Nav;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarNav = NavbarNav;
exports.NavbarToggler = NavbarToggler;
exports.NavItem = NavItem;
exports.NavLink = NavLink;
exports.Pagination = Pagination;
exports.PageItem = PageItem;
exports.PageLink = PageLink;
exports.Popover = Popper;
exports.Popper = Popper;
exports.Tooltip = Popper;
exports.PopoverBody = PopoverBody;
exports.PopoverHeader = PopoverHeader;
exports.Progress = Progress;
exports.Waves = Waves;
exports.Row = Row;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableHead = TableHead;
exports.TableFoot = TableFoot;
exports.View = View;
exports.Iframe = Iframe;
exports.MDBIframe = Iframe;
exports.MDBAnimation = Animation;
exports.MDBBadge = Badge;
exports.MDBAlert = Alert;
exports.MDBBreadcrumb = Breadcrumb;
exports.MDBBreadcrumbItem = BreadcrumbItem;
exports.MDBBtn = Button;
exports.MDBBtnGroup = ButtonGroup;
exports.MDBBtnToolbar = ButtonToolbar;
exports.MDBCard = Card;
exports.MDBCardBody = CardBody;
exports.MDBCardFooter = CardFooter;
exports.MDBCardGroup = CardGroup;
exports.MDBCardHeader = CardHeader;
exports.MDBCardImage = CardImage;
exports.MDBCardText = CardText;
exports.MDBCardTitle = CardTitle;
exports.MDBCarousel = Carousel;
exports.MDBCarouselCaption = CarouselCaption;
exports.MDBControl = Control;
exports.MDBCarouselInner = CarouselInner;
exports.MDBCarouselItem = CarouselItem;
exports.MDBCarouselIndicators = CarouselIndicators;
exports.MDBCarouselIndicator = CarouselIndicator;
exports.MDBCol = Col;
exports.MDBCollapse = Collapse;
exports.MDBContainer = Container;
exports.MDBDataTable = DataTable;
exports.MDBDropdown = Dropdown;
exports.MDBDropdownItem = DropdownItem;
exports.MDBDropdownMenu = DropdownMenu;
exports.MDBDropdownToggle = DropdownToggle;
exports.MDBEdgeHeader = EdgeHeader;
exports.MDBFormInline = FormInline;
exports.MDBFooter = Footer;
exports.MDBFreeBird = FreeBird;
exports.MDBHamburgerToggler = HamburgerToggler;
exports.MDBIcon = Fa;
exports.MDBInput = Input;
exports.MDBInputSelect = InputNumeric;
exports.MDBJumbotron = Jumbotron;
exports.MDBListGroup = ListGroup;
exports.MDBListGroupItem = ListGroupItem;
exports.MDBMask = Mask;
exports.MDBMedia = Media;
exports.MDBModal = Modal;
exports.MDBModalBody = ModalBody;
exports.MDBModalFooter = ModalFooter;
exports.MDBModalHeader = ModalHeader;
exports.MDBNav = Nav;
exports.MDBNavbar = Navbar;
exports.MDBNavbarBrand = NavbarBrand;
exports.MDBNavbarNav = NavbarNav;
exports.MDBNavbarToggler = NavbarToggler;
exports.MDBNavItem = NavItem;
exports.MDBNavLink = NavLink;
exports.MDBPagination = Pagination;
exports.MDBPageItem = PageItem;
exports.MDBPageNav = PageLink;
exports.MDBPopover = Popper;
exports.MDBPopper = Popper;
exports.MDBTooltip = Popper;
exports.MDBPopoverBody = PopoverBody;
exports.MDBPopoverHeader = PopoverHeader;
exports.MDBProgress = Progress;
exports.MDBWaves = Waves;
exports.MDBRow = Row;
exports.MDBTable = Table;
exports.MDBTableBody = TableBody;
exports.MDBTableHead = TableHead;
exports.MDBTableFoot = TableFoot;
exports.MDBView = View;
