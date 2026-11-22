import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner" role="status" aria-label="Loading">
      <div className="spinner__circle"></div>
      <span className="spinner__text">Loading...</span>
    </div>
  );
}

export default Spinner;
