import { Avatar } from "@material-ui/core";
import React from "react";

function Post({ userName, src, text }) {
  return (
    <div className="post">
      <div>
        <Avatar></Avatar>
        <strong>{userName}</strong>
      </div>
      <img src={src}></img>
      <div>
        <p>
          <strong>{{ userName }}</strong>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Post;
