import { createBrowserRouter } from "react-router-dom";
import Default from "./layouts/Default";
import Board from "./pages/Board";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Board />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/:username",
        element: <Profile />,
      },
    ],
  },
]);
