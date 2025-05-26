import React from 'react';
import './Footer';
import "./FooterSection.css"

const FooterSection = ({ title, items }) => {
  return (
    <div className="footer-section">
      <h4 className='footer-title'>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li className="footer-items" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;