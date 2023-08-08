interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is React?",
    answer: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
  },
  {
    question: "What is a component?",
    answer: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."
  },
  // Add more FAQs as needed
];

import React, { useState, useRef } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const getDynamicStyle = () => {
    if (activeIndex !== null && answerRef.current) {
      return {
        height: `${answerRef.current.scrollHeight}px`
      };
    }
    return { height: '0' };
  };

  return (
      <div className="faq-container">
        {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4 relative">
              <button
                  className="faq-question bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleClick(index)}
              >
                {faq.question}
              </button>
              <div
                  ref={answerRef}
                  style={getDynamicStyle()}
                  className="faq-answer mt-2 p-4 bg-gray-100 rounded absolute left-0 w-full overflow-hidden transition-height duration-300"
              >
                {activeIndex === index && faq.answer}
              </div>
            </div>
        ))}
      </div>
  );
}

export default FAQ;
