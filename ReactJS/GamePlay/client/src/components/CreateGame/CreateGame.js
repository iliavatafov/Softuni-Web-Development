import * as gameService from "../../services/gameService";
import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";

export const CreateGame = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const { addGame } = useContext(GameContext);

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

    gameService.create(inputValues).then((result) => {
      addGame(result);
    });
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            onChange={onChange}
            value={inputValues.title}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            onChange={onChange}
            value={inputValues.category}
          />
          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min={1}
            placeholder={1}
            onChange={onChange}
            value={inputValues.maxLevel}
          />
          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
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
            defaultValue="Create Game"
          />
        </div>
      </form>
    </section>
  );
};
