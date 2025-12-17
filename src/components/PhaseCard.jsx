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
    <div className={`phase-card-wrapper ${!isUnlocked ? "opacity-75 blur-sm" : ""}`}>
      <div 
        className={`glass-card overflow-hidden transition-all duration-300 ${isExpanded ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
      >
        <div
          className={`phase-header ${isExpanded ? 'active' : ''} ${!isUnlocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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
          <div className="d-flex align-items-center flex-grow-1">
             <div className={`p-3 rounded-2xl me-4 transition-colors duration-300 ${
               isExpanded || isUnlocked ? `bg-${phase.color} bg-opacity-10` : 'bg-gray-100'
             }`}>
               {isUnlocked ? (
                  <PhaseIcon size={32} className={`text-${phase.color}`} />
               ) : (
                  <Lock size={32} className="text-gray-400" />
               )}
             </div>
             <div>
                <h3 className={`h4 mb-1 fw-bold ${!isUnlocked ? 'text-gray-500' : 'text-dark'}`}>
                  {phase.title}
                </h3>
                <p className="mb-0 text-muted small">{phase.description}</p>
             </div>
          </div>
          
          <div className="d-flex align-items-center ms-4">
             <div className="text-end me-4 d-none d-md-block">
               <div className="h5 mb-0 fw-bold text-primary">{progress}%</div>
             </div>
             <div className={`p-2 rounded-circle transition-transform duration-300 ${isExpanded ? 'bg-primary bg-opacity-10 rotate-180' : ''}`}>
                <ChevronDown size={24} className={isExpanded ? 'text-primary' : 'text-gray-400'} />
             </div>
          </div>
        </div>

        {isExpanded && isUnlocked && (
          <div className="p-4 bg-light bg-opacity-50">
            <div className="row g-4">
              {phase.modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isCompleted={completedItems[module.id] || false}
                  onToggle={() => onToggleModule(module.id)}
                />
              ))}
            </div>
            <div className="mt-4 pt-4 border-top">
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
