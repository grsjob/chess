import React from "react";
import "./../assets/scss/App.scss";
import { Round } from "./Round";
import { Square } from "./Square";
import Black_cell from "./black_cell/black_cell";
import White_cell from "./white_cell/white_cell";
import Board from "./board/board";

const App = () => (
  <div className="app">
    <Board />
  </div>
);

export default App;
