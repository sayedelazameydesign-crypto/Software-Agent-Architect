import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { flowSteps } from '../../data/appData';
import Card from '../common/Card';

const DataFlowView: React.FC = () => {
    return (
        <div className="p-8 h-full flex flex-col">
             <header className="mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-2">تدفق البيانات (Data Flow)</h2>
                <p className="text-slate-400">رحلة تحويل المتطلبات من مجرد فكرة تجارية إلى منتج تقني.</p>
            </header>

            <div className="flex-1 flex flex-col justify-center items-center gap-12">
                
                {/* Flow Diagram */}
                <div className="flex items-center gap-4 w-full justify-between max-w-5xl">
                    {flowSteps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col items-center group">
                            {/* Connector Line */}
                            {index < flowSteps.length - 1 && (
                                <div className="absolute top-8 right-1/2 w-full h-1 bg-slate-800 -z-10">
                                    <motion.div 
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1, delay: index * 0.5, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
                                        className="h-full bg-indigo-500 origin-right"
                                    />
                                </div>
                            )}

                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.3 }}
                                className="w-16 h-16 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center shadow-lg group-hover:border-indigo-500 group-hover:shadow-indigo-500/30 transition-all z-10"
                            >
                                <step.icon className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
                            </motion.div>
                            
                            <div className="mt-4 text-center">
                                <h3 className="font-bold text-slate-200">{step.title}</h3>
                                <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Integration Layer Box */}
                <Card animate className="w-full max-w-4xl bg-gradient-to-b from-slate-800 to-slate-900">
                    <div className="flex items-start gap-6">
                        <div className="bg-indigo-500/10 p-4 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-indigo-300 mb-2">طبقة التنسيق والتكامل (Coordination & Integration Layer)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                {[
                                    'تحويل المتطلبات ↔ المواصفات',
                                    'تزامن الجداول الزمنية',
                                    'إدارة التبعيات'
                                ].map((item, i) => (
                                    <div key={i} className="bg-slate-950/50 p-4 rounded-lg border border-indigo-900/30 text-center text-sm text-slate-300">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Pattern Info */}
                <div className="mt-8 text-center bg-slate-800/30 px-6 py-2 rounded-full border border-slate-700/50">
                    <span className="text-slate-400 text-sm">Design Pattern: </span>
                    <span className="text-indigo-400 font-mono font-bold">Mediator / Facade</span>
                </div>

            </div>
        </div>
    );
};

export default DataFlowView;