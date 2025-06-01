import React from 'react';
import './Footer';


const FooterSection = ({ title, items }) => {
  return (
    <div className="footer-section ">
      <h4 className='footer-title hover:text-[#409338] font-bold cursor-pointer mb-[35px]'>{title}</h4>
      <ul>
        {items.map((item, index) => (
  <li
  key={index}
  className="footer-items cursor-pointer relative group mb-[4px] pb-[5px] "
>
  {item}
  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#25D366] transition-all duration-300 group-hover:w-[80%] group-hover:left-0" />
</li>


        ))}
      </ul>
    </div>
  );
};

export default FooterSection;