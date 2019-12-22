'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var reactTransitionGroup = require('react-transition-group');
var ReactDOM = _interopDefault(require('react-dom'));
var mdbreact = require('mdbreact');
var reactPopper = require('react-popper');
var NumericInput = _interopDefault(require('react-numeric-input'));
var reactRouterDom = require('react-router-dom');
var FocusTrap = _interopDefault(require('focus-trap-react'));
var Popper = _interopDefault(require('popper.js'));

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

var Alert = function Alert(props) {
  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var closeAlert = function closeAlert() {
    setIsOpen(false);
  };

  var handleOnExit = function handleOnExit(node) {
    node.classList.add('fade');
    return props.onClose && props.onClose();
  };

  var handleOnExited = function handleOnExited() {
    return props.onClosed && props.onClosed();
  };

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      children = props.children,
      dismiss = props.dismiss;
  var alertClasses = classNames('alert', color && "alert-".concat(color), className);
  var alertComponent;

  if (dismiss) {
    alertComponent = React__default.createElement(reactTransitionGroup.Transition, {
      "in": isOpen,
      timeout: 150,
      unmountOnExit: true,
      onExit: function onExit(node) {
        return handleOnExit(node);
      },
      onExited: function onExited(node) {
        return handleOnExited();
      }
    }, React__default.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children, React__default.createElement("button", {
      onClick: closeAlert,
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, React__default.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))));
  } else {
    alertComponent = React__default.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children);
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: 'primary',
  tag: 'div'
};
Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  tag: PropTypes.string
};

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Animation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Animation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      // eslint-disable-next-line react/destructuring-assignment
      isVisible: !_this.props.reveal,
      // eslint-disable-next-line react/destructuring-assignment
      revealed: !_this.props.reveal,
      countIterations: 0
    });

    _defineProperty(_assertThisInitialized(_this), "elemRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;
      var revealed = _this.state.revealed;
      var currentRef = _this.elemRef.current;

      if (windowHeight + scroll - 100 > _this.getOffset(currentRef) && scroll < _this.getOffset(currentRef) || windowHeight + scroll - 100 > _this.getOffset(currentRef) + currentRef.clientHeight && scroll < _this.getOffset(currentRef) + currentRef.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(currentRef) + 100 > docHeight) {
        _this.setState({
          isVisible: true,
          revealed: true
        });
      } else if (!revealed) {
        _this.setState({
          isVisible: false,
          revealed: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      var onAnimationStart = _this.props.onAnimationStart;
      var countIterations = _this.state.countIterations;

      _this.setState({
        countIterations: countIterations + 1
      });

      if (onAnimationStart) {
        onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIteration", function () {
      var onAnimationIteration = _this.props.onAnimationIteration;
      var countIterations = _this.state.countIterations;

      if (onAnimationIteration) {
        _this.setState({
          countIterations: countIterations + 1
        });

        onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function () {
      var _this$props = _this.props,
          onAnimationEnd = _this$props.onAnimationEnd,
          count = _this$props.count;
      var countIterations = _this.state.countIterations;

      _this.setState({
        countIterations: countIterations + 1
      });

      if (onAnimationEnd && count === countIterations) {
        onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var _document = document,
          body = _document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var reveal = this.props.reveal;

      if (reveal) {
        window.addEventListener('scroll', this.updatePredicate);
        this.updatePredicate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var reveal = this.props.reveal;

      if (reveal) {
        window.removeEventListener('scroll', this.updatePredicate);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          count = _this$props2.count,
          delay = _this$props2.delay,
          duration = _this$props2.duration,
          infinite = _this$props2.infinite,
          reveal = _this$props2.reveal,
          style = _this$props2.style,
          Tag = _this$props2.tag,
          type = _this$props2.type,
          attributes = _objectWithoutProperties(_this$props2, ["children", "className", "count", "delay", "duration", "infinite", "reveal", "style", "tag", "type"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? 'visible' : 'hidden',
        animationName: type
      };
      var hiddenStyles = {
        animationName: 'none',
        visibility: 'hidden'
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(isVisible && 'animated', type && type, infinite && 'infinite', className);
      return React__default.createElement(Tag, _extends({
        "data-test": "animation",
        className: classes,
        onAnimationEnd: this.handleEnd,
        onAnimationIteration: this.handleIteration,
        onAnimationStart: this.handleStart,
        ref: this.elemRef,
        style: isVisible && revealed ? getAllStyles : hiddenStyles // eslint-disable-next-line react/jsx-props-no-spreading

      }, attributes), children);
    }
  }]);

  return Animation;
}(React.Component);

Animation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  count: PropTypes.number,
  delay: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  infinite: PropTypes.bool,
  onAnimationEnd: PropTypes.func,
  onAnimationIteration: PropTypes.func,
  onAnimationStart: PropTypes.func,
  reveal: PropTypes.bool,
  style: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};
Animation.defaultProps = {
  tag: 'div',
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

  var classes = classNames('badge', color, "badge-".concat(color), pill ? 'badge-pill' : false, className);
  return (// eslint-disable-next-line react/jsx-props-no-spreading
    React__default.createElement(Tag, _extends({
      "data-test": "badge"
    }, attributes, {
      className: classes
    }), children)
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string
};
Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};

var Box = function Box(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      display = props.display,
      justifyContent = props.justifyContent,
      flex = props.flex,
      alignItems = props.alignItems,
      alignContent = props.alignContent,
      alignSelf = props.alignSelf,
      color = props.color,
      bgColor = props.bgColor,
      m = props.m,
      mt = props.mt,
      mr = props.mr,
      mb = props.mb,
      ml = props.ml,
      mx = props.mx,
      my = props.my,
      p = props.p,
      pt = props.pt,
      pr = props.pr,
      pb = props.pb,
      pl = props.pl,
      px = props.px,
      py = props.py,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "display", "justifyContent", "flex", "alignItems", "alignContent", "alignSelf", "color", "bgColor", "m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py"]);

  var marginOrPadding = function marginOrPadding(props, suffix) {
    if (props !== undefined) {
      return "".concat(suffix, "-").concat(props);
    }
  };

  var classes = classNames(display && "d-".concat(display), justifyContent && "justify-content-".concat(justifyContent), flex && "flex-".concat(flex), alignItems && "align-items-".concat(alignItems), alignContent && "align-content-".concat(alignContent), alignSelf && "align-self-".concat(alignSelf), color && "".concat(color, "-text"), bgColor && "bg-".concat(bgColor), marginOrPadding(m, 'm'), marginOrPadding(mt, 'mt'), marginOrPadding(mr, 'mr'), marginOrPadding(mb, 'mb'), marginOrPadding(ml, 'ml'), marginOrPadding(mx, 'mx'), marginOrPadding(my, 'my'), marginOrPadding(p, 'p'), marginOrPadding(pt, 'pt'), marginOrPadding(pr, 'pr'), marginOrPadding(pb, 'pb'), marginOrPadding(pl, 'pl'), marginOrPadding(px, 'px'), marginOrPadding(py, 'py'), className);
  var isEmptyClass = classes !== '' ? classes : null;
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: isEmptyClass
  }), children);
};

Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  flex: PropTypes.string,
  justifyContent: PropTypes.string,
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: PropTypes.string
};
Box.defaultProps = {
  tag: 'div'
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
    if (attributes[currentElement]) {
      previousValue[currentElement] = attributes[currentElement];
    }

    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(' ');
  var specialColors = ['danger', 'warning', 'success', 'info', 'default', 'primary', 'secondary', 'elegant', 'stylish', 'unique', 'special'];
  var colorClasses = '';
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
function debounce(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = this;

    var later = function later() {
      fn.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, time);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames('breadcrumb', uppercase && 'text-uppercase', bold && 'font-up-bold', light && 'white-text', color && getColorClass(color), className);
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

  return React__default.createElement("nav", {
    "data-test": "breadcrumb"
  }, React__default.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool
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

  var iconPrefix = brand || fab ? 'fab' : light || fal ? 'fal' : regular || far ? 'far' : 'fa';
  var classes = classNames(iconPrefix, list ? 'fa-li' : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? 'fa-fw' : false, pull ? "fa-pull-".concat(pull) : false, border ? 'fa-border' : false, spin ? 'fa-spin' : false, pulse ? 'fa-pulse' : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? 'fa-inverse' : false, stack ? "fa-".concat(stack) : false, className);
  return React__default.createElement("i", _extends({
    "data-test": "fa"
  }, attributes, {
    className: classes
  }));
};

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
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: '',
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: '',
  inverse: false,
  light: false,
  list: false,
  pull: '',
  pulse: false,
  regular: false,
  rotate: '',
  size: '',
  spin: false,
  stack: ''
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

var css = ".bc-icons.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item::after {\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item.active {\r\n  color: #eeeeee;\r\n}\r\n";
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

  var classes = classNames(active ? 'active' : false, icon && 'bc-icons', 'breadcrumb-item', className);
  var iconClasses = classNames(appendIcon ? 'mx-2' : 'mr-2', iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React__default.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React__default.createElement(React__default.Fragment, null, appendIcon && children, React__default.createElement(Fa, {
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

  return React__default.createElement("li", _extends({
    "data-test": "breadcrumb-item"
  }, attributes, {
    className: classes
  }), React__default.createElement(WithBold, null, React__default.createElement(WithIcon, null)));
};

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
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
  className: '',
  bold: false,
  icon: '',
  iconBrand: false,
  iconClassName: '',
  iconLight: false,
  iconRegular: false,
  iconSize: ''
};

var css$1 = ".btn-group-vertical>.btn,\r\n.btn-group-vertical>.btn+.btn-group,\r\n.btn-group-vertical>.btn-group+.btn,\r\n.btn-group-vertical>.btn-group+.btn-group {\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn-group-lg>.btn {\r\n  font-size: 0.9rem;\r\n  padding: 1rem 2.4rem;\r\n}\r\n\r\n.btn-group-sm>.btn {\r\n  font-size: 0.6rem;\r\n  padding: 0.5rem 1.6rem;\r\n}\r\n\r\n.btn-floating.btn.btn-sm,\r\n.btn-floating.btn.btn-lg {\r\n  padding: 0;\r\n}\r\n";
styleInject(css$1);

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      size = _ref.size,
      vertical = _ref.vertical,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ["className", "size", "vertical", "children"]);

  var classes = classNames(className, size ? "btn-group-".concat(size) : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return React__default.createElement("div", _extends({
    "data-test": "button-group"
  }, attributes, {
    className: classes
  }), children);
};

ButtonGroup.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
  role: 'group'
};

var ButtonToolbar = function ButtonToolbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classNames(className, 'btn-toolbar');
  return React__default.createElement("div", _extends({
    "data-test": "button-toolbar"
  }, attributes, {
    className: classes
  }), children);
};

ButtonToolbar.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: 'toolbar'
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
    'card-cascade': cascade,
    'card-cascade wider': wide,
    'card-cascade narrower': narrow,
    'card-cascade wider reverse': reverse,
    'testimonial-card': testimonial,
    'card-ecommerce': ecommerce,
    'collection-card': collection,
    'pricing-card': pricing,
    'card-personal': personal,
    'news-card': news
  }, _defineProperty(_classNames, "".concat(text, "-text"), text), _defineProperty(_classNames, "border-".concat(border), border), _classNames), 'card', color, className);
  return React__default.createElement(Tag, _extends({
    "data-test": "card"
  }, attributes, {
    className: classes
  }));
};

Card.propTypes = {
  border: PropTypes.string,
  cascade: PropTypes.bool,
  className: PropTypes.string,
  collection: PropTypes.bool,
  color: PropTypes.string,
  ecommerce: PropTypes.bool,
  narrow: PropTypes.bool,
  news: PropTypes.bool,
  personal: PropTypes.bool,
  pricing: PropTypes.bool,
  reverse: PropTypes.bool,
  tag: PropTypes.string,
  testimonial: PropTypes.bool,
  text: PropTypes.string,
  wide: PropTypes.bool
};
Card.defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade"]);

  var classes = classNames('card-body', cascade && 'card-body-cascade', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "card-body"
  }, attributes, {
    className: classes
  }));
};

CardBody.propTypes = {
  cascade: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardBody.defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      children = props.children,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      small = props.small,
      muted = props.muted,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "children", "text", "border", "transparent", "small", "muted"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, 'text-muted', muted), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-footer', color, className);
  var component = React__default.createElement(Tag, _extends({
    "data-test": "card-footer"
  }, attributes, {
    className: classes
  }));

  if (small) {
    component = React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), React__default.createElement("small", null, " ", children, " "));
  }

  return component;
};

CardFooter.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};
CardFooter.defaultProps = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      Tag = props.tag,
      deck = props.deck,
      column = props.column,
      attributes = _objectWithoutProperties(props, ["className", "tag", "deck", "column"]);

  var classes = classNames(deck ? 'card-deck' : column ? 'card-columns' : 'card-group', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "card-group"
  }, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = {
  className: PropTypes.string,
  column: PropTypes.bool,
  deck: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardGroup.defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var _classNames;

  var border = props.border,
      className = props.className,
      color = props.color,
      Tag = props.tag,
      text = props.text,
      transparent = props.transparent,
      attributes = _objectWithoutProperties(props, ["border", "className", "color", "tag", "text", "transparent"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-header', className, color);
  return React__default.createElement(Tag, _extends({
    "data-test": "card-header"
  }, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};
CardHeader.defaultProps = {
  tag: 'div'
};

var css$2 = ".Ripple {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  opacity: 1;\r\n  transform: scale(0);\r\n}\r\n\r\n.Ripple-outline {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.Ripple.is-reppling {\r\n  animation: ripple 0.5s linear;\r\n}\r\n\r\n.Ripple-parent {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes ripple {\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3);\r\n  }\r\n}\r\n";
styleInject(css$2);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Waves);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Waves)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: _this.props.cursorPos
    });

    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var cursorPos = this.props.cursorPos;

      if (prevState.cursorPos.time !== cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: cursorPos
          }, function () {
            _this2.replying();
          });
        } else {
          this.replying();
        }
      }
    }
  }, {
    key: "replying",
    value: function replying() {
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight;
      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);
      var centralized = rippleWidthShouldBe / 2;
      var cursorPos = this.state.cursorPos;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: cursorPos.top - buttonPos.top - centralized,
        left: cursorPos.left - buttonPos.left - centralized
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          outline = _this$props.outline,
          flat = _this$props.flat,
          dark = _this$props.dark;
      var _this$state = this.state,
          animate = _this$state.animate,
          top = _this$state.top,
          left = _this$state.left,
          width = _this$state.width,
          height = _this$state.height;
      return React__default.createElement("div", {
        "data-test": "waves",
        className: "Ripple ".concat(outline || flat || dark ? 'Ripple-outline ' : '').concat(animate ? 'is-reppling' : ''),
        style: {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          width: "".concat(width, "px"),
          height: "".concat(height, "px")
        }
      });
    }
  }]);

  return Waves;
}(React__default.Component);

Waves.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node,
  cursorPos: PropTypes.object,
  flat: PropTypes.bool,
  outline: PropTypes.bool
};

