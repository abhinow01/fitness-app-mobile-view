import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetBurn = () => {
    const navigate = useNavigate();
    const handleNextStep = ()=>{
        navigate('/create-account');
    }
  return (
    <div className="flex flex-col  justify-around h-screen">
 <div className='flex flex-row justify-end'>
    <button
        className="text-underline-offset: auto  text-blue-700 font-bold py-2 px-4 rounded"
        onClick={handleNextStep}
      >
        Skip
      </button>
      </div> 

      <div className='p-2 flex justify-center '>
        <img src='/get_burn.png' />
      </div>

      <h1 className="text-xl align-left font-bold  px-2 ">Get Burn</h1>
      <p className="text-left text-sm text-gray-400 mb-6 px-2 ">
        Let's keep burning to achieve your goals , it hurts only temporarily , if you give up now you will be in pain forever .
      </p>
      <div className=' flex justify-end '>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleNextStep}
      >
        Skip
      </button>
      </div>
    </div>
  );
};

export default GetBurn;