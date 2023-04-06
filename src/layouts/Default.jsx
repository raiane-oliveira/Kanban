import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import "./Default.css";

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
