
import React from 'react';
import { ViewState } from '../types';

interface BottomNavProps {
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const items: { id: ViewState; label: string; icon: string }[] = [
    { id: 'home', label: '首页', icon: 'home' },
    { id: 'discovery', label: '发现', icon: 'explore' },
    { id: 'simulator', label: '学习', icon: 'school' },
    { id: 'profile', label: '我的', icon: 'person' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-20 bg-background-dark/80 backdrop-blur-lg border-t border-slate-800 flex items-center justify-around px-6 pb-4 z-50">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeView === item.id ? 'text-primary' : 'text-slate-500'
          }`}
        >
          <span className={`material-symbols-outlined ${activeView === item.id ? 'material-symbols-fill' : ''}`}>
            {item.icon}
          </span>
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
