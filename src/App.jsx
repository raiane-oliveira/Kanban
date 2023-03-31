import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

import "./App.css";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main>
        <Header title="Meu Kanban" />
        <Search />
      </Main>
    </div>
  );
}

export default App;
