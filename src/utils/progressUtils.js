export const calculatePhaseProgress = (phase, completedItems) => {
  const completed = phase.modules.filter((m) => completedItems[m.id]).length;
  return Math.round((completed / phase.modules.length) * 100);
};

export const calculateTotalProgress = (phases, completedItems) => {
  const totalModules = phases.reduce((acc, p) => acc + p.modules.length, 0);
  const completed = Object.values(completedItems).filter(Boolean).length;
  return Math.round((completed / totalModules) * 100);
};

export const isPhaseUnlocked = (phaseIndex, phases, completedItems) => {
  if (phaseIndex === 0) return true;
  const prevPhase = phases[phaseIndex - 1];
  return prevPhase.modules.every((m) => completedItems[m.id]);
};

export const checkPhaseCompletion = (phase, newCompleted, oldCompleted) => {
  const allModulesComplete = phase.modules.every((m) => newCompleted[m.id]);
  const wasNotCompleted = !phase.modules.every((m) => oldCompleted[m.id]);
  return allModulesComplete && wasNotCompleted;
};
