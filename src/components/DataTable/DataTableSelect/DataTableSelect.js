import React from 'react';
import PropTypes from 'prop-types';

const DataTableSelect = ({ value, onChange, entries, label }) => {
  const getValue = e => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div data-test='datatable-select' className='dataTables_length bs-select'>
      <label>
        {label}
        <select
          value={value}
          onChange={getValue}
          className='custom-select custom-select-sm form-control form-control-sm'
          style={{ marginLeft: '.5rem' }}
        >
          {entries.map(entry => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
