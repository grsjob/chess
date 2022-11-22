import * as React from "react";
import "./../assets/scss/App.scss";
import { Round } from "./Round";
import { Square } from "./Square";

const App = () => (
  <div className="app">
    <Round />
    <Square />
  </div>
);

export default App;
