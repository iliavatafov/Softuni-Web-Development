import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigate, useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";

export const EditGame = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });
  const { gameEdit } = useContext(GameContext);
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getOne(gameId).then((gameData) => {
      setInputValues(gameData);
    });
  }, []);

  const onChange = (e) => {
    setInputValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (Object.values(inputValues).some((x) => x === "")) {
      window.alert("All fileds are required!");
      return;
    }

    gameService.edit(gameId, inputValues).then((result) => {
      gameEdit(gameId, result);
      navigate(`/details/${gameId}`);
    });
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={inputValues.title}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={onChange}
            value={inputValues.category}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            onChange={onChange}
            value={inputValues.maxLevel}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={onChange}
            value={inputValues.imageUrl}
          />
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            onChange={onChange}
            value={inputValues.summary}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Edit Game"
          />
        </div>
      </form>
    </section>
  );
};
