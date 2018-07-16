import React from 'react';
import { Container, Row, Col, Card, CardBody, Table, Pagination, PageItem, PageLink  } from 'mdbreact';
import './TablePage.css';

const TablePage = (props) => {
  return(
    <Container className="mt-3">
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Basic Table</h2>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Bordered Hover Table</h2>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Striped Table</h2>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Small Table</h2>
              <Table striped bordered small>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Always responsive</h2>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Breakpoint specific</h2>
              <Table responsiveSm>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table pagination</h2>
              <Table>
                <thead>
                  <tr>
                    <th scope="row">#</th>
                    <th className="th-lg">First Name</th>
                    <th className="th-lg">Last Name</th>
                    <th className="th-lg">Username</th>
                    <th className="th-lg">Username</th>
                    <th className="th-lg">Username</th>
                    <th className="th-lg">Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Paul</td>
                    <td>Topolski</td>
                    <td>@P_Topolski</td>
                    <td>Paul</td>
                    <td>Topolski</td>
                    <td>@P_Topolski</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
              <hr className="my-0"/>
              <div className="d-flex justify-content-center">
                <nav className="my-4 pt-2">
                  <Pagination circle color="purple">
                    <PageItem disabled>
                      <PageLink className="page-link" aria-label="Previous">
                        First <span className="sr-only">First</span>
                      </PageLink>
                    </PageItem>
                    <PageItem disabled>
                      <PageLink className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </PageLink>
                    </PageItem>
                    <PageItem active>
                      <PageLink className="page-link">
                        1 <span className="sr-only">(current)</span>
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link">
                        2
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link">
                        3
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link">
                        4
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link">
                        5
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </PageLink>
                    </PageItem>
                    <PageItem>
                      <PageLink className="page-link" aria-label="Previous">
                        Last <span className="sr-only">Last</span>
                      </PageLink>
                    </PageItem>
                  </Pagination>
                </nav>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table scroll</h2>
              <div style={{'display': 'block', 'maxHeight': '300px', 'overflowY': 'auto'}}>
                <Table responsiveMd>
                  <thead className="mdb-color lighten-4">
                    <tr>
                      <th>#</th>
                      <th className="th-lg">Name</th>
                      <th className="th-lg">Surname</th>
                      <th className="th-lg">Country</th>
                      <th className="th-lg">City</th>
                      <th className="th-lg">Position</th>
                      <th className="th-lg">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Kate</td>
                      <td>Moss</td>
                      <td>USA</td>
                      <td>New York City</td>
                      <td>Web Designer</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Anna</td>
                      <td>Wintour</td>
                      <td>United Kingdom</td>
                      <td>London</td>
                      <td>Frontend Developer</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Tom</td>
                      <td>Bond</td>
                      <td>Spain</td>
                      <td>Madrid</td>
                      <td>Photographer</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Jerry</td>
                      <td>Horwitz</td>
                      <td>Italy</td>
                      <td>Bari</td>
                      <td>Editor-in-chief</td>
                      <td>41</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Janis</td>
                      <td>Joplin</td>
                      <td>Poland</td>
                      <td>Warsaw</td>
                      <td>Video Maker</td>
                      <td>39</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Gary</td>
                      <td>Winogrand</td>
                      <td>Germany</td>
                      <td>Berlin</td>
                      <td>Photographer</td>
                      <td>37</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Angie</td>
                      <td>Smith</td>
                      <td>USA</td>
                      <td>San Francisco</td>
                      <td>Teacher</td>
                      <td>52</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>John</td>
                      <td>Mattis</td>
                      <td>France</td>
                      <td>Paris</td>
                      <td>Actor</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Otto</td>
                      <td>Morris</td>
                      <td>Germany</td>
                      <td>Munich</td>
                      <td>Singer</td>
                      <td>35</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="my-5"/>
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table search</h2>
              <Row>
                <Col md="12">
                  <div className="input-group md-form form-sm form-2 pl-0 mb-4">
                    <input className="form-control my-0 py-1 grey-border" type="text" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <span className="input-group-text waves-effect grey lighten-3" id="basic-addon1">
                        <a><i className="fa fa-search text-grey" aria-hidden="true"></i></a>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TablePage;