import React from 'react'

const Universe = () => {
  return (
    <div className="container text-center py-5">
        <h2 className="fs-5 text-center mt-5 py-5">Want to know more about our technology stack? Check out the  Zerodha.tech blog.</h2>
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="row mt-5 ">
          <div className="col-4 text-muted ">
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/zerodhaFundhouse.png" alt="Partner 1" className="img-fluid mb-3" style={{height:"30%"}}/> <br />
            <p className='text-muted'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
            </a>
          </div>
          <div className="col-4  text-muted ">
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" className=" mb-3 mt-2" style={{height:"20%"}} /> <br />
            <p className='text-muted'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
            </a>
          </div>
          <div className="col-4 text-muted ">
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/tijori.svg" alt="tijori" className=" mb-3" style={{height:"25%"}} /> <br />
            <p className='text-muted'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
            </a>
          </div>
          </div>
          {/* Another row added */}
        <div className="row ">
          <div className="col-4 text-muted ">
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/streakLogo.png" alt="streakLogo" className=" mb-3" style={{height:"50%", width:"50%"}} /> <br />
            <p className='text-muted  mb-0'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
            </a>
          </div>
          <div className="col-4 text-muted ">
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" className=" mb-3 mt-3" style={{height:"30%", width:"60%"}} /> <br />
            <p className='text-muted  mb-0'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
            </a>
          </div>
          <div className="col-4 text-muted " >
            <a href="" style={{ textDecoration:"none"}}>
            <img src="media/images/ditto-logo.png" alt="ditto-logo" className=" mb-3" style={{height:"50%", width:"50%"}} /> <br />
            <p className='text-muted mb-0'>Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p> <br />
            </a>
          </div>
          </div>
          {/* Add a SignUp button */}
          <div className="row  my-5 text-muted ">
              <div className="col">
                <button className='py-2 fs-5 w-auto btn btn-primary custom-hover'>Sign up for free</button>
              </div>
          </div>
        

            
      </div>
  )
}

export default Universe
