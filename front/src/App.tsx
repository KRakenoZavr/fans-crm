import * as React from "react";
import "./App.css";
import UserComponent from "./pages/User";
import { UserProvider } from "./Context";
import LoginComponent from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/user",
    element: <UserComponent />,
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
}

export default App;
