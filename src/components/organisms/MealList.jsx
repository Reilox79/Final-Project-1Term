import MealCard from "../molecules/MealCard";
import Text from "../atoms/Text";
import "./MealList.css";

function MealList({ meals, onSelect }) {
  if (meals.length === 0) {
    return <Text variant="muted">No recipes found for this letter.</Text>;
  }

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default MealList;
