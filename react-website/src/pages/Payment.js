import React from "react";
import '../PaymentGateway.css';

const PaymentGateway = () => {
  return (
    <div className="payment-gateway-container">
      <div className="payment-gateway-box">
        
        {/* Right Column - Payment Form */}
        <div className="payment-form">
          <h2 className="product-title">Select Payment Method</h2>
          <button className="apple-pay-button">Apple Pay</button>
          <p className="alternative-payment">Or pay with card</p>

          <form className="payment-form-fields">
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="email@example.com" />
            </div>

            <div>
              <label className="label">Payment Method</label>
              <select className="input">
                <option value="">Select a payment method</option>
                <option value="credit-card">Credit/Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
              </select>
            </div>

            <div>
              <label className="label">Card information</label>
              <div className="card-inputs">
                <input type="text" className="card-input" placeholder="1234 1234 1234 1234" />
                <input type="text" className="card-input" placeholder="MM / YY" />
                <input type="text" className="card-input" placeholder="CVC" />
              </div>
            </div>

            <div>
              <label className="label">Name on card</label>
              <input type="text" className="input" placeholder="Name" />
            </div>

            <div>
              <label className="label">Country or region</label>
              <select className="input">
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <button className="pay-button">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
