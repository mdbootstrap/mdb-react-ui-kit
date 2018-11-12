import React from "react";
import { DataTable, Container, Row, Col, Card, CardBody } from "mdbreact";
import DocsLink from "./DocsLink";

const DatatableApiPage = () => {
  return (
    <Container className="mt-3">
      <DocsLink
        title="Datatable"
        href="https://mdbootstrap.com/docs/react/tables/datatables/"
      />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">
                Datatable with data from API
              </h2>
              <DataTable
                striped
                bordered
                hover
                data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">scroll X and Y</h2>
              <DataTable
                striped
                bordered
                hover
                scrollX
                scrollY
                maxHeight="300xp"
                data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DatatableApiPage;
