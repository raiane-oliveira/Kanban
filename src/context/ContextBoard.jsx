import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getRandomUser } from "../api";
import data from "../data";
import { tasksReducer } from "../tasksReducer";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [columns, dispatch] = useReducer(tasksReducer, data);
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
        dispatch,
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
