
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
<footer id="footer">
  <div className="container">
    <div className="row between main-footer">
      <div className="columns three">
        <div className="footer-logo">
          <img style={{maxWidth:'200px'}} src={process.env.PUBLIC_URL+'/logo.svg'} alt />
        </div>
      
        <p className="copyright text-grey">© 2010 - 2023, Zerodha Broking Ltd.</p>
        <p className="copyright text-grey">All rights reserved.</p>
        <ul className="social">
          <li>
            <a target="_blank" href="https://twitter.com/zerodhaonline"><i className="icon-twitter" /></a>
          </li>
          <li>
            <a target="_blank" href="https://facebook.com/zerodha.social"><i className="icon-facebook-official" /></a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/zerodhaonline/"><i className="icon-instagram" /></a>
          </li>
          <li>
            <a target="_blank" href="https://linkedin.com/company/zerodha">
              <i className="icon-linkedin" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/zerodhain">
              <i className="icon-telegram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="columns three">
        <ul className="list-style">
          <li className="nav-head">Company</li>
          <li><a href="https://zerodha.com/about/">About</a></li>
          <li><a href="https://zerodha.com/products/">Products</a></li>
          <li><a href="https://zerodha.com/pricing/">Pricing</a></li>
          <li>
            <a href="https://zerodha.com/refer/">Referral programme</a>
          </li>
          <li><a href="https://careers.zerodha.com">Careers</a></li>
          <li><a href="https://zerodha.tech">Zerodha.tech</a></li>
          <li><a href="https://zerodha.com/media/">Press &amp; media</a></li>
          <li><a href="https://zerodha.com/cares/">Zerodha Cares (CSR)</a></li>
        </ul>
      </div>
      <div className="columns three">
        <ul className="list-style">
          <li className="nav-head">Support</li>
          <li><a href="https://zerodha.com/contact/">Contact us</a></li>
          <li>
            <a href="https://support.zerodha.com">Support portal</a>
          </li>
          <li><a href="https://zerodha.com/z-connect/">Z-Connect blog</a></li>
          <li><a href="https://zerodha.com/charges/">List of charges</a></li>
          <li>
            <a href="https://zerodha.com/resources/">Downloads &amp; resources</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="https://stocks.zerodha.com">Market overview</a>
          </li>
        </ul>
      </div>
      <div className="columns three">
        <ul className="list-style">
          <li className="nav-head">Account</li>
          <li>
            <a href="https://zerodha.com/open-account/">Open an account</a>
          </li>
          <li>
            <a href="https://zerodha.com/fund-transfer/">Fund transfer</a>
          </li>
        </ul>
      </div>
    </div>

  
  </div>
</footer>



    </div>
  )
}

export default Footer

