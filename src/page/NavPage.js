import React from 'react';
import { NavLink } from 'react-router-dom'

const NavPage = () => {
  return (
    <nav>
      <NavLink exact activeClassName='active' to='/'>
          Home
      </NavLink>
      {" | "}
      <NavLink exact activeClassName='active' to='/alerts'>
          Alerts
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/badge'>
          Badge
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/breadcrumb'>
          Breadcrumb
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/button'>
          Button
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/collapse'>
          Collapse
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/fa'>
          Fa
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/jumbotron'>
          Jumbotron
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/modals'>
          Modals
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/progress'>
          Progress Bar
      </NavLink>
      {" | "}
      <NavLink  activeClassName='active' to='/tables'>
          Tables
      </NavLink>
    </nav>
  );
};


export default NavPage;