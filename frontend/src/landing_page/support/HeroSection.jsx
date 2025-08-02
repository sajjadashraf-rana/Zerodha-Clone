import React from 'react'

const HeroSection = () => {
  return (
    <div className="container-fluid border" style={{ padding: '3rem', backgroundColor: '#f8f9fa', marginBottom: '3rem' }}>
      <div className='mb-5' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
          <h1 style={{ margin: 0 }}>Support Portal</h1>
          <button className="btn btn-primary w-auto">
            <i className="fa-solid fa-bullseye"></i> My Tickets
          </button>
      </div>

      <div className="row">
        <div className="input-group " style={{ height: "3.5rem", }}>
            <span className="input-group-text" style={{ backgroundColor: "white" }}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              type="text"
              className="form-control support-input"
              placeholder="Eg: how do I activate F&O..."
            />
         </div>

      </div>
    </div>
  )
}

export default HeroSection
