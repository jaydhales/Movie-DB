import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Routes/Home.jsx";
import Explore from "./Routes/Explore.jsx";
import Search from "./Routes/Search.jsx";
import Movies from "./Routes/Home/Movies.jsx";
import Tvs from "./Routes/Home/Tvs.jsx";
import NoMatch from "./Routes/NoMatch.jsx";
import ExMovies from "./Routes/Explore/ExMovies.jsx";
import ExTvs from "./Routes/Explore/ExTvs.jsx";
import MovieDetails from "./Routes/MovieDetails.jsx";

const App = () => {
  const location = useLocation();

  if (location.pathname === "/") location.pathname = "/home";

  return (
    <div className="bg-[#3c3c3c] min-h-screen flex max-w-full overflow-hidden">
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-show" element={<Tvs />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="explore" element={<Explore />}>
          <Route index element={<ExMovies />} />
          <Route path="movies" element={<ExMovies />} />
          <Route path="tv-show" element={<ExTvs />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="search" element={<Search />} />
        <Route path="movie/:id" element={<MovieDetails type="movie" />} />
        <Route path="tv/:id" element={<MovieDetails type="tv" />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
