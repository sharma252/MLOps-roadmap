import React, { useState } from "react";
import Header from "./components/Header";
import PhaseCard from "./components/PhaseCard";
import CapstoneProject from "./components/CapstoneProject";
import SuccessConfetti from "./components/SuccessConfetti";
import { useProgress } from "./hooks/useProgress";
import { usePhaseExpansion } from "./hooks/usePhaseExpansion";
import { roadmapData } from "./data/roadmapData";
import {
  calculatePhaseProgress,
  calculateTotalProgress,
  isPhaseUnlocked,
  checkPhaseCompletion,
} from "./utils/progressUtils";
import { APP_CONFIG } from "./constants";
import "./App.css";

const MLOpsRoadmap = () => {
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

  return (
    <div className="min-vh-100 bg-light">
      <SuccessConfetti show={showConfetti} />

      <Header
        title="MLOps Learning Roadmap"
        description={roadmapData.intro.description}
        cloud={roadmapData.intro.cloud}
        totalProgress={totalProgress}
      />

      <div className="container py-5">
        {/* Phases */}
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
            onToggleModule={handleToggleModule}
          />
        ))}

        <CapstoneProject capstone={roadmapData.capstone} />
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
              <h5 className="mb-2 fw-bold text-white">
                🚀 Ready to Master MLOps?
              </h5>
              <p className="mb-0 text-white-90">
                Track your progress as you master MLOps! Each completed module
                brings you closer to production-ready skills.
              </p>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-2">
                <span className="badge bg-white text-primary px-3 py-2">
                  5 Phases
                </span>
                <span className="badge bg-white text-primary px-3 py-2">
                  15+ Modules
                </span>
                <span className="badge bg-white text-primary px-3 py-2">
                  1 Capstone
                </span>
              </div>
            </div>
          </div>
          <div className="border-top border-white border-opacity-25 pt-3 pb-2">
            <p className="text-center text-white-90 small mb-0">
              Built with React + Vite + Bootstrap • Open Source Learning
              Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MLOpsRoadmap;
