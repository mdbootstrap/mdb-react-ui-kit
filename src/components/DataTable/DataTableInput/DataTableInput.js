import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBInput } from 'mdbreact';

const DataTableInput = ({ value, onChange, label, barReverse, materialSearch }) => {
  return (
    <div
      data-test='datatable-input'
      className={classNames('mdb-datatable-filter', 'flex-row', barReverse && 'text-left')}
    >
      {materialSearch ? (
        <MDBInput
          hint='Search'
          containerClass='mt-0'
          value={value}
          onChange={onChange}
          type='search'
          className='form-control form-control-sm'
          placeholder={label || 'Search'}
        />
      ) : (
        <input
          className='form-control form-control-sm ml-0 my-1'
          type='text'
          placeholder={label || 'Search'}
          aria-label='Search'
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

DataTableInput.propTypes = {
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  materialSearch: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default DataTableInput;
export { DataTableInput as MDBDataTableInput };
