import React, { useState } from 'react';
import { FaRegWindowMaximize } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const FeedbackForm = ({ handleComponentSwitch }) => {
  const [selectedRating, setSelectedRating] = useState('Good');
  const [additionalFeedback, setAdditionalFeedback] = useState('');
  const [isContactable, setIsContactable] = useState(false);

  const ratings = [
    { label: 'Terrible', value: 'Terrible' },
    { label: 'Bad', value: 'Bad' },
    { label: 'Okay', value: 'Okay' },
    { label: 'Good', value: 'Good' },
    { label: 'Amazing', value: 'Amazing' }
  ];

  const handleSubmit = () => {
    const feedbackData = {
      rating: selectedRating,
      feedback: additionalFeedback,
      contactable: isContactable,
    };
    console.log(feedbackData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
    <div className="flex gap-4 text-balance">
          <IoArrowBack
            className="cursor-pointer"
            onClick={() => handleComponentSwitch("settings")}
            size={24}
          />
          <p>Back to General Settings</p>
        </div>
      <h1 className="text-2xl lg:text-3xl font-semibold mb-4 font-roboto">Support and Feedback</h1>
      
      <h2 className="text-lg md:text-xl font-medium mb-2 font-roboto">Feedback</h2>
      <p className="mb-4 font-roboto text-base md:text-lg">What do you think of the website daBARDODES?</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4 font-roboto">
        {ratings.map((rating) => (
          <button
            key={rating.value}
            className={`p-2 sm:p-4 border rounded-lg text-center ${
              selectedRating === rating.value ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedRating(rating.value)}
          >
            <FaRegWindowMaximize className="mx-auto text-xl sm:text-2xl md:text-3xl mb-2" />
            <span className="text-sm sm:text-base">{rating.label}</span>
          </button>
        ))}
      </div>
      
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 font-roboto text-sm sm:text-base"
        rows="3"
        placeholder="Write here..."
        value={additionalFeedback}
        onChange={(e) => setAdditionalFeedback(e.target.value)}
      ></textarea>
      

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="contactMe"
          className="mr-2"
          checked={isContactable}
          onChange={(e) => setIsContactable(e.target.checked)}
        />
        <label htmlFor="contactMe" className="font-roboto text-sm sm:text-base">
          I may be contacted about this feedback. <a href="#" className="text-blue-600">Privacy Policy</a>
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default FeedbackForm;
