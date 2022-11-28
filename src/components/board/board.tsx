import React from "react";
import White_cell from "../white_cell/white_cell";
import Black_cell from "../black_cell/black_cell";
import "./board.css";

function makeArr(column, row) {
  const array = [];
  for (let j = "A".charCodeAt(0); j <= "H".charCodeAt(0); j++) {
    if (j % 2) {
      for (let i = 0; i < column; i++) {
        if (i % 2) {
          array.push(
            <White_cell key={String.fromCharCode(j) + String(i + 1)} />,
          );
        } else {
          array.push(
            <Black_cell key={String.fromCharCode(j) + String(i + 1)} />,
          );
        }
      }
    } else {
      for (let i = 0; i < column; i++) {
        if (i % 2) {
          array.push(
            <Black_cell key={String.fromCharCode(j) + String(i + 1)} />,
          );
        } else {
          array.push(
            <White_cell key={String.fromCharCode(j) + String(i + 1)} />,
          );
        }
      }
    }
  }

  return array;
}

const arr = makeArr(8, 8);
const Board = () => {
  return <div className="board">{arr}</div>;
};

export default Board;
