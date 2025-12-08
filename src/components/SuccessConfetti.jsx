import { Award } from "lucide-react";
import PropTypes from "prop-types";

const SuccessConfetti = ({ show }) => {
  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 9999, pointerEvents: "none" }}
    >
      <div className="text-center animate-fade-in">
        <Award size={80} className="text-warning animate-bounce" />
        <h2 className="text-white bg-dark bg-opacity-75 rounded p-3 mt-3">
          Phase Complete! 🎉
        </h2>
      </div>
    </div>
  );
};

SuccessConfetti.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default SuccessConfetti;
