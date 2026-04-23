import { Screen } from './types';
import { Home, Scan, Users, CheckSquare, User, Building2, Bell, Search, Plus, Camera, Mail, Phone, MapPin, Edit3, MessageSquare, PieChart, ChevronRight, X, Sparkles, Mic, Paperclip, Check, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RECENT_CONTACTS, TASKS } from './constants';

// --- Shared Components ---

const Header = ({ onRefresh }: { onRefresh: () => void }) => (
  <header className="sticky top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-[0_2px_4px_rgba(26,43,60,0.08)]">
    <div className="flex items-center gap-2">
      <Building2 className="text-blue-600 w-6 h-6" />
      <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">BizAction</h1>
    </div>
    <div className="flex items-center gap-2">
      <button 
        onClick={onRefresh}
        className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-500"
      >
        <RefreshCw className="w-5 h-5" />
      </button>
      <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-500">
        <Bell className="w-5 h-5" />
      </button>
      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvS0HSuWiJzXifm5shAeS-8JrJYjpDmRBGSS9w470EOIdIp9dHrsIfnVtg6xlJqVvyMwlcqIAIwd3HEFf-fbAx-nD242HHZZ6EYo5Wx8OVzln6JJBJzP2qhgGKbeAtPf4rJCQzkY-3DJj0PBjWRp36HVqN4880dLA36Aei3W1eZTCkd8yFKKEIzgmXDHMX7YIcARMa7d-wAAIU0Sm0Z-NlLuJicnGoZX6KLroabHKjk6SnbrelEyF7HLpVL_PG4x5abKP7gJo_NKQ" 
          alt="User Profile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);

const Navbar = ({ activeScreen, onNavigate }: { activeScreen: Screen, onNavigate: (screen: Screen) => void }) => {
  const tabs: { id: Screen; label: string; icon: React.ReactNode }[] = [
    { id: 'Home', label: '홈', icon: <Home className="w-6 h-6" /> },
    { id: 'Contact', label: '연락처', icon: <Users className="w-6 h-6" /> },
    { id: 'Tasks', label: '할 일', icon: <CheckSquare className="w-6 h-6" /> },
    { id: 'Profile', label: '프로필', icon: <User className="w-6 h-6" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_12px_rgba(26,43,60,0.05)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onNavigate(tab.id)}
          className={`flex flex-col items-center justify-center flex-1 transition-colors ${
            activeScreen === tab.id ? 'text-blue-600 font-bold' : 'text-slate-500'
          }`}
        >
          {tab.icon}
          <span className="text-[11px] mt-1">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Screens ---

const Dashboard = ({ 
  contacts, 
  tasks, 
  searchQuery, 
  setSearchQuery, 
  onScan,
  onViewContact
}: { 
  contacts: any[], 
  tasks: any[], 
  searchQuery: string,
  setSearchQuery: (val: string) => void,
  onScan: () => void,
  onViewContact: () => void
}) => {
  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 pt-4 pb-24 space-y-6 max-w-4xl mx-auto"
    >
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-slate-400" />
        </div>
        <input 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all text-sm"
          placeholder="연락처 또는 회사 검색..."
        />
      </div>

      {/* Scan Banner */}
      <section className="relative overflow-hidden bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-800">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">빠른 명함 스캔</h2>
            <p className="text-sm text-slate-400 max-w-xs">AI 기반 OCR 스캔으로 네트워크 리드를 즉시 디지털화하세요.</p>
          </div>
          <button 
            onClick={onScan}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md active:scale-95 transition-transform"
          >
            <Camera className="w-5 h-5" />
            새 명함 스캔하기
          </button>
        </div>
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </section>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Recent Contacts */}
        <section className="md:col-span-7 flex flex-col bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-semibold text-slate-900">최근 연락처</h3>
            <button className="text-blue-600 text-xs font-semibold hover:underline">모두 보기</button>
          </div>
          <div className="divide-y divide-slate-50">
            {filteredContacts.map((contact) => (
              <div 
                key={contact.id} 
                onClick={onViewContact}
                className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden font-bold text-slate-400">
                  {contact.avatar ? (
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    contact.name.split(' ').map((n: string) => n[0]).join('')
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{contact.name}</p>
                  <p className="text-sm text-slate-500 truncate">{contact.title}, {contact.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold">
                    {contact.status}
                  </span>
                  <span className="text-slate-400 text-[10px]">{contact.lastSeen}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="md:col-span-5 flex flex-col bg-white border border-slate-100 rounded-xl shadow-sm">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2 bg-slate-50/50 rounded-t-xl">
            <CheckSquare className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-slate-900">다음 단계</h3>
          </div>
          <div className="p-4 space-y-4">
            {tasks.filter(t => t.status === 'Overdue' || t.status === 'Extracted').slice(0, 3).map(task => (
              <div key={task.id} className={`p-4 border-l-4 rounded-r-lg space-y-2 ${
                task.status === 'Overdue' ? 'border-red-500 bg-red-50/30' : 'border-blue-500 bg-blue-50/30'
              }`}>
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold text-slate-900">{task.title}</h4>
                  <span className={`text-[10px] font-bold ${
                    task.status === 'Overdue' ? 'text-red-600' : 'text-blue-600'
                  }`}>{task.status === 'Overdue' ? '기한 초과' : '추출됨'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={task.ownerAvatar} alt={task.owner} className="w-5 h-5 rounded-full" referrerPolicy="no-referrer" />
                    <span className="text-[11px] text-slate-500">담당: {task.owner}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

    {/* Secondary Cards */}
    <section className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">회의록</p>
          <p className="text-xs text-slate-500">12개의 새로운 요약</p>
        </div>
      </div>
      <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
          <PieChart className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">영업 파이프라인</p>
          <p className="text-xs text-slate-500">업데이트 필요</p>
        </div>
      </div>
    </section>

    <div className="fixed bottom-20 right-4 z-50">
      <button className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  </motion.div>
  );
};

const ScanScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Start camera stream
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access failed", err);
        alert("카메라 권한을 허용해야 명함 스캔이 가능합니다.");
      }
    }

    startCamera();

    // OCR simulation interval
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => {
      clearInterval(interval);
      // Stop camera stream
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col p-4 gap-6 max-w-2xl mx-auto w-full pb-24"
    >
      {/* Viewfinder replacing the static image background with real camera stream */}
      <section className="relative aspect-[1.586/1] w-full bg-slate-900 rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 z-10 p-4 pointer-events-none">
          <div className="absolute top-[28%] left-[10%] w-[45%] h-[12%] border-2 border-blue-400 bg-blue-400/20 rounded-sm">
            <span className="absolute -top-6 left-0 bg-blue-400 text-white px-2 py-0.5 text-[10px] font-bold rounded-t-sm uppercase">성명</span>
          </div>
          <div className="absolute top-[42%] left-[10%] w-[35%] h-[8%] border-2 border-amber-400 bg-amber-400/20 rounded-sm">
            <span className="absolute -top-6 left-0 bg-amber-400 text-slate-900 px-2 py-0.5 text-[10px] font-bold rounded-t-sm uppercase">회사명</span>
          </div>
          <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[8%] border-2 border-slate-500 bg-slate-500/10 rounded-sm">
            <span className="absolute -bottom-6 left-0 bg-slate-500 text-white px-2 py-0.5 text-[10px] font-bold rounded-b-sm uppercase">전화번호</span>
          </div>
          <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[8%] border-2 border-slate-500 bg-slate-500/10 rounded-sm">
            <span className="absolute -bottom-6 right-0 bg-slate-500 text-white px-2 py-0.5 text-[10px] font-bold rounded-b-sm uppercase">이메일</span>
          </div>
        </div>

        {/* Scan line */}
        <motion.div 
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_#2170e4] z-20"
        />

        {/* Corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white/80 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white/80 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-white/80 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-white/80 rounded-br-lg" />
      </section>

      {/* Progress Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-full text-blue-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                {progress < 100 ? '연락처 정보 분석 중...' : '분석 완료!'}
              </h2>
              <p className="text-xs text-slate-500">OCR 엔진이 데이터를 추출하고 있습니다</p>
            </div>
          </div>
          <span className="text-sm font-bold text-blue-600">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* JSON Stream */}
        <div className="bg-slate-900 text-slate-400 p-6 rounded-xl font-mono text-[10px] flex flex-col gap-2 overflow-hidden shadow-lg">
          <div className="flex items-center justify-between mb-2 opacity-60 uppercase tracking-widest font-bold">
            <span>실시간 데이터 스트림</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <div className="space-y-1">
            <div className="flex"><span className="text-blue-400">"name":</span> <span className="text-white ml-2">"Jonathan Harrison",</span></div>
            <div className="flex"><span className="text-blue-400">"title":</span> <span className="text-white ml-2">"Senior Design Lead",</span></div>
            <div className="flex"><span className="text-blue-400">"company":</span> <span className="text-white ml-2">"Horizon Dynamics",</span></div>
            <div className="flex"><span className="text-blue-400">"email":</span> <span className="text-white ml-2">"j.harrison@horizon.ai",</span></div>
            <div className="flex"><span className="text-blue-400">"phone":</span> <span className="text-white ml-2">"+1 (555) 012-9844",</span></div>
            <div className="flex"><span className="text-blue-400">"status":</span> <span className="text-blue-600 ml-2">"주소 추출 중..."</span><span className="animate-pulse">|</span></div>
          </div>
        </div>

        {/* Confidence Scores */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-4">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">추출 신뢰도</h3>
          <div className="space-y-4">
            {[
              { label: '성명', score: '98.4%', width: '98%' },
              { label: '이메일', score: '96.2%', width: '96%' },
              { label: '주소', score: '대기 중...', width: '0%' },
            ].map(item => (
              <div key={item.label} className={`flex flex-col gap-1 ${item.width === '0%' ? 'opacity-40' : ''}`}>
                <div className="flex justify-between text-[11px] font-bold">
                  <span>{item.label}</span>
                  <span className="text-green-600">{item.score}</span>
                </div>
                <div className="h-1 bg-slate-100 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onComplete}
          className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-md active:scale-95 transition-transform"
        >
          연락처 저장
        </button>
        <button className="px-6 border-2 border-slate-200 text-slate-700 py-4 rounded-xl font-semibold hover:bg-slate-50">
          재촬영
        </button>
      </div>
    </motion.div>
  );
};

const ContactDetail = ({ onExtract }: { onExtract: () => void }) => {
  const [isExtracting, setIsExtracting] = useState(false);

  const handleExtract = () => {
    setIsExtracting(true);
    setTimeout(() => {
      setIsExtracting(false);
      onExtract();
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="px-4 pt-4 pb-24 space-y-6 max-w-xl mx-auto"
    >
      <section className="bg-white rounded-xl shadow-[0_2px_8px_rgba(26,43,60,0.08)] overflow-hidden border border-slate-100 p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border-2 border-blue-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXiDf57DB_4HJwJKE8SmmLqPu8kEg9sp2WkvF1YAn3tI0jNeS6lvz8J9vQRfFKFo8-XwP2S8R61K0bH02yyuZXPOoWsnxZkw17uDOHmkxQ3oxhvXQ-H1u9as-pg8C9ynBQli4kFpuzJBOW_D8-z1iV4Amq4o6fMrG_3wVD4FfcziR4UcS1yiDTWE5jRmOlGdwukgCUTLtkGojaOg5pTLs_N-doXw7qG15j6tcDNh8TuAHeVHXi9ki2WZR5BouDiXPNAqbiCkAD7qE" 
                alt="Marcus" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">마커스 홀로웨이 (Marcus Holloway)</h1>
              <p className="text-sm text-slate-500">전략 파트너십 이사</p>
              <p className="text-sm text-blue-600 font-semibold">Nexus Digital Solutions</p>
            </div>
          </div>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-600">
            <Edit3 className="w-4 h-4" />
            편집
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-4 pt-6 border-t border-slate-50">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-slate-700">marcus.holloway@nexusdigital.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-slate-700">+1 (555) 234-8902</span>
          </div>
          <div className="flex items-center gap-3 items-start">
            <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
            <span className="text-sm text-slate-700">미국 캘리포니아주 샌프란시스코 몽고메리가 450, 94104</span>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Edit3 className="w-5 h-5" />
            미팅 메모
          </h2>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2023년 10월 24일</span>
        </div>
        <div className="relative">
          <textarea 
            className="w-full min-h-[250px] p-4 bg-white border border-slate-200 rounded-xl text-sm leading-relaxed text-slate-600 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm resize-none"
            placeholder="미팅 메모를 입력하세요..."
            defaultValue="4분기 로드맵 및 통합 일정에 대해 논의했습니다. 마커스는 Nexus 클라우드 마이그레이션 예산이 승인되었다고 언급했습니다. 다음 주 화요일까지 API 문서를 마무리해야 합니다. 보안 감사는 사라(Sarah)가 주도할 예정입니다. 결정 사항: 연휴 일정을 고려하여 파일럿 런칭을 11월 15일로 연기하기로 했습니다."
          />
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:bg-slate-200">
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-2 bg-slate-100 rounded-lg text-slate-500 hover:bg-slate-200">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="pb-8">
        <button 
          onClick={handleExtract}
          disabled={isExtracting}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-semibold shadow-lg active:scale-95 transition-all disabled:opacity-50"
        >
          {isExtracting ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          ) : <Sparkles className="w-5 h-5" />}
          {isExtracting ? '추출 중...' : '액션 아이템 추출하기'}
        </button>
        <p className="text-center mt-3 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          Powered by BizAction AI • Analyzes decisions, tasks, and deadlines
        </p>
      </div>
    </motion.div>
  );
};

const TasksScreen = ({ tasks, onToggle }: { tasks: any[], onToggle: (id: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="px-4 pt-6 pb-24 space-y-6 max-w-md mx-auto"
  >
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">업무 대시보드</h1>
        <p className="text-sm text-slate-500 mt-1">현재 {tasks.filter(t => t.status !== 'Completed').length}개의 진행 중인 항목</p>
      </div>
      <div className="flex items-center -space-x-3">
        {[1, 2].map(i => (
          <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
            <img 
              src={i === 1 ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_yMEUzgQq9rGELQ8Cb-DI2hFfBPruKSHMMC6hCGpblzlUk254TNdIAoAmrrT9LT97S9Iyg1719l1iDw0fmyrZMucqC1hth9IhJlON69H-iROAQXMb1eVjxZYeWGoufQZgwNu9YKmKhUd0JIgkAKdYp2vyX92pEQFzkFyhpp2dsAs2U0xJjqk0mnV7rW_J81-jKcmW7eufj8fHBXzAiwnRJXkyhjUhzpGu_pWX1f6vPfnXKOcIKnc6MSu6rGYdt77if3KiSixf8Fo' : 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1HccEyLzvjloHgMSCucONeHVAqaxZdm5SlvhPEvmYOzv99GGViP6gK9lB7n1rTAJNFnlPi4_6sFp0MiLyxy-LslBxB0MA2WWHSOwcaCivrs1TJh6Yx4P1inTow_-F9xKit03L68GHV2jkAwpaXPG5Ofi4Qi7udHwJM08zXPJSOzze-r5GPL2aLMAnd07u40yn9I3XnPmogLcKwB4oJo8GeSRnQFs4mxpWfga5YKSCenRNwOQaAMtIVGeZ-R5fp66pQS_wyudTuQ8'}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">+3</div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
        <Home className="w-5 h-5 text-blue-600" />
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">다음 미팅</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">내일, 오전 10시</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between h-32">
        <CheckSquare className="w-5 h-5 text-red-500" />
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">중요 업무</p>
          <p className="text-sm font-bold text-slate-900 leading-tight">{tasks.filter(t => t.status !== 'Completed').length}개 항목</p>
        </div>
      </div>
    </div>

    <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
      {['전체 업무', '다음 미팅', '나에게 할당됨'].map((f, i) => (
        <button key={f} className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-colors ${
          i === 0 ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
        }`}>
          {f}
        </button>
      ))}
    </div>

    <section className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">현재 진행 중인 업무</h2>
        <button className="text-blue-600 text-[11px] font-bold flex items-center gap-1">
          보관함 보기 <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 transition-transform active:scale-[0.98]">
            <div className="flex flex-col items-center">
              <div 
                onClick={() => onToggle(task.id, task.status)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  task.status === 'Completed' ? 'bg-blue-600 border-blue-600' : 'border-blue-400 hover:border-blue-500'
              }`}>
                {task.status === 'Completed' && <Check className="w-4 h-4 text-white" />}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`text-sm font-bold text-slate-900 leading-tight ${task.status === 'Completed' ? 'line-through text-slate-400' : ''}`}>
                  {task.title}
                </h3>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                  task.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {task.status === 'Completed' ? '완료됨' : '대기 중'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-2">
                자동 추출된 비즈니스 액션 아이템입니다. 마감 기한 내에 완료해 주세요.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {task.ownerAvatar ? (
                    <img src={task.ownerAvatar} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
                  ) : <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold">{task.owner[0]}</div>}
                  <span className="text-[11px] font-bold text-slate-700">{task.owner}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Bell className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold">{task.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <button className="fixed bottom-20 right-4 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all z-40">
      <Plus className="w-7 h-7" />
    </button>
  </motion.div>
);

const ProfileScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="px-4 pt-8 pb-24 space-y-6 max-w-md mx-auto text-center"
  >
    <div className="relative inline-block">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvS0HSuWiJzXifm5shAeS-8JrJYjpDmRBGSS9w470EOIdIp9dHrsIfnVtg6xlJqVvyMwlcqIAIwd3HEFf-fbAx-nD242HHZZ6EYo5Wx8OVzln6JJBJzP2qhgGKbeAtPf4rJCQzkY-3DJj0PBjWRp36HVqN4880dLA36Aei3W1eZTCkd8yFKKEIzgmXDHMX7YIcARMa7d-wAAIU0Sm0Z-NlLuJicnGoZX6KLroabHKjk6SnbrelEyF7HLpVL_PG4x5abKP7gJo_NKQ" 
          alt="User Profile"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white border-2 border-white cursor-pointer hover:bg-blue-700 transition-colors">
        <Edit3 className="w-4 h-4" />
      </div>
    </div>
    
    <div>
      <h1 className="text-xl font-bold text-slate-900">사용자 이름</h1>
      <p className="text-sm text-slate-500">Business Manager @ BizAction</p>
    </div>

    <div className="grid grid-cols-1 gap-3 text-left pt-4">
      <button 
        onClick={() => onNavigate('Guide')}
        className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
      >
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">모바일 설치 가이드</p>
          <p className="text-xs text-slate-500">핸드폰에서 앱처럼 사용하는 방법</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400" />
      </button>

      <button className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
          <Bell className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">알림 설정</p>
          <p className="text-xs text-slate-500">새로운 미팅 및 할 일 알림</p>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400" />
      </button>
    </div>

    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest pt-8">Version 1.0.2 • Powered by Google AI Studio</p>
  </motion.div>
);

const GuideScreen = ({ onBack }: { onBack: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="px-4 pt-4 pb-24 space-y-6 max-w-xl mx-auto"
  >
    <div className="flex items-center gap-4 mb-2">
      <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-200 transition-colors">
        <X className="w-6 h-6 text-slate-600" />
      </button>
      <h1 className="text-xl font-bold text-slate-900">모바일 설치 가이드</h1>
    </div>

    <section className="space-y-8 py-4">
      {[
        {
          step: '01',
          title: 'URL 접속하기',
          desc: '핸드폰의 웹 브라우저(Safari 또는 Chrome)를 열고 현재 앱의 대시보드 URL 주소를 입력하여 접속해 주세요.',
          icon: <Search className="w-6 h-6 text-blue-600" />
        },
        {
          step: '02',
          title: '홈 화면에 추가하기',
          desc: '아이폰(iOS): 하단 중앙의 [공유] 버튼을 누른 후 [홈 화면에 추가]를 선택하세요.\n안드로이드: 우측 상단 메뉴(점 3개)를 누른 후 [앱 설치] 또는 [홈 화면에 추가]를 선택하세요.',
          icon: <Plus className="w-6 h-6 text-blue-600" />
        },
        {
          step: '03',
          title: '앱 실행 및 권한 허용',
          desc: '홈 화면에 생성된 BizAction 아이콘을 눌러 실행합니다. 명함 스캔 기능을 이용할 때 카메라 사용 권한을 반드시 허용해 주세요.',
          icon: <Camera className="w-6 h-6 text-blue-600" />
        }
      ].map((item) => (
        <div key={item.step} className="flex gap-6 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center font-bold text-blue-600 text-lg">
            {item.step}
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              {item.icon}
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>

    <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg space-y-4">
      <div className="flex items-center gap-3">
        <Sparkles className="w-6 h-6" />
        <h3 className="text-lg font-bold">더 편하게 사용하세요!</h3>
      </div>
      <p className="text-sm text-blue-50 opacity-90 leading-relaxed">
        이 가이드를 따라 설치하면 웹 브라우저의 상단 바가 사라지고, 실제 다운로드 받은 앱과 동일한 전체 화면(Full Screen) 환경에서 더 넓고 쾌적하게 사용하실 수 있습니다.
      </p>
      <button 
        onClick={onBack}
        className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform"
      >
        확인했습니다
      </button>
    </div>
  </motion.div>
);

// --- Main App ---

import { auth, db } from './lib/firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, query, where, orderBy } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';

// --- ... (rest of code) ... ---

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('Home');
  const [contacts, setContacts] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);

  React.useEffect(() => {
    signInAnonymously(auth).then((userCredential) => {
      setUser(userCredential.user);
    });
  }, []);

  React.useEffect(() => {
    if (!user) return;

    const contactsQuery = query(collection(db, 'users', user.uid, 'contacts'), orderBy('createdAt', 'desc'));
    const unsubscribeContacts = onSnapshot(contactsQuery, (snapshot) => {
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const tasksQuery = query(collection(db, 'users', user.uid, 'tasks'), orderBy('createdAt', 'desc'));
    const unsubscribeTasks = onSnapshot(tasksQuery, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeContacts();
      unsubscribeTasks();
    };
  }, [user]);

  const toggleTask = async (taskId: string, currentStatus: string) => {
    if (!user) return;
    const taskRef = doc(db, 'users', user.uid, 'tasks', taskId);
    await updateDoc(taskRef, {
      status: currentStatus === 'Completed' ? 'Pending' : 'Completed'
    });
  };

  const addContact = async () => {
    if (!user) return;
    await addDoc(collection(db, 'users', user.uid, 'contacts'), {
      name: 'Jonathan Harrison',
      title: 'Senior Design Lead',
      company: 'Horizon Dynamics',
      email: 'j.harrison@horizon.ai',
      phone: '+1 (555) 012-9844',
      status: 'OCR Validated',
      lastSeen: '방금 전',
      createdAt: new Date().toISOString()
    });
    setActiveScreen('Home');
  };

  const deleteContact = async (contactId: string) => {
    if (!user) return;
    await updateDoc(doc(db, 'users', user.uid, 'contacts', contactId), { status: 'Deleted' });
  };

  const updateContact = async (contactId: string, data: any) => {
    if (!user) return;
    await updateDoc(doc(db, 'users', user.uid, 'contacts', contactId), data);
  };

  const extractActionItems = async () => {
    if (!user) return;
    // Auto-approve: status is set to 'Completed' immediately
    await addDoc(collection(db, 'users', user.uid, 'tasks'), {
      title: '프로젝트 X 예산 승인 확인',
      status: 'Completed', 
      owner: '마커스',
      ownerAvatar: '...',
      dueDate: 'Due Oct 30',
      createdAt: new Date().toISOString()
    });
    setActiveScreen('Tasks');
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home': 
        return <Dashboard 
          contacts={contacts} 
          tasks={tasks} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onScan={() => setActiveScreen('Scan')} 
          onViewContact={() => setActiveScreen('Contact')}
        />;
      case 'Scan': 
        return <ScanScreen onComplete={addContact} />;
      case 'Contact': 
        return <ContactDetail onExtract={extractActionItems} />;
      case 'Tasks': 
        return <TasksScreen tasks={tasks} onToggle={toggleTask} />;
      case 'Profile': 
        return <ProfileScreen onNavigate={setActiveScreen} />;
      case 'Guide': 
        return <GuideScreen onBack={() => setActiveScreen('Profile')} />;
      default: 
        return <Dashboard 
          contacts={contacts} 
          tasks={tasks} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onScan={() => setActiveScreen('Scan')} 
          onViewContact={() => setActiveScreen('Contact')}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      <Header onRefresh={() => window.location.reload()} />
      <main className="pb-24">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>
      <Navbar activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
}
