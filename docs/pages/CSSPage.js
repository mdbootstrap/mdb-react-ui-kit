import React from 'react';
import {Container, Row, Col, Jumbotron, Fa} from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class CSSPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1><Fa icon="css3" className="grey-text" /> CSS</h1>
              <ul className="list-unstyled example-components-list">
                <li>
                  <NavLink to="/css/table">Table <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/css/icons">Icons <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/css/jumbotron">Jumbotron <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/css/masks">Masks <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CSSPage;