var Mask = function Mask(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      pattern = props.pattern,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "overlay", "pattern", "tag"]);

  var classes = classNames('mask', pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
  return React__default.createElement(Tag, _extends({
    "data-test": "mask"
  }, attributes, {
    className: classes
  }), children);
};

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string
};
Mask.defaultProps = {
  className: '',
  overlay: '',
  pattern: '',
  tag: 'div'
};

var View = function View(props) {
  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
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
      fixed = props.fixed,
      hover = props.hover,
      rounded = props.rounded,
      src = props.src,
      Tag = props.tag,
      waves = props.waves,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["cascade", "children", "className", "fixed", "hover", "rounded", "src", "tag", "waves", "zoom"]);

  var classes = classNames('view', cascade && 'view-cascade', className, hover && 'overlay', rounded && 'rounded', waves ? 'Ripple-parent' : false, zoom && 'zoom');
  var viewStyle = src ? {
    backgroundAttachment: fixed ? 'fixed' : null,
    backgroundImage: "url(\"".concat(src, "\")"),
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  } : {};
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "data-test": "view",
    onMouseDown: handleClick,
    onTouchStart: handleClick,
    style: viewStyle
  }), children, waves && React__default.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

View.defaultProps = {
  cascade: false,
  className: '',
  hover: false,
  rounded: false,
  src: '',
  tag: 'div',
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

var CardImage = function CardImage(props) {
  var _useState = React.useState({}),
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
      className = props.className,
      hover = props.hover,
      overlay = props.overlay,
      src = props.src,
      tag = props.tag,
      top = props.top,
      waves = props.waves,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["cascade", "className", "hover", "overlay", "src", "tag", "top", "waves", "zoom"]);

  var classes = classNames(top && 'card-img-top', className);
  var Tag = tag;
  var innerContent = React__default.createElement(Tag, _extends({
    "data-test": "card-image",
    src: src
  }, attributes, {
    className: classes
  }));

  if (src) {
    return React__default.createElement(View, {
      zoom: zoom,
      hover: hover,
      cascade: cascade
    }, React__default.createElement("div", {
      className: "Ripple-parent",
      onMouseDown: handleClick,
      style: {
        touchAction: 'unset'
      }
    }, innerContent, React__default.createElement(Mask, {
      overlay: overlay
    }), waves && React__default.createElement(Waves, {
      cursorPos: cursorPos
    })));
  }

  return React__default.createElement("div", null, innerContent);
};

CardImage.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};
CardImage.defaultProps = {
  tag: 'img',
  overlay: 'white-slight',
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText = function CardText(props) {
  var textNode = props.children,
      className = props.className,
      muted = props.muted,
      small = props.small,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "muted", "small", "tag"]);

  var classes = classNames('card-text', muted && 'text-muted', className);
  var children = small ? React__default.createElement("small", null, textNode) : textNode;
  return React__default.createElement(Tag, _extends({
    "data-test": "card-text"
  }, attributes, {
    className: classes
  }), children);
};

CardText.propTypes = {
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardText.defaultProps = {
  tag: 'p'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      sub = props.sub,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "sub", "tag"]);

  var classes = classNames(sub ? 'card-subtitle' : 'card-title', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "card-title"
  }, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = {
  className: PropTypes.string,
  sub: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardTitle.defaultProps = {
  tag: 'h4',
  sub: false
};

var CardVideo = function CardVideo(props) {
  var children = props.children,
      className = props.className,
      src = props.src,
      attributes = _objectWithoutProperties(props, ["children", "className", "src"]);

  var classes = classNames(className);
  return React__default.createElement(mdbreact.MDBIframe, _extends({
    "data-test": "card-video"
  }, attributes, {
    src: src,
    className: classes
  }), children);
};

CardVideo.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

var Control = function Control(props) {
  var className = props.className,
      direction = props.direction,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      multiItem = props.multiItem,
      onClick = props.onClick,
      Tag = props.tag,
      testimonial = props.testimonial;
  var text;

  if (direction === 'prev') {
    text = 'Previous';
  } else if (direction === 'next') {
    text = 'Next';
  }

  var classes = classNames("carousel-control-".concat(direction), className);
  var caretClasses = classNames("carousel-control-".concat(direction, "-icon"));

  if (testimonial) {
    var arrow = direction === 'prev' ? 'left' : 'right';
    classes = classNames("carousel-control-".concat(direction), arrow, 'carousel-control', className);
    caretClasses = classNames("icon-".concat(direction));
  }

  if (multiItem) {
    classes = classNames('btn-floating');
  }

  return React__default.createElement(Tag, {
    "data-test": "carousel-control",
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
};

Control.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  multiItem: PropTypes.bool,
  onClick: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool
};
Control.defaultProps = {
  tag: 'a'
};

var CarouselIndicator = function CarouselIndicator(props) {
  var active = props.active,
      alt = props.alt,
      children = props.children,
      className = props.className,
      img = props.img,
      attributes = _objectWithoutProperties(props, ["active", "alt", "children", "className", "img"]);

  var classes = classNames(active && 'active', className);
  return React__default.createElement("li", _extends({
    "data-test": "carousel-indicator"
  }, attributes, {
    className: classes
  }), img && React__default.createElement("img", {
    src: img,
    alt: alt,
    className: "img-fluid"
  }), children);
};

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};
CarouselIndicator.defaultProps = {
  alt: 'Carousel thumbnail',
  className: '',
  img: ''
};

var CarouselIndicators = function CarouselIndicators(props) {
  var children = props.children,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames('carousel-indicators', className);
  return React__default.createElement("ol", _extends({
    "data-test": "carousel-indicators"
  }, attributes, {
    className: classes
  }), children);
};

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CarouselIndicators.defaultProps = {
  className: ''
};

var css$3 = ".carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block !important;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\r\n}\r\n\r\n.carousel-fade .carousel-item.active {\r\n  position: relative;\r\n  z-index: 1;\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-multi-item .carousel-item {\r\n  display: inline-block !important;\r\n}\r\n\r\n.carousel .carousel-slide-item {\r\n  transition: left 0.5s;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\r\n  z-index: 2;\r\n}\r\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItem: _this.props.activeItem,
      initialLength: _this.props.length,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    });

    _defineProperty(_assertThisInitialized(_this), "carouselRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "clearCycleIntervalHandler", function () {
      return clearInterval(_this.cycleInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeAvailableHandler", function () {
      return _this.setState({
        swipeAvailable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartInterval", function () {
      var interval = _this.props.interval;

      if (interval !== false) {
        _this.clearCycleIntervalHandler();

        _this.cycleInterval = setInterval(_this.next, interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      var _this$state = _this.state,
          activeItem = _this$state.activeItem,
          initialLength = _this$state.initialLength;
      var nextIndex = activeItem + 1;
      var nextItem = nextIndex > initialLength ? 1 : nextIndex;

      _this.goToIndex(nextItem);
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      var _this$state2 = _this.state,
          activeItem = _this$state2.activeItem,
          initialLength = _this$state2.initialLength;
      var prevIndex = activeItem - 1;
      var prevItem = prevIndex < 1 ? initialLength : prevIndex;

      _this.goToIndex(prevItem);
    });

    _defineProperty(_assertThisInitialized(_this), "goToIndex", function (item) {
      _this.setState(_objectSpread2({}, _this.state, {
        activeItem: item
      }));

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      var mobileGesture = _this.props.mobileGesture;

      if (mobileGesture !== false) {
        _this.setState({
          initialX: e.touches[0].clientX,
          initialY: e.touches[0].clientY
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      _this.setState({
        swipeAvailable: false
      });

      var _this$state3 = _this.state,
          initialX = _this$state3.initialX,
          initialY = _this$state3.initialY;

      if (initialX === null || initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          _this.next();
        } else {
          _this.prev();
        }
      }

      _this.setState({
        initialX: null,
        initialY: null
      });
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          interval = _this$props.interval,
          thumbnails = _this$props.thumbnails;

      if (interval === false) {
        return;
      }

      this.cycleInterval = setInterval(this.next, interval); // get images src atr

      if (thumbnails) {
        var CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item img');
        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });
        this.setState(_objectSpread2({}, this.state, {
          srcArray: srcArray
        }));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var length = this.props.length;
      var InitialLength = this.state.InitialLength;

      if (InitialLength !== length) {
        this.setState({
          InitialLength: length
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var interval = this.props.interval;

      if (interval === false) {
        return;
      }

      this.clearCycleIntervalHandler();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this$state4 = this.state,
          activeItem = _this$state4.activeItem,
          initialLength = _this$state4.initialLength;
      var slide = this.props.slide;
      return {
        activeItem: activeItem,
        length: initialLength,
        slide: slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          activeItem = _this$props2.activeItem,
          children = _this$props2.children,
          className = _this$props2.className,
          interval = _this$props2.interval,
          mobileGesture = _this$props2.mobileGesture,
          multiItem = _this$props2.multiItem,
          onHoverStop = _this$props2.onHoverStop,
          showControls = _this$props2.showControls,
          showIndicators = _this$props2.showIndicators,
          slide = _this$props2.slide,
          Tag = _this$props2.tag,
          testimonial = _this$props2.testimonial,
          thumbnails = _this$props2.thumbnails,
          attributes = _objectWithoutProperties(_this$props2, ["activeItem", "children", "className", "interval", "mobileGesture", "multiItem", "onHoverStop", "showControls", "showIndicators", "slide", "tag", "testimonial", "thumbnails"]);

      var _this$state5 = this.state,
          initialLength = _this$state5.initialLength,
          srcArray = _this$state5.srcArray,
          swipeAvailable = _this$state5.swipeAvailable;
      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        var activeItem = _this2.state.activeItem;
        CarouselIndicatorsArray.push(React__default.createElement(CarouselIndicator, {
          img: thumbnails ? srcArray[i - 1] : null,
          key: i,
          active: activeItem === i,
          onClick: function onClick() {
            return _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= initialLength; i++) {
        _loop(i);
      }

      var isMultiItem = !!multiItem;
      var isTestimonial = !!testimonial;
      return React__default.createElement(Tag, _extends({
        "data-test": "carousel",
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel,
        onTouchStart: this.startTouch,
        onTouchMove: swipeAvailable ? this.moveTouch : null,
        onTouchEnd: this.swipeAvailableHandler,
        onMouseEnter: onHoverStop ? this.clearCycleIntervalHandler : null,
        onMouseLeave: onHoverStop ? this.restartInterval : null
      }), showControls && multiItem && React__default.createElement("div", {
        className: "controls-top"
      }, React__default.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React__default.createElement(React__default.Fragment, null, React__default.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React__default.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "next",
        role: "button",
        onClick: this.next
      })), showIndicators && React__default.createElement(CarouselIndicators, null, CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(React.Component);

Carousel.propTypes = {
  activeItem: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  length: PropTypes.number,
  mobileGesture: PropTypes.bool,
  multiItem: PropTypes.bool,
  onHoverStop: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool,
  thumbnails: PropTypes.bool
};
Carousel.defaultProps = {
  interval: 6000,
  mobileGesture: true,
  onHoverStop: true,
  showControls: true,
  showIndicators: true,
  tag: 'div'
};
Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var CarouselCaption = function CarouselCaption(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('carousel-caption', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "carousel-caption"
  }, attributes, {
    className: classes
  }), children);
};

CarouselCaption.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselCaption.defaultProps = {
  tag: 'div'
};

var CarouselInner = function CarouselInner(props) {
  var active = props.active,
      children = props.children,
      childrenCount = props.childrenCount,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "childrenCount", "className", "tag"]);

  var classes = classNames('carousel-inner', active ? 'active' : '', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "carousel-inner"
  }, attributes, {
    className: classes
  }), children);
};

CarouselInner.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselInner.defaultProps = {
  tag: 'div'
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "moveForward", function () {
      _this.style = {
        position: 'absolute',
        left: '100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "moveBackwards", function () {
      _this.style = {
        position: 'absolute',
        left: '-100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "makeVisible", function () {
      _this.style = {
        left: '0'
      };
    });

    return _this;
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      var _this$context = this.context,
          slide = _this$context.slide,
          activeItem = _this$context.activeItem;
      itemId = parseInt(itemId, 10);
      var classes = classNames('carousel-item', {
        'active carousel-slide-item': slide,
        active: !slide && itemId === activeItem
      }, className);
      var slideIndex = activeItem - itemId;

      if (slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      } else {
        this.makeVisible();
      }

      return React__default.createElement(Tag, _extends({
        "data-test": "carousel-item"
      }, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(React.Component);

CarouselItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselItem.defaultProps = {
  tag: 'div'
};
CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var MDBCloseIcon = function MDBCloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      props = _objectWithoutProperties(_ref, ["onClick", "className", "ariaLabel"]);

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e);
  };

  var btnClasses = className ? ['close'].concat(_toConsumableArray(className.split(' '))) : ['close'];
  return React__default.createElement("button", _extends({
    "data-test": "close-button",
    type: "button"
  }, props, {
    className: btnClasses.join(' '),
    onClick: onClickHandler,
    "aria-label": ariaLabel
  }), React__default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
MDBCloseIcon.defaultProps = {
  ariaLabel: 'Close'
};
MDBCloseIcon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
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

  var classes = classNames(size && "col-".concat(size), xs && "col-xs-".concat(xs), sm && "col-sm-".concat(sm), md && "col-md-".concat(md), lg && "col-lg-".concat(lg), xl && "col-xl-".concat(xl), !size && !xs && !sm && !md && !lg && !xl ? 'col' : '', top && 'align-self-start', middle && 'align-self-center', bottom && 'align-self-end', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "col"
  }, attributes, {
    className: classes
  }));
};

Col.propTypes = {
  bottom: PropTypes.bool,
  className: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  middle: PropTypes.bool,
  size: PropTypes.string,
  sm: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  xl: PropTypes.string,
  xs: PropTypes.string
};
Col.defaultProps = {
  tag: 'div',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: _this.props.id,
      collapse: HIDDEN,
      height: null
    });

    _defineProperty(_assertThisInitialized(_this), "element", null);

    _defineProperty(_assertThisInitialized(_this), "setTransitionTag", function (collapse, callback, delayType) {
      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: collapse,
          height: null
        }, callback());
      }, _this.getDelay(delayType));
    });

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      var onOpened = _this.props.onOpened;

      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.setTransitionTag(SHOWN, onOpened, 'show');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollapse", function () {
      var onClosed = _this.props.onClosed;

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

      _this.setTransitionTag(HIDDEN, onClosed, 'hide');
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;
      var _this$state = this.state,
          collapse = _this$state.collapse,
          id = _this$state.id;

      if ((isOpen === id || isOpen === true) && collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.props.isOpen;
      var collapse = this.state.collapse;
      var willOpen = typeof isOpen !== 'boolean' ? isOpen === prevState.id : isOpen;

      if (willOpen && collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && prevState.collapse === SHOWN) {
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

      if (_typeof(delay) === 'object') {
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

      var _this$state2 = this.state,
          collapse = _this$state2.collapse,
          height = _this$state2.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = 'collapsing';
          break;

        case SHOWN:
          collapseClass = 'collapse show';
          break;

        case HIDE:
          collapseClass = 'collapsing';
          break;

        case HIDDEN:
          collapseClass = 'collapse';
          break;

        default:
          // HIDDEN
          collapseClass = 'collapse';
      }

      var classes = classNames(collapseClass, navbar ? 'navbar-collapse' : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React__default.createElement("div", _extends({
        "data-test": "collapse"
      }, attributes, {
        style: _objectSpread2({}, attributes.style, {}, style),
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
  children: PropTypes.node,
  className: PropTypes.node,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number,
    show: PropTypes.number
  })]),
  id: PropTypes.string,
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  navbar: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func
};
Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container = function Container(props) {
  var className = props.className,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "fluid", "tag"]);

  var classes = classNames(fluid ? 'container-fluid' : 'container', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "container"
  }, attributes, {
    className: classes
  }));
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Container.defaultProps = {
  tag: 'div',
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
  var theadClasses = classNames(color && (color !== 'dark' && color !== 'light' ? color : "thead-".concat(color)), textWhite && 'text-white');
  return React__default.createElement(React__default.Fragment, null, (scrollY || scrollX) && React__default.createElement("colgroup", null, columns.map(function (col) {
    return React__default.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || 'auto',
        minWidth: "".concat(col.width, "px") || 'auto'
      }
    });
  })), React__default.createElement("thead", {
    "data-test": "datatable-head",
    className: theadClasses || undefined
  }, React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: classNames(col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : null, sortable && col.sort !== 'disabled' && (sorted && col.sort ? "sorting_".concat(col.sort === 'asc' ? 'desc' : 'asc') : 'sorting'))
    }, col.attributes), col.label);
  }))));
};

