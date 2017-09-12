import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class BreadcrumbItem extends React.Component {

  render() {
    const {
      className,
      active,
      ...attributes
    } = this.props;


    const classes  = classNames(
      active ? 'active' : false,
      'breadcrumb-item',
      className
    );

    return (
      <li {...attributes} className={classes}>
        {this.props.children}
      </li>
    )
  }
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default BreadcrumbItem ;


