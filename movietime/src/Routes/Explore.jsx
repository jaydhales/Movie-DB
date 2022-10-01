import React from "react";
import { Outlet } from "react-router-dom";
import Switch from "../Components/Switch";

const Explore = () => {
  const content = [
    ["Movies", "/explore/movies"],
    ["Tv Show", "/explore/tv-show"],
  ];
  return (
    <div>
      <Switch content={content} />
      <Outlet />
    </div>
  );
};

export default Explore;
