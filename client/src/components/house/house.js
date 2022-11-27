import React, { useState } from "react";
import styles from "./House.module.css";
import Add from "../../assets/svgs/add.svg";
import Terrace from "../../assets/houses/terrace.png";
import Flat from "../../assets/houses/high-rise-residential.png";
import Bungalow from "../../assets/houses/bungalow.png";

const House = () => {
  const [selectHouse, setSelectHouse] = useState(false);
  const [houseType, setHouseType] = useState("Flat");

  const openHouseSelection = () => {
    setSelectHouse(true);
  };
  const closeHouseSelection = () => {
    setSelectHouse(false);
  };

  const back = () => {
    closeHouseSelection();
  };

  return (
    <div className={styles.houseContainer}>
      {selectHouse ? (
        <div className={styles.houseSelection}>
          <span onClick={back}>BACK</span>
          <div className={styles.houseRow}>
            <div>
              <img src={Terrace} />
              <p>Terrace</p>
            </div>
            <div>
              <img src={Flat} />
              <p>Flat</p>
            </div>
            <div>
              <img src={Bungalow} />
              <p>Bungalow</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.houseAdd}>
          <p>SELECT YOUR HOUSE TYPE</p>
          <img onClick={openHouseSelection} src={Add} />
        </div>
      )}
    </div>
  );
};

export default House;
