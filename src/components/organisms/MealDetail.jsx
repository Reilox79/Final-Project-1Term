import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Badge from "../atoms/Badge";
import InfoRow from "../molecules/InfoRow";
import "./MealDetail.css";

function MealDetail({ meal }) {
  return (
    <article className="meal-detail">
      <div className="meal-detail__top">
        <Image src={meal.strMealThumb} alt={meal.strMeal} size="large" />

        <div className="meal-detail__info">
          <Title level={2}>{meal.strMeal}</Title>
          <div className="meal-detail__badges">
            <Badge variant="category">{meal.strCategory}</Badge>
            {meal.strArea && <Badge variant="area">{meal.strArea}</Badge>}
          </div>

          <Title level={3} size="small">Ingredients</Title>
          <div>
            {meal.ingredients.map((ingredient, index) => (
              <InfoRow
                key={index}
                label={ingredient.name}
                value={ingredient.measure}
              />
            ))}
          </div>
        </div>
      </div>

      <Title level={3} size="small">Instructions</Title>
      <div className="meal-detail__instructions">
        <Text>{meal.strInstructions}</Text>
      </div>
    </article>
  );
}

export default MealDetail;
