
import React, { useState, useCallback } from 'react';
import { View, UserProfile, Medication, IntakeRecord } from './types';
import RegistrationView from './views/RegistrationView';
import DashboardView from './views/DashboardView';
import SetMedicineView from './views/SetMedicineView';
import HistoryView from './views/HistoryView';
import Sidebar from './components/Sidebar';
import HelpAIView from './views/HelpAIView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.REGISTRATION);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    age: '',
  });

  const [medications, setMedications] = useState<Medication[]>([]);
  const [history, setHistory] = useState<IntakeRecord[]>([
    { timestamp: '8:00 PM', type: 'MEDICINE', status: 'Medicine Intake Successful' },
    { timestamp: '5:00 PM', type: 'MEDICINE', status: 'Medicine Intake Successful' },
    { 
      timestamp: '4:58 PM', 
      type: 'VITALS', 
      vitals: { heartRate: 70, bloodOxygen: 98, temperature: 30.2, timestamp: '4:58 PM' } 
    },
    { timestamp: '2:00 PM', type: 'MEDICINE', status: 'Medicine Intake Successful' },
    { timestamp: '11:05 AM', type: 'MEDICINE', status: 'Medicine Intake Successful' },
  ]);

  const handleRegister = useCallback((profile: UserProfile) => {
    setUser(profile);
    setCurrentView(View.DASHBOARD);
  }, []);

  const handleAddMedication = useCallback((med: Medication) => {
    setMedications(prev => [...prev, med]);
    setHistory(prev => [{
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'MEDICINE',
      medicineName: med.name,
      status: `New Schedule: ${med.name}`
    }, ...prev]);
    setCurrentView(View.DASHBOARD);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderView = () => {
    switch (currentView) {
      case View.REGISTRATION:
        return <RegistrationView onNext={handleRegister} />;
      case View.DASHBOARD:
        return (
          <DashboardView 
            user={user} 
            onOpenMenu={toggleSidebar} 
            onNavigate={setCurrentView} 
          />
        );
      case View.SET_MEDICINE:
        return (
          <SetMedicineView 
            onBack={() => setCurrentView(View.DASHBOARD)} 
            onDone={handleAddMedication} 
          />
        );
      case View.HISTORY:
        return (
          <HistoryView 
            history={history} 
            onBack={() => setCurrentView(View.DASHBOARD)} 
          />
        );
      case View.HELP_AI:
        return (
          <HelpAIView 
            onBack={() => setCurrentView(View.DASHBOARD)} 
          />
        );
      default:
        return <RegistrationView onNext={handleRegister} />;
    }
  };

  return (
    <div className="relative h-screen w-full max-w-[450px] bg-white shadow-2xl overflow-hidden flex flex-col sm:rounded-[3rem] sm:my-4 sm:h-[95vh] border-gray-200 ring-1 ring-black/5">
      {/* Fake Status Bar for mobile immersion on desktop */}
      <div className="hidden sm:flex h-6 bg-[#0099FF] shrink-0 justify-between items-center px-8 pt-2">
        <div className="text-white text-[10px] font-bold">9:41</div>
        <div className="flex space-x-1">
          <div className="w-3 h-3 text-white">
             <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
          </div>
          <div className="w-3 h-3 text-white">
             <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </div>
        </div>
      </div>

      <main className="flex-1 relative overflow-hidden flex flex-col">
        {renderView()}
      </main>
      
      {/* Sidebar is now absolute, so it will stay inside this relative parent */}
      {isSidebarOpen && (
        <Sidebar 
          onClose={toggleSidebar} 
          activeView={currentView}
          onNavigate={(view) => {
            setCurrentView(view);
            setIsSidebarOpen(false);
          }} 
        />
      )}

      {/* iPhone-style Home Indicator on desktop */}
      <div className="hidden sm:block h-6 bg-white shrink-0 flex justify-center items-center">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
