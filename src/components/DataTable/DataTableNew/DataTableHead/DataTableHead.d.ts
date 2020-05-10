import * as React from "react";

declare const MDBDataTableHead: React.FunctionComponent<{
  sorted: boolean;
  color?: string;
  columns?: {
    label?: string;
        field?: string;
        sort?: string;
        width?: number;
        searchable?: boolean;
        [rest: string]: any;
  }[];
  scrollX?: boolean;
  scrollY?: boolean;
  sortable?: boolean;
  textWhite?: string;
  handleSort: () => void;
}>;

export default MDBDataTableHead;
