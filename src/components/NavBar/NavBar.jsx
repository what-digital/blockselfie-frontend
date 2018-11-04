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
          <NavbarBrand href="/"><img className="h-100" src="/assets/images/logo.png" />
        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink href="/my-code/">My QR code</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/timeline/">My Timeline</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lookup/">Lookup identity</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/get-verified/">Get verified</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/requests/">Verification Requests</NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Verify Someone
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/my-code/">My QR code</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="/requests/">Verification Requests</NavLink>
                    </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
