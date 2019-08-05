import * as React from "react";

declare const MDBDataTableTable: React.FunctionComponent<{
  autoWidth: boolean;
  bordered: boolean;
  borderless: boolean;
  btn: boolean;
  columns: {}[];
  children?: React.ReactNode;
  dark: boolean;
  fixed: boolean;
  hover: boolean;
  responsive: boolean;
  responsiveSm: boolean;
  responsiveMd: boolean;
  responsiveLg: boolean;
  responsiveXl: boolean;
  rows: {}[];
  sortable: boolean;
  sorted: boolean;
  small: boolean;
  striped: boolean;
  theadColor: string;
  theadTextWhite: boolean;
  tbodyColor: string;
  tbodyTextWhite: boolean;
  handleSort: () => void;
  [rest: string]: any;
}>;

export default MDBDataTableTable;
