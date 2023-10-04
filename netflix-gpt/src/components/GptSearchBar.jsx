import React, { useEffect, useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, RAPID_API_URL } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  // const searchText = useRef(null);
  const [searchText, setSearchText] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGptSearchClick();
  }, []);

  const gptQuery =
    "Act as a Movie recomendation system and suggest some movies for the query : " +
    searchText +
    ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, OMG2, Koi Mil Gaya";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "f50ee5e338msh507bc1af32c0b47p1beb69jsnb982cd628408",
      "X-RapidAPI-Host": "simple-chatgpt-api.p.rapidapi.com",
    },
    body: JSON.stringify({
      question: gptQuery,
    }),
  };

  //* search movie in tmdb

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText);
    //* Make an API call to GPT API a nd get Movie results
    const response = await fetch(RAPID_API_URL, options);
    const result = await response.json();
    if (!result.answer) {
      return null;
    }
    const gptMovies = result.answer.split(", ");
    console.log(result.answer.split(", "));
    // const gptMovies =
    //   "Andaz Apna Apna, Chupke Chupke, Golmaal, Padosan, Hera Pheri".split(
    //     ", "
    //   );
    // const gptMovies =
    //   "Raaz, Bhoot, 1920, Raaz 3, Taalash".split(
    //     ", "
    //   );
    // console.log(result);
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    //* [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="md:w-1/2 w-full bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          // ref={searchText}
          value={searchText}
          type="text"
          className="p-2 md:p-4 m-4 col-span-8 md:col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className=" px-4 m-4 md:col-span-3 col-span-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
