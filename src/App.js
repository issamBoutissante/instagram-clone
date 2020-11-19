import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import catPicture from "./assets/cat.jpg";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Post
        userName="issam"
        text="here will have a dynamic text"
        src={catPicture}
      />
    </div>
  );
}

export default App;
