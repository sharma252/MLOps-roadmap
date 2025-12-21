import { useState } from "react";

// Custom hook to manage the expansion state of phases
export const usePhaseExpansion = () => {
  const [expandedPhases, setExpandedPhases] = useState({});

  const togglePhase = (phaseId) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }));
  };

  return {
    expandedPhases,
    togglePhase,
  };
};
