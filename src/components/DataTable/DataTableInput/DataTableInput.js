import React from 'react';
import PropTypes from 'prop-types';

const DataTableInput = ({ value, onChange, label }) => (
  <div data-test='datatable-input' className='dataTables_filter'>
    <label>
      {label || 'Search'}
      <input
        value={value}
        onChange={onChange}
        type='search'
        className='form-control form-control-sm'
        placeholder={label || 'Search'}
      />
    </label>
  </div>
);

DataTableInput.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ]),
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
