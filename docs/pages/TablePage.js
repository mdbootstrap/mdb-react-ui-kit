import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "../components/sectionContainer";

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
      <DocsLink title="Tables" href="https://mdbootstrap.com/docs/react/tables/basic/" />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Basic example">
            <MDBCard>
              <MDBCardBody>
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
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Head options">
            <MDBCard>
              <MDBCardBody>
                <MDBTable className="mb-5">
                  <MDBTableHead columns={data.columns} color="primary-color" textWhite />
                  <MDBTableBody rows={data.rows} />
                </MDBTable>

                <MDBTable>
                  <MDBTableHead columns={data.columns} color="dark" />
                  <MDBTableBody rows={data.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Striped rows">
            <MDBCard>
              <MDBCardBody>
                <MDBTable striped>
                  <MDBTableHead columns={data.columns} />
                  <MDBTableBody rows={data.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Bordered">
            <MDBCard>
              <MDBCardBody>
                <MDBTable bordered>
                  <MDBTableHead columns={data_collspan.columns} color="primary-color" textWhite />
                  <MDBTableBody rows={data_collspan.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Borderless">
            <MDBCard>
              <MDBCardBody>
                <MDBTable borderless>
                  <MDBTableHead columns={data_collspan.columns} />
                  <MDBTableBody rows={data_collspan.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Hoverable">
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead columns={data_collspan.columns} color="secondary-color" textWhite />
                  <MDBTableBody rows={data_collspan.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Small">
            <MDBCard>
              <MDBCardBody>
                <MDBTable small>
                  <MDBTableHead columns={data_collspan.columns} color="primary-color" textWhite />
                  <MDBTableBody rows={data_collspan.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Captions">
            <MDBCard>
              <MDBCardBody>
                <MDBTable>
                  <caption>List of users</caption>
                  <MDBTableHead columns={data.columns} color="indigo" textWhite />
                  <MDBTableBody rows={data.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder title="Responsive">
            <MDBCard>
              <MDBCardBody>
                <MDBTable responsive>
                  <MDBTableHead columns={data_responsive.columns} color="primary-color" textWhite />
                  <MDBTableBody rows={data_responsive.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TablePage;
