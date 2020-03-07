import React from "react";
import { render } from "react-dom";
import ScrollTest from "./main";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ScrollTest />
  </div>
);

render(<App />, document.getElementById("root"));
