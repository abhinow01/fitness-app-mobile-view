import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoalSelection = () => {
  const [formData, setFormData] = useState({
    goals: []
  });
 const navigate = useNavigate();
  const handleGoalSelection = (selectedGoal) => {
    const isSelected = formData.goals.includes(selectedGoal);

    const updatedGoals = isSelected
      ? formData.goals.filter((goal) => goal !== selectedGoal)
      : [...formData.goals, selectedGoal];

    setFormData((prevData) => ({ ...prevData, goals: updatedGoals }));
  };

  return (
    <div className="flex flex-col items-center justify-around h-screen">
        <div className='mt-4 w-full  flex flex-col  items-center justify-center'>
      <h1 className="text-xl font-bold mb-4">What are your goals?</h1>
      <div className="mb-4 w-full ml-16">
        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>Weight Loss</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('Weight Loss')}
            onChange={() => handleGoalSelection('Weight Loss')}
            className="mr-2 h-4 w-4 rounded-md "
          />
          </div>
        </div>
        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>Muscle Gain</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('Muscle Gain')}
            onChange={() => handleGoalSelection('Muscle Gain')}
            className="mr-2 h-4 w-4 rounded-md bg-gray-200 border border-blue-300"
          />
          </div>
        </div>
        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>Flexibility and Mobility</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('Flexibility and Mobility')}
            onChange={() => handleGoalSelection('Flexibility and Mobility')}
            className="mr-2 h-4 w-4 rounded-md bg-gray-200 border border-blue-300"
          />
          </div>
        </div>
        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>General Fitness</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('General Fitness')}
            onChange={() => handleGoalSelection('General Fitness')}
            className="mr-2 h-4 w-4 rounded-md bg-gray-200 border border-blue-300"
          />
          </div>
        </div>
        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>Event - specific training</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('Event - specific training')}
            onChange={() => handleGoalSelection('Event - specific training')}
            className="mr-2 h-4 w-4 rounded-md bg-gray-200 border border-blue-300"
          />
          </div>
        </div>

        <div className="flex flex-row justify-between bg-gray-200 rounded-lg items-center mb-2 p-4 w-4/5">
        <div className='font-bold text-sm '><label>Mindfulness and Mental Health</label></div>
        <div>
          <input
            type="checkbox"
            checked={formData.goals.includes('Mindfulness and Mental Health')}
            onChange={() => handleGoalSelection('Mindfulness and Mental Health')}
            className="mr-2 h-4 w-4 rounded-md bg-gray-200 border border-blue-300"
          />
          </div>
        </div>
      </div>
      </div>
      <div className='mb-4 flex items-center justify-center w-full'>
      <button
        className=" text-white font-bold py-2 px-4 rounded w-4/5 "
        style={{
            background: 'linear-gradient(to right, #7B91FF, #95BEFF)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        onClick={() => navigate('/workout-tracker') }
      >
        Confirm
      </button>
      </div>
    </div>
  );
};

export default GoalSelection;
