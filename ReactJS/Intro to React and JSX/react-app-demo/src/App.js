import "./App.css";
import SomeElement from "./Somthing";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header text="Hello React!" />

      <SomeElement />
    </div>
  );
}

export default App;
