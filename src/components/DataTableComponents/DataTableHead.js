import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DataTableHead = props => {
  const {
    color,
    columns,
    handleSort,
    scrollX,
    scrollY,
    sortable,
    textWhite,
    ...attributes
  } = props;

  const theadClasses = classNames(
    color !== "dark" && color !== "light" ? color : `thead-${color}`,
    {
      "text-white": textWhite
    }
  );

  return (
    <Fragment>
      {(scrollY || scrollX) && (
        <colgroup>
          {columns.map(col => (
            <col
              key={col.field}
              style={{
                width: `${col.width}px` || "auto",
                minWidth: `${col.width}px` || "auto"
              }}
            />
          ))}
        </colgroup>
      )}
      <thead {...attributes} className={theadClasses}>
        <tr>
          {columns.map(col => (
            <th
              onClick={() => sortable && handleSort(col.field, col.sort)}
              key={col.field}
              className={
                col.hasOwnProperty("minimal") ? `th-${col.minimal}` : ""
              }
            >
              {col.label}
              {sortable && (
                <i className="fa fa-sort float-right" aria-hidden="true" />
              )}
            </th>
          ))}
        </tr>
      </thead>
    </Fragment>
  );
};

DataTableHead.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  textWhite: PropTypes.bool
};

DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};

export default DataTableHead;
export { DataTableHead as MDBDataTableHead };
