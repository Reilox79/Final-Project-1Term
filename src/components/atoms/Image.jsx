import "./Image.css";

// size: "small" (cards) | "large" (detail)
function Image({ src, alt, size = "small" }) {
  return <img className={`image image--${size}`} src={src} alt={alt} />;
}

export default Image;
