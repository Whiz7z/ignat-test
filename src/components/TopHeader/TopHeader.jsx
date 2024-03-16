import React from "react";
import "./TopHeader.scss";

const TopHeader = () => {
  return (
    <div className="top-header-container">
      <div className="top-header">
        <div className="info">
          <p className="phone">098 900 09 09</p>
          <p className="help">Допомога</p>
        </div>
        <div className="links">
          <a href="#" className="login">
            Увійти
          </a>
          <span>/</span>
          <a href="#" className="register">
            Реєстрація
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
