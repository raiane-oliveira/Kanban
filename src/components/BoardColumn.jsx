import { Card } from "./Card";
import "./BoardColumn.css";
import { Droppable } from "react-beautiful-dnd";

export function BoardColumn({ title, content, id }) {
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
              title={data.title}
              content={data.paragraph}
              tags={data.tags}
              id={data.id}
              index={index}
            />
          ))}

          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
