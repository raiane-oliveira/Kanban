import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Trash } from "@phosphor-icons/react";
import "./Card.css";

export function Card({ id, index, title, content, tags, color, onDeleteTask }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const description =
    color !== "rgba(255, 255, 255, 0.9)" &&
    color !== "#fff" &&
    color !== "#FFDC49" ? (
      <p style={{ color: "#EBECED" }}>{content}</p>
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
          onMouseOver={() => {
            setIsMouseOver(true);
          }}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <h3 className="card-title">{title}</h3>
          {description}
          <div className="card-tags-wrapper">
            {tags.map((tag, index) => (
              <span key={index} className="card-tag">
                {tag}
              </span>
            ))}
          </div>

          {isMouseOver && (
            <div onClick={() => onDeleteTask(id)} className="wrapper-trash">
              <Trash className="trash" color="#ed4337" weight="fill" />
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}
