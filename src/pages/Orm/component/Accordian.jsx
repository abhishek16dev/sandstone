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
            What is Online Reputation Management (ORM)?


          </label>
          <div className="accordion-content">
            <p>
              Online reputation management involves monitoring, improving, and maintaining how your brand appears online. It includes managing reviews, responding to feedback, suppressing negative content, and promoting positive information.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            Why is online reputation important for businesses?


          </label>
          <div className="accordion-content">
            <p>
              People search online before making buying decisions. A strong reputation builds trust and increases conversions, while negative content or reviews can drive potential customers away—even if your product or service is good.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            Can negative reviews be removed from the internet?

          </label>
          <div className="accordion-content">
            <p>
              In some cases, yes—if the content violates platform guidelines or is defamatory. Otherwise, ORM focuses on minimizing its impact by promoting positive content and improving overall sentiment.


            </p>
          </div>
        </div>



        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            How do I know if my brand needs reputation management?

          </label>
          <div className="accordion-content">
            <p>
              If you’ve received negative reviews, dropped in search rankings, or noticed public criticism online, it’s a sign your brand could benefit from professional ORM services.
            </p>

          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
            How long does it take to see results from ORM efforts?


          </label>
          <div className="accordion-content">
            <p>
              Results vary based on the situation. While major reputation repair may take several months, minor difficulties can be resolved in a few weeks. Consistent effort is key for long-term improvement.


            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
            Is ORM only for large businesses or public figures?


          </label>
          <div className="accordion-content">
            <p>
              No. Reputation management is crucial for all businesses, including startups, small businesses, and professionals. Even a few negative reviews can impact local customers and online credibility.


            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
            What platforms are most affected by online reputation?


          </label>
          <div className="accordion-content">
            <p>
              Search engines (like Google), review platforms (like Google Reviews, Yelp, Trustpilot), and social media (Facebook, Twitter, Instagram) are key channels where your reputation is shaped.

            </p>
          </div>
        </div>


        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            What’s the difference between SEO and ORM?


          </label>
          <div className="accordion-content">
            <p>
              SEO focuses on ranking your website higher in search engines, while ORM focuses on managing what users see when they search your brand—including reviews, news, and social content.
            </p>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Accordion;
