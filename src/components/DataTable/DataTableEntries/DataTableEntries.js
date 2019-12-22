import React from 'react';
import PropTypes from 'prop-types';

import DataTableSelect from '../DataTableSelect';


const DataTableEntries = props => {
  const {
    handleEntriesChange,
    displayEntries,
    entries,
    entriesArr,
    paging,
    label,
    barReverse
  } = props;

  return (
    <div data-test='datatable-entries' className='col-sm-12 col-md-6'>
      {paging && displayEntries && (
        <DataTableSelect
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
          barReverse={barReverse}
        />
      )}
    </div>
  );
};

DataTableEntries.propTypes = {
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEntriesChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
