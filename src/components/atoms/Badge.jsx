import "./Badge.css";

// variant: "category" | "area"
function Badge({ children, variant = "category" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export default Badge;
