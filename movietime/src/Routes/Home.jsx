import React from "react";
import { Outlet } from "react-router-dom";
import Switch from "../Components/Switch";
import Search from "../Components/Search";

const Home = () => {
  const content = [
    ["Movies", "/home/movies"],
    ["Tv Show", "/home/tv-show"],
  ];
  return (
    <div className="home">
      <header >
        <Switch content={content} />
        <Search />
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
