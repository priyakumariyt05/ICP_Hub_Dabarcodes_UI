import React from 'react'
import TitleHeader from '../ReusableData/TitleHeader'
import PromotionTable from './PromotionTable'

const Expired = () => {
  const data = [
    { sku: 52, promotionId: 52, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '10.09.2024', endDate: '20.09.2024', discount: '20% off' },
    { sku: 152, promotionId: 152, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '12.08.2024', endDate: '12.10.2024', discount: '5% off' },
    { sku: 152, promotionId: 152, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '09.08.2024', endDate: '09.08.2024', discount: '20% off' },
    { sku: 36, promotionId: 36, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '20.07.2024', endDate: '20.07.2024', discount: '20% off' },
    { sku: 36, promotionId: 36, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '02.07.2024', endDate: '02.07.2024', discount: '20% off' },
    { sku: 94, promotionId: 94, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '18.06.2024', endDate: '18.06.2024', discount: '20% off' },
    { sku: 85, promotionId: 85, productName: 'Fresh Strawberries', subBrand: 'Berry Delight', startDate: '01.09.2024', endDate: '10.09.2024', discount: '15% off' },
    { sku: 24, promotionId: 24, productName: 'Natural Honey', subBrand: 'Bee Pure', startDate: '15.07.2024', endDate: '15.08.2024', discount: '10% off' },
    { sku: 63, promotionId: 63, productName: 'Avocado', subBrand: 'Green Farm', startDate: '05.05.2024', endDate: '15.05.2024', discount: '12% off' },
    { sku: 47, promotionId: 47, productName: 'Organic Apples', subBrand: 'Fruit Orchard', startDate: '01.04.2024', endDate: '15.04.2024', discount: '18% off' }
  ];
  return (
   <>
         <div className="p-6 min-h-screen">
    <TitleHeader title="Expired Promotions" />

    <PromotionTable data={data} />
    </div>
   </>
  )
}

export default Expired