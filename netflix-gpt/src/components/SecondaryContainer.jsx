import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-2 md:pl-12 z-11 relative">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
          {/* //! Add movie by genres */}
          {/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
