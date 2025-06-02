import React from "react";
import "./accordian.css";

const Accordion = () => {
  return (
    <div className="accordion-wrapper-columns">
      {/* Left Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="left-1" />
          <label className="accordion-label" htmlFor="left-1">
         What is web development?

          </label>
          <div className="accordion-content">
            <p>
       Web development is process of creating, building, and maintaining websites or web applications. It includes layout and design to coding and functionality.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
          How long does it take to develop a website?

          </label>
          <div className="accordion-content">
            <p>
        The timeline depends on your requirements. A basic business website may take 2–3 weeks, while complex platforms like eCommerce sites may take 6–8 weeks or more.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
      What type of websites do you build?

          </label>
          <div className="accordion-content">
            <p>
        We build business websites, eCommerce platforms, blogs, educational portals, booking systems, and more—tailored to your industry and audience.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
           Will my website be mobile-friendly?

          </label>
          <div className="accordion-content">
            <p>
         Yes, all our websites are responsive and designed to look and function perfectly on mobile phones, tablets, and desktops.

            </p>
          </div>
        </div>

      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
         Can I update the website myself after it’s built?

          </label>
          <div className="accordion-content">
            <p>
      Absolutely! We use user-friendly CMS platforms like WordPress that allow you to manage content easily. Training is also available if needed.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
       Do you offer website maintenance and support?

          </label>
          <div className="accordion-content">
            <p>
         Yes, we offer ongoing website maintenance, updates, security checks, backups, and technical support to keep your site running smoothly.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
        How much does a new website cost?

          </label>
          <div className="accordion-content">
            <p>
        Pricing varies based on design, features, and complexity. We offer custom quotes tailored to your needs after a brief consultation.

            </p>
          </div>
        </div>

        
        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
        Do you offer custom website design or use templates?

          </label>
          <div className="accordion-content">
            <p>
          We specialize in custom website development to match your brand, goals, and user experience—though we can also work with templates if you prefer.

            </p>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Accordion;
