import { Draggable } from "react-beautiful-dnd";
import "./Card.css";
import { Modal } from "./Modal";

export function Card({ id, index, title, content, tags, color }) {
  const description =
    color !== "#fff" ? (
      <p style={{ color: "#fff" }}>{content}</p>
    ) : (
      <p>{content}</p>
    );
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={{ ...provided.draggableProps.style, background: `${color}` }}
          {...provided.dragHandleProps}
        >
          <h4 className="card-title">{title}</h4>
          {description}
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
