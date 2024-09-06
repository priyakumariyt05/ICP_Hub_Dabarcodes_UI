import React from 'react'
import CardOverlay from './CardOverlay'

const OverlayMultiple = () => {
    const productData = {
        name: "Nestle Ice Coffee",
        image: "/image/drink.png",
        originalPrice: 37,
        discountedPrice: 32,
        discountLabel: "15",
      
        validUntil: "Sept 19, 2024",
        promoter: "Urban Grocers",
        description: "Super smooth and creamy vanilla half and half crowned with a rich, bold coffee essence...",
        brand: "Nestle",
        flavor: "Vanilla",
        consistency: "Creamy",
        itemWeight: "500g"
      };
      
      const qrCodeImage = "/image/image 63.png";
      
      const retailer = "GT Retailer Ltd.";
  return (
    <>
      <div>
      <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />
            <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />      <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />
            <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />
            <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />
            <CardOverlay
        product={productData}
        qrCodeImage={qrCodeImage}
        retailer={retailer}
      
      />
    </div>
  
    </>
  )
}

export default OverlayMultiple

