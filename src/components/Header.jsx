import { Zap, Cloud, TrendingUp } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ title, description, cloud, totalProgress }) => {
  return (
    <header className="hero-header">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
            <div className="hero-content">
              <div className="d-flex align-items-center mb-4">
                <div className="p-3 bg-white bg-opacity-25 rounded-circle me-4 backdrop-blur">
                  <Zap size={40} strokeWidth={2.5} className="text-white" />
                </div>
                <h1 className="display-4 fw-bold mb-0 text-white tracking-tight">{title}</h1>
              </div>
              <p className="lead mb-4 text-blue-100 opacity-90" style={{ fontSize: '1.25rem' }}>{description}</p>
              <div className="d-inline-flex align-items-center bg-white bg-opacity-10 border border-white border-opacity-25 px-4 py-2 rounded-pill backdrop-blur">
                <Cloud className="me-2 text-white" size={20} />
                <span className="text-white fw-medium">{cloud}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="progress-ring-card animate-float">
               <div className="d-flex align-items-center justify-content-between mb-4">
                 <h5 className="mb-0 fw-bold">Your Journey</h5>
                 <TrendingUp className="text-emerald-400" size={24} />
               </div>
               <div className="text-center my-4">
                 <div className="display-3 fw-bold mb-0 text-white">
                   {totalProgress}
                   <span className="fs-4 opacity-50">%</span>
                 </div>
                 <p className="text-white text-opacity-75">Mastered</p>
               </div>
               
               <div className="progress bg-white bg-opacity-10" style={{ height: "8px" }}>
                 <div
                   className="progress-bar bg-gradient-to-r from-blue-400 to-emerald-400"
                   role="progressbar"
                   style={{ 
                     width: `${totalProgress}%`,
                     background: 'linear-gradient(90deg, #34d399 0%, #60a5fa 100%)' 
                   }}
                   aria-valuenow={totalProgress}
                   aria-valuemin="0"
                   aria-valuemax="100"
                 />
               </div>
               <div className="d-flex justify-content-between mt-3 text-white text-opacity-50 small">
                 <span>Start</span>
                 <span>Expert</span>
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
