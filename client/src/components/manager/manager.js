import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Tips from "../../components/data/tips.json";

const Manager = () => {
  const [user, setUser] = useState(false);
  const [tipCnt, setTipCnt] = useState(0);

  const generateInfo = () => {
    const tip = Tips[Math.floor(Math.random() * 23) + 1];
    setTimeout(() => {
      toast.info(tip, {
        position: "top-right",
        theme: "dark",
      });

      setTipCnt(tipCnt + 1);
    }, 30000);
  };

  useEffect(() => {
    generateInfo();
  }, [tipCnt]);

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

  return (
    user && (
      <>
        <ToastContainer />
        <div>Hello</div>
      </>
    )
  );
};

export default Manager;
