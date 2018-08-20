import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">CA Trucking</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Customers" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>View Customers</MenuItem>
              <MenuItem eventKey={3.2}><Glyphicon glyph="glyphicon glyphicon-plus" /> Add Customer</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Trucks" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>View Trucks</MenuItem>
              <MenuItem eventKey={3.2}>+ Add Truck</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>View Projects</MenuItem>
              <MenuItem eventKey={3.2}>+ Add Project</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Orders" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>View Orders</MenuItem>
              <MenuItem eventKey={3.2}>+ Add Order</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;