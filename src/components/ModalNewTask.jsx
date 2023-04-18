import { XCircle } from "@phosphor-icons/react";
import { tagsData } from "../data";
import "./ModalNewTask.css";

export function ModalNewTask({ onCloseModal }) {
  return (
    <div className="modal-new-task" role="modal">
      <div className="close-modal-wrapper">
        <XCircle onClick={onCloseModal} className="close-modal" />
      </div>

      <h2 className="title-modal-new-task">Adicione uma tarefa nova</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="name-task">
          Título:
          <input type="text" />
        </label>

        <label className="description-task">
          Descrição:
          <textarea name="description"></textarea>
        </label>

        <div className="tags-wrapper-task">
          <label className="tags-task">
            Tags:
            <select name="tags">
              {tagsData.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="search-btn btn-modal">
          Adicionar
        </button>
      </form>
    </div>
  );
}
