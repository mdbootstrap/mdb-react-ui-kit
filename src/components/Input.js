import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "./Fa";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerValue: props.value || props.valueDefault,
      isFocused: false,
      isPristine: true
    };

    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // User wants to access the input ref, but we have to use it intenrally to.
    // Return Ref instance to share ref with parent
    // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
    this.props.inputRef && this.props.inputRef(this.inputElementRef.current);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { innerValue: nextProps.value };
    }

    return null;
  }

  onBlur = (event) => {
    event.stopPropagation();
    this.setState({ isFocused: false });
    this.props.onBlur && this.props.onBlur(event);
  }

  onFocus = (event) => {
    event.stopPropagation();
    this.setState({ isFocused: true });
    this.props.onFocus && this.props.onFocus(event);
  }

  onChange = (event) => {
    event.stopPropagation();
    if (this.props.type !== "checkbox" && this.props.type !== "radio") {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    this.props.onChange && this.props.onChange(event);
    this.props.getValue && this.props.getValue(event.target.value);
  }

  onInput = (event) => {
    event.stopPropagation();
    if (this.props.type !== "checkbox" && this.props.type !== "radio") {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    this.props.onInput && this.props.onInput(event);
  }

  setFocus = () => {
    this.inputElementRef.current.focus();
  }

  render() {
    const {
      background,
      children,
      className,
      containerClass,
      disabled,
      error,
      filled,
      gap,
      getValue,
      group,
      hint,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      id,
      inputRef,
      outline,
      label,
      labelClass,
      size,
      success,
      tag,
      type,
      validate,
      value,
      valueDefault,
      ...attributes
    } = this.props;

    let isNotEmpty = !!this.state.innerValue || !!hint || this.state.isFocused;
    let Tag = "";
    let formControlClass = "";

    if (type === "textarea") {
      formControlClass = outline ? "form-control" : "md-textarea form-control";
      Tag = "textarea";
    }
    else {
      formControlClass = "form-control";
      Tag = "input";
      attributes.type = type;
    }

    attributes.disabled = disabled;

    const classes = classNames(
      formControlClass,
      size ? `form-control-${size}` : false,
      validate ? "validate" : false,
      filled ? "filled-in" : false,
      gap ? "with-gap" : false,
      type === "checkbox" ? (gap ? false : "form-check-input") : false,
      type === "radio" ? "form-check-input" : false,
      className
    );

    const containerClassFix = classNames(
      type === "checkbox" || type === "radio" ? "form-check my-3" : "md-form",
      group ? "form-group" : false,
      size ? `form-${size}` : false,
      outline && 'md-outline',
      background && 'md-bg',
      containerClass
    );

    const iconClassFix = classNames(
      isNotEmpty && this.state.isFocused ? "active" : false,
      iconClass,
      "prefix"
    );

    const labelClassFix = classNames(
      isNotEmpty ? "active" : false,
      disabled ? "disabled" : false,
      type === "checkbox" ? "form-check-label mr-5" : false,
      type === "radio" ? "form-check-label mr-5" : false,
      labelClass
    );

    return (
      <div className={containerClassFix}>
        {
          icon &&
          <Fa
            icon={icon}
            size={iconSize}
            brand={iconBrand}
            light={iconLight}
            regular={iconRegular}
            className={iconClassFix}
            onClick={this.setFocus}
          />
        }
        <Tag
          {...attributes}
          className={classes}
          id={id}
          placeholder={hint}
          ref={this.inputElementRef}
          value={this.state.innerValue}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onInput={this.onInput}
          onFocus={this.onFocus}
        />
        {
          label &&
          <label
            className={labelClassFix}
            htmlFor={id}
            data-error={error}
            data-success={success}
            id={id}
            onClick={this.setFocus}
          >
            {label}
          </label>
        }
        {children}
      </div>
    );
  }
}

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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
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

export default Input;
export { Input as MDBInput };
