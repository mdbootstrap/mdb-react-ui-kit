import React from 'react';
import { DataTable, Container, Row, Col, Card, CardBody, Fa } from 'mdbreact';

const DatatableApiPage = () => {
  return (
    <Container className="mt-3">
      <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Datatable</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/content/datatables/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Datatable with data from API</h2>
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
                maxHeight='300xp'
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
