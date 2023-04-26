import { createContext, useContext, useEffect, useState } from "react";
import { getRandomUser } from "../api";
import data from "../data";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [columns, setColumns] = useState(data);
  const [modalId, setModalId] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    async function updateRandomUser() {
      const data = await getRandomUser();
      setUser(data);
    }

    updateRandomUser();
  }, []);

  return (
    <BoardContext.Provider
      value={{
        columns,
        setColumns,
        modalId,
        setModalId,
        user,
        setUser,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
