import React from "react";
import NavbarLayout from '../Navbar/Navbar'
import HeaderSection from "../contact/HeaderSection";
import Footer2 from '../Footer/Footer2'
import '../Styles/checkout.css'

const CheckoutForm = () => {
  return (
    <>
    <NavbarLayout />
    
    <HeaderSection
        title="CheckOut"
         subtitle={"Home - Shop - CheckOut"}
      />
    <div className="container my-5 check">
      <div className="row">
        <div className="col-md-8">
          <h4 className="mb-4">Billing Details</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company name (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Company name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country / Region *
              </label>
              <select className="form-select" id="country" required>
                <option value="United States">United States (US)</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="streetAddress" className="form-label">
                Street address *
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="streetAddress"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                className="form-control"
                id="apartment"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="city" className="form-label">
                  Town / City *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="state" className="form-label">
                  State *
                </label>
                <select className="form-select" id="state" required>
                  <option value="New York">New York</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone *
              </label>
              <input type="tel" className="form-control" id="phone" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="differentAddress"
              />
              <label className="form-check-label" htmlFor="differentAddress">
                Ship to a different address?
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="orderNotes" className="form-label">
                Order notes (optional)
              </label>
              <textarea
                className="form-control"
                id="orderNotes"
                rows="3"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>

        {/* Summary and Payment Section */}
        <div className="col-md-4">
          <h4 className="mb-4">Payment</h4>

          <div className="border p-3 mb-4">
            <h5>Summary</h5>
            <p>
              Subtotal: <span className="float-end">$65.00</span>
            </p>
            <p>
              Shipping: <span className="float-end">Flat rate</span>
            </p>
            <p className="fw-bold">
              Total: <span className="float-end">$65.00</span>
            </p>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="cashOnDelivery"
            />
            <label className="form-check-label" htmlFor="cashOnDelivery">
              Cash on delivery
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
            <small className="d-block text-muted">
              Pay via PayPal; you can pay with your credit card if you don’t
              have a PayPal account.
            </small>
          </div>

          <button className="btn pypal-btn btn-primary w-100 py-3">Proceed to PayPal</button>
        </div>
      </div>
    </div>
    <Footer2 />
    </>
  );
};

export default CheckoutForm;
