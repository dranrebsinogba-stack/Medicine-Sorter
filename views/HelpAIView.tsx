
import React, { useState } from 'react';
import { getHealthAdvice } from '../services/geminiService';

interface HelpAIViewProps {
  onBack: () => void;
}

const HelpAIView: React.FC<HelpAIViewProps> = ({ onBack }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const advice = await getHealthAdvice(query);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <header className="bg-[#0099FF] p-4 flex justify-between items-center shadow-md shrink-0">
        <button onClick={onBack} className="p-1">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-white text-xl font-extrabold uppercase">Health AI Assistant</h1>
        <div className="w-8" />
      </header>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="bg-[#0099FF]/10 p-6 rounded-3xl border-2 border-[#0099FF]/20">
          <h2 className="text-[#0099FF] text-xl font-bold mb-2">Ask anything about your health</h2>
          <p className="text-gray-600 text-sm">Example: "What should I do if I missed a dose?" or "Benefits of tracking blood oxygen."</p>
        </div>

        <div className="space-y-4">
          <textarea 
            className="w-full bg-[#F5F5F5] rounded-3xl p-5 text-lg outline-none border-2 border-transparent focus:border-[#0099FF] min-h-[120px]"
            placeholder="Type your question here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={handleAsk}
            disabled={loading || !query.trim()}
            className={`w-full bg-[#0099FF] text-white py-4 rounded-3xl text-xl font-bold shadow-lg transition-all ${
              loading || !query.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-95'
            }`}
          >
            {loading ? 'Consulting Gemini...' : 'Ask AI Assistant'}
          </button>
        </div>

        {response && (
          <div className="bg-white rounded-3xl p-6 border-2 border-[#0099FF]/30 shadow-sm animate-fade-in">
            <h3 className="text-[#0099FF] font-black text-lg mb-2 uppercase">Advice:</h3>
            <p className="text-gray-800 leading-relaxed font-medium">{response}</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HelpAIView;
