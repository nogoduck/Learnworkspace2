import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/detail/:bucket",
    element: <DetailPage />,
  },
]);

export default router;
