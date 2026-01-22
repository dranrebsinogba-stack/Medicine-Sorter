
import React from 'react';
import { View, UserProfile } from '../types';

interface DashboardViewProps {
  user: UserProfile;
  onOpenMenu: () => void;
  onNavigate: (view: View) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user, onOpenMenu, onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="bg-[#0099FF] p-4 pt-8 sm:pt-4 flex justify-between items-center shadow-md shrink-0">
        <div className="w-8" /> 
        <h1 className="text-white text-xl font-black uppercase truncate px-2 text-center tracking-tight">
          {user.firstName ? `${user.firstName}'s Health` : "Dashboard"}
        </h1>
        <button onClick={onOpenMenu} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Container */}
      <div className="flex-1 p-5 space-y-5 overflow-y-auto custom-scroll">
        
        {/* Next Dose Card - Hero element */}
        <div className="bg-[#0099FF] rounded-[2.5rem] p-8 flex flex-col items-center justify-center space-y-1 shadow-xl transform active:scale-[0.98] transition-transform">
          <span className="text-white/90 text-lg font-bold uppercase tracking-widest">Next Dose</span>
          <span className="text-white text-6xl font-black tracking-tighter">06:00</span>
          <span className="text-white text-2xl font-bold uppercase">PM</span>
        </div>

        {/* Last Check Card */}
        <div className="bg-[#0099FF] rounded-[2.5rem] p-6 shadow-xl space-y-4">
          <h3 className="text-white text-lg font-black uppercase tracking-widest text-center border-b border-white/20 pb-2">Last Check</h3>
          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col items-center text-center">
              <span className="text-white/80 text-[10px] font-black uppercase leading-tight h-8 flex items-center">Heart Rate</span>
              <div className="text-white flex flex-col items-center mt-1">
                <span className="text-xl font-black">70</span>
                <span className="text-[10px] font-bold">bpm</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center border-x border-white/20">
              <span className="text-white/80 text-[10px] font-black uppercase leading-tight h-8 flex items-center">Blood Oxygen</span>
              <div className="text-white flex flex-col items-center mt-1">
                <span className="text-xl font-black">98</span>
                <span className="text-[10px] font-bold">%</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-white/80 text-[10px] font-black uppercase leading-tight h-8 flex items-center">Body Temp</span>
              <div className="text-white flex flex-col items-center mt-1">
                <span className="text-xl font-black">30.2</span>
                <span className="text-[10px] font-bold">°C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-4 pb-4">
          <button 
            onClick={() => onNavigate(View.SET_MEDICINE)}
            className="bg-[#0099FF] rounded-[2.5rem] p-6 flex flex-col items-center justify-center space-y-3 shadow-xl hover:brightness-105 active:scale-95 transition-all aspect-square"
          >
            <div className="text-white bg-white/20 p-4 rounded-full">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 512 512">
                <path d="M414.4 79.2l-3.2-3.2c-47.5-47.5-124.4-47.5-171.9 0l-160 160c-47.5 47.5-47.5 124.4 0 171.9l3.2 3.2c47.5 47.5 124.4 47.5 171.9 0l160-160c47.5-47.5 47.5-124.4 0-171.9zM302.4 200.8c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3 32.8-12.5 45.3 0 12.5 32.8 0 45.3z"/>
              </svg>
            </div>
            <span className="text-white text-lg font-black uppercase tracking-tight">Set Med</span>
          </button>

          <button 
            onClick={() => onNavigate(View.HISTORY)}
            className="bg-[#0099FF] rounded-[2.5rem] p-6 flex flex-col items-center justify-center space-y-3 shadow-xl hover:brightness-105 active:scale-95 transition-all aspect-square"
          >
            <div className="text-white bg-white/20 p-4 rounded-full">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-white text-lg font-black uppercase tracking-tight">History</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardView;
