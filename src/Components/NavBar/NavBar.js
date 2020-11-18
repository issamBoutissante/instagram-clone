import React from "react";
import instagramLogo from "../../assets/instagram-logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img height="35px" src={instagramLogo} alt="instagram-logo"></img>
      <Avatar></Avatar>
    </nav>
  );
};

export default NavBar;
