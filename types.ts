export enum ViewState {
  CONTEXT = 'CONTEXT',
  LAYERS = 'LAYERS',
  FLOW = 'FLOW',
  OPERATIONS = 'OPERATIONS',
  SIMULATION = 'SIMULATION'
}

export interface LayerDef {
  id: number;
  name: string;
  enName: string;
  description: string;
  color: string;
}

export interface MetricData {
  name: string;
  // Fix: Make value optional as it is not present in all metric types (e.g. performance metrics)
  value?: number;
  fullMark?: number;
  unit?: string;
  fill?: string;
  actual?: number;
  target?: number;
  // Fix: Add index signature to satisfy Recharts data type requirements
  [key: string]: any;
}

export interface LogMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
}

export interface StepDef {
  id: number;
  title: string;
  icon: any;
  desc: string;
}

export interface AgentContextType {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  messages: LogMessage[];
  addMessage: (msg: LogMessage) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}