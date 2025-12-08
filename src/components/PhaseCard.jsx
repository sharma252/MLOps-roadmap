import { Lock, Unlock, ChevronRight, ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import ModuleCard from "./ModuleCard";
import ExitCriteria from "./ExitCriteria";

const PhaseCard = ({
  phase,
  progress,
  isUnlocked,
  isExpanded,
  completedItems,
  onTogglePhase,
  onToggleModule,
}) => {
  const PhaseIcon = phase.icon;

  return (
    <div className="mb-4">
      <div
        className={`card border-${phase.color} shadow-sm phase-card ${
          !isUnlocked ? "opacity-75" : ""
        }`}
      >
        <div
          className={`card-header bg-${phase.color} bg-opacity-10 border-${phase.color} cursor-pointer`}
          onClick={() => isUnlocked && onTogglePhase()}
          style={{ cursor: isUnlocked ? "pointer" : "not-allowed" }}
          role="button"
          tabIndex={isUnlocked ? 0 : -1}
          aria-expanded={isExpanded}
          onKeyDown={(e) => {
            if (isUnlocked && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onTogglePhase();
            }
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {isUnlocked ? (
                <Unlock size={24} className="me-2" aria-label="Unlocked" />
              ) : (
                <Lock size={24} className="me-2" aria-label="Locked" />
              )}
              <PhaseIcon size={32} className={`text-${phase.color} me-3`} />
              <div>
                <h4 className="mb-1">{phase.title}</h4>
                <p className="mb-0 text-muted">{phase.description}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3 text-end">
                <div className="fw-bold text-primary">{progress}%</div>
                <small className="text-muted">Complete</small>
              </div>
              {isExpanded ? (
                <ChevronDown size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </div>
          </div>
        </div>

        {isExpanded && isUnlocked && (
          <div className="card-body">
            <div className="row">
              {phase.modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isCompleted={completedItems[module.id] || false}
                  onToggle={() => onToggleModule(module.id)}
                />
              ))}
            </div>
            <ExitCriteria criteria={phase.exitCriteria} />
          </div>
        )}
      </div>
    </div>
  );
};

PhaseCard.propTypes = {
  phase: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modules: PropTypes.array.isRequired,
    exitCriteria: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  progress: PropTypes.number.isRequired,
  isUnlocked: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  completedItems: PropTypes.object.isRequired,
  onTogglePhase: PropTypes.func.isRequired,
  onToggleModule: PropTypes.func.isRequired,
};

export default PhaseCard;
