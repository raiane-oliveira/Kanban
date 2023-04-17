import { BoardColumn } from "../components/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import data from "../data";

import "./Board.css";

export default function Board() {
  const [columns, setColumns] = useState(data);
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
      <Header title="Meu Kanban" />
      <Search setSearchQuery={setSearchQuery} />
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
