import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableSelectFree from '../DataTableSelect/DataTableSelect';

// PRO-START
import DataTableSelect from '../../../pro/DataTable/DataTableNew/DataTableSelect';
// FREE-START

/*
// PRO-END
import DataTableSelect from '../DataTableSelect';
// PRO-START
*/
// FREE-END
// PRO-END

const DataTableEntries = props => {
  const {
    handleEntriesChange,
    displayEntries,
    entries,
    entriesArr,
    paging,
    label,
    barReverse,
    className,
    proSelect,
    ...attributes
  } = props;

  const classes = classNames('mdb-datatable-entries', className);

  return (
    <div data-test='mdb-datatable-entries' className={classes}>
      {paging && displayEntries && !proSelect && (
        <DataTableSelectFree
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
          barReverse={barReverse}
          {...attributes}
        />
      )}

      {/* PRO-START */}
      {paging && displayEntries && proSelect && (
        <DataTableSelect
          value={entries}
          onChange={handleEntriesChange}
          entries={entriesArr}
          label={label}
          barReverse={barReverse}
          {...attributes}
        />
      )}
      {/* PRO-END */}
    </div>
  );
};

DataTableEntries.propTypes = {
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEntriesChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  proSelect: PropTypes.bool
};

export default DataTableEntries;
export { DataTableEntries as MDBDataTableEntries };
