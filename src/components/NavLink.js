import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

const Link = require('react-router-dom').NavLink;


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
      disabled,
      to,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav-link',
      disabled ? 'disabled' : 'Ripple-parent',
      className
    );

    return (
      <Link className={classes}
            onClick={this.onClick}
            onMouseDown={ this.handleClick.bind(this) }
            onTouchStart={ this.handleClick.bind(this) }
            to={this.props.to}
            {...attributes}
      >
        {children}
        {this.props.disabled ? false : <Waves cursorPos={ this.state.cursorPos } />}
      </Link>
    );
  }
}

NavLink.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string
};


export default NavLink;
