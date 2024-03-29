import React from "react";

const ArrowRight = ({ color }) => {
  return (
    <svg
      width="25"
      height="7"
      viewBox="0 0 25 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 3.5L20 0.613249V6.38675L25 3.5ZM0 4L20.5 4V3L0 3L0 4Z"
        fill={color || "#343434"}
      />
    </svg>
  );
};

export default ArrowRight;
