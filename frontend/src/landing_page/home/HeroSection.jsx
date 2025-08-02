import React from 'react'

const HeroSection = () => {
  return (
   
        <div className="container mt-5 py-3">
          <div className="row text-center">
              <img src="media/images/homeHero.png" alt="Hero image"  />
              <h1 className='mt-5'>Invest in everything</h1>
              <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
              <button className='py-2 px-4 fs-5 w-auto btn btn-primary custom-hover' style={{margin: "0 auto",}}>Sign up for free</button>
          </div>
        </div>
    
  )
}

export default HeroSection
