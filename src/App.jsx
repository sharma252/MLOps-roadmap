import React from "react";
import { Header, Footer, RoadmapPhases, CapstoneProject, SuccessConfetti } from "./components";
import { useRoadmapLogic } from "./hooks";
import { roadmapData } from "./data/roadmapData";
import "./App.css";

const MLOpsRoadmap = () => {
  const {
    completedItems,
    expandedPhases,
    togglePhase,
    handleToggleModule,
    showConfetti,
    totalProgress
  } = useRoadmapLogic();

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
        <RoadmapPhases 
            completedItems={completedItems}
            expandedPhases={expandedPhases}
            togglePhase={togglePhase}
            onToggleModule={handleToggleModule}
        />
        <CapstoneProject capstone={roadmapData.capstone} />
      </div>

      <Footer />
    </div>
  );
};

export default MLOpsRoadmap;
