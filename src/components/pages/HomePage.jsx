import { useState, useEffect } from "react";
import { getPeople } from "../../services/api";

function HomePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople(1).then((data) => setPeople(data.people));
  }, []);

  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default HomePage;