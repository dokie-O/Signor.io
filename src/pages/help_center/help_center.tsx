import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import bgImage from '../../assets/images/contact_us/contact_header_bg.png';
import './help_center.css';

export const HelpCenter = () => {
    return (
        <>
        <Header />
            <main>
                <section
                    className="helpcenter-h">
                    <h1>Help Center</h1>
                    <h3>Frequently asked to Signor Team</h3>
                </section>

                <section className="helpcenter-faq-wrapper">
                    <div className="helpcenter-searchbar">
                        <div className="search-input-wrapper">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input type="text" placeholder="Search for an article" />
                        </div>
                    <button className="search-button">Search</button>
                    </div>

                    <div className="helpcenter-articles-wrapper">
                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Getting to know Signor</h1>
                            <p>Things you need to know to get started with Signor</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Signor Account</h1>
                            <p>Articles on how to manage your Signor Account</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Document Management</h1>
                            <p>How to articles on how to sign or manage your documents</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Template</h1>
                            <p>How to articles on how to use templates</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Settings and Customization</h1>
                            <p>Articles about setting and customizing your experience.</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Security and Privacy</h1>
                            <p>Articles about information security and data privacy.</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Dean's and President’s List Application</h1>
                            <p>How to articles about Dean’s and President’s list application.</p>
                            <span>2 Articles</span>
                        </div>
                        </div>

                        <div className="helpcenter-articles">
                        <div className="articles-con">
                            <h1>Dean's and President’s List Application</h1>
                            <p>How to articles about Dean’s and President’s list application.</p>
                            <span>2 Articles</span>
                        </div>
                        </div>
                    </div>
                </section>

            </main>
        <Footer />
        </>
    )
}