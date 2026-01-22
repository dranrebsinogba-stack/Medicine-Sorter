
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface RegistrationViewProps {
  onNext: (profile: UserProfile) => void;
}

const RegistrationView: React.FC<RegistrationViewProps> = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName && age) {
      onNext({ firstName, lastName, age });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="bg-[#0099FF] p-5 pt-8 sm:pt-5 flex justify-center items-center shadow-md shrink-0">
        <h1 className="text-white text-2xl font-black uppercase tracking-widest">Registration</h1>
      </header>

      {/* Content */}
      <div className="flex-1 p-8 space-y-6 overflow-y-auto custom-scroll">
        <h2 className="text-[#0099FF] text-4xl font-black text-center mt-2">WELCOME!</h2>

        {/* Profile Pic Placeholder */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-100 shadow-inner">
            <svg className="w-20 h-20 text-gray-100" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <div className="absolute bottom-1 right-2 bg-[#0099FF] rounded-full p-2 border-2 border-white shadow-md">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[#0099FF] text-lg font-extrabold block ml-2">First Name:</label>
            <input 
              type="text"
              placeholder="Insert"
              className="w-full bg-[#F0F0F0] text-black placeholder-gray-500 rounded-[1.5rem] p-4 text-lg outline-none focus:ring-4 focus:ring-[#0099FF]/20 border-2 border-transparent focus:border-[#0099FF] transition-all"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0099FF] text-lg font-extrabold block ml-2">Last Name:</label>
            <input 
              type="text"
              placeholder="Insert"
              className="w-full bg-[#F0F0F0] text-black placeholder-gray-500 rounded-[1.5rem] p-4 text-lg outline-none focus:ring-4 focus:ring-[#0099FF]/20 border-2 border-transparent focus:border-[#0099FF] transition-all"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-[#0099FF] text-lg font-extrabold block ml-2">Age:</label>
            <input 
              type="number"
              placeholder="Insert"
              className="w-full bg-[#F0F0F0] text-black placeholder-gray-500 rounded-[1.5rem] p-4 text-lg outline-none focus:ring-4 focus:ring-[#0099FF]/20 border-2 border-transparent focus:border-[#0099FF] transition-all"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end pt-4 pb-4">
            <button 
              type="submit"
              className="text-[#0099FF] text-2xl font-black flex items-center hover:translate-x-1 transition-transform"
            >
              NEXT <span className="ml-1">&gt;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationView;
