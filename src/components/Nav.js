import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Nav extends Component {

  render() {
 
    const {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav',
      className,
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

Nav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

Nav.defaultProps = {
  tag: 'ul'
};

export default Nav;