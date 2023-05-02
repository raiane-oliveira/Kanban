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
  const { columns, dispatch, isModalOpen } = useBoard();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isModalOpen ? "hidden" : "visible";

    if (isModalOpen) body.classList.add("modal-open");
    else body.classList.remove("modal-open");
  }, [isModalOpen]);

  function filterTasks(task) {
    const searchQueryLower = searchQuery.toLowerCase();

    return (
      task.title.toLowerCase().includes(searchQueryLower) ||
      task.paragraph.toLowerCase().includes(searchQueryLower) ||
      task.tags.some((tag) => tag.toLowerCase().includes(searchQueryLower))
    );
  }

  function handleDragEnd(result) {
    dispatch({
      type: "dragEnd",
      result: result,
    });
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
          />
          <BoardColumn
            id="doing"
            title={"Fazendo"}
            content={columns.doing.filter((task) => filterTasks(task))}
          />
          <BoardColumn
            id="done"
            title={"Feito"}
            content={columns.done.filter((task) => filterTasks(task))}
          />
        </DragDropContext>
      </main>

      {isModalOpen && createPortal(<FormNewTask />, document.body)}
    </>
  );
}
