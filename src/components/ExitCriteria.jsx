import PropTypes from "prop-types";

const ExitCriteria = ({ criteria }) => {
  return (
    <div className="alert alert-warning mt-3">
      <h6 className="fw-bold mb-2">✅ Exit Criteria - Can you answer:</h6>
      <ul className="mb-0 small">
        {criteria.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ExitCriteria.propTypes = {
  criteria: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExitCriteria;
