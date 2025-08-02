import React from 'react'

const HeroSection = () => {
  return (
   <div className="container" style={{ marginBottom: '150px' }}>
    <div className="row text-center" style={{ margin: '100px 0' }}>
      <h1>Charges</h1>
      <p>List of all charges and taxes</p>
   </div>
   <div className="row">
      <div className="col-4 text-center">
        <img src="media/images/pricing-zero.svg" alt="pricing-zero" style={{height:"70%",width:"70%"}} />
        <h1>Free equity delivery</h1>
        <p>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 text-center">
        <img src="media/images/pricing-twenty.svg" alt="pricing-twenty" style={{height:"70%",width:"70%"}} />
        <h1>Free equity delivery</h1>
        <p>Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.</p>
      </div>
      <div className="col-4 text-center">
        <img src="media/images/pricing-zero.svg" alt="pricing-zero" style={{height:"70%",width:"70%"}}/>
        <h1>Free equity delivery</h1>
        <p>All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br />charges.</p>
      
      </div>
   </div>
   </div>
  )
}

export default HeroSection
