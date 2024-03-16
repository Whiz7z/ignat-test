import React, { useState } from "react";
import Search from "../Search/Search";
import Heart from "../../svg/Heart";
import Bag from "../../svg/Bag";

import "./BottomHeader.scss";

const BottomHeader = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bottom-header-container">
      <div className="bottom-header">
        <a href="#" className="logo">
          IGNAT
        </a>
        <menu className={"menu"}>
          <li
            className={active === 0 ? "active" : ""}
            onClick={() => setActive(0)}
          >
            <a href="#">Новинки</a>
          </li>
          <li
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            <a href="#">Чоловіки</a>
          </li>
          <li
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            <a href="#">Жінки</a>
          </li>
          <li
            className={active === 3 ? "active" : ""}
            onClick={() => setActive(3)}
          >
            <a href="#">Аксесуари</a>
          </li>
          <li
            className={active === 4 ? "active" : ""}
            onClick={() => setActive(4)}
          >
            <a href="#">Акції</a>
          </li>
        </menu>
        <Search />
        <div className="btns">
          <Heart />
          <Bag />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
