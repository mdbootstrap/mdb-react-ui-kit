import * as React from "react";

declare const MDBDataTableTableScroll: React.FunctionComponent<{
  autoWidth: boolean;
  bordered: boolean;
  borderless: boolean;
  btn: boolean;
  dark: boolean;
  fixed: boolean;
  hover: boolean;
  responsive: boolean;
  responsiveSm: boolean;
  responsiveMd: boolean;
  responsiveLg: boolean;
  responsiveXl: boolean;
  sortable: boolean;
  sorted: boolean;
  small: boolean;
  striped: boolean;
  theadColor: string;
  theadTextWhite: boolean;
  tbodyColor: string;
  tbodyTextWhite: boolean;
  translateScrollHead: number;
  columns?: {} [];
  rows?: {} [];
  children?: React.ReactNode;
  maxHeight?: string;
  scrollX?: boolean;
  scrollY?: boolean
  handleSort: () => void;
  handleTableBodyScroll: () => void;
  [rest: string]: any;
}>;

export default MDBDataTableTableScroll;
