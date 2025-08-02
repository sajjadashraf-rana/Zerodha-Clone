import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row text-center text-muted">
        <h1 className='mb-5 py-5'>People</h1>
        <div className="col-5">
            <img src="media/images/nithinKamath.jpg" alt="nithinKamath.jpg" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Nithin Kamath</h2>
            <p>Founder and CEO</p>        
        </div>
        <div className="col-7 my-3" style={{textAlign:"left"}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a href="#">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
      <div className="row text-center text-muted mt-5 mb-5">
          <div className="col-4 my-5">
            <img src="media/images/Nikhil.jpg" alt="Nikhil Kamath" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Nikhil Kamath</h2>
            <p>Co-founder & CFO</p>        
          </div>
          <div className="col-4 my-5">
            <img src="media/images/nithinKamath.jpg" alt="Dr. Kailash Nadh" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Dr. Kailash Nadh</h2>
            <p>Founder and CEO</p>        
          </div>
          <div className="col-4 my-5">
            <img src="media/images/Venu.jpg" alt="Venu Madhav" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Venu Madhav</h2>
            <p>COO</p>        
          </div>
          <div className="col-4 my-5">
            <img src="media/images/nithinKamath.jpg" alt="Hanan Delvi" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Hanan Delvi</h2>
            <p>CCO</p>        
          </div>
          <div className="col-4 my-5">
            <img src="media/images/karthik.jpg" alt="Karthik Rangappa" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Karthik Rangappa</h2>
            <p>Chief of Education</p>        
          </div>
          <div className="col-4 my-5">
            <img src="media/images/Seema.jpg" alt="nithinKamath.jpg" style={{width:"60%", borderRadius:"200px"}} />
            <h2 className='mt-4 fs-4'>Seema Patil</h2>
            <p>Director</p>        
          </div>
          
      </div>
    </div>
  )
}

export default Team
