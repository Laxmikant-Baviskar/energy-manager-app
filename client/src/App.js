import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Manager from "./components/manager/manager";

const App = () => {
  const [userEmail, setUserEmail] = useState("");

  useLayoutEffect(() => {
    WebFont.load({
      google: {
        families: ["Dosis", "Nunito", "Montez", "PT Sans"],
      },
    });
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route
          exact
          path="/login"
          element={<Login userEmail={userEmail} setUserEmail={setUserEmail} />}
        />
        <Route
          exact
          path="/energymgr"
          element={<Manager userEmail={userEmail} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
