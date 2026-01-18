import React from 'react';
import { APP_VERSION, APP_NAME } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-8 border-t border-slate-800/50 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Support</a>
          <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">v{APP_VERSION}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;