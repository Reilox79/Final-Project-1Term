import Title from "../atoms/Title";
import Badge from "../atoms/Badge";
import InfoRow from "./InfoRow";
import "./PersonCard.css";

function PersonCard({ person, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(person.id);
    }
  };

  const genderModifier =
    person.gender === "male" || person.gender === "female" ? person.gender : "neutral";

  return (
    <article
      className="person-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(person.id)}
      onKeyDown={handleKeyDown}
    >
      <div className="person-card__header">
        <Title level={3} size="small">{person.name}</Title>
        <Badge modifier={genderModifier}>{person.gender}</Badge>
      </div>
      <div className="person-card__body">
        <InfoRow label="Height" value={person.height} />
        <InfoRow label="Birth year" value={person.birth_year} />
      </div>
    </article>
  );
}

export default PersonCard;
