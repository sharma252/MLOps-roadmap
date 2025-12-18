import { useState } from 'react';
import { useProgress } from './useProgress';
import { usePhaseExpansion } from './usePhaseExpansion';
import { roadmapData } from '../data/roadmapData';
import { checkPhaseCompletion, calculateTotalProgress } from '../utils/progressUtils';
import { APP_CONFIG } from '../constants';

export const useRoadmapLogic = () => {
    const { completedItems, toggleItem } = useProgress();
    const { expandedPhases, togglePhase } = usePhaseExpansion();
    const [showConfetti, setShowConfetti] = useState(false);

    const handleToggleModule = (itemId) => {
        const oldCompleted = { ...completedItems };
        const newCompleted = toggleItem(itemId);

        // Check if phase completed
        const phase = roadmapData.phases.find((p) =>
            p.modules.some((m) => m.id === itemId)
        );

        if (phase && checkPhaseCompletion(phase, newCompleted, oldCompleted)) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), APP_CONFIG.confettiDuration);
        }
    };

    const totalProgress = calculateTotalProgress(
        roadmapData.phases,
        completedItems
    );

    return {
        completedItems,
        expandedPhases,
        togglePhase,
        handleToggleModule,
        showConfetti,
        totalProgress
    };
};
