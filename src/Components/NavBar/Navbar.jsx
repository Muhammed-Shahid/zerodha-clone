import React from "react";


import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <nav className="navbar">
          <a href="/" style={{ textDecoration: "none" }}>
            <div  className="logo">
             <img className="logo-img" src={process.env.PUBLIC_URL + '/logo.svg'} alt="" />
            </div>{" "}
          </a>

          <div className="navRightSide">
            <ul className="nav-links">
              <div className="menu">  
                <li>
                  <a href="/https://signup.zerodha.com/">Signup</a>
                </li>
                <li>
                  <a href="/https://zerodha.com/about/">About</a>
                </li>

                <li ><a href="/https://zerodha.com/products/">Products</a></li>
                <li>
                  <a href="/https://zerodha.com/pricing/">Pricing</a>
                </li>

                <li>
                  <a href="/https://support.zerodha.com/  ">Support</a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
