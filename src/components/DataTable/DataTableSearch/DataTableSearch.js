import React from 'react';
import PropTypes from 'prop-types';

import DataTableInput from '../DataTableInput';


const DataTableSearch = props => {
  const { handleSearchChange, search, searching, label, barReverse } = props;

  return (
    <div data-test='datatable-search' className='col-sm-12 col-md-6'>
      {searching && (
        <DataTableInput
          value={search}
          onChange={handleSearchChange}
          label={label}
          barReverse={barReverse}
        />
      )}
    </div>
  );
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string
};

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
