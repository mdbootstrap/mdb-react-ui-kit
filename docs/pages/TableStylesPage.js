import React from 'react';
import { Button, Container, Row, Col, Card, CardBody, CardHeader, Input, Table, TableBody, TableHead } from 'mdbreact';
import DocsLink from './DocsLink';

const TablePage = (props) => {
  const columns= [
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
  ];

  const rows_regular_btn = [
    {
      'id': 1,
      'first': <Button color="purple" size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="purple" size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="purple" size="sm">Button</Button>
    }
  ];

  const rows_outline_btn = [
    {
      'id': 1,
      'first': <Button color="purple" outline size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="purple" outline size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="purple" outline size="sm">Button</Button>
    }
  ];

  const rows_rounded_btn = [
    {
      'id': 1,
      'first': <Button color="default" rounded size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="default" rounded size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="default" rounded size="sm">Button</Button>
    }
  ];

  const data_checkboxes = {
    columns: [
      {
        'label': 'Check',
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'Lorem',
        'field': 'lorem',
        'sort': 'asc'
      },
      {
        'label': 'Ipusm',
        'field': 'ipsum',
        'sort': 'asc'
      },
      {
        'label': 'Dolor',
        'field': 'dolor',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <Input label="Check 2" type="checkbox" id="checkbox2" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      },
      {
        'check': <Input label="Check 3" type="checkbox" id="checkbox3" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      },
      {
        'check': <Input label="Check 4" type="checkbox" id="checkbox4" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      }
    ]
  };

  const data_icons = {
    columns: [
      {
        'label': '#',
        'field': 'id',
        'sort': 'asc'
      },
      {
        'label': [<i key="Lorem" className="fa fa-leaf mr-2 blue-text" aria-hidden="true"></i>, 'Lorem'],
        'field': 'lorem',
        'sort': 'asc'
      },
      {
        'label': [<i key="Ipsum" className="fa fa-leaf mr-2 teal-text" aria-hidden="true"></i>, 'Ipsum'],
        'field': 'ipsum',
        'sort': 'asc'
      },
      {
        'label': [<i key="Dolor" className="fa fa-leaf mr-2 indigo-text" aria-hidden="true"></i>, 'Dolor'],
        'field': 'dolor',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'id': 1,
        'lorem': [<i key="cell1" className="fa fa-diamond mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-download mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-book mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 2,
        'lorem': [<i key="cell1" className="fa fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-gift mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-image mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 3,
        'lorem': [<i key="cell1" className="fa fa-magic mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-table mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-edit mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      }
    ]
  };

  const data_panel = {
    columns: [
      {
        'label': <Input label=" " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'First Name',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Last Name',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username2',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username3',
        'sort': 'asc'
      },
      {
        'label': 'Username',
        'field': 'username4',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <Input label=" " type="checkbox" id="checkbox6" />,
        'first': 'Mark',
        'last': 'Otto',
        'username': '@mdo',
        'username2': 'Mark',
        'username3': 'Otto',
        'username4': '@mdo'
      },
      {
        'check': <Input label=" " type="checkbox" id="checkbox7" />,
        'first': 'Jacob',
        'last': 'Thornton',
        'username': '@fat',
        'username2': 'Jacob',
        'username3': 'Thornton',
        'username4': '@fat'
      },
      {
        'check': <Input label=" " type="checkbox" id="checkbox8" />,
        'first': 'Larry',
        'last': 'the Bird',
        'username': '@twitter',
        'username2': 'Larry',
        'username3': 'the Bird',
        'username4': '@twitter'
      },
      {
        'check': <Input label=" " type="checkbox" id="checkbox9" />,
        'first': 'Paul',
        'last': 'Topolski',
        'username': '@P_Topolski',
        'username2': 'Paul',
        'username3': 'Topolski',
        'username4': '@P_Topolski'
      },
      {
        'check': <Input label=" " type="checkbox" id="checkbox10" />,
        'first': 'Larry',
        'last': 'the Bird',
        'username': '@twitter',
        'username2': 'Larry',
        'username3': 'the Bird',
        'username4': '@twitter'
      }
    ]
  };

  return(
    <Container className="mt-3">
      <DocsLink title="Tables with additional elements" href="https://mdbootstrap.com/react/content/table-styles/" />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with regular buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_regular_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_outline_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_rounded_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with checkboxes</h2>
              <Table btn fixed>
                <TableHead columns={data_checkboxes.columns} />
                <TableBody rows={data_checkboxes.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with icons</h2>
              <Table btn fixed>
                <TableHead columns={data_icons.columns} />
                <TableBody rows={data_icons.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card narrow>
            <CardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
              <div>
                <Button outline rounded size="sm" color="white" className="px-2">
                  <i className="fa fa-th-large mt-0"></i>
                </Button>
                <Button outline rounded size="sm" color="white" className="px-2">
                  <i className="fa fa-columns mt-0"></i>
                </Button>
              </div>
              <a href="#!" className="white-text mx-3">Table name</a>
              <div>
                <Button outline rounded size="sm" color="white" className="px-2">
                  <i className="fa fa-pencil mt-0"></i>
                </Button>
                <Button outline rounded size="sm" color="white" className="px-2">
                  <i className="fa fa-remove mt-0"></i>
                </Button>
                <Button outline rounded size="sm" color="white" className="px-2">
                  <i className="fa fa-info-circle mt-0"></i>
                </Button>
              </div>
            </CardHeader>
            <CardBody cascade>
              <Table btn fixed>
                <TableHead columns={data_panel.columns} />
                <TableBody rows={data_panel.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TablePage;
