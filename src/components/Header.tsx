import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/95 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 text-slate-400 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input 
            type="text" 
            placeholder="بحث..." 
            className="bg-slate-800 text-sm text-slate-200 rounded-full pl-4 pr-10 py-1.5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-64 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border border-slate-900"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10 shadow-lg"></div>
      </div>
    </header>
  );
};

export default Header;