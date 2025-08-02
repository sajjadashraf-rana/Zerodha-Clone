import React from 'react'

const LeftSection = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="col-7">  
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-5 mt-5 ">  
          <h2 className="fs-4 mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>
          <a href={tryDemo} className="text-decoration-none me-5">Try demo →</a>
          <a href={learnMore} className="text-decoration-none mx-4">Learn more →</a>
          <div className="mt-4">
            <a href={googlePlay} className="me-2"><img src={googlePlay} alt="Google Play" /></a>
            <a href={appStore}><img src={appStore} alt="App Store" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
