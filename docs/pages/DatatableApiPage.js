import React from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const DatatableApiPage = () => {
  return (
    <MDBContainer className="mt-3">
      <DocsLink title="Datatable" href="https://mdbootstrap.com/docs/react/tables/datatables/" />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer header="Datatable with data from API" noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTable
                  striped
                  bordered
                  hover
                  data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
                />
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
        <SectionContainer header="With scrollX and scrollY properties" noBorder>
          <MDBCard>
            <MDBCardBody>
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
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DatatableApiPage;
