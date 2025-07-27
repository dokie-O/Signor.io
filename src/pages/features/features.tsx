import React from 'react';
import './features.css';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Features = () => {
    return (
        <div className='features-body'>
            <Header />
            <section className='features'>
                <div className='features-row1'>
                    <h1 className='features-title'><p className='accent'>AI-Powered Document Management</p> with Secured Blockchain Technology</h1>
                    <p className='features-slogan'>— Digitally manage academic documents with ease  featuring AI assistance, secure access, and tamperproof verification.</p>
                </div>
            </section>
            <section className='features-row2 features-container'>
                <div className='features-box'>
                    <div className='features-image f-image-1'></div>
                        <div className='features-info'>
                            <h1 className='features-info-title'>CREATE, UPLOAD, AND SIGN DOCUMENTS ANYTIME AND ANYWHERE</h1>
                            <div className='features-line'></div>
                            <p className='features-info-description'>Signor is your digital document companion at DHVSU College of Computing Studies. Designed to support students, faculty, and staff, Signor allows you to easily create, upload, and electronically sign documents from any device—on campus or at home. Whether you're submitting academic forms, handling administrative paperwork, or approving official communications, Signor ensures a fast, secure, and paperless experience, helping you stay focused on what truly matters.</p>
                        </div>
                </div>
                <div className='features-box reverse'>
                    <div className='features-image f-image-2'></div>
                        <div className='features-info'>
                            <h1 className='features-info-title t-2'>SAFELY VERIFY AND SECURE DOCUMENTS WITH EASE</h1>
                            <div className='features-line l-2'></div>
                            <p className='features-info-description'>Signor ensures that every document you handle is protected and authentic. Designed for the students, faculty, and staff of DHVSU College of Computing Studies, the platform provides a seamless way to verify the legitimacy of digital files and maintain their integrity through advanced security protocols. Whether you're managing academic records, administrative forms, or official requests, Signor offers a reliable environment where documents are encrypted, traceable, and securely stored—giving you peace of mind with every transaction.</p>
                        </div>
                </div>
                <div className='features-box'>
                    <div className='features-image f-image-3'></div>
                        <div className='features-info'>
                            <h1 className='features-info-title'>ORGANIZE DOCUMENTS WITH REAL-TIME TRACKING</h1>
                            <div className='features-line'></div>
                            <p className='features-info-description'>With Signor, managing your documents becomes effortless and transparent. Built for the DHVSU College of Computing Studies community, the platform allows students, faculty, and staff to keep their files organized and accessible in one centralized location. Real-time tracking lets you monitor the status of each document—whether it's pending, signed, or completed—so you’re always informed and in control. Say goodbye to lost paperwork and missed deadlines with a smarter, more efficient way to handle document workflows.</p>
                        </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}