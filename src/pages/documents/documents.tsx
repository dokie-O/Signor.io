import React, { useState } from 'react';
import { DashboardLayout } from '../../layout/dashboard_layout/dashboardlayout';
import './documents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faPenNib, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Documents = () => {
    const [activeDocTab, setActiveDocTab] = useState('All Documents');
    const [activeActionTab, setActiveActionTab] = useState('Verify Document');

    const documentTabs = ['All Documents', 'Unsigned', 'Completed', 'Rejected', 'Pending'];
    const actionTabs = ['Verify Document', 'Prepare Document'];

    const summaryData = {
        documentName: '',
        signatories: [],
        approvers: [],
        recipients: [],
    };
    
    return (
        <DashboardLayout>
            <section className='documents-page'>
                <div className='document-tabs'>
                    {/* Document Tabs Group */}
                    <div className='document-tabs-group'>
                        {documentTabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab ${activeDocTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveDocTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Action Tabs */}
                    <div className='document-tabs-actions'>
                        {actionTabs.map((tab) => (
                            <button
                                key={tab}
                                    className={`tab ${activeActionTab === tab ? 'active' : ''} ${tab === 'Prepare Document' || tab === 'Verify Document' ? 'outline' : ''}`}
                                onClick={() => setActiveActionTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Content Sections */}
                {activeActionTab === 'Verify Document' && (
                    <section className='verify-document-section'>
                        <h3>Verify Document</h3>
                        <div className='document-box'>
                            <div className='upload-box'>
                                <div className='upload-icon'></div>
                                <p>Upload the document to verify<br />its authenticity and the signatory's signatures.</p>
                                <button className='upload-btn'>Upload Document</button>
                            </div>
                        </div>
                    </section>
                )}

                {activeActionTab === 'Prepare Document' && (
                    <section className='prepare-document-section'>
                        <div className='prepare-document-section-col1'>
                            <div className='prepare-document-header'>
                                <h3>Prepare Document</h3>
                            </div>

                            <div className='prepare-document-section-col1-content'>
                                <form>
                                    <h4>The document is to be signed</h4>
                                    <label className='radio-label' htmlFor='via-email'>
                                        <input 
                                        type='radio'
                                        id='via-email'
                                        name='sign-method'
                                        className='space' 
                                        checked 
                                        readOnly />
                                        Via Email
                                    </label>

                                    <div className='upload-doc'>
                                        <h4>Select the documents that require signature</h4>
                                        <p className='upload-note'>
                                            (Max 200MB file size and 1000 pages for each individual document)
                                        </p>

                                        <div className='upload-buttons'>
                                            <button className='upload-btn'>Upload Document</button>
                                            <span className="upload-separator">or</span>
                                            <div className='drop-zone'>Drop Document Here</div>
                                        </div>
                                    </div>

                                    <div className='participants'>
                                        <h4>Who needs to participate on this document?</h4>
                                        <label className='checkbox-label' htmlFor='doc-workflow'>
                                            <input 
                                            type='checkbox'
                                            id='doc-workflow'
                                            name='workflow'
                                            className='space'
                                            />
                                            Set document workflow
                                        </label>

                                        <div className='participant-actions'>
                                            <button className='participant-btn'>Include Me</button>
                                            <button className='participant-btn secondary'>Add Another Participant</button>
                                        </div>
                                    </div>

                                    <div className='advanced-settings'>
                                        <h4>Advance Settings</h4>
                                        <button type='submit' className='prepare-doc-btn'>
                                            Prepare Document
                                            <span className='arrow'>›</span>
                                            </button>
                                    </div>
                                </form>   
                            </div>
                        </div>

                        <div className='prepare-document-section-col2'>
                            <div className='summary-header'>
                                <h3>Summary</h3>
                            </div>

                            <div className='prepare-document-section-col2-content'>
                            <ul className='summary-list'>
                                <li>
                                <FontAwesomeIcon icon={faFileLines} className='icon' />{' '}
                                <strong>Documents</strong> — {summaryData.documentName || 'Please set a document name'}
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faPenNib} className='icon' />{' '}
                                <strong>Signatories</strong> — {summaryData.signatories.length > 0 ? summaryData.signatories.join(', ') : 'No signatories'}
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faCheck} className='icon' />{' '}
                                <strong>Approvers</strong> — {summaryData.approvers.length > 0 ? summaryData.approvers.join(', ') : 'No approvers'}
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />{' '}
                                <strong>Recipients</strong> — {summaryData.recipients.length > 0 ? summaryData.recipients.join(', ') : 'No recipients'}
                                </li>
                            </ul>
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </DashboardLayout>
    );
};
