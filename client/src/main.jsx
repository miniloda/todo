import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todo from './components/Todo.jsx';
import LogIn from './components/login/LogIn.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Todo />,
      },
    ]
  },
  {
    path: "/login",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
