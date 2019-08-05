import * as React from "react";

declare const MDBDataTableSelect: React.FunctionComponent<{
  entries: number[];
  label?: string | number | {};
  value: number;
  onChange?: () => void;
}>;

export default MDBDataTableSelect;
