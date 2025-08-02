import React from "react";

const Pricing = () => {
  return (
    <div className="container mt-5 py-5">
      <div className="row">
        <div className="col-5">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <button className="btn fs-5 px-0 btn-custom">
            See pricing <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="col-7 d-flex">
          <div className="d-flex align-items-center">
            <img src="media/images/pricing-zero.svg" alt="pressLogos" style={{ width: "60%" }} />
            <p>Free account <br /> opening </p>
          </div>
           <div className="d-flex align-items-center">
            <img src="media/images/pricing-zero.svg" alt="pressLogos" style={{ width: "50%" }} />
            <p>Free equity delivery <br /> and direct mutual funds</p>
          </div>
           <div className="d-flex align-items-center">
            <img src="media/images/pricing-twenty.svg" alt="pressLogos" style={{ width: "60%" }} />
            <p>Intraday and <br /> F&O </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
