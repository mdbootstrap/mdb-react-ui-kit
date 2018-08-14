import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from './Fa';

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      innerValue: props.value || props.default || '',
      isTouched: false,
      isPristine: true
    };

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.triggerFocus = this.triggerFocus.bind(this);
  }


  componentDidMount() {
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.value) {
      return { ...prevState, innerValue: nextProps.value }
    } else {
      return null;
    }
  }

  onBlur(ev) {
    // ignore if event is a window blur
    if (document.activeElement !== this.inputElRef) {
      this.setState({ isTouched: false });
    }
    // execute callback
    let fn = this.props.onBlur;
    fn && fn(ev);
  }

  onFocus(ev) {
    // ignore if event is a window blur
    // if (document.activeElement === this.inputElRef) {
      this.setState({ isTouched: true });
    // }
            // execute callback
    let fn = this.props.onFocus;
    fn && fn(ev);
  }

  onChange(ev) {
    if(this.props.type !== 'checkbox' && this.props.type !== 'radio') {
      this.setState({
        innerValue: ev.target.value,
        isPristine: false
      });
    }

    // execute callback
    let fn = this.props.onChange;
    fn && fn(ev);
    this.props.getValue && this.props.getValue(ev.target.value);
  }
  triggerFocus() {
    // hack to enable IE10 pointer-events shim
    this.inputElRef.focus();
  }

  getValueHandler() {
    return this.state.innerValue;
  }

  render() {

    const {
      containerClass,
      size,
      group,
      getValue,
      className,
      type,
      el,
      tag,
      id,
      hint,
      validate,
      value,
      label,
      error,
      success,
      disabled,
      labelClass,
      icon,
      iconClass,
      filled,
      gap,
      ...attributes
    } = this.props;

    let isNotEmpty = Boolean(this.state.innerValue) || hint || this.state.isTouched;


    const inputType = type === 'input';
    const textareaInput = type === 'textarea';
    //we set selectro input or textarea
    let Tag = textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (textareaInput) {
      formControlClass = 'md-textarea form-control';
    } else if (inputType) {
      formControlClass = 'form-control';
    }

    if (Tag === 'input') {
      attributes.type = type;
    }

    if (disabled) {
      attributes.disabled = true;
    }

    const classes = classNames(
      formControlClass,
      size ? `form-control-${size}` : false,
      validate ? 'validate' : false,
      filled ? 'filled-in' : false,
      gap ? 'with-gap' : false,
      type === 'checkbox' ? gap ? false : 'form-check-input' : false,
      type === 'radio' ? 'form-check-input' : false,
      className
    );

    const containerClassFix = classNames(
      type === 'checkbox' || type === 'radio' ? 'form-check my-3' : 'md-form',
      group ? 'form-group' : false,
      size ? `form-${size}` : false,
      containerClass
    );

    const iconClassFix = classNames(
      'fa',
      icon ? `fa-${icon}` : false,
      isNotEmpty ? 'active' : false,
      size ? `fa-${size}` : false,
      iconClass,
      'prefix'
    );

    const labelClassFix = classNames(
      isNotEmpty ? 'active' : false,
      disabled ? 'disabled' : false,
      type === 'checkbox' ? 'form-check-label mr-5' : false,
      type === 'radio' ? 'form-check-label mr-5' : false,
      labelClass
    );

    return (
      <div className={containerClassFix}>

        {icon ? <i className={iconClassFix}></i> : false}
        <Tag
          {...attributes}
          id={id}
          className={classes}
          ref={el => { this.inputElRef = el; }}
          value={this.state.innerValue}
          placeholder={hint}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {label ? <label className={labelClassFix} htmlFor={id} data-error={error} data-success={success} onClick={this.triggerFocus}>{label}</label> : false }
      </div>
    );
  }
}

TextField.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.bool,
  validate: PropTypes.bool,
  size: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.string,
  default: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  el: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  containerClass: PropTypes.string,
  filled: PropTypes.bool,
  gap: PropTypes.bool,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
TextField.defaultProps = {
  tag: 'input',
  type: 'text',
  hint: null,
  getValue: false
};

export default TextField;
export { TextField as MDBTextarea };
