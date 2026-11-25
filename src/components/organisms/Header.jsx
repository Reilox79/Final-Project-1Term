import Title from "../atoms/Title";
import Text from "../atoms/Text";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Title level={1} size="large">Recipe Explorer</Title>
      <Text variant="muted">Recipes from TheMealDB, sorted by their first letter</Text>
    </header>
  );
}

export default Header;
