// import React from 'react'

// const ContentMarketing = () => {
//   return (
//     <div className='mt-[120px]'>
//       <p> hello its content marketing</p>
//     </div>
//   )
// }

// export default ContentMarketing


// File: ContentMarketing.jsx

import React, { useEffect, useState } from 'react';
import './cm.css'; // CSS moved to external file

const ContentMarketing = () => {
  const [text, setText] = useState('');
  const words = ['HelloWorld'];
  let currentWord = 0;
  let currentChar = 0;
  const delay = 150;

  useEffect(() => {
    const typerElement = document.getElementById('typer');

    function type() {
      if (currentChar <= words[currentWord].length) {
        setText(words[currentWord].substring(0, currentChar));
        currentChar++;
        setTimeout(type, delay);
      }
    }

    type();
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
