import React, { useState } from "react";
import "./sidenav.css";
import Menu from "../../assets/svgs/menu.svg";
import User from "../../assets/user.png";
import { useCookies } from "react-cookie";
import Bulb from "../../assets/bulb.png";
import SignOut from "../../assets/svgs/signout.svg";

const SideNav = ({ showTips, setShowTips }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [cookies, setCookie, removeCookies] = useCookies(["jwt"]);

  const handleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleSignOut = () => {
    removeCookies(["jwt"]);
    window.location.href = "/login";
  };

  const handleTips = () => {
    setShowTips(!showTips);
  };

  return isSideNavOpen ? (
    <div loading="lazy" className="wa_sidenav">
      <div className="hamburger" onClick={handleSideNav}>
        <img src={Menu} />
      </div>
      <div className="user_section">
        <img src={User} />
        <p>Welcome, Vedant</p>
      </div>
      <div className="glossory_section">
        <div className="tips_toggle">
          <img src={Bulb} />
          <p>Show Energy Tips</p>
          <label className="switch">
            {showTips ? (
              <input type="checkbox" checked={showTips} />
            ) : (
              <input type="checkbox" checked={showTips} />
            )}

            <span onClick={handleTips} className="slider round"></span>
          </label>
        </div>
      </div>
      <div onClick={handleSignOut} className="sign_out">
        <img src={SignOut} />
        <p>Sign out</p>
      </div>
    </div>
  ) : (
    <>
      <div loading="lazy" className="no_nav" onClick={handleSideNav}>
        <img color="white" src={Menu} />
      </div>
    </>
  );
};

export default SideNav;
