import React from 'react';
import './contactUs.css';

import EmailIcon from '../../assets/images/contact_us/email_icon.png';
import LocationIcon from '../../assets/images/contact_us/location_icon.png';
import ContactIcon from '../../assets/images/contact_us/contact_icon.png';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const ContactUs = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '';

    return (
        <>
        <Header />
            <section className='contact-header'>
                <h1 className='contact-header-title'>
                    Contact Us
                </h1>
                <p className='contact-header-description'>
                    Get in touch and let us know how we can help
                </p>
            </section>

            <section  className='guide-section'>
                <div className='guide-container contact-info-container'>
                    <div className='guide-info'>
                        <div
                            className='guide-image location'
                        />
                        <p className='guide-title'>Location</p>
                        <p className='guide-description'>Cabanbangan, Bacolor, Pampanga</p>
                    </div>
                    <div className='guide-info'>
                        <div 
                            className='guide-image contact' 
                        />
                        <p className='guide-title'>Contact</p>
                        <p className='guide-description'>+63 968 580 6673
                            <br/> +63 45 963 7890</p>
                    </div>
                    <div className='guide-info'>
                        <div 
                            className='guide-image email' 
                        />
                        <p className='guide-title'>Email</p>
                        <p className='guide-description'>signor.io.css@gmail.com</p>
                    </div>
                </div>
            </section>
            
            <div className='send-message-wrapper'>
                <section className='send-message'>
                    <article className='send-message-info'>
                        <h2 className='send-message-title'>Send Message</h2>
                        <p className='send-message-text-1'>All Fields with asterisk are required.</p>
                            <form 
                                className='send-message-form'
                                onSubmit={e => {
                                    e.preventDefault();
                                    alert("Submit button was clicked");
                                    // handle your form logic here
                                }}
                            >

                            <label>
                                Name <span id='asterisk'>*</span>
                                <input type='text' placeholder='Enter your name' />
                            </label>
                            <label>
                                Email Address <span id='asterisk'>*</span>
                                <input type='email' placeholder='Enter your email address' />
                            </label>
                            <label>
                                Mobile Number <span id='asterisk'>*</span>
                                <input type='number' placeholder='Enter your number' />
                            </label>
                            <label>
                                Message <span id='asterisk'>*</span>
                                <textarea placeholder='Type your message here' />
                            </label>
                                <button type='submit' className='send-message-btn'>Send Message</button>
                            </form>
                    </article>
                    <article className='send-message-gmap'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.956974119661!2d120.65588376882422!3d14.997481319406093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f625eab36c87%3A0x3f69778f5466108f!2sDon%20Honorio%20Ventura%20State%20University!5e0!3m2!1sen!2sph!4v1746731941851!5m2!1sen!2sph'
                            width='600'
                            height='450'
                            className='send-message-map'
                            style={{ border: 0 }}
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </article>
                </section>
            </div>

            <section className='contact-info-cards'>
                <div className='info-cards-wrapper'>
                    <div className='contact-signer-card contact-card'>
                        <h3 className='signer-card-title'>Become a Signer</h3>
                        <p className='signer-card-info contact-card-info'>Manage your academic documents with Signer and select authorized DHVSU students, faculty, or staff for streamlined and secure document signing.</p>
                        <button className='signer-card-get-started-btn contact-card-btn'>Get Started <i className='contact-arrow'>🡢</i></button>
                    </div>
                    <div className='contact-pl-dl-card contact-card'>
                        <h3 className='pl-dl-card-title'>Apply for PL/DL</h3>
                        <p className='pl-dl-card-info contact-card-info'>Simplify your Dean's or President's List application — use Signor to compute your GWA and check if you're qualified in just a few steps.</p>
                        <button className='pl-dl-card-apply-now-btn contact-card-btn'>Apply Now <i className='contact-arrow'>🡢</i></button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}