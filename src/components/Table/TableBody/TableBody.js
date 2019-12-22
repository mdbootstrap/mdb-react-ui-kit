import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TableBody = props => {
  const { children, color, columns, rows, textWhite, ...attributes } = props;

  const classes = classNames(color, {
    'text-white': textWhite
  });
  const renderTD = (field, key, array, row) => {
    if (field === 'clickEvent') {return null;}
    if (field !== 'colspan') {
      if (row.message) {
        return (
          key === 0 && (
            <td key={key} colSpan={row.colspan}>
              {row.message}
            </td>
          )
        );
      } else {
        return (
          (array[key + 1] !== 'colspan' && row[field] !== null && (
            <td key={key}>{row[field]}</td>
          )) || <td key={key}></td>
        );
      }
    }
    return (
      <td key={key} colSpan={row.colspan}>
        {row[array[key - 1]]}
      </td>
    );
  };

  return (
    <tbody
      data-test='table-body'
      {...attributes}
      className={classes || undefined}
    >
      {rows &&
        rows.map((row, index) => (
          <tr
            onClick={
              row.hasOwnProperty('clickEvent') ? row.clickEvent : undefined
            }
            key={index}
          >
            {columns
              ? columns.map(({ field }, key, array) =>
                  renderTD(field, key, array, row)
                )
              : Object.keys(row).map((field, key, array) =>
                  renderTD(field, key, array, row)
                )}
          </tr>
        ))}
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};

TableBody.defaultProps = {
  textWhite: false
};

export default TableBody;
export { TableBody as MDBTableBody };
