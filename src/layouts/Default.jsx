import "./Default.css";
import { useState } from "react";

import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { ModalNewTask } from "../components/ModalNewTask";

export default function Default() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={isModalOpen ? "App modal-open" : "App"}>
      <Sidebar />
      <div className="content-container">
        <Outlet context={[openModal]} />
      </div>

      {isModalOpen && <ModalNewTask onCloseModal={closeModal} />}
    </div>
  );
}
