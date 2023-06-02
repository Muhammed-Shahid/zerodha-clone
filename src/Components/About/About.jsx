import React from "react";
import './About.css'
function About() {
  return (
    <div>
      <div className="abtContainer Container">
        <div className="abtLeft">

          <img className="abtLeftImg" src={process.env.PUBLIC_URL + '/largest-broker.svg'} alt="" />
        </div>

        <div className="abtRight">
          <h1>Largest stock broker in India</h1>
          <p>1+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className="list">
            <ul>
              <li>Futures and Options</li>
              <li>commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt.Securities</li>
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default About;
