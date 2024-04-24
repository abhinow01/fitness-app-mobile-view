import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const navigateToLogin = ()=>{
    setTimeout(()=>{navigate('/welcome-back')},1000)
    console.log("Next step handler");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleNextStep = () => {
    // Implement your logic for handling next step here
    notify();
    setTimeout(()=>{navigate('/goal-selection')},1000)
    console.log("Next step handler");
  };

  const notify = ()=> toast('account created successfully !');


  return (
    <div className="flex flex-col justify-between h-screen">
      <ToastContainer/>
      <div className='mt-6 py-2 '>
        <div className='flex'>
          <h1 className="text-xl font-bold mb-4 ml-8 mt-4 ">Create an account</h1>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className="mb-4 flex w-full">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border-none p-4 rounded-xl w-4/5 ml-8 bg-gray-200 font-bold text-sm "
            />
          </div>
          <div className="mb-4 flex w-full">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border-none p-4 rounded-xl w-4/5 ml-8 bg-gray-200 font-bold text-sm "
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-none p-4 rounded-xl w-4/5 ml-8 bg-gray-200 font-bold text-sm "
            />
          </div>
          <div className="mb-4 w-full">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="border-none p-4 rounded-xl w-4/5 ml-8 bg-gray-200 font-bold text-sm "
            />
          </div>
        </div>
      </div>
      <div className='mb-6 py-2 '>
        <div className="flex flex-col justify-center items-center mb-4">
          <div className='mb-4 w-4/5'>
            <button
              className="text-sm py-2 px-4 rounded-lg w-full"
              style={{
                background: 'linear-gradient(to right, #7B91FF, #95BEFF)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleNextStep}
            >
              Create an Account
            </button>
          </div>
          <div className='flex items-center w-full'>
            <div className='border-b border-gray-400 w-4/5 m-2'></div>
            <div className='text-gray-500 font-bold'>Or</div>
            <div className='border-b border-gray-400 w-4/5 m-2'></div>
          </div>
        </div>
        <div className='flex flex-col items-center '>
          <div className='flex flex-row items-center justify-center'>
            <div className='m-2 '>
              <button className='p-4  border border-gray-400 rounded-xl '><img src='/flat-color-icons_google.png' style={{ height: 15, width: 15 }} alt="Google" /></button>
            </div>
            <div className='m-2 '>
              <button className='p-4 border border-gray-400 rounded-xl '><FaFacebookF /></button>
            </div>
          </div>
          <div>
            <p className="text-center">
              Already have an account? <button className="text-blue-500" onClick={navigateToLogin}>Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
