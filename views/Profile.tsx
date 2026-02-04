
import React from 'react';

interface ProfileProps {
  onBack: () => void;
}

const ProfileView: React.FC<ProfileProps> = ({ onBack }) => {
  const stats = [
    { label: '我的证书', value: '3 个', icon: 'verified_user' },
    { label: '学习时长', value: '128 小时', icon: 'schedule' },
    { label: '我的装备', value: '2 件', icon: 'precision_manufacturing' },
  ];

  const menuItems = [
    { label: '我的收藏', icon: 'star', color: 'bg-primary' },
    { label: '离线下载', icon: 'download_for_offline', color: 'bg-[#233348]' },
    { label: '设置', icon: 'settings', color: 'bg-[#233348]' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark animate-in fade-in duration-500">
      {/* AppBar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-800 bg-background-dark">
        <button onClick={onBack} className="text-white flex size-12 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">个人中心</h2>
      </div>

      <div className="h-4"></div>

      {/* Profile Header */}
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-4 items-center">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 border-2 border-primary shadow-lg shadow-primary/20"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuok4u26CEb8YbKKrrCo2nvayS3nE2ZGZelh0NbHyOXc-APlbcI4Xy-riyWtFkiuAFKFCqLFquXxAwhuHnbKLJAc9YAc36vVSjdwChBh9RYtM2fVX5pKY7UpDJQtL3cNJSX7xWRYdkRn_msYqOeOmzAXl_O6RoDY07nTMdz90sG20jtOd7eUFOB8A2C42LwUbZTCmF2WaBbVinCm5v4tPRIAMhjziT3HHKltcTPsgGFp6S-sryMSTapamtSuQ5d-NwZL7liFT1WcU")` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-[22px] font-bold tracking-tight font-display">张小明</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-primary text-xs font-bold px-2 py-0.5 bg-primary/20 rounded-full">LV.5</span>
                <p className="text-[#92a9c9] text-sm font-normal">资深飞手 (Expert Pilot)</p>
              </div>
              <p className="text-[#92a9c9]/60 text-xs font-normal mt-1">UID: 882931</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-1 gap-3 rounded-xl border border-[#324867] bg-[#192433] p-4 flex-col items-center text-center transition-transform active:scale-95">
            <div className="text-primary">
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-sm font-bold">{stat.label}</h2>
              <p className="text-[#92a9c9] text-xs font-normal">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">个人功能</h3>

      {/* Menu List */}
      <div className="flex flex-col gap-1 px-2">
        {menuItems.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-4 bg-transparent px-4 min-h-16 justify-between rounded-xl hover:bg-[#1d2a3d] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`text-white flex items-center justify-center rounded-lg ${item.color} shrink-0 size-10 shadow-sm`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <p className="text-white text-base font-medium flex-1 truncate">{item.label}</p>
            </div>
            <div className="shrink-0 group-hover:translate-x-1 transition-transform">
              <div className="text-white flex size-7 items-center justify-center">
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;
