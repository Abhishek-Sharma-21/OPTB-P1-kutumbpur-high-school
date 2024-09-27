import { createBrowserRouter } from "react-router-dom";
import MainUserLayout from "../Layouts/MainUserLayout/MainUserLayout";
import Test from "../Components/Test/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainUserLayout />,
    children: [
      {
        path: "/",
        element: <Test />,
      },
    ],
  },
]);
