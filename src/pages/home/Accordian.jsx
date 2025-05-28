import React from "react";
import "./accordian.css";

const accordionData = [
  {
    id: "1",
    title: "What is Webnest Media?",
    content:
      "Webnest Media is a full-service digital marketing agency that helps businesses enhance their online presence through a combination of innovative strategies and customized marketing solutions. Their expertise spans SEO, content marketing, social media management, pay-per-click advertising, and website development."
  },
  {
    id: "2",
    title: "What services does Webnest Media offer?",
    content:
      "Webnest Media provides a wide range of digital marketing services, including:\n" +
      "Search Engine Optimization (SEO): Optimizing websites to rank higher on search engines.\n" +
      "Pay-Per-Click (PPC) Campaigns: Paid advertising solutions on platforms like Google Ads and social media.\n" +
      "Content Marketing: Creating and distributing valuable content to attract and engage target audiences.\n" +
      "Social Media Management: Strategizing and executing campaigns across social media platforms to build brand awareness.\n" +
      "Web Design & Development: Creating user-friendly and responsive websites tailored to client needs."
  },
  {
    id: "3",
    title: "How can Webnest Media help my business grow?",
    content:
      "Webnest Media helps businesses by leveraging data-driven strategies that increase visibility, drive traffic, and convert leads into customers. They analyze industry trends, customer behaviors, and digital tools to build effective campaigns that enhance brand awareness and business performance."
  },
  {
    id: "4",
    title: "What makes Webnest Media different from other digital marketing agencies?",
    content:
      "What sets Webnest Media apart is its focus on creating tailored digital marketing strategies based on a deep understanding of each client’s goals. They combine creativity with data analysis to deliver measurable results, ensuring that marketing efforts align with business objectives."
  },
  {
    id: "5",
    title: "Does Webnest Media work with businesses of all sizes?",
    content:
      "Yes, Webnest Media works with businesses of all sizes, from startups to large corporations. They tailor their services to meet the specific needs and goals of each business, regardless of its size or industry."
  },
  {
    id: "6",
    title: "How does Webnest Media measure success?",
    content:
      "Webnest Media measures success through key performance indicators (KPIs), such as website traffic, conversion rates, ROI on advertising spend, and improved search engine rankings. They continuously monitor these metrics to optimize ongoing campaigns and ensure their clients' marketing efforts are achieving desired results."
  },
  {
    id: "7",
    title: "How long does it take to see results from digital marketing efforts?",
    content:
      "The timeline for seeing results varies depending on the specific service being utilized. For instance, SEO efforts may take a few months to show measurable results, while PPC campaigns can show immediate improvements. Webnest Media works with clients to set realistic expectations and track progress regularly."
  },
  {
    id: "8",
    title: "How can I get started with Webnest Media?",
    content:
      "To get started with Webnest Media, simply reach out through their website or contact them via phone or email. They’ll schedule a consultation to understand your business goals and tailor a digital marketing plan suited to your needs."
  },
  {
    id: "9",
    title: "Does Webnest Media offer custom packages?",
    content:
      "Yes, Webnest Media offers customized digital marketing packages based on the specific needs and goals of each business. This ensures that clients only pay for the services that will have the most impact on their business."
  },
  {
    id: "10",
    title: "Can Webnest Media improve my current digital marketing campaigns?",
    content:
      "Absolutely! Webnest Media can assess your current campaigns, identify areas for improvement, and provide expert guidance to enhance the performance of existing efforts. Whether it's refining SEO strategies, optimizing ad spend, or creating more engaging content, Webnest Media can help take your marketing campaigns to the next level."
  }
];


const Accordion = () => {
  return (
    <div>
      <div className="accordion-wrapper">
        {accordionData.map((item, index) => (
          <div className="accordion" key={item.id}>
            <input
              type="radio"
              name="radio-a"
              id={item.id}
              defaultChecked={index === 0} // first one checked by default
            />
            <label className="accordion-label" htmlFor={item.id}>
              {item.title}
            </label>
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
