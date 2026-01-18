import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ViewState, LogMessage, AgentContextType } from '../types';

const AgentContext = createContext<AgentContextType | undefined>(undefined);

const INITIAL_MESSAGE: LogMessage = {
    id: 'init',
    role: 'system',
    text: `🚀 SYSTEM ONLINE: Full Capacity
✅ Neural Core: Connected
✅ Context Engine: Active
✅ Architecture Layers: 7/7 Operational

مرحباً. أنا الوكيل البرمجي (Software Agent).
أنا جاهز تماماً للعمل كوسيط بين رؤية عملك والتنفيذ التقني.
يمكنك مناقشة استراتيجيات العمل، أو طلب أكواد برمجية معقدة، أو تحليل معماري شامل.`,
    timestamp: new Date()
};

export const AgentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.CONTEXT);
  const [messages, setMessages] = useState<LogMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setLoading] = useState(false);

  const addMessage = (msg: LogMessage) => {
    setMessages(prev => [...prev, msg]);
  };

  return (
    <AgentContext.Provider value={{ 
        currentView, 
        setCurrentView, 
        messages, 
        addMessage, 
        isLoading, 
        setLoading 
    }}>
      {children}
    </AgentContext.Provider>
  );
};

export const useAgentContext = () => {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error('useAgentContext must be used within an AgentProvider');
  }
  return context;
};