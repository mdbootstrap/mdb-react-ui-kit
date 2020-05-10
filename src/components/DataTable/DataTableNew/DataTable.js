import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableTable from './DataTableTable';
import DataTableTableScroll from './DataTableTableScroll';
import DataTableEntries from './DataTableEntries';
import DataTableSearch from './DataTableSearch';
import DataTableInfo from './DataTableInfo';
import DataTablePagination from './DataTablePagination';
import { MDBSelect, MDBInput } from 'mdbreact';

// PRO-START
import ExportToCsvBtn from '../../pro/DataTable/ExportToCSV';
// PRO-END

import './scss/_datatables2.scss';
import './scss/_datatables-select2.scss';

class DataTable extends Component {
  state = {
    activePage: 0,
    columns: this.props.data.columns || [],
    entries: this.props.entries,
    filteredRows: this.props.data.rows || [],
    filterOptions: [],
    order: this.props.order || [],
    pages: [],
    rows: this.props.data.rows || [],
    search: '',
    searchSelect: '',
    sorted: false,
    translateScrollHead: 0,
    unsearchable: [],
    headCheckBox: false,
    disableHeadCheckbox: false
  };

  handleCheckBoxChange = (selectRow, i) => {
    const { getValueCheckBox, multipleCheckboxes, getValueCheckboxes } = this.props;
    const { columns, rows } = this.state;

    const allRows = [...rows].map((row, j) => {
      if (i === j) {
        return { ...row, checked: !row.checked };
      } else {
        if (multipleCheckboxes) {
          return { ...row };
        } else {
          return { ...row, checked: false };
        }
      }
    });

    const filterChecked = allRows.filter(({ checked }) => checked === true);
    this.setData(allRows, columns, this.paginateRows);
    this.setState({ filteredRows: allRows }, () => {
      this.filterRows();
    });
    getValueCheckBox && getValueCheckBox(allRows[i]);
    getValueCheckboxes && getValueCheckboxes(filterChecked);
  };

  handleAllCheckBoxes = () => {
    const { getValueAllCheckBoxes } = this.props;
    const { rows, headCheckBox, columns } = this.state;

    const allRows = [...rows].map(row => {
      const { checked } = row;
      if ((!checked && !headCheckBox) || (checked && !headCheckBox)) {
        return { ...row, checked: true };
      } else {
        return { ...row, checked: false };
      }
    });
    this.setData(allRows, columns, this.paginateRows);
    this.setState(
      {
        headCheckBox: !headCheckBox,
        filteredRows: allRows
      },
      () => {
        this.filterRows();
      }
    );

    getValueAllCheckBoxes && getValueAllCheckBoxes(allRows);
  };

