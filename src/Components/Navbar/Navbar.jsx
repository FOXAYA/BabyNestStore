import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mylogo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBag } from "react-icons/sl";
import ShoppingCard from "../shop/ShopingCard";
import { useBasket } from "../shop/BasketContext";
import "../Styles/Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarLayout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);
  const { cartItems } = useBasket();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <Navbar expand="lg" className="bgground p-3 sticky-top">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={mylogo} alt="My logo" style={{ height: "auto" }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0 nav_bar " navbarScroll>
            <Nav.Link
              href="#"
              className="custom-link  position-relative text-dark "
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="Pages"
              id="basic-nav-dropdown"
              className="link-underline-custom position-relative text-dark"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
            >
              <NavDropdown.Item as={Link} to="/aboutus">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pricing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#blog"
              className="link-underline-custom position-relative text-dark"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="/shop"
              className="link-underline-custom position-relative text-dark"
            >
              Shop
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="link-underline-custom  position-relative text-dark"
            >
              Contact us
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-center gap-4 icon-nav">
            <i
              className="bi bi-bag position-relative"
              onClick={handleToggle}
              ref={target}
            >
              <SlBag className="fs-4 bag-icon" />
              <span className="badge text-dark position-relative">
                {itemCount}
              </span>{" "}
            </i>
            <ShoppingCard
              show={show}
              target={target}
              handleClose={handleClose}
            />

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
  );
};

export default NavbarLayout;
