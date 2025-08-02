import React from 'react'

const Brokerage = () => {
  return (
    <div className="container border-top mt-5 pt-5">
      <div className="row">
        <div className="col-6">
          <a href='' className='fs-5 my-5 text-decoration-none' style={{marginLeft:"10rem"}}>Brokerage calculator</a>
          <ul className='mt-5 text-muted custom-pricing-list'>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders. </li>
            <li>Digital contract notes will be sent via email</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Corrier charges apply.</li>
            <li>For a NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a NRI account (PIS) 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
        <div className="col-6">
          <a href='' className='fs-5 my-5 text-decoration-none' style={{marginLeft:"10rem"}}>List of charges</a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
