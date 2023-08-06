import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./../App.jsx";
import StartPage from "./StartPage"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
    },
    {
      path: "/app",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;