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
      <Trending movies={trending.movie} type="movie" />
      <List movies={popular.movie} name="Popular" type="movie" />
      <List movies={topRated.movie} name="Top Rated" type="movie" />
      <List movies={upcoming.movie} name="Upcoming" type="movie" />
    </div>
  );
};

export default Movies;
