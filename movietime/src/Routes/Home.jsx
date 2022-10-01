import React from "react";
import { Outlet } from "react-router-dom";
import Switch from "../Components/Switch";

const Home = () => {
  const content = [
    ["Movies", "/home/movies"],
    ["Tv Show", "/home/tv-show"],
  ];
  return (
    <div className="flex-grow border-x border-grey">
      <header>
        <Switch content={content} />
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
