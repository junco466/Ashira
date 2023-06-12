import { useRoutes, BrowserRouter } from "react-router-dom";

import React from "react";
import "./App.css";
import Home from "../Home";
import Agendar from "../Agendar";
import Tienda from "../Tienda";
import NotFound from "../NotFound";

import Layout from "../../Components/Layout";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/agendar", element: <Agendar /> },
    { path: "/tienda", element: <Tienda /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
    return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;