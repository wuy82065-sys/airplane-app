
import React, { useState } from 'react';
import { Lesson } from '../types';

interface DetailsProps {
  courseId: string | null;
  onBack: () => void;
}

const CourseDetailsView: React.FC<DetailsProps> = ({ courseId, onBack }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'syllabus' | 'reviews'>('intro');

  const lessons: Lesson[] = [
    { id: '1', title: '01. 飞行前的安全检查与合规说明', duration: '10:25', status: 'completed' },
    { id: '2', title: '02. 基础飞行控制：八向练习', duration: '15:00', status: 'playing' },
    { id: '3', title: '03. 黄金时刻的构图艺术', duration: '12:40', status: 'locked' },
  ];

  return (
    <div className="flex flex-col min-h-screen animate-in slide-in-from-right duration-300 bg-background-dark pb-24">
      {/* AppBar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
        <button onClick={onBack} className="text-white flex size-12 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center">课程详情</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      {/* Player */}
      <div className="p-4">
        <div 
          className="relative flex items-center justify-center bg-slate-800 bg-cover bg-center aspect-video rounded-xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXIe-8d_YA6TRTpUsU5GELn8JXVvELWK9Z6ggNgJOjGTfR9Ic7oba6s0AfAs0mEOb-SUUYUFyLO1Vbhkzxe43rXWXpKWYPhbfqvxEo-JpCKC6OtpdqtHF4YOz2do3Rxcc3rcmBaUDA9N_DgbLyB31SWkHzd7mpO4shTQzXBW9jYujRfckN1TB0-67HfI4xU5Lyip91VBuhQjv3CuDn85WHPkhorgPWOHywwCkBgbGgDIJ4MxWN-e4tOPloq6nGqPRein3F-6_3uGo")` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <button className="relative flex items-center justify-center rounded-full size-16 bg-primary/90 text-white shadow-xl active:scale-90 transition-transform">
            <span className="material-symbols-outlined !text-4xl material-symbols-fill">play_arrow</span>
          </button>
          
          <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex h-1.5 items-center justify-center mb-2">
              <div className="h-1 flex-1 rounded-full bg-primary"></div>
              <div className="relative">
                <div className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-white border-2 border-primary"></div>
              </div>
              <div className="h-1 w-2/3 rounded-full bg-white/30"></div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white text-xs font-medium">08:42</p>
              <p className="text-white text-xs font-medium">15:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold text-white">无人机航拍入门：从零到一</h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-primary text-sm font-semibold bg-primary/10 px-2 py-0.5 rounded">进阶必修</span>
          <span className="text-slate-500 text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">visibility</span> 1.2k 学员
          </span>
          <span className="text-slate-500 text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-yellow-500 material-symbols-fill">star</span> 4.9
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <div className="flex border-b border-slate-800 px-4 justify-between">
          <button 
            onClick={() => setActiveTab('intro')}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${activeTab === 'intro' ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}
          >
            <p className="text-sm font-bold">介绍</p>
          </button>
          <button 
            onClick={() => setActiveTab('syllabus')}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${activeTab === 'syllabus' ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}
          >
            <p className="text-sm font-bold">大纲</p>
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${activeTab === 'reviews' ? 'border-primary text-primary' : 'border-transparent text-slate-500'}`}
          >
            <p className="text-sm font-bold">评价</p>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 animate-in fade-in duration-300">
        {activeTab === 'intro' && (
          <>
            <h2 className="text-white text-[20px] font-bold pb-3 pt-6">课程简介</h2>
            <p className="text-slate-300 text-base font-normal leading-relaxed pb-3">
              本课程将带你从零开始学习无人机航拍，包括基础飞行技巧、构图艺术及后期剪辑，助你拍出电影级大片。无论你是摄影爱好者还是职业创作者，都能在这里掌握上帝视角的创作秘籍。
            </p>
            
            <div className="mt-4 p-4 rounded-xl bg-slate-800/50 flex items-start gap-4 border border-slate-700">
              <div 
                className="size-16 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/20"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF3AAEb0PREsZ1Q26P4Zl3AHNevfrvPIpFkZLUWfNLt1-C8p7rxZWrtW_GQKihKok6ul1M6DUviXhPxiqUmpFFFufy0VXf7LLIP-Wrn1RN0uWsQeLKtPxkwLqmi0sLgV8-LDYAzb-4gBssU8wx1uFX3RpLR2bbREHWh3dYHmorDq-K7y5RNSE6D0GIOA62qLeQMHmgAB45oBtZPJSHhDKvPRoDYhJxzTL42dQqBjQNMtLdABR-e8c2O392CgG8EmSYQAntA3JgbkY')` }}
              ></div>
              <div>
                <h3 className="font-bold text-lg text-white">张瑞 (Ray Zhang)</h3>
                <p className="text-primary text-sm font-medium mb-1">资深航拍导演 / 国家地理撰稿人</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  10年飞行经验，曾参与多部纪录片拍摄。擅长利用自然光影构建视觉叙事。
                </p>
              </div>
            </div>
          </>
        )}

        {(activeTab === 'intro' || activeTab === 'syllabus') && (
          <div className="mt-8 mb-4">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-white text-[20px] font-bold">课程大纲</h2>
              <span className="text-primary text-sm font-medium">查看全部 (12)</span>
            </div>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div 
                  key={lesson.id}
                  className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${
                    lesson.status === 'playing' 
                      ? 'bg-primary/10 border-primary/40 ring-1 ring-primary/20' 
                      : lesson.status === 'locked'
                        ? 'bg-slate-800/30 border-slate-800 opacity-60'
                        : 'bg-slate-800 border-slate-700'
                  }`}
                >
                  <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${
                    lesson.status === 'playing' ? 'bg-primary text-white' : 
                    lesson.status === 'completed' ? 'bg-green-500/10 text-green-500' : 'bg-slate-700 text-slate-400'
                  }`}>
                    <span className="material-symbols-outlined">
                      {lesson.status === 'playing' ? 'play_arrow' : lesson.status === 'completed' ? 'check_circle' : 'lock'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${lesson.status === 'playing' ? 'text-primary' : 'text-white'}`}>
                      {lesson.title}
                    </p>
                    <p className={`text-xs ${lesson.status === 'playing' ? 'text-primary/70' : 'text-slate-400'}`}>
                      {lesson.duration} · {lesson.status === 'completed' ? '已观看' : lesson.status === 'playing' ? '正在学习' : '未解锁'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-4 bg-background-dark/90 backdrop-blur-lg border-t border-slate-800 z-50">
        <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
          开始学习本课
        </button>
      </div>
    </div>
  );
};

export default CourseDetailsView;
