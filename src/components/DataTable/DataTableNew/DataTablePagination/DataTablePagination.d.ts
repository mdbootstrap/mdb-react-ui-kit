import * as React from "react";

declare class MDBDataTablePagination extends React.Component<
  {
    activePage: number;
    pages: [];
    pagesAmount: number;
    label: string[];
    changeActivePage?: () => void;
  },
  any
> {}

export default MDBDataTablePagination;
