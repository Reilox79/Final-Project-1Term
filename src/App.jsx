import { useState } from "react";
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <main>
      <h1>Star Wars Explorer</h1>
      {selectedId === null ? (
        <HomePage onSelect={setSelectedId} />
      ) : (
        <DetailPage id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </main>
  );
}

export default App;