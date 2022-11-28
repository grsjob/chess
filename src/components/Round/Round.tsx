import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

export const Round = () => {
  const [left, setLeft] = useState<number | undefined>(0);

  const [right, setRight] = useState<number | undefined>(0);
  const [shiftX, setShiftX] = useState<number | undefined>(0);
  const [shiftY, setShiftY] = useState<number | undefined>(0);
  const divBlock = useRef(null);

  // useEffect(() => {
  //   if (divBlock.current) {
  //     divBlock.current.ondragstart = function () {
  //       return false;
  //     };
  //   }
  // }, [divBlock]);

  return (
    <div
      draggable
      ref={divBlock}
      className={"round"}
      style={{
        left: left - shiftX + "px",
        top: right - shiftY + "px",
        // left: left + "px",
        // top: right + "px",
      }}
      onDrag={(e) => {
        setLeft(e.clientX);
        setRight(e.clientY);
      }}
      onDragEnd={(e) => {
        setLeft(e.clientX);
        setRight(e.clientY);
      }}
      // onDragStart={(e) => {
      //   setLeft(e.pageX);
      //   setRight(e.pageY);
      // }}
      // onClick={(e) => {
      //   setLeft(e.pageX);
      //   setRight(e.pageY);
      // }}

      // onDragStart={() => false}
      onClick={(e) => {
        setShiftX(e.clientX - divBlock.current?.getBoundingClientRect().left);
        setShiftY(e.clientY - divBlock.current?.getBoundingClientRect().top);
      }}
    />
  );
};
