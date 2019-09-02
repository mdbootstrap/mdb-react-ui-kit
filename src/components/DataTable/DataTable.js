import React, { Component } from "react";
import PropTypes from "prop-types";
import DataTableTable from "./DataTableTable";
import DataTableTableScroll from "./DataTableTableScroll";
import DataTableEntries from "./DataTableEntries";
import DataTableSearch from "./DataTableSearch";
import DataTableInfo from "./DataTableInfo";
import DataTablePagination from "./DataTablePagination";
import classnames from "classnames";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      order: props.order || [],
      pages: [],
      rows: props.data.rows || [],
      search: '',
      sorted: false,
      translateScrollHead: 0,
      unsearchable: []
    };

    if (this.props.paging) {
      this.paginateRowsInitialy();
    } else {
      this.state.pages.push(this.state.rows);
    }
  }

  componentDidMount() {
    const { data } = this.props;
    const { order, columns } = this.state;

    if (typeof data === 'string') {
      this.fetchData(data);
    }

    order.length && this.handleSort(order[0], order[1]);

    this.setUnsearchable(columns);
  }

  componentDidUpdate(prevProps, _) {
    const { data } = this.props;

    if (prevProps.data !== data) {
      typeof data === 'string'
        ? this.fetchData(data)
        : this.setData(data.rows, data.columns, this.paginateRows);

      this.setUnsearchable(this.state.columns);
    }
  }

  setData = (rows = [], columns = [], callback) => {
    this.setState(
      () => ({
        columns,
        rows,
        filteredRows: rows
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

  fetchData = link => {
    fetch(link)
      .then(res => res.json())
      .then(json => this.setData(json.rows, json.columns))
      .catch(err => console.log(err));
  };

  // findout how many pages there are need to be, then slice rows into pages
  pagesAmount = () =>
    Math.ceil(this.state.filteredRows.length / this.state.entries);

  paginateRowsInitialy = () => {
    let { rows, entries, pages } = this.state;

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
    this.setState({ search: e.target.value }, () => this.filterRows());
  };

  checkFieldValue = (array, field) => {
    return array[field] && typeof array[field] !== 'string'
      ? array[field].props.searchValue
      : array[field];
  };

  checkField = (field, a, b, direction) => {
    let [aField, bField] = [
      this.checkFieldValue(a, field),
      this.checkFieldValue(b, field)
    ];

    return direction === 'desc' ? aField < bField : aField > bField;
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
    if (sort === 'disabled') return;

    this.setState(
      prevState => {
        const { sortRows } = this.props;
        const { rows, columns } = prevState;
        const direction = sort === 'desc' ? 'desc' : 'asc';

        this.sort(rows, sortRows, field, direction);

        columns.forEach(col => {
          if (col.sort === 'disabled') return;

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
  };

  filterRows = () => {
    const { unsearchable, search } = this.state;
    const { sortRows } = this.props;

    this.setState(
      prevState => {
        const filteredRows = prevState.rows.filter(row => {
          for (let key in row) {
            if (
              (!unsearchable.length || !unsearchable.includes(key)) &&
              typeof row[key] !== 'function'
            ) {
              let stringValue = '';

              if (sortRows && typeof row[key] !== 'string') {
                stringValue = row[key].props.searchValue;
              } else {
                if (row[key]) {
                  stringValue = row[key].toString();
                }
              }

              if (stringValue.toLowerCase().includes(search.toLowerCase()))
                return true;
            }
          }
          return false;
        });

        if (filteredRows.length === 0)
          filteredRows.push({
            message: 'No matching records found',
            colspan: prevState.columns.length
          });
        return { filteredRows, activePage: 0 };
      },
      () => this.paginateRows()
    );
  };

  paginateRows = () => {
    const pagesAmount = this.pagesAmount();

    this.setState(prevState => {
      let { pages, entries, filteredRows, activePage } = prevState;
      const { paging } = this.props;

      pages = [];

      if (paging) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * entries;
          pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex));
        }

        activePage =
          activePage < pages.length || activePage === 0
            ? activePage
            : pages.length - 1;
      } else {
        pages.push(filteredRows);
        activePage = 0;
      }

      return { pages, filteredRows, activePage };
    });
  };

  changeActivePage = page => {
    this.setState({ activePage: page });
  };

  handleTableBodyScroll = e => {
    this.setState({ translateScrollHead: e.target.scrollLeft });
  };

  render() {
    const {
      autoWidth,
      bordered,
      borderless,
      barReverse,
      btn,
      className,
      children,
      dark,
      data,
      displayEntries,
      entriesOptions,
      entriesLabel,
      exportToCSV,
      fixed,
      hover,
      info,
      infoLabel,
      maxHeight,
      order,
      pagesAmount,
      paging,
      paginationLabel,
      responsive,
      responsiveSm,
      responsiveMd,
      responsiveLg,
      responsiveXl,
      searching,
      searchLabel,
      scrollX,
      scrollY,
      small,
      sortable,
      striped,
      tbodyColor,
      tbodyTextWhite,
      theadColor,
      theadTextWhite,
      sortRows,
      ...attributes
    } = this.props;

    const {
      columns,
      entries,
      filteredRows,
      pages,
      activePage,
      search,
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
              sorted={this.state.sorted}
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
              sorted={this.state.sorted}
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
  className: PropTypes.string,
  children: PropTypes.node,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.arrayOf(PropTypes.string),
  maxHeight: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paging: PropTypes.bool,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  responsive: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  sortRows: PropTypes.arrayOf(PropTypes.string),
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
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
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Show entries',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['Showing', 'to', 'of', 'entries'],
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
