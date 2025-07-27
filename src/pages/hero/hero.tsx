import React, { useState, ReactNode } from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import  homePageImage from '../../assets/images/hero/homepage_pic.png'
import uploadIcon from '../../assets/images/hero/upload_icon.png';
import signersIcon from '../../assets/images/hero/signers_icon.png';
import searchIcon from '../../assets/images/hero/search_icon.png';
import signingIcon from '../../assets/images/hero/signing_icon.png';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Hero = () => {
    interface AccordionProps {
        title: string;
        children: ReactNode;
      }
      
      function Accordion({ title, children }: AccordionProps) {
        const [isActive, setIsActive] = useState(false);
      
        return (
          <div>
            <button
              className={`accordion ${isActive ? 'active' : ''}`}
              onClick={() => setIsActive(!isActive)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
              }}
            >
              <span>{title}</span>
              <span
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease',
                  transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
      
            <div
              className='panel'
              style={{
                display: isActive ? 'block' : 'none',
                padding: '0 1rem 1rem',
              }}
            >
              {children}
            </div>
          </div>
        );
      }

    return (
        <div className='hero-body'>
            <Header />
            {/* hero section */}
            <section className='hero hero-section'>
                <div className='hero-col1'>
                    <h1 className='hero-title'><span id='title-accent'>Document Management</span> with Secured Blockchain Technology and AI Assistance</h1>
                    <p className='slogan'>— Digitally manage academic documents with ease featuring AI assistance, secure access, and tamper-proof verification.</p>
                </div>
                <div className='hero-col2'>
                    <div className='hero-image'></div>
                </div>
            </section>

            {/* guide section */}
            <section className='guide-section'>
                <h1 className='guide-section-title'>HOW SIGNOR WORKS?</h1>
                <div className='guide-container'>
                    <div className='guide-info'>
                    <div className='guide-image upload'></div>
                        <p className='guide-title'>Upload File</p>
                        <p className='guide-description'>Upload, categorize, and manage your academic documents in an organized system.</p>
                    </div>
                    <div className='guide-info'>
                    <div className='guide-image signers'></div>
                        <p className='guide-title'>Add Signers</p>
                        <p className='guide-description'>Select authorized DHVSU students, faculty, or staff for document signing.</p>
                    </div>
                    <div className='guide-info'>
                    <div className='guide-image search'></div>
                        <p className='guide-title'>Find suitable job</p>
                        <p className='guide-description'>Browse and match with jobs or internships that fit your skills and goals.</p>
                    </div>
                    <div className='guide-info'>
                    <div className='guide-image signing'></div>
                        <p className='guide-title'>Send for Signing</p>
                        <p className='guide-description'>Submit document for authorized digital signature</p>
                    </div>
                </div>
            </section>

            {/* video section */}
            <section className='video-section'>
                <iframe 
                    className='video-frame'
                    width='900' 
                    height='450' 
                    src='https://www.youtube.com/embed/TakjjVP6gSY' 
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen>
                </iframe>
            </section>

            {/* programs section */}
            <section className='programs-section'>
                <div className='programs-section-title'>
                    <p>DHVSU College of Computing Studies Programs</p>
                </div>
                <ul className='programs-list'>
                    <li className='programs-container'>
                        <div className='programs-color info-tech'></div>
                        <p className='program=name'>Information Technology</p>
                    </li>
                    <li className='programs-container'>
                        <div className='programs-color com-sci'></div>
                        <p className='program=name'>Computer Science</p>
                    </li>
                    <li className='programs-container'>
                        <div className='programs-color info-sys'></div>
                        <p className='program=name'>Information System</p>
                    </li>
                    <li className='programs-container'>
                        <div className='programs-color ass-com'></div>
                        <p className='program=name'>Associate in Computer Technology</p>
                    </li>
                </ul>
            </section>

            {/* testimonial section */}

            {/* faq section */}
            <section className='faq-section'>
                <h2 className='faq-header'>FAQ</h2>
                <h1 className='faq-title'>WANT TO KNOW MORE</h1>
                <div className='faq-container'>
                    <Accordion title='What is Signor? ' >
                        <p>Signor is a secure web-based system designed for DHVSU CCS to manage academic documents using AI and blockchain technologies.</p>
                    </Accordion>
                    <Accordion title='Who can use Signor?'>
                        <p>It is made for DHVSU CCS students, faculty, and administrators to access and manage academic records.</p>
                    </Accordion>
                    <Accordion title='What documents can I manage in Signor?'>
                        <p>You can upload, view, and retrieve academic-related documents such as transcripts, certificates, and school papers.</p>
                    </Accordion>
                    <Accordion title='How does the AI assistant help me?'>
                        <p>The AI assistant guides users in navigating the system and understanding features.</p>
                    </Accordion>
                    <Accordion title='is Signor safe to use?'>
                        <p>Yes, it uses blockchain to ensure document security, authenticity, and protection from tampering.</p>
                    </Accordion>
                    <Accordion title='Can I use Signor on mobile?'>
                        <p>Yes, it’s responsive! You can access it smoothly from your phone or tablet browser.</p>
                    </Accordion>
                </div>
            </section>
            <Footer />
        </div>
    );
};