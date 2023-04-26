import "./Modal.css";
import { XCircle } from "@phosphor-icons/react";
import { useBoard } from "../context/ContextBoard";

export function Modal({ children, title }) {
  const { onCloseModal } = useBoard();

  return (
    <div className="modal">
      <div className="close-modal-wrapper">
        <XCircle onClick={onCloseModal} className="close-modal" />
      </div>

      <h2 className="title-modal">{title}</h2>
      {children}
    </div>
  );
}
