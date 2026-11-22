import { useState, useEffect } from "react";
import { getPersonById } from "../../services/api";

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
      <button onClick={onBack}>Back</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {person && (
        <div>
          <h2>{person.name}</h2>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Birth year: {person.birth_year}</p>
        </div>
      )}
    </div>
  );
}

export default DetailPage;