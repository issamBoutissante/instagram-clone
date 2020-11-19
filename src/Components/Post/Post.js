import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

function Post({ userName, src, text }) {
  return (
    <div className="post">
      <header>
        <Avatar></Avatar>
        <strong>{userName}</strong>
      </header>
      <img src={src} alt="post"></img>
      <footer>
        <p>
          <strong>{userName}</strong>
          {text}
        </p>
      </footer>
    </div>
  );
}

export default Post;
