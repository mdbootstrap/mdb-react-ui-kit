import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from "../Fa";

const DataTableHead = props => {
  const {
    color,
    columns,
    handleSort,
    scrollX,
    scrollY,
    sortable,
    textWhite
  } = props;

  const theadClasses = classNames(
    color && (color !== "dark" && color !== "light" ? color : `thead-${color}`),
    textWhite && "text-white"
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
      <thead className={theadClasses || undefined}>
        <tr>
          {columns.map(col => (
            <th
              onClick={() => sortable && handleSort(col.field, col.sort)}
              key={col.field}
              className={
                col.hasOwnProperty("minimal") ? `th-${col.minimal}` : undefined
              }
              {...col.attributes}
            >
              {col.label}
              {sortable && col.sort !== 'disabled' && (
                <Fa icon="sort" className="float-right" aria-hidden="true" />
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
