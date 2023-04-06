import { BoardColumn } from "../components/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";

import "./Board.css";

let dataTodo = [
  {
    id: 1,
    title: "#boraCodar um Kanban",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 2,
    title: "Manter a ofensiva",
    paragraph:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva.",
    tags: ["rocketseat"],
  },
  {
    id: 3,
    title: "Almoçar",
    paragraph:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tags: ["autocuidado"],
  },
];

let dataDoing = [
  {
    id: 4,
    title: "Conferir o novo desafio",
    paragraph:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 5,
    title: "Ser incrível",
    paragraph:
      "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado"],
  },
];

let dataDone = [
  {
    id: 6,
    title: "#boraCodar uma página de login 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 7,
    title: "#boraCodar uma página de clima 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 8,
    title: "#boraCodar um conversor 🧑‍💻l",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
];

export default function Board() {
  const [columns, setColumns] = useState({
    todo: dataTodo,
    doing: dataDoing,
    done: dataDone,
  });

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

    const sourceList = columns[sourceNameList];
    const destinationList = columns[destinationNameList];

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
      <Search />
      <main className="board-content">
        <DragDropContext onDragEnd={handleDragEnd}>
          <BoardColumn id="todo" title={"A fazer"} content={columns.todo} />
          <BoardColumn id="doing" title={"Fazendo"} content={columns.doing} />
          <BoardColumn id="done" title={"Feito"} content={columns.done} />
        </DragDropContext>
      </main>
    </>
  );
}
