import { Award } from "lucide-react";
import PropTypes from "prop-types";

const CapstoneProject = ({ capstone }) => {
  return (
    <div className="capstone-project-container mt-4 mb-4 ps-3 pe-3">
      <div className="capstone-card">
        <div className="capstone-header text-center py-4 px-3">
          <div
            className="d-inline-flex align-items-center justify-content-center p-2 rounded-circle mb-2"
            style={{ background: "rgba(234, 179, 8, 0.1)" }}
          >
            <Award size={32} style={{ color: "#ca8a04" }} />
          </div>
          <h3 className="mb-2 fw-bold text-dark">{capstone.title}</h3>
          <p
            className="text-muted mx-auto small mb-0"
            style={{ maxWidth: "600px" }}
          >
            {capstone.description}
          </p>
        </div>

        <div className="project-overview-container p-3 p-md-4 bg-white">
          <h6 className="mb-3 fw-bold d-flex align-items-center">
            <span className="me-2">🛠️</span> Project Steps
          </h6>
          <div className="project-steps-container row g-3">
            {capstone.steps.map((step, i) => {
              const [title, description] = step.split(":");
              return (
                <div key={i} className="project-step col-md-6">
                  <div className="step-card h-100">
                    <div className="d-flex gap-2 align-items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle small fw-bold text-white shadow-sm"
                          style={{
                            width: "28px",
                            height: "28px",
                            background:
                              "linear-gradient(135deg, #ca8a04, #ea580c)",
                            fontSize: "0.85rem",
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div>
                        <div className="fw-bold mb-1 text-dark small">
                          {title}
                        </div>
                        <p className="mb-0 text-muted small lh-sm">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
