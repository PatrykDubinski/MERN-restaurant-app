import React from "react";
import "./App.css";

import BodyMenu from "./components/BodyMenu/BodyMenu";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <BodyMenu />
    </div>
  );
}

export default App;
