import React from 'react';
import Logo from "./Logo"; // Make sure you have the Logo component

function Footer() {
    return (
        <div className='footer-div container mt-5'>
            <footer className="bg-light text-dark py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Logo />
                        </div>
                        <div className="text-right">
                            <h3 className="mb-1">Al-Hassan Ali</h3>
                            <div>
                                <a href="https://github.com/HassanAli381" className="text-dark mx-2" target='_blank' rel="noreferrer">
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/al-hassan-ali-003b251a6/" className="text-dark mx-2" target='_blank' rel="noreferrer">
                                    <i className="fab fa-linkedin fa-lg"></i>
                                </a>
                                <a href="https://wa.me/+201141991084" className="text-dark mx-2" target='_blank' rel="noreferrer">
                                    <i className="fab fa-whatsapp fa-lg"></i>
                                </a>
                                <a href="https://www.facebook.com/alhassan.ali.7927" className="text-dark mx-2" target='_blank' rel="noreferrer">
                                    <i className="fab fa-facebook fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <p className="text-center">
                        <b>Disclaimer</b>: I'm not responsible for any misuse or improper use of the application. The user assumes all responsibility for any actions taken while using this image search engine.
                    </p>
                    <p className="text-center">All rights reserved © 2024.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
