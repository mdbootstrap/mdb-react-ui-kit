import React from "react";
import PropTypes from "prop-types";
import Table from "../Table";
import DataTableHead from "./DataTableHead";
import TableBody from "../TableBody";

const DataTableTableScroll = props => {
  const {
    autoWidth,
    bordered,
    borderless,
    btn,
    children,
    columns,
    dark,
    fixed,
    hover,
    handleSort,
    handleTableBodyScroll,
    maxHeight,
    responsive,
    responsiveSm,
    responsiveMd,
    responsiveLg,
    responsiveXl,
    rows,
    scrollX,
    scrollY,
    small,
    sortable,
    striped,
    tbodyColor,
    tbodyTextWhite,
    theadColor,
    theadTextWhite,
    translateScrollHead,
    ...attributes
  } = props;

  return (
    <div className="col-sm-12">
      <div className="dataTables_scroll">
        <div className="dataTables_scrollHead" style={{ overflow: "hidden" }}>
          <div
            className="dataTables_scrollHeadInner"
            style={{
              position: "relative",
              transform: `translateX(-${translateScrollHead}px)`,
              boxSizing: "content-box",
              paddingRight: "15px",
              minWidth: `${
                scrollX
                  ? columns
                      .map(col => col.width)
                      .reduce((prev, curr) => prev + curr, 0) + "px"
                  : "auto"
              }`
            }}
          >
            <Table
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              hover={hover}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              small={small}
              striped={striped}
              className="dataTable"
              {...attributes}
            >
              <DataTableHead
                color={theadColor}
                textWhite={theadTextWhite}
                columns={columns}
                handleSort={handleSort}
                scrollX={scrollX}
                scrollY={scrollY}
                sortable={sortable}
              />
            </Table>
          </div>
        </div>

        <div
          className="dataTable_scrollBody"
          style={{ overflow: "auto" }}
          onScroll={handleTableBodyScroll}
        >
          <Table
            style={{
              minWidth: `${
                scrollX
                  ? columns
                      .map(col => col.width)
                      .reduce((prev, curr) => prev + curr, 0) + "px"
                  : "auto"
              }`
            }}
            autoWidth={autoWidth}
            bordered={bordered}
            borderless={borderless}
            btn={btn}
            dark={dark}
            fixed={fixed}
            hover={hover}
            maxHeight={maxHeight}
            responsive={responsive}
            responsiveSm={responsiveSm}
            responsiveMd={responsiveMd}
            responsiveLg={responsiveLg}
            responsiveXl={responsiveXl}
            scrollY={scrollY}
            small={small}
            striped={striped}
            className="dataTable"
            {...attributes}
          >
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
            <TableBody
              color={tbodyColor}
              textWhite={tbodyTextWhite}
              rows={rows}
            />
            {children}
          </Table>
        </div>
      </div>
    </div>
  );
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  translateScrollHead: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node,
  maxHeight: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool
};

export default DataTableTableScroll;
export { DataTableTableScroll as MDBDataTableTableScroll };
