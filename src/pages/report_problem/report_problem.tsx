import React from 'react';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import './report_problem.css';

export const ReportAProblem = () => {
    return (
        <>
        <main>
            <Header />
            <section
                    className='helpcenter-h'>
                    <h3>Welcome to Signor Support!</h3>
            </section>
            
            <section className='helpcenter-body'>
                <p>Notice something wrong? Help us improve by reporting any issues or bugs your encouter. Your feedback makes a difference!</p>
                <br></br>
                <p>Required fields are markeded with an asterisk<span className='asterisk'>*</span></p>

                <form className='form-wrapper'>
                    <div className='input-field'>
                        <label>Email confirmation to <span className='asterisk'>*</span></label>
                        <input type='email' id='reporter-email' required/>
                    </div>

                    <div className='input-field'>
                        <label>Report Summary <span className='asterisk'>*</span></label>
                        <input type='text' required/>
                    </div>

                    <div className='input-field desc-field'>
                        <label>Description <span className='asterisk'>*</span></label>
                        <textarea required/>
                    </div>

                    <div className='input-field attachment-field'>
                        <label>Attachment</label>
                        <div className='attachment-field-box'>
                            <h1>Drag and drop files, paste, screenshots, or browse</h1>
                            <button className='attachment-upload'>Upload</button>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button type='submit' className="btn-send">Send</button>
                        <button type='reset' className="btn-cancel">Cancel</button>
                    </div>
                </form>
            </section>
            <Footer />
        </main>
        </>
    )
}