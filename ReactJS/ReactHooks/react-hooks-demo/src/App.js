import "./App.css";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((result) => {
        setTasks(Object.values(result));
      });
  }, []);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <CreateTask />
    </div>
  );
}

export default App;
