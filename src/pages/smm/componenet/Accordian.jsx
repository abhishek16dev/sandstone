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
            What is social media marketing, really?
          </label>
          <div className="accordion-content">
            <p>
            Social media marketing is using platforms like Facebook, Instagram, LinkedIn, TikTok, and others to connect with your audience, build your brand, drive traffic, and increase sales. It's not just about posting pretty pictures—it's about strategy, storytelling, and relationships.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
           How do I choose the right social media platform for my business?
          </label>
          <div className="accordion-content">
            <p>
             Go where your audience hangs out. If you're B2B, LinkedIn is gold. Got a visually-driven brand? Instagram’s your friend. Selling to Gen Z? TikTok is booming. You don’t have to be everywhere—just where it makes sense   .
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
           How often should I post on social media?
          </label>
          <div className="accordion-content">
            <p>
             There’s no magic number, but consistency is key. A good starting point is 3–5 times per week. What matters more is staying regular and posting content that adds value
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
           Do I need a big following to be successful?
          </label>
          <div className="accordion-content">
            <p>
            Nope. A small, engaged audience often outperforms a large but inactive one. Focus on building real relationships. Engagement  vanity metrics
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
           What kind of content performs best on social media?
          </label>
          <div className="accordion-content">
            <p>
            Content that informs, entertains, inspires, or educates typically performs well. Think behind-the-scenes videos, how-tos, user-generated content, and relatable memes. Mix it up and test what resonates.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
          How do I grow my followers organically?
          </label>
          <div className="accordion-content">
            <p>
           Be consistent, create shareable content, use the right hashtags, engage with others, and don’t be afraid to collaborate. Avoid shortcuts like buying followers—they won’t help you in the long run.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
           What are some common mistakes to avoid in social media marketing?
          </label>
          <div className="accordion-content">
            <p>
             Trying to be on too many platforms, posting without a plan, ignoring engagement, using only salesy content, and neglecting your analytics. Oh, and don’t ghost your followers—reply to those comments! 
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
         How important are hashtags, really?
          </label>
          <div className="accordion-content">
            <p>
             Hashtags help your content get discovered, especially on platforms like Instagram and TikTok. Use a mix of trending, niche, and branded hashtags for the best reach. But don’t overdo it—5 to 10 well-chosen ones are better than 30 random ones
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-9" />
          <label className="accordion-label" htmlFor="right-9">
           What tools can help make social media marketing easier?
          </label>
          <div className="accordion-content">
            
<ul className="list-disc pl-5 space-y-2 text-gray-700">
  <li>Canva for design</li>
  <li>Buffer or Later for scheduling</li>
  <li>Trello or Notion for content planning</li>
  <li>Google Analytics or native insights for tracking performance</li>
</ul>


          
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-10" />
          <label className="accordion-label" htmlFor="right-10">
          How long does it take to see results from social media marketing?
          </label>
          <div className="accordion-content">
            <p>
             It depends on your strategy, consistency, and industry. Some see growth in weeks, others in months. It’s a long game—focus on building trust and value, and the results will follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
