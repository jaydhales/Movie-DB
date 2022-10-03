import React from "react";
import { NavLink } from "react-router-dom";

const Switch = ({ content, customClass = "switch" }) => {
  return (
    <nav className={customClass}>
      {content.map(([navInfo, href, fa]) => (
        <NavLink
          key={href}
          className={(navData) => (navData.isActive ? "active" : "")}
          to={href}
        >
          <span>
            {fa && <i className={`fas fa-${fa}`} />}
            {navInfo}
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Switch;
