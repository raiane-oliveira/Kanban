import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Sidebar } from "./components/Sidebar";
import { Search } from "./components/Search";
import { BoardColumn } from "./components/BoardColumn";

import "./App.css";

let dataTodo = [
  {
    title: "#boraCodar um Kanban",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "Manter a ofensiva",
    paragraph:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva.",
    tags: ["rocketseat"],
  },
  {
    title: "Almoçar",
    paragraph:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tags: ["autocuidado"],
  },
];

let dataDoing = [
  {
    title: "Conferir o novo desafio",
    paragraph:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "Ser incrível",
    paragraph:
      "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado"],
  },
];

let dataDone = [
  {
    title: "#boraCodar uma página de login 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "#boraCodar uma página de clima 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
  {
    title: "#boraCodar um conversor 🧑‍💻l",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
  },
];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Container>
        <Header title="Meu Kanban" />
        <Search />
        <main className="board-content">
          <BoardColumn title={"A fazer"} content={dataTodo} />
          <BoardColumn title={"Fazendo"} content={dataDoing} />
          <BoardColumn title={"Feito"} content={dataDone} />
        </main>
      </Container>
    </div>
  );
}

export default App;
