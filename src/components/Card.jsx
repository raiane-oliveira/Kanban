import { Draggable } from "react-beautiful-dnd";
import "./Card.css";

export function Card({ id, index, title, content, tags }) {
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="card-title">{title}</h4>
          <p>{content}</p>
          <div className="card-tags-wrapper">
            {tags.map((tag, index) => (
              <span key={index} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
}
