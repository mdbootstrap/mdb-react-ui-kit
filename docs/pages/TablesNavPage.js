import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const TablesNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="table" className="grey-text mr-2" />
              Tables
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/tables/datatable" title="Datatable" />
              <MenuLink to="/tables/datatable-api" title="Datatable - data from API" />
              <MenuLink to="/tables/table" title="Table" />
              <MenuLink to="/tables/table-responsive" title="Table Responsive" />
              <MenuLink to="/tables/table-scroll" title="Table Scroll" />
              <MenuLink to="/tables/table-styles" title="Table Styles" />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default TablesNavPage;
