
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  onClose: () => void;
  onNavigate: (view: View) => void;
  activeView: View;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, onNavigate, activeView }) => {
  return (
    <>
      {/* Absolute backdrop restricted to the parent container */}
      <div 
        className="absolute inset-0 bg-black/40 z-40 transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Absolute menu restricted to the parent container */}
      <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-[#0099FF] z-50 flex flex-col shadow-2xl animate-slide-in border-l border-white/20">
        {/* Top Spacer */}
        <div className="h-20 flex items-center justify-end px-6 shrink-0">
          <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <div className="flex flex-col">
            {/* Home - Active with Dark Blue */}
            <button 
              onClick={() => onNavigate(View.DASHBOARD)}
              className={`w-full text-left px-10 py-6 text-white text-2xl font-black uppercase tracking-tight border-b border-white/10 transition-colors ${
                activeView === View.DASHBOARD ? 'bg-[#0055AA]' : 'hover:bg-white/10 active:bg-white/20'
              }`}
            >
              Home
            </button>

            {/* Profile */}
            <button 
              onClick={() => onNavigate(View.REGISTRATION)}
              className={`w-full text-left px-10 py-6 text-white text-2xl font-black uppercase tracking-tight border-b border-white/10 transition-colors ${
                activeView === View.REGISTRATION ? 'bg-[#0055AA]' : 'hover:bg-white/10 active:bg-white/20'
              }`}
            >
              Profile
            </button>

            {/* Help */}
            <button 
              onClick={() => onNavigate(View.HELP_AI)}
              className={`w-full text-left px-10 py-6 text-white text-2xl font-black uppercase tracking-tight border-b border-white/10 transition-colors ${
                activeView === View.HELP_AI ? 'bg-[#0055AA]' : 'hover:bg-white/10 active:bg-white/20'
              }`}
            >
              Help
            </button>

            {/* Settings */}
            <button 
              onClick={() => {}} 
              className="w-full text-left px-10 py-6 text-white text-2xl font-black uppercase tracking-tight border-b border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              Settings
            </button>

            {/* Exit */}
            <button 
              onClick={() => {
                // Exit functionality: Reset to registration for this demo
                onNavigate(View.REGISTRATION);
              }} 
              className="w-full text-left px-10 py-6 text-white text-2xl font-black uppercase tracking-tight border-b border-white/10 hover:bg-white/10 active:bg-white/20 transition-colors"
            >
              Exit
            </button>
          </div>
        </nav>

        {/* Bottom Logo or Branding */}
        <div className="p-10 mt-auto">
          <div className="text-white/40 text-xs font-black uppercase tracking-widest">HealthTrack v1.0</div>
        </div>
      </div>
      
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
