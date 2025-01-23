import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mylogo from "../assets/images/logo.jpeg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBag } from "react-icons/sl";
import ShoppingCard from "../shop/ShopingCard";
import Sidebar from "../SideBar/SideBar";
import SearchBar from "../SearchBar/SearchBar";
import { useBasket } from "../shop/BasketContext";
import "../Styles/Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import AuthModal from "../Sign/AuthModal";

const NavbarLayout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false); // حالة عرض نافذة التوثيق
  const target = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const handleToggle = () => setShow(!show);
  const handleClose = () => {
    setShow(false);
    setShowSidebar(false);
    setShowAuthModal(false); // إغلاق نافذة التوثيق عند الإغلاق
  };
  const handleToggleSidebar = () => setShowSidebar(!showSidebar);
  const { cartItems } = useBasket();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleBlogClick = () => {
    if (location.pathname === "/") {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const blogSection = document.getElementById("blog");
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // إضافة وظيفة لفتح نافذة التوثيق
  const handleAuthModalOpen = () => setShowAuthModal(true);

  return (
    <Navbar expand="lg" className="bgground p-3 sticky-top">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={mylogo} alt="My logo" style={{ height: "auto" }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0 nav_bar" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              className={`position-relative text-dark ${location.pathname === '/' ? 'active' : ''}`}
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
              <NavDropdown.Item as={Link} to="/aboutus" className={location.pathname === '/aboutus' ? 'active' : ''}>
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/our-services" className={location.pathname === '/our-services' ? 'active' : ''}>
                Our Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/our-team" className={location.pathname === '/our-team' ? 'active' : ''}>
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>
                Pricing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className={`link-underline-custom position-relative text-dark ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={handleBlogClick}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              className={`link-underline-custom position-relative text-dark ${location.pathname === '/shop' ? 'active' : ''}`}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`link-underline-custom position-relative text-dark ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact us
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center justify-content-center gap-4 icon-nav">
            <i
              className="bi bi-bag position-relative"
              onClick={handleToggle}
              ref={target}
              aria-label="Shopping Cart"
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

            <i
              className="bi bi-search fs-3 ms-3"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search"
            >
              <CiSearch />
            </i>

            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <SearchBar />
              </motion.div>
            )}

            <i
              className="bi bi-grid fs-3"
              onClick={handleToggleSidebar}
              aria-label="Sidebar Menu"
            >
              <HiOutlineSquares2X2 />
            </i>
            {showSidebar && (
              <Sidebar show={showSidebar} handleClose={handleClose} />
            )}

            {/* إضافة زر تسجيل الدخول */}
            <span
              onClick={handleAuthModalOpen}
              className="custom-link position-relative text-dark"
              style={{ cursor: 'pointer' }}
            >
              Sign In
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
      <AuthModal show={showAuthModal} handleClose={handleClose} />
    </Navbar>
  );
};

export default NavbarLayout;

