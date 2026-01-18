import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import { ViewState } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans" dir="rtl">
      <Sidebar currentView={currentView} onChangeView={onChangeView} />
      <div className="flex-1 mr-64 flex flex-col transition-all duration-300 relative min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-950 relative">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;