import "./Default.css";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Default() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}
