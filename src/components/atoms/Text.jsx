import "./Text.css";

function Text({ children, as: Tag = "p", variant = "normal" }) {
  return <Tag className={`text text--${variant}`}>{children}</Tag>;
}

export default Text;
