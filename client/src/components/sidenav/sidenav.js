import React, { useState } from "react";
import "./sidenav.css";
import Menu from "../../assets/svgs/menu.svg";

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return isSideNavOpen ? (
    <div className="wa_sidenav">
      <div className="hamburger" onClick={handleSideNav}>
        <img src={Menu} />
      </div>
      <div className="logo_section">
        <img></img>
        <div>
          <h4>WA</h4>
          <span>Watt Analyzer</span>
        </div>
      </div>
      <div className="glossory_section">
        <div>Energy Consumption Calculator</div>
        <div>
          Show energy saving tips{" "}
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="no_nav" onClick={handleSideNav}>
        <img color="white" src={Menu} />
      </div>
    </>
  );
};

export default SideNav;
