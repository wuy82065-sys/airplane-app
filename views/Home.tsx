
import React from 'react';

interface HomeProps {
  onCourseSelect: (id: string) => void;
  onSimulatorClick: () => void;
}

const HomeView: React.FC<HomeProps> = ({ onCourseSelect, onSimulatorClick }) => {
  const categories = [
    { icon: 'camera_enhance', label: '航拍摄影', color: 'text-blue-400', bg: 'bg-blue-900/40' },
    { icon: 'agriculture', label: '农业植保', color: 'text-green-400', bg: 'bg-green-900/40' },
    { icon: 'sports_motorsports', label: 'FPV竞速', color: 'text-red-400', bg: 'bg-red-900/40' },
    { icon: 'search_check', label: '电力巡检', color: 'text-purple-400', bg: 'bg-purple-900/40' },
    { icon: 'construction', label: '维修指南', color: 'text-orange-400', bg: 'bg-orange-900/40' },
    { icon: 'more_horiz', label: '更多分类', color: 'text-slate-300', bg: 'bg-slate-700' },
  ];

  const popularCourses = [
    {
      id: '1',
      title: '执照考证理论全解析',
      price: '299',
      students: '1.2k',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBwrHa3gXJHmQjL8NzQkg3kZdFQ8m-0HiwfbacwxzaTNAy6j8MOJuIPz0XkHCNvrE70--oGYFB5Jhl_-_C5dw_RWfOggHdRBaSfCSGCAZPWvtghPYtfxSzW2_2gBmmWn8_U_-V_jqQXkhmtVNCYZWJwoX6O_gobYFFzghs47-DdommXsTOeNgcJef4fWBFgVfYs8x08Dcz_0ZuNgJAfDcRLvfDj2b6kYqj5H5lHIm-RXq-PLqThzACIyMukKC8s1erL4hHKQQAH1Y'
    },
    {
      id: '2',
      title: '电影级构图与调色思路',
      price: '199',
      students: '856',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNgulT7kLfsBvKIIFrjS04SCjYozbq6jQ7O3AwesbgWkbGS87rJvgzJ-68cjmvlNTj23Er_cjUOcDdcAfStDvK5biyxpj8p1nRYRxQ7DQalGzeVK8Qo8LEuQFoBUA0wfBy70c40wnPBGRqREodNZbDWLrYQCH49Q7yD4yG2F1tvIt0WNeT9L2rQDJaLZuNfVeIcMh9MaaB8GY0o9-Qz5T2K1CNx0tISYOethqGa26d6a-3VkHhkRSJAaR3xD4FWCthnVylPa8MTAA'
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
        <div className="bg-primary aspect-square rounded-full size-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-xl">flight_takeoff</span>
        </div>
        <h2 className="text-white text-lg font-bold flex-1 text-center font-display">无人机学院</h2>
        <div className="flex w-8 items-center justify-end">
          <button className="text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="flex items-center rounded-xl overflow-hidden bg-[#233348] border border-slate-800 h-12">
          <span className="material-symbols-outlined text-[#92a9c9] pl-4">search</span>
          <input 
            className="flex-1 bg-transparent border-none text-white focus:ring-0 px-4 text-base placeholder:text-[#92a9c9]" 
            placeholder="搜索课程、导师或技术指南"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 py-3">
        <div 
          onClick={() => onCourseSelect('masterclass')}
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-52 relative cursor-pointer active:scale-[0.98] transition-transform"
          style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRemO-XDC2zE6ckqDxqreLCtlid5NAWlylon-E3H9A6upj9-dmmbaRQC-loiW0cQziubw-3LJ4f_C273IYE1nvB2Xbb3VBB_QQplH9zxEsgH0Zbk0d6NciZwHoevTSqscOgglgEyhVyCoOHvrXUwdBm5oA27hb9m_xUkORgsP6R8VffpXk8eXH2kZYmJk1H413rxLD0LJMxpPDQoJewOmsh3lKbu7zjhDKRGaLJki3r1x3CdDFVeNawaAJCXxsdsHrfrwbFfo6YJA")` }}
        >
          <div className="p-4">
            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">精品推荐</span>
            <p className="text-white text-2xl font-bold leading-tight font-display">无人机大师课：从入门到精通</p>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-white text-lg font-bold font-display">继续学习</h3>
        <span className="text-primary text-sm font-medium">查看全部</span>
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-[#192433] p-4 shadow-sm border border-slate-800">
          <div className="flex-1 flex flex-col justify-between py-1">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold">FPV 穿越机组装指南</p>
              <p className="text-[#92a9c9] text-xs">上次观看：第三章 电调焊接</p>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2">
                <div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
              </div>
            </div>
            <button 
              onClick={() => onCourseSelect('fpv-guide')}
              className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white gap-1 text-sm font-bold mt-3 w-fit shadow-md shadow-primary/20 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-lg">play_arrow</span>
              <span>继续观看</span>
            </button>
          </div>
          <div 
            className="w-24 aspect-square bg-cover rounded-lg shrink-0"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf-NOr8f23JW6HF7LtrwUkLk_yYdMZFwNJg5MEOnrPsAR98jWQx84grtHZuKAsevbgjzJ5_9ruTlU-m7Nea-uII2PM5-01L2WBPsvG0A4BcfX0-4oECr5yPy1W8sQqQKNiMht09gRzFVk824ha4shCOsHUGEuEje3Zw7nkGNYtwsK0x8RG2ZaEwJy0nbB9B1d7LyeewLf2peUkRz6_EI08ni2HK79EAkNodR4ajNC2SSzGkxmVoUNKpqCunhpO5FWcXWEjVh-GjFs")` }}
          ></div>
        </div>
      </div>

      {/* Categories */}
      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4 font-display">专业领域</h3>
      <div className="grid grid-cols-3 gap-3 px-4 pb-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#192433] shadow-sm border border-slate-800/50 cursor-pointer active:bg-[#233348]">
            <div className={`size-12 rounded-full ${cat.bg} flex items-center justify-center ${cat.color}`}>
              <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
            </div>
            <span className="text-slate-200 text-xs font-bold">{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Popular Courses */}
      <h3 className="text-white text-lg font-bold px-4 pb-2 pt-2 font-display">热门推荐</h3>
      <div className="flex overflow-x-auto gap-4 px-4 pb-10 scrollbar-hide">
        {popularCourses.map((course) => (
          <div 
            key={course.id} 
            onClick={() => onCourseSelect(course.id)}
            className="flex-none w-64 flex flex-col gap-2 cursor-pointer group"
          >
            <div 
              className="w-full aspect-[4/3] rounded-xl bg-cover bg-center shadow-lg group-active:scale-95 transition-transform"
              style={{ backgroundImage: `url("${course.image}")` }}
            ></div>
            <p className="text-white font-bold text-sm mt-1">{course.title}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-bold">¥{course.price}</span>
              <span className="text-slate-500 text-xs">{course.students}人已学</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
