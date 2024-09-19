import React from "react";
import {FaCheck} from "react-icons/fa";

const VerticalStep = ({currentStep}) => {
  const steps = [
    {label: "Personal Details", step: 1},
    {label: "Contact Details", step: 2},
    {label: "Additional Information", step: 3},
    {label: "Privacy Preferences", step: 4},
    {label: "Create Password", step: 5},
  ];

  return (
    <ul className="md:block hidden ">
      {steps.map(({label, step}, index) => (
        <li key={step} className="relative flex items-center mb-12">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full relative z-10 ${
              currentStep >= step
                ? "bg-[#0E95F5] text-white"
                : "bg-[#b9bfc4] text-white"
            }`}
          >
            {currentStep > step ? <FaCheck /> : step}
          </div>
          <span
            className={`ml-4 text-[#333] font-medium ${
              currentStep === step ? "font-bold" : ""
            }`}
          >
            {label}
          </span>
          {index < steps.length - 1 && (
            <div
              className={`absolute left-4 top-10 h-[100%] w-[2px] ${
                currentStep > steps[index + 1].step - 1
                  ? "bg-[#0E95F5]"
                  : "bg-[#b9bfc4]"
              }`}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default VerticalStep;