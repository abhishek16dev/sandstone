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
            What is lead generation?
          </label>
          <div className="accordion-content">
            <p>
              Lead generation is the process of identifying and attracting potential customers for a business's products or services. It typically involves marketing strategies designed to capture interest and gather contact information for follow-up.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            Why is lead generation important for business growth?
          </label>
          <div className="accordion-content">
            <p>
              Lead generation helps businesses reach new audiences, build a sales pipeline, and ultimately drive more revenue. Without it, sustaining long-term growth and customer acquisition becomes difficult.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            What are the main types of lead generation?
          </label>
          <div className="accordion-content">
            <p>
              There are two main types: inbound lead generation (through SEO, content marketing, social media) and outbound lead generation (through cold emails, calls, and ads). Both can be effective depending on the strategy and audience.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            What is a qualified lead?
          </label>
          <div className="accordion-content">
            <p>
              A qualified lead is someone who has shown genuine interest in a product or service and fits the profile of an ideal customer. They’re more likely to convert into a paying customer compared to general inquiries.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            How is lead generation different from sales?
          </label>
          <div className="accordion-content">
            <p>
              Although sales involves converting those leads into actual customers, lead generation concentrates on drawing in and attracting potential clients.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
            What digital channels are commonly used for lead generation?
          </label>
          <div className="accordion-content">
            <p>
              Popular digital channels include websites, social media platforms, email campaigns, search engines (via SEO and PPC), webinars, and landing pages. A multichannel approach often delivers the best results.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
            Can small businesses benefit from lead generation?
          </label>
          <div className="accordion-content">
            <p>
              Yes, lead generation is valuable for businesses of all sizes. For small businesses, it helps compete with larger players by connecting them with targeted audiences who are actively looking for specific solutions.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
            How do I know if my lead generation campaign is successful?
          </label>
          <div className="accordion-content">
            <p>
              Success can be measured by metrics such as the number of leads generated, lead quality, conversion rate, cost per lead, and return on investment (ROI). Regular analysis helps improve performance over time.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-9" />
          <label className="accordion-label" htmlFor="right-9">
            What’s the difference between B2B and B2C lead generation?
          </label>
          <div className="accordion-content">
            <p>
              B2B (business-to-business) lead generation targets decision-makers in companies, focusing on long-term relationships. B2C (business-to-consumer) targets individual buyers, usually with faster purchase decisions.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-10" />
          <label className="accordion-label" htmlFor="right-10">
            How long does it take to see results from lead generation efforts?
          </label>
          <div className="accordion-content">
            <p>
              Results vary based on the strategy and industry. Some methods, like paid ads, show quick results, while organic strategies like SEO and content marketing may take a few months to generate consistent leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
