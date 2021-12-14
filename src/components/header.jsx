import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Heading
          className="bp3-navbar-group bp3-align-left"
          style={{ fontSize: "1.5rem" }}
        >
          <Link style={{ color: "blue" }} to="/">
            home
          </Link>
        </Navbar.Heading>
        <Navbar.Heading
          className="bp3-navbar-group bp3-align-left"
          style={{ fontSize: "1.5rem" }}
        >
          <Link style={{ color: "blue" }} to="/setting">
            settings
          </Link>
        </Navbar.Heading>
      </Navbar>
    </>
  );
}
