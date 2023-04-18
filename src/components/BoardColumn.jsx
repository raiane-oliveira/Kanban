import { Card } from "./Card";
import "./BoardColumn.css";
import { Droppable } from "react-beautiful-dnd";

export function BoardColumn({ title, content, id, onOpenModal }) {
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
            onClick={onOpenModal}
          >
            +
          </button>
        </section>
      )}
    </Droppable>
  );
}
