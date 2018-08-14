import React from 'react';
import PropTypes from 'prop-types';

const DataTableInput = ({ value, onChange }) => (
  <div className="dataTables_filter">
    <label>
      Search <input
        value={value}
        onChange={onChange}
        type="search"
        className="form-control form-control-sm"
        placeholder="Search"
      />
    </label>
  </div>
);

DataTableInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };