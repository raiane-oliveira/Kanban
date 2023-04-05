import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

import "./Default.css";

export default function Default() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-container">
        <Header title="Meu Kanban" />
        <Search />
        <Outlet />
      </div>
    </div>
  );
}
