import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import footerlogo from "../assets/images/logo.jpeg";
import { Row } from "react-bootstrap";
import "../Styles/Sidebar.css";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Link to="/">
            <img src={footerlogo} alt="Logo" width={60} className="m-3" fluid />
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Row className="justify-content-center my-4">
          <ul className="d-flex list-unstyled social-icons flex-column">
            <li className="m-2">
              <div className="social-flex">
                <a href="i" className="social-link facebook">
                  <FaFacebookSquare />
                </a>
                <span>FaceBook</span>
              </div>
            </li>
            <li className="m-2">
              <div className="social-flex">
                <a href="i" className="social-link twitter">
                  <FaTwitterSquare />
                </a>
                <span>Twitter</span>
              </div>
            </li>
            <li className="m-2">
              <div className="social-flex">
                <a href="i" className="social-link basketball">
                  <FaDribbble />
                </a>
                <span>Dribble</span>
              </div>
            </li>
            <li className="m-2">
              <div className="social-flex">
                <a href="i" className="social-link instagram">
                  <FaInstagramSquare />
                </a>
                <span>Instgram</span>
              </div>
            </li>
          </ul>
        </Row>
        <hr></hr>
        <h5
          style={{
            marginTop: "30px",
            marginLeft: "30px",
            fontWeight: "bolder",
          }}
        >
          +1 840 841 25 69
        </h5>
        <p style={{ marginLeft: "30px" }}>mact@email.com</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
