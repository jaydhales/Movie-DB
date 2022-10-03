import { createContext } from "react";
const env = import.meta.env;
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const apiKey = env.VITE_API_KEY;

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const imgUrl = "https://image.tmdb.org/t/p/";
  const template = {
    movie: "",
    tv: "",
  };
  const [trending, setTrending] = useState(template);
  const [popular, setPopular] = useState(template);
  const [topRated, setTopRated] = useState(template);
  const [upcoming, setUpcoming] = useState(template);

  const ytBgUrl = (key) =>
    `https://i.ytimg.com/vi_webp/${key}/maxresdefault.webp`;

  const fetchData = async (path, extraParams = "") => {
    const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
      params: {
        api_key: apiKey,
        append_to_response: extraParams,
      },
    });

    return response.data;
  };

  const fetchDetails = (path) => {
    return fetchData(path);
  };

  useEffect(() => {
    async function runData() {
      setUpcoming({
        movie: await fetchData(`movie/upcoming`),
        tv: await fetchData(`tv/on_the_air`),
      });

      setTrending({
        movie: await fetchData(`trending/movie/day`),
        tv: await fetchData(`trending/tv/day`),
      });

      setPopular({
        movie: await fetchData(`movie/popular`),
        tv: await fetchData(`tv/popular`),
      });

      setTopRated({
        movie: await fetchData(`movie/top_rated`),
        tv: await fetchData(`tv/top_rated`),
      });
    }

    runData();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        trending,
        imgUrl,
        popular,
        topRated,
        upcoming,
        fetchDetails,
        ytBgUrl
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
