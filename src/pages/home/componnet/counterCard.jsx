// import React, { useEffect, useState, useRef } from "react";
// import "./CounterCard.css";

// const CounterCard = ({ target, label, subtitle, suffix = "", delay = 0 }) => {
//   const [count, setCount] = useState(0);
//   const requestRef = useRef();
//   const startTimeRef = useRef();
//   const pausedRef = useRef(false);

//   const duration = 2000; // 2 seconds for count up
//   const pauseDuration = 1000; // 1 second pause after reaching target


//   const animate = (timestamp) => {
//   if (!startTimeRef.current) startTimeRef.current = timestamp;
//   const elapsed = timestamp - startTimeRef.current;

//   if (elapsed < duration) {
//     const progress = elapsed / duration;
//     setCount(Math.floor(progress * target));
//     requestRef.current = requestAnimationFrame(animate);
//   } else {
//     setCount(target);
//     // Stop animation here — no reset or restart
//   }
// };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       requestRef.current = requestAnimationFrame(animate);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//       cancelAnimationFrame(requestRef.current);
//     };
//   }, [target, delay]);

//   return (
//     <div className="counter-card">
//       <div className="counter-text">{count}{suffix}</div>
//       <div className="label">{label}</div>
//       {subtitle && <div className="subtitle">{subtitle}</div>}
//     </div>
//   );
// };

// const CardListCounter = () => {
//   const counters = [
//     { target: 21, label: "Years of Experience", suffix: "+", delay: 0 },
//     { target: 500, label: "Projects Completed", suffix: "+", delay: 300 },
//     { target: 10000, label: "Designs Created", suffix: "+", delay: 600 },
//     { target: 96, label: "Customer Retention", suffix: "%", delay: 900 },
//   ];

//   return (
//     <div className="card-grid">
//       {counters.map((item, index) => (
//         <CounterCard
//           key={index}
//           target={item.target}
//           label={item.label}
//           subtitle={item.subtitle}
//           suffix={item.suffix}
//           delay={item.delay}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardListCounter;



// import React, { useEffect, useState, useRef } from "react";
// import "./CounterCard.css";

// const CounterCard = ({
//   target,
//   label,
//   subtitle,
//   suffix = "",
//   delay = 0,
//   trigger ,
// }) => {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const requestRef = useRef();
//   const startTimeRef = useRef();
//   const duration = 2000;

//   const animate = (timestamp) => {
//     if (!startTimeRef.current) startTimeRef.current = timestamp;
//     const elapsed = timestamp - startTimeRef.current;

//     if (elapsed < duration) {
//       const progress = elapsed / duration;
//       setCount(Math.floor(progress * target));
//       requestRef.current = requestAnimationFrame(animate);
//     } else {
//       setCount(target);
//     }
//   };

//   useEffect(() => {
//     if (trigger && !hasAnimated) {
//       const timer = setTimeout(() => {
//         startTimeRef.current = null;
//         requestRef.current = requestAnimationFrame(animate);
//         setHasAnimated(true);
//       }, delay);

//       return () => {
//         clearTimeout(timer);
//         cancelAnimationFrame(requestRef.current);
//       };
//     }
//   }, [trigger, delay, hasAnimated]);

//   console.log("Trigger received in CounterCard:", trigger);


//   return (
//     <div className="counter-card">
//       <div className="counter-text">
//         {count}
//         {suffix}
//       </div>
//       <div className="label">{label}</div>
//       {subtitle && <div className="subtitle">{subtitle}</div>}
//     </div>
//   );
// };

// const CardListCounter = ({ trigger }) => {
//   const counters = [
//     { target: 21, label: "Years of Experience", suffix: "+", delay: 0 },
//     { target: 500, label: "Projects Completed", suffix: "+", delay: 300 },
//     { target: 10000, label: "Designs Created", suffix: "+", delay: 600 },
//     { target: 96, label: "Customer Retention", suffix: "%", delay: 900 },
//   ];

//   return (
//     <div className="card-grid">
//       {counters.map((item, index) => (
//         <CounterCard key={index} {...item} trigger={trigger} />
//       ))}
//     </div>
//   );
// };

// export default CardListCounter;


import React, { useEffect, useState, useRef } from "react";
import "./CounterCard.css";

const CounterCard = ({
  target,
  label,
  subtitle,
  suffix = "",
  delay = 0,
  trigger,
}) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const duration = 2000;

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      setCount(Math.floor(progress * target));
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setCount(target);
    }
  };

  useEffect(() => {
    if (trigger) {
      setCount(0); // Reset count on trigger start
      startTimeRef.current = null;

      const timer = setTimeout(() => {
        requestRef.current = requestAnimationFrame(animate);
      }, delay);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(requestRef.current);
      };
    } else {
      // Reset state when trigger is false
      setCount(0);
      startTimeRef.current = null;
      cancelAnimationFrame(requestRef.current);
    }
  }, [trigger, delay, target]);

  return (
    <div className="counter-card">
      <div className="counter-text">
        {count}
        {suffix}
      </div>
      <div className="label">{label}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

const CardListCounter = ({ trigger }) => {
  const counters = [
    { target: 21, label: "Years of Experience", suffix: "+", delay: 0 },
    { target: 500, label: "Projects Completed", suffix: "+", delay: 300 },
    { target: 1000, label: "Designs Created", suffix: "+", delay: 600 },
    { target: 96, label: "Customer Retention", suffix: "%", delay: 900 },
  ];

  return (
    <div className="card-grid">
      {counters.map((item, index) => (
        <CounterCard key={index} {...item} trigger={trigger} />
      ))}
    </div>
  );
};

export default CardListCounter;

