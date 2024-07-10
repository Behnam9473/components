import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavbaroff = () => {
    setIsOpen(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes['navbar-container']}>
        <div className={classes['navbar-brand']}>
          <Link to="/">لوگو</Link>
        </div>
        <div className={classes['menu-icon']} onClick={toggleNavbar}>
          <i className={isOpen ? `${classes.gold}` : `${classes.white}`}>منو</i>
          
        </div>
        <ul className={isOpen ? `${classes['nav-menu']} ${classes['active']}` : `${classes['nav-menu']} ${classes['nav-menu-off']}` }>
          <li className={classes['nav-item']}>
            <Link to="/" className={classes['nav-links']} onClick={toggleNavbaroff} >خانه</Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to="aboutus" className={`${classes['nav-links']} ${classes['active']}` } onClick={toggleNavbaroff} >درباره ما</Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to="services" className={classes['nav-links']} onClick={toggleNavbaroff} >خدمات ما</Link>
          </li>
          {/* <li className={classes['nav-item']}>
            <Link to="contactus" className={classes['nav-links']} onClick={toggleNavbaroff}>تماس با ما</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;