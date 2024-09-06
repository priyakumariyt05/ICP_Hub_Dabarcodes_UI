import { AiOutlineEdit } from 'react-icons/ai';

const PaymentDetailsCard = () => {
  return (
    <div className="max-w-sm p-4 text-black rounded-lg shadow-lg mx-auto" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Payment Details</h2>
        <AiOutlineEdit className="text-gray-600 cursor-pointer" />
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Card Type:</span>
          <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-6 h-6"/>
          <span className="text-sm">Visa</span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-medium">Card Number:</span>
          <span className="text-sm ml-2">** ** ** 1234</span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-medium">Card Holder Name:</span>
          <span className="text-sm ml-2">John Doe</span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-medium">Expiration Date:</span>
          <span className="text-sm ml-2">12/26</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsCard;