import React from "react";
import "./style.scss";

export const Square = () => {
  return (
    <div className={"square"} onDrop={(e) => console.log(e.clientX)}></div>
  );
};
