import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const NavLink = require('react-router-dom').NavLink;

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">MDB React</NavbarBrand>
            <NavbarToggler />
              <div className="collapse navbar-collapse" id="reactNavbar">

                <NavbarNav className="ml-auto">
                  <NavItem>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/css">CSS</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/components">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/javascript">JavaScript</NavLink>
                  </NavItem>
                </NavbarNav>

              </div>
          </Navbar>

          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>
          <Footer color="indigo">
            <p className="footer-copyright mb-0">
              &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
