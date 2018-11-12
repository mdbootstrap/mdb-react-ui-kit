import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Container, Fa } from "mdbreact";

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
          href="https://mdbootstrap.com/docs/react/navigation/navbar/"
        />
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
            <Navbar color="indigo" dark expand="md" style={{marginTop: "20px"}}>
              <NavbarBrand>
                <strong className="white-text">Navbar</strong>
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggleCollapse("navbarCollapse3")}
              />
              <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                <NavbarNav left>
                  <NavItem active>
                    <NavLink to="#!">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#!">Features</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#!">Pricing</NavLink>
                  </NavItem>
                  <NavItem>
                    <Dropdown>
                      <DropdownToggle nav caret>
                        <div className="d-none d-md-inline">Dropdown</div>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href="#!">Action</DropdownItem>
                        <DropdownItem href="#!">Another Action</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                        <DropdownItem href="#!">Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
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
          </Navbar>
          <Navbar color="default-color" dark expand="md" style={{marginTop: "20px"}}>
            <NavbarBrand>
              <strong className="white-text">Navbar</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#!">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle  nav caret>
                      <div className="d-none d-md-inline">Dropdown</div>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default"right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Navbar color="info-color" dark expand="md" style={{marginTop: "20px"}}>
            <NavbarBrand>
              <strong className="white-text">Navbar</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="envelope" className="mr-1" />Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="gear" className="mr-1" />Settings</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav caret>
                      <Fa icon="user" className="mr-1" />Profile
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">My account</DropdownItem>
                      <DropdownItem href="#!">Log out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Navbar color="secondary-color" dark expand="md" style={{marginTop: "20px"}}>
            <NavbarBrand>
              <strong className="white-text">Navbar</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#!">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle  nav caret>
                      <div className="d-none d-md-inline">Dropdown</div>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default"right>
                      <DropdownItem href="#!">Action</DropdownItem>
                      <DropdownItem href="#!">Another Action</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                      <DropdownItem href="#!">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light d-flex align-items-center" to="#!">1<Fa icon="envelope" className="ml-1" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle className="dopdown-toggle" nav>
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0" style={{height: "35px", padding: 0}} alt="" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-default" right>
                      <DropdownItem href="#!">My account</DropdownItem>
                      <DropdownItem href="#!">Log out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          <Navbar color="unique-color-dark" style={{marginTop: "20px"}} dark>
            <NavbarBrand href="#">
                <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
            </NavbarBrand>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default NavbarPage;
