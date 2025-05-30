

import React, { useEffect, useRef, useState } from 'react';
import './animatedsmmcard.css';

import Ecomm from "../../home/resources/industries/Ecomm.svg";
import Education from "../../home/resources/industries/Education.svg";

import Health from "../../home/resources/industries/health.svg";
import Realstate from "../../home/resources/industries/Real-Estate.svg";
import Restaurants from "../../home/resources/industries/Restaurants.svg";


const AnimatedCardList = () => {


  const ballsData = [
    { id: 1, content: "Master Social", icon: Ecomm },
    { id: 2, content: "Social Strategy Hub", icon: Health },
    { id: 3, content: "Social Sync", icon: Realstate },
    { id: 4, content: "Engage Pro", icon: Education },
 
  ,
  ];



  
  return (
    <div
    
      className="animatedcard1"
    >
      <div className="card-list-container1">
        {ballsData.map((ball, i) => {
       

          return (
            <div
              key={i}
              className=
              "animated-card1" 
            
            >
              <div className="image_wrapcard1">
                
                <img src={ball.icon} className="iconimage" alt={ball.content} />
              </div>
              <p className="text-[14px] text-[black] font-bold">{ball.content}</p>


            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCardList;
