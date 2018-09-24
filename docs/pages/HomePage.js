import React from 'react';

import './HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class HomePage extends React.Component {
  render(){
    return(
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive mb-4"><strong>MDB React Demo App</strong></h2>
                <p>React Bootstrap with Material Design</p>
                <p className="pb-4">This application shows the actual use of MDB React components in the application.</p>
                <Row className="d-flex flex-row justify-content-center row">
                  <a className="border nav-link border-light rounded mr-1" href="https://mdbootstrap.com/react/" target="_blank" rel="noopener noreferrer"><Fa icon="graduation-cap" className="mr-2" />Official Documentation</a>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">Why is it so great?</h2>
              <p className="text-center">Google has designed a Material Design to make the web more beautiful and more user-friendly.</p>
              <p className="text-center">Twitter has created a Bootstrap to support you in faster and easier development of responsive and effective websites.</p>
              <p className="text-center">We present you a framework containing the best features of both of them - Material Design for Bootstrap.</p>
              <hr className="my-5" />
              <Row id="categories">
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="css3" className="pink-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">CSS</h4>
                    <p className="grey-text">
                      Animations, colours, shadows, skins and many more! Get to know all our css styles in one place.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/css">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="cubes" className="blue-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">COMPONENTS</h4>
                    <p className="grey-text">
                    Ready-to-use components that you can use in your applications. Both basic and extended versions!
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo lighten-2" to="/components">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="code" className="green-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADVANCED</h4>
                    <p className="grey-text">
                    Advanced components such as charts, carousels, tooltips and popovers. All in Material Design version.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/advanced">Learn more</NavLink>
                  </Col>
                </Col>
              </Row>
              <Row id="categories">
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="bars" className="pink-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NAVIGATION</h4>
                    <p className="grey-text">
                      Ready-to-use navigation layouts, navbars, breadcrumbs and much more! Learn more about our navigation components.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/navigation">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="edit" className="blue-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">FORMS</h4>
                    <p className="grey-text">
                      Inputs, autocomplete, selecst, date and time pickers. Everything in one place is ready to use!
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo lighten-2" to="/forms">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="table" className="green-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">TABLES</h4>
                    <p className="grey-text">
                      Basic and advanced tables. Responsive, datatables, with sorting, searching and export to csv.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/tables">Learn more</NavLink>
                  </Col>
                </Col>
              </Row>
              <Row id="categories">
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="window-restore" className="pink-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MODALS</h4>
                    <p className="grey-text">
                      Modals used to display advanced messages to the user. Cookies, logging in, registration and much more.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/modals">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="arrows" className="blue-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">EXTENDED</h4>
                    <p className="grey-text">
                      Google Maps, Social Buttons, Pre-built Contact Forms and Steppers. Find out more about our extended components.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo lighten-2" to="/extended">Learn more</NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5" >
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="th" className="green-text" size="2x"/>
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">SECTIONS</h4>
                    <p className="grey-text">
                      E-commerce, contact, blog and much more sections. All ready to use in seconds.
                    </p>
                    <NavLink tag="button" className="btn btn-sm indigo darken-3" to="/sections">Learn more</NavLink>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
