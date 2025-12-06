import React from 'react'
import { useState } from "react";

const FAQAccordion = () => {
    const faqs = [
        {
          id: 1,
          question: "What percentage of Younika coffee beans are Arabica?",
          answer: "Younika coffee beans are 100% Arabica.",
        },
        {
          id: 2,
          question: "How much caffeine is in Younika coffee beans?",
          answer: "The caffeine content varies depending on the roast level, but it generally contains a moderate amount.",
        },
        {
          id: 3,
          question: "What brewing methods are suitable for Younika coffee beans?",
          answer: "They work well with pour-over, espresso, French press, and cold brew methods.",
        },
        {
          id: 4,
          question: "How do we brew coffee using Younika beans?",
          answer: "Grind the beans according to your brewing method and adjust the ratio of water to coffee for taste.",
        },
      ];
    
      const [openId, setOpenId] = useState(null);
    
      const toggle = (id) => {
        setOpenId(openId === id ? null : id);
      };
    
      return (
        <div className="w-85 pt-5">      
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.id}
                className="border-3 border-black/10 rounded-sm p-4 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  <span
                    className={`transition-transform duration-200 ${
                      openId === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
    
                {openId === item.id && (
                  <div className="mt-3 text-gray-700 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  )
}

export default FAQAccordion