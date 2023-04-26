import "./BoardColumn.css";
import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";
import { useBoard } from "../context/ContextBoard";

export function BoardColumn({ title, content, id }) {
  const { setModalId, onOpenModal } = useBoard();

  function handleClick() {
    onOpenModal();
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
          <h3>
            {title} <span className="length-tasks">({content.length})</span>
          </h3>
          {content.map((data, index) => (
            <Card
              key={data.id}
              id={data.id}
              index={index}
              title={data.title}
              content={data.paragraph}
              tags={data.tags}
              color={data.hexColor}
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
