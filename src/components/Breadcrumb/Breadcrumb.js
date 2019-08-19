import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getColorClass } from '../utils';

const Breadcrumb = props => {
  const { className, color, light, uppercase, bold, ...attributes } = props;

  let classes = classNames(
    'breadcrumb',
    uppercase && 'text-uppercase',
    bold && 'font-up-bold',
    light && 'white-text',
    color && getColorClass(color),
    className
  );

  let children;

  if (bold) {
    children = React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return (
    <nav data-test='breadcrumb'>
      <ol {...attributes} className={classes}>
        {children}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool
};

export default Breadcrumb;
export { Breadcrumb as MDBBreadcrumb };
