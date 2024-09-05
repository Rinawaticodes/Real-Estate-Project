import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/listPage";
import Homepage from "./routes/homepage/HomePage";
import SinglePage from "./routes/singlePage/SinglepAge";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
