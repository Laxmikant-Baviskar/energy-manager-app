import React, { useState } from "react";
import styles from "./House.module.css";
import Add from "../../assets/svgs/add.svg";
import Terrace from "../../assets/houses/terrace.png";
import Flat from "../../assets/houses/high-rise-residential.png";
import Bungalow from "../../assets/houses/bungalow.png";
import { RoomsData } from "../data/rooms.js";
import LivingRoom from "../../assets/rooms/LivingRoom.png";
import Bathroom from "../../assets/rooms/Bathroom.png";
import Bedroom from "../../assets/rooms/Bedroom.png";
import Kitchen from "../../assets/rooms/Kitchen.png";

const House = () => {
  const [selectHouse, setSelectHouse] = useState(false);
  const [houseType, setHouseType] = useState("");
  const [menu, setMenu] = useState(true);
  const [rooms, setRooms] = useState(false);
  const [roomsCnt, setRoomsCnt] = useState({
    LivingRoom: 0,
    Bathroom: 0,
    Bedroom: 0,
    Kitchen: 0,
  });
  const [appliances, setAppliances] = useState(false);
  const [roomsArray, setRoomsArray] = useState([]);

  const handleMenu = () => {
    setMenu(false);
    setSelectHouse(true);
  };

  const handleHouseSelection = (house) => {
    setHouseType(house);
  };

  const openHouseSelection = () => {
    setSelectHouse(true);
  };

  const closeHouseSelection = () => {
    setSelectHouse(false);
  };

  const backToSelectedHouse = () => {
    setRooms(false);
  };

  const back = () => {
    closeHouseSelection();
    setMenu(true);
  };

  const handleLivingRoomCnt = (payload) => {
    setRoomsCnt({
      ...roomsCnt,
      LivingRoom: !(roomsCnt.LivingRoom < 0)
        ? roomsCnt.LivingRoom + payload
        : 0,
    });
  };

  const handleBedroomCnt = (payload) => {
    setRoomsCnt({
      ...roomsCnt,
      Bedroom: roomsCnt.Bedroom + payload,
    });
  };

  const handleBathroomCnt = (payload) => {
    setRoomsCnt({
      ...roomsCnt,
      Bathroom: roomsCnt.Bathroom + payload,
    });
  };

  const handleKitchenCnt = (payload) => {
    setRoomsCnt({
      ...roomsCnt,
      Kitchen: roomsCnt.Kitchen + payload,
    });
  };

  const handleRoomsCnt = (name, payload) => {
    if (name === "LivingRoom") handleLivingRoomCnt(payload);
    else if (name === "Bathroom") handleBathroomCnt(payload);
    else if (name === "Bedroom") handleBedroomCnt(payload);
    else handleKitchenCnt(payload);
  };

  const handleAppliancesSection = () => {
    setAppliances(true);
    createRoomsMap();
  };

  const createRoomsMap = () => {
    const livingRoomCnt = roomsCnt.LivingRoom;
    const bedRoomCnt = roomsCnt.Bedroom;
    const bathRoomCnt = roomsCnt.Bathroom;
    const kitchenCnt = roomsCnt.Kitchen;

    for (let i = 0; i < livingRoomCnt; ++i) {
      roomsArray.push(`LIVINGROOM ${i + 1}`);
    }
    for (let i = 0; i < bedRoomCnt; ++i) {
      roomsArray.push(`BEDROOM ${i + 1}`);
    }
    for (let i = 0; i < bathRoomCnt; ++i) {
      roomsArray.push(`BATHROOM ${i + 1}`);
    }
    for (let i = 0; i < kitchenCnt; ++i) {
      roomsArray.push(`KITCHEN ${i + 1}`);
    }
  };

  return (
    <div className={styles.houseContainer}>
      {menu ? (
        <div onClick={handleMenu} className={styles.houseAdd}>
          <p>SELECT YOUR HOUSE TYPE</p>
          <img onClick={openHouseSelection} src={Add} />
        </div>
      ) : selectHouse && houseType === "" ? (
        <div className={styles.houseSelection}>
          <span onClick={back}>BACK</span>
          <div className={styles.houseRow}>
            <div onClick={() => handleHouseSelection("Terrace")}>
              <img src={Terrace} />
              <p>Terrace</p>
            </div>
            <div onClick={() => handleHouseSelection("Flat")}>
              <img src={Flat} />
              <p>Flat</p>
            </div>
            <div onClick={() => handleHouseSelection("Bungalow")}>
              <img src={Bungalow} />
              <p>Bungalow</p>
            </div>
          </div>
        </div>
      ) : !rooms ? (
        <div className={styles.addRoom}>
          <div className={styles.roomAdder}>
            <h4>YOU'VE SELECTED {houseType.toUpperCase()}</h4>
            <button onClick={() => setRooms(true)}>ADD ROOMS</button>
          </div>
          <div>
            <img
              src={
                houseType === "Terrace"
                  ? Terrace
                  : houseType === "Flat"
                  ? Flat
                  : Bungalow
              }
            />
          </div>
        </div>
      ) : !appliances ? (
        <div className={styles.roomsMainContainer}>
          <span onClick={backToSelectedHouse}>BACK</span>
          <div className={styles.roomsContainer}>
            {RoomsData.map((val, key) => (
              <div key={key}>
                <img
                  src={
                    val.name === "LivingRoom"
                      ? LivingRoom
                      : val.name === "Bedroom"
                      ? Bedroom
                      : val.name === "Bathroom"
                      ? Bathroom
                      : Kitchen
                  }
                />
                <p>{val.name === "LivingRoom" ? "Living Room" : val.name}</p>
                <div>
                  <button onClick={() => handleRoomsCnt(val.name, -1)}>
                    -
                  </button>
                  {val.name === "LivingRoom" ? (
                    <p key={key}>{roomsCnt.LivingRoom}</p>
                  ) : val.name === "Bedroom" ? (
                    <p key={key}>{roomsCnt.Bedroom}</p>
                  ) : val.name === "Bathroom" ? (
                    <p key={key}>{roomsCnt.Bathroom}</p>
                  ) : (
                    <p key={key}>{roomsCnt.Kitchen}</p>
                  )}

                  <button onClick={() => handleRoomsCnt(val.name, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.addSelection}>
            <button onClick={handleAppliancesSection}>ADD SELECTION</button>
          </div>
        </div>
      ) : (
        <div className={styles.applianceContainer}>
          <h3>ADD APPLIANCES INFO</h3>
          <div>
            {roomsArray.map((val, key) => (
              <div className={styles.roomsMap} key={key}>
                <h4>{val}</h4>
                <div className={styles.singleRoom}>
                  <img
                    src={
                      val.includes("LIVING")
                        ? LivingRoom
                        : val.includes("BED")
                        ? Bedroom
                        : val.includes("KITCHEN")
                        ? Kitchen
                        : Bathroom
                    }
                  />
                  <div>
                    <table>
                      <tr>
                        <th>APPLIANCES</th>
                        <th>NUMBER OF APPLIANCE</th>
                        <th>USAGE PER DAY(HOURS)</th>
                        <th>NUMBER OF DAYS USED PER MONTH</th>
                        <th>WATTS</th>
                      </tr>
                      <tr>
                        <th>FAN</th>
                        <th>
                          <input type="number" min="0" />
                        </th>
                        <th>
                          <input type="number" min="0" />
                        </th>
                        <th>
                          <input type="number" min="0" />
                        </th>
                        <th>
                          <input type="number" min="0" />
                        </th>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className={styles.addBtn}>
                  <button>ADD APPLIANCE</button>
                  <select id="appliances">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default House;
