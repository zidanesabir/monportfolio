// src/chatbot/ScrollButton.jsx

import React from 'react';

const ScrollButton = (props) => {
  const { sectionId, label } = props.payload;

  const handleScroll = () => {
    props.actionProvider.scrollToSection(sectionId);
  };

  return (
    <button
      onClick={handleScroll}
      className="bg-yellow-500 text-amber-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
    >
      {label}
    </button>
  );
};

export default ScrollButton;