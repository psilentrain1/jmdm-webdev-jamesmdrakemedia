import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./views/Home.jsx"
import { Credits } from "./views/Credits.jsx"

import "./index.css"

const router = createBrowserRouter([
  {
    index: "true",
    path: "/",
    element: <Home />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
