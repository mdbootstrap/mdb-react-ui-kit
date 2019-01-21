import React from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import DocsLink from "./../components/docsLink";

const DatatableApiPage = () => {
  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="Datatable"
        href="https://mdbootstrap.com/docs/react/tables/datatables/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">
                Datatable with data from API
              </h2>
              <MDBDataTable
                striped
                bordered
                hover
                data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">scroll X and Y</h2>
              <MDBDataTable
                striped
                bordered
                hover
                scrollX
                scrollY
                maxHeight="300xp"
                data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DatatableApiPage;
