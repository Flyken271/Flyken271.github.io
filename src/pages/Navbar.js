import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap"

export default function Navbar1() {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand style={{ fontSize: "xx-large" }} href="/">
          Flyken.org
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/Flyken271">GitHub</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          by <div style={{ color: "goldenrod" }}>Jared Collins</div>
        </NavbarText>
      </Navbar>
    </>
  )
}
