import React from 'react';
import { Container, Row, Col, Jumbotron, Fa } from 'mdbreact';
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
                <li>
                  <NavLink to="/advanced/collapse">Collapse <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/advanced/modal">Modal <Fa icon="angle-right" /></NavLink>
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
