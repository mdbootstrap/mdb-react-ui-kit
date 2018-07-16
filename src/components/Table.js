import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Table extends React.Component {

  render() {
    const {
      className,
      small,
      bordered,
      striped,
      hover,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      ...attributes
    } = this.props;

    const classes  = classNames(
      'table',
      small && 'table-sm',
      bordered && 'table-bordered',
      striped && 'table-striped',
      hover && 'table-hover',
      className
    );

    const wrapperClasses = classNames(
      responsive && 'table-responsive',
      responsiveSm && 'table-responsive-sm',
      responsiveMd && 'table-responsive-md',
      responsiveLg && 'table-responsive-lg',
      responsiveXl && 'table-responsive-xl'
    )

    return (
      <div className={wrapperClasses}>
        <table {...attributes} className={classes}>{this.props.children}</table>
      </div>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  children: PropTypes.node,
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool
};

export default Table;
export { Table as MDBTable };

