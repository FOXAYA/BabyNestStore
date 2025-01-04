import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer2 = () => {
    return (
        <footer className="bg-dark text-light py-5">
        <div className="container">
            <div className="row">
            {/* Main Title */}
            <div className="col-lg-12 text-center mb-4">
                <h1 className="fw-bold">We provide the best products for kids</h1>
            </div>
        </div>

        <div className="row">
            {/* Address Section */}
            <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Address</h5>
            <p className="mb-1">KSA —</p>
            <p className="mb-1">905 15h Street, Office 478</p>
            <p className="mb-1">Jeddah, De 81566</p>
            </div>

            {/* Say Hello Section */}
            <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Say hello</h5>
            <p className="mb-1">mact@email.com</p>
            <h5 className="mb-1">+1 840 841 25 69</h5>
            </div>

            {/* Socials Section */}
            <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Socials</h5>
            <ul className="list-unstyled">
                <li className="mb-2"><a href="i" className="text-white text-decoration-none">Facebook</a></li>
                <li className="mb-2"><a href="i" className="text-white text-decoration-none">Twitter</a></li>
                <li className="mb-2"><a href="i" className="text-white text-decoration-none">Dribble</a></li>
                <li className="mb-2"><a href="i" className="text-white text-decoration-none">Instagram</a></li>
            </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <form>
                <div className="mb-3">
                    <div>
                        <span className="text-dark">
                        <i className="bi bi-envelope"></i>
                        </span>
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email Address"
                        />
                    </div>
                </div>
                <div class="d-flex align-items-center">
                <input type="checkbox" id="privacyPolicy" />
                <label htmlFor="privacyPolicy" className="ms-1">
                    I agree to the <a href="i" className="text-decoration-none">Privacy Policy</a>.
                </label>
                </div>
            </form>
            </div>
        </div>
        {/* Footer Bottom */}
        <div className="row mt-3">
            <div className="col-15 text-center border-top">
            <span>
                <a href="l" className="text-white text-decoration-none">AncoraThemes </a>© 2024. All rights reserved.
            </span>
            </div>
        </div>
        </div>
    </footer>
    );
};

export default Footer2;