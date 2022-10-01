import React from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import LazyLoad from "react-lazy-load";

const List = ({ movies, name }) => {
  const { results } = movies;
  const sample = [];
  const { imgUrl } = useContext(MovieContext);

  if (!results) return null;

  for (let i = 0; i < 12; i++) {
    sample.push(results[i]);
  }

  return (
    <div>
      <h2>{name}</h2>
      <div className="flex gap-4 m-4">
        {sample.map((el) => (
          <div key={el.id} className="rounded w-48">
            <LazyLoad height={300} className="relative">
              <img
                src={imgUrl + "w200" + el.poster_path}
                alt=""
                className="w-full h-full rounded-t-lg"
              />
            </LazyLoad>

            <div className="py-2 px-4 bg-black text-white rounded-b-lg ">
              <p className="text-center w-full overflow-hidden text-ellipsis whitespace-nowrap ">
                {el.title || el.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
