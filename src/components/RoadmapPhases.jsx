import React from 'react';
import PhaseCard from './PhaseCard';
import { calculatePhaseProgress, isPhaseUnlocked } from '../utils/progressUtils';
import { roadmapData } from '../data/roadmapData';

const RoadmapPhases = ({ completedItems, expandedPhases, togglePhase, onToggleModule }) => {
  return (
    <>
      {roadmapData.phases.map((phase, index) => (
        <PhaseCard
          key={phase.id}
          phase={phase}
          progress={calculatePhaseProgress(phase, completedItems)}
          isUnlocked={isPhaseUnlocked(
            index,
            roadmapData.phases,
            completedItems
          )}
          isExpanded={expandedPhases[phase.id] || false}
          completedItems={completedItems}
          onTogglePhase={() => togglePhase(phase.id)}
          onToggleModule={onToggleModule}
        />
      ))}
    </>
  );
};

export default RoadmapPhases;
