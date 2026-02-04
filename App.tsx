
import React, { useState, useCallback } from 'react';
import HomeView from './views/Home';
import CourseDetailsView from './views/CourseDetails';
import SimulatorView from './views/Simulator';
import DiscoveryView from './views/Discovery';
import ProfileView from './views/Profile';
import BottomNav from './components/BottomNav';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const navigateTo = useCallback((view: ViewState, courseId: string | null = null) => {
    setCurrentView(view);
    if (courseId) setSelectedCourseId(courseId);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onCourseSelect={(id) => navigateTo('details', id)} onSimulatorClick={() => navigateTo('simulator')} />;
      case 'details':
        return <CourseDetailsView courseId={selectedCourseId} onBack={() => navigateTo('home')} />;
      case 'simulator':
        return <SimulatorView onBack={() => navigateTo('home')} />;
      case 'discovery':
        return <DiscoveryView />;
      case 'profile':
        return <ProfileView onBack={() => navigateTo('home')} />;
      default:
        return <HomeView onCourseSelect={(id) => navigateTo('details', id)} onSimulatorClick={() => navigateTo('simulator')} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto bg-background-dark min-h-screen relative shadow-2xl flex flex-col">
      <main className="flex-1 pb-20">
        {renderView()}
      </main>
      
      {/* Hide bottom nav on specific views like Details or Simulator if needed */}
      {(currentView !== 'details' && currentView !== 'simulator') && (
        <BottomNav activeView={currentView} onNavigate={navigateTo} />
      )}
    </div>
  );
};

export default App;
