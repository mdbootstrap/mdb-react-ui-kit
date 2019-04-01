import React from 'react';
import PropTypes from 'prop-types';
import DataTableSelect from './DataTableSelect';

const DataTableEntries = props => {
  const { handleEntriesChange, displayEntries, entries, entriesArr, paging, label } = props;

  return (
    <div className="col-sm-12 col-md-6">
      {paging && displayEntries && (
        <DataTableSelect
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
        />
      )}
    </div>
  );
};

DataTableEntries.propTypes = {
  handleEntriesChange: PropTypes.func.isRequired,
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  paging: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]).isRequired
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
