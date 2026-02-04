
import React, { useState } from 'react';

interface SimulatorProps {
  onBack: () => void;
}

const SimulatorView: React.FC<SimulatorProps> = ({ onBack }) => {
  const [selectedScenario, setSelectedScenario] = useState('city');

  const scenarios = [
    { id: 'city', label: '城市', icon: 'apartment' },
    { id: 'forest', label: '森林', icon: 'forest' },
    { id: 'track', label: '赛道', icon: 'sports_score' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark animate-in slide-in-from-bottom duration-500">
      {/* AppBar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-dark">
        <button onClick={onBack} className="text-white flex size-12 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center">飞行模拟练习</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-white">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {/* Drone Preview */}
      <div className="px-4 py-2">
        <div 
          className="relative w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#1a2433] rounded-xl min-h-[320px] shadow-2xl border border-white/5"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 24, 34, 0.1), rgba(16, 24, 34, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdnVp_wRTIES8M1ZAyK_XFoMfbRv2I9tldG_eFNyLNu7XAXsdcaFPIwn5vMv4Py-AkTYltDbJLVRueRGcFwte-0zWneMfp09bGup-JhsQhcLg_UDDwr_e0Muukk7XdWFyg3RJ70YC08cv5YRy6Af0XKd4ZHXHQWeXG9ZE5aK-vyNEjp9EtYfciV1ksrzXax22vlNc_N0qsmJ5uoLyhfyIlxnmpd7bg1L2o6Of6RcOXvNONBcQnEd952n3mEw4mS4ZpRLj8FMSZZlQ")` }}
        >
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold tracking-wider">SYSTEM READY</span>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-1">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Current Model</span>
            <h1 className="text-3xl font-bold tracking-tight text-white font-display">PHANTOM X-1</h1>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-5 bg-[#233348] border border-white/5">
          <div className="flex items-center gap-2 text-[#92a9c9]">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <p className="text-sm font-medium">总飞行时长</p>
          </div>
          <p className="text-white text-2xl font-bold font-display">24.5 小时</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-5 bg-[#233348] border border-white/5">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-sm">military_tech</span>
            <p className="text-sm font-medium">技能等级</p>
          </div>
          <p className="text-white text-2xl font-bold font-display">高级</p>
        </div>
      </div>

      {/* Settings */}
      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">模拟设置</h3>
      <div className="px-4 flex flex-col gap-1">
        <div className="flex items-center gap-4 bg-[#1a2433] rounded-xl px-4 min-h-[80px] py-2 justify-between border border-white/5 mb-3">
          <div className="flex items-center gap-4">
            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
              <span className="material-symbols-outlined">bluetooth</span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium">连接控制器</p>
              <p className="text-[#92a9c9] text-sm">已就绪: DJI Remote V2</p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="text-primary material-symbols-outlined material-symbols-fill">check_circle</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-2">
          <p className="text-[#92a9c9] text-sm font-medium px-1">选择场景</p>
          <div className="grid grid-cols-3 gap-3">
            {scenarios.map((s) => (
              <button 
                key={s.id}
                onClick={() => setSelectedScenario(s.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                  selectedScenario === s.id ? 'bg-primary border-primary' : 'bg-[#233348] border-transparent hover:border-primary/50'
                }`}
              >
                <span className="material-symbols-outlined text-white">{s.icon}</span>
                <span className="text-xs font-bold">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="p-6 mt-auto">
        <button className="w-full h-16 bg-primary hover:bg-primary/90 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-2xl">rocket_launch</span>
          <span className="text-lg font-bold tracking-wider uppercase font-display">进入模拟飞行</span>
        </button>
        <p className="text-center text-[#92a9c9] text-[10px] mt-4 uppercase tracking-[0.2em]">High Fidelity Physics Engine Active</p>
      </div>
    </div>
  );
};

export default SimulatorView;
