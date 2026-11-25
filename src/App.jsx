import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";

function App() {
  // null → general view | an id → detail view of that meal
  const [selectedId, setSelectedId] = useState(null);

  if (selectedId === null) {
    return <HomePage onSelect={setSelectedId} />;
  }

  return <DetailPage id={selectedId} onBack={() => setSelectedId(null)} />;
}

export default App;
