import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
