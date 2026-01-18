import React, { useRef, useEffect, useState } from 'react';
import { Send, Bot, User, Sparkles, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';
import { LogMessage } from '../../types';
import { sendMessageToAgent } from '../../services/geminiService';
import { motion } from 'framer-motion';
import { useAgent } from '../../hooks/useAgent';
import Loader from '../common/Loader';

const SimulationView: React.FC = () => {
  const [input, setInput] = useState('');
  // Use global state instead of local state
  const { messages, addMessage, isLoading, setLoading } = useAgent();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    if (!process.env.API_KEY) {
        setApiKeyMissing(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: LogMessage = {
        id: Date.now().toString(),
        role: 'user',
        text: input,
        timestamp: new Date()
    };

    addMessage(userMsg);
    setInput('');
    setLoading(true);

    try {
        const history = messages
            .filter(m => m.role !== 'system')
            .map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

        const responseText = await sendMessageToAgent(history, userMsg.text);
        
        const agentMsg: LogMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };

        addMessage(agentMsg);
    } catch (error) {
        console.error(error);
        addMessage({
            id: Date.now().toString(),
            role: 'system',
            text: 'Connection Interrupted. Please check network settings.',
            timestamp: new Date()
        });
    } finally {
        setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSend();
      }
  }

  return (
    <div className="h-full flex flex-col relative bg-slate-900">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur z-10">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-indigo-400" />
                        محاكاة الوكيل (Full Simulation)
                    </h2>
                </div>
                {apiKeyMissing && (
                    <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 px-3 py-1 rounded text-xs border border-amber-500/20">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Missing API_KEY</span>
                    </div>
                )}
            </div>
            
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-2 flex items-center gap-3 text-xs text-indigo-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                    <strong>SYSTEM OPTIMAL:</strong> All contextual layers are synchronized. Latency &lt; 50ms.
                </span>
            </div>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((msg) => (
                <motion.div 
                    key={msg.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                    <div className={`
                        w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg
                        ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-slate-800 border border-indigo-500/30'}
                    `}>
                        {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-indigo-400" />}
                    </div>
                    
                    <div className={`
                        max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed
                        ${msg.role === 'user' 
                            ? 'bg-indigo-600/10 border border-indigo-600/20 text-indigo-100 rounded-tr-sm' 
                            : msg.role === 'system' 
                                ? 'bg-emerald-900/20 border border-emerald-900/40 text-emerald-400 w-full max-w-full text-xs font-mono p-3 text-center' 
                                : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-sm shadow-sm'
                        }
                    `}>
                        {msg.role !== 'system' && (
                            <div className="font-bold mb-2 text-[10px] uppercase tracking-wider opacity-50 flex items-center gap-2">
                                {msg.role === 'user' ? 'User Input' : 'Agent Core Response'}
                            </div>
                        )}
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                    </div>
                </motion.div>
            ))}

            {isLoading && (
                <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center shrink-0">
                        <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                        <Loader text="Processing Context..." />
                    </div>
                </div>
            )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="relative">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="تحدث مع الوكيل البرمجي (مثال: أريد تصميم نظام بنكي متكامل)..."
                    className="w-full bg-slate-800 text-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none border border-slate-700 placeholder:text-slate-600 font-sans text-sm shadow-inner"
                    rows={2}
                    disabled={apiKeyMissing}
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading || apiKeyMissing}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-900/20"
                >
                    <Send className="w-4 h-4 -scale-x-100" /> 
                </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-2 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-indigo-400" />
                Powered by Gemini 2.5 Flash • Context Engineering v1.0
            </p>
        </div>
    </div>
  );
};

export default SimulationView;