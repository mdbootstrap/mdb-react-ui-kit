import React from 'react';
import PropTypes from 'prop-types';

const DataTableInfo = props => {
  const { activePage, entries, filteredRows, info, pages, label } = props;

  return (
    <div data-test='datatable-info' className='col-sm-12 col-md-5'>
      {info && (
        <div className='dataTables_info' role='status' aria-live='polite'>
          {label[0]}{' '}
          {activePage > 0 ? activePage * entries + 1 : activePage + 1}{' '}
          {label[1]}{' '}
          {pages.length - 1 > activePage
            ? pages[activePage].length * (activePage + 1)
            : filteredRows.length}{' '}
          {label[2]} {filteredRows.length} {label[3]}
        </div>
      )}
    </div>
  );
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};

DataTableInfo.defaultProps = {
  label: ['Showing', 'to', 'of', 'entries']
};

export default DataTableInfo;
export { DataTableInfo as MDBDataTableInfo };
