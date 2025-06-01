

import React, { useEffect, useRef, useState } from 'react';
import './animatedsmmcard.css';

import Ecomm from "../../home/resources/industries/Ecomm.svg";
import Education from "../../home/resources/industries/Education.svg";

import Health from "../../home/resources/industries/health.svg";
import Realstate from "../../home/resources/industries/Real-Estate.svg";
import Restaurants from "../../home/resources/industries/Restaurants.svg";


const AnimatedCardList = () => {


  const ballsData = [
    { id: 1, content: "Master Social", icon: Ecomm, hoverText: "Master Social is your go-to solution for effective social media management, offering tools and strategies to grow your brand" },
    { id: 2, content: "Social Strategy Hub", icon: Health, hoverText: "Social Strategy Hub is a central platform for creating, managing, and optimizing social media strategies to boost your brand’s online presence." },
    { id: 3, content: "Social Sync", icon: Realstate, hoverText: "Social Sync connects all your social media efforts into one seamless strategy—helping you plan, post, and grow your brand with consistency and impact." },
    { id: 4, content: "Engage Pro", icon: Education, hoverText: "Engage Pro is a powerful tool designed to boost audience interaction, streamline social media engagement, and build strong connections with your followers." },
  ];




  return (
    <div

      className="animatedcard1 mt-[50px]"
    >
      <div className="card-list-container1">

        {ballsData.map((ball, i) => {


          return (
            <div key={i} className="animated-card1">
              <div className="image_wrapcard1">
                <img src={ball.icon} className="iconimage" alt={ball.content} />
              </div>
              <p className="text-[14px] text-[black] font-bold">{ball.content}</p>


              <div className="card-hover-text font-normal text-[11px]">{ball.hoverText}</div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCardList;
