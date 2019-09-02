import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "../Fa";

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

  onBlur = event => {
    event.stopPropagation();
    this.setState({ isFocused: false });
    this.props.onBlur && this.props.onBlur(event);
  };

  onFocus = event => {
    event.stopPropagation();
    this.setState({ isFocused: true });
    this.props.onFocus && this.props.onFocus(event);
  };

  onChange = event => {
    event.stopPropagation();
    if (this.props.type !== "checkbox" && this.props.type !== "radio") {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    this.props.onChange && this.props.onChange(event);
    this.props.getValue && this.props.getValue(event.target.value);
  };

  onInput = event => {
    event.stopPropagation();
    if (this.props.type !== "checkbox" && this.props.type !== "radio") {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    this.props.onInput && this.props.onInput(event);
  };

  setFocus = () => {
    this.inputElementRef.current.focus();
  };

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
      onIconClick,
      onIconMouseEnter,
      onIconMouseLeave,
      iconRegular,
      iconSize,
      id,
      inputRef,
      noTag,
      outline,
      label,
      labelClass,
      size,
      success,
      tag: Tag,  
      type,
      validate,
      value,
      valueDefault,
      ...attributes
    } = this.props;

    let isNotEmpty =
      (!!this.state.innerValue ||
        !!hint ||
        this.state.isFocused ||
        this.state.innerValue === 0) &&
      (type !== "checkbox" && type !== "radio");
    let TagInput = "";
    let formControlClass = "";

    if (type === "textarea") {
      formControlClass = outline ? "form-control" : "md-textarea form-control";
      TagInput = "textarea";
    } else {
      formControlClass = "form-control";
      TagInput = "input";
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
      type === "checkbox" || type === "radio"
        ? typeof label === "boolean" && label
          ? "d-flex"
          : "form-check"
        : "md-form",

      group ? "form-group" : false,
      size ? `form-${size}` : false,
      outline && "md-outline",
      background && "md-bg",
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
      type === "checkbox"
        ? typeof label === "boolean" && label
          ? "form-check-label"
          : "form-check-label mr-5"
        : false,
      type === "radio"
        ? typeof label === "boolean" && label
          ? "form-check-label"
          : "form-check-label mr-5"
        : false,
      labelClass
    );
    const renderFunction = () => (
      <>
        {icon && (
          <Fa
            icon={icon}
            size={iconSize}
            brand={iconBrand}
            light={iconLight}
            regular={iconRegular}
            className={iconClassFix}
            onClick={onIconClick ? onIconClick : this.setFocus}
            onMouseEnter={onIconMouseEnter}
            onMouseLeave={onIconMouseLeave}
          />
        )}
        <TagInput
          data-test="input"
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
        {label && (
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
        )}
        {children}
      </>
    );

    return noTag ? (
      renderFunction()
    ) : (
      <Tag className={containerClassFix}>{renderFunction()}</Tag>
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
  onIconClick: PropTypes.func,
  onIconMouseEnter: PropTypes.func,
  onIconMouseLeave: PropTypes.func,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool
  ]),
  labelClass: PropTypes.string,
  noTag: PropTypes.bool,
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueDefault: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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
  onIconMouseEnter: () => {},
  onIconMouseLeave: () => {},
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

export default Input;
export { Input as MDBInput };
