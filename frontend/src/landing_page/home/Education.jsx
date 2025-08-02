import React from 'react'

const Education = () => {
  return (
    <div className="container mt-5 mb-5 py-3">
      <div className="row">
        <div className="col-6">
           <img src="media/images/varsity.svg" alt="varsity" style={{ width: '80%' }} />
        </div>
        <div className="col-6">
          <h3>Free and open market education</h3>
          <p  className="mt-4">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <button className="btn fs-5 px-0 btn-custom">
            Varsity <i className="fas fa-arrow-right"></i>
          </button>
          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <button className="btn fs-5 px-0 btn-custom">
            TradingQ&A <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Education
