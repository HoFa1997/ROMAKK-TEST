import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./shared/component/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ProductList } from "./shared/component/ProductList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
