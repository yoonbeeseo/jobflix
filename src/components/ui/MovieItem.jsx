import { useState } from "react";
import { LuCircleX } from "react-icons/lu";

const MovieItem = ({ movie, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      key={movie.id.toString()}
      className="px-2 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="aspect-poster rounded-xl hover:scale-103 transition-all mask-b-from-70%">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="size-full"
        />
      </div>
      <p className="absolute bottom-5 left-4 text-6xl z-1 text-shadow-md/100 text-shadow-primary">
        {index + 1}
      </p>

      {isHovering && (
        <div className="absolute top-0 left-0 size-full px-2 z-2">
          <div className="border h-full overflow-hidden rounded-xl bg-black relative flex flex-col">
            {movie.adult && (
              <div className="bg-primary text-white rounded-full size-5 text-xs absolute top-2 left-2 flex justify-center items-center">
                <p>19</p>
              </div>
            )}
            {/* <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setIsHovering(false)}
            >
              <LuCircleX />
            </button> */}

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <div className="p-2 flex-1 flex flex-col">
              <div className="flex-1">
                <p className="truncate">
                  {movie.title} {movie.title}
                </p>
                <p className="line-clamp-3 text-sm text-zinc-500">
                  {movie.overview} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Corrupti, in. Placeat, eaque inventore
                  facilis molestiae quibusdam rerum debitis magni exercitationem
                  optio. Voluptatibus libero sint cumque veniam rerum aut quos
                  illo!
                </p>
              </div>
              <div className="flex">
                <button className="bg-primary text-white px-4">시작하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
