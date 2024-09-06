import React from 'react'

const PartnerSection = () => {
  const partners  = [
  {
    id: 1,
    name: 'Aspen Online',
    image: '/image/& Image.png', 
  },
  {
    id: 2,
    name: 'Crop and Highlight',
    image: '/image/& Image (1).png', 
  },
  {
    id: 3,
    name: 'N Partners',
    image: '/image/& Image (2).png', 
  },
  {
    id: 4,
    name: 'Millssy',
    image: '/image/img2.png', 
  },
  {
    id: 5,
    name: 'Peppermint',
    image: '/image/_logo.png', 
  },
  {
    id: 6,
    name: 'Pixie Labs',
    image: '/image/_logo (1).png',
  },
];

  return (
    <div id="partner" className="partners-container ">
      <h2 className="text-center text-3xl font-bold mb-8">Our Partners</h2>
      <div className="partners-logos">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-item">
            <img
              src={partner.image}
              alt={partner.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;