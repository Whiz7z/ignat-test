import React, { useState } from "react";

import SearchSvg from "./../../svg/SearchSvg";
import { FaTimes } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search">
      <input type="search" />
      <label htmlFor="search">
        <SearchSvg />
      </label>
      {/* {isActive && (
        <span className="close">
          <FaTimes />
        </span>
      )} */}
    </div>
  );
};

export default Search;
