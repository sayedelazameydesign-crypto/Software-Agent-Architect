import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoaderProps {
  text?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = "جاري التحميل...", className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
      <span className="text-indigo-400/70 text-xs font-mono">{text}</span>
    </div>
  );
};

export default Loader;