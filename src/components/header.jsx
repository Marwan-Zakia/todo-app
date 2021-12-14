import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Login from "../components//auth/login";

export default function Header() {
  return (
    <>
      <Navbar>
        <div className="container">
          <div className="row">
            <div className="col" xs={6} xs={{ order: "first" }}>
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
            </div>
            <div className="col" xs={6} xs={{ order: "last" }} >
              <Login style={{marginTop:'20px'}} />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}
