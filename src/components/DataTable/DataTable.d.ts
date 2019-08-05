import * as React from "react";

declare class MDBDataTable extends React.Component<
  {
    autoWidth?: boolean;
    barReverse?: boolean;
    bordered?: boolean;
    borderless?: boolean;
    btn?: boolean;
    className?: string;
    children?: React.ReactNode;
    dark?: boolean;
    data?: {
      columns: {
        label?: string;
        field?: string;
        sort?: string;
        width?: number;
        searchable?: boolean;
        [rest: string]: any;
      }[];
      rows: {
        clickEvent?: () => void;
        [rest: string]: any;
      }[];
    };
    displayEntries?: boolean;
    entries?: number;
    entrieslabel?: string;
    entriesOptions?: number[];
    exportToCSV?: boolean;
    fixed?: boolean;
    hover?: boolean;
    info?: boolean;
    infoLabel?: string[];
    maxHeight?: string;
    order?: string[];
    pagesAmount?: number;
    paging?: boolean;
    pagingLabel?: string[];
    responsive?: boolean;
    responsiveSm?: boolean;
    responsiveMd?: boolean;
    responsiveLg?: boolean;
    responsiveXl?: boolean;
    searching?: boolean;
    searchingLabel?: string;
    scrollX?: boolean;
    scrollY?: boolean;
    sortable?: boolean;
    small?: boolean;
    striped?: boolean;
    theadColor?: string;
    theadTextWhite?: boolean;
    tbodyColor?: string;
    tbodyTextWhite?: boolean;

    tag?: string;
    [rest: string]: any;
  },
  any
> {}

export default MDBDataTable;