  componentDidMount() {
    const {
      data,
      paging,
      checkbox,
      checkboxFirstColumn,
      filledCheckboxes,
      multipleCheckboxes,
      headCheckboxID,
      proCheckboxes
    } = this.props;
    const { order, columns, pages, rows, headCheckBox, disableHeadCheckbox } = this.state;

    if (typeof data === 'string') {
      this.fetchData(data, this.paginateRows);
    }

    if (checkbox) {
      const headerCheckbox = {
        label: multipleCheckboxes ? (
          proCheckboxes ? (
            <MDBInput
              type='checkbox'
              onChange={this.handleAllCheckBoxes}
              id={headCheckboxID}
              checked={!!headCheckBox}
              value={headCheckBox}
              aria-checked={headCheckBox}
              filled={filledCheckboxes}
            />
          ) : (
            <div className='custom-control custom-checkbox text-center'>
              <input
                type='checkbox'
                className='custom-control-input'
                onChange={this.handleAllCheckBoxes}
                id={headCheckboxID}
                checked={!!headCheckBox}
                value={headCheckBox}
                aria-checked={headCheckBox}
              />

              <label className='custom-control-label' htmlFor={headCheckboxID} />
            </div>
          )
        ) : (
          ''
        ),
        field: 'checkbox',
        sort: 'disabled',
        width: 150
      };

      if (!checkboxFirstColumn) {
        this.setState(prevState => ({
          columns: [headerCheckbox, ...prevState.columns]
        }));
      } else {
        this.setState(prevState => ({
          columns: [...prevState.columns, headerCheckbox]
        }));
      }

      const withCheckBoxes = [...rows].map((e, i) => {
        return {
          ...e,
          checked: false,
          checkbox: proCheckboxes ? (
            <MDBInput
              type='checkbox'
              onChange={this.handleAllCheckBoxes}
              id={headCheckboxID}
              checked={!!headCheckBox}
              value={headCheckBox}
              aria-checked={headCheckBox}
              filled={filledCheckboxes}
              disabled={disableHeadCheckbox}
            />
          ) : (
            <div className='custom-control custom-checkbox text-center'>
              <input
                type='checkbox'
                className='custom-control-input'
                onChange={this.handleAllCheckBoxes}
                id={headCheckboxID}
                checked={!!headCheckBox}
                value={headCheckBox}
                aria-checked={headCheckBox}
                disabled={disableHeadCheckbox}
              />

              <label className='custom-control-label' htmlFor={headCheckboxID} />
            </div>
          )
        };
      });

      this.setState({
        rows: withCheckBoxes
      });
    }

    // PRO-START
    this.filterOptions();
    // PRO-END

    if (order.length > 0) {
      this.handleSort(order[0], order[1]);
    } else {
      this.handleSort();
    }

    this.setUnsearchable(columns);

    if (paging) {
      this.paginateRowsInitialy();
    } else {
      pages.push(rows);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { columns, rows, activePage, headCheckBox, disableHeadCheckbox, filteredRows } = this.state;
    const {
      data,
      checkbox,
      filledCheckboxes,
      multipleCheckboxes,
      headCheckboxID,
      bodyCheckboxID,
      proCheckboxes
    } = this.props;

    if (checkbox) {
      if (multipleCheckboxes && prevState.filteredRows !== filteredRows) {
        if (filteredRows[0].disabled) {
          this.setState({
            disableHeadCheckbox: true
          });
        } else {
          this.setState({
            disableHeadCheckbox: false
          });
        }
      }

      if (prevState.rows !== rows) {
        if (multipleCheckboxes) {
          const allRowsChecked = [...rows].filter(row => row.checked);

          const mapColumns = [...columns].map(e => {
            let obj;
            if (e.field === 'checkbox') {
              obj = {
                ...e,
                label: proCheckboxes ? (
                  <MDBInput
                    type='checkbox'
                    onChange={e => this.handleAllCheckBoxes(e)}
                    id={headCheckboxID}
                    checked={!!headCheckBox}
                    value={headCheckBox}
                    aria-checked={headCheckBox}
                    filled={filledCheckboxes}
                    disabled={disableHeadCheckbox}
                  />
                ) : (
                  <div className='custom-control custom-checkbox text-center'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      onChange={e => this.handleAllCheckBoxes(e)}
                      id={headCheckboxID}
                      checked={!!headCheckBox}
                      value={headCheckBox}
                      aria-checked={headCheckBox}
                      disabled={disableHeadCheckbox}
                    />

                    <label className='custom-control-label' htmlFor={headCheckboxID} />
                  </div>
                )
              };
            } else {
              return { ...e };
            }
            return obj;
          });

          this.setData(rows, mapColumns, this.paginateRows);
          this.setState({ headCheckBox: false }, () => {
            this.filterRows();
          });

          if (allRowsChecked.length === rows.length) {
            this.setState({ headCheckBox: true });
          } else {
            this.setState({ headCheckBox: false });
          }
        }

        for (let i = 0; i < rows.length; i++) {
          if (prevState.rows[i].checked !== rows[i].checked) {
            const withCheckBoxes = [...rows].map((row, j) => {
              const { checked } = row;
              return {
                ...row,
                checkbox: proCheckboxes ? (
                  <MDBInput
                    type='checkbox'
                    onChange={e => this.handleCheckBoxChange(row, j)}
                    id={bodyCheckboxID + j}
                    checked={checked}
                    value={checked}
                    aria-checked={checked}
                    filled={filledCheckboxes}
                  />
                ) : (
                  <div className='custom-control custom-checkbox text-center'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      onChange={e => this.handleCheckBoxChange(row, j)}
                      id={bodyCheckboxID + j}
                      checked={checked}
                      value={checked}
                      aria-checked={checked}
                    />

                    <label className='custom-control-label' htmlFor={bodyCheckboxID + j} />
                  </div>
                )
              };
            });
            this.setData(withCheckBoxes, columns);
          }
        }
      }
    }

    if (prevState.activePage !== activePage) {
      this.changeActivePage(activePage);
    }

    if (prevProps.data !== data) {
      typeof data === 'string' ? this.fetchData(data) : this.setData(data.rows, data.columns, this.paginateRows);

      this.setUnsearchable(columns);
      this.filterRows();
    }
  }

  setData = (rows = [], columns = [], callback) => {
    this.setState(
      () => ({
        columns,
        rows,
        filteredRows: this.props.disableRetreatAfterSorting ? this.filterRows() : rows
      }),
      callback && typeof callback === 'function' && (() => callback())
    );
  };

  setUnsearchable = columns => {
    const unsearchable = [];

    columns.forEach(column => {
      if (column.searchable !== undefined && column.searchable === false) {
        unsearchable.push(column.field);
      }
    });

    this.setState({ unsearchable });
  };

  fetchData = (link, isPaginateRows) => {
    fetch(link)
      .then(res => res.json())
      .then(json => this.setData(json.rows, json.columns, isPaginateRows ? this.paginateRows : null))
      .catch(err => console.log(err));
  };

  // findout how many pages there are need to be, then slice rows into pages
  pagesAmount = () => {
    return Math.ceil(this.state.filteredRows.length / this.state.entries);
  };

  paginateRowsInitialy = () => {
    const { rows, entries, pages } = this.state;

    const pagesAmount = this.pagesAmount();
    for (let i = 1; i <= pagesAmount; i++) {
      const pageEndIndex = i * entries;

      pages.push(rows.slice(pageEndIndex - entries, pageEndIndex));
    }
  };

  handleEntriesChange = value => {
    this.setState({ entries: Array.isArray(value) ? value[0] : value }, () => this.paginateRows());
  };

  handleSearchChange = e => {
    this.setState(
      { search: e.target.value },
      () => this.filterRows(),
      this.props.onSearch && typeof this.props.onSearch === 'function' && this.props.onSearch(e.target.value)
    );
  };

  checkFieldValue = (array, field) => {
    return array[field] && typeof array[field] !== 'string' ? array[field].props.searchvalue : array[field];
  };

  checkField = (field, a, b, direction) => {
    const [aField, bField] = [this.checkFieldValue(a, field), this.checkFieldValue(b, field)];

    let comp = aField > bField ? -1 : 1;
    if (direction === 'asc') {
      comp *= -1;
    }

    return comp;
  };

  sort = (rows, sortRows, field, direction) => {
    rows.sort((a, b) => {
      if (sortRows && sortRows.includes(field)) {
        return this.checkField(field, a, b, direction);
      }

      return direction === 'asc' ? (a[field] < b[field] ? -1 : 1) : a[field] > b[field] ? -1 : 1;
    });
  };

  handleSort = (field, sort) => {
    const { onSort, sortRows } = this.props;

    if (sort === 'disabled') {
      return;
    }
    this.setState(
      prevState => {
        const { rows, columns } = prevState;
        const newRows = [...rows];
        const direction = sort === 'desc' ? 'desc' : 'asc';

        this.sort(newRows, sortRows, field, direction);

        [...columns].forEach(col => {
          if (col.sort === 'disabled') {
            return;
          }

          col.sort = col.field === field ? (col.sort === 'desc' ? 'asc' : 'desc') : '';
        });

        return {
          rows: newRows,
          columns,
          sorted: true
        };
      },
      () => this.filterRows()
    );

    onSort && typeof onSort === 'function' && onSort({ column: field, direction: sort === 'desc' ? 'desc' : 'asc' });
  };

  filterRows = (search = this.state.search) => {
    const { unsearchable } = this.state;
    const { sortRows, noRecordsFoundLabel, disableRetreatAfterSorting, checkbox } = this.props;

    this.setState(
      prevState => {
        const filteredRows = prevState.rows.filter(row => {
          for (const key in row) {
            if ((!unsearchable.length || !unsearchable.includes(key)) && typeof row[key] !== 'function') {
              let stringValue = '';

              if (sortRows && typeof row[key] !== 'string') {
                const content = [];
                const getContent = element =>
                  typeof element === 'object'
                    ? element.props.children && Array.from(element.props.children).map(el => getContent(el))
                    : content.push(element);

                getContent(row[key]);
                stringValue = content.join('');
              } else if (row[key]) {
                stringValue = row[key].toString();
              }
              if (stringValue.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
            }
          }
          return false;
        });

        if (filteredRows.length === 0) {
          filteredRows.push({
            message: noRecordsFoundLabel,
            colspan: prevState.columns.length,
            disabled: true
          });
        }

        if (disableRetreatAfterSorting || checkbox) {
          return {
            filteredRows,
            activePage: (prevState.activePage =
              prevState.activePage < prevState.pages.length || prevState.activePage === 0
                ? prevState.activePage
                : prevState.pages.length - 1)
          };
        } else {
          return { filteredRows, activePage: 0 };
        }
      },
      () => this.paginateRows()
    );
  };

  paginateRows = () => {
    const pagesAmount = this.pagesAmount();
    this.setState(prevState => {
      let { pages, entries, filteredRows, activePage } = prevState;
      const { paging, disableRetreatAfterSorting, checkbox } = this.props;
      pages = [];
      if (paging) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * entries;
          pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex));
        }
        if (!disableRetreatAfterSorting || checkbox) {
          activePage = activePage < pages.length || activePage === 0 ? activePage : pages.length - 1;
        }
      } else {
        pages.push(filteredRows);
        activePage = 0;
      }

      return { pages, filteredRows, activePage };
    });
  };

  changeActivePage = page => {
    const { onPageChange } = this.props;
    this.setState({ activePage: page });

    onPageChange &&
      typeof onPageChange === 'function' &&
      onPageChange({ activePage: page + 1, pagesAmount: this.pagesAmount() });
  };

  handleTableBodyScroll = e => {
    this.setState({ translateScrollHead: e.target.scrollLeft });
  };

  appendSearchDepend = () => {
    const {
      barReverse,
      searching,
      searchLabel,
      searchBottom,
      entries,
      paging,
      displayEntries,
      entriesLabel,
      entriesOptions,
      pagingTop,
      searchTop,
      materialSearch
    } = this.props;
    const { search } = this.state;
    return (
      <div
        className={`row${barReverse ? ' flex-row-reverse' : ''} ${
          searchBottom ? 'ml-3' : 'ml-1'
        } justify-content-between`}
      >
        <DataTableSearch
          handleSearchChange={this.handleSearchChange}
          search={search}
          searching={searching}
          label={searchLabel}
          barReverse={barReverse}
          wrapperSearchClasses={`${barReverse && 'mr-3'}`}
          materialSearch={materialSearch}
        />
        {searchTop && pagingTop && (
          <DataTableEntries
            paging={paging}
            displayEntries={displayEntries}
            entries={entries}
            handleEntriesChange={this.handleEntriesChange}
            entriesArr={entriesOptions}
            label={entriesLabel}
            barReverse={barReverse}
            className={`${!barReverse && 'mr-2'}`}
          />
        )}
      </div>
    );
  };

  // PRO-START
  getLabelForFilter = field => {
    if (this.props.filter) {
      const arr = this.props.data.columns;
      return arr.filter(el => el.field === field)[0].label || null;
    }
  };

  filterOptions = () => {
    if (this.props.filter) {
      const { filter, data } = this.props;
      let arr = [];
      data.rows.map(el => arr.push(el[filter]));
      arr = [...new Set(arr)].sort((a, b) => a.localeCompare(b));
      arr = arr.map((text, value) => ({ text, value: `${value}` }));

      this.setState({ filterOptions: arr });
    }
  };

  useFilterSelect = content => {
    const { filter, data } = this.props;

    if (filter) {
      if (content !== '') {
        const filteredRows = data.rows.filter(el => el[filter] === content);

        this.setState({ searchSelect: content, rows: filteredRows }, () => {
          this.filterRows(this.state.searchSelect);
          this.filterRows();
        });
      } else {
        this.setState({ searchSelect: content, rows: data.rows }, () => {
          this.filterRows(this.state.searchSelect);
          this.filterRows();
        });
      }
    }
  };
  // PRO-END

  render() {
    const {
      autoWidth,
      barReverse,
      bordered,
      borderless,
      btn,
      checkboxFirstColumn,
      children,
      className,
      dark,
      data,
      disableRetreatAfterSorting,
      displayEntries,
      entriesLabel,
      entriesOptions,
      exportToCSV,
      filledCheckboxes,
      filter,
      fixed,
      fullPagination,
      getValueAllCheckBoxes,
      getValueCheckBox,
      getValueCheckboxes,
      hover,
      info,
      infoLabel,
      maxHeight,
      noBottomColumns,
      noRecordsFoundLabel,
      onPageChange,
      onSearch,
      onSort,
      order,
      pagesAmount,
      paginationLabel,
      paging,
      proCheckboxes,
      responsive,
      responsiveLg,
      responsiveMd,
      responsiveSm,
      responsiveXl,
      scrollX,
      scrollY,
      searchBottom,
      searching,
      searchLabel,
      searchTop,
      small,
      multipleCheckboxes,
      bodyCheckboxID,
      headCheckboxID,
      sortable,
      sortRows,
      striped,
      tbodyColor,
      tbodyTextWhite,
      theadColor,
      theadTextWhite,
      proSelect,
      pagingTop,
      materialSearch,
      ...attributes
    } = this.props;

    const {
      columns,
      entries,
      filteredRows,
      filterOptions,
      pages,
      activePage,
      sorted,
      translateScrollHead
    } = this.state;

    const tableClasses = classNames('mdb-datatable dt-bootstrap4', className);

    return (
      <div data-test='datatable' className={tableClasses}>
        {searchTop && !searchBottom && this.appendSearchDepend()}

        {!scrollY && !scrollX && (
          <div className='row'>
            <DataTableTable
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              hover={hover}
              noBottomColumns={noBottomColumns}
              noRecordsFoundLabel={noRecordsFoundLabel}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              small={small}
              striped={striped}
              theadColor={theadColor}
              theadTextWhite={theadTextWhite}
              columns={columns}
              handleSort={this.handleSort}
              sortable={sortable}
              tbodyColor={tbodyColor}
              tbodyTextWhite={tbodyTextWhite}
              rows={pages[activePage]}
              sorted={sorted}
              {...attributes}
            />
          </div>
        )}
        {(scrollY || scrollX) && (
          <div className='row'>
            <DataTableTableScroll
              autoWidth={autoWidth}
              bordered={bordered}
              borderless={borderless}
              btn={btn}
              dark={dark}
              fixed={fixed}
              handleTableBodyScroll={this.handleTableBodyScroll}
              hover={hover}
              maxHeight={maxHeight}
              responsive={responsive}
              responsiveSm={responsiveSm}
              responsiveMd={responsiveMd}
              responsiveLg={responsiveLg}
              responsiveXl={responsiveXl}
              scrollX={scrollX}
              scrollY={scrollY}
              small={small}
              striped={striped}
              theadColor={theadColor}
              theadTextWhite={theadTextWhite}
              columns={columns}
              handleSort={this.handleSort}
              sortable={sortable}
              sorted={sorted}
              tbodyColor={tbodyColor}
              tbodyTextWhite={tbodyTextWhite}
              rows={pages[activePage]}
              translateScrollHead={translateScrollHead}
              {...attributes}
            />
          </div>
        )}

        <div className='row'>
          <div className={`d-flex w-100 justify-content-${searchBottom ? 'between' : 'end'}`}>
            {searchBottom && !searchTop && this.appendSearchDepend()}
            <div className='d-flex align-items-center justify-content-end'>
              {paging ? (
                !pagingTop ? (
                  <DataTableEntries
                    paging={paging}
                    displayEntries={displayEntries}
                    entries={entries}
                    handleEntriesChange={this.handleEntriesChange}
                    entriesArr={entriesOptions}
                    label={entriesLabel}
                    barReverse={barReverse}
                    proSelect={proSelect}
                  />
                ) : (
                  ''
                )
              ) : (
                ''
              )}
              <DataTableInfo
                activePage={activePage}
                entries={entries}
                filteredRows={filteredRows}
                info={info}
                pages={pages}
                label={infoLabel}
                noRecordsFoundLabel={noRecordsFoundLabel}
              />
              <DataTablePagination
                activePage={activePage}
                changeActivePage={this.changeActivePage}
                pages={pages}
                pagesAmount={pagesAmount}
                label={paginationLabel}
                fullPagination={fullPagination}
              />
            </div>
          </div>
        </div>

        {/* PRO-START */}
        {(filter || exportToCSV) && (
          <div className='row justify-content-between'>
            <div className='pl-3'>
              {filter && (
                <MDBSelect
                  options={filterOptions}
                  label={`Filter ${this.getLabelForFilter(filter)}`}
                  getTextContent={this.useFilterSelect}
                  className='m-0 pt-2'
                />
              )}
            </div>

            <div className='mr-2'>
              {exportToCSV && (
                <ExportToCsvBtn columns={columns} data={pages} color='primary'>
                  Download CSV
                </ExportToCsvBtn>
              )}
            </div>
          </div>
        )}
        {/* PRO-END */}
      </div>
    );
  }
}

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  barReverse: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disableRetreatAfterSorting: PropTypes.bool,
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  filledCheckboxes: PropTypes.bool,
  filter: PropTypes.string,
  fixed: PropTypes.bool,
  fullPagination: PropTypes.bool,
  headCheckboxID: PropTypes.string,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  materialSearch: PropTypes.bool,
  maxHeight: PropTypes.string,
  noBottomColumns: PropTypes.bool,
  noRecordsFoundLabel: PropTypes.string,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  paging: PropTypes.bool,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  small: PropTypes.bool,
  sortable: PropTypes.bool,
  sortRows: PropTypes.arrayOf(PropTypes.string),
  striped: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool
};

DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: true,
  btn: false,
  dark: false,
  data: {
    columns: [],
    rows: []
  },
  disableRetreatAfterSorting: false,
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Rows per page:',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  filledCheckboxes: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['', '-', 'of', ''],
  noBottomColumns: true,
  noRecordsFoundLabel: 'No matching records found',
  order: [],
  pagesAmount: 8,
  paginationLabel: ['Prev', 'Next'],
  paging: true,
  responsive: false,
  responsiveLg: false,
  responsiveMd: false,
  responsiveSm: false,
  responsiveXl: false,
  scrollX: false,
  scrollY: false,
  searchBottom: true,
  searching: true,
  searchLabel: 'Search',
  searchTop: false,
  small: false,
  sortable: true,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false,
  headCheckboxID: 'checkbox-id',
  proCheckboxes: false,
  fullPagination: false,
  proSelect: false,
  materialSearch: false
};

export default DataTable;
export { DataTable as MDBDataTable };
