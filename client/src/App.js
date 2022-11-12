import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Manager from "./components/manager/manager";

const App = () => {
  useLayoutEffect(() => {
    WebFont.load({
      google: {
        families: ["Dosis", "Nunito", "Montez"],
      },
    });
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/energymgr" element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;
