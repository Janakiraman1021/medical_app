import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Our EHR system is a revolutionary platform that utilizes the power
            of blockchain technology to securely store and manage electronic
            health records. We are committed to providing a solution that
            addresses the challenges faced by healthcare providers and patients
            alike, with the aim of improving healthcare outcomes and ultimately,
            the quality of life.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow></FaLocationArrow>
            <div className="text">
            chennai , TN , India 
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt></FaMobileAlt>
            <div className="text">Phone: +91 123456789</div>
          </div>
          <div className="c-item">
            <FaEnvelope></FaEnvelope>
            <div className="text">Email: med3chain@admin.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Electronic Health Record Software</span>
          <span className="text">Telehealth Solutions</span>
          <span className="text">Patient Engagement Tools</span>
          <span className="text">Data Analytics Tools</span>
          <span className="text">Consulting and Implementation Services</span>
          <span className="text">Support and Training Services</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Blogs</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            MED 3 Inc &copy; 2024 
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
