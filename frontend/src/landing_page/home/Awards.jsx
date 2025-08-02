import React from 'react'

const Awards = () => {
  return (

      <div className="container mt-5 mb-5 py-5">
        <div className="row">
          <div className="col">
            <img src="media/images/largestBroker.svg" alt="" />
          </div>
          <div className="col py-4">
            <h1>Largest Stock Broker in India</h1>
            <p>2+ Million clients of Zerodha contribute to over 15% of all retail order volumes in India daily by trading and inversting in: </p>
            <div className="row mt-5">
              <div className="col">
                <ul className='lh-lg'>
                  <li>Futures and options</li>
                  <li>Commodity derivaties</li>
                  <li>Currency derivaties</li>
                </ul>
              </div>
              <div className="col">
                <ul className='lh-lg'>
                  <li>Stocks and IPOs</li>
                  <li>Direct Mutual Funds</li>
                  <li>Bonds and Govt Funds</li>
                </ul>
              </div>
              <img src="media/images/pressLogos.png" alt="pressLogos" className='mt-4' />
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Awards
