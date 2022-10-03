import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Search from "../Components/Search";
import { MovieContext } from "../Contexts/MovieContext";
import LazyLoad from "react-lazy-load";
import play from "../assets/play.png";

const MovieDetails = ({ type }) => {
  const { id } = useParams();

  const [details, setDetails] = useState("");
  const { fetchDetails, ytBgUrl } = useContext(MovieContext);

  useEffect(() => {
    async function getDetails() {
      const data = await fetchDetails(`${type}/${id}`, "credits,similar");

      setDetails(data);
    }

    getDetails();
  }, []);

  return (
    <div className="details">
      <Search />
      <div className="trailer">
        <LazyLoad className="w-full">
          <>
            <img
              src={ytBgUrl("EGeJczJvWns")}
              alt=""
              className="w-full  md:h-[334px] object-cover rounded-lg"
            />

            <a href="#" className="play-icon">
              <img src={play} alt="play icon" />
            </a>
          </>
        </LazyLoad>
      </div>
    </div>
  );
};

export default MovieDetails;
