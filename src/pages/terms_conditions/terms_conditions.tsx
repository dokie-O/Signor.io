import React from 'react';
import './terms_conditions.css';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const TermsAndConditions = () => {
    return (
        <>
        <main>
            <Header />
            <section
                    className='helpcenter-h terms-con-h'>
                    <h3>Terms & Conditions</h3>
                    <p>What you need to know before using Signor</p>
            </section>

            <section className='termsAndCondition-body'> 
                <h1 className='termsAndCondition-accent'>Welcome!</h1>
                <p>Welcome to Signor, the AI-powered academic document management system of Don Honorio Ventura State University - College of Computing Studies (DHVSU CCS). By using this website, you agree to the following terms and conditions. Please read them carefully.</p>

                <div className='termsAndCon-wrapper'>
                    <h1>1. Purpose of the System</h1>
                    <p>Signor is designed to provide secure storage, retrieval, and management of academic documents (such as transcripts, diplomas, and academic papers) for DHVSU CCS students, faculty, and administrators. It aims to improve efficiency, data integrity, and document security through blockchain technology.</p>
                    
                    <h1>2. Scope of Use</h1>
                    <ul>
                        <li>a. Signor is intended solely for academic document management.</li>
                        <li>b. The system does not handle financial, medical, or personal data.</li>
                        <li>c. The system is web-based and requires an internet connection to operate.</li>
                        <li>d. The system is limited to use within DHVSU CCS and will not be extended to other departments or institutions.</li>
                        <li>e. Mobile application access is not supported.</li>
                    </ul>

                    <h1>3. AI-Powered Virtual Assistant</h1>
                    <ul>
                        <li>a. The AI assistant is provided to help users navigate the system and answer common questions about its features.</li>
                        <li>b. It does not provide academic advice, legal advice, or any content beyond system guidance.</li>
                    </ul>

                    <h1>4. Blockchain Security</h1>
                    <ul>
                        <li>a. Blockchain technology is used to ensure tamper-proof storage and verification of academic documents.</li>
                        <li>b. Users are responsible for maintaining the confidentiality of their login credentials to prevent unauthorized access.</li>
                    </ul>

                    <h1>5. User Responsibilities</h1>
                    <ul>
                        <li>a. Users must provide accurate and truthful information when using the system.</li>
                        <li>b. Users must not attempt to tamper with, misuse, or compromise the security of the system.</li>
                        <li>c. Any misuse of Signor may result in account suspension or legal action.</li>
                    </ul>

                    <h1>6. Account Management</h1>
                    <ul>
                        <li>a. User accounts are managed by DHVSU CCS administrators.</li>
                        <li>b. Access levels (student, faculty, administrator) are role-based and determined by the university.</li>
                        <li>c. Users are responsible for maintaining the security of their accounts and promptly reporting any suspicious activity.</li>
                    </ul>

                    <h1>7. Limitations</h1>
                    <ul>
                        <li>a. Signor does not guarantee uninterrupted or error-free service.</li>
                        <li>b. The university is not liable for any data loss or system downtime caused by technical issues beyond its control.</li>
                    </ul>

                    <h1>8. Privacy</h1>
                    <ul>
                        <li>a. User data is handled in accordance with the university’s Privacy Policy.</li>
                        <li>b. Blockchain records are designed to enhance data integrity and security.</li>
                    </ul>

                    <h1>9. Changes to Terms</h1>
                    <ul>
                        <li>a. DHVSU CCS reserves the right to update these terms and conditions at any time.</li>
                        <li>b. Users will be notified of significant changes via the Signor website.</li>
                    </ul>
                    <br></br><br></br>
                    <span>By continuing to use Signor, you acknowledge that you have read, understood, and agreed to these terms and conditions.</span>
                </div>
            </section>
            <Footer />
        </main>
        </>
    )
}