import React from "react";

function Footer() {
    return(
        <footer className="mt-5">
            <div className="container-fluid border-f">
                <div className="container-h d-flex flex-row flex-wrap justify-content-between py-4 px-3 px-md-0">
                    <div className="col-12 col-lg-3 d-flex flex-column">
                        <a className="navbar-brand text-dark" href="#"><i className="fa fa-tag"></i> LOGO<span className="sr-only">(current)</span></a>
                        <p>Your tagline goes here</p>
                        <ul className="d-flex flex-row p-0">
                            <li className="social-li">
                                <a href="#" className="social-a"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li className="social-li">
                                <a href="#" className="social-a"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="social-li">
                                <a href="#" className="social-a"><i className="fab fa-linkedin"></i></a>
                            </li>
                            <li className="social-li">
                                <a href="#" className="social-a"><i className="fab fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column">
                        <div className="footer-h">Company</div>
                        <li className="footer-li">
                            <a href="" className="footer-a">About</a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-a">Contact</a>
                        </li>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column">
                        <div className="footer-h">Services</div>
                        <li className="footer-li">
                            <a href="" className="footer-a">Imprint</a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-a">Printing</a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-a">E-commerce Dev</a>
                        </li>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column">
                        <div className="footer-h">Support</div>
                        <li className="footer-li">
                            <a href="" className="footer-a">Tracking</a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-a">Resources</a>
                        </li>
                        <li className="footer-li">
                            <a href="" className="footer-a">Support Ticket</a>
                        </li>
                    </div>
                    <div className="col-6 col-md-3 col-lg-3 d-flex flex-column">
                        <div className="footer-h">Join Our List</div>
                        <p>Get updates from us.</p>
                        <div className=" mb-3">
                            <input type="text" className="form-control mb-3" placeholder="" aria-label="Enter your email" aria-describedby="list-signup" />
                            <button className="btn btn-primary" type="button" id="listSignup">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex footer-base py-4 px-3 px-md-0">
                <div className="container-h d-flex flex-row flex-wrap-reverse">
                    <div className="col-12 col-md-6">
                    <p>© 2021 Blake Loyd Jackson -- lorem ipsum fecit</p>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-row justify-content-start justify-content-md-end">
                        <a href="#" className="footer-base-a">Privacy Notice |</a>
                        <a href="#" className="footer-base-a">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;