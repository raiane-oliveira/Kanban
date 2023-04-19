import "./Default.css";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { ModalNewTask } from "../components/ModalNewTask";
import { BoardProvider } from "../context/ContextBoard";
import { useState } from "react";

export default function Default() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <BoardProvider>
      <div className={isModalOpen ? "App modal-open" : "App"}>
        <Sidebar />
        <div className="content-container">
          <Outlet context={[openModal]} />
        </div>

        {isModalOpen && <ModalNewTask closeModal={closeModal} />}
      </div>
    </BoardProvider>
  );
}
