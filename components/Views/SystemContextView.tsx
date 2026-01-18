import React from 'react';
import { Globe, Users, Database, ArrowLeftRight, Code2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const SystemContextView: React.FC = () => {
  return (
    <div className="p-8 space-y-12">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">السياق النظامي العام</h2>
        <p className="text-slate-400">نظرة شمولية على بيئة عمل الوكيل البرمجي وتفاعلاته الخارجية.</p>
      </header>

      {/* External Environment */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 bg-slate-800 rounded-bl-xl border-b border-l border-slate-700 text-slate-300 font-bold flex gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          البيئة الخارجية (External Environment)
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {['العملاء', 'السوق', 'المنافسين', 'التقنيات الناشئة'].map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 p-4 rounded-lg border border-slate-700/50 text-slate-400 hover:text-blue-300 hover:border-blue-500/50 transition-colors cursor-default">
                    {item}
                </div>
            ))}
        </div>
      </motion.div>

      {/* Interactions Flow */}
      <div className="flex justify-around px-20">
        <div className="flex flex-col items-center gap-2 text-green-400">
            <ArrowLeftRight className="w-8 h-8 animate-pulse" />
            <span className="text-sm font-bold">التفاعلات التجارية</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-cyan-400">
            <ArrowLeftRight className="w-8 h-8 animate-pulse" />
            <span className="text-sm font-bold">التفاعلات التقنية</span>
        </div>
      </div>

      {/* The Agent Core */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10"
      >
        <div className="w-full bg-gradient-to-r from-indigo-900/40 to-slate-900/40 border-2 border-indigo-500/50 rounded-3xl p-8 shadow-2xl shadow-indigo-900/20 backdrop-blur-sm">
            <div className="absolute -top-6 right-1/2 translate-x-1/2 bg-indigo-600 px-6 py-2 rounded-full text-white font-bold shadow-lg flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                النظام: الوكيل البرمجي
            </div>
            
            <div className="mt-6 flex flex-col md:flex-row gap-8 justify-center items-stretch h-full">
                
                {/* Business Context */}
                <div className="flex-1 bg-slate-900/60 rounded-xl p-6 border border-green-900/30 hover:border-green-500/50 transition-all group">
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        سياق الأعمال
                    </h3>
                    <div className="space-y-4 text-sm text-slate-300">
                        <div className="p-3 bg-slate-800 rounded border-r-2 border-green-500">
                            <span className="text-green-300 block mb-1">المدخلات:</span>
                            متطلبات السوق، احتياجات العملاء، الفرص
                        </div>
                        <div className="p-3 bg-slate-800 rounded border-l-2 border-green-500 text-left">
                            <span className="text-green-300 block mb-1 rtl:text-left">Outputs:</span>
                            العروض، العقود، العلاقات
                        </div>
                    </div>
                </div>

                {/* Tech Context */}
                <div className="flex-1 bg-slate-900/60 rounded-xl p-6 border border-cyan-900/30 hover:border-cyan-500/50 transition-all">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        سياق التطوير
                    </h3>
                    <div className="space-y-4 text-sm text-slate-300">
                        <div className="p-3 bg-slate-800 rounded border-r-2 border-cyan-500">
                            <span className="text-cyan-300 block mb-1">المدخلات:</span>
                            المتطلبات الوظيفية، معايير الجودة، القيود
                        </div>
                        <div className="p-3 bg-slate-800 rounded border-l-2 border-cyan-500 text-left">
                            <span className="text-cyan-300 block mb-1 rtl:text-left">Outputs:</span>
                            أكواد برمجية، وثائق، نماذج أولية
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </motion.div>

      {/* Footer Stakeholders */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center"
        >
            <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h4 className="font-bold text-slate-200">المطور / صاحب المشروع</h4>
        </motion.div>
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center"
        >
            <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="font-bold text-slate-200">البنية التقنية (Tech Stack)</h4>
        </motion.div>
      </div>

    </div>
  );
};

export default SystemContextView;