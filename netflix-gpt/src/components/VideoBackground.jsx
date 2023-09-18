import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=0&mute=1&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; picture-in-picture; web-share;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
