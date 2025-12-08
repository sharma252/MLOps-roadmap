import { Award } from "lucide-react";
import PropTypes from "prop-types";

const CapstoneProject = ({ capstone }) => {
  return (
    <div className="card border-warning shadow-lg mt-5">
      <div className="card-header bg-warning bg-opacity-25 border-warning">
        <h3 className="mb-0">
          <Award size={32} className="me-2" />
          {capstone.title}
        </h3>
      </div>
      <div className="card-body">
        <p className="lead">{capstone.description}</p>
        <h5 className="mb-3">Project Steps:</h5>
        <div className="row">
          {capstone.steps.map((step, i) => {
            const [title, description] = step.split(":");
            return (
              <div key={i} className="col-md-6 mb-2">
                <div className="d-flex align-items-start">
                  <div
                    className="bg-warning rounded-circle text-white d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "32px",
                      height: "32px",
                      minWidth: "32px",
                      fontWeight: "bold",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-grow-1">
                    <strong>{title}:</strong>
                    <span className="text-muted"> {description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CapstoneProject.propTypes = {
  capstone: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CapstoneProject;
