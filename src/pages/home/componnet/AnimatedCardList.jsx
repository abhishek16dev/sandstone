// import React, { useEffect, useRef, useState } from 'react';
// import './animationcard.css';

// import Ecomm from "../resources/industries/Ecomm.svg"
// import Education from "../resources/industries/Education.svg"
// import FinanceBanking from "../resources/industries/Finance-Banking.svg"
// import Health from "../resources/industries/health.svg"
// import Realstate from "../resources/industries/Real-Estate.svg"
// import Restaurants from "../resources/industries/Restaurants.svg"
// import Retailers from "../resources/industries/Retailers.svg"
// import Startups from "../resources/industries/Startups.svg"
// import Technology from "../resources/industries/Technology.svg"
// import Travel from "../resources/industries/Travel.svg"

// const AnimatedCardList = ({  trigger}) => {

//   console.log(trigger,"trigger")
  
//   const wrapperRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

// const directions = [
//   { class: "from-left" },
//   { class: "from-right" },
//   { class: "from-top" },
//   { class: "from-bottom" },
// ];

//   const ballsData = [
//     { id: 1, content: "E-Commerce" , icon:Ecomm},
//     { id: 2, content: "Healthcare",icon:Health },
//     { id: 3, content: "Real Estate",icon:Realstate },
//     { id: 4, content: "Education",icon:Education },
//     { id: 5, content: "Restaurants" ,icon:Restaurants},
//     { id: 6, content: "Finance & Banking" ,icon:FinanceBanking},
//     { id: 7, content: "Travel & hospitality",icon:Travel },
//     { id: 8, content: "Technology" ,icon:Technology},
//     { id: 9, content: "Retailers",icon:Retailers },
//     { id: 10, content: "Startups" ,icon: Startups},
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Run once
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (wrapperRef.current) {
//       observer.observe(wrapperRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={wrapperRef}
//       className={`animatedcard ${isVisible ? 'visible' : ''}`}
//     >
//       <div className="card-list-container">
//         {ballsData.map((ball, i) => {
//           const direction = directions[i % directions.length];
//           return (
//             <div
//               key={ball.id}
//               className={`animated-card ${direction.class}`}
//               style={{
//                 '--animation-delay': `${i * 0.5}s`
//               }}
//             >
//                    <div className="image_wrapcard">
//                         <img src={ball.icon} className="  iconimage " />
//                       </div>
            
//                  <p className="text-[14px] text-[black] font-bold">{ball.content}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AnimatedCardList;


import React, { useEffect, useRef, useState } from 'react';
import './animationcard.css';

import Ecomm from "../resources/industries/Ecomm.svg";
import Education from "../resources/industries/Education.svg";
import FinanceBanking from "../resources/industries/Finance-Banking.svg";
import Health from "../resources/industries/health.svg";
import Realstate from "../resources/industries/Real-Estate.svg";
import Restaurants from "../resources/industries/Restaurants.svg";
import Retailers from "../resources/industries/Retailers.svg";
import Startups from "../resources/industries/Startups.svg";
import Technology from "../resources/industries/Technology.svg";
import Travel from "../resources/industries/Travel.svg";

const AnimatedCardList = ({ cardtrigger }) => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const directions = [
    { class: "from-left" },
    { class: "from-right" },
    { class: "from-top" },
    { class: "from-bottom" },
  ];

  const ballsData = [
    { id: 1, content: "E-Commerce", icon: Ecomm },
    { id: 2, content: "Healthcare", icon: Health },
    { id: 3, content: "Real Estate", icon: Realstate },
    { id: 4, content: "Education", icon: Education },
    { id: 5, content: "Restaurants", icon: Restaurants },
    { id: 6, content: "Finance & Banking", icon: FinanceBanking },
    { id: 7, content: "Travel & hospitality", icon: Travel },
    { id: 8, content: "Technology", icon: Technology },
    { id: 9, content: "Retailers", icon: Retailers },
    { id: 10, content: "Startups", icon: Startups },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`animatedcard ${isVisible ? 'visible' : ''}`}
    >
      <div className="card-list-container">
        {ballsData.map((ball, i) => {
          const direction = directions[i % directions.length];
          const animationClass = cardtrigger ? direction.class : 'reset';

          return (
            <div
              key={ball.id}
              className={`animated-card ${animationClass}`}
              style={{
                '--animation-delay': `${i * 0.2}s`
              }}
            >
              <div className="image_wrapcard">
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
