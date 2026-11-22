import { useState, useEffect } from "react";
import { getPersonById } from "../../services/api";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";
import InfoRow from "../molecules/InfoRow";

function DetailPage({ id, onBack }) {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPersonById(id)
      .then((data) => setPerson(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <Button onClick={onBack}>← Back</Button>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {person && (
        <div>
          <Title level={2}>{person.name}</Title>
          <InfoRow label="Height" value={person.height} />
          <InfoRow label="Mass" value={person.mass} />
          <InfoRow label="Hair color" value={person.hair_color} />
          <InfoRow label="Skin color" value={person.skin_color} />
          <InfoRow label="Eye color" value={person.eye_color} />
          <InfoRow label="Birth year" value={person.birth_year} />
          <InfoRow label="Gender" value={person.gender} />
        </div>
      )}
    </div>
  );
}

export default DetailPage;