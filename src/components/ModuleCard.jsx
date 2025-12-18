import { Book, CheckCircle, Circle, Target } from "lucide-react";
import PropTypes from "prop-types";

const ModuleCard = ({ module, isCompleted, onToggle }) => {
  return (
    <div className="col-md-6 mb-3">
      <div
        className={`glass-card h-100 p-4 transition-all duration-300 cursor-default ${isCompleted ? 'border-success border-opacity-50' : ''}`}
        style={{ background: isCompleted ? 'rgba(240, 253, 244, 0.6)' : 'rgba(255, 255, 255, 0.6)' }}
      >
        <div className="d-flex align-items-start justify-content-between mb-3">
            <div className="d-flex align-items-start">
               <div className={`p-2 rounded-lg me-3 ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                   <Book size={20} />
               </div>
               <h5 className="card-title mb-0 fw-bold lh-base">{module.title}</h5>
            </div>
            <button
              className={`btn btn-link p-0 ${isCompleted ? 'text-success' : 'text-muted opacity-50 hover-opacity-100'}`}
              onClick={onToggle}
              aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
            >
              {isCompleted ? <CheckCircle size={28} className="fill-current" /> : <Circle size={28} />}
            </button>
        </div>

          <h6 className="text-uppercase text-muted small fw-bold tracking-wider mb-2">Key Topics</h6>
          <ul className="list-unstyled mb-4">
            {module.topics.map((topic, i) => (
              <li key={i} className="mb-1 d-flex align-items-center text-secondary small">
                  <span className="me-2 text-primary opacity-50">•</span> {topic}
              </li>
            ))}
          </ul>

          {module.exercise && (
            <div className="bg-blue-50 text-blue-800 p-3 rounded-xl mb-3 border border-blue-100">
              <strong className="d-block mb-1 small text-uppercase tracking-wide text-blue-600">
                <Target size={14} className="me-1" /> Exercise
              </strong>
              <div className="small opacity-90">{module.exercise}</div>
            </div>
          )}

          {module.resources.length > 0 && (
            <div className="mt-auto pt-3 border-top border-gray-100">
              <small className="text-muted d-block mb-1 fw-bold">Resources</small>
               <div className="d-flex flex-wrap gap-2">
                   {module.resources.map((res, i) => (
                       <a 
                         key={i} 
                         href={res.url} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="badge bg-gray-100 text-dark border fw-normal text-decoration-none"
                        >
                            {res.title}
                        </a>
                   ))}
               </div>
            </div>
          )}
      </div>
    </div>
  );
};

ModuleCard.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.string).isRequired,
    exercise: PropTypes.string,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ModuleCard;
