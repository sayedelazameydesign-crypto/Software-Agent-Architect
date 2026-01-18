import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { layers } from '../../data/appData';
import { ChevronDown, Box, Cpu, ShieldCheck, GitMerge, FileText, PlayCircle, Layers } from 'lucide-react';

const LayerArchitectureView: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  return (
    <div className="p-8 h-full flex flex-col">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">الطبقات المعمارية (Layer Architecture)</h2>
        <p className="text-slate-400">هيكلية الوكيل البرمجي من المستوى الاستراتيجي إلى المستوى التنفيذي.</p>
      </header>

      <div className="flex-1 flex gap-12 items-start">
        
        {/* The Stack */}
        <div className="flex-1 space-y-2 max-w-xl">
            {layers.map((layer) => (
                <motion.div
                    key={layer.id}
                    layoutId={`layer-${layer.id}`}
                    onClick={() => setSelectedLayer(layer.id === selectedLayer ? null : layer.id)}
                    className={`
                        relative overflow-hidden rounded-lg cursor-pointer border border-white/10 shadow-lg
                        transition-all duration-300 group
                        ${selectedLayer === layer.id ? 'h-32 ring-2 ring-white/50' : 'h-16 hover:h-20'}
                    `}
                >
                    <div className={`absolute inset-0 opacity-80 ${layer.color} transition-opacity group-hover:opacity-100`} />
                    
                    <div className="relative z-10 p-4 h-full flex flex-col justify-center">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-black text-white/20">L{layer.id}</span>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                                    <span className="text-xs text-white/60 font-mono tracking-wider">{layer.enName}</span>
                                </div>
                            </div>
                            {selectedLayer === layer.id ? <ChevronDown className="text-white rotate-180 transition-transform" /> : <ChevronDown className="text-white" />}
                        </div>
                        
                        {selectedLayer === layer.id && (
                            <motion.p 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                className="mt-2 text-white/90 text-sm border-t border-white/20 pt-2"
                            >
                                {layer.description}
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Detail Panel */}
        <div className="flex-1 bg-slate-800/50 rounded-2xl border border-slate-700 p-8 min-h-[500px] flex items-center justify-center relative glass-panel">
            <AnimatePresence mode="wait">
                {selectedLayer ? (
                    <motion.div
                        key={selectedLayer}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-center space-y-6 w-full"
                    >
                        <div className={`w-24 h-24 rounded-2xl ${layers.find(l => l.id === selectedLayer)?.color} mx-auto flex items-center justify-center shadow-2xl`}>
                            {selectedLayer === 7 && <BriefcaseIcon />}
                            {selectedLayer === 6 && <Cpu size={48} className="text-white" />}
                            {selectedLayer === 5 && <Box size={48} className="text-white" />}
                            {selectedLayer === 4 && <GitMerge size={48} className="text-white" />}
                            {selectedLayer === 3 && <ShieldCheck size={48} className="text-white" />}
                            {selectedLayer === 2 && <PlayCircle size={48} className="text-white" />}
                            {selectedLayer === 1 && <Layers size={48} className="text-white" />}
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{layers.find(l => l.id === selectedLayer)?.name}</h3>
                            <p className="text-indigo-400 font-mono">{layers.find(l => l.id === selectedLayer)?.enName}</p>
                        </div>

                        <div className="bg-slate-900/80 p-6 rounded-xl text-right border border-slate-700">
                             <h4 className="text-sm text-slate-400 mb-4 border-b border-slate-700 pb-2">المسؤوليات الرئيسية</h4>
                             <ul className="space-y-2 text-slate-300 text-sm list-disc pr-4">
                                <li>استقبال المدخلات من الطبقة {selectedLayer === 7 ? 'الخارجية' : `L${selectedLayer + 1}`}</li>
                                <li>معالجة البيانات حسب منطق {layers.find(l => l.id === selectedLayer)?.name}</li>
                                <li>تصدير المخرجات إلى الطبقة {selectedLayer === 1 ? 'النظام' : `L${selectedLayer - 1}`}</li>
                             </ul>
                        </div>
                    </motion.div>
                ) : (
                    <div className="text-center text-slate-500">
                        <Layers className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>اختر طبقة من القائمة لعرض التفاصيل الهندسية</p>
                    </div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
)

export default LayerArchitectureView;