const dataTodo = [
  {
    id: 1,
    title: "#boraCodar um Kanban",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    hexColor: "#fff",
  },
  {
    id: 2,
    title: "Manter a ofensiva",
    paragraph:
      "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva.",
    tags: ["rocketseat"],
    hexColor: "#fff",
  },
  {
    id: 3,
    title: "Almoçar",
    paragraph:
      "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
    tags: ["autocuidado"],
    hexColor: "#fff",
  },
];

const dataDoing = [
  {
    id: 4,
    title: "Conferir o novo desafio",
    paragraph:
      "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
    hexColor: "#fff",
  },
  {
    id: 5,
    title: "Ser incrível",
    paragraph:
      "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado"],
    hexColor: "#fff",
  },
];

const dataDone = [
  {
    id: 6,
    title: "#boraCodar uma página de login 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    hexColor: "#fff",
  },
  {
    id: 7,
    title: "#boraCodar uma página de clima 🧑‍💻",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    hexColor: "#fff",
  },
  {
    id: 8,
    title: "#boraCodar um conversor 🧑‍💻l",
    paragraph:
      "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
    tags: ["rocketseat", "desafio"],
    hexColor: "#fff",
  },
];

const data = {
  todo: dataTodo,
  doing: dataDoing,
  done: dataDone,
};

let tags = new Set();

Object.values(data).map((column) =>
  column.map((task) => {
    task.tags.map((tag) => tags.add(tag));
  })
);

export const tagsData = Array.from(tags);

export default data;
