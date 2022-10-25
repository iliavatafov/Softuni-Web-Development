import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:userId" element={<Products />} />
          <Route
            path="/products/luke"
            element={<Navigate to="/products/1" replace />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
