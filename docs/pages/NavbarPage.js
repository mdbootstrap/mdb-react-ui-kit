import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Container,
  FormInline
} from "mdbreact";
import DocsLink from "./DocsLink";

class NavbarPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Container>
        <DocsLink
          title="Navbar"
          href="https://mdbootstrap.com/react/components/navbar/"
        />
        <Router>
          <div style={{ height: "1200px" }}>
            <Navbar
              color="bg-danger"
              style={{ marginTop: "20px" }}
              dark
              expand="md"
              scrolling
            >
              <Container>
                <NavbarBrand>
                  <strong className="white-text">MDB</strong>
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse")}
                />
                <Collapse
                  id="navbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right>
                    <NavItem>
                      <FormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </FormInline>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
            <Navbar
              color="default-color"
              style={{ marginTop: "20px" }}
              dark
              expand="md"
              scrolling
            >
              <Container>
                <NavbarBrand>
                  <strong className="white-text">MDB</strong>
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse1")}
                />
                <Collapse
                  id="navbarCollapse1"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right>
                    <NavItem>
                      <FormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </FormInline>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
            <Navbar
              color="amber lighten-4"
              style={{ marginTop: "20px" }}
              expand="md"
              light
            >
              <Container>
                <NavbarBrand>
                  <strong>MDB</strong>
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse2")}
                />
                <Collapse
                  id="navbarCollapse2"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right>
                    <NavItem>
                      <FormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </FormInline>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
            <Navbar
              color="secondary-color"
              style={{ marginTop: "20px" }}
              dark
              expand="md"
            >
              <Container>
                <NavbarBrand>
                  <strong className="white-text">MDB</strong>
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse("navbarCollapse3")}
                />
                <Collapse
                  id="navbarCollapse3"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav left>
                    <NavItem active>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Profile</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right>
                    <NavItem>
                      <FormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </FormInline>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          </div>
        </Router>
      </Container>
    );
  }
}

export default NavbarPage;
