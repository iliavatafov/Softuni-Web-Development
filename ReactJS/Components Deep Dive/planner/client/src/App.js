import { AddItem } from "./components/AddItem";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <AddItem />

          <div className="table-wrapper">
            {/* spinner */}

            <TodoList />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
