import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

import * as gameService from "./services/gameService";
import { GameContext } from "./context/GameContext";
import { AuthContext } from "./context/AuthContext";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Details } from "./components/Details/Details";
import { EditGame } from "./components/Edit/EditGame";

function App() {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  const addGame = (gameData) => {
    setGames((state) => [...state, gameData]);
    navigate("/catalog");
  };

  const gameEdit = (gameId, gameData) => {
    setGames((state) => state.map((x) => (x._id === gameId ? gameData : x)));
  };

  const onDelete = (gameId) => {
    gameService.deleteGame(gameId);
    setGames((oldState) => oldState.filter((x) => x._id !== gameId));
  };

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <div id="box">
        <Header />

        <GameContext.Provider value={{ games, addGame, gameEdit, onDelete }}>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/create" element={<CreateGame />} />
              <Route path="/games/:gameId/edit" element={<EditGame />} />
              <Route path="/details/:gameId" element={<Details />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>
        </GameContext.Provider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
