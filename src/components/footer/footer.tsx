import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

import signor_logo_white from '../../assets/images/signor_logo_white.png'
import facebook_logo from '../../assets/images/footer/facebook_logo.png'
import youtube_logo from '../../assets/images/footer/youtube_logo.png'
import instagram_logo from '../../assets/images/footer/instagram_logo.png'
import twitter_logo from '../../assets/images/footer/twitter_logo.png'

export const Footer = () => {
    // Move to top for the footer links
    const moveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <footer className='footer'>
            <div className='row1'>
                <div className='col1'>
                    <img src = {signor_logo_white} alt='signor_logo_white.png' className='signor-logo'/>
                    <div className='footer-details'><div className='contact-num'>Call Now: <span style={{fontWeight: 'bold'}}>(319) 555-0115</span></div>
                    <br/>Cabambangan, Bacolor, Pampanga</div>
                </div>
                <div className='col2'>
                    <span className='footer-header'>Quick Links</span>
                    <Link to='/features' className='footer-link' onClick={moveToTop}>Features</Link>
                    <Link to='/aboutUs' className='footer-link' onClick={moveToTop}>About Us</Link>
                    <Link to='/contactUs' className='footer-link' onClick={moveToTop}>Contact Us</Link>
                </div>
                <div className='col3'>
                    <span className='footer-header'>Features</span>
                    <a className='footer-link'>Documents</a>
                    <a className='footer-link'>Templates</a>
                    <a className='footer-link'>Contacts</a>
                    <a className='footer-link'>Drive</a>
                    <a className='footer-link'>Requests</a>
                </div>
                <div className='col4'>
                    <span className='footer-header'>Help</span>
                    <a className='footer-link'>FAQs</a>
                    <a className='footer-link'>Privacy Policy</a>
                    <a className='footer-link'>Terms & Conditions</a>
                </div>
            </div>
            <div className='row2'>
                <div className='rights-text'>
                    <span>@ 2025 Signor - All Rights Reserved.</span>
                </div>
                <div className='social-media-buttons'>
                    <img src = {facebook_logo} alt='facebook_logo.png' className='social_media_logo' onClick={() => {window.open('https://facebook.com', '_blank', 'noopener,noreferrer');}}/>
                    <img src = {youtube_logo} alt='youtube_logo.png' className='social_media_logo' onClick={() => {window.open('https://youtube.com/@signor-io?si=RRvNuebM3DsATofs', '_blank', 'noopener,noreferrer');}}/>
                    <img src = {instagram_logo} alt='instagram_logo.png' className='social_media_logo' onClick={() => {window.open('https://instagram.com', '_blank', 'noopener,noreferrer');}}/>
                    <img src = {twitter_logo} alt='twitter_logo.png' className='social_media_logo' onClick={() => {window.open('https://x.com/Signor_io', '_blank', 'noopener,noreferrer');}}/>
                </div>
            </div>
        </footer>
    );
};