import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Table.css';

const Table = props => {
  const {
    autoWidth,
    bordered,
    borderless,
    btn,
    children,
    dark,
    fixed,
    theadColor,
    hover,
    maxHeight,
    responsive,
    responsiveSm,
    responsiveMd,
    responsiveLg,
    responsiveXl,
    scrollY,
    small,
    striped,
    className,
    ...attributes
  } = props;

  const tableClasses = classNames(
    'table',
    {
      'w-auto': autoWidth,
      'table-bordered': bordered,
      'table-borderless': borderless,
      'btn-table': btn,
      'table-fixed': fixed,
      'table-hover': hover,
      'table-sm': small,
      'table-striped': striped
    },
    className
  );

  const wrapperClasses = classNames({
    'table-dark': dark,
    'table-responsive': responsive,
    'table-responsive-sm': responsiveSm,
    'table-responsive-md': responsiveMd,
    'table-responsive-lg': responsiveLg,
    'table-responsive-xl': responsiveXl,
    'table-wrapper-scroll-y': scrollY
  });

  const wrapperStyles = {
    maxHeight: maxHeight ? `${maxHeight}` : null
  };

  return (
    <div data-test='table' className={wrapperClasses} style={wrapperStyles}>
      <table {...attributes} className={tableClasses}>
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  theadColor: PropTypes.string,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  className: PropTypes.string
};

export default Table;
export { Table as MDBTable };
