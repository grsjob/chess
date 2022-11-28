import React from "react";
import "./../assets/scss/App.scss";
import { Round } from "./Round";
import { Square } from "./Square";
import Black_cell from "./black_cell/black_cell";
import White_cell from "./white_cell/white_cell";
import Board from "./board/board";
import { Provider } from "react-redux";
import { store } from "../entities/store";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Board />
    </div>
  </Provider>
);

export default App;
