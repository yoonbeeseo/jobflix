import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const ImageSlider = () => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fn = async () => {
      setIsPending(true);
      const url = "/api/3/movie/top_rated?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWRiNmZmMjZlODUxN2ZkNDZjMmVlNjc5NDRmYTA2OCIsIm5iZiI6MTY5MTE2NjEyNC44MTcsInN1YiI6IjY0Y2QyNWFjZjY3ODdhMDBlNTE1MTFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eMaRVtXoybrYdojImZxTNmvGLaNoLzzNIbT8ryCNe0o",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();

      console.log(data);

      setData(data);
      setIsPending(false);
    };

    fn();

    return () => {
      fn();
    };
  }, []);

  const [n, setN] = useState(3);

  useEffect(() => {
    const fn = () => {
      const width = window.innerWidth;
      let n = 3;
      if (width > 500 && width <= 768) {
        n = 4;
      } else if (width > 768 && width <= 1000) {
        n = 6;
      } else if (width > 1000) {
        n = 8;
      }

      setN(n);
    };

    window.addEventListener("resize", fn);

    return () => {
      window.removeEventListener("resize", fn);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: n,
    slidesToScroll: n,
    arrows: false,
  };
  return (
    <div className="p-4 px-2">
      <Slider {...settings}>
        {data?.results?.map((movie, index) => (
          <MovieItem movie={movie} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
