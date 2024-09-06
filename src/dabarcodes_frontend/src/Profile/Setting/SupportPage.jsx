import React from 'react';
import ContactSupport from './ContactSupport';

const SupportPage = () => {
  return (
    <div>
      {/* Pass dynamic email and phone to ContactSupport */}
      <ContactSupport
        contactEmail="support@yourcompany.com" 
        contactPhone="+91 98183 23 2309" 
      />
    </div>
  );
};

export default SupportPage;
