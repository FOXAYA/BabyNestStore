import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mylogo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBag } from "react-icons/sl";
class NavbarLayout extends Component {
  render() {
    return (
      <>
      
        <Navbar expand="lg" className="bgground p-3">
          <Container>
            <img src={mylogo} alt="My logo" style={{ height: "auto" }} />

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
              <div className="d-flex align-items-center justify-content-center gap-4 icon-nav">
                <i className="bi bi-bag position-relative">
                  <SlBag className="fs-4 bag-icon" />
                  <span className="badge text-dark">
                    0
                  </span>
                </i>
                <i className="bi bi-search fs-3 ms-3">
                  <CiSearch />{" "}
                </i>
                <i className="bi bi-grid fs-3">
                  <HiOutlineSquares2X2 />
                </i>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       </>
    );
  }
}
export default NavbarLayout;