import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from "./Routes/Home.jsx";
import Movies from "./Routes/Movies.jsx";
import Tvs from "./Routes/Tvs.jsx";
import MovieSect from "./Routes/Home/MovieSect.jsx";
import TvSect from "./Routes/Home/TvSect.jsx";
import NoMatch from "./Routes/NoMatch.jsx";
import MovieDetails from "./Routes/MovieDetails.jsx";

const App = () => {
  const location = useLocation();

  if (location.pathname === "/") location.pathname = "/home/movies";
  if (location.pathname === "/home") location.pathname = "/home/movies";

  return (
    <div className="body">
      <Nav />
      <main>
        <Routes>
          <Route path="home" element={<Home />}>
            <Route path="movies" element={<MovieSect />} />
            <Route path="tv-show" element={<TvSect />} />
            <Route path="*" element={<NoMatch />} />
          </Route>

          <Route path="movies" element={<Movies />} />
          <Route path="tvs" element={<Tvs />} />

          <Route path="movie/:id" element={<MovieDetails type="movie" />} />
          <Route path="tv/:id" element={<MovieDetails type="tv" />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
