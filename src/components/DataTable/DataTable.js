import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MDBSelect } from 'mdbreact';
import DataTableTable from './DataTableTable';
import DataTableTableScroll from './DataTableTableScroll';
import DataTableEntries from './DataTableEntries';
import DataTableSearch from './DataTableSearch';
import DataTableInfo from './DataTableInfo';
import DataTablePagination from './DataTablePagination';


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
    unsearchable: []
  };

  componentDidMount() {
    const { data, paging } = this.props;
    const { order, columns, pages, rows } = this.state;

    if (typeof data === 'string') {
      this.fetchData(data, this.paginateRows);
    }

    
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
    const { columns } = this.state;
    const { data } = this.props;

    if (prevProps.data !== data) {
      typeof data === 'string'
        ? this.fetchData(data)
        : this.setData(data.rows, data.columns, this.paginateRows);

      this.setUnsearchable(columns);
      this.filterRows();
    }
  }

  setData = (rows = [], columns = [], callback) => {
    this.setState(
      () => ({
        columns,
        rows,
        filteredRows: this.props.disableRetreatAfterSorting
          ? this.filterRows()
          : rows
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
      .then(json =>
        this.setData(
          json.rows,
          json.columns,
          isPaginateRows ? this.paginateRows : null
        )
      )
      .catch(err => console.log(err));
  };

  // findout how many pages there are need to be, then slice rows into pages
  pagesAmount = () =>
    Math.ceil(this.state.filteredRows.length / this.state.entries);

  paginateRowsInitialy = () => {
    const { rows, entries, pages } = this.state;

    const pagesAmount = this.pagesAmount();

    for (let i = 1; i <= pagesAmount; i++) {
      const pageEndIndex = i * entries;
      pages.push(rows.slice(pageEndIndex - entries, pageEndIndex));
    }
  };

  handleEntriesChange = value => {
    this.setState({ entries: Array.isArray(value) ? value[0] : value }, () =>
      this.paginateRows()
    );
  };

  handleSearchChange = e => {
    this.setState(
      { search: e.target.value },
      () => this.filterRows(),
      this.props.onSearch &&
        typeof this.props.onSearch === 'function' &&
        this.props.onSearch(e.target.value)
    );
  };

  checkFieldValue = (array, field) => {
    return array[field] && typeof array[field] !== 'string'
      ? array[field].props.searchvalue
      : array[field];
  };

  checkField = (field, a, b, direction) => {
    const [aField, bField] = [
      this.checkFieldValue(a, field),
      this.checkFieldValue(b, field)
    ];

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

      return direction === 'asc'
        ? a[field] < b[field]
          ? -1
          : 1
        : a[field] > b[field]
        ? -1
        : 1;
    });
  };

  handleSort = (field, sort) => {
    const { onSort } = this.props;

    if (sort === 'disabled') {
      return;
    }

    this.setState(
      prevState => {
        const { sortRows } = this.props;
        const { rows, columns } = prevState;
        const direction = sort === 'desc' ? 'desc' : 'asc';

        this.sort(rows, sortRows, field, direction);

        columns.forEach(col => {
          if (col.sort === 'disabled') {
            return;
          }

          col.sort =
            col.field === field ? (col.sort === 'desc' ? 'asc' : 'desc') : '';
        });

        return {
          rows,
          columns,
          sorted: true
        };
      },
      () => this.filterRows()
    );

    onSort &&
      typeof onSort === 'function' &&
      onSort({ column: field, direction: sort === 'desc' ? 'desc' : 'asc' });
  };

  filterRows = (search = this.state.search) => {
    const { unsearchable } = this.state;
    const { sortRows, noRecordsFoundLabel } = this.props;

    this.setState(
      prevState => {
        const filteredRows = prevState.rows.filter(row => {
          for (const key in row) {
            if (
              (!unsearchable.length || !unsearchable.includes(key)) &&
              typeof row[key] !== 'function'
            ) {
              let stringValue = '';

              if (sortRows && typeof row[key] !== 'string') {
                const content = [];
                const getContent = element =>
                  typeof element === 'object'
                    ? element.props.children &&
                      Array.from(element.props.children).map(el =>
                        getContent(el)
                      )
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
            colspan: prevState.columns.length
          });
        }
        let test = {};
        if (this.props.disableRetreatAfterSorting) {
          test = {
            filteredRows,
            activePage: (prevState.activePage =
              prevState.activePage < prevState.pages.length ||
              prevState.activePage === 0
                ? prevState.activePage
                : prevState.pages.length - 1)
          };
        } else if (!this.props.disableRetreatAfterSorting) {
          test = { filteredRows, activePage: 0 };
        }

        return test;
      },
      () => this.paginateRows()
    );
  };

  paginateRows = () => {
    const pagesAmount = this.pagesAmount();

    this.setState(prevState => {
      let { pages, entries, filteredRows, activePage } = prevState;
      const { paging, disableRetreatAfterSorting } = this.props;

      pages = [];

      if (paging) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * entries;
          pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex));
        }
        if (!disableRetreatAfterSorting) {
          activePage =
            activePage < pages.length || activePage === 0
              ? activePage
              : pages.length - 1;
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

  

  render() {
    const {
      autoWidth,
      barReverse,
      bordered,
      borderless,
      btn,
      children,
      className,
      dark,
      data,
      disableRetreatAfterSorting,
      displayEntries,
      entriesLabel,
      entriesOptions,
      exportToCSV,
      filter,
      fixed,
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
      responsive,
      responsiveLg,
      responsiveMd,
      responsiveSm,
      responsiveXl,
      scrollX,
      scrollY,
      searching,
      searchLabel,
      small,
      sortable,
      sortRows,
      striped,
      tbodyColor,
      tbodyTextWhite,
      theadColor,
      theadTextWhite,
      ...attributes
    } = this.props;

    const {
      columns,
      entries,
      filteredRows,
      filterOptions,
      pages,
      activePage,
      search,
      sorted,
      translateScrollHead
    } = this.state;

    const tableClasses = classnames(
      'dataTables_wrapper dt-bootstrap4',
      className
    );

    return (
      <div data-test='datatable' className={tableClasses}>
        <div className={`row${barReverse ? ' flex-row-reverse' : ''}`}>
          <DataTableEntries
            paging={paging}
            displayEntries={displayEntries}
            entries={entries}
            handleEntriesChange={this.handleEntriesChange}
            entriesArr={entriesOptions}
            label={entriesLabel}
            barReverse={barReverse}
          />
          <DataTableSearch
            handleSearchChange={this.handleSearchChange}
            search={search}
            searching={searching}
            label={searchLabel}
            barReverse={barReverse}
          />
        </div>
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
        {paging && (
          <div className='row'>
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
            />
          </div>
        )}

        
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
  entriesLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  filter: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
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
  borderless: false,
  btn: false,
  dark: false,
  data: {
    columns: [],
    rows: []
  },
  disableRetreatAfterSorting: false,
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Show entries',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['Showing', 'to', 'of', 'entries'],
  noRecordsFoundLabel: 'No matching records found',
  noBottomColumns: false,
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ['Previous', 'Next'],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: 'Search',
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};

export default DataTable;
export { DataTable as MDBDataTable };
