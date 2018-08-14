import React from 'react';
import { Container, Row, Col, Jumbotron, Fa, Badge } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class AdvancedPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="code" className="grey-text" /> Advanced</h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <li>
                  <NavLink to="/advanced/carousel">Carousel <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/charts">Charts <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/collapse">Collapse <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/datatable">Datatable <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/datatable-api">Datatable - data from API <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/modal">Modal <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/videocarousel">Video Carousel <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvancedPage;
