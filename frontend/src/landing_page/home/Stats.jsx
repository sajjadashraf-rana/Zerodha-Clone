import React from "react";

const Stats = () => {
  return (
    <div className="container">
      <div className="row  ">
        <div className="col-5">
          <h1>Trust with confidence</h1>
          <h2 className="mt-4">Trust with confidence</h2>
          <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h2 className="mt-4">No spam or gimmicks</h2>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a></p>
          <h2 className="mt-4">The Zerodha universe</h2>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className="mt-4">Do better with money</h2>
          <p>With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-7 text-center">
          <img src="media/images/ecosystem.png" alt="ecosystem" style={{width:"90%"}}/>
          <button className="btn fs-5 btn-custom">Explore our products <i className="fas fa-arrow-right"></i></button>
          <button className="btn fs-5 btn-custom">Try Kite demo <i className="fas fa-arrow-right"></i></button>
        </div>
          <div className="col-12 text-center mt-5">
            <img src="media/images/pressLogos.png" alt="pressLogos" style={{ width: '60%' }} />
          </div>
      </div>
    </div>
  );
};

export default Stats;
