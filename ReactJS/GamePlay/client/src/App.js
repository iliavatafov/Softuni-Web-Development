import { Routes, Route } from "react-router-dom";

import { GameProvider } from "./context/GameContext";
import { AuthProvider } from "./context/AuthContext";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Details } from "./components/Details/Details";
import { EditGame } from "./components/Edit/EditGame";
import { PrivateRoute } from "./components/common/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <GameProvider>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <CreateGame />
                  </PrivateRoute>
                }
              />
              <Route path="/games/:gameId/edit" element={<EditGame />} />
              <Route path="/details/:gameId" element={<Details />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>
        </GameProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
