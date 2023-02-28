
import React from 'react'
import { pageLinks, socialLinks } from '../data';

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li>
              <a href={link.href} className="footer-link">
                {link.text.toLocaleUpperCase()}
              </a>
            </li>
          );
        })}
        
       
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li>
              <a
                href={link.href}
               
                className="footer-icon"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
           
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer