import React from 'react';
import './Footer';

const FooterSection = ({ title, items }) => {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;