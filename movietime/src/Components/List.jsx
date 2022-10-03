import React from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const List = ({ movies, name, type }) => {
  const { results } = movies;
  const sample = [];
  const { imgUrl } = useContext(MovieContext);

  if (!results) return null;

  for (let i = 0; i < 12; i++) {
    sample.push(results[i]);
  }

  return (
    <div className="w-[calc(100vw-250px)] overflow-auto">
      <h2>{name}</h2>
      <div className="flex gap-4 m-4 w-max">
        {sample.map((el) => (
          <Link
            to={`/${type}/${el.id}`}
            key={el.id}
            className="rounded w-48 transition-all  hover:scale-105"
          >
            <LazyLoad height={300} className="relative">
              <img
                src={imgUrl + "w200" + el.poster_path}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </LazyLoad>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
