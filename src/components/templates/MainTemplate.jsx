import Header from "../organisms/Header";
import "./MainTemplate.css";

// Layout shared by every page: header on top and the page content below
function MainTemplate({ children }) {
  return (
    <div className="main-template">
      <Header />
      <main className="main-template__content">{children}</main>
    </div>
  );
}

export default MainTemplate;
