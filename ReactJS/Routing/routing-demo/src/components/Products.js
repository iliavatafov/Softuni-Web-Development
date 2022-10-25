import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Products = () => {
  const [person, setPerson] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${userId}`).then((response) =>
      response.json().then((result) => {
        setPerson((state) => (state = result));
      })
    );
  }, [userId]);

  const onChange = () => {
    navigate(`/products/${Number(userId) + 1}`);
  };

  return (
    <div>
      <div>Neme: {person.name}</div>
      <div>Skin color: {person.skin_color}</div>
      <div>Hair color: {person.hair_color}</div>
      <div>Heigth:{person.height}</div>
      <button onClick={onChange}>Next</button>
    </div>
  );
};
