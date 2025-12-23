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
    <div className={`phase-card-wrapper ${!isUnlocked ? "" : ""}`}>
      <div className={`glass-card ${isExpanded ? "" : ""}`}>
        <div
          className={`phase-header ${isExpanded ? "active" : ""} ${
            !isUnlocked ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => isUnlocked && onTogglePhase()}
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
          <div className="phase-header-left-content d-flex align-items-center flex-grow-1">
            <div
              className={`me-4 ${isExpanded || isUnlocked ? "" : ""}`}
              style={{
                padding: "1rem",
                borderRadius: "1.5rem",
                background:
                  isExpanded || isUnlocked
                    ? "rgba(79, 70, 229, 0.1)"
                    : "#f3f4f6",
              }}
            >
              {isUnlocked ? (
                <PhaseIcon size={32} style={{ color: "var(--primary)" }} />
              ) : (
                <Lock size={32} style={{ color: "#9ca3af" }} />
              )}
            </div>
            <div>
              <h3
                className={`h4 mb-1 fw-bold ${!isUnlocked ? "" : ""}`}
                style={{
                  color: !isUnlocked ? "#6b7280" : "var(--dark)",
                }}
              >
                {phase.title}
              </h3>
              <p className="mb-0 text-muted small">{phase.description}</p>
            </div>
          </div>

          <div className="phase-header-right-content d-flex align-items-center ms-4">
            <div className="text-end me-4 d-none d-md-block">
              <div className="h5 mb-0 fw-bold text-primary">{progress}%</div>
            </div>
            <div
              className={`p-2 rounded-circle ${isExpanded ? "" : ""}`}
              style={{
                transition: "transform 0.2s",
                transform: isExpanded ? "rotate(180deg)" : "none",
                background: isExpanded
                  ? "rgba(79, 70, 229, 0.1)"
                  : "transparent",
              }}
            >
              <ChevronDown
                size={24}
                style={{ color: isExpanded ? "var(--primary)" : "#9ca3af" }}
              />
            </div>
          </div>
        </div>

        {/* phase modules section */}
        {isExpanded && isUnlocked && (
          <div
            style={{
              padding: "1.5rem",
              background: "rgba(248, 250, 252, 0.5)",
            }}
          >
            <div className="module-card-container row g-4">
              {phase.modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isCompleted={completedItems[module.id] || false}
                  onToggle={() => onToggleModule(module.id)}
                />
              ))}
            </div>

            <div className="exit-criteria-container mt-4 pt-4 border-top">
              <ExitCriteria criteria={phase.exitCriteria} />
            </div>
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
