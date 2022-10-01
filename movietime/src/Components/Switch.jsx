import React from "react";
import { NavLink } from "react-router-dom";

const Switch = ({ content, customClass = "switch" }) => {
  return (
    <nav className={customClass}>
      {content.map(([navInfo, href]) => (
        <NavLink
          key={href}
          className={(navData) => (navData.isActive ? "active" : "")}
          to={href}
        >
          {navInfo}
        </NavLink>
      ))}
    </nav>
  );
};

export default Switch;
