import React from 'react';
import { Container, Row, Fa, Col, Card, CardBody, Table, TableBody, TableHead  } from 'mdbreact';

const TablePage = (props) => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'First',
        field: 'first',
        sort: 'asc'
      },
      {
        label: 'Last',
        field: 'last',
        sort: 'asc'
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc'
      }
    ],
    rows: [
      {
        'id': 1,
        'first': 'Mark',
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 2,
        'first': 'Jacob',
        'last': 'Thornton',
        'handle': '@fat'
      },
      {
        'id': 3,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': '@twitter'
      },
      {
        'id': 4,
        'first': 'Mark',
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 5,
        'first': 'Jacob',
        'last': 'Thornton',
        'handle': '@fat'
      },
      {
        'id': 6,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': '@twitter'
      }
    ]
  };

  return(
    <Container className="mt-3">
      <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Table Scroll</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/content/table-scroll/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Static table vertical scroll</h2>
              <Table scrollY>
                <TableHead columns={data.columns}/>
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
