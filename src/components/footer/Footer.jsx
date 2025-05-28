import React from 'react';
import "./FooterStyle.css"
import FooterSection from "./FooterSection"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/logo.png"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left aligned-left">
                    <img src={logo} alt="WebNest Media Logo" className="footer-logo" />


                    <div className="social-media">
                        <h4>Connect on Social Media</h4>
                        <div className="icons social-icons">
                            <FaFacebookF className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaLinkedinIn className="social-icon" />
                            <FaYoutube className="social-icon" />
                            <FaInstagram className="social-icon" />
                        </div>
                    </div>

                    <div className="address">
                        <h4>Our Address</h4>
                        <p className="address">1st Floor Orchid Business Park, Near Subhash Chowk, Sector 48, Gurugram, Haryana 122004</p>
                        <h4>Email Us</h4>
                        <a className="contact no-underline" href="mailto:info@webnestmedia.com">info@webnestmedia.com</a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-sections two-rows">
                        <div className="footer-row">
                            <FooterSection title="Digital Marketing" items={["Search Engine Marketing (SEM)", "Search Engine Optimization (SEO)", "Social Media Marketing (SMM)", "Web Development", "Content Marketing", "Affiliate Marketing"]} />
                            <FooterSection title="Branding" items={["Brochure Designing", "Logo Designing", "Packaging Designing"]} />
                            <FooterSection title="Others" items={["Analytics & Reporting", "Conversion Rate Optimization", "Programmatic Marketing"]} />
                            <FooterSection title="Solutions" items={["Brand Strategy", "Lead Generation", "Customer Retention", "Digital Transformation", "Market Research & Insights", "Omnichannel Marketing"]} />
                            <FooterSection title="Promotions" items={["Email Marketing", "Mobile Marketing", "Influencer Marketing", "SMS Marketing"]} />
                        </div>


                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 WebNest Media. All rights reserved.</p>
                <p>Developed by WebNest Media</p>
            </div>
        </footer>
    );
};

export default Footer;