import { useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Contexts/MovieContext";

const MovieDetails = ({ type }) => {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const { fetchDetails } = useContext(MovieContext);

  useEffect(() => {
    async function getDetails() {
      const data = await fetchDetails(`${type}/${id}`);

      setDetails(data);
    }

    getDetails();

    
  }, []);

  console.log(details);

  return (
    <div>
      {type}: {id}
    </div>
  );
};

export default MovieDetails;
