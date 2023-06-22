import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { tasksReducer } from "../tasksReducer";
import api from "../api";
import data from "../data";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [columns, dispatch] = useReducer(tasksReducer, data);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function getRandomUser() {
      try {
        const response = await api.get(`/users`);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getRandomUser();
  }, []);

  return (
    <BoardContext.Provider
      value={{
        columns,
        dispatch,
        user,
        setUser,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
