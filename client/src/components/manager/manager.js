import React, { useEffect, useState } from "react";
import Register from "../register/register";

const Manager = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    let cookieExist = document.cookie.match(
      "(^|;)\\s*" + "jwt" + "\\s*=\\s*([^;]+)"
    );
    if (cookieExist) {
      setUser(true);
    } else if (!user) {
      window.location.href = "/login";
    } else if (!cookieExist) {
      setUser(false);
      window.location.href = "/login";
    }
  }, []);

  return user && <div>Hello World!</div>;
};

export default Manager;
