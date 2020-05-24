import React from 'react';
import PropTypes from 'prop-types';
import DataTableInput from '../DataTableInput';
import classNames from 'classnames';

const DataTableSearch = props => {
  const {
    handleSearchChange,
    search,
    searching,
    label,
    barReverse,
    wrapperSearchStyle,
    wrapperSearchClasses,
    materialSearch,
    ...attributes
  } = props;

  const classes = classNames('col-sm-12 col-md-6', wrapperSearchClasses);

  return (
    searching && (
      <div
        data-test='datatable-search'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: barReverse ? 'flex-start' : 'flex-end',
          ...wrapperSearchStyle
        }}
        className={classes}
      >
        <DataTableInput
          value={search}
          onChange={handleSearchChange}
          label={label}
          barReverse={barReverse}
          materialSearch={materialSearch}
          {...attributes}
        />
      </div>
    )
  );
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  materialSearch: PropTypes.bool
};

export default DataTableSearch;
export { DataTableSearch as MDBDataTableSearch };
