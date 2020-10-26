import React from "react";
import "./App.css";

import BodyMenu from "./components/BodyMenu/BodyMenu";
import FeaturedMenu from "./components/FeaturedMenu/FeaturedMenu";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <BodyMenu />
      <FeaturedMenu />
    </div>
  );
}

export default App;
