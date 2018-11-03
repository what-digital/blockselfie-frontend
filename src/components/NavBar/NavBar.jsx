import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="w-100">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">BlockSelfie App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/lookup/">Lookup identity</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/get-verified/">Get verified</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/verify/">Verify someone</NavLink>
              </NavItem>
              {
              // <UncontrolledDropdown nav inNavbar>
              //   <DropdownToggle nav caret>
              //     Options
              //   </DropdownToggle>
              //   <DropdownMenu right>
              //     <DropdownItem>
              //       My QR code
              //     </DropdownItem>
              //     <DropdownItem>
              //       My Verification Timeline
              //     </DropdownItem>
              //     <DropdownItem divider />
              //     <DropdownItem>
              //       Reset
              //     </DropdownItem>
              //   </DropdownMenu>
              // </UncontrolledDropdown>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
