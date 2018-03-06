import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class SideNavNav extends React.Component {

  render() {
    const {
      tag: Tag,
      children,
      className,
      ...attributes
    } = this.props;

    const classes = classNames(
      'collapsible',
      'collapsible-accordion',
      className
    );



    return (
      <li>
        <Tag {...attributes} className={classes} >
            {children}
        </Tag>
      </li>
    );
  }
}

SideNavNav.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,

};

SideNavNav.defaultProps = {
  tag: 'ul',
};

export default SideNavNav;


