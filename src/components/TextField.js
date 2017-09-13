import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from './Fa';

class TextField extends React.Component {
  constructor(props) {
    super(props);

    let value = props.value;
    let innerValue = value || props.defaultValue;

    if (innerValue === undefined) innerValue = '';

    this.state = {
      innerValue: innerValue,
      isTouched: false,
      isPristine: true
    };

    // warn if value defined but onChange is not
    if (value !== undefined && !props.onChange) {
      console.log('You provided a `value` prop to a form field ' +
        'without an `OnChange` handler. Please see React documentation on ' +
        'controlled components')
    }

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }


  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // update innerValue when new value is received to handle programmatic
    // changes to input box
    if ('value' in nextProps) this.setState({ innerValue: nextProps.value });
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
    if (document.activeElement === this.inputElRef) {
      this.setState({ isTouched: true });
    }
    // execute callback
    let fn = this.props.onBlur;
    fn && fn(ev);
  }

  onChange(ev) {
    this.setState({
      innerValue: ev.target.value,
      isPristine: false
    });

    // execute callback
    let fn = this.props.onChange;
    fn && fn(ev);
  }

  triggerFocus() {
    // hack to enable IE10 pointer-events shim
    this.inputElRef.focus();
  }

  render() {

    const {
      containerClass,
      size,
      group,
      className,
      type,
      state,
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
      dataError,
      iconClass,
      ...attributes
    } = this.props;

    let isNotEmpty = Boolean(this.state.innerValue.toString()) || hint || this.state.isTouched;


    const inputType = type === 'input';
    const textareaInput = type === 'textarea';
    //we set selectro input or textarea
    let Tag = textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (textareaInput) {
      formControlClass = 'md-textarea';
    } else if (inputType) {
      formControlClass = 'form-control';
    }

    const classes = classNames(
      formControlClass,
      validate ? 'validate' : false,
      className,
    );

    const containerClassFix = classNames(
      'md-form',
      group ? 'form-group' : false,
      size ? `form-${size}` : false,
      containerClass,
    );

    const iconClassFix = classNames(
      'fa',
      icon ? `fa-${icon}` : false,
      isNotEmpty ? 'active' : false,
      iconClass,
      'prefix'
    );

    const labelClassFix = classNames(
      isNotEmpty ? 'active' : false,
      disabled ? 'disabled' : false,
      labelClass,
    );

    if (Tag === 'input') {
      attributes.type = type;
    }

    if (disabled) {
      attributes.disabled = true;
    }

    return (
      <div className={containerClassFix}>

        {icon ? <i className={iconClassFix}></i> : false}
        <Tag 
          {...attributes} 
          id={id}
          className={classes} 
          ref={el => { this.inputElRef = el }}
          placeholder={hint}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />
        {label ? <label className={labelClassFix} htmlFor={id} data-error={error} data-success={success}>{label}</label> : false }
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
  id: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.string,
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
};
TextField.defaultProps = {
  tag: 'input',
  type: 'text',
  hint: null,
};

export default TextField;