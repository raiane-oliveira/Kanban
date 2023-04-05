import { createBrowserRouter } from "react-router-dom";
import Board from "./pages/Board";
import Default from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Board />,
      },
    ],
  },
]);
