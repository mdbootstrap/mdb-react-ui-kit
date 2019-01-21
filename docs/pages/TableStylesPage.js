import React from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead,   MDBIcon } from "mdbreact";
import DocsLink from "./../components/docsLink";

const TableStylesPage = props => {
  const columns = [
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
  ];

  const rows_regular_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const rows_outline_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const rows_rounded_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const data_icons = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Lorem"
            icon="leaf"
            className="mr-2 blue-text"
            aria-hidden="true"
          />,
          "Lorem"
        ],
        field: "lorem",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Ipsum"
            icon="leaf"
            className="mr-2 teal-text"
            aria-hidden="true"
          />,
          "Ipsum"
        ],
        field: "ipsum",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Dolor"
            icon="leaf"
            className="mr-2 indigo-text"
            aria-hidden="true"
          />,
          "Dolor"
        ],
        field: "dolor",
        sort: "asc"
      }
    ],
    rows: [
      {
        id: 1,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="gem"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="download"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="book"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      },
      {
        id: 2,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="graduation-cap"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="gift"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="image"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      },
      {
        id: 3,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="magic"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="table"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="edit"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      }
    ]
  };

  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="Tables with additional elements"
        href="https://mdbootstrap.com/docs/react/tables/additional/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with regular buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_regular_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_outline_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_rounded_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with icons</h2>
              <MDBTable btn fixed>
                <MDBTableHead columns={data_icons.columns} />
                <MDBTableBody rows={data_icons.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TableStylesPage;
