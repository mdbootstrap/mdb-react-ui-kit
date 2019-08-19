import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableHead = props => {
  const { children, color, columns, textWhite, ...attributes } = props;

  const isTheadColor = color === 'dark' || color === 'light';

  const classes = classNames({
    'text-white': textWhite,
    [`thead-${color}`]: color && isTheadColor,
    [`${color}`]: color && !isTheadColor
  });

  return (
    <thead data-test='table-head' {...attributes} className={classes}>
      {columns && (
        <tr>
          {columns.map(col => (
            <th
              key={col.field}
              className={
                col.hasOwnProperty('minimal') ? `th-${col.minimal}` : ''
              }
            >
              {col.label}
            </th>
          ))}
        </tr>
      )}
      {children}
    </thead>
  );
};

TableHead.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

TableHead.defaultProps = {
  textWhite: false
};

export default TableHead;
export { TableHead as MDBTableHead };
