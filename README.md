<div align="center">
  <img src="src/assets/logo.svg" alt="Foto de uma espiral. Logo do Kanban." />
  <h1>Kanban</h1>
</div>

O Kanban é uma metodologia ágil de gerenciamento visual que ajuda a melhorar a produtividade e a eficiência do fluxo de trabalho de uma equipe. Ele é baseado em um quadro (físico ou digital) que representa as etapas do processo e as tarefas a serem realizadas. O Kanban permite que a equipe visualize facilmente o status de cada tarefa, identifique gargalos e priorize as atividades de forma a manter o fluxo de trabalho contínuo e eficiente.

<img src="https://i.imgur.com/etBRqwI.png"/>

Visando isso, desenvolvi o meu próprio Kanban digital para me ajudar a organizar melhor as tarefas e projetos que eu quero desenvolver e/ou estudar. Lembrando que o design foi oferecido em um dos desafios do #boraCodar da Rocketseat.

## 🚀 Techs

- React
  - `react-beautiful-dnd`
  - `react-router`
  - `react-use`
  - `Formik`
  - `Yup`
- [Phosphor Icons](https://phosphoricons.com/)
- JavaScript
- CSS
- Vite

## 🪸 Features

- **Atualizar tarefas arrastando-as entre as colunas:** você pode arrastar e jogar qualquer tarefa entre as colunas para atualizar o status dela. Ex: a tarefa que está na coluna _A fazer_ pode ser movida para a coluna _Feito_ apenas arrastando-a para esta coluna.

- **Buscar tarefas:** você pode pesquisar tarefas de acordo com seus títulos, descrições e/ou tags, e a aplicação irá filtrar elas para você.

- **Editar o nome do Kanban na página de _Boards_**: O usuário pode mudar o nome do seu Kanban da forma como quiser.

- **Adicionar e remover tarefas**: Abre um modal com um formulário para adicionar novas tarefas, podendo mudar sua cor de fundo. Além disso, o usuário pode deletar suas tarefas.

- **Usuário aleatório**: Toda vez que você entra na aplicação, um usuário com dados aleatórios é gerado pra você.

- **Página de perfil**: Você pode ver os dados do seu perfil em uma página específica para isso.

## 📒 Aprendizados

- Biblioteca [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- Treino com a biblioteca [react-router](https://reactrouter.com/) e estruturação de diretórios
- Validação e criação de formulários React usando as bibliotecas `Yup` e `Formik`
- Fechar modals quando o usuário clica em qualquer outro lugar da aplicação usando a biblioteca `react-use`, com o hook `useClickAway`.
- Barra de pesquisa que filtra em tempo real os resultados, sem recarregar a página
- API React `createPortal` que serve para renderizarmos componentes em lugares que não estão apenas no seu componente pai.
- Criar rotas dinâmicas a partir de um username com a sintaxe `/:path` e `useParams()` do `react-router-dom`

## 🧑🏻‍💻 Futuras features

- Página de _Ajustes_: o usuário poderá trocar o tema para dark ou light mode.
- Adicionar novas tags
- Clicar em uma tarefa e abrir um modal com mais detalhes sobre ela.
- Implementação com um banco de dados

## 💻 Rodando localmente

Clone o projeto

```
git clone https://github.com/raiane-oliveira/Kanban.git
```

Entre no diretório do projeto

```
cd kanban
```

Instale as dependências

```
npm install
```

Inicie o servidor

```
npm run dev
```

## 🪢 Design

O layout desse projeto foi feito e disponibilizado pela [Rocketseat](https://rocketseat.com.br) em um dos desafios do #boraCodar.

[Link do projeto no Figma](<https://www.figma.com/file/kJpuExBvZmyP2UIhDZVW6d/%23boracodar---Desafio-12-(Community)?node-id=11-31&t=fQdVb179zYkwO9Vj-0>)

## 🤝 Feedbacks

Se você tiver opiniões em como eu posso melhorar essa aplicação, por favor, me mande uma mensagem pelo [Linkedin](https://www.linkedin.com/in/raiane-oliveira-dev/) ou um <a href="mailto:raiane.oliveira404@gmail.com">e-mail</a>.
<br>
Eu ficarei feliz de responder e aprender mais com você! ;) ❤️
