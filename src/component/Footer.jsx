import React from "react";
import untitledui from '../assets/untitledui.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>
              Solutions <span className="new-tag">New</span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-btn1">
        <img src={untitledui} alt="logo" className='logo2'/>
        <div className="footer-logo">Untitled UI</div>
        </div>
        <p className="footer-para">© 2077 zysk technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
