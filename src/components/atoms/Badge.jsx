import "./Badge.css";

// modifier: "male" | "female" | "neutral"
function Badge({ children, modifier = "neutral" }) {
  return <span className={`badge badge--${modifier}`}>{children}</span>;
}

export default Badge;
