import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../Fa';

class Input extends React.Component {
  state = {
    innerValue: this.props.value || this.props.valueDefault,
    isFocused: false,
    isPristine: true
  };

  inputElementRef = React.createRef();

  componentDidMount() {
    // User wants to access the input ref, but we have to use it intenrally to.
    // Return Ref instance to share ref with parent
    // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
    const { inputRef, focused } = this.props;
    inputRef && inputRef(this.inputElementRef.current);
    if (focused === true) {
      this.setState({ isFocused: focused }, () => {
        this.setFocus();
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { innerValue: nextProps.value };
    }

    return null;
  }

  onBlur = event => {
    event.stopPropagation();
    const { onBlur } = this.props;
    this.setState({ isFocused: false });
    onBlur && onBlur(event);
  };

  onFocus = event => {
    event.stopPropagation();
    const { onFocus } = this.props;
    this.setState({ isFocused: true });
    onFocus && onFocus(event);
  };

  onChange = event => {
    event.stopPropagation();
    const { type, onChange, getValue } = this.props;

    if (type !== 'checkbox' && type !== 'radio') {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    onChange && onChange(event);
    getValue && getValue(event.target.value);
  };

  onInput = event => {
    event.stopPropagation();
    const { type, onInput } = this.props;
    if (type !== 'checkbox' && type !== 'radio') {
      this.setState({
        innerValue: event.target.value,
        isPristine: false
      });
    }

    onInput && onInput(event);
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
      focused,
      outline,
      label,
      labelClass,
      labelId,
      size,
      success,
      tag: Tag,
      type,
      validate,
      value,
      valueDefault,
      ...attributes
    } = this.props;
    const { innerValue, isFocused } = this.state;
    const isNotEmpty =
      (!!innerValue || !!hint || isFocused || innerValue === 0) && type !== 'checkbox' && type !== 'radio';
    let TagInput = '';
    let formControlClass = '';

    if (type === 'textarea') {
      formControlClass = outline ? 'form-control' : 'md-textarea form-control';
      TagInput = 'textarea';
    } else {
      formControlClass = 'form-control';
      TagInput = 'input';
      attributes.type = type;
    }

    attributes.disabled = disabled;

    const classes = classNames(
      formControlClass,
      size ? `form-control-${size}` : false,
      validate ? 'validate' : false,
      filled ? 'filled-in' : false,
      gap ? 'with-gap' : false,
      type === 'checkbox' ? (gap ? false : 'form-check-input') : false,
      type === 'radio' ? 'form-check-input' : false,
      className
    );

    const containerClassFix = classNames(
      type === 'checkbox' || type === 'radio'
        ? typeof label === 'boolean' && label
          ? 'd-flex'
          : 'form-check'
        : 'md-form',

      group ? 'form-group' : false,
      size ? `form-${size}` : false,
      outline && 'md-outline',
      background && 'md-bg',
      containerClass
    );

    const iconClassFix = classNames(isNotEmpty && isFocused ? 'active' : false, iconClass, 'prefix');

    const labelClassFix = classNames(
      isNotEmpty ? 'active' : false,
      disabled ? 'disabled' : false,
      type === 'checkbox' ? 'form-check-label' : false,
      type === 'radio' ? 'form-check-label' : false,
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
            onClick={onIconClick || this.setFocus}
            onMouseEnter={onIconMouseEnter}
            onMouseLeave={onIconMouseLeave}
          />
        )}
        <TagInput
          data-test='input'
          {...attributes}
          className={classes}
          id={id}
          placeholder={hint}
          ref={this.inputElementRef}
          value={innerValue}
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
            id={labelId}
            onClick={this.setFocus}
          >
            {label}
          </label>
        )}
        {children}
      </>
    );

    return noTag ? renderFunction() : <Tag className={containerClassFix}>{renderFunction()}</Tag>;
  }
}

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  filled: PropTypes.bool,
  focused: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
  focused: false,
  iconClass: '',
  iconLight: false,
  onIconMouseEnter: () => {},
  onIconMouseLeave: () => {},
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

export default Input;
export { Input as MDBInput };
