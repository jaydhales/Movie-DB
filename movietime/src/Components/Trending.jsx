import React from "react";
import { useContext } from "react";
import { MovieContext } from "../Contexts/MovieContext";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoad from "react-lazy-load";

const Trending = ({ movies }) => {
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
              className="w-full h-full object-cover object-left-top"
            />
          </LazyLoad>

          <div
            className="relative p-8 z-10 h-[150px] md:h-[400px] bg-gradient-to-r from-[#000] via-[#000a] 
            to-[#0000]"
            id={result.id}
          >
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
