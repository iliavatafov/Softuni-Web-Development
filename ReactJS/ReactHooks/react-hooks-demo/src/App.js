import "./App.css";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import { useFetch } from "./hooks/useFetch";
import { TaskContext } from "./contexts/TaskContext.js";

function App() {
  const [tasks, setTasks, isLoading] = useFetch(
    "http://localhost:3030/jsonstore/todos",
    []
  );

  const onCreateHandler = (e, task, setTask) => {
    e.preventDefault();

    fetch("http://localhost:3030/jsonstore/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: task }),
    })
      .then((res) => res.json())
      .then((result) => {
        setTasks((state) => (state === [] ? [result] : [...state, result]));
        setTask("");
      });
  };

  const onDeleteHandler = (itemId) => {
    fetch(`http://localhost:3030/jsonstore/todos/${itemId}`, {
      method: "DELETE",
    }).then((res) => {
      let newState = [];
      if (res.ok) {
        tasks.map((x) => (x._id != itemId ? newState.push(x) : null));
      }
      setTasks(newState);
    });
  };

  return (
    <TaskContext.Provider value={{ onDeleteHandler, tasks }}>
      <div className="App">
        {isLoading ? <h1>Loading...</h1> : <TaskList />}
        <CreateTask onCreate={onCreateHandler} />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
