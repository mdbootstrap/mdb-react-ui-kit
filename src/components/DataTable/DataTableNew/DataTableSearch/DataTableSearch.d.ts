import * as React from "react";

declare const MDBDataTableSearch: React.FunctionComponent<{
  barReverse?: boolean;
  search: string;
  searching: boolean;
  label?: string;
  handleSearchChange?: () => void;
}>;

export default MDBDataTableSearch;
