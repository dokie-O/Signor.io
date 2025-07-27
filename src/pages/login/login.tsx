import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@tanstack/react-form';

interface UserLogin {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const form = useForm({
            defaultValues: {
                email: "",
                password: "",
            } as UserLogin,
            onSubmit: async ({ value }) => {
                // Send form data via alerts for now
                console.log(JSON.stringify(value, null, 2));
                alert(JSON.stringify(value, null, 2));
                
                // Submit the form data to the backend
                try {
                    const response = await fetch('http://localhost:4000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(value, null, 2),
                    });

                    if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}, body: ${await response.text()}`);
                    }

                    const result = await response.json();
                    console.log('Success:', result);
                    alert('Login successful!');
                } catch (error) {
                    alert('Error submitting form: ' + error)
                    console.error('Error submitting form:', error);
                }
            },
        });

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className='register-wrapper'>
                <section className='register-left-side'>
                    <div className='register-left-side-image'></div>
                    <p className='register-left-side-text'>'Sign, Track, Verify</p>
                </section>

                <section className='register-right-side'>
                    <form name='UserLogin' className='register-right-side-form'
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();

                            // to allow resubmissions
                            let timeOut = setTimeout(() => {
                                let scrollPosition = window.scrollY;
                                let email = form.getFieldValue('email');
                                let password = form.getFieldValue('password');
                                form.reset();
                                window.scrollTo(0, scrollPosition);
                                form.setFieldValue('email', email);
                                form.setFieldValue('password', password);
                            }, 1000);
                        }}
                    >
                        <div className='register-right-side-logo'></div>
                        
                        <form.Field
                            name='email'
                            validators={{
                                onSubmit: ({ value }) => {
                                    const error = value.trim() === "" ? "Email is required" : undefined;
                                    if (error) {
                                        alert(error);
                                        console.error(error);
                                        return error;
                                    }
                                },
                            }}
                        >
                            {(field) => (
                                <input
                                    type='email'
                                    placeholder='Email'
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    required
                                />
                            )}
                        </form.Field>
                        
                        <div className='password-wrapper'>
                            <form.Field
                                name='password'
                                validators={{
                                    onSubmit: ({ value }) => {
                                        const error = value.trim() === "" ? "Password is required" : undefined;
                                        if (error) {
                                            alert(error);
                                            console.error(error);
                                            return error;
                                        }
                                        const err0 = value.trim().length < 8 ? "Password is too short" : undefined;
                                        if (err0) {
                                            alert(err0);
                                            console.error(err0);
                                            return err0;
                                        }
                                        const err1 = value.trim().length > 32 ? "Password is too long" : undefined;
                                        if (err1) {
                                            alert(err1);
                                            console.error(err1);
                                            return err1;
                                        }
                                    },
                                }}
                            >
                                {(field) => (
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="Password"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        required
                                    />
                                )}
                            </form.Field>
                            <span onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <button type='submit' className='create-acc-btn log-in-btn'>Log in</button>
                        <p className='log-in-text'>No account yet? <Link to='/register' className='sign-up-text'>Sign Up</Link> for free</p>
                    </form>
                </section>
            </div>
        </>
    );
}
