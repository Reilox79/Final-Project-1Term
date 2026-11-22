import { useState, useEffect } from "react";
import { getPeople } from "../../services/api";

function HomePage({ onSelect }) {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPeople(page)
      .then((data) => {
        setPeople(data.people);
        setHasNext(data.hasNext);
        setHasPrevious(data.hasPrevious);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  function changePage(newPage) {
    setLoading(true);
    setPage(newPage);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <button onClick={() => onSelect(person.id)}>{person.name}</button>
          </li>
        ))}
      </ul>
      <button disabled={!hasPrevious} onClick={() => changePage(page - 1)}>
        Previous
      </button>
      <span> Page {page} </span>
      <button disabled={!hasNext} onClick={() => changePage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default HomePage;