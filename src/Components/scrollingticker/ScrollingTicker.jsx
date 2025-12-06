import React from 'react'
import { SiNike } from "react-icons/si";

const messages = [
    "Freshly roasted coffee delivered to your door!",
    "Enjoy the rich aroma of our premium coffee beans ",
    "Subscribe and never run out of your favorite coffee ",
    "Limited edition flavors grab yours today! ",
    "Brew happiness in every cup ",
    "Coffee that wakes up your senses ",
    "Hand-picked beans from around the world "
  ];
  
  const ScrollingTicker = () => {
    const tickerMessages = [...messages, ...messages]; // دوبار تکرار برای حرکت یکسره
  
    return (
      <div className="overflow-hidden relative bg-black p-3 w-full">
        <div
          className="flex whitespace-nowrap"
          style={{
            display: "inline-flex",
            animation: "scrollTicker 25s linear infinite"
          }}
        >
          {tickerMessages.map((msg, idx) => (
            <span key={idx} className="flex gap-3 mx-5 items-center text-white font-medium">
              <SiNike className='text-5xl'/>
              {msg}
            </span>
          ))}
        </div>
  
        <style>{`
          @keyframes scrollTicker {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>
    );
  };
  
  export default ScrollingTicker;
  