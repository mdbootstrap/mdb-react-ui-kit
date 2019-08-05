import React from "react";
import PropTypes from "prop-types";

const DataTableInput = ({ value, onChange, label }) => (
  <div className="dataTables_filter">
    <label>
      {label || "Search"}
      <input
        value={value}
        onChange={onChange}
        type="search"
        className="form-control form-control-sm"
        placeholder={label || "Search"}
      />
    </label>
  </div>
);

DataTableInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number, 
    PropTypes.object
  ]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
