import "./App.css";
import React from "react";
import lionKingImage from "./lk.jpg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Disney Favourites</h1>
      <br />
      <img src={lionKingImage} class="image" />
      <br />
      <img src="/al.jpg" class="image" /> <br />
      <video width="350" height="400" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
