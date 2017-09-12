import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink } from 'mdbreact';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="flyout">
        <Navbar color="indigo" dark expand="md">
          <NavbarBrand href="/">MDB React</NavbarBrand>
          <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/css">CSS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/javascript">JavaScript</NavLink>
                </NavItem>
              </NavbarNav>

            </div>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
