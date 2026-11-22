import "./ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-message" role="alert">
      <span className="error-message__icon">⚠</span>
      <p className="error-message__text">{message}</p>
    </div>
  );
}

export default ErrorMessage;
