import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLinks}>
          <a href="#" className={classes.footerLink}>Home</a>
          <a href="#" className={classes.footerLink}>About</a>
          <a href="#" className={classes.footerLink}>Services</a>
          <a href="#" className={classes.footerLink}>Contact</a>
        </div>
        <div className={classes.socialMedia}>
          <span className={classes.socialIcon}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              &#xf09a; {/* Font Awesome Facebook Icon */}
            </a>
          </span>
          <span className={classes.socialIcon}>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              &#xf099; {/* Font Awesome Twitter Icon */}
            </a>
          </span>
          <span className={classes.socialIcon}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              &#xf16d; {/* Font Awesome Instagram Icon */}
            </a>
          </span>
        </div>
        <div className={classes.contactInfo}>
          <p>Contact us: info@example.com</p>
          <p>&copy; 2024 Your Company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
