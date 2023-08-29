import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { BoardProvider } from "../../context/ContextBoard";
import "./Default.css";

export default function Default() {
  return (
    <BoardProvider>
      <div className="App">
        <Sidebar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </BoardProvider>
  );
}
