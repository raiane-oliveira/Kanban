import { createContext, useContext, useState } from "react";
import data from "../data";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [columns, setColumns] = useState(data);
  const [modalId, setModalId] = useState("");

  return (
    <BoardContext.Provider
      value={{
        columns,
        setColumns,
        modalId,
        setModalId,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
