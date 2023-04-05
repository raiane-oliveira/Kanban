import { BoardColumn } from "../components/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

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
  const [todo, setTodo] = useState(dataTodo);
  const [doing, setDoing] = useState(dataDoing);
  const [done, setDone] = useState(dataDone);

  function handleDragEnd(result) {
    if (!result.destination) return;

    const sourceIdList = result.source.droppableId;
    const destinationIdList = result.destination.droppableId;

    const listItems =
      sourceIdList === "todo"
        ? [...todo]
        : sourceIdList === "doing"
        ? [...doing]
        : [...done];

    const sourceList = [...listItems];

    // Removes the dragged item from its previous position
    const [removedItem] = sourceList.splice(result.source.index, 1);

    // Adds this removed item to the destination list
    sourceList.splice(result.destination.index, 0, removedItem);

    if (sourceIdList === destinationIdList) {
      if (sourceIdList === "todo") setTodo(sourceList);
      else if (sourceIdList === "doing") setDoing(sourceList);
      else if (sourceIdList === "done") setDone(sourceList);
    }

    console.log(sourceList);
    console.log(result);
  }

  return (
    <main className="board-content">
      <DragDropContext onDragEnd={handleDragEnd}>
        <BoardColumn id="todo" title={"A fazer"} content={todo} />
        <BoardColumn id="doing" title={"Fazendo"} content={doing} />
        <BoardColumn id="done" title={"Feito"} content={done} />
      </DragDropContext>
    </main>
  );
}
