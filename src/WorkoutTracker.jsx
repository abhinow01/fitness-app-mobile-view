import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '12:00', calories: 900 },
  { name: '6:00', calories: 600 },
  { name: '12:00', calories: 1200 },
  { name: '6:00', calories: 600 },
];

const WorkoutTracker = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-center">Workout Tracker</h1>
      <div className="mb-4 text-center">
        <p className="text-green-500">Good job</p>
        <p className="text-sm">less than 320cal</p>
      </div>
      <div className="mb-4 text-center">
        <p className="text-red-500">You've burned fewer calories than yesterday. Time to get moving!</p>
      </div>
      <BarChart width={300} height={200} data={data} className="mx-auto">
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="calories" barSize={5} // set the width of bars
          // customize the color of bars above 450 calories
          fill={(value) => value > 450 ? "red" : "#8884d8"} />
      </BarChart>
      <div className="mt-4">
        <div className='flex flex-row justify-between items-center'>
        <div><h2 className="text-xl font-bold mb-2">Upcoming Workout</h2></div>
        <div className='text-sm text-gray-500'><a href='#'>see more</a></div>
        </div>
        <div className="mb-2">
          <div className="flex items-center border border-gray-200 rounded-lg p-2 ">
            <img src="full-body-workout-icon.png" alt="Full Body Workout" className="w-8 h-8 mr-2" />
            <div>
              <p>Full Body Workout</p>
              <p>Today 3pm</p>
            </div>
            <input type="checkbox" className="form-checkbox ml-auto" />
          </div>
        </div>
        <div className="mb-2">
          <div className="flex items-center">
            <img src="upper-body-workout-icon.png" alt="Upper Body Workout" className="w-8 h-8 mr-2" />
            <div>
              <p>Upper Body Workout</p>
              <p>4 Feb, 3:30 pm</p>
            </div>
            <input type="checkbox" className="form-checkbox ml-auto" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">What Do You Want to Train</h2>
        <div className="flex flex-wrap justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">Full Body Workout</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">Arms</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">Chest</button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
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

export default WorkoutTracker;
