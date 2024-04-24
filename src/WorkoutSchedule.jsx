import React from "react";
import { CiSearch } from "react-icons/ci";

const WorkoutSchedule = () => {
  const currentMonth = 2;
  const currentYear = 2024;

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const workouts = [
    { time: '07:30 AM', title: 'Ab Workout' },
    { time: '09:00 AM', title: 'Upperbody Workout' },
    { time: '03:00 PM', title: 'Lowerbody Workout' },
  ];

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="p-4 flex flex-col justify-center">
          <div className="flex flex-row justify-center items-center ">
            <div className="">
              <button className="p-2 bg-gray-300 rounded-lg mr-6 "> &lt; </button>
            </div>
            <div className="font-bold text-2xl capitalize ">Workout schedule</div>
          </div>
          <div className="flex flex-row mt-2 items-center justify-center p-2 ">
            <button>&lt;</button>
            <div className=" text-sm font-thin capitalize "> feb 2024</div>
            <button>&gt;</button>
          </div>
          <div className="flex flex-row p-2 justify-center items-stretch ">
            {weekdays.map((ele, i) => (
              <div key={i} className={`flex flex-col p-2 m-2 rounded-lg justify-center items-center ${i !== 1 ? '' : 'text-white bg-gradient-to-r from-indigo-400 to-indigo-500 border-none cursor-pointer ' }`}>
                <div className="text-sm">{ele}</div>
                <div className="text-2xl">{i + 5}</div>
              </div>
            ))}
          </div>
          
          {/* Schedules */}
          <div className="time-slots">
            {Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`).map((time) => (
              <div key={time} className="w-full p-2 border border-b font-bold text-md ">
                {time}
              </div>
            ))}
          </div>

          {/* Button at bottom right */}
          <div className="fixed bottom-20 right-10 z-50 mb-4 ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-3xl text-3xl " style={{
            background: 'linear-gradient(to right, #7B91FF, #95BEFF)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}>
              + 
            </button>
          </div>
        </div>

        {/* Navbar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white z-50 p-4 flex justify-evenly items-center border-t">
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
    </>
  );
}

export default WorkoutSchedule;
