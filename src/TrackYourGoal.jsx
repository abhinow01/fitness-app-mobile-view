import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrackYourGoal = () => {
    const navigate = useNavigate();
 const  handleNextStep = ()=>{
    navigate('/get-burn');
    }
  return (
    <div className="flex flex-col  justify-around h-screen">
 <div className='flex flex-row justify-end'>
    <button
        className="underline  text-blue-300 font-bold py-2 px-4 rounded"
        onClick={handleNextStep}
      >
        Skip
      </button>
      </div> 

      <div className='p-2 flex justify-center '>
        <img src='/track_your_goal.png' />
      </div>

      <h1 className="text-xl align-left font-bold  px-2 ">Track Your Goal</h1>
      <p className="text-left text-sm text-gray-400 mb-6 px-2 ">
        Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals
      </p>
      <div className=' flex justify-end '>
      <button
        className=" font-bold py-2 px-4 rounded mb-4"
        onClick={handleNextStep}
      >
       <img src='/skip-button.png'/>
      </button>
      </div>
    </div>
  );
};

export default TrackYourGoal;