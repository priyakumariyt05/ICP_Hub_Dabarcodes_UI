

import React from 'react';

const StepSection = ({ title, steps }) => {
  return (
    <div className="Promotion-section-2">
      <div className="Promotion-section-2-box">
        <h2 className=''>{title}</h2>
      </div>
      <div className="Promotion-section-2-row">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="Promtion-section-2-coloumn">
              <img src={step.imgSrc} alt={`step-${index}`} />
              <h6 className=' text-xl leading-6 text-center font-medium my-4'>{step.heading}</h6>
              <p className='font-roboto text-sm font-normal leading-5 text-center text-gray-600'>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block relative w-48 h-0.5 mb-8 md:mb-0">
                {step.arrowImgSrc.map((arrow, arrowIndex) => (
                  <img
                    key={arrowIndex}
                    src={arrow}
                    alt={`arrow-${arrowIndex}`}
                    className={`absolute top-14 ${
                      arrowIndex % 2 === 0
                        ? "left-1/2 transform -translate-x-1/2"
                        : "right-1/2 transform translate-x-1/2"
                    }`}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
