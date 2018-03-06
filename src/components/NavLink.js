import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.onClick = this.onClick.bind(this);
  }

  handleClick(e){
    // Get Cursor Position
    e.preventDefault();
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

    const {
      children,
      className,
      tag: Tag,
      href,
      disabled,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav-link',
      disabled ? 'disabled' : 'Ripple-parent',
      className
    );

    return (
      <Tag className={classes} href={href}
      onClick={this.onClick}
      onMouseDown={ this.handleClick.bind(this) }
      onTouchStart={ this.handleClick.bind(this) }
      ref={innerRef}
      {...attributes}
      >
        {children}
        {this.props.disabled ? false : <Waves cursorPos={ this.state.cursorPos } />}
      </Tag>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  tag: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  href: PropTypes.string
};

NavLink.defaultProps = {
  tag: 'a',
  href: '#'
};

export default NavLink;
