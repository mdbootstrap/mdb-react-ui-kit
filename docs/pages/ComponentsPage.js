import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import { Container, Row, Col, Jumbotron, Fa } from 'mdbreact';


class ComponentsPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1><Fa icon="cubes" className="grey-text" /> Components</h1>
              <ul className="list-unstyled example-components-list">
                <li>
                  <NavLink to="/components/alert">Alert <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/badge">Badge <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/breadcrumb">Breadcrumb <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/buttons">Buttons <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/cards">Cards <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/dropdown">Dropdown <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/input">Input <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/list-group">List group <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/media">Media <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/pagination">Pagination <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/progress">Progress <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/tooltips">Tooltips <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/footer">Footer <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/popover">Popover <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/tooltips">Tooltip <Fa icon="angle-right" /></NavLink>
                </li>
                <li>
                  <NavLink to="/components/tabs">Tabs <Fa icon="angle-right" /></NavLink>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ComponentsPage;
