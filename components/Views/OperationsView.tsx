import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { RefreshCw, Clock, Server, CheckCircle, Wifi, Zap } from 'lucide-react';
import { qualityMetrics, performanceMetrics } from '../../data/appData';
import Card from '../common/Card';

const OperationsView: React.FC = () => {
    return (
        <div className="p-8 h-full overflow-y-auto">
             <header className="mb-8 flex items-start justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-slate-100 mb-2">العمليات والجودة (Operations)</h2>
                    <p className="text-slate-400">لوحة مراقبة الأداء وحلقة التحسين المستمر.</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold text-sm">Systems Nominal</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Continuous Improvement Loop */}
                <Card animate className="flex flex-col items-center justify-center relative min-h-[300px]">
                    <h3 className="absolute top-6 right-6 font-bold text-slate-300 flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-indigo-400" />
                        حلقة التحسين (Active)
                    </h3>
                    
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-500/30"
                        />
                        
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-indigo-500 p-3 rounded-xl z-10 text-indigo-400 font-bold text-sm shadow-lg shadow-indigo-500/20">
                            مراقبة
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 border border-indigo-500 p-3 rounded-xl z-10 text-indigo-400 font-bold text-sm shadow-lg shadow-indigo-500/20">
                            تكيف
                        </div>
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-indigo-500 p-3 rounded-xl z-10 text-indigo-400 font-bold text-sm shadow-lg shadow-indigo-500/20">
                            تحليل
                        </div>

                        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/30">
                            <div className="text-center text-white">
                                <Zap className="w-8 h-8 mx-auto mb-1" />
                                <span className="text-[10px] opacity-80">Running</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 gap-4">
                    
                    {/* Availability Card */}
                    <Card className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <Server className="w-4 h-4" />
                                كفاءة النظام (Uptime)
                            </div>
                            <div className="text-3xl font-bold text-emerald-400">99.9%</div>
                            <div className="text-xs text-emerald-500/70 mt-1 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                Target Met
                            </div>
                        </div>
                        <div className="w-24 h-24">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={qualityMetrics}
                                        innerRadius={25}
                                        outerRadius={40}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {qualityMetrics.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    {/* Response Time Card */}
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-slate-400">
                                <Clock className="w-4 h-4" />
                                زمن الاستجابة (Latency)
                            </div>
                            <span className="text-indigo-400 font-bold text-sm">Optimal</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden relative">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '15%' }}
                                className="h-full bg-emerald-500 rounded-full"
                            />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 mt-2">
                            <span className="text-emerald-400">Current: 24ms</span>
                            <span>Target: &lt;100ms</span>
                        </div>
                    </Card>

                     {/* Connectivity Card */}
                     <Card>
                        <div className="flex items-center gap-2 text-slate-400 mb-2">
                            <Wifi className="w-4 h-4" />
                            حالة الاتصال (Connectivity)
                        </div>
                        <div className="flex gap-2">
                             <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs border border-indigo-500/20 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> AI Core
                             </span>
                             <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs border border-indigo-500/20 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Context DB
                             </span>
                        </div>
                    </Card>

                </div>
            </div>

             {/* Chart Section */}
             <Card className="h-64 w-full">
                <h3 className="text-slate-300 font-bold mb-4">مقاييس الأداء (Performance Metrics)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceMetrics} layout="vertical" margin={{ left: 20 }}>
                         <XAxis type="number" hide />
                         <YAxis dataKey="name" type="category" stroke="#94a3b8" width={80} tick={{fontSize: 12}} />
                         <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                            cursor={{fill: '#334155', opacity: 0.4}}
                         />
                         <Bar dataKey="actual" name="الحالي" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                         <Bar dataKey="target" name="الهدف" fill="#334155" radius={[0, 4, 4, 0]} barSize={20} />
                         <Legend />
                    </BarChart>
                </ResponsiveContainer>
             </Card>
        </div>
    );
};

export default OperationsView;