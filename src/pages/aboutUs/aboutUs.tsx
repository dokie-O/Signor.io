import React, { useState } from 'react';
import '../../App.css';
import './aboutus.css';

import { AboutUsCarousel } from './aboutUsCarousel';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const AboutUs = () => {
    return (
        <section className='about-us'>
            <Header />
                <div className='cover'>
                    <span className='cover_title'>About Us</span>
                    <span className='cover_details'>In response to the challenges of traditional documentation, we developed SIGNOR — a web-based, AI-powered academic document management system integrated with blockchain technology.</span>
                </div>
                <main className='abtus-main'>
                    <section className='abtus-sec-1'>
                        <h1 className='sec1-t'>What We Do</h1>
                        <p className='sec1-p'>SIGNOR is a web-based academic document management system designed for Don Honorio Ventura State University – College of Computing Studies (DHVSU CCS). It allows students, faculty, and administrators to securely upload, access, and manage academic documents like transcripts and certificates. The system features an AI-powered assistant that helps users navigate and utilize its functions with ease. Blockchain technology ensures tamper-proof storage and verification of records, enhancing data integrity and security. By automating documentation processes, SIGNOR improves efficiency, reduces errors, and simplifies academic recordkeeping.</p>
                    </section>

                    <section className='abtus-sec-2'>
                        <div className="abtus-mission sec2-con">
                            <h3 className='sec2-t'>Mission</h3>
                            <p className='sec2-p'>Empowering Academic Efficiency Through Smart Tecnology</p>
                            <ul className='sec2-list'>
                                <li>To streamline academic document management at DHVSU CCS through innovative technologies that ensure efficiency, security, and user satisfaction.</li>
                                <li>To streamline academic document management at DHVSU CCS through innovative technologies that ensure efficiency, security, and user satisfaction.</li>
                                <li>To streamline academic document management at DHVSU CCS through innovative technologies that ensure efficiency, security, and user satisfaction.</li>
                                <li>To streamline academic document management at DHVSU CCS through innovative technologies that ensure efficiency, security, and user satisfaction.</li>
                            </ul>
                        </div>
                        <div className="abtus-vision sec2-con">
                            <h3 className='sec2-t'>Vision</h3>
                            <p className='sec2-p'>Redefining the Future of Academic Documentation</p>
                            <ul className='sec2-list'>
                                <li>To become the leading academic document management platform at DHVSU CCS, setting the standard for secure and efficient data handling in higher education.</li>
                                <li>To build a future where academic documents are easily accessible, fraud-resistant, and fully digitized for all stakeholders at DHVSU CCS.</li>
                                <li>To empower educational institutions through smart automation, reducing reliance on manual systems while improving transparency and trust.</li>
                                <li>To revolutionize how academic records are managed by creating a fully digital, AI-assisted, and blockchain-secured environment.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="abtus-sec-3">
                        <h3 className='sec3-t'>OUR VALUES</h3>
                        <div className="values-wrapper">
                            <div className="sec3-v-r1">
                                <div className="sec3-values-con">
                                    <div className="sec3-img1 sec3-img-con"></div>
                                    <div className="sec3-v1-info">
                                        <h3 className='sec3-v-t'>Trusted Foundation</h3>
                                        <p className='sec3-v-p'>We build with honesty, integrity, and reliability.</p>
                                    </div>
                                </div>
                                <div className="sec3-values-con">
                                    <div className="sec3-img2 sec3-img-con"></div>
                                    <div className="sec3-v2-info">
                                        <h3 className='sec3-v-t'>Smart Innovation</h3>
                                        <p className='sec3-v-p'>We create forward-thinking solutions that evolve with technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sec3-v-r2">
                                <div className="sec3-values-con">
                                    <div className="sec3-img3 sec3-img-con"></div>
                                    <div className="sec3-v3-info">
                                        <h3 className='sec3-v-t'>Seamless Experience</h3>
                                        <p className='sec3-v-p'>We prioritize smooth, fast, and efficient user interactions.</p>
                                    </div>
                                </div>
                                <div className="sec3-values-con">
                                    <div className="sec3-img4 sec3-img-con"></div>
                                    <div className="sec3-v4-info">
                                        <h3 className='sec3-v-t'>Privacy First</h3>
                                        <p className='sec3-v-p'>We prioritize data safety and user trust in everything we build.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='abtus-sec-4'>
                        <div className="sec4-col1">
                            <h3 className='sec4-t'>How We Started</h3>
                            <p className='sec4-p'>Recognizing the limitations of manual document handling at DHVSU CCS, our team was inspired to build a system that combines artificial intelligence and blockchain technology to solve real-world administrative problems. SIGNOR is the result of that vision—a step forward in transforming academic operations through digital innovation.</p>
                        </div>
                        <div className="sec4-col2">
                            <div className="sec4-img"></div>
                        </div>
                    </section>
                </main>
                <AboutUsCarousel/>
            <Footer />
        </section>
    );
};