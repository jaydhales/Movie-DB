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
      <Trending movies={trending.tv} />
      <List movies={popular.tv} name="Popular" />
      <List movies={topRated.tv} name="Top Rated" />
      <List movies={upcoming.tv} name="On The Air" />
    </div>
  );
};

export default Movies;
