import React from "react";
import "./style.scss";

export const Round = () => {
  return (
    <div draggable className={"round"} onDrag={(e) => console.log(e)}></div>
  );
};
