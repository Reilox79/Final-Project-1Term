import { useState, useEffect } from "react";
import { getMealById } from "../../services/api";
import MainTemplate from "../templates/MainTemplate";
import MealDetail from "../organisms/MealDetail";
import Button from "../atoms/Button";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";

function DetailPage({ id, onBack }) {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Runs when the page opens (and if the id changes)
  useEffect(() => {
    getMealById(id)
      .then((data) => setMeal(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <MainTemplate>
      <Button onClick={onBack}>← Back</Button>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {meal && <MealDetail meal={meal} />}
    </MainTemplate>
  );
}

export default DetailPage;
