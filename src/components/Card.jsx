import "./Card.css";
import { useState } from "react";
import { useBoard } from "../context/ContextBoard";
import { Draggable } from "react-beautiful-dnd";
import { Trash } from "@phosphor-icons/react";

export function Card({ id, index, title, content, tags, color, columnId }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { columns, setColumns, setColumnName, columnName } = useBoard();

  function deleteTask() {
    const filteredTasks = columns[columnName].filter(
      (column) => column.id !== id
    );
    const nextTasks = {
      ...columns,
      [columnName]: [...filteredTasks],
    };
    setColumns(nextTasks);
  }

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
            setColumnName(columnId);
          }}
          onMouseLeave={() => setIsMouseOver(false)}
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

          {isMouseOver && (
            <div onClick={deleteTask} className="wrapper-trash">
              <Trash className="trash" color="#ed4337" weight="fill" />
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}
