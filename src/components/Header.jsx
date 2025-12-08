import { Zap, Cloud, TrendingUp } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ title, description, cloud, totalProgress }) => {
  return (
    <header className="hero-header">
      <div className="hero-overlay"></div>
      <div className="container position-relative">
        <div className="row align-items-center py-5">
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
            <div className="hero-content">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-wrapper me-3">
                  <Zap size={40} strokeWidth={2.5} />
                </div>
                <h1 className="display-4 fw-bold mb-0 text-white">{title}</h1>
              </div>
              <p className="lead mb-3 text-white-90">{description}</p>
              <div className="d-flex align-items-center badge bg-white bg-opacity-25 text-white px-3 py-2 rounded-pill">
                <Cloud className="me-2" size={18} />
                <span className="small fw-medium">{cloud}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="progress-card">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="card-title mb-0 text-dark">Your Progress</h5>
                    <TrendingUp className="text-success" size={24} />
                  </div>
                  <div className="text-center my-3">
                    <div className="progress-circle mb-2">
                      <h2 className="display-3 fw-bold text-primary mb-0">
                        {totalProgress}
                        <span className="fs-4 text-muted">%</span>
                      </h2>
                    </div>
                    <p className="text-muted mb-3">Completed</p>
                  </div>
                  <div className="progress" style={{ height: "12px" }}>
                    <div
                      className="progress-bar bg-gradient-success"
                      role="progressbar"
                      style={{ width: `${totalProgress}%` }}
                      aria-valuenow={totalProgress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="visually-hidden">
                        {totalProgress}% Complete
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">Start</small>
                    <small className="text-muted">Complete</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cloud: PropTypes.string.isRequired,
  totalProgress: PropTypes.number.isRequired,
};

export default Header;
