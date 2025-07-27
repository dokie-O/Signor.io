import React, { useState } from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    const setPasswordInputType = () => {
        return showPassword ? 'text' : 'password';
    };

    const setConfirmPasswordInputType = () => {
        return showConfirmPassword ? 'text' : 'password';
    };

    return (
        <>
        <Header />
        <div className='register-wrapper'>
            <section className='register-left-side'>
                <div className='register-left-side-image'></div>
                <p className='register-left-side-text'>'Sign, Track, Verify</p>
            </section>

            <section className='register-right-side'>
                <form className='register-right-side-form'>
                    <div className='register-right-side-logo'></div>
                    <div className='register-right-side-choices'>
                        <button
                            type='button'
                            className={`student${role === 'student' ? ' active' : ''}`}
                            onClick={() => setRole('student')}
                        >
                            Student
                        </button>
                        <button
                            type='button'
                            className={`teacher${role === 'teacher' ? ' active' : ''}`}
                            onClick={() => setRole('teacher')}
                        >
                            Teacher
                        </button>
                    </div>
                    <input type='text' placeholder='First Name' required />
                    <input type='text' placeholder='Last Name' required />
                    <input type='email' placeholder='Email' required />

                    {/* Password */}
                    <div className='password-wrapper'>
                        <input
                            type={setPasswordInputType()}
                            placeholder='Password'
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className='password-wrapper'>
                        <input
                            type={setConfirmPasswordInputType()}
                            placeholder='Confirm Password'
                            required
                        />
                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    <div className='checkbox-box'>
                        <input type='checkbox' />
                        <span className='checkbox-text'>
                            I Agree to Signor Terms of Use and Privacy Policy
                        </span>
                    </div>

                    <button type='submit' className='create-acc-btn'>Create Account</button>
                </form>
            </section>
        </div>
        <Footer />
        </>
    );
};