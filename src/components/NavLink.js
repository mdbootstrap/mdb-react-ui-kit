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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if (!this.props.disabled) {
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
      // do the passed in callback:
      if (this.props.onClick) {
      this.props.onClick(e);
      }
      e.stopPropagation();
    }
  }

  render() {

    const {
      children,
      className,
      disabled,
      active,
      to,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav-link',
      disabled ? 'disabled' : 'Ripple-parent',
      active && 'active',
      className
    );

    return (
      <Link className={classes}
            onClick = { this.handleClick }
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
  to: PropTypes.string,
  active: PropTypes.bool
};


export default NavLink;
