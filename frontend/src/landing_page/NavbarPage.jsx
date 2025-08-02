import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerModal from "./HamburgerModal";
const NavbarPage = () => {
   const [showModal, setShowModal] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom">
      <div className="container-fluid ">
        <Link className="navbar-brand py-2" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{width:"20%", marginLeft:"5rem"}} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link muted" to="/signup">Signup</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* HamburgerModal Icon */}
          
            <li className="nav-item">
                <Link className="nav-link mx-4" to="#" onClick={() => setShowModal(true)}>
                  <i className="fa-solid fa-bars fs-4"></i>
                </Link>
              </li>

                {showModal && <HamburgerModal onClose={() => setShowModal(false)} />}
          
           
          </ul>
          
        </div>
      </div>
</nav>
  );
}

export default NavbarPage