DataTableHead.propTypes = {
  sorted: PropTypes.bool.isRequired,
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

var css$4 = ".table-wrapper-scroll-y {\r\n  display: block;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n";
styleInject(css$4);

var Table = function Table(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      className = props.className,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
      responsiveXl = props.responsiveXl,
      scrollY = props.scrollY,
      small = props.small,
      striped = props.striped,
      theadColor = props.theadColor,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "className", "dark", "fixed", "hover", "maxHeight", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "scrollY", "small", "striped", "theadColor"]);

  var tableClasses = classNames('table', {
    'w-auto': autoWidth,
    'table-bordered': bordered,
    'table-borderless': borderless,
    'btn-table': btn,
    'table-fixed': fixed,
    'table-hover': hover,
    'table-sm': small,
    'table-striped': striped
  }, className);
  var wrapperClasses = classNames({
    'table-dark': dark,
    'table-responsive': responsive,
    'table-responsive-sm': responsiveSm,
    'table-responsive-md': responsiveMd,
    'table-responsive-lg': responsiveLg,
    'table-responsive-xl': responsiveXl,
    'table-wrapper-scroll-y': scrollY
  });
  var wrapperStyles = {
    maxHeight: maxHeight ? "".concat(maxHeight) : null
  };
  return React__default.createElement("div", {
    "data-test": "table",
    className: wrapperClasses,
    style: wrapperStyles
  }, React__default.createElement("table", _extends({}, attributes, {
    className: tableClasses
  }), children));
};

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string
};

var TableBody = function TableBody(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      rows = props.rows,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "rows", "textWhite"]);

  var classes = classNames(color, {
    'text-white': textWhite
  });

  var renderTD = function renderTD(field, key, array, row) {
    if (field === 'clickEvent') {
      return null;
    }

    if (field !== 'colspan') {
      if (row.message) {
        return key === 0 && React__default.createElement("td", {
          key: key,
          colSpan: row.colspan
        }, row.message);
      } else {
        return array[key + 1] !== 'colspan' && row[field] !== null && React__default.createElement("td", {
          key: key
        }, row[field]) || React__default.createElement("td", {
          key: key
        });
      }
    }

    return React__default.createElement("td", {
      key: key,
      colSpan: row.colspan
    }, row[array[key - 1]]);
  };

  return React__default.createElement("tbody", _extends({
    "data-test": "table-body"
  }, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React__default.createElement("tr", {
      onClick: row.hasOwnProperty('clickEvent') ? row.clickEvent : undefined,
      key: index
    }, columns ? columns.map(function (_ref, key, array) {
      var field = _ref.field;
      return renderTD(field, key, array, row);
    }) : Object.keys(row).map(function (field, key, array) {
      return renderTD(field, key, array, row);
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
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React__default.createElement("thead", _extends({
    "data-test": "table-foot"
  }, attributes, {
    className: classes || undefined
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : undefined
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
      handleSort = props.handleSort,
      hover = props.hover,
      noBottomColumns = props.noBottomColumns,
      noRecordsFoundLabel = props.noRecordsFoundLabel,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
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
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "handleSort", "hover", "noBottomColumns", "noRecordsFoundLabel", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "rows", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React__default.createElement("div", {
    "data-test": "datatable-table",
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
    sortable: sortable,
    sorted: sorted
  }), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows,
    columns: columns
  }), !noBottomColumns && React__default.createElement(TableFoot, {
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
  handleSort: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  sorted: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  noBottomColumns: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.object)
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
      handleSort = props.handleSort,
      handleTableBodyScroll = props.handleTableBodyScroll,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
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
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "handleSort", "handleTableBodyScroll", "hover", "maxHeight", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  var minWidth = scrollX ? "".concat(columns.map(function (col) {
    return col.width;
  }).reduce(function (prev, curr) {
    return prev + curr;
  }, 0), "px") : 'auto';
  return React__default.createElement("div", {
    "data-test": "datatable-table-scroll",
    className: "col-sm-12"
  }, React__default.createElement("div", {
    className: "dataTables_scroll"
  }, React__default.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: 'hidden'
    }
  }, React__default.createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: 'relative',
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: 'content-box',
      paddingRight: scrollY ? '15px' : null,
      minWidth: minWidth
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
    sortable: sortable,
    sorted: sorted
  })))), React__default.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: 'auto'
    },
    onScroll: handleTableBodyScroll
  }, React__default.createElement(Table, _extends({
    style: {
      minWidth: minWidth
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
        width: "".concat(col.width, "px") || 'auto',
        minWidth: "".concat(col.width, "px") || 'auto'
      }
    });
  })), React__default.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows,
    columns: columns
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  sorted: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  translateScrollHead: PropTypes.number.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  maxHeight: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
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
    "data-test": "datatable-select",
    className: "dataTables_length bs-select"
  }, React__default.createElement("label", null, label, React__default.createElement("select", {
    value: value,
    onChange: getValue,
    className: "custom-select custom-select-sm form-control form-control-sm",
    style: {
      marginLeft: '.5rem'
    }
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
      label = props.label,
      barReverse = props.barReverse;
  return React__default.createElement("div", {
    "data-test": "datatable-entries",
    className: "col-sm-12 col-md-6"
  }, paging && displayEntries && React__default.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label,
    barReverse: barReverse
  }));
};

DataTableEntries.propTypes = {
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEntriesChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label;
  return React__default.createElement("div", {
    "data-test": "datatable-input",
    className: "dataTables_filter"
  }, React__default.createElement("label", null, label || 'Search', React__default.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || 'Search'
  })));
};

DataTableInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label,
      barReverse = props.barReverse;
  return React__default.createElement("div", {
    "data-test": "datatable-search",
    className: "col-sm-12 col-md-6"
  }, searching && React__default.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label,
    barReverse: barReverse
  }));
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      label = props.label,
      noRecordsFoundLabel = props.noRecordsFoundLabel,
      pages = props.pages;
  var SHOWING_LABEL = label[0];
  var TO_LABEL = label[1];
  var OF_LABEL = label[2];
  var ENTRIES_LABEL = label[3];
  var NO_RECORDS = filteredRows.length > 0 && filteredRows[0].message === noRecordsFoundLabel;
  var RECORDS = activePage > 0 ? activePage * entries + 1 : activePage + 1;
  var RECORDS_ON_PAGE = pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length;
  var ENTRIES = filteredRows.length;
  return React__default.createElement("div", {
    "data-test": "datatable-info",
    className: "col-sm-12 col-md-5"
  }, info && React__default.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, !NO_RECORDS ? "".concat(SHOWING_LABEL, " ").concat(RECORDS, " ").concat(TO_LABEL, " ").concat(RECORDS_ON_PAGE, " ").concat(OF_LABEL, " ").concat(ENTRIES, " ").concat(ENTRIES_LABEL) : "".concat(SHOWING_LABEL, " 0 ").concat(ENTRIES_LABEL)));
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  noRecordsFoundLabel: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};
DataTableInfo.defaultProps = {
  label: ['Showing', 'to', 'of', 'entries']
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
    'pagination-circle': circle
  }, _defineProperty(_classNames, "pg-".concat(color), color), _defineProperty(_classNames, "pagination-".concat(size), size), _classNames), 'pagination', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "pagination"
  }, attributes, {
    className: classes
  }), children);
};

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Pagination.defaultProps = {
  circle: false,
  className: '',
  color: '',
  tag: 'ul'
};

var PageItem = function PageItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "className", "children", "disabled", "tag"]);

  var classes = classNames({
    disabled: disabled,
    active: active
  }, 'page-item', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "page-item"
  }, attributes, {
    className: classes
  }), children);
};

PageItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  tag: 'li'
};

var PageLink = function PageLink(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('page-link', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "page-link"
  }, attributes, {
    className: classes
  }), children);
};

PageLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageLink.defaultProps = {
  tag: 'a'
};

var DataTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTablePagination, _Component);

  function DataTablePagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTablePagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTablePagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: _this.props.pages,
      pGroups: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      var pages = _this.props.pages;

      if (prevProps.pages !== pages) {
        _this.setState({
          pages: pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pagesIndexify", function () {
      var pages = _this.state.pages;

      var mutablePages = _toConsumableArray(pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_this), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      var pagesAmount = _this.props.pagesAmount;

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "choosePagesGroup", function () {
      var _this$props = _this.props,
          activePage = _this$props.activePage,
          pagesAmount = _this$props.pagesAmount;
      var pGroups = _this.state.pGroups;
      var pGroupNumber = Math.floor(activePage / pagesAmount);
      return pGroups.length ? pGroups[pGroupNumber] : [];
    });

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
      var _this$props2 = this.props,
          activePage = _this$props2.activePage,
          changeActivePage = _this$props2.changeActivePage,
          pages = _this$props2.pages,
          label = _this$props2.label;
      return React__default.createElement("div", {
        "data-test": "datatable-pagination",
        className: "col-sm-12 col-md-7"
      }, React__default.createElement("div", {
        className: "dataTables_paginate"
      }, React__default.createElement(Pagination, null, React__default.createElement(PageItem, {
        disabled: activePage <= 0
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
        }, page.index + 1, page.index === activePage && React__default.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React__default.createElement(PageItem, {
        disabled: !pages.length || activePage === pages.length - 1
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
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activePage: 0,
      columns: _this.props.data.columns || [],
      entries: _this.props.entries,
      filteredRows: _this.props.data.rows || [],
      filterOptions: [],
      order: _this.props.order || [],
      pages: [],
      rows: _this.props.data.rows || [],
      search: '',
      searchSelect: '',
      sorted: false,
      translateScrollHead: 0,
      unsearchable: []
    });

    _defineProperty(_assertThisInitialized(_this), "setData", function () {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var callback = arguments.length > 2 ? arguments[2] : undefined;

      _this.setState(function () {
        return {
          columns: columns,
          rows: rows,
          filteredRows: _this.props.disableRetreatAfterSorting ? _this.filterRows() : rows
        };
      }, callback && typeof callback === 'function' && function () {
        return callback();
      });
    });

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

    _defineProperty(_assertThisInitialized(_this), "fetchData", function (link, isPaginateRows) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this.setData(json.rows, json.columns, isPaginateRows ? _this.paginateRows : null);
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pagesAmount", function () {
      return Math.ceil(_this.state.filteredRows.length / _this.state.entries);
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRowsInitialy", function () {
      var _this$state = _this.state,
          rows = _this$state.rows,
          entries = _this$state.entries,
          pages = _this$state.pages;

      var pagesAmount = _this.pagesAmount();

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * entries;
        pages.push(rows.slice(pageEndIndex - entries, pageEndIndex));
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
      }, _this.props.onSearch && typeof _this.props.onSearch === 'function' && _this.props.onSearch(e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "checkFieldValue", function (array, field) {
      return array[field] && typeof array[field] !== 'string' ? array[field].props.searchvalue : array[field];
    });

    _defineProperty(_assertThisInitialized(_this), "checkField", function (field, a, b, direction) {
      var _ref = [_this.checkFieldValue(a, field), _this.checkFieldValue(b, field)],
          aField = _ref[0],
          bField = _ref[1];
      var comp = aField > bField ? -1 : 1;

      if (direction === 'asc') {
        comp *= -1;
      }

      return comp;
    });

    _defineProperty(_assertThisInitialized(_this), "sort", function (rows, sortRows, field, direction) {
      rows.sort(function (a, b) {
        if (sortRows && sortRows.includes(field)) {
          return _this.checkField(field, a, b, direction);
        }

        return direction === 'asc' ? a[field] < b[field] ? -1 : 1 : a[field] > b[field] ? -1 : 1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (field, sort) {
      var onSort = _this.props.onSort;

      if (sort === 'disabled') {
        return;
      }

      _this.setState(function (prevState) {
        var sortRows = _this.props.sortRows;
        var rows = prevState.rows,
            columns = prevState.columns;
        var direction = sort === 'desc' ? 'desc' : 'asc';

        _this.sort(rows, sortRows, field, direction);

        columns.forEach(function (col) {
          if (col.sort === 'disabled') {
            return;
          }

          col.sort = col.field === field ? col.sort === 'desc' ? 'asc' : 'desc' : '';
        });
        return {
          rows: rows,
          columns: columns,
          sorted: true
        };
      }, function () {
        return _this.filterRows();
      });

      onSort && typeof onSort === 'function' && onSort({
        column: field,
        direction: sort === 'desc' ? 'desc' : 'asc'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterRows", function () {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.search;
      var unsearchable = _this.state.unsearchable;
      var _this$props = _this.props,
          sortRows = _this$props.sortRows,
          noRecordsFoundLabel = _this$props.noRecordsFoundLabel;

      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if ((!unsearchable.length || !unsearchable.includes(key)) && typeof row[key] !== 'function') {
              var stringValue = '';

              if (sortRows && typeof row[key] !== 'string') {
                (function () {
                  var content = [];

                  var getContent = function getContent(element) {
                    return _typeof(element) === 'object' ? element.props.children && Array.from(element.props.children).map(function (el) {
                      return getContent(el);
                    }) : content.push(element);
                  };

                  getContent(row[key]);
                  stringValue = content.join('');
                })();
              } else if (row[key]) {
                stringValue = row[key].toString();
              }

              if (stringValue.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
            }
          }

          return false;
        });

        if (filteredRows.length === 0) {
          filteredRows.push({
            message: noRecordsFoundLabel,
            colspan: prevState.columns.length
          });
        }

        var test = {};

        if (_this.props.disableRetreatAfterSorting) {
          test = {
            filteredRows: filteredRows,
            activePage: prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1
          };
        } else if (!_this.props.disableRetreatAfterSorting) {
          test = {
            filteredRows: filteredRows,
            activePage: 0
          };
        }

        return test;
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRows", function () {
      var pagesAmount = _this.pagesAmount();

      _this.setState(function (prevState) {
        var pages = prevState.pages,
            entries = prevState.entries,
            filteredRows = prevState.filteredRows,
            activePage = prevState.activePage;
        var _this$props2 = _this.props,
            paging = _this$props2.paging,
            disableRetreatAfterSorting = _this$props2.disableRetreatAfterSorting;
        pages = [];

        if (paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * entries;
            pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex));
          }

          if (!disableRetreatAfterSorting) {
            activePage = activePage < pages.length || activePage === 0 ? activePage : pages.length - 1;
          }
        } else {
          pages.push(filteredRows);
          activePage = 0;
        }

        return {
          pages: pages,
          filteredRows: filteredRows,
          activePage: activePage
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeActivePage", function (page) {
      var onPageChange = _this.props.onPageChange;

      _this.setState({
        activePage: page
      });

      onPageChange && typeof onPageChange === 'function' && onPageChange({
        activePage: page + 1,
        pagesAmount: _this.pagesAmount()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          paging = _this$props3.paging;
      var _this$state2 = this.state,
          order = _this$state2.order,
          columns = _this$state2.columns,
          pages = _this$state2.pages,
          rows = _this$state2.rows;

      if (typeof data === 'string') {
        this.fetchData(data, this.paginateRows);
      }

      order.length && this.handleSort(order[0], order[1]);
      this.setUnsearchable(columns);

      if (paging) {
        this.paginateRowsInitialy();
      } else {
        pages.push(rows);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var columns = this.state.columns;
      var data = this.props.data;

      if (prevProps.data !== data) {
        typeof data === 'string' ? this.fetchData(data) : this.setData(data.rows, data.columns, this.paginateRows);
        this.setUnsearchable(columns);
        this.filterRows();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          autoWidth = _this$props4.autoWidth,
          barReverse = _this$props4.barReverse,
          bordered = _this$props4.bordered,
          borderless = _this$props4.borderless,
          btn = _this$props4.btn,
          children = _this$props4.children,
          className = _this$props4.className,
          dark = _this$props4.dark,
          data = _this$props4.data,
          disableRetreatAfterSorting = _this$props4.disableRetreatAfterSorting,
          displayEntries = _this$props4.displayEntries,
          entriesLabel = _this$props4.entriesLabel,
          entriesOptions = _this$props4.entriesOptions,
          exportToCSV = _this$props4.exportToCSV,
          filter = _this$props4.filter,
          fixed = _this$props4.fixed,
          hover = _this$props4.hover,
          info = _this$props4.info,
          infoLabel = _this$props4.infoLabel,
          maxHeight = _this$props4.maxHeight,
          noBottomColumns = _this$props4.noBottomColumns,
          noRecordsFoundLabel = _this$props4.noRecordsFoundLabel,
          onPageChange = _this$props4.onPageChange,
          onSearch = _this$props4.onSearch,
          onSort = _this$props4.onSort,
          order = _this$props4.order,
          pagesAmount = _this$props4.pagesAmount,
          paginationLabel = _this$props4.paginationLabel,
          paging = _this$props4.paging,
          responsive = _this$props4.responsive,
          responsiveLg = _this$props4.responsiveLg,
          responsiveMd = _this$props4.responsiveMd,
          responsiveSm = _this$props4.responsiveSm,
          responsiveXl = _this$props4.responsiveXl,
          scrollX = _this$props4.scrollX,
          scrollY = _this$props4.scrollY,
          searching = _this$props4.searching,
          searchLabel = _this$props4.searchLabel,
          small = _this$props4.small,
          sortable = _this$props4.sortable,
          sortRows = _this$props4.sortRows,
          striped = _this$props4.striped,
          tbodyColor = _this$props4.tbodyColor,
          tbodyTextWhite = _this$props4.tbodyTextWhite,
          theadColor = _this$props4.theadColor,
          theadTextWhite = _this$props4.theadTextWhite,
          attributes = _objectWithoutProperties(_this$props4, ["autoWidth", "barReverse", "bordered", "borderless", "btn", "children", "className", "dark", "data", "disableRetreatAfterSorting", "displayEntries", "entriesLabel", "entriesOptions", "exportToCSV", "filter", "fixed", "hover", "info", "infoLabel", "maxHeight", "noBottomColumns", "noRecordsFoundLabel", "onPageChange", "onSearch", "onSort", "order", "pagesAmount", "paginationLabel", "paging", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "scrollX", "scrollY", "searching", "searchLabel", "small", "sortable", "sortRows", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

      var _this$state3 = this.state,
          columns = _this$state3.columns,
          entries = _this$state3.entries,
          filteredRows = _this$state3.filteredRows,
          filterOptions = _this$state3.filterOptions,
          pages = _this$state3.pages,
          activePage = _this$state3.activePage,
          search = _this$state3.search,
          sorted = _this$state3.sorted,
          translateScrollHead = _this$state3.translateScrollHead;
      var tableClasses = classNames('dataTables_wrapper dt-bootstrap4', className);
      return React__default.createElement("div", {
        "data-test": "datatable",
        className: tableClasses
      }, React__default.createElement("div", {
        className: "row".concat(barReverse ? ' flex-row-reverse' : '')
      }, React__default.createElement(DataTableEntries, {
        paging: paging,
        displayEntries: displayEntries,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel,
        barReverse: barReverse
      }), React__default.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel,
        barReverse: barReverse
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
        noBottomColumns: noBottomColumns,
        noRecordsFoundLabel: noRecordsFoundLabel,
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
        sorted: sorted
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
        sorted: sorted,
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
        label: infoLabel,
        noRecordsFoundLabel: noRecordsFoundLabel
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
  barReverse: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disableRetreatAfterSorting: PropTypes.bool,
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  filter: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.arrayOf(PropTypes.string),
  maxHeight: PropTypes.string,
  noBottomColumns: PropTypes.bool,
  noRecordsFoundLabel: PropTypes.string,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  paging: PropTypes.bool,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  small: PropTypes.bool,
  sortable: PropTypes.bool,
  sortRows: PropTypes.arrayOf(PropTypes.string),
  striped: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {
    columns: [],
    rows: []
  },
  disableRetreatAfterSorting: false,
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Show entries',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['Showing', 'to', 'of', 'entries'],
  noRecordsFoundLabel: 'No matching records found',
  noBottomColumns: false,
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ['Previous', 'Next'],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: 'Search',
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

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return ReactDOM.findDOMNode(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "addEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var keyCode = e.which,
          type = e.type,
          target = e.target;
      var tab = keyCodes.tab;
      var MOUSE_RIGHT_CLICK = keyCode === 3;
      var TAB = keyCode === tab;
      var KEYUP = type === 'keyup';

      if (MOUSE_RIGHT_CLICK || KEYUP && !TAB) {
        return;
      }

      var container = _this.getContainer();

      if (container.contains(target) && container !== target && (!KEYUP || TAB)) {
        return;
      }

      _this.toggle();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e, items) {
      var up = keyCodes.up,
          down = keyCodes.down;
      var keyCode = e.which,
          target = e.target;
      var UP = keyCode === up;
      var DOWN = keyCode === down;

      var index = _toConsumableArray(items).findIndex(function (item) {
        return item === target;
      });

      if (UP && index > 0) {
        index -= 1;
      }

      if (DOWN && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var isOpen = _this.state.isOpen;
      var disabled = _this.props.disabled;
      var keyCode = e.which,
          target = e.target;
      var esc = keyCodes.esc,
          up = keyCodes.up,
          down = keyCodes.down,
          space = keyCodes.space;
      var SPACE = keyCode === space;
      var ESC = keyCode === esc;

      if (![esc, up, down, space].includes(keyCode) || /button/i.test(target.tagName) && SPACE || /input|textarea/i.test(target.tagName)) {
        return;
      }

      e.preventDefault();

      if (disabled) {
        return;
      }

      var container = _this.getContainer();

      if (SPACE && isOpen && container !== target) {
        target.click();
      }

      if (ESC || !isOpen) {
        _this.toggle();

        var btn = container.children[0];
        btn.focus();
        return;
      }

      var items = container.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled)');
      items.length && _this.handleFocus(e, items);
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          dropup = _this$props.dropup,
          dropright = _this$props.dropright,
          dropleft = _this$props.dropleft;
      return {
        isOpen: isOpen,
        dropup: dropup,
        dropright: dropright,
        dropleft: dropleft,
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
      var isOpen = this.state.isOpen;
      isOpen ? this.addEvents() : this.removeEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled']),
          className = _omit.className,
          children = _omit.children,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          dropright = _omit.dropright,
          dropleft = _omit.dropleft;

      var isOpen = this.state.isOpen;
      var classes = classNames((_classNames = {
        'btn-group': group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", isOpen), _defineProperty(_classNames, "dropup", dropup), _defineProperty(_classNames, "dropright", dropright), _defineProperty(_classNames, "dropleft", dropleft), _classNames), className);
      return React__default.createElement(reactPopper.Manager, null, React__default.createElement("div", {
        "data-test": "dropdown",
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func
};
Dropdown.defaultProps = {
  dropleft: false,
  dropright: false,
  dropup: false,
  tag: 'div'
};
Dropdown.childContextTypes = {
  dropleft: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          header = _this$props.header,
          divider = _this$props.divider,
          onClick = _this$props.onClick,
          toggle = _this$props.toggle;

      if (disabled || header || divider) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }

      if (toggle) {
        _this.context.toggle(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          header = _this$props2.header,
          divider = _this$props2.divider;

      if (disabled || header || divider) {
        return '-1';
      }

      return '0';
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          href = _omit.href,
          active = _omit.active,
          disabled = _omit.disabled,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "href", "active", "disabled"]);

      var toggle = this.props.toggle;
      var classes = classNames({
        active: active,
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }, className);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (href) {
          Tag = 'a';
        }
      }

      var type = Tag === 'button' && (props.onClick || toggle) ? 'button' : undefined;
      return React__default.createElement(Tag, _extends({
        "data-test": "dropdown-item",
        type: type
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick,
        href: href
      }));
    }
  }]);

  return DropdownItem;
}(React.Component);

DropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.bool
};
DropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};
DropdownItem.contextTypes = {
  toggle: PropTypes.func
};

var DropdownMenuComponent = function DropdownMenuComponent(_ref) {
  var Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React__default.createElement(Tag, _extends({
    "data-test": "dropdown-menu-component",
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
  children: PropTypes.node.isRequired,
  d_key: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  tag: PropTypes.any.isRequired
};

var css$5 = ".dropup .dropdown-menu {\r\n  top: auto !important;\r\n  bottom: 100% !important;\r\n  transform: translate3d(5px, 5px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  left: 0 !important;\r\n  right: auto !important;\r\n}\r\n";
styleInject(css$5);

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
      var _classNames;

      var _this$props = this.props,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          flip = _this$props.flip,
          modifiers = _this$props.modifiers,
          right = _this$props.right,
          tag = _this$props.tag,
          attrs = _objectWithoutProperties(_this$props, ["basic", "children", "className", "color", "flip", "modifiers", "right", "tag"]);

      var _this$context = this.context,
          isOpen = _this$context.isOpen,
          dropup = _this$context.dropup,
          dropright = _this$context.dropright,
          dropleft = _this$context.dropleft;
      var classes = classNames((_classNames = {
        'dropdown-menu-right': right
      }, _defineProperty(_classNames, "dropdown-".concat(color), color), _defineProperty(_classNames, "show", isOpen), _defineProperty(_classNames, "basic", basic), _classNames), 'dropdown-menu', className);
      var Tag = tag;

      if (isOpen) {
        var position1 = dropup ? 'top' : dropright ? 'right' : dropleft ? 'left' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
      }

      return React__default.createElement(reactPopper.Popper, {
        modifiers: modifiers || !flip && {
          flip: {
            enabled: false
          }
        },
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement,
        "data-test": "dropdown-menu"
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
          isOpen: isOpen,
          tag: Tag,
          tabIndex: "-1",
          role: "menu",
          attributes: attrs,
          aria: !isOpen,
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
  modifiers: PropTypes.object,
  right: PropTypes.bool,
  tag: PropTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: true,
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

var Button = function Button(props) {
  var _classNames;

  var _useState = React.useState({}),
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

  var action = props.action,
      active = props.active,
      block = props.block,
      children = props.children,
      circle = props.circle,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      download = props.download,
      flat = props.flat,
      gradient = props.gradient,
      innerRef = props.innerRef,
      outline = props.outline,
      role = props.role,
      rounded = props.rounded,
      size = props.size,
      social = props.social,
      Tag = props.tag,
      target = props.target,
      type = props.type,
      attributes = _objectWithoutProperties(props, ["action", "active", "block", "children", "circle", "className", "color", "disabled", "download", "flat", "gradient", "innerRef", "outline", "role", "rounded", "size", "social", "tag", "target", "type"]);

  var classes = classNames(color !== '' && "btn-".concat(color), color && outline && "btn-outline-".concat(color), 'btn', 'Ripple-parent', gradient && "".concat(gradient, "-gradient"), (_classNames = {
    active: active,
    'btn-circle': circle,
    'btn-block': block,
    'btn-action': action
  }, _defineProperty(_classNames, "btn-".concat(social), social), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", disabled), _classNames), className);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return React__default.createElement(Tag, _extends({
    "data-test": "button",
    type: Tag === 'button' && !type ? 'button' : type,
    target: target,
    role: Tag === 'a' && !role ? 'button' : role,
    className: classes,
    ref: innerRef,
    onMouseUp: handleClick,
    onTouchStart: handleClick
  }, attributes, {
    download: download,
    disabled: disabled
  }), children, !disabled && React__default.createElement(Waves, {
    cursorPos: cursorPos,
    outline: outline,
    flat: flat || rounded
  }));
};

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};
Button.propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.string,
  social: PropTypes.string,
  tag: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          nav = _this$props.nav,
          tag = _this$props.tag,
          onClick = _this$props.onClick;
      var toggle = _this.context.toggle;

      if (disabled) {
        e.preventDefault();
        return;
      }

      if (nav && !tag) {
        e.preventDefault();
      }

      if (onClick) {
        onClick(e);
      }

      toggle(e);
    });

    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          color = _this$props2.color,
          caret = _this$props2.caret,
          nav = _this$props2.nav,
          tag = _this$props2.tag,
          props = _objectWithoutProperties(_this$props2, ["className", "color", "caret", "nav", "tag"]);

      var isOpen = this.context.isOpen;
      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = classNames({
        'dropdown-toggle': caret,
        'nav-link': nav
      }, className);
      var children = props.children || React__default.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag = tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      }

      return React__default.createElement(reactPopper.Reference, {
        "data-test": "dropdown-toggle"
      }, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": isOpen,
          ref: ref
        }), children) : React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = {
  'aria-haspopup': PropTypes.bool,
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  color: 'secondary'
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var EdgeHeader = function EdgeHeader(props) {
  var color = props.color,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "className", "tag"]);

  var classes = classNames('edge-header', color, className);
  return React__default.createElement(Tag, _extends({
    "data-test": "edgeHeader"
  }, attributes, {
    className: classes
  }));
};

EdgeHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
EdgeHeader.defaultProps = {
  color: 'deep-purple',
  tag: 'div'
};

var Footer = function Footer(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "children", "className", "tag"]);

  var classes = classNames('page-footer', color && color, className);
  return React__default.createElement(Tag, _extends({
    "data-test": "footer"
  }, attributes, {
    className: classes
  }), children);
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Footer.defaultProps = {
  tag: 'footer'
};

var FormInline = function FormInline(props) {
  var _useState = React.useState({}),
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

  var classes = classNames('form-inline', waves && 'Ripple-parent', className);
  return React__default.createElement("form", _extends({
    "data-test": "form-inline"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), children, waves && React__default.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

var FreeBird = function FreeBird(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames('container free-bird', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "freebird"
  }, attributes, {
    className: classes
  }));
};

FreeBird.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
FreeBird.defaultProps = {
  tag: 'div'
};

var css$6 = ".mdb-gallery {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  overflow-y: auto;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n";
styleInject(css$6);

var Gallery = React__default.forwardRef(function Gallery(props, ref) {
  var _props$cellHeight = props.cellHeight,
      cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight,
      children = props.children,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      tag = props.tag,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 4 : _props$spacing,
      style = props.style,
      attributes = _objectWithoutProperties(props, ["cellHeight", "children", "className", "cols", "tag", "spacing", "style"]);

  var classes = classNames('mdb-gallery', className);
  return React__default.createElement(mdbreact.MDBBox, _extends({
    tag: tag
  }, attributes, {
    style: _objectSpread2({
      margin: -spacing / 2
    }, style),
    className: classes,
    ref: ref
  }), React__default.Children.map(children, function (child) {
    if (!React__default.isValidElement(child)) {
      return null;
    }

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return React__default.cloneElement(child, {
      style: _objectSpread2({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
Gallery.propTypes = {
  cellHeight: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  spacing: PropTypes.number,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Gallery.defaultProps = {
  tag: 'ul'
};

var css$7 = ".mdb-gallery-element {\r\n  box-sizing: border-box;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mdb-gallery-title {\r\n  height: 100%;\r\n  display: block;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.img-full-height {\r\n  height: 100%;\r\n  transform: translateX(-50%);\r\n  position: relative;\r\n  left: 50%;\r\n}\r\n\r\n.img-full-width {\r\n  width: 100%;\r\n  transform: translateY(-50%);\r\n  position: relative;\r\n  top: 50%;\r\n}\r\n";
styleInject(css$7);

var imgClass = function imgClass(img) {
  if (!img || !img.complete) {
    return;
  }

  if (img.width / img.height > img.parentElement.offsetWidth / img.parentElement.offsetHeight) {
    img.classList.remove('img-full-width');
    img.classList.add('img-full-height');
  } else {
    img.classList.remove('img-full-height');
    img.classList.add('img-full-width');
  }
};

function ensureImageCover(img) {
  if (!img) {
    return;
  }

  if (img.complete) {
    imgClass(img);
  } else {
    img.addEventListener('load', function () {
      imgClass(img);
    });
  }
}

var GalleryList = React__default.forwardRef(function GalleryList(props, ref) {
  var children = props.children,
      className = props.className,
      cols = props.cols,
      tag = props.tag,
      rows = props.rows,
      titleClasses = props.titleClasses,
      elementClasses = props.elementClasses,
      styles = props.styles,
      attributes = _objectWithoutProperties(props, ["children", "className", "cols", "tag", "rows", "titleClasses", "elementClasses", "styles"]);

  var imgRef = React.useRef(null);
  var ec = classNames('mdb-gallery-element', elementClasses);
  var tc = classNames('mdb-gallery-title', titleClasses);
  React.useEffect(function () {
    ensureImageCover(imgRef.current);
  });
  React.useEffect(function () {
    var handleResize = debounce(function () {
      imgClass(imgRef.current);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resive', handleResize);
    };
  }, []);
  return React__default.createElement(mdbreact.MDBBox, _extends({
    tag: tag,
    ref: ref
  }, attributes, {
    className: ec
  }), React__default.createElement(mdbreact.MDBBox, {
    style: _objectSpread2({}, styles),
    className: tc
  }, React__default.Children.map(children, function (child) {
    if (!React__default.isValidElement) {
      return null;
    }

    if (child.type === 'img') {
      return React__default.cloneElement(child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
GalleryList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  elementClasses: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  titleClasses: PropTypes.string
};
GalleryList.defaultProps = {
  tag: 'li'
};

var css$8 = ".hamburger-button__checkbox {\r\n  display: none;\r\n}\r\n\r\n.hamburger-button__button {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  top: -5px;\r\n}\r\n\r\nlabel.hamburger-button__button {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#nav-icon1 {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: relative;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  -moz-transition: .5s ease-in-out;\r\n  -o-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n  background-color: #fff;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  -moz-transition: .25s ease-in-out;\r\n  -o-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n  top: 16px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n  top: 27px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(135deg);\r\n  -moz-transform: rotate(135deg);\r\n  -o-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(-135deg);\r\n  -moz-transform: rotate(-135deg);\r\n  -o-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n";
styleInject(css$8);

var HamburgerToggler = function HamburgerToggler(props) {
  var id = props.id,
      color = props.color,
      className = props.className,
      isOpen = props.isOpen,
      onClick = props.onClick;
  var classes = classNames('hamburger-button__button', className);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
    "data-test": "hamburger-toggler",
    type: "checkbox",
    defaultChecked: isOpen || false,
    onChange: onClick,
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
};

HamburgerToggler.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string
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
      stateWidth: '',
      stateHeight: '',
      ratio: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var ratio = _this.props.ratio;
      var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height;
      var ratioNumber = 9 / 16;

      if (ratio) {
        var newRatio = ratio.split('by')[0] / ratio.split('by')[1];

        if (typeof ratioNumber === 'number') {
          ratioNumber = newRatio;
        }
      }

      if (width && height) {
        return;
      }

      if (width) {
        height = width * ratioNumber;
      } else if (height) {
        width = height * (1 / ratioNumber);
      }

      _this.setState(_objectSpread2({}, _this.state, {
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
      var _this$props2 = this.props,
          allowFullScreen = _this$props2.allowFullScreen,
          className = _this$props2.className,
          id = _this$props2.id,
          name = _this$props2.name,
          onMouseOver = _this$props2.onMouseOver,
          onMouseOut = _this$props2.onMouseOut,
          onLoad = _this$props2.onLoad,
          sandbox = _this$props2.sandbox,
          src = _this$props2.src,
          style = _this$props2.style,
          _this$props2$title = _this$props2.title,
          title = _this$props2$title === void 0 ? '' : _this$props2$title,
          ratio = _this$props2.ratio,
          height = _this$props2.height,
          width = _this$props2.width;
      var _this$state = this.state,
          stateWidth = _this$state.stateWidth,
          stateHeight = _this$state.stateHeight;
      var classes = classNames('embed-responsive-item', className);
      var wrapperClasses = classNames(!(height || width) && 'embed-responsive', ratio ? "embed-responsive-".concat(ratio) : 'embed-responsive-16by9');
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: '0',
        target: '_parent',
        allowFullScreen: allowFullScreen || true,
        height: stateHeight || '100%',
        name: name || undefined,
        width: stateWidth || '100%',
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = returnAttributes(iframeAttributes);
      return React__default.createElement("div", {
        "data-test": "iframe",
        className: wrapperClasses
      }, React__default.createElement("iframe", _extends({
        title: title,
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(React.Component);

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onLoad: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.string,
  width: PropTypes.number
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      innerValue: _this.props.value || _this.props.valueDefault,
      isFocused: false,
      isPristine: true
    });

    _defineProperty(_assertThisInitialized(_this), "inputElementRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      event.stopPropagation();
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      onBlur && onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      event.stopPropagation();
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      onFocus && onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          type = _this$props.type,
          onChange = _this$props.onChange,
          getValue = _this$props.getValue;

      if (type !== 'checkbox' && type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      onChange && onChange(event);
      getValue && getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      event.stopPropagation();
      var _this$props2 = _this.props,
          type = _this$props2.type,
          onInput = _this$props2.onInput;

      if (type !== 'checkbox' && type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      onInput && onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      var inputRef = this.props.inputRef;
      inputRef && inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          background = _this$props3.background,
          children = _this$props3.children,
          className = _this$props3.className,
          containerClass = _this$props3.containerClass,
          disabled = _this$props3.disabled,
          error = _this$props3.error,
          filled = _this$props3.filled,
          gap = _this$props3.gap,
          getValue = _this$props3.getValue,
          group = _this$props3.group,
          hint = _this$props3.hint,
          icon = _this$props3.icon,
          iconBrand = _this$props3.iconBrand,
          iconClass = _this$props3.iconClass,
          iconLight = _this$props3.iconLight,
          onIconClick = _this$props3.onIconClick,
          onIconMouseEnter = _this$props3.onIconMouseEnter,
          onIconMouseLeave = _this$props3.onIconMouseLeave,
          iconRegular = _this$props3.iconRegular,
          iconSize = _this$props3.iconSize,
          id = _this$props3.id,
          inputRef = _this$props3.inputRef,
          noTag = _this$props3.noTag,
          outline = _this$props3.outline,
          label = _this$props3.label,
          labelClass = _this$props3.labelClass,
          labelId = _this$props3.labelId,
          size = _this$props3.size,
          success = _this$props3.success,
          Tag = _this$props3.tag,
          type = _this$props3.type,
          validate = _this$props3.validate,
          value = _this$props3.value,
          valueDefault = _this$props3.valueDefault,
          attributes = _objectWithoutProperties(_this$props3, ["background", "children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "onIconClick", "onIconMouseEnter", "onIconMouseLeave", "iconRegular", "iconSize", "id", "inputRef", "noTag", "outline", "label", "labelClass", "labelId", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var _this$state = this.state,
          innerValue = _this$state.innerValue,
          isFocused = _this$state.isFocused;
      var isNotEmpty = (!!innerValue || !!hint || isFocused || innerValue === 0) && type !== 'checkbox' && type !== 'radio';
      var TagInput = '';
      var formControlClass = '';

      if (type === 'textarea') {
        formControlClass = outline ? 'form-control' : 'md-textarea form-control';
        TagInput = 'textarea';
      } else {
        formControlClass = 'form-control';
        TagInput = 'input';
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? 'validate' : false, filled ? 'filled-in' : false, gap ? 'with-gap' : false, type === 'checkbox' ? gap ? false : 'form-check-input' : false, type === 'radio' ? 'form-check-input' : false, className);
      var containerClassFix = classNames(type === 'checkbox' || type === 'radio' ? typeof label === 'boolean' && label ? 'd-flex' : 'form-check' : 'md-form', group ? 'form-group' : false, size ? "form-".concat(size) : false, outline && 'md-outline', background && 'md-bg', containerClass);
      var iconClassFix = classNames(isNotEmpty && isFocused ? 'active' : false, iconClass, 'prefix');
      var labelClassFix = classNames(isNotEmpty ? 'active' : false, disabled ? 'disabled' : false, type === 'checkbox' ? 'form-check-label' : false, type === 'radio' ? 'form-check-label' : false, labelClass);

      var renderFunction = function renderFunction() {
        return React__default.createElement(React__default.Fragment, null, icon && React__default.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix,
          onClick: onIconClick || _this2.setFocus,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave
        }), React__default.createElement(TagInput, _extends({
          "data-test": "input"
        }, attributes, {
          className: classes,
          id: id,
          placeholder: hint,
          ref: _this2.inputElementRef,
          value: innerValue,
          onBlur: _this2.onBlur,
          onChange: _this2.onChange,
          onInput: _this2.onInput,
          onFocus: _this2.onFocus
        })), label && React__default.createElement("label", {
          className: labelClassFix,
          htmlFor: id,
          "data-error": error,
          "data-success": success,
          id: labelId,
          onClick: _this2.setFocus
        }, label), children);
      };

      return noTag ? renderFunction() : React__default.createElement(Tag, {
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
}(React__default.Component);

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.bool]),
  labelClass: PropTypes.string,
  labelId: PropTypes.string,
  noTag: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
  onIconMouseEnter: PropTypes.func,
  onIconMouseLeave: PropTypes.func,
  onInput: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  validate: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueDefault: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Input.defaultProps = {
  className: '',
  containerClass: '',
  disabled: false,
  error: '',
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: '',
  iconBrand: false,
  iconClass: '',
  iconLight: false,
  onIconMouseEnter: function onIconMouseEnter() {},
  onIconMouseLeave: function onIconMouseLeave() {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  noTag: false,
  outline: false,
  label: '',
  labelClass: '',
  labelId: '',
  size: '',
  success: '',
  tag: 'div',
  type: 'text',
  validate: false,
  valueDefault: ''
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
      getValue = _ref.getValue,
      onChange = _ref.onChange,
      attributes = _objectWithoutProperties(_ref, ["append", "appendClassName", "ariaLabel", "children", "className", "containerClassName", "containerId", "hint", "id", "inputs", "inputTag", "label", "labelClassName", "material", "prepend", "prependClassName", "size", "tag", "textClassName", "type", "value", "valueDefault", "getValue", "onChange"]);

  var containerClassNames = classNames('input-group', material && 'md-form', size && "input-group-".concat(size), containerClassName);
  var inputClassNames = classNames(className);
  var prependClassNames = classNames('input-group-prepend', prependClassName);
  var appendClassNames = classNames('input-group-append', appendClassName);
  var textClassNames = classNames('input-group-text', material && 'md-addon', textClassName);

  var handleChange = function handleChange(event) {
    event.persist();
    onChange && onChange(event);
    getValue && getValue(event.target.value);
  };

  return React__default.createElement(React__default.Fragment, null, label && React__default.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), React__default.createElement(Tag, _extends({
    "data-test": "input-group"
  }, attributes, {
    className: containerClassNames,
    id: containerId
  }), prepend && React__default.createElement("div", {
    className: prependClassNames
  }, typeof prepend === 'string' ? React__default.createElement("span", {
    className: textClassNames
  }, prepend) : prepend), inputs || React__default.createElement(Input, {
    noTag: true,
    type: type,
    className: inputClassNames,
    id: id,
    value: value,
    valueDefault: valueDefault,
    hint: hint,
    "aria-label": ariaLabel,
    onChange: handleChange
  }), append && React__default.createElement("div", {
    className: appendClassNames
  }, typeof append === 'string' ? React__default.createElement("span", {
    className: textClassNames
  }, append) : append), children));
};

InputGroup.propTypes = {
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  appendClassNames: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerId: PropTypes.string,
  getValue: PropTypes.func,
  hint: PropTypes.string,
  id: PropTypes.string,
  inputs: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  material: PropTypes.bool,
  onChange: PropTypes.func,
  prepend: PropTypes.any,
  prependClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  textClassName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  valueDefault: PropTypes.string
};
InputGroup.defaultProps = {
  tag: 'div',
  type: 'text'
};

var InputNumeric = function InputNumeric(props) {
  var onChangeHandler = function onChangeHandler(value) {
    props.getValue && props.getValue(value);
  };

  var className = props.className,
      getValue = props.getValue,
      attributes = _objectWithoutProperties(props, ["className", "getValue"]);

  var classes = classNames('form-control', className);
  return React__default.createElement(NumericInput, _extends({
    "data-test": "input-numeric"
  }, attributes, {
    onChange: onChangeHandler,
    className: classes
  }));
};

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      children = props.children,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["className", "children", "fluid"]);

  var classes = classNames('jumbotron', fluid ? 'jumbotron-fluid' : false, className);
  return React__default.createElement("div", _extends({
    "data-test": "jumbotron"
  }, attributes, {
    className: classes
  }), children);
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

var Link = function Link(props) {
  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var active = props.active,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      link = props.link,
      to = props.to,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "disabled", "link", "to"]);

  var classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  var handleClick = function handleClick(e) {
    if (!disabled) {
      e.stopPropagation();
      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  return React__default.createElement(reactRouterDom.Link, _extends({
    "data-test": "link-router",
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, disabled ? false : React__default.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string
};
Link.defaultProps = {
  active: false,
  className: '',
  disabled: false
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('list-group', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "list-group"
  }, attributes, {
    className: classes
  }), children);
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
ListGroup.defaultProps = {
  tag: 'ul'
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

  var classes = classNames('list-group-item', className, (_classNames = {
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), ' color'), _defineProperty(_classNames, 'list-group-item-action', hover), _classNames));

  if (attributes.href && Tag === 'li') {
    Tag = 'a';
  }

  return React__default.createElement(Tag, _extends({
    "data-test": "list-group-item"
  }, attributes, {
    className: classes
  }), children);
};

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  warning: PropTypes.bool
};
ListGroupItem.defaultProps = {
  tag: 'li'
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
    defaultTag = 'h4';
  } else if (left || right) {
    defaultTag = 'a';
  } else if (object || figImg) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else if (figure) {
    defaultTag = 'figure';
  } else if (figCap || figCapRight || figCapLeft) {
    defaultTag = 'figcaption';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = classNames({
    'media-body': body,
    'mt-0': heading,
    'media-left': left,
    'media-right': right,
    'align-self-start': top,
    'align-self-center': middle,
    'align-self-end': bottom,
    'media-object': object,
    'img-thumbnail': thumbnail,
    'media-list': list,
    figure: figure,
    'figure-img': figImg,
    'figure-caption text-center': figCap,
    'figure-caption text-right': figCapRight,
    'figure-caption text-left': figCapLeft,
    'rounded-circle z-depth-1-half': round
  }, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? 'media' : false, className);
  return React__default.createElement(Tag, _extends({
    "data-test": "media"
  }, attributes, {
    className: classes
  }));
};

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  figCap: PropTypes.bool,
  figCapLeft: PropTypes.bool,
  figCapRight: PropTypes.bool,
  figImg: PropTypes.bool,
  figure: PropTypes.bool,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  round: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  thumbnail: PropTypes.bool,
  top: PropTypes.bool
};

var css$9 = ".overflow-y-scroll {\r\n  overflow-y: scroll !important;\r\n}\r\n";
styleInject(css$9);

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

    _defineProperty(_assertThisInitialized(_this), "modalContent", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.body.classList.add('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.body.classList.remove('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          overflowScroll = _this$props.overflowScroll;
      var overflowStatement = overflowScroll ? 'overflow-y-scroll' : 'overflow-hidden';

      if (prevState.isOpen !== isOpen) {
        _this.setState({
          isOpen: isOpen
        }, function () {
          if (isOpen) {
            document.body.classList.add(overflowStatement);
          } else {
            document.body.classList.remove(overflowStatement);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEntered", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.add('show');
      _this.props.autoFocus && node.focus();

      if (type === 'modal') {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExit", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.remove('show');

      if (type === 'modal') {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExited", function (node) {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      console.log(e);

      if (!_this.props.backdrop || e.target.closest('[role="dialog"]') && !e.target.classList.contains('modal')) {
        return;
      }

      if (!_this.modalContent.contains(e.target)) {
        _this.props.toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      if (_this.props.keyboard && e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          animation = _this$props2.animation,
          backdrop = _this$props2.backdrop,
          backdropClassName = _this$props2.backdropClassName,
          cascading = _this$props2.cascading,
          centered = _this$props2.centered,
          children = _this$props2.children,
          className = _this$props2.className,
          contentClassName = _this$props2.contentClassName,
          disableFocusTrap = _this$props2.disableFocusTrap,
          fade = _this$props2.fade,
          frame = _this$props2.frame,
          fullHeight = _this$props2.fullHeight,
          id = _this$props2.id,
          inline = _this$props2.inline,
          modalStyle = _this$props2.modalStyle,
          position = _this$props2.position,
          role = _this$props2.role,
          side = _this$props2.side,
          size = _this$props2.size,
          tabIndex = _this$props2.tabIndex,
          wrapClassName = _this$props2.wrapClassName;
      var isOpen = this.state.isOpen;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames((_classNames = {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered
      }, _defineProperty(_classNames, "modal-".concat(size), size), _defineProperty(_classNames, "modal-".concat(position), position), _defineProperty(_classNames, "modal-notify white-text modal-".concat(modalStyle), modalStyle), _classNames), 'modal-dialog', className);
      var wrapperClasses = classNames(_defineProperty({
        modal: !inline,
        fade: fade,
        top: fade && !animation && !position
      }, "".concat(animation), fade && animation), fade && position && position.split('-')[1], wrapClassName);
      var backdropClasses = classNames('modal-backdrop', fade ? 'fade' : 'show', backdropClassName);
      var contentClasses = classNames('modal-content', contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: 'block'
        },
        id: id,
        tabIndex: tabIndex,
        role: role,
        'aria-hidden': 'true'
      });
      var modal = React__default.createElement("div", _extends({
        "data-test": "modal",
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
      }, children)));
      return React__default.createElement(React__default.Fragment, null, backdrop && React__default.createElement(reactTransitionGroup.Transition, {
        timeout: timeout,
        "in": isOpen,
        appear: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('backdrop', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('backdrop', node);
        },
        onExited: this.handleOnExited
      }, React__default.createElement("div", {
        className: backdropClasses
      })), React__default.createElement(reactTransitionGroup.Transition, {
        timeout: timeout,
        "in": isOpen,
        appear: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onMouseDown: function onMouseDown(e) {
          return _this2.handleBackdropClick(e);
        },
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('modal', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('modal', node);
        }
      }, !disableFocusTrap ? React__default.createElement(FocusTrap, null, modal) : modal));
    }
  }]);

  return Modal;
}(React.Component);

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  disableFocusTrap: true,
  fade: true,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  overflowScroll: true,
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050
};
Modal.propTypes = {
  animation: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  cascading: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableFocusTrap: PropTypes.bool,
  fade: PropTypes.bool,
  frame: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func,
  id: PropTypes.string,
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  overflowScroll: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  showModal: PropTypes.func,
  side: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.string,
  wrapClassName: PropTypes.string
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames('modal-body', className);
  return React__default.createElement("div", _extends({
    "data-test": "modal-body"
  }, attributes, {
    className: classes
  }), children);
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
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

  var classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });
  return React__default.createElement("div", _extends({
    "data-test": "modal-footer"
  }, attributes, {
    className: classes
  }), children);
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
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

  var classes = classNames('modal-header', className);
  var titleClasses = classNames('modal-title', titleClass);

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

  return React__default.createElement("div", _extends({
    "data-test": "modal-header"
  }, attributes, {
    className: classes
  }), React__default.createElement(Tag, {
    className: titleClasses
  }, children), closeButton);
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func
};
ModalHeader.defaultProps = {
  tag: 'h4',
  closeAriaLabel: 'Close'
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

  var classes = classNames('nav', tabs && 'md-tabs', pills && 'md-pills', header && 'nav-pills card-header-pills', color && !tabs && !classicTabs && !pills ? color : false, pills && color ? "pills-".concat(color) : false, (tabs || classicTabs) && color ? "tabs-".concat(color) : false, className);
  return React__default.createElement(Tag, _extends({
    "data-test": "nav"
  }, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  children: PropTypes.node,
  classicTabs: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  header: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Nav.defaultProps = {
  tag: 'ul',
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  }

  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCollapsed: false
    });

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

    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          scrolling = _this$props.scrolling,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset;

      if (scrolling || scrollingNavbarOffset) {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          scrolling = _this$props2.scrolling,
          scrollingNavbarOffset = _this$props2.scrollingNavbarOffset;

      if (scrolling || scrollingNavbarOffset) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          expand = _this$props3.expand,
          light = _this$props3.light,
          dark = _this$props3.dark,
          sticky = _this$props3.sticky,
          fixed = _this$props3.fixed,
          scrolling = _this$props3.scrolling,
          color = _this$props3.color,
          className = _this$props3.className,
          scrollingNavbarOffset = _this$props3.scrollingNavbarOffset,
          Tag = _this$props3.tag,
          _double = _this$props3["double"],
          transparent = _this$props3.transparent,
          attributes = _objectWithoutProperties(_this$props3, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var isCollapsed = this.state.isCollapsed;
      var classes = classNames((_classNames = {
        'navbar-light': light,
        'navbar-dark': dark
      }, _defineProperty(_classNames, "sticky-".concat(sticky), sticky), _defineProperty(_classNames, "fixed-".concat(fixed), fixed), _defineProperty(_classNames, 'scrolling-navbar', scrolling || scrollingNavbarOffset), _defineProperty(_classNames, 'double-nav', _double), _defineProperty(_classNames, 'top-nav-collapse', isCollapsed), _defineProperty(_classNames, "".concat(color), color && transparent ? isCollapsed : color), _classNames), 'navbar', getExpandClass(expand), className);
      return React__default.createElement(Tag, _extends({
        "data-test": "navbar"
      }, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(React.Component);

Navbar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  dark: PropTypes.bool,
  "double": PropTypes.bool,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fixed: PropTypes.string,
  light: PropTypes.bool,
  scrolling: PropTypes.bool,
  scrollingNavbarOffset: PropTypes.number,
  sticky: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transparent: PropTypes.bool
};
Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames('navbar-brand', className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React__default.createElement(reactRouterDom.NavLink, _extends({
        "data-test": "navbar-brand",
        to: href
      }, attributes, {
        className: classes
      }));
    }

    return React__default.createElement("div", _extends({
      "data-test": "navbar-brand"
    }, attributes, {
      className: classes
    }));
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

var NavbarNav = function NavbarNav(props) {
  var children = props.children,
      className = props.className,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "right", "left", "tag"]);

  var classes = classNames('navbar-nav', right ? 'ml-auto' : left ? 'mr-auto' : 'justify-content-around w-100', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "navbar-nav"
  }, attributes, {
    className: classes
  }), children);
};

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
NavbarNav.defaultProps = {
  tag: 'ul'
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
    'navbar-toggler-right': right,
    'navbar-toggler-left': left
  }, 'navbar-toggler', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "navbar-toggler"
  }, attributes, {
    className: classes
  }), children || (image ? React__default.createElement("span", {
    className: "navbar-toggler-icon",
    style: {
      backgroundImage: "url(\"".concat(image, "\")")
    }
  }) : React__default.createElement("span", {
    className: "navbar-toggler-icon"
  })));
};

NavbarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};
NavbarToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      text = props.text,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "active", "text", "tag"]);

  var classes = classNames('nav-item', active && 'active', text && 'navbar-text', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "nav-item"
  }, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
NavItem.defaultProps = {
  tag: 'li'
};

var NavLink = function NavLink(props) {
  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      link = props.link,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to", "link"]);

  var classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  var handleClick = function handleClick(e) {
    if (!disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var Tag = link ? Link : reactRouterDom.NavLink;
  return React__default.createElement(Tag, _extends({
    "data-test": "nav-link",
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, disabled ? false : React__default.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

NavLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  to: PropTypes.string
};
NavLink.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  link: false
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
      componentState: _this.props.show ? 'show' : 'hide'
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (_typeof(time) === 'object') {
        time = 0;
      }

      setTimeout(function () {
        _this.setState({
          componentState: ''
        }, function () {
          setTimeout(function () {
            _this.setState({
              componentState: 'hide'
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
      var autohide = this.props.autohide;

      if (autohide > 0) {
        this.hide(autohide);
      }
    }
  }, {
    key: "render",
    value: function render() {
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

      var componentState = this.state.componentState;
      var classes = classNames('toast', fade && 'fade', componentState, className);
      var headerClasses = classNames('toast-header', titleClassName);
      var iconClassNames = classNames('mr-2', iconClassName);
      var bodyClasses = classNames('toast-body', bodyClassName);
      var closeClasses = classNames('ml-2', 'mb-1', closeClassName);
      return React__default.createElement(Tag, _extends({
        "data-test": "notification"
      }, attributes, {
        className: classes
      }), React__default.createElement("div", {
        className: headerClasses
      }, React__default.createElement(Fa, {
        icon: icon,
        className: iconClassNames,
        size: "lg"
      }), React__default.createElement("strong", {
        className: "mr-auto"
      }, title), React__default.createElement("small", null, text), React__default.createElement(MDBCloseIcon, {
        className: closeClasses,
        onClick: this.hide
      })), React__default.createElement("div", {
        className: bodyClasses
      }, message));
    }
  }]);

  return Notification;
}(React__default.Component);

Notification.propTypes = {
  autohide: PropTypes.number,
  bodyClassName: PropTypes.string,
  bodyColor: PropTypes.string,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  fade: PropTypes.bool,
  iconClassName: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  titleColor: PropTypes.string
};
Notification.defaultProps = {
  icon: 'square',
  tag: 'div',
  closeClassName: 'text-dark'
};

var css$a = ".popover {\r\n  width: auto;\r\n  background-color: white;\r\n  color: #97999b;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  font-size: 0.83em;\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 10;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.show.popover {\r\n  z-index: 999;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.popover-body {\r\n  color: #6c6e71;\r\n}\r\n\r\n.popover .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] .popover_arrow {\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: #d6d6d6 transparent transparent transparent;\r\n  bottom: -8px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: white transparent transparent transparent;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] {\r\n  margin-top: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] .popover_arrow {\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent #d6d6d6 transparent;\r\n  top: -8px;\r\n  margin-top: 0;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent white transparent;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] {\r\n  margin-left: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] .popover_arrow {\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent #d6d6d6 transparent transparent;\r\n  left: -8px;\r\n  margin-left: 0;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] .popover_arrow {\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent #d6d6d6;\r\n  right: -8px;\r\n  margin-right: 0;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n\r\n.tooltip {\r\n  width: auto;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  /* font-size: 0.83em; */\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 15;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.tooltip-inner {\r\n  display: block;\r\n}\r\n\r\n.show.tooltip {\r\n  z-index: 999;\r\n\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.tooltip .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"],\r\n.show[x-placement^=\"top\"]:not(.tooltip) {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"] .popover_arrow {\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: #131313 transparent transparent transparent;\r\n  bottom: -6px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: black transparent transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"],\r\n.show[x-placement^=\"bottom\"]:not(.tooltip) {\r\n  margin-top: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"] .popover_arrow {\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent #131313 transparent;\r\n  top: -6px;\r\n  margin-top: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent black transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"],\r\n.show[x-placement^=\"right\"]:not(.tooltip) {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"] .popover_arrow {\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent #131313 transparent transparent;\r\n  left: -6px;\r\n  margin-left: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent black transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"],\r\n.show[x-placement^=\"left\"]:not(.tooltip) {\r\n  margin-right: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"] .popover_arrow {\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent #131313;\r\n  right: -6px;\r\n  margin-right: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent black;\r\n}\r\n";
styleInject(css$a);

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      popperJS: null,
      visible: _this.props.isVisible,
      showPopper: _this.props.isVisible
    });

    _defineProperty(_assertThisInitialized(_this), "popoverWrapperRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "referenceElm", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "setPopperJS", function () {
      var _this$state = _this.state,
          showPopper = _this$state.showPopper,
          popperJS = _this$state.popperJS;

      if (showPopper) {
        popperJS ? popperJS.scheduleUpdate() : _this.createPopper();
        setTimeout(function () {
          return clearInterval(_this.timer);
        }, 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createPopper", function () {
      var _this$props = _this.props,
          placement = _this$props.placement,
          modifiers = _this$props.modifiers;
      var popperJS = _this.state.popperJS;

      if (_this.referenceElm && _this.popoverWrapperRef) {
        _this.setState({
          popperJS: new Popper(_this.referenceElm, _this.popoverWrapperRef, _objectSpread2({
            placement: placement
          }, modifiers), function () {
            return setTimeout(function () {
              popperJS.scheduleUpdate();
            }, 10);
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "doToggle", function (toggler) {
      _this.setState({
        showPopper: toggler && true
      }, function () {
        var _this$state2 = _this.state,
            showPopper = _this$state2.showPopper,
            visible = _this$state2.visible;

        if (showPopper) {
          _this.setState({
            visible: typeof toggler !== 'undefined' ? toggler : !visible
          }, function () {
            _this.createPopper();

            _this.state.popperJS.scheduleUpdate();
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var target = e.target;
      var showPopper = _this.state.showPopper;

      if (_this.popoverWrapperRef && showPopper) {
        if (_this.popoverWrapperRef.contains(target) || _this.referenceElm.contains(target) || target === _this.referenceElm) {
          return;
        }

        _this.doToggle(false);
      }
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showPopper = this.state.showPopper;
      var _this$props2 = this.props,
          isVisible = _this$props2.isVisible,
          onChange = _this$props2.onChange;
      this.setPopperJS();

      if (prevProps.isVisible !== isVisible && isVisible !== showPopper && showPopper !== prevProps.showPopper) {
        this.setState({
          showPopper: isVisible
        });
      }

      if (onChange && showPopper !== prevState.showPopper) {
        onChange(showPopper);
      }

      if (showPopper && prevState.showPopper !== showPopper) {
        this.createPopper();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        return _this2.setPopperJS();
      }, 3);
      document.addEventListener('click', this.handleClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          clickable = _this$props3.clickable,
          domElement = _this$props3.domElement,
          email = _this$props3.email,
          id = _this$props3.id,
          isVisible = _this$props3.isVisible,
          material = _this$props3.material,
          modifiers = _this$props3.modifiers,
          placement = _this$props3.placement,
          popover = _this$props3.popover,
          sm = _this$props3.sm,
          style = _this$props3.style,
          onChange = _this$props3.onChange,
          Tag = _this$props3.tag,
          attributes = _objectWithoutProperties(_this$props3, ["children", "className", "clickable", "domElement", "email", "id", "isVisible", "material", "modifiers", "placement", "popover", "sm", "style", "onChange", "tag"]);

      var _this$state3 = this.state,
          visible = _this$state3.visible,
          showPopper = _this$state3.showPopper;
      var Popper = children[1];
      var Wrapper = children[0];
      var classes = classNames(visible && 'show', popover ? 'popover' : !material && !email && 'tooltip px-2', className);
      var popperClasses = classNames((material || email) && 'tooltip-inner', material && (sm ? 'md-inner' : 'md-inner-main'), email && (sm ? 'md-inner' : 'md-inner-email'));
      return React__default.createElement(React__default.Fragment, null, !domElement ? React__default.createElement(Wrapper.type, _extends({}, Wrapper.props, {
        onMouseEnter: function onMouseEnter() {
          return !clickable && _this3.doToggle(true);
        },
        onMouseLeave: function onMouseLeave() {
          return !clickable && !popover && setTimeout(function () {
            return _this3.doToggle(false);
          }, 0);
        },
        onTouchStart: function onTouchStart() {
          return !clickable && _this3.doToggle(true);
        },
        onTouchEnd: function onTouchEnd() {
          return !clickable && !popover && _this3.doToggle(false);
        },
        onMouseDown: function onMouseDown() {
          clickable && _this3.doToggle(!showPopper);
          setTimeout(function () {
            return _this3.setPopperJS();
          }, 100);
        },
        onMouseUp: function onMouseUp() {
          return setTimeout(function () {
            return _this3.setPopperJS();
          }, 0);
        },
        innerRef: function innerRef(ref) {
          return _this3.referenceElm = ref;
        },
        "data-popper": id
      })) : React__default.createElement(Wrapper.type, _extends({}, Wrapper.props, {
        onMouseEnter: function onMouseEnter() {
          return !clickable && _this3.doToggle(true);
        },
        onMouseLeave: function onMouseLeave() {
          return !clickable && !popover && setTimeout(function () {
            return _this3.doToggle(false);
          }, 0);
        },
        onTouchStart: function onTouchStart() {
          return !clickable && _this3.doToggle(true);
        },
        onTouchEnd: function onTouchEnd() {
          return !clickable && !popover && _this3.doToggle(false);
        },
        onMouseDown: function onMouseDown() {
          return clickable && _this3.doToggle(!showPopper);
        },
        onMouseUp: function onMouseUp() {
          return setTimeout(function () {
            return _this3.setPopperJS();
          }, 0);
        },
        ref: function ref(_ref) {
          return _this3.referenceElm = _ref;
        },
        "data-popper": id
      })), showPopper && React__default.createElement(Tag, _extends({
        ref: function ref(_ref2) {
          return _this3.popoverWrapperRef = _ref2;
        },
        className: classes,
        "data-popper": id
      }, attributes), React__default.createElement(Popper.type, {
        className: classNames(popperClasses, Popper.props.className)
      }, Popper.props.children), React__default.createElement("span", {
        "x-arrow": "",
        className: classNames('popover_arrow')
      })));
    }
  }]);

  return Popover;
}(React__default.Component);

Popover.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  email: PropTypes.bool,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  material: PropTypes.bool,
  modifiers: PropTypes.object,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string
};
Popover.defaultProps = {
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
  return React__default.createElement(Tag, _extends({
    "data-test": "popover-body"
  }, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PopoverBody.defaultProps = {
  tag: 'div'
};

var PopoverHeader = function PopoverHeader(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-header', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "popover-header"
  }, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PopoverHeader.defaultProps = {
  className: '',
  tag: 'h3'
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
      value = _ref.value,
      wrapperStyle = _ref.wrapperStyle,
      attributes = _objectWithoutProperties(_ref, ["animated", "barClassName", "children", "className", "color", "height", "material", "max", "min", "preloader", "striped", "value", "wrapperStyle"]);

  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames('progress', material && 'md-progress', preloader && "".concat(color ? "".concat(color, "-color") : 'primary-color', "-dark"), className);
  var progressBarClasses = classNames(preloader ? 'indeterminate' : 'progress-bar', barClassName || null, animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null);
  var computedHeight = height || children && '1rem';

  var computedWrapperStyle = _objectSpread2({}, wrapperStyle, {
    height: computedHeight
  });

  return React__default.createElement("div", _extends({
    "data-test": "progress"
  }, attributes, {
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
  value: PropTypes.number,
  wrapperStyle: PropTypes.object
};
Progress.defaultProps = {
  animated: false,
  barClassName: '',
  className: '',
  color: 'indigo',
  height: '',
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  value: 0,
  wrapperStyle: {}
};

var Rating = function Rating(props) {
  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      hovered = _useState4[0],
      setHovered = _useState4[1];

  var _useState5 = React.useState({
    title: '',
    index: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      choosed = _useState6[0],
      setChoosed = _useState6[1];

  var _useState7 = React.useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      feedbackValue = _useState8[0],
      setFeedbackValue = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      openedForm = _useState10[0],
      setOpenedForm = _useState10[1];

  var onDocumentClick = function onDocumentClick(e) {
    if (!e.target.closest('.popover')) {
      setOpenedForm(null);
    }
  };

  React.useEffect(function () {
    window.addEventListener('click', onDocumentClick);
    return function () {
      return window.removeEventListener('click', onDocumentClick);
    };
  }, []);
  React.useEffect(function () {
    setData(props.data); // eslint-disable-next-line react/destructuring-assignment
  }, [props.data]);
  React.useEffect(function () {
    var choosedIndex = data.findIndex(function (item) {
      return item.choosed;
    });

    if (choosedIndex !== -1) {
      setChoosed({
        title: data[choosedIndex].tooltip,
        index: choosedIndex
      });
    }
  }, [data]);
  React.useEffect(function () {
    if (props.getValue) {
      var title = choosed.title,
          index = choosed.index;
      index = index !== null ? index + 1 : index;
      props.getValue({
        title: title,
        value: index
      });
    }
  }, [choosed, props]);

  var handleMouseEnter = function handleMouseEnter(_, index) {
    setHovered(index);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setHovered(null);
  };

  var handleClick = function handleClick(title, index, e) {
    e.stopPropagation();

    if (title === choosed.title && index === choosed.index) {
      setChoosed({
        title: '',
        index: null
      });
      feedback && setOpenedForm(null);
    } else {
      setChoosed({
        title: title,
        index: index
      });
      feedback && setTimeout(function () {
        setOpenedForm(index);
      }, 1);
    }
  };

  var onCloseHanlder = function onCloseHanlder() {
    setFeedbackValue('');
    setOpenedForm(null);
  };

  var feedbackValueHandler = function feedbackValueHandler(e) {
    setFeedbackValue(e.target.value);
  };

  var Tag = props.tag,
      containerClassName = props.containerClassName,
      iconClassName = props.iconClassName,
      iconFaces = props.iconFaces,
      iconSize = props.iconSize,
      iconRegular = props.iconRegular,
      fillClassName = props.fillClassName,
      fillColors = props.fillColors,
      getValue = props.getValue,
      feedback = props.feedback,
      submitHandler = props.submitHandler,
      commonAttributes = _objectWithoutProperties(props, ["tag", "containerClassName", "iconClassName", "iconFaces", "iconSize", "iconRegular", "fillClassName", "fillColors", "getValue", "feedback", "submitHandler"]);

  var containerClasses = classNames('mdb-rating', 'd-flex', 'justify-content-start', 'align-items-center', containerClassName);
  var renderedIcons = [];

  if (data.length) {
    renderedIcons = data.map(function (_ref, index) {
      var _ref$icon = _ref.icon,
          icon = _ref$icon === void 0 ? 'star' : _ref$icon,
          tooltip = _ref.tooltip,
          far = _ref.far,
          size = _ref.size,
          _ = _ref.choosed,
          itemAttributes = _objectWithoutProperties(_ref, ["icon", "tooltip", "far", "size", "choosed"]);

      var isChoosed = choosed.index !== null;
      var isHovered = hovered !== null;
      var isFormOpened = openedForm !== null;
      var isFormActive = feedback && isFormOpened && openedForm === index;
      var toFill = false;

      if (isChoosed) {
        toFill = index <= choosed.index;

        if (isHovered && hovered > choosed.index) {
          toFill = index <= hovered;
        }
      } else if (isHovered) {
        toFill = index <= hovered;
      }

      var fillColor = '';

      if (fillColors) {
        var current = null;

        if (isChoosed) {
          current = choosed.index;

          if (isHovered) {
            current = hovered;
          }
        } else if (isHovered) {
          current = hovered;
        }

        var isCustom = Array.isArray(fillColors);
        var defaultFillColors = ['oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'];

        if (current !== null) {
          fillColor = isCustom ? fillColors[current] : defaultFillColors[current];
        }
      }

      var iconClasses = classNames('py-2 px-1 rate-popover', toFill && (fillColors ? fillColor : fillClassName), iconClassName);
      var renderIcon = icon;

      if (iconFaces) {
        var faces = ['angry', 'frown', 'meh', 'smile', 'laugh'];
        renderIcon = 'meh-blank';

        if (isChoosed && index <= choosed.index) {
          renderIcon = faces[choosed.index];

          if (isHovered) {
            renderIcon = faces[hovered];
          }
        } else if (isHovered && index <= hovered) {
          renderIcon = faces[hovered];
        }
      }

      var tooltipContent = tooltip;

      if (isFormActive) {
        tooltipContent = React__default.createElement("form", {
          onSubmit: function onSubmit(e) {
            submitHandler(e, tooltip, openedForm + 1, feedbackValue);
            onCloseHanlder();
          }
        }, React__default.createElement(mdbreact.MDBPopoverHeader, null, tooltip), React__default.createElement(mdbreact.MDBPopoverBody, null, React__default.createElement("textarea", {
          type: "text",
          className: "md-textarea form-control py-0",
          value: feedbackValue,
          onChange: feedbackValueHandler // style={{ resize: 'none' }}

        }), React__default.createElement("div", {
          className: "d-flex align-items-center justify-content-around mt-2"
        }, React__default.createElement(mdbreact.MDBBtn, {
          type: "submit",
          color: "primary",
          size: "sm"
        }, "Submit!"), React__default.createElement("button", {
          onMouseDown: onCloseHanlder,
          style: {
            backgroundColor: '#fff',
            border: 'none',
            padding: '0.5rem 1.6rem'
          }
        }, "Close"))));
      }

      return React__default.createElement(mdbreact.MDBTooltip, {
        key: tooltip,
        domElement: true,
        placement: "top",
        tag: "span",
        popover: isFormActive,
        isVisible: isFormActive,
        clickable: isFormActive
      }, React__default.createElement("span", null, React__default.createElement(mdbreact.Fa, _extends({
        style: {
          cursor: 'pointer'
        }
      }, commonAttributes, itemAttributes, {
        icon: renderIcon,
        size: size || iconSize,
        far: far || iconRegular,
        className: iconClasses,
        "data-index": index,
        "data-original-title": tooltip,
        onMouseEnter: function onMouseEnter() {
          return handleMouseEnter(tooltip, index);
        },
        onMouseLeave: handleMouseLeave,
        onClick: function onClick(e) {
          return handleClick(tooltip, index, e);
        }
      }))), React__default.createElement("div", {
        style: {
          userSelect: 'none'
        }
      }, tooltipContent));
    });
  }

  return React__default.createElement(Tag, {
    className: containerClasses
  }, renderedIcons);
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    choosed: PropTypes.bool,
    icon: PropTypes.string,
    tooltip: PropTypes.string
  })),
  feedback: PropTypes.bool,
  fillClassName: PropTypes.string,
  fillColors: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
  getValue: PropTypes.func,
  iconClassName: PropTypes.string,
  iconFaces: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  submitHandler: PropTypes.func,
  tag: PropTypes.string
};
Rating.defaultProps = {
  containerClassName: '',
  data: [{
    tooltip: 'Very Bad'
  }, {
    tooltip: 'Poor'
  }, {
    tooltip: 'Ok'
  }, {
    tooltip: 'Good'
  }, {
    tooltip: 'Excellent'
  }],
  feedback: false,
  fillClassName: 'fiveStars',
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div',
  submitHandler: function submitHandler(e) {
    return e.preventDefault();
  }
};

var Row = function Row(props) {
  var around = props.around,
      between = props.between,
      bottom = props.bottom,
      center = props.center,
      className = props.className,
      end = props.end,
      middle = props.middle,
      start = props.start,
      Tag = props.tag,
      top = props.top,
      attributes = _objectWithoutProperties(props, ["around", "between", "bottom", "center", "className", "end", "middle", "start", "tag", "top"]);

  var classes = classNames('row', end && 'justify-content-end', start && 'justify-content-start', center && 'justify-content-center', between && 'justify-content-between', around && 'justify-content-around', top && 'align-self-start', middle && 'align-self-center', bottom && 'align-self-end', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "row"
  }, attributes, {
    className: classes
  }));
};

Row.propTypes = {
  around: PropTypes.bool,
  between: PropTypes.bool,
  bottom: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
  end: PropTypes.bool,
  middle: PropTypes.bool,
  start: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};
Row.defaultProps = {
  tag: 'div'
};

var propTypes = {
  activeItem: PropTypes.any,
  className: PropTypes.string,
  tabId: PropTypes.any
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItem: _this.props.activeItem
    });

    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      var activeItem = this.state.activeItem;
      return {
        activeItemId: activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes));
      var classes = classNames('tab-content', className);
      return React__default.createElement("div", _extends({
        "data-test": "tabContent"
      }, attributes, {
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
}(React__default.Component);

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};
TabContent.propTypes = propTypes;

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

      var activeItemId = this.context.activeItemId;
      var classes = classNames('tab-pane', {
        active: tabId === activeItemId
      }, className);
      return React__default.createElement("div", _extends({
        "data-test": "tab-pane"
      }, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React__default.Component);

TabPane.contextTypes = {
  activeItemId: PropTypes.any
};
TabPane.propTypes = {
  className: PropTypes.string,
  tabId: PropTypes.any
};

var TableHead = function TableHead(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React__default.createElement("thead", _extends({
    "data-test": "table-head"
  }, attributes, {
    className: classes
  }), columns && React__default.createElement("tr", null, columns.map(function (col) {
    return React__default.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : ''
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

var TreeviewContext = React__default.createContext();

var Treeview = function Treeview(props) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  React.useEffect(function () {
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
  var head = header && React__default.createElement(React__default.Fragment, null, React__default.createElement("h6", {
    className: "pt-3 pl-3"
  }, header), React__default.createElement("hr", null));
  return React__default.createElement(Tag, _extends({
    "data-test": "treeview"
  }, attributes, {
    className: classes
  }), head, React__default.createElement("ul", {
    className: ulClasses
  }, React__default.createElement(TreeviewContext.Provider, {
    value: {
      active: active,
      theme: theme,
      getActive: getActive
    }
  }, children)));
};

Treeview.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func,
  header: PropTypes.string,
  listClassName: PropTypes.string,
  tag: PropTypes.string,
  theme: PropTypes.string
};
Treeview.defaultProps = {
  tag: 'div',
  theme: '',
  getValue: function getValue() {}
};

var TreeviewItem = function TreeviewItem(props) {
  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      target = _useState2[0],
      setTarget = _useState2[1];

  var targetRef = React.useRef(null);

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

  var _useContext = React.useContext(TreeviewContext),
      active = _useContext.active,
      getActive = _useContext.getActive,
      theme = _useContext.theme;

  React.useEffect(function () {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
    }
  }, []);

  var handleClick = function handleClick() {
    if (!disabled) {
      target.classList.contains('opened') ? getActive(null) : getActive(target);
    }
  };

  var classes = classNames(disabled && disabledClassName, theme && "treeview-".concat(theme, "-items treeview-").concat(theme, "-element closed mb-1"), active === target && !active.classList.contains('opened') ? 'opened' : '', className);
  return React__default.createElement(Tag, _extends({
    "data-test": "treeview-item"
  }, attributes, {
    className: classes,
    ref: targetRef,
    onMouseDown: handleClick,
    style: {
      transform: 'translateY(0.3em)'
    }
  }), React__default.createElement(Fa, {
    className: "mr-2",
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), React__default.createElement("span", null, title));
};

TreeviewItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
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
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpen = _useState2[1];

  React.useEffect(function () {
    var opened = props.opened;
    setOpen(opened); // eslint-disable-next-line react/destructuring-assignment
  }, [props, props.opened]);

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

  var _useContext = React.useContext(TreeviewContext),
      theme = _useContext.theme;

  var nestedClasses = classNames('nested', opened && 'active');
  var folder = classNames(theme && "closed treeview-".concat(theme, "-element d-block"), !children && 'ml-2', opened && 'opened', disabled && disabledClassName);
  var classes = classNames(theme && "treeview-".concat(theme, "-items px-0"), className);
  var iconClasses = classNames(theme ? 'mx-2' : 'mr-2');
  var child = children && React__default.createElement("ul", {
    className: nestedClasses,
    style: {
      height: 'calc(100% + 0.6rem)',
      marginLeft: '2px'
    }
  }, children);
  var collapse = theme && React__default.createElement(Collapse, {
    isOpen: opened
  }, child);
  var iconArrow = theme !== 'colorful' ? 'angle-right' : opened ? 'minus-circle' : 'plus-circle';
  var arrow = children && React__default.createElement(Fa, {
    icon: iconArrow,
    rotate: theme !== 'colorful' ? opened ? '90 down' : '0' : '',
    className: "rotate"
  });
  var btn = children && React__default.createElement(Button, {
    flat: true,
    className: "m-0 py-0 px-1 mr-1 z-depth-0",
    onClick: handleSwitch
  }, arrow);
  return React__default.createElement(Tag, _extends({
    "data-test": "treeview-list"
  }, attributes, {
    className: classes
  }), React__default.createElement("span", {
    className: folder,
    onClick: !disabled && theme ? handleSwitch : null
  }, theme ? arrow : btn, React__default.createElement("span", null, React__default.createElement(Fa, {
    className: iconClasses,
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), title)), collapse || child);
};

TreeviewList.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.string
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
  theme: PropTypes.string
};

var css$b = ".note-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-color: #58595a;\r\n}\r\n\r\n.note-default {\r\n  background-color: rgb(164, 243, 235);\r\n  border-color: #00695c;\r\n}\r\n\r\n.note-elegant {\r\n  background-color: #2E2E2E;\r\n  border-color: #212121;\r\n  color: #fff;\r\n}\r\n\r\n.note-stylish {\r\n  background-color: #4B515D;\r\n  border-color: #3E4551;\r\n  color: #fff;\r\n}\r\n\r\n.note-unique {\r\n  background-color: #3F729B;\r\n  border-color: #1C2331;\r\n  color: #fff;\r\n}\r\n\r\n.note-special {\r\n  background-color: #37474F;\r\n  border-color: #263238;\r\n  color: #fff;\r\n}\r\n";
styleInject(css$b);

var Typography =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Typography, _React$Component);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          children = _this$props.children,
          variant = _this$props.variant,
          blockquote = _this$props.blockquote,
          bqColor = _this$props.bqColor,
          bqTitle = _this$props.bqTitle,
          bqFooter = _this$props.bqFooter,
          bqText = _this$props.bqText,
          listUnStyled = _this$props.listUnStyled,
          listInLine = _this$props.listInLine,
          colorText = _this$props.colorText,
          text = _this$props.text,
          note = _this$props.note,
          noteColor = _this$props.noteColor,
          noteTitle = _this$props.noteTitle,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "children", "variant", "blockquote", "bqColor", "bqTitle", "bqFooter", "bqText", "listUnStyled", "listInLine", "colorText", "text", "note", "noteColor", "noteTitle"]);

      var classes = classNames(variant && variant, colorText && "".concat(colorText.toLowerCase(), "-text"), text && "text-".concat(text), className);
      var bc = classNames('blockquote', bqColor && "bq-".concat(bqColor), className);
      var notes = classNames('note', noteColor && "note-".concat(noteColor), className);
      var isEmptyClass = classes !== '' ? classes : null;

      if (blockquote) {
        return React__default.createElement(mdbreact.MDBBox, {
          tag: "blockquote",
          className: bc
        }, children);
      }

      if (listUnStyled) {
        return React__default.createElement(mdbreact.MDBBox, {
          tag: "ul",
          className: "list-unstyled"
        }, children);
      }

      if (listInLine) {
        return React__default.createElement(mdbreact.MDBBox, {
          tag: "ul",
          className: "list-inline"
        }, children);
      }

      if (note) {
        return React__default.createElement(mdbreact.MDBBox, {
          tag: "p",
          className: notes
        }, React__default.createElement("strong", null, noteTitle), children);
      }

      return React__default.createElement(Tag, _extends({}, attributes, {
        className: isEmptyClass
      }), children);
    }
  }]);

  return Typography;
}(React__default.Component);

Typography.propTypes = {
  blockquote: PropTypes.bool,
  bqColor: PropTypes.string,
  bqTitle: PropTypes.string,
  className: PropTypes.string,
  colorText: PropTypes.string,
  listInLine: PropTypes.bool,
  listUnStyled: PropTypes.bool,
  note: PropTypes.bool,
  noteColor: PropTypes.string,
  noteTitle: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  variant: PropTypes.string
};
Typography.defaultProps = {
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listInLine: false,
  listUnStyled: false,
  noteColor: 'primary',
  tag: 'p'
};

exports.Alert = Alert;
exports.Animation = Animation;
exports.Badge = Badge;
exports.Box = Box;
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
exports.CardVideo = CardVideo;
exports.Carousel = Carousel;
exports.CarouselCaption = CarouselCaption;
exports.CarouselControl = Control;
exports.CarouselIndicator = CarouselIndicator;
exports.CarouselIndicators = CarouselIndicators;
exports.CarouselInner = CarouselInner;
exports.CarouselItem = CarouselItem;
exports.CloseIcon = MDBCloseIcon;
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
exports.Footer = Footer;
exports.FormInline = FormInline;
exports.FreeBird = FreeBird;
exports.Gallery = Gallery;
exports.GalleryList = GalleryList;
exports.HamburgerToggler = HamburgerToggler;
exports.Iframe = Iframe;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputNumeric = InputNumeric;
exports.Jumbotron = Jumbotron;
exports.Link = Link;
exports.ListGroup = ListGroup;
exports.ListGroupItem = ListGroupItem;
exports.MDBAlert = Alert;
exports.MDBAnimation = Animation;
exports.MDBBadge = Badge;
exports.MDBBox = Box;
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
exports.MDBCardVideo = CardVideo;
exports.MDBCarousel = Carousel;
exports.MDBCarouselCaption = CarouselCaption;
exports.MDBCarouselIndicator = CarouselIndicator;
exports.MDBCarouselIndicators = CarouselIndicators;
exports.MDBCarouselInner = CarouselInner;
exports.MDBCarouselItem = CarouselItem;
exports.MDBCloseIcon = MDBCloseIcon;
exports.MDBCol = Col;
exports.MDBCollapse = Collapse;
exports.MDBContainer = Container;
exports.MDBControl = Control;
exports.MDBDataTable = DataTable;
exports.MDBDropdown = Dropdown;
exports.MDBDropdownItem = DropdownItem;
exports.MDBDropdownMenu = DropdownMenu;
exports.MDBDropdownToggle = DropdownToggle;
exports.MDBEdgeHeader = EdgeHeader;
exports.MDBFooter = Footer;
exports.MDBFormInline = FormInline;
exports.MDBFreeBird = FreeBird;
exports.MDBGallery = Gallery;
exports.MDBGalleryList = GalleryList;
exports.MDBHamburgerToggler = HamburgerToggler;
exports.MDBIcon = Fa;
exports.MDBIframe = Iframe;
exports.MDBInput = Input;
exports.MDBInputGroup = InputGroup;
exports.MDBInputSelect = InputNumeric;
exports.MDBJumbotron = Jumbotron;
exports.MDBLink = Link;
exports.MDBListGroup = ListGroup;
exports.MDBListGroupItem = ListGroupItem;
exports.MDBMask = Mask;
exports.MDBMedia = Media;
exports.MDBModal = Modal;
exports.MDBModalBody = ModalBody;
exports.MDBModalFooter = ModalFooter;
exports.MDBModalHeader = ModalHeader;
exports.MDBNav = Nav;
exports.MDBNavItem = NavItem;
exports.MDBNavLink = NavLink;
exports.MDBNavbar = Navbar;
exports.MDBNavbarBrand = NavbarBrand;
exports.MDBNavbarNav = NavbarNav;
exports.MDBNavbarToggler = NavbarToggler;
exports.MDBNotification = Notification;
exports.MDBPageItem = PageItem;
exports.MDBPageNav = PageLink;
exports.MDBPagination = Pagination;
exports.MDBPopover = Popover;
exports.MDBPopoverBody = PopoverBody;
exports.MDBPopoverHeader = PopoverHeader;
exports.MDBPopper = Popover;
exports.MDBProgress = Progress;
exports.MDBRating = Rating;
exports.MDBRow = Row;
exports.MDBTabContent = TabContent;
exports.MDBTabPane = TabPane;
exports.MDBTable = Table;
exports.MDBTableBody = TableBody;
exports.MDBTableFoot = TableFoot;
exports.MDBTableHead = TableHead;
exports.MDBTooltip = Popover;
exports.MDBTreeview = Treeview;
exports.MDBTreeviewItem = TreeviewItem;
exports.MDBTreeviewList = TreeviewList;
exports.MDBTypo = Typography;
exports.MDBTypography = Typography;
exports.MDBView = View;
exports.MDBWaves = Waves;
exports.Mask = Mask;
exports.Media = Media;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.NavLink = NavLink;
exports.Navbar = Navbar;
exports.NavbarBrand = NavbarBrand;
exports.NavbarNav = NavbarNav;
exports.NavbarToggler = NavbarToggler;
exports.Notification = Notification;
exports.PageItem = PageItem;
exports.PageLink = PageLink;
exports.Pagination = Pagination;
exports.Popover = Popover;
exports.PopoverBody = PopoverBody;
exports.PopoverHeader = PopoverHeader;
exports.Popper = Popover;
exports.Progress = Progress;
exports.Rating = Rating;
exports.Row = Row;
exports.TabContent = TabContent;
exports.TabPane = TabPane;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableFoot = TableFoot;
exports.TableHead = TableHead;
exports.Tooltip = Popover;
exports.Treeview = Treeview;
exports.TreeviewItem = TreeviewItem;
exports.TreeviewList = TreeviewList;
exports.Typo = Typography;
exports.Typography = Typography;
exports.View = View;
exports.Waves = Waves;
