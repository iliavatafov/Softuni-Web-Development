import { useEffect, useState } from "react";
import { CharcterCard } from "./CharacterCard";

export const CharacterList = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((result) => {
        setCharacters(result.results);
      });
  }, []);

  return (
    <ul className="characters-list">
      {characters ? (
        characters.map((c) => <CharcterCard key={c.name} {...c} />)
      ) : (
        <li>"Loading..."</li>
      )}
    </ul>
  );
};
