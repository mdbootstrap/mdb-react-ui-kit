import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead
} from "mdbreact";
import DocsLink from "./../components/docsLink";

const TablePage = props => {
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
      }
    ]
  };

  const data_collspan = {
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
        first: "Larry the Bird",
        colspan: 2,
        handle: "@twitter"
      }
    ]
  };

  const data_responsive = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading0",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading1",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading2",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading3",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading4",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading5",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading6",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading7",
        sort: "asc"
      },
      {
        label: "Heading",
        field: "heading8",
        sort: "asc"
      }
    ],
    rows: [
      {
        id: 1,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
        heading3: "Cell",
        heading4: "Cell",
        heading5: "Cell",
        heading6: "Cell",
        heading7: "Cell",
        heading8: "Cell"
      },
      {
        id: 2,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
        heading3: "Cell",
        heading4: "Cell",
        heading5: "Cell",
        heading6: "Cell",
        heading7: "Cell",
        heading8: "Cell"
      },
      {
        id: 3,
        heading0: "Cell",
        heading1: "Cell",
        heading2: "Cell",
        heading3: "Cell",
        heading4: "Cell",
        heading5: "Cell",
        heading6: "Cell",
        heading7: "Cell",
        heading8: "Cell"
      }
    ]
  };

  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="Tables"
        href="https://mdbootstrap.com/docs/react/tables/basic/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Basic Table</h2>
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table head options</h2>
              <MDBTable>
                <MDBTableHead
                  columns={data.columns}
                  color="primary-color"
                  textWhite
                />
                <MDBTableBody rows={data.rows} />
              </MDBTable>

              <MDBTable>
                <MDBTableHead columns={data.columns} color="dark" />
                <MDBTableBody rows={data.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Striped rows</h2>
              <MDBTable striped>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Bordered Table</h2>
              <MDBTable bordered>
                <MDBTableHead
                  columns={data_collspan.columns}
                  color="primary-color"
                  textWhite
                />
                <MDBTableBody rows={data_collspan.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Borderless Table</h2>
              <MDBTable borderless>
                <MDBTableHead columns={data_collspan.columns} />
                <MDBTableBody rows={data_collspan.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Hoverable rows</h2>
              <MDBTable hover>
                <MDBTableHead
                  columns={data_collspan.columns}
                  color="secondary-color"
                  textWhite
                />
                <MDBTableBody rows={data_collspan.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Samll Table</h2>
              <MDBTable small>
                <MDBTableHead
                  columns={data_collspan.columns}
                  color="primary-color"
                  textWhite
                />
                <MDBTableBody rows={data_collspan.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Captions</h2>
              <MDBTable>
                <caption>List of users</caption>
                <MDBTableHead columns={data.columns} color="indigo" textWhite />
                <MDBTableBody rows={data.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Responsive Table</h2>
              <MDBTable responsive>
                <MDBTableHead
                  columns={data_responsive.columns}
                  color="primary-color"
                  textWhite
                />
                <MDBTableBody rows={data_responsive.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TablePage;
