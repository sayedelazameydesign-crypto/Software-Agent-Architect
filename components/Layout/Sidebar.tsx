import React from 'react';
import { ViewState } from '../../types';
import { 
  LayoutDashboard, 
  Layers, 
  Workflow, 
  Activity, 
  Bot, 
  Settings2 
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const menuItems = [
    { id: ViewState.CONTEXT, label: 'السياق العام', icon: LayoutDashboard },
    { id: ViewState.LAYERS, label: 'الطبقات المعمارية', icon: Layers },
    { id: ViewState.FLOW, label: 'تدفق البيانات', icon: Workflow },
    { id: ViewState.OPERATIONS, label: 'العمليات والجودة', icon: Activity },
    { id: ViewState.SIMULATION, label: 'محاكاة الوكيل', icon: Bot },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-l border-slate-700 h-screen flex flex-col fixed right-0 top-0 z-50">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
          <Settings2 className="w-6 h-6" />
          <span>هندسة الوكيل</span>
        </h1>
        <p className="text-xs text-slate-500 mt-2">Software Agent Context</p>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20 shadow-lg shadow-indigo-900/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-lg p-3 text-xs text-slate-500 text-center">
          v1.0.0 Stable Build
          <br />
          Context Engineering
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;