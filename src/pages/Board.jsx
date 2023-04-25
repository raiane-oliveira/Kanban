import "./Board.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";

import { BoardColumn } from "../components/BoardColumn";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { useBoard } from "../context/ContextBoard";
import { FormNewTask } from "../components/FormNewTask";

export default function Board() {
  const { columns, setColumns } = useBoard();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalOpen ? "hidden" : "visible";

    if (isModalOpen) body.classList.add("modal-open");
    else body.classList.remove("modal-open");
  }, [isModalOpen]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function filterTasks(task) {
    const searchQueryLower = searchQuery.toLowerCase();

    return (
      task.title.toLowerCase().includes(searchQueryLower) ||
      task.paragraph.toLowerCase().includes(searchQueryLower) ||
      task.tags.some((tag) => tag.toLowerCase().includes(searchQueryLower))
    );
  }

  function handleDragEnd(result) {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceNameList = source.droppableId;
    const destinationNameList = destination.droppableId;

    const sourceList = [...columns[sourceNameList]];
    const destinationList = [...columns[destinationNameList]];

    if (sourceNameList === destinationNameList) {
      const [removedItem] = sourceList.splice(source.index, 1);
      sourceList.splice(destination.index, 0, removedItem);

      setColumns({
        ...columns,
        [sourceNameList]: sourceList,
      });
    } else {
      const [removedItem] = sourceList.splice(source.index, 1);
      destinationList.splice(destination.index, 0, removedItem);

      setColumns({
        ...columns,
        [sourceNameList]: sourceList,
        [destinationNameList]: destinationList,
      });
    }
  }

  return (
    <>
      <Header title="Meu Kanban" isBoardSection={true} />
      <Search onSearchQuery={setSearchQuery} />
      <main className="board-content">
        <DragDropContext onDragEnd={handleDragEnd}>
          <BoardColumn
            id="todo"
            title={"A fazer"}
            content={columns.todo.filter((task) => filterTasks(task))}
            openModal={openModal}
          />
          <BoardColumn
            id="doing"
            title={"Fazendo"}
            content={columns.doing.filter((task) => filterTasks(task))}
            openModal={openModal}
          />
          <BoardColumn
            id="done"
            title={"Feito"}
            content={columns.done.filter((task) => filterTasks(task))}
            openModal={openModal}
          />
        </DragDropContext>
      </main>

      {isModalOpen &&
        createPortal(<FormNewTask closeModal={closeModal} />, document.body)}
    </>
  );
}
