import React from 'react';


const InfoSection = ({ title, imgSrc, items }) => {
  return (
    <div className="Promotion ">
      <div className="Promotion-box">
        <div className="img">
          <img src={imgSrc} alt="image" />
        </div>
        <div className="Promotion-container">
          <h2 className='font-butler'>{title}</h2>
          <div className="PromotionContainer2">
            {items.map((item, index) => (
              <div className="Promotion-smallbox" key={index}>
                {item.icon && <item.icon className="Promotion-icon my-4" />}
                <h3 className='font-butler text-xl font-medium leading-6 text-center mb-2'>{item.heading}</h3>
                <p className='font-roboto text-sm font-normal leading-5 text-center text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;