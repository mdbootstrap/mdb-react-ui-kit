import React, { Component } from "react";
import PropTypes from "prop-types";
import DataTableTable from "./DataTableComponents/DataTableTable";
import DataTableTableScroll from "./DataTableComponents/DataTableTableScroll";
import DataTableEntries from "./DataTableComponents/DataTableEntries";
import DataTableSearch from "./DataTableComponents/DataTableSearch";
import DataTableInfo from "./DataTableComponents/DataTableInfo";
import DataTablePagination from "./DataTableComponents/DataTablePagination";
import classnames from "classnames";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      columns: props.data.columns || [],
      entries: props.entries,
      filteredRows: props.data.rows || [],
      pages: [],
      rows: props.data.rows || [],
      search: "",
      unsearchable: [],
      translateScrollHead: 0,
      order: props.order || [],
      sorted: false
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

    this.setUnsearchable(this.state.columns);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      if (typeof this.props.data === "string") {
        this.fetchData(this.props.data);
      } else {
        this.setState(
          {
            columns: this.props.data.columns || [],
            filteredRows: this.props.data.rows || [],
            rows: this.props.data.rows || []
          },
          () => this.paginateRows()
        );
      }
      this.setUnsearchable(this.state.columns);
    }
  }

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

  checkFieldValue = (array, field) => {
    return array[field] && typeof array[field] !== "string"
      ? array[field].props.searchValue
      : array[field];
  };

  checkField = (field, a, b, direction = "desc") => {
    let [aField, bField] = [
      this.checkFieldValue(a, field),
      this.checkFieldValue(b, field)
    ];

    return direction === "desc" ? aField < bField : aField > bField;
  };

  handleSort = (field, sort) => {
    if (sort !== "disabled") {
      this.setState(
        prevState => {
          // asc by default
          switch (sort) {
            case "desc":
              prevState.rows.sort((a, b) => {
                if (
                  this.props.sortRows &&
                  this.props.sortRows.includes(field)
                ) {
                  return this.checkField(field, a, b);
                }

                return a[field] > b[field] ? -1 : 1;
              });
              break;
            default:
              prevState.rows.sort((a, b) => {
                if (
                  this.props.sortRows &&
                  this.props.sortRows.includes(field)
                ) {
                  return this.checkField(field, a, b, "asc");
                }

                return a[field] < b[field] ? -1 : 1;
              });
          }

          prevState.columns.forEach(col => {
            if (col.sort === "disabled") return;

            col.sort =
              col.field === field ? (col.sort === "desc" ? "asc" : "desc") : "";
          });

          return {
            rows: prevState.rows,
            columns: prevState.columns,
            sorted: true
          };
        },
        () => this.filterRows()
      );
    } else return;
  };

  filterRows = () => {
    this.setState(
      prevState => {
        const filteredRows = prevState.rows.filter(row => {
          for (let key in row) {
            if (Object.prototype.hasOwnProperty.call(row, key)) {
              if (
                (!this.state.unsearchable.length ||
                  !this.state.unsearchable.includes(key)) &&
                typeof row[key] !== "function"
              ) {
                let stringValue = "";

                if (this.props.sortRows && typeof row[key] !== "string") {
                  stringValue = row[key].props.searchValue;
                } else {
                  if (row[key]) {
                    stringValue = row[key].toString();
                  }
                }

                if (
                  stringValue
                    .toLowerCase()
                    .match(this.state.search.toLowerCase())
                )
                  return true;
              }
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
      className && `${className}`,
      "dataTables_wrapper dt-bootstrap4"
    );

    return (
      <div className={tableClasses}>
        <div className="row">
          <DataTableEntries
            paging={paging}
            displayEntries={displayEntries}
            entries={entries}
            handleEntriesChange={this.handleEntriesChange}
            entriesArr={entriesOptions}
            label={entriesLabel}
          />
          <DataTableSearch
            handleSearchChange={this.handleSearchChange}
            search={search}
            searching={searching}
            label={searchLabel}
          />
        </div>
        {!scrollY && !scrollX && (
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
              sorted={this.state.sorted}
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
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {},
  displayEntries: true,
  entries: 10,
  entriesLabel: "Show entries",
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ["Showing", "to", "of", "entries"],
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ["Previous", "Next"],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: "Search",
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
