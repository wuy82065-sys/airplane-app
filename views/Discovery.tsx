
import React from 'react';

const DiscoveryView: React.FC = () => {
  const tabs = ['精选', '视频', '校园', '同城'];
  
  const feedItems = [
    {
      id: '1',
      title: '深秋的山林调色盘',
      author: '林间飞鸟',
      likes: '1.2k',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX_ZycZe-XGhenYYjjgxe9kQVkU5kfcTosJkg5Itx1ZgmbiXd8rSeNTcuYgCnPUKeSzCZnsDyxc3gBCW5NrQRUBDiqqA5BAi65M3F3JISV9wYvymLRg9EwI7uDpVCrkYq9fY_goKxsY2NAHsPPA4DCba6X-THa6yM4EoZPN5mjDWM6dIBnvwv16iDCCMM9kmuxnVO1UFpMLadbJOfQsFtBTSX2fHkj2gJREJlTbSzNUUAdoTZLBF7K8HOBzs_iHObZB-LtvvphGD0',
      aspect: 'aspect-[3/4]',
      avatar: 'https://picsum.photos/id/101/40/40'
    },
    {
      id: '2',
      title: '碧海蓝天的尽头是梦想',
      author: '海风少年',
      likes: '2.5k',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX82eaoyYMdavq66rKFnKyi8RzDWw0z4YcfUpd6V8zEywdYwhAVgiM9Vjx0443f925JwVfhrVmcXIvgCmBtGAcqXp6WYNRY5DK255RyLq27JL-3a23bIrPNvtApHu7NC0BoOrha6znIbRuTtGL4k96xJ47wNmPQYV5vDmXbm3xi8Y5NtogsMark3TgE0ESR2erj9Jy-tZ_YfYYj5IzENxceeaYsFIt1g8rOqrA2nqjpFp30Yom9ph1vp9ckpocT7Mw1qfu-St0mAM',
      aspect: 'aspect-[2/3]',
      avatar: 'https://picsum.photos/id/102/40/40'
    },
    {
      id: '3',
      title: '校园运动会：沸腾的绿场',
      author: '学霸爱飞',
      likes: '456',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyc8kQ4VnE245Bu46Uc3wj01YXrGUwDNMJD5ekylPV8IM3NGCqmrVRVs01LFoesjQp1TY_vdOaWDTktdQYdTDqEGJnP3Kb_VeCnsbCoUbJ7e31mlATrHNrDzo7UjVmjnJHSW83J9R1EY_IYsrcyeHTkywFI6hr_0Hx5mUH3-gGF7YEJeG60t9x3_75dgR8aJT3BVBU1Y8gpIKxoVKiFhV7SB8HfsQKN1DF_mFFAnbbavH-Wlp33eygW1jPOUYheIPdtB-jig0toXI',
      aspect: 'aspect-video',
      avatar: 'https://picsum.photos/id/103/40/40'
    },
    {
      id: '4',
      title: '霓虹城市：深夜穿梭',
      author: 'CityWalker',
      likes: '892',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIQxn9570s-tCt_KXB4974ng6rcP9QnCkWbplparxRTGlT_YiUsP9FUewjbN-8I8q_8e7_Jn5KPSg4_LLPdxqXWNArd9f_703agZhun3mwlYKJs9EHIYYs1vMJL8F2Fj7tGOxGwqPqr9YeD2cjR91RrhpC_ZxeIBj9gKxPWJHtqFfoR7Vj48TmljSbcsHf0eKyI6kHQgKLjmfUYNcspm0CKRJCGm02txu-Xa6e0WmDEmToKN2r62PWRa4bOFwa3LUpdYT_5fLGDH4',
      aspect: 'aspect-square',
      isVideo: true,
      avatar: 'https://picsum.photos/id/104/40/40'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark animate-in fade-in duration-500">
      {/* AppBar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-20 bg-background-dark">
        <div className="text-white flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">search</span>
        </div>
        <h2 className="text-white text-lg font-bold flex-1 text-center">发现社区</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-background-dark z-20 overflow-x-auto scrollbar-hide">
        <div className="flex border-b border-[#324867] px-4 gap-8">
          {tabs.map((tab, idx) => (
            <a key={idx} className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap ${idx === 0 ? 'border-primary text-primary' : 'border-transparent text-[#92a9c9]'}`} href="#">
              <p className="text-sm font-bold leading-normal">{tab}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-4 pt-4 pb-24 overflow-y-auto">
        {/* Featured Hero Card */}
        <div className="mb-6">
          <div 
            className="bg-cover bg-center flex flex-col justify-end rounded-xl pt-[160px] shadow-lg relative overflow-hidden group"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC7985k1BNf8cfhaRPVemfIWCdIL5c-rFAjwgOJnrw0WSTfzHcKkxv2fdQ2ES-ShlpJqoXBQMfd3oToQw6x7jCwE1jIabEMxbyPXOlBsNXrGlWSxBItvhCIAXsvDP68XyZZlLOjHzNjZTKq0ZM0J_3nv6DoLEEsXsQljMTyRknma1ukl6gXRnNPjUFr6etvUFI93TdzQnSWUXaKfhPF3b9nbFcaYHnT-Nnq4mrTowU-EWlFsV8q71GK9bXhaOBYLDyI1zQGuHlPPA")` }}
          >
            <div className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">今日推荐</div>
            <div className="p-4">
              <p className="text-white tracking-tight text-xl font-bold leading-tight">上帝视角：穿越云海的航拍技巧</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full bg-cover" style={{ backgroundImage: `url("https://picsum.photos/id/64/40/40")` }}></div>
                <p className="text-white/90 text-xs font-medium">摄影师小王</p>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry-like Feed */}
        <div className="columns-2 gap-3 space-y-3">
          {feedItems.map((item) => (
            <div key={item.id} className="break-inside-avoid rounded-xl overflow-hidden bg-[#1a2433] shadow-sm active:scale-95 transition-transform">
              <div className={`${item.aspect} bg-cover bg-center relative`} style={{ backgroundImage: `url("${item.image}")` }}>
                {item.isVideo && (
                  <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1 rounded-full">
                    <span className="material-symbols-outlined text-white text-[16px]">videocam</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-bold line-clamp-2 mb-2 text-white">{item.title}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div className="w-4 h-4 rounded-full bg-cover shrink-0" style={{ backgroundImage: `url("${item.avatar}")` }}></div>
                    <span className="text-[11px] text-[#92a9c9] truncate">{item.author}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-primary shrink-0">
                    <span className="material-symbols-outlined text-[14px] material-symbols-fill">favorite</span>
                    <span className="text-[11px] font-medium">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-24 right-6 z-30">
        <button className="bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-primary/20 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-[32px]">add</span>
        </button>
      </div>
    </div>
  );
};

export default DiscoveryView;
