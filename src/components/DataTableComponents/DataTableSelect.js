import React from 'react';
import PropTypes from 'prop-types';

const DataTableSelect = ({ value, onChange, entries }) => {
  const getValue = (e) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div className="dataTables_length bs-select">
      <label>
        Show <select
          value={value}
          onChange={getValue}
          className="custom-select custom-select-sm form-control form-control-sm"
        >
          {
            entries.map(entry => <option key={entry} value={entry}>{entry}</option>)
          }
        </select> entries
      </label>
    </div>
  );
};



DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  value: PropTypes.number
};

export default DataTableSelect;
export { DataTableSelect as MDBDataTableSelect };
