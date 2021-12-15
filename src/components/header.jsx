import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import Login from "../components//auth/login";
import Modal from 'react-bootstrap/Modal'
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Signup from "../components/auth/logup";
function Example() {
  const [show, setlog] = useState(false);

  const handleClose = () => setlog(false);
  const handleShow = () => setlog(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        log in
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login style={{ marginTop: "20px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function Example2() {
  const [show2, setlog2] = useState(false);

  const handleClose = () => setlog2(false);
  const handleShow = () => setlog2(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      sign up
      </Button>

      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup style={{ marginTop: "20px" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

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
                <div className="col" xs={6} xs={{ order: "last" }}>
             
                <Example/>
                <   Example2/>
                </div>
              </Navbar.Heading>
            </div>
            </div>
         
        </div>
      </Navbar>
    </>
  );
}
