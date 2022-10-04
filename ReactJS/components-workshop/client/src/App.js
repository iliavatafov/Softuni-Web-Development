import { Header } from "./components/common/Header";
import "./App.css";
import { Footer } from "./components/common/Footer";
import { Search } from "./components/search/Search";
import { UserList } from "./components/user-list/UserList";
import { useEffect, useState } from "react";
import { getAll } from "./components/services/userService";
import { UserDetails } from "./components/user-list/user-details/UserDetails";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((result) => {
      setUsers(result);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <div className="table-wrapper">
            <UserList users={users} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
