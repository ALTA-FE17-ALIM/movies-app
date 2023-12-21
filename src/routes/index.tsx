import DetailMovie from "@/components/DetailMovie";
import ListFavorite from "@/components/ListFavorite";
import App from "@/pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default class router extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detail/:id",
        element: <DetailMovie />,
      },
      {
        path: "/list-favorite",
        element: <ListFavorite />,
      },
    ]);
    return <RouterProvider router={router} />;
  }
}
