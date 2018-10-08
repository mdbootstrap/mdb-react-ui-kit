import React, { Component } from "react";
import PropTypes from "prop-types";
import DataTableTable from "./DataTableComponents/DataTableTable";
import DataTableTableScroll from "./DataTableComponents/DataTableTableScroll";
import DataTableEntries from "./DataTableComponents/DataTableEntries";
import DataTableSearch from "./DataTableComponents/DataTableSearch";
import DataTableInfo from "./DataTableComponents/DataTableInfo";
import DataTablePagination from "./DataTableComponents/DataTablePagination";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: 10,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: "",
      translateScrollHead: 0,
      order: props.order || []
    };

    if (this.props.paging) {
      this.paginateRowsInitialy();
    } else {
      this.state.pages.push(this.state.rows);
    }
  }

  componentDidMount() {
    if (typeof this.props.data === "string") {
      this.fetchData(this.props.data);
    }

    this.state.order.length &&
      this.handleSort(this.state.order[0], this.state.order[1]);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      if (typeof this.props.data === "string") {
        this.fetchData(this.props.data);
      } else {
        this.setState({
          columns: this.props.data.columns || [],
          filteredRows: this.props.data.rows || [],
          rows: this.props.data.rows || []
        });
      }
    }

    if (
      prevState.pages !== this.state.pages ||
      prevState.rows !== this.state.rows
    ) {
      this.paginateRows();
    }
  }

  fetchData = link => {
    fetch(link)
      .then(res => res.json())
      .then(json => {
        this.setState({
          columns: json.columns,
          filteredRows: json.rows,
          rows: json.rows
        });
      })
      .catch(err => console.log(err));
  };

  paginateRowsInitialy = () => {
    // findout how many pages there are need to be, then slice rows into pages
    const pagesAmount = Math.ceil(this.state.rows.length / this.state.entries);
    for (let i = 1; i <= pagesAmount; i++) {
      const pageEndIndex = i * this.state.entries;
      this.state.pages.push(
        this.state.rows.slice(pageEndIndex - this.state.entries, pageEndIndex)
      );
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

  handleSort = (field, sort) => {
    this.setState(
      prevState => {
        // run default block if there is no key 'sort'
        switch (sort) {
          case "asc":
            prevState.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1));
            break;
          case "desc":
            prevState.rows.sort((a, b) => (a[field] > b[field] ? -1 : 1));
            break;
          default:
            prevState.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        }
        prevState.columns[
          prevState.columns.findIndex(column => column.field === field)
        ].sort = sort === "asc" ? "desc" : "asc";
        return {
          rows: prevState.rows,
          columns: prevState.columns
        };
      },
      () => this.filterRows()
    );
  };

  filterRows = () => {
    this.setState(
      prevState => {
        const filteredRows = prevState.rows.filter(row => {
          for (let key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              const stringValue = row[key].toString();
              if (
                stringValue.toLowerCase().match(this.state.search.toLowerCase())
              )
                return true;
            }
          }
          return false;
        });
        if (filteredRows.length === 0)
          filteredRows.push({
            message: "No matching records found",
            colspan: prevState.columns.length
          });
        return { filteredRows, activePage: 0 };
      },
      () => this.paginateRows()
    );
  };

  paginateRows = () => {
    // findout how many pages there are need to be, then slice rows into pages
    const pagesAmount = Math.ceil(
      this.state.filteredRows.length / this.state.entries
    );
    this.setState(prevState => {
      prevState.pages = [];
      if (this.props.paging) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * prevState.entries;
          prevState.pages.push(
            prevState.filteredRows.slice(
              pageEndIndex - prevState.entries,
              pageEndIndex
            )
          );
        }
        prevState.activePage =
          prevState.activePage < prevState.pages.length ||
          prevState.activePage === 0
            ? prevState.activePage
            : prevState.pages.length - 1;
      } else {
        prevState.pages.push(prevState.filteredRows);
        prevState.activePage = 0;
      }

      return { ...prevState };
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
      btn,
      children,
      dark,
      data,
      entriesLabel,
      exportToCSV,
      fixed,
      hover,
      info,
      infoLabel,
      maxHeight,
      order,
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

    const entriesArr = [10, 25, 50, 100];

    let ExportToCsvBtn;
    if (exportToCSV) {
      try {
        ExportToCsvBtn = require("./pro/ExportToCSV").default;
      } catch (err) {
        console.log(
          "Export to CSV is MDB PRO component, more here: https://mdbootstrap.com/product/react-bootstrap-pro/"
        );
      }
    }

    return (
      <div className="dataTables_wrapper dt-bootstrap4">
        <div className="row">
          <DataTableEntries
            paging={paging}
            entries={entries}
            handleEntriesChange={this.handleEntriesChange}
            entriesArr={entriesArr}
            label={entriesLabel}
          />
          <DataTableSearch
            handleSearchChange={this.handleSearchChange}
            search={search}
            searching={searching}
            label={searchLabel}
          />
        </div>
        {!scrollY &&
          !scrollX && (
            <div className="row">
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
                {...attributes}
              />
            </div>
          )}
        {(scrollY || scrollX) && (
          <div className="row">
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
              tbodyColor={tbodyColor}
              tbodyTextWhite={tbodyTextWhite}
              rows={pages[activePage]}
              translateScrollHead={translateScrollHead}
              {...attributes}
            />
          </div>
        )}
        {paging && (
          <div className="row">
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
              label={paginationLabel}
            />
          </div>
        )}
        {exportToCSV && (
          <div className="row justify-content-end">
            <ExportToCsvBtn columns={columns} data={pages} color="primary">
              Download CSV
            </ExportToCsvBtn>
          </div>
        )}
      </div>
    );
  }
}

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  entriesLabel: PropTypes.string,
  exportToCSV: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.arrayOf(PropTypes.string),
  maxHeight: PropTypes.string,
  order: PropTypes.arrayOf(PropTypes.string),
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
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool
};

DataTable.defaultProps = {
  autoWidth: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  fixed: false,
  hover: false,
  info: true,
  order: [],
  paging: true,
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: "",
  theadTextWhite: false,
  tbodyColor: "",
  tbodyTextWhite: false
};

export default DataTable;
export { DataTable as MDBDataTable };
