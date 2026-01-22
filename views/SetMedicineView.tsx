
import React, { useState } from 'react';
import { Medication } from '../types';

interface SetMedicineViewProps {
  onBack: () => void;
  onDone: (med: Medication) => void;
}

const SetMedicineView: React.FC<SetMedicineViewProps> = ({ onBack, onDone }) => {
  const [name, setName] = useState('');
  const [compartment, setCompartment] = useState(1);
  const [dailyFrequency, setDailyFrequency] = useState(3);
  const [startTime, setStartTime] = useState('07:00 AM');
  const [interval, setInterval] = useState(3);

  const handleSubmit = () => {
    if (name) {
      onDone({
        name,
        compartment,
        dailyFrequency,
        startTime,
        interval
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="bg-[#0099FF] p-4 flex justify-between items-center shadow-md shrink-0">
        <button onClick={onBack} className="p-1">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white text-xl font-extrabold uppercase">Set Medicine</h1>
        <button className="p-1">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[#0099FF] text-xl font-bold block ml-1">Medicine Name:</label>
          <input 
            type="text"
            placeholder="Insert"
            className="w-full bg-[#E6E6E6] rounded-3xl p-5 text-xl outline-none focus:ring-2 focus:ring-[#0099FF]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Compartment Grid */}
        <div className="space-y-2">
          <label className="text-[#0099FF] text-xl font-bold block ml-1">Compartment:</label>
          <div className="grid grid-cols-2 border-2 border-gray-300 rounded-2xl overflow-hidden">
            {[1, 3, 2, 4].map((num) => (
              <button 
                key={num}
                onClick={() => setCompartment(num)}
                className={`p-4 text-lg font-bold border ${
                  compartment === num 
                    ? 'bg-[#0099FF] text-white' 
                    : num === 1 ? 'bg-white text-gray-800' : 'bg-gray-100 text-gray-400'
                }`}
              >
                {num} ({num === 1 && compartment !== 1 ? 'Available' : (num === 1 ? 'Selected' : 'Loaded')})
              </button>
            ))}
          </div>
        </div>

        {/* Daily Frequency Wheel Simulation */}
        <div className="space-y-2">
          <label className="text-[#0099FF] text-xl font-bold block ml-1">Number of Pills:</label>
          <div className="bg-[#E6E6E6] rounded-3xl p-2 overflow-hidden flex flex-col items-center">
            <div className="text-gray-400 font-bold text-sm">2</div>
            <div className="w-full flex justify-between items-center px-8 py-2 border-y border-white">
              <span className="text-gray-500 font-bold">Daily</span>
              <span className="text-[#0099FF] text-3xl font-black">{dailyFrequency}</span>
              <span className="text-gray-500 font-bold">Times</span>
            </div>
            <div className="text-gray-400 font-bold text-sm">4</div>
          </div>
        </div>

        {/* Time Picker Wheel Simulation */}
        <div className="space-y-2">
          <label className="text-[#0099FF] text-xl font-bold block ml-1">Set Time:</label>
          <div className="bg-[#E6E6E6] rounded-3xl p-2 overflow-hidden flex flex-col items-center">
            <div className="w-full grid grid-cols-3 text-gray-400 font-bold text-sm justify-items-center">
              <span>6</span>
              <span>59</span>
              <span></span>
            </div>
            <div className="w-full grid grid-cols-3 items-center py-2 border-y border-white">
              <span className="text-[#0099FF] text-3xl font-black text-center">7</span>
              <span className="text-[#0099FF] text-3xl font-black text-center">: 00</span>
              <span className="text-[#0099FF] text-3xl font-black text-center">AM</span>
            </div>
            <div className="w-full grid grid-cols-3 text-gray-400 font-bold text-sm justify-items-center">
              <span>8</span>
              <span>01</span>
              <span>PM</span>
            </div>
          </div>
        </div>

        {/* Interval Picker Wheel Simulation */}
        <div className="space-y-2">
          <label className="text-[#0099FF] text-xl font-bold block ml-1">Time Interval:</label>
          <div className="bg-[#E6E6E6] rounded-3xl p-2 overflow-hidden flex flex-col items-center">
            <div className="text-gray-400 font-bold text-sm">2</div>
            <div className="w-full flex justify-center items-center px-8 py-2 border-y border-white space-x-4">
              <span className="text-[#0099FF] text-3xl font-black">{interval}</span>
              <span className="text-gray-500 font-bold">Hours</span>
            </div>
            <div className="text-gray-400 font-bold text-sm">4</div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex justify-end pt-4 pb-8">
          <button 
            onClick={handleSubmit}
            className="text-[#0099FF] text-3xl font-black hover:opacity-70 active:scale-95 transition-all"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

export default SetMedicineView;
