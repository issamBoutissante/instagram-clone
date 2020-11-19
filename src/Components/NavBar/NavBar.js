import React from "react";
import instagramLogo from "../../assets/instagram-logo.png";
import "./NavBar.css";
import Avatar from "@material-ui/core/Avatar";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img height="35px" src={instagramLogo} alt="instagram-logo"></img>
      <input type="text" placeholder="search"></input>
      <Avatar style={{ zIndex: -1 }} className="avatar"></Avatar>
    </nav>
  );
};

export default NavBar;
