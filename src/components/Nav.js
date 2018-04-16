import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Nav extends Component {

  render() {

    const {
      children,
      className,
      tag: Tag,
      tabs,
      color,
      classicTabs,
      pills,
      ...attributes
    } = this.props;

    const classes = classNames(
      'nav',
      this.props.tabs && 'nav-tabs',
      this.props.pills && 'md-pills',
      this.props.classicTabs && 'classic-tabs',
      this.props.pills && this.props.color ? 'pills-'+this.props.color : false,
      (this.props.tabs || this.props.classicTabs) && this.props.color ? 'tabs-'+this.props.color : false,
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
  children: PropTypes.node,
  color: PropTypes.string,
  classicTabs: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool
};

Nav.defaultProps = {
  tag: 'ul'
};

export default Nav;
