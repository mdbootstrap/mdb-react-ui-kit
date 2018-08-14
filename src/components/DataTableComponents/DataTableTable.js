import React from 'react';
import PropTypes from 'prop-types';
import Table from '../Table';
import DataTableHead from './DataTableHead';
import TableBody from '../TableBody';
import TableFoot from '../TableFoot';

const DataTableTable = (props) => {
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
    responsive,
    responsiveSm,
    responsiveMd,
    responsiveLg,
    responsiveXl,
    rows,
    small,
    sortable,
    striped,
    tbodyColor,
    tbodyTextWhite,
    theadColor,
    theadTextWhite,
    ...attributes
  } = props;

  return (
    <div className="col-sm-12">
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
          sortable={sortable}
        />
        <TableBody
          color={tbodyColor}
          textWhite={tbodyTextWhite}
          rows={rows}
        />
        <TableFoot
          color={theadColor}
          textWhite={theadTextWhite}
          columns={columns}
        />
        {children}
      </Table>
    </div>
  );
};

DataTableTable.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
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
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
};

export default DataTableTable;
export { DataTableTable as MDBDataTableTable };
