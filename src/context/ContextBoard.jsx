import { createContext, useContext, useEffect, useState } from "react";
import { getRandomUser } from "../api";
import data from "../data";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [columns, setColumns] = useState(data);
  const [columnName, setColumnName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function updateRandomUser() {
      const data = await getRandomUser();
      setUser(data);
    }

    updateRandomUser();
  }, []);

  function onOpenModal() {
    setIsModalOpen(true);
  }

  function onCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <BoardContext.Provider
      value={{
        columns,
        setColumns,
        columnName,
        setColumnName,
        user,
        setUser,
        isModalOpen,
        onOpenModal,
        onCloseModal,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
