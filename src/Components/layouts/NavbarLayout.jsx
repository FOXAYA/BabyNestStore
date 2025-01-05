import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mylogo from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBag } from "react-icons/sl";
import ShoppingCard from "../cards/ShopingCard";
import { useBasket } from "../cards/BasketContext";

const NavbarLayout = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);
  const { cartItems } = useBasket();
  
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar expand="lg" className="bgground p-3">
      <Container>
        <img src={mylogo} alt="My logo" style={{ height: "auto" }} />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 fw-bolder"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="fs-6 custom-link text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fs-6 link-underline-custom text-dark">
              Pages
            </Nav.Link>
            <Nav.Link href="#blog" className="fs-6 link-underline-custom text-dark">
              Blog
            </Nav.Link>
            <Nav.Link href="#" className="fs-6 link-underline-custom text-dark">
              Shop
            </Nav.Link>
            <Nav.Link href="/contact" className="fs-6 link-underline-custom text-dark">
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
              <span className="badge text-dark">{itemCount}</span> {/* تحديث الرقم */}
            </i>
            <ShoppingCard show={show} target={target} handleClose={handleClose} />

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
