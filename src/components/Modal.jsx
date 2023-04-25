import { XCircle } from "@phosphor-icons/react";
import "./Modal.css";
import { useEffect } from "react";

export function Modal({ closeModal, children, title }) {
  return (
    <div className="modal">
      <div className="close-modal-wrapper">
        <XCircle onClick={closeModal} className="close-modal" />
      </div>

      <h2 className="title-modal">{title}</h2>
      {children}
    </div>
  );
}
