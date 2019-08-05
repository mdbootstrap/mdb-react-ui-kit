import * as React from "react";

declare const MDBDataTableInfo: React.FunctionComponent<{
  activePage: number;
  entries: number;
  filteredRows: [];
  info: boolean;
  pages: [];
  label?: string[];
}>;

export default MDBDataTableInfo;
