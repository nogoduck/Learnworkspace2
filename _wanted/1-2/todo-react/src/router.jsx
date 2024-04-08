import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cat",
    element: <Cat />,
  },
  {
    path: "/dog",
    element: <Dog />,
  },
]);

export default router;
