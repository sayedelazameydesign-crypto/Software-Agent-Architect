import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import SystemContextView from './components/Views/SystemContextView';
import LayerArchitectureView from './components/Views/LayerArchitectureView';
import DataFlowView from './components/Views/DataFlowView';
import OperationsView from './components/Views/OperationsView';
import SimulationView from './components/Views/SimulationView';
import { ViewState } from './types';
import { AgentProvider, useAgentContext } from './context/AgentContext';

// Inner component to consume context
const MainLayout: React.FC = () => {
  const { currentView, setCurrentView } = useAgentContext();

  const renderView = () => {
    switch (currentView) {
      case ViewState.CONTEXT:
        return <SystemContextView />;
      case ViewState.LAYERS:
        return <LayerArchitectureView />;
      case ViewState.FLOW:
        return <DataFlowView />;
      case ViewState.OPERATIONS:
        return <OperationsView />;
      case ViewState.SIMULATION:
        return <SimulationView />;
      default:
        return <SystemContextView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans" dir="rtl">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-1 mr-64 transition-all duration-300 relative">
        <div className="h-screen overflow-y-auto">
             {renderView()}
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AgentProvider>
      <MainLayout />
    </AgentProvider>
  );
};

export default App;