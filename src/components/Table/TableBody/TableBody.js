import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TableBody = props => {
  const { children, color, rows, textWhite, ...attributes } = props;

  const classes = classNames(color, {
    "text-white": textWhite
  });

  return (
    <tbody data-test="table-body" {...attributes} className={classes || undefined}>
      {rows &&
        rows.map((row, index) => (
          <tr 
            onClick={row.hasOwnProperty("clickEvent") ? row.clickEvent : undefined} 
            key={index}
          >
            {Object.keys(row).map((key, index, array) => {
              if(key === "clickEvent") return null;

              if (key !== "colspan") {
                return array[index + 1] !== "colspan" ? (
                  <td key={key}>{row[key]}</td>
                ) : null;
              } else {
                return (
                  <td key={key} colSpan={row[key]}>
                    {row[array[index - 1]]}
                  </td>
                );
              }
            })}
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
