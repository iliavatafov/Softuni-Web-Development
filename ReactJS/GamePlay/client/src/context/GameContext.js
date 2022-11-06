import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import * as gameService from "../services/gameService";

export const GameContext = createContext();

const gameReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAMES":
      return [...action.payload];
      break;
    case "ADD_GAME":
      return [...state, action.payload];
      break;
    case "EDIT_GAME":
      return state.map((x) => (x._id === action.gameId ? action.payload : x));
      break;
    case "DELETE_GAME":
      return state.filter((x) => x._id !== action.gameId);
      break;
    default:
      return state;
  }
};

export const GameProvider = ({ children }) => {
  const [games, dispatcher] = useReducer(gameReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll().then((result) =>
      dispatcher({
        type: "ADD_GAMES",
        payload: result,
      })
    );
  }, []);

  const addComment = (gameId, comment) => {
    dispatcher({
      type: "ADD_COMMENT",
      payload: comment,
      gameId,
    });
  };

  const addGame = (gameData) => {
    dispatcher({
      type: "ADD_GAME",
      payload: gameData,
    });
    navigate("/catalog");
  };

  const gameEdit = (gameId, gameData) => {
    dispatcher({
      type: "EDIT_GAME",
      payload: gameData,
      gameId,
    });
  };

  const onDelete = (gameId) => {
    gameService.deleteGame(gameId);
    dispatcher({
      type: "DELETE_GAME",
      gameId,
    });
  };

  return (
    <GameContext.Provider
      value={{
        games,
        addGame,
        gameEdit,
        onDelete,
        addComment,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
