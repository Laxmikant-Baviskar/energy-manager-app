import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Tips from "../../components/data/tips.json";
import "./manager.css";
import SideNav from "../sidenav/sidenav";
import Graph from "../../assets/graph.png";

const Manager = () => {
  const [user, setUser] = useState(false);
  const [tipCnt, setTipCnt] = useState(0);
  const [showTips, setShowTips] = useState(false);

  const generateInfo = () => {
    const tip = Tips[Math.floor(Math.random() * 23) + 1];
    setTimeout(() => {
      toast.info(tip, {
        position: "top-right",
        theme: "dark",
      });

      setTipCnt(tipCnt + 1);
    }, 60000);
  };

  useEffect(() => {
    if (showTips && user) generateInfo();
  }, [tipCnt, showTips]);

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
      <div className="app_container">
        <ToastContainer />
        <SideNav showTips={showTips} setShowTips={setShowTips} />
        <div className="wa_container">
          <div className="wa_heading_container">
            <img src={Graph} />
            <div className="wa_heading">
              <h3>Energy Consumption Analyzer</h3>
              <p>
                Analyze your energy consumption and get your estimated
                electricity charge.
              </p>
            </div>
          </div>
          <div className="wa_content">Vedant</div>
        </div>
      </div>
    )
  );
};

export default Manager;
