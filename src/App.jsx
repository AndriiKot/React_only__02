import { useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const number = "02";
  return (
    <>
      <div className="video-container">
        <Video />
      </div>
    </>
  );
}

export default App;
