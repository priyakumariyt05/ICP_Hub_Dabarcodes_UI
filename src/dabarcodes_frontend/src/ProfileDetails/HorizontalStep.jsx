import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const HorizontalStep = ({ currentStep }) => {
  const [isVisible, setIsVisible] = useState(true);
  const steps = [
    { step: 1 },
    { step: 2 },
    { step: 3 },
    { step: 4 },
    { step: 5 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <ul className="flex justify-center items-center gap-4 w-fit mx-auto md:hidden mt-4">
        {steps.map(({ step }, index) => (
          <li key={step} className="relative flex items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                currentStep >= step
                  ? "bg-[#0E95F5] text-white"
                  : "bg-[#b9bfc4] text-white"
              }`}
            >
              {currentStep > step ? <FaCheck /> : step}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 h-[2px] ${
                  currentStep > steps[index + 1].step - 1
                    ? "bg-[#0E95F5]"
                    : "bg-[#b9bfc4]"
                }`}
              ></div>
            )}
          </li>
        ))}
      </ul>
    )
  );
};

export default HorizontalStep;
