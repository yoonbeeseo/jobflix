import { useEffect } from "react";
import { useNavigate } from "react-router";

const MoviePage = ({ selectedProfile }) => {
  const navi = useNavigate();
  useEffect(() => {
    if (!selectedProfile) {
      navi("/browse");
    }
  }, [selectedProfile]);
  return <div>MoviePage: {selectedProfile}</div>;
};

export default MoviePage;
