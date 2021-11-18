import React from "react";
/* LINK TO ROUTER */
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="home-footer-container">
                <div className="row">
                    <div className="footer-col">

                        <h4>

                            Sumex Investment Bank
                        </h4>
                        <h4>+1 (7635) 547-12-97</h4>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="policy.html">privacy Policy</a></li>
                            <li><a href="#section__one">Services</a></li>
                            <li><a href="#section__two">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Address</h4>
                        <ul>
                            <li className="address">
                                <p>Location: 1212 28th St SW, Wyoming,
                                    MI 49509, United States</p> <br />

                                <p>Email: support @sumexbank.com
                                Phone: +13072047877</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="contact">
                <ul>
                    <div id="icon-container">
                        <a href="/">
                            <div id="icon">
                                <li><i className="fab fa-twitter"></i></li>
                            </div>
                        </a>
                        <a href="/">
                            <div id="icon">
                                <li><i className="fab fa-instagram"></i></li>
                            </div>
                        </a>
                        <a href="/">
                            <div id="icon">
                                <li><i className="fab fa-facebook-f"></i></li>
                            </div>
                        </a>
                        <a href="/">
                            <div id="icon">
                                <li><i className="far fa-envelope"></i></li>
                            </div>
                        </a>
                        <a href="/">
                            <div id="icon">
                                <li><i className="fab fa-free-code-camp"></i></li>
                            </div>
                        </a>

                    </div>
                </ul>
                <p>&copy; 2021, Sufex Investment Bank</p>
            </div>
        </footer>
    );

}