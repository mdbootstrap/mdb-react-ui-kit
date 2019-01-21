import React from "react";
import PropTypes from "prop-types";
let DataTableSelect;
try {
  DataTableSelect = require("../pro/DataTableSelect").default;
} catch (err) {
  DataTableSelect = require("./DataTableSelect").default;
}

const DataTableEntries = props => {
  const { handleEntriesChange, entries, entriesArr, paging, label } = props;

  return (
    <div className="col-sm-12 col-md-6">
      {paging && (
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
