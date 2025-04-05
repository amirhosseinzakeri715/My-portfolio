import React from "react";
import imgsrc from "./images/IMG_3405.JPG";

function Home() {
  return (
    <div className="home-container">
      <img className="profile" src={imgsrc} alt="" />
      <h1 className="home-h1">Hi, i'm Amir Hossein!</h1>
      <p className="home-p">I'm a passionate computer science student and aspiring <br/> <strong>full-stack web developer</strong> with a deep love for technology and programming.</p>
    </div>
  );
}

export default Home;