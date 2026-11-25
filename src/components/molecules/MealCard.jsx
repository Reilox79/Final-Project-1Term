import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Badge from "../atoms/Badge";
import "./MealCard.css";

// Card of the general view. It is a <button> so it can be clicked
// and also used with the keyboard (Tab + Enter)
function MealCard({ meal, onSelect }) {
  return (
    <button className="meal-card" onClick={() => onSelect(meal.idMeal)}>
      <Image src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-card__body">
        <Title level={3} size="small">{meal.strMeal}</Title>
        <div className="meal-card__badges">
          <Badge variant="category">{meal.strCategory}</Badge>
          {meal.strArea && <Badge variant="area">{meal.strArea}</Badge>}
        </div>
      </div>
    </button>
  );
}

export default MealCard;
