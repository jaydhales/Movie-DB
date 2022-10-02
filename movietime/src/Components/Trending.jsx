import React from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import play from "../assets/play.png";

const Trending = ({ movies, type }) => {
  const { imgUrl } = useContext(MovieContext);
  const { results } = movies;

  if (!results) return null;

  return (
    <Swiper className="m-4 w-[calc(100vw-200px)] rounded-lg">
      {results.map((result) => (
        <SwiperSlide key={result.id} className="h-full">
          <LazyLoad height={400} className="absolute w-full ">
            <img
              src={imgUrl + "original/" + result.backdrop_path}
              alt=""
              className="w-full md:h-full object-cover md:object-left-top"
            />
          </LazyLoad>

          <div
            className="relative p-8 z-10 h-[150px] md:h-[400px] bg-gradient-to-r from-[#000] via-[#000a] 
            to-[#0000] transition-colors hover:bg-[#0005] group"
            id={result.id}
          >
            <Link
              to={`/${type}/${result.id}`}
              className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition hover:scale-105"
            >
              <img src={play} alt="play icon" />
            </Link>

            <div className="rounded">{}</div>

            <div
              className="grid z-10 h-full relative  text-white
              "
            >
              <p className="text-2xl font-bold">
                {result.title || result.name}
              </p>
              <p>
                {result.release_date
                  ? "Release date: " + result.release_date
                  : "First air date: " + result.first_air_date}
              </p>

              <div className="overflow-hidden max-w-[400px]">
                <p className="text-ellipsis hidden md:block">
                  {result.overview}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Trending;
