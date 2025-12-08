import { Book, CheckCircle, Circle, Target } from "lucide-react";
import PropTypes from "prop-types";

const ModuleCard = ({ module, isCompleted, onToggle }) => {
  return (
    <div className="col-md-6 mb-3">
      <div
        className={`card h-100 border-${
          isCompleted ? "success" : "secondary"
        } module-card`}
      >
        <div className="card-body">
          <div className="d-flex align-items-start justify-content-between mb-3">
            <h5 className="card-title mb-0">
              <Book size={20} className="me-2" />
              {module.title}
            </h5>
            <button
              className={`btn btn-sm ${
                isCompleted ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={onToggle}
              aria-label={
                isCompleted ? "Mark as incomplete" : "Mark as complete"
              }
            >
              {isCompleted ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>
          </div>

          <h6 className="text-muted mb-2">Key Topics:</h6>
          <ul className="small mb-3">
            {module.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>

          {module.exercise && (
            <div className="alert alert-info py-2 px-3 mb-2">
              <strong>
                <Target size={16} className="me-1" />
                Exercise:
              </strong>
              <div className="small mt-1">{module.exercise}</div>
            </div>
          )}

          {module.resources.length > 0 && (
            <div className="mt-2">
              <small className="text-muted">
                📚 Resources: {module.resources.join(", ")}
              </small>
            </div>
          )}
        </div>
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
    resources: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ModuleCard;
