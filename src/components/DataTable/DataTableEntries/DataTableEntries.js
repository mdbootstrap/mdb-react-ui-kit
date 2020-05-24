import React from 'react';
import PropTypes from 'prop-types';
import DataTableSelectFree from '../DataTableSelect';



const DataTableEntries = props => {
  const {
    handleEntriesChange,
    displayEntries,
    entries,
    entriesArr,
    paging,
    label,
    barReverse,
    proSelect,
    ...attributes
  } = props;

  return (
    <div
      data-test='datatable-entries'
      className='col-sm-12 col-md-6'
      style={{ display: 'flex', alignItems: 'center', justifyContent: barReverse && 'flex-end' }}
    >
      {paging && displayEntries && !proSelect && (
        <DataTableSelectFree
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
          barReverse={barReverse}
          {...attributes}
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
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  proSelect: PropTypes.bool
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
