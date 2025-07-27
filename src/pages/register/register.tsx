import React, { useState } from 'react';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@tanstack/react-form';

interface UserRegister {
    email: string;
    account_type: string;
    family_name: string;
    given_name: string;
    password: string; // Will be hashed at backend
    passwordConfirm: string; // Won't be used by backend
}

export const Register: React.FC = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            account_type: "",
            family_name: "",
            given_name: "",
            password: "",
            passwordConfirm: ""
        } as UserRegister,
        onSubmit: async ({ value }) => {
            if (value.password !== value.passwordConfirm) {
                    alert("Passwords do not match");
                    console.error("Passwords do not match");
                    return;
                } else {
                    console.log(JSON.stringify(value, null, 2));
                    alert(JSON.stringify(value, null, 2));
                    
                    // Submit the form data to the backend
                    try {
                        const response = await fetch('http://localhost:4000/api/register', {
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
                        alert('Registration successful!');
                    } catch (error) {
                        alert('Error submitting form: ' + error)
                        console.error('Error submitting form:', error);
                    }
                }
        },
    });

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
            <div className='register-wrapper'>
                <section className='register-left-side'>
                    <div className='register-left-side-image'></div>
                    <p className='register-left-side-text'>'Sign, Track, Verify</p>
                </section>

                <section className='register-right-side'>
                    {/* form */}
                    <form name='UserRegister' className='register-right-side-form'
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();

                            // to allow resubmissions
                            let timeOut = setTimeout(() => {
                                let scrollPosition = window.scrollY;
                                let email = form.getFieldValue('email');
                                let account_type = form.getFieldValue('account_type');
                                let family_name = form.getFieldValue('family_name');
                                let given_name = form.getFieldValue('given_name');
                                let password = form.getFieldValue('password');
                                let passwordConfirm = form.getFieldValue('passwordConfirm');
                                form.reset();
                                window.scrollTo(0, scrollPosition);
                                form.setFieldValue('email', email);
                                form.setFieldValue('account_type', account_type);
                                form.setFieldValue('family_name', family_name);
                                form.setFieldValue('given_name', given_name);
                                form.setFieldValue('password', password);
                                form.setFieldValue('passwordConfirm', passwordConfirm);
                            }, 1000);
                        }}
                    >
                        <div className='register-right-side-logo'></div>
                        <div className='register-right-side-choices'>
                            <form.Field
                                name='account_type'
                                validators={{
                                    onSubmit: ({ value }) => {
                                        const error = value.trim() === "" ? "Account type is required" : undefined;
                                        if (error) {
                                            alert(error);
                                            console.error(error);
                                        }
                                        return error;
                                    },
                                }}
                            >
                                {(field) => (
                                    <input
                                        type='hidden'
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                )}
                            </form.Field>
                            <button
                                type='button'
                                className={`student${role === 'student' ? ' active' : ''}`}
                                onClick={() => {
                                    setRole('student');
                                    form.setFieldValue('account_type', 'student');
                                }}
                            >
                                Student
                            </button>
                            <button
                                type='button'
                                className={`teacher${role === 'teacher' ? ' active' : ''}`}
                                onClick={() => {
                                    setRole('teacher');
                                    form.setFieldValue('account_type', 'teacher');
                                }}
                            >
                                Teacher
                            </button>
                        </div>
                        
                        <form.Field
                            name='email'
                            validators={{
                                onSubmit: ({ value }) => {
                                    const error = value.trim() === "" ? "Email is required" : undefined;
                                    if (error) {
                                        alert(error);
                                        console.error(error);
                                    }
                                    return error;
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

                        <form.Field
                            name='family_name'
                            validators={{
                                onSubmit: ({ value }) => {
                                    const error = value.trim() === "" ? "Last Name is required" : undefined;
                                    if (error) {
                                        alert(error);
                                        console.error(error);
                                    }
                                    return error;
                                },
                            }}
                        >
                            {(field) => (
                                <input
                                    type='text'
                                    placeholder="Last Name"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    required
                                />
                            )}
                        </form.Field>

                        <form.Field
                            name='given_name'
                            validators={{
                                onSubmit: ({ value }) => {
                                    const error = value.trim() === "" ? "First Name is required" : undefined;
                                    if (error) {
                                        alert(error);
                                        console.error(error);
                                    }
                                    return error;
                                },
                            }}
                        >
                            {(field) => (
                                <input
                                    type='text'
                                    placeholder="First Name"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    required
                                />
                            )}
                        </form.Field>

                        {/* Password */}
                        <div className='password-wrapper'>
                            <form.Field
                                name='password'
                                validators={{
                                    onSubmit: ({ value }) => {
                                        const error = value.trim() === "" ? "Password is required" : undefined;
                                        if (error) {
                                            alert(error);
                                            console.error(error);
                                        }
                                        return error;
                                    },
                                }}
                            >
                                {(field) => (
                                    <input
                                        type={setPasswordInputType()}
                                        placeholder="Password"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        required
                                    />
                                )}
                            </form.Field>
                            <span onClick={() => setShowPassword(!showPassword)}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <div className='password-wrapper'>
                            <form.Field
                                name='passwordConfirm'
                                validators={{
                                    onSubmit: ({ value }) => {
                                        const error = value.trim() === "" ? "Confirm Password is required" : undefined;
                                        if (error) {
                                            alert(error);
                                            console.error(error);
                                        }
                                        return error;
                                    },
                                }}
                            >
                                {(field) => (
                                    <input
                                        type={setConfirmPasswordInputType()}
                                        placeholder="Confirm Password"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        required
                                    />
                                )}
                            </form.Field>
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>

                        <div className='checkbox-box'>
                            <input type='checkbox' required/>
                            <span className='checkbox-text'>
                                I Agree to Signor Terms of Use and Privacy Policy
                            </span>
                        </div>

                        <button type='submit' className='create-acc-btn'>Create Account</button>
                    </form>
                </section>
            </div>
        </>
    );
};
