import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.onClick = this.onClick.bind(this);
  }

  handleClick = (e) => {
    if (!this.props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
      e.stopPropagation();
    }
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
  }

  render() {
    let {
      active,
      block,
      circle,
      className,
      color,
      download,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      social,
      action,
      tag: Tag,
      target,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      floating ? 'btn-floating' : 'btn',
      flat ? 'btn-flat' : gradient ? `${gradient}-gradient` : `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      rounded ? 'btn-rounded' : false,
      circle && 'btn-circle',
      block ? 'btn-block' : false,
      social ? 'btn-' + social : false,
      action ? 'btn-action' : false,
      'Ripple-parent',
      className,
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && !type) ? 'button' : type}
        target={target}
        role={(Tag === 'a' && !role) ? 'button' : role}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
        onMouseDown={ this.handleClick }
        onTouchStart={ this.handleClick }
        {...attributes}
        download={download}
      >
        {this.props.children}
        {this.props.disabled ? false : <Waves cursorPos={ this.state.cursorPos } outline={outline} flat={flat} />}
      </Tag>
    );
  }
}

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};

Button.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  download: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
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

export default Button;
export { Button as MDBBtn };
