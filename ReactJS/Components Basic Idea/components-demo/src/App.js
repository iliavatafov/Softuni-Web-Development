import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Count from "./Counter";

function App() {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime((time) => time + 1);
  }, 1000);

  return (
    <div className="container">
      <Count />
      <h1 className="banani">{time} sec.</h1>
    </div>
  );
}

export default App;
