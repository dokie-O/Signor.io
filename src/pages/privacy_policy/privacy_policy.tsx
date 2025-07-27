import React from 'react';
import './privacy_policy.css';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const PrivacyPolicy = () => {
    return (
        <>
        <main>
            <Header />
            <section
                    className='helpcenter-h terms-con-h'>
                    <h3>Privacy Policy</h3>
                    <p>How we keep your academic info safe</p>
            </section>

            <section className='termsAndCondition-body'> 
                <h1 className='termsAndCondition-accent'>Welcome!</h1>
                <p>At Signor, the AI-powered academic document management system of Don Honorio Ventura State University - College of Computing Studies (DHVSU CCS), we are committed to protecting your privacy and securing your data. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our system.</p>

                <div className='termsAndCon-wrapper privacyPolicy-wrapper'>
                    <h1>1. Information We Collect</h1>
                    <p>We collect and store only the necessary information required to provide our services:</p>
                    <ul>
                        <li>User account information (name, email, role: student, faculty, or administrator)</li>
                        <li>Academic documents you upload (transcripts, diplomas, academic papers)</li>
                        <li>System usage data (to improve user experience and system performance)</li>
                    </ul>
                    <p>We do not collect financial, medical, or unrelated personal data.</p>

                    <h1>2. How We Use Your Information</h1>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Provide secure storage and retrieval of academic documents</li>
                        <li>Ensure document authenticity through blockchain verification</li>
                        <li>Manage user accounts and permissions</li>
                        <li>Improve system usability and performance</li>
                        <li>Communicate important updates regarding the system</li>
                    </ul>

                    <h1>3. Data Security</h1>
                    <ul>
                        <li>Signor uses blockchain technology to ensure tamper-proof verification of academic records.</li>
                        <li>All user data is protected by secure authentication and encryption measures.</li>
                        <li>Only authorized users with proper roles (student, faculty, administrator) have access to specific data.</li>
                    </ul>

                    <h1>4. Sharing of Information</h1>
                    <ul>
                        <li>We do not share your personal data with external parties unless required by law or authorized by DHVSU CCS.</li>
                        <li>Blockchain-stored data is used solely to verify document authenticity and integrity.</li>
                    </ul>

                    <h1>5. User Responsibilities</h1>
                    <ul>
                        <li>Users must protect the confidentiality of their login credentials.</li>
                        <li>Users should not attempt to compromise the system’s security or misuse stored data.</li>
                    </ul>

                    <h1>6. Limitations</h1>
                    <ul>
                        <li>Signor does not offer offline services; an internet connection is required.</li>
                        <li>The system is limited to DHVSU CCS users only and does not extend to other departments or institutions.</li>
                    </ul>

                    <h1>7. Changes to this Privacy Policy</h1>
                    <p>We may update this Privacy Policy from time to time. Significant changes will be communicated via the Signor website.</p>

                    <h1>8. Contact</h1>
                    <p>If you have any questions about this Privacy Policy, please contact your DHVSU CCS system administrator.</p>
                </div>
            </section>
            <Footer />
        </main>
        </>
    )
}