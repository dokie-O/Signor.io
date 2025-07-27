import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import signorLogo from '../../assets/images//header/Signor_Logo.png';

export const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef<HTMLUListElement>(null);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSideBarOpen(false);
      }
    };

    if (sideBarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sideBarOpen]);

  return (
    <header className='hero-header'>
      <nav className='nav'>
        <a href='#'>
          <div className='logo' />
        </a>

        <ul className='nav-links'>
          <li><Link to='/hero'>Home</Link></li>
          <li><Link to='/features'>Features</Link></li>
          <li><Link to='/aboutUs'>About Us</Link></li>
          <li><Link to='/contactUs'>Contact Us</Link></li>
          <div className='buttons-container'>
            <li><Link to='/register'><button className='register-btn buttons'>Register</button></Link></li>
            <li><Link to='/login'><button className='login-btn buttons'>Log in</button></Link></li>
          </div>
        </ul>

        <ul ref={sidebarRef} className={`side-bar ${sideBarOpen ? 'show' : ''}`}>
          <li><Link to='/hero'>Home</Link></li>
          <li><Link to='/features'>Features</Link></li>
          <li><Link to='/aboutUs'>About Us</Link></li>
          <li><Link to='/contactUs'>Contact Us</Link></li>
          <div className='sidebar-buttons-container'>
            <li><Link to='/register'><button className='register-btn buttons'>Register</button></Link></li>
            <li><Link to='/login'><button className='login-btn buttons'>Log in</button></Link></li>
          </div>
        </ul>

        <FontAwesomeIcon
          onClick={toggleSideBar}
          icon={faBars}
          className='hamburger-icon menu-bar'
        />
      </nav>
    </header>
  );
};
