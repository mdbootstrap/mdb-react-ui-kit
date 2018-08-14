import React from 'react';
import PropTypes from 'prop-types';

const DataTableInfo = (props) => {
  const {
    activePage,
    entries,
    filteredRows,
    info,
    pages
  } = props;
  
  return (
    <div className="col-sm-12 col-md-5">
      {
        info &&
        <div className="dataTables_info" role="status" aria-live="polite">
          Showing {activePage > 0 ? activePage * entries + 1 : activePage + 1} to {pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length} of {filteredRows.length} entries
        </div>
      }
    </div>
  );
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

export default DataTableInfo;
export { DataTableInfo as MDBDataTableInfo };