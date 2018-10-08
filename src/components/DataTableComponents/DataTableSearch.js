import React from "react";
import PropTypes from "prop-types";
let DataTableInput;
try {
  DataTableInput = require("../pro/DataTableInput").default;
} catch (err) {
  DataTableInput = require("./DataTableInput").default;
}

const DataTableSearch = props => {
  const { handleSearchChange, search, searching, label } = props;

  return (
    <div className="col-sm-12 col-md-6">
      {searching && (
        <DataTableInput
          value={search}
          onChange={handleSearchChange}
          label={label}
        />
      )}
    </div>
  );
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  label: PropTypes.string
};

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
