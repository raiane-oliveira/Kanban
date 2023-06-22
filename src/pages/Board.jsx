import "./Board.css";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { BoardColumn } from "../components/BoardColumn";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { useBoard } from "../context/ContextBoard";

export default function Board() {
  const { columns, dispatch } = useBoard();
  const [searchQuery, setSearchQuery] = useState("");

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

  function handleSearchQuery(query) {
    setSearchQuery(query);
  }

  return (
    <>
      <Header title="Meu Kanban" isBoardSection={true} />
      <Search onSearchQuery={handleSearchQuery} />
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
    </>
  );
}
