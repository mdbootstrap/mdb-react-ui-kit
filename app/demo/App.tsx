import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>Action</MDBDropdownItem>
        <MDBDropdownItem>Another action</MDBDropdownItem>
        <MDBDropdownItem>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
