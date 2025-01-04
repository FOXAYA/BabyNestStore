import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
class NavS extends Component {
  render() {
    return (
      <>
      
        <Navbar expand="lg" className="p-3">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2  my-lg-0 fw-bolder"
                style={{ maxHeight: "100px" }}
                navbarScroll
              > 
                <Nav.Link href="#" className="fs-6 custom-link text-dark">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="fs-6  link-underline-custom text-dark"
                >
                  Pages
                </Nav.Link>
                <Nav.Link
                  href="#blog"
                  className="fs-6  link-underline-custom text-dark"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="fs-6  link-underline-custom text-dark"
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="fs-6 link-underline-custom text-dark"
                >
                  Contact us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
  }
}
export default NavS;