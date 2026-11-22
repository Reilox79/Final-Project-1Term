import { useState, useEffect } from "react";
import { getPeople } from "../../services/api";
import PersonCard from "../molecules/PersonCard";
import Pagination from "../molecules/Pagination";
import Spinner from "../atoms/Spinner";
import ErrorMessage from "../atoms/ErrorMessage";

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

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <div>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} onSelect={onSelect} />
        ))}
      </div>
      <Pagination
        page={page}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        onPageChange={changePage}
      />
    </div>
  );
}

export default HomePage;