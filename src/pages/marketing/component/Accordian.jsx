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
            What is market research, and why is it important?


          </label>
          <div className="accordion-content">
            <p>
              Collecting and analyzing information about your target market, competitors, and market trends is known as market research. It’s crucial for making data-driven decisions, identifying growth opportunities, and understanding customer behavior to stay competitive.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">




            What are the main types of market research?

          </label>
          <div className="accordion-content">
            <p>




              The two primary types are:
              <ul className="list-disc pl-[15px]">
                <li className="list-disc "><strong>Primary research:</strong> Direct data from customer surveys, interviews, or focus groups.
                </li>
                <li className="list-disc"><strong>Secondary research:</strong> Existing data from industry reports, market analysis, or public sources.

                </li>
              </ul>


            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How do businesses use market insights?


          </label>
          <div className="accordion-content">
            <p>
              Market insights help businesses improve products, tailor marketing strategies, enhance customer experiences, and identify new opportunities for growth.

            </p>
          </div>
        </div>



        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            What is the difference between qualitative and quantitative research?


          </label>
          <div className="accordion-content">
            <p>


              <ul className="list-disc pl-[15px]">
                <li className="list-disc "><strong>Qualitative research</strong> explores customer opinions and emotional drivers (e.g., interviews, open-ended surveys).

                </li>
                <li className="list-disc"> <strong> Quantitative research</strong> uses statistical analysis of numerical data (e.g., online polls, structured surveys).


                </li>
              </ul>
            </p>

          </div>
        </div>


        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            What are market trends?


          </label>
          <div className="accordion-content">
            <p>

              Market trends are patterns or tendencies in a particular market over time. They can involve consumer behavior, technology, product development, and pricing strategies.


            </p>

          </div>
        </div>



      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
            How does market segmentation improve marketing efforts?

          </label>
          <div className="accordion-content">
            <p>
              Market segmentation divides the audience into subgroups based on demographics, behavior, or needs. This enables targeted marketing, improving ROI and conversion rates.


            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
            What are some common tools used in market research?


          </label>
          <div className="accordion-content">
            <p>
              Businesses often use tools like Google Forms, SurveyMonkey, Qualtrics, Google Analytics, and social media analytics platforms to collect and analyze data.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
            What role does data analytics play in market insights?

          </label>
          <div className="accordion-content">
            <p>
              Data analytics uncovers patterns and correlations in customer data, enabling smarter decisions and predictive forecasting. It transforms raw data into actionable insights.

            </p>
          </div>
        </div>


        <div className="accordion">
          <input type="checkbox" id="left-9" />
          <label className="accordion-label" htmlFor="left-9">
            How can small businesses conduct affordable market research?

          </label>
          <div className="accordion-content">
            <p>
              Small businesses can use free tools, conduct online surveys, engage in social media listening, and analyze customer reviews for valuable insights without a big budget.
            </p>

          </div>
        </div>


        <div className="accordion">
          <input type="checkbox" id="right-10" />
          <label className="accordion-label" htmlFor="right-10">
            How often should market research be conducted?


          </label>
          <div className="accordion-content">
            <p>
              Market research should be conducted regularly, especially before launching new products, entering new markets, or during major strategic planning phases.

            </p>

          </div>
        </div>



      </div>
    </div>
  );
};

export default Accordion;
