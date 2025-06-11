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
            Why is brand strategy important for my business?

          </label>
          <div className="accordion-content">
            <p>
              A well-defined brand strategy helps your business stand out, build trust, and connect emotionally with your audience. At WebNest Media, we tailor strategies that align with your goals and speak directly to your target market.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            What does a brand strategy include?

          </label>
          <div className="accordion-content">
            <p>
              A brand strategy covers your brand’s mission, values, voice, visual identity, messaging, and how you want your customers to feel about you. Our experts in India ensure every element works together to create a strong, lasting impression.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How does a brand strategy help in marketing?

          </label>
          <div className="accordion-content">
            <p>
              A strong strategy ensures consistency across all marketing channels—online, offline, social media, and beyond. WebNest Media helps you communicate clearly, so your brand story stays unified and memorable.

            </p>
          </div>
        </div>



        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            How long does it take to create a brand strategy?

          </label>
          <div className="accordion-content">
            <p>
              Every business is unique, but typically, a complete strategy takes a few weeks. At WebNest Media, we move efficiently—diving deep into your business to create a clear and actionable plan. </p>

          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
            Is a brand strategy the same as branding?

          </label>
          <div className="accordion-content">
            <p>
              Not exactly. Branding is the visual and creative part (like logos and colors). Brand strategy is the thinking behind it—the “why” and “how.” At WebNest Media, we bring both together for maximum impact.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
            Will brand strategy improve customer loyalty?

          </label>
          <div className="accordion-content">
            <p>
              Yes, when people resonate with your brand’s values and message, they’re more likely to return. Our strategy builds that emotional connection and loyalty over time.

            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
            Do I need to update my brand strategy over time?

          </label>
          <div className="accordion-content">
            <p>
              Definitely. Markets change, audiences evolve, and your brand should too. WebNest Media provides adaptable techniques that change as your company expands.

            </p>
          </div>
        </div>


        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            How long does it take to create a brand strategy?

          </label>
          <div className="accordion-content">
            <p>
              Every business is unique, but typically, a complete strategy takes a few weeks. At WebNest Media, we move efficiently—diving deep into your business to create a clear and actionable plan. </p>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Accordion;
