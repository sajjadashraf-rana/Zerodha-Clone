import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="container mt-5 py-5 mb-5">
      <div className="row ">
        <div className="col text-center">
          <h1>Page Not Found</h1>
          <p  className="mt-4 ">To go to Home, Click below button</p>
           <Link to={"/"} className='mt-3 py-2 px-4 fs-5 w-auto btn btn-primary custom-hover' style={{margin: "0 auto",}}>Return to Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
