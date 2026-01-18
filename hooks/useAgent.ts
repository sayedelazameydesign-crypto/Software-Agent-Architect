import { useAgentContext } from '../context/AgentContext';

export const useAgent = () => {
  return useAgentContext();
};