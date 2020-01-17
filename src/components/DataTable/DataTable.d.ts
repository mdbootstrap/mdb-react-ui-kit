import * as React from 'react';
import { object } from 'prop-types';

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
    noRecordsFoundLabel?: string;
    maxHeight?: string;
    noBottomColumns?: boolean;
    order?: string[];
    pagesAmount?: number;
    paging?: boolean;
    paginationLabel?: string[] | object[];
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
    onSearch?: (value: string) => string | void;
    onSort?: (obj: { column: string; direction: string }) => object | void;
    onPageChange?: (obj: {
      activePage: number;
      pagesAmount: number;
    }) => object | void;
    [rest: string]: any;
  },
  any
> {}

export default MDBDataTable;
