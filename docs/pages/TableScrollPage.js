import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import DocsLink from "./../components/docsLink";

const TableScrollPage = props => {
  const data = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc"
      },
      {
        label: "First",
        field: "first",
        sort: "asc"
      },
      {
        label: "Last",
        field: "last",
        sort: "asc"
      },
      {
        label: "Handle",
        field: "handle",
        sort: "asc"
      }
    ],
    rows: [
      {
        id: 1,
        first: "Mark",
        last: "Otto",
        handle: "@mdo"
      },
      {
        id: 2,
        first: "Jacob",
        last: "Thornton",
        handle: "@fat"
      },
      {
        id: 3,
        first: "Larry",
        last: "the Bird",
        handle: "@twitter"
      },
      {
        id: 4,
        first: "Mark",
        last: "Otto",
        handle: "@mdo"
      },
      {
        id: 5,
        first: "Jacob",
        last: "Thornton",
        handle: "@fat"
      },
      {
        id: 6,
        first: "Larry",
        last: "the Bird",
        handle: "@twitter"
      }
    ]
  };

  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="MDBTable Scroll"
        href="https://mdbootstrap.com/docs/react/tables/scroll/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">
                Static table vertical scroll
              </h2>
              <MDBTable scrollY>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TableScrollPage;
