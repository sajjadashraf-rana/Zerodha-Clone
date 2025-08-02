//================================Modal No#1=============================================
/*
export default function HamburgerModal({ onClose }) {
  const [show, setShow] = useState(false);

  return (
    <>
      //Hamburger Button 
      <button className="btn" onClick={() => setShow(true)}>
        <i className="fa fa-bars"></i>
      </button>

      //Modal 
      {show && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Menu</h5>
                <button className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
*/
//================================Modal No#2=============================================

import React from "react";
export default function HamburgerModal({ onClose }) {
  return (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div 
        className="modal-dialog custom-modal-dialog"
        style={{ maxWidth: "900px", width: "60%", margin: "auto" }}
      >
        <div 
          className="modal-content custom-modal-content"
          style={{ height: "60vh" }}
        >
          {/* Add Header menu with logos */}
          <div className="modal-header" style={{  marginRight:'8rem', }}>
            <span className="logo-block">
              <a href="">
              <img src="media/images/kite-logo.svg" alt="kite-logo" style={{width:'40%', margin:'0', padding:'0'}} />
              <h5 className="modal-title">Kite</h5> 
              <p className="text-muted " style={{fontSize:'14px'}}>Trading platform</p>
              </a>
            </span>
            
            <span className="logo-block">
              <a href="">
              <img src="media/images/console-logo.svg" alt="console-logo" style={{width:'50%', margin:'0', padding:'0'}} />
              <h5 className="modal-title">Console</h5> 
              <p className="text-muted " style={{fontSize:'14px'}}>Backoffice</p>
              </a>
            </span>
            
            <span className="logo-block">
              <a href="">
              <img src="media/images/kite-connect.svg" alt="kite-connect" style={{width:'35%', margin:'0', padding:'0'}} />
              <h5 className="modal-title">Kite Connect</h5> 
              <p className="text-muted " style={{fontSize:'14px'}}>Trading APIs</p>
              </a>
            </span>
            
            <span className="logo-block">
              <a href="">
              <img src="media/images/coin-logo.svg" alt="coin-logo" style={{width:'50%', margin:'0', padding:'0'}} />
              <h5 className="modal-title">Coin</h5> 
              <p className="text-muted " style={{fontSize:'14px'}}>Mutual funds</p>
              </a>
            </span>
            <div>
                <button className="btn-close" onClick={onClose}></button>
            </div>
          </div>

          <div className="modal-body">
            <div  style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="col-4">
                 <ul className="list-unstyled">
                  <h6>Utilities</h6>
                  <li className="mb-2"><a href="">Calculators</a></li>
                  <li className="mb-2"><a href="">Brokerage calculator</a></li>
                  <li className="mb-2"><a href="#">Margin calculator</a></li>
                  <li className="mb-2"><a href="#">SIP calculator</a></li>
                </ul>
              </div>
              <div className="col-4">
                 <ul className="list-unstyled">
                  <h6>Updates</h6>
                  <li className="mb-2"><a href="">Z-Connect blog</a></li>
                  <li className="mb-2"><a href="">Circulars / Bulletin</a></li>
                  <li className="mb-2"><a href="#">IPOs</a></li>
                  <li className="mb-2"><a href="#">Markets</a></li>
                </ul>
              </div>
              <div className="col-4">
                <ul className="list-unstyled">
                  <h6>Education</h6>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "2rem 2rem 0 0" }}>
                    <span className="logo-block">
                      <a href="">
                      <img src="media/images/varsity-hamburgerIcon.png" alt="varsity-logo" style={{width:'80%', margin:'0', padding:'0'}} />
                      <p className="text-muted " style={{fontSize:'14px'}}>Varsity</p>
                      </a>
                    </span>
                    <span className="logo-block">
                      <a href="">
                      <img src="media/images/tqna.png" alt="tqna-logo" style={{width:'70%', margin:'0', padding:'0'}} />
                      <p className="text-muted " style={{fontSize:'14px'}}>Trading Q&A</p>
                      </a>
                    </span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//================================Modal No#3=============================================
/*
import React from "react";
import "./HamburgerModal.css"; // we will create this file

export default function HamburgerModal({ onClose }) {
  return (
    <div className="hamburger-backdrop" onClick={onClose}>
      <div className="hamburger-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header" style={{ display: "flex", justifyContent: "space-around" }}>
          <h5>Kite</h5>
          <h5>Console</h5>
          <h5>Kite Connect</h5>
          <h5>Coin</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="modal-body">
          <div className="row">
            <div className="col">
              <ul className="list-unstyled">
                <h6>Utilities</h6>
                <li><a href="#">Calculators</a></li>
                <li><a href="#">Brokerage calculator</a></li>
                <li><a href="#">Margin calculator</a></li>
                <li><a href="#">SIP calculator</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <h6>Updates</h6>
                <li><a href="#">Z-Connect blog</a></li>
                <li><a href="#">Circulars / Bulletin</a></li>
                <li><a href="#">IPOs</a></li>
                <li><a href="#">Markets</a></li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-unstyled">
                <h6>Education</h6>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Contact support</a></li>
                <li><a href="#">Call us</a></li>
                <li><a href="#">Email us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
