import * as React from "react";

declare const MDBDataTableEntries: React.FunctionComponent<{
  barReverse?: boolean;
  displayEntries: boolean;
  entries: number;
  entriesArr: number[];
  paging: boolean;
  label: string | number | {};
  handleEntriesChange: () => void;
}>;

export default MDBDataTableEntries;
