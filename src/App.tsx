import React from 'react';
import Layout from './components/Layout/Layout';
import SystemContextView from './components/Views/SystemContextView';
import LayerArchitectureView from './components/Views/LayerArchitectureView';
import DataFlowView from './components/Views/DataFlowView';
import OperationsView from './components/Views/OperationsView';
import SimulationView from './components/Views/SimulationView';
import { ViewState } from './types';
import { AgentProvider, useAgentContext } from './context/AgentContext';

// Inner component to consume context
const AppContent: React.FC = () => {
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
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AgentProvider>
      <AppContent />
    </AgentProvider>
  );
};

export default App;