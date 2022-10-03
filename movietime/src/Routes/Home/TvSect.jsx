import React from "react";
import { useContext } from "react";
import Trending from "../../Components/Trending.jsx";
import List from "../../Components/List.jsx";
import { MovieContext } from "../../Contexts/MovieContext";

const Movies = () => {
  const { trending, popular, topRated, upcoming, hot } =
    useContext(MovieContext);

  return (
    <div className="">
      <Trending movies={trending.tv} type='tv' />
      <List movies={popular.tv} name="Popular" type='tv' />
      <List movies={topRated.tv} name="Top Rated" type='tv' />
      <List movies={upcoming.tv} name="On The Air" type='tv' />
    </div>
  );
};

export default Movies;
