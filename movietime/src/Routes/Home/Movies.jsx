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
      <Trending movies={trending.movie} />
      <List movies={popular.movie} name="Popular" />
      <List movies={topRated.movie} name="Top Rated" />
      <List movies={upcoming.movie} name="Upcoming" />
    </div>
  );
};

export default Movies;
