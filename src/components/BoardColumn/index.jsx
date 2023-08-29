import { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useBoard } from "../../context/ContextBoard";
import { Card } from "../Card";
import { Modal } from "../Modal";
import { FormNewTask } from "../FormNewTask";
import "./BoardColumn.css";

export function BoardColumn({ title, content, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdId, setCreatedId] = useState(1);
  const { dispatch } = useBoard();

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "visible";
  }, [isModalOpen]);

  const titleColumnTranslated =
    id === "todo" ? "A fazer" : id === "doing" ? "Fazendo" : "Feito";

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleAddTask(values) {
    dispatch({
      type: "added",
      values: values,
      columnName: id,
      createdId: createdId,
    });

    setCreatedId(createdId + 1);
    setIsModalOpen(false);
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
      columnName: id,
    });
  }

  return (
    <>
      <Droppable droppableId={id}>
        {(provided) => (
          <section
            className="board-column"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2 className="title-board-column">
              {title} <span className="length-tasks">({content.length})</span>
            </h2>
            {content.map((data, index) => (
              <Card
                key={data.id}
                id={data.id}
                index={index}
                title={data.title}
                content={data.paragraph}
                tags={data.tags}
                color={data.hexColor}
                onDeleteTask={handleDeleteTask}
              />
            ))}

            {provided.placeholder}
            <button
              title="Adicionar nova tarefa"
              aria-label="Adicionar nova tarefa"
              className="add-task-board-column"
              type="button"
              onClick={handleOpenModal}
            >
              +
            </button>
          </section>
        )}
      </Droppable>
      {isModalOpen && (
        <Modal
          onCloseModal={() => setIsModalOpen(false)}
          title={`Adicione uma tarefa nova em: ${titleColumnTranslated}`}
        >
          <FormNewTask onSubmit={handleAddTask} />
        </Modal>
      )}
    </>
  );
}
