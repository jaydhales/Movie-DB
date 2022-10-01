import React from "react";
import Switch from "./Switch";

const Nav = () => {
  const content = [
    ["Home", "/"],
    ["Explore", "/explore"],
    ["Search", "/search"],
  ];
  return (
    <div className="px-8 h-screen sticky top-0 shrink-0">
      <h1>MovieTime</h1>

      <div className="menu">
        <h2>Menu</h2>
        <Switch content={content} customClass={"main-nav"} />
      </div>
    </div>
  );
};

export default Nav;
