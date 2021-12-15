import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "rsuite/styles/index.less";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./components/context/Settings";
import SetForm from "./components/setForm";
import ToDo from "./components/todo/todo.js";
import Header from "./components/header";

import LoginContext from "./components/auth/context";
import Auth from "./components/auth/auth";
export default function App() {
  return (
    <BrowserRouter>
      <LoginContext>
        <Header />
        <Routes>
          <Route
            path="/setting"
            element={
              <Auth >
                <Settings>
                  <SetForm />
                </Settings>
              </Auth>
            }
          />

          <Route
            path="/"
            element={
              <Auth>
                <Settings>
                  <ToDo  />
                </Settings>
              </Auth>
            }
          />
        </Routes>
      </LoginContext>
    </BrowserRouter>
  );
}
