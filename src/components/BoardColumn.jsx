import "./BoardColumn.css";
import { useOutletContext } from "react-router-dom";
import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { useBoard } from "../context/ContextBoard";

export function BoardColumn({ title, content, id }) {
  const { setModalId } = useBoard();
  const [openModal] = useOutletContext();

  function handleClick() {
    openModal();
    setModalId(id);
  }

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <section
          className="board-column"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <h3>{title}</h3>
          {content.map((data, index) => (
            <Card
              key={data.id}
              id={data.id}
              index={index}
              title={data.title}
              content={data.paragraph}
              tags={data.tags}
            />
          ))}

          {provided.placeholder}
          <button
            title="Adicionar uma nova tarefa"
            className="add-task-board-column"
            type="button"
            onClick={handleClick}
          >
            +
          </button>
        </section>
      )}
    </Droppable>
  );
}
