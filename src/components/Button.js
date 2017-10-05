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

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }



  render() {
    let {
      active,
      block,
      className,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      floating ? 'btn-floating' : 'btn',
      flat ? 'btn-flat' : false,
      gradient ? `${gradient}-gradient` : `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      rounded ? 'btn-rounded' : false,
      block ? 'btn-block' : false,
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
        role={(Tag === 'a' && !role) ? 'button' : role}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) }
        {...attributes}
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
  block: PropTypes.bool,
  color: PropTypes.string,
  gradient: PropTypes.string,
  role: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};

export default Button;
