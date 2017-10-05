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
      ...attributes
    } = this.props;


    const classes  = classNames(
      'table',
      responsive ? 'table-responsive' : false,
      small ? 'table-sm' : false,
      bordered ? 'table-bordered' : false,
      striped ? 'table-striped' : false,
      hover ? 'table-hover' : false,
      className
    );

    // const table = <table {...attributes} className={classes}> {this.props.children}</table>;

    // if (responsive) {
    //   return (
    //     <div className="table-responsive">{table}</div>
    //   );
    // }

    return (
      <table {...attributes} className={classes}> {this.props.children}</table>
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
  responsive: PropTypes.bool
};

export default Table;