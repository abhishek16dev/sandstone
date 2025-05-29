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
            What is Webnest Media?
          </label>
          <div className="accordion-content">
            <p>
              Webnest Media is a full-service digital marketing agency that helps businesses
              enhance their online presence through a combination of innovative strategies and
              customized marketing solutions. Their expertise spans SEO, content marketing,
              social media management, pay-per-click advertising, and website development.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-2" />
          <label className="accordion-label" htmlFor="left-2">
            What services does Webnest Media offer?
          </label>
          <div className="accordion-content">
            <p>
              Webnest Media provides a wide range of digital marketing services including:
              SEO, PPC, content marketing, social media management, and web development.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-3" />
          <label className="accordion-label" htmlFor="left-3">
            How can Webnest Media help my business grow?
          </label>
          <div className="accordion-content">
            <p>
              Webnest Media increases visibility, drives traffic, and converts leads using
              data-driven strategies aligned with your business goals.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-4" />
          <label className="accordion-label" htmlFor="left-4">
            What makes Webnest Media different?
          </label>
          <div className="accordion-content">
            <p>
              Webnest Media crafts tailored digital strategies with a balance of creativity
              and data to meet your business objectives.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="left-5" />
          <label className="accordion-label" htmlFor="left-5">
            Do they work with all business sizes?
          </label>
          <div className="accordion-content">
            <p>
              Yes, from startups to enterprises, Webnest Media tailors services to fit the
              specific needs of any business.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="accordion-column">
        <div className="accordion">
          <input type="checkbox" id="right-6" />
          <label className="accordion-label" htmlFor="right-6">
            How does Webnest Media measure success?
          </label>
          <div className="accordion-content">
            <p>
              Success is measured through KPIs like traffic, conversions, ROI, and rankings.
              Continuous optimization is key.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-7" />
          <label className="accordion-label" htmlFor="right-7">
            How long to see results?
          </label>
          <div className="accordion-content">
            <p>
              SEO results take months; PPC shows faster results. Timelines depend on the
              strategy.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-8" />
          <label className="accordion-label" htmlFor="right-8">
            How to get started?
          </label>
          <div className="accordion-content">
            <p>
              Contact Webnest Media via their website, phone, or email. Schedule a consultation
              to begin.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-9" />
          <label className="accordion-label" htmlFor="right-9">
            Do they offer custom packages?
          </label>
          <div className="accordion-content">
            <p>
              Yes. Packages are tailored to your business goals and needs to maximize ROI.
            </p>
          </div>
        </div>

        <div className="accordion">
          <input type="checkbox" id="right-10" />
          <label className="accordion-label" htmlFor="right-10">
            Can they improve existing campaigns?
          </label>
          <div className="accordion-content">
            <p>
              Yes. Webnest Media audits current efforts, identifies gaps, and optimizes for
              better performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
