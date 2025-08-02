import React from 'react'

const RightSection = ({imageURL, productName, productDescription,learnMore}) => {
  return (
    <div className="container mt-5">
      <div className="row mt-5 mx-5">
        <div className="col-4 mt-5 py-5 " style={{margin: '50px 0'}}> 
          <h2 className="fs-4 mb-3">{productName}</h2>
          <p className="text-muted mb-4">{productDescription}</p>
          <a href={learnMore} className="text-decoration-none mx-4">Learn more →</a>
        </div>
        <div className="col-8 text-center" >  
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

export default RightSection
