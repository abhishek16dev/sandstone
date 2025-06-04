import React, { useEffect, useState, useRef } from 'react';
import './cm.css'; // Make sure this file has your styles

const ContentMarketing = () => {
  const [text, setText] = useState('');
  const words = ['HelloWorld'];
  const delay = 150;
  const pause = 1000;

  // Use refs to persist values without triggering re-renders
  const wordIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timeout;

    function type() {
      const currentWord = words[wordIndex.current];
      if (charIndex.current <= currentWord.length) {
        setText(currentWord.substring(0, charIndex.current));
        charIndex.current++;
        timeout = setTimeout(type, delay);
      } else {
        // Pause before moving to next word
        timeout = setTimeout(() => {
          charIndex.current = 0;
          wordIndex.current = (wordIndex.current + 1) % words.length;
          type();
        }, pause);
      }
    }

    type();

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div className="mt-[120px] px-4">
      <h1 className="text-3xl font-bold mb-4">Content Marketing</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hello, it's content marketing.
      </p>

      <h1>
        <mark id="typer" className="typer styled ml-2 px-2 b-8 f-250" style={{ color: 'black' }}>
          {text}
        </mark>
      </h1>
    </div>
  );
};

export default ContentMarketing;
