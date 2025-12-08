import { useState } from "react";

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
