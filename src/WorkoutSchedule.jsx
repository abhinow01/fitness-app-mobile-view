import React, { useState } from 'react';

const WorkoutSchedule = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderDays = () => {
    const days = [];
    const numDays = daysInMonth(currentMonth, currentYear);

    for (let i = 1; i <= numDays; i++) {
      days.push(
        <div key={i} className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full">
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-3xl font-bold">Workout Schedule</h1>
        <div className="flex items-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handlePrevMonth}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="px-4">{`${monthNames[currentMonth]} ${currentYear}`}</span>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={handleNextMonth}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-4">
        <div className="w-10 h-10 flex items-center justify-center font-bold">Sun</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Mon</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Tue</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Wed</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Thu</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Fri</div>
        <div className="w-10 h-10 flex items-center justify-center font-bold">Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderDays()}
      </div>
      <div className="mt-8">
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
          <p>Ab Workout, 7:30am</p>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          <p>Upperbody Workout, 9am</p>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <p>Lowerbody Workout, 3pm</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">
          <i className="fas fa-home"></i>
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">
          <i className="fas fa-chart-line"></i>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          <i className="fas fa-plus"></i>
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">
          <i className="fas fa-user"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutSchedule;