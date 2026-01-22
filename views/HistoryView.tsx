
import React from 'react';
import { IntakeRecord } from '../types';

interface HistoryViewProps {
  history: IntakeRecord[];
  onBack: () => void;
}

const HistoryView: React.FC<HistoryViewProps> = ({ history, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="bg-[#0099FF] p-4 flex justify-between items-center shadow-md shrink-0">
        <button onClick={onBack} className="p-1">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white text-xl font-extrabold uppercase">History</h1>
        <button className="p-1">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Tabs / Filter */}
      <div className="flex border-b-2 border-[#0099FF] shrink-0">
        <button className="flex-1 py-4 text-[#79C1FF] font-extrabold text-lg">Jan 01,2026</button>
        <button className="flex-1 py-4 text-[#0099FF] font-extrabold text-lg border-l-2 border-[#0099FF]">Today</button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto divide-y-2 divide-[#0099FF]/30">
        {history.map((record, idx) => (
          <div key={idx} className="p-6 flex items-start space-x-6">
            <div className="text-[#0099FF] font-black text-xl whitespace-nowrap min-w-[100px]">
              {record.timestamp}
            </div>
            <div className="flex-1">
              {record.type === 'MEDICINE' ? (
                <p className="text-[#4D4D4D] font-bold text-lg leading-snug">
                  {record.status}
                </p>
              ) : (
                <div className="space-y-1">
                  <p className="font-bold text-lg text-[#4D4D4D]">
                    Heart Rate: <span className="text-[#0099FF]">70 bpm</span>
                  </p>
                  <p className="font-bold text-lg text-[#4D4D4D]">
                    Blood Oxygen: <span className="text-[#0099FF]">98%</span>
                  </p>
                  <p className="font-bold text-lg text-[#4D4D4D]">
                    Body Temperature: <span className="text-[#0099FF]">30.2 °C</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryView;
