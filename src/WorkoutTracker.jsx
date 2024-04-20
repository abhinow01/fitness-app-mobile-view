import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { CiSearch } from "react-icons/ci";

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
      
      <BarChart width={300} height={200} data={data} className="mx-auto">
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="calories"
          barSize={5}
          fill={(value) => (value > 450 ? "red" : "#8884d8")}
        />
      </BarChart>
      <div className="mb-4 ">
        <p className="border border-gray-400 p-4 rounded-lg bg-gradient-to-r from-indigo-300 to to-white  text-md ">You've burned fewer calories than yesterday. Time to get moving!</p>
      </div>
      <div className="mt-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2">Upcoming Workout</h2>
          </div>
          <div className="text-sm text-gray-500">
            <a href="#">see more</a>
          </div>
        </div>
        <div className="mb-2">
    <div className="flex items-center justify-between rounded-lg p-2 shadow-md">
        <img src="full-body-workout-icon.png" alt="Full Body Workout" className="w-12 h-12 mr-2" />
        <div>
            <p className=''>Full Body Workout</p>
            <p className='text-sm text-gray-400'>Today 3pm</p>
        </div>
        <label for="check" className='bg-gra-100 cursor-pointer relative w-20 h-10 rounded-full ml-8 '>
          <input type='checkbox' id='check' className='sr-only peer'/>
            <span className='w-2/5 h-4/5 bg-indigo-400 absolute rounded-full left-1 top-1 peer-checked:bg-indigo-600 peer:checked:  transition-all duration-500'></span>
          
        </label>
    </div>
</div>

        <div className="mb-2">
          <div className="flex items-center justify-between rounded-lg p-2 shadow-md ">
            <img src="upper-body-workout-icon.png" alt="Upper Body Workout" className="w-12 h-12 mr-2" />
            <div>
              <p>Upper Body Workout</p>
              <p className='text-sm text-gray-400 '>4 Feb, 3:30 pm</p>
            </div>
            <label for="check" className='bg-gra-100 cursor-pointer relative w-20 h-10 rounded-full ml-8 '>
          <input type='checkbox' id='check' className='sr-only peer'/>
            <span className='w-2/5 h-4/5 bg-indigo-400 absolute rounded-full left-1 top-1 peer-checked:bg-indigo-600 peer:checked:  transition-all duration-500'></span>
          
        </label>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">What Do You Want to Train</h2>
        <div className="flex flex-wrap p-2  rounded-lg " style={{
                background: 'linear-gradient(to right, #B3C7FF, #D6E6FF)',
                border: 'none',
                cursor: 'pointer',
              }}>
          <div className="flex flex-col  py-2 px-4 rounded mb-2 mr-2">
           <div className='font-bold flex flex-row justify-between'>
            <div>Full Body Workout</div> 
            <div className='ml-12'><img src='/body-workout.png' style={{height: 100, width:100}}/></div>
            </div> 
            <div className="">
            Arms
          </div>
          <div className="">
            Chest
          </div>
          </div>
          
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-white z-50 p-4 flex justify-evenly items-center border-t ">
    <button className="text-gray-800 font-bold py-2 px-4 rounded mr-2">
        <img src="/home.png" alt="Home" />
    </button>
    <button className="text-gray-800 font-bold py-2 px-4 rounded mr-2">
        <img src="/graph.png" alt="Graph" />
    </button>
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100px]">
        <button className="rounded-3xl flex items-center justify-center border border-b p-4 m-2" style={{
                background: 'linear-gradient(to right, #7B91FF, #95BEFF)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}><CiSearch /></button>
    </div>
    <button className="text-white font-bold py-2 px-4 rounded mr-2">
        <img src="/camera.png" alt="Camera" />
    </button>
    <button className="text-gray-800 font-bold py-2 px-4 rounded mr-2">
        <img src="/id.png" alt="ID" />
    </button>
</div>

    </div>
  );
};

export default WorkoutTracker;