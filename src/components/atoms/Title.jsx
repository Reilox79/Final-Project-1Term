import "./Title.css";

function Title({ children, level = 2, size = "medium" }) {
  const Tag = `h${level}`;
  return <Tag className={`title title--${size}`}>{children}</Tag>;
}

export default Title;
