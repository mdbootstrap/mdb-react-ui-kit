import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  TableBody,
  TableHead
} from "mdbreact";
import DocsLink from "./DocsLink";

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
    <Container className="mt-3">
      <DocsLink
        title="Table Scroll"
        href="https://mdbootstrap.com/docs/react/tables/scroll/"
      />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">
                Static table vertical scroll
              </h2>
              <Table scrollY>
                <TableHead columns={data.columns} />
                <TableBody rows={data.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TablePage;
