import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

export const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | null>(null);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleRoleSelect = (role: 'student' | 'teacher') => {
        setSelectedRole(role); 
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
                                className={selectedRole === 'student' ? 'selected' : ''}
                                onClick={() => handleRoleSelect('student')}
                            >
                                Student
                            </button>
                            <button
                                type='button'
                                className={selectedRole === 'teacher' ? 'selected' : ''}
                                onClick={() => handleRoleSelect('teacher')}
                            >
                                Teacher
                            </button>
                        </div>
                        <input type='email' name='' id='' placeholder='Email' required />
                        <div className='password-wrapper'>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder='Password' required
                            />
                            <span onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <button type='submit' className='create-acc-btn log-in-btn'>Log in</button>
                        <p className='log-in-text'>No account yet? <Link to='/register' className='sign-up-text'>Sign Up</Link> for free</p>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
}