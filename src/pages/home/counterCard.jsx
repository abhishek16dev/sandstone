import React, { useEffect, useState, useRef } from "react";
import "./CounterCard.css";

const CounterCard = ({ target, label, subtitle, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const pausedRef = useRef(false);

  const duration = 2000; // 2 seconds for count up
  const pauseDuration = 1000; // 1 second pause after reaching target

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;

    if (!pausedRef.current) {
      if (elapsed < duration) {
        const progress = elapsed / duration;
        setCount(Math.floor(progress * target));
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        pausedRef.current = true;
        setTimeout(() => {
          pausedRef.current = false;
          startTimeRef.current = null;
          setCount(0);
          requestRef.current = requestAnimationFrame(animate);
        }, pauseDuration);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(requestRef.current);
    };
  }, [target, delay]);

  return (
    <div className="counter-card">
      <div className="counter-text">{count}{suffix}</div>
      <div className="label">{label}</div>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </div>
  );
};

const CardListCounter = () => {
  const counters = [
    { target: 21, label: "Years of Experience", suffix: "+", delay: 0 },
    { target: 500, label: "Projects Completed", suffix: "+", delay: 300 },
    { target: 10000, label: "Designs Created", suffix: "+", delay: 600 },
    { target: 96, label: "Customer Retention", suffix: "%", delay: 900 },
  ];

  return (
    <div className="card-grid">
      {counters.map((item, index) => (
        <CounterCard
          key={index}
          target={item.target}
          label={item.label}
          subtitle={item.subtitle}
          suffix={item.suffix}
          delay={item.delay}
        />
      ))}
    </div>
  );
};

export default CardListCounter;
