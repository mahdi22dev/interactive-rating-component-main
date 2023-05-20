import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import desktopImage from "./images/bg-main-desktop.png";
import mobileImage from "./images/bg-main-mobile.png";

function App() {
  return (
    <main className="container">
      <div className="background-mobile">
        <img src={mobileImage} alt="" />
      </div>
      <div className="background-desktop">
        <img src={desktopImage} alt="" />
      </div>
      <Form />
    </main>
  );
}

export default App;
