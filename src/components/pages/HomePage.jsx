import { useState, useEffect } from "react";
import { getMealsByLetter } from "../../services/api";
import MainTemplate from "../templates/MainTemplate";
import MealList from "../organisms/MealList";
import Pagination from "../molecules/Pagination";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function HomePage({ onSelect }) {
  const [meals, setMeals] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0); // 0 = "a"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const letter = LETTERS[letterIndex];

  // Runs at the start and every time the letter changes
  useEffect(() => {
    getMealsByLetter(letter)
      .then((data) => {
        setMeals(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [letter]);

  function changeLetter(newIndex) {
    setLoading(true);
    setLetterIndex(newIndex);
  }

  return (
    <MainTemplate>
      <Pagination
        label={`Letter ${letter.toUpperCase()}`}
        hasPrevious={letterIndex > 0}
        hasNext={letterIndex < LETTERS.length - 1}
        onPrevious={() => changeLetter(letterIndex - 1)}
        onNext={() => changeLetter(letterIndex + 1)}
      />
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <MealList meals={meals} onSelect={onSelect} />}
    </MainTemplate>
  );
}

export default HomePage;
