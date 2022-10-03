import React from "react";
import Switch from "./Switch";

const Nav = () => {
  const content = [
    ["Home", "/home", "home"],
    ["Movies", "/movies", "film"],
    ["Tvs", "/tvs", "tv"],
  ];
  return (
    <div className="nav-container">
      <p className="logo">MovieTime</p>

      <div className="menu">
        <Switch content={content} customClass={"main-nav"} />
      </div>

      <p>© 2022</p>
    </div>
  );
};

export default Nav;
