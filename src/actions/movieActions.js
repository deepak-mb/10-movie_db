import { SEARCH_MOVIE, GET_MOVIE_DETAILS } from "./types";
import axios from "axios";

export const searchMovie = (query, page) => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?s=${query}&apikey=13b1230d&page=${page}`)
    .then(res => {
      //   console.log(res);
      dispatch({
        type: SEARCH_MOVIE,
        payload: res
      });
    });
};

export const getMovieDetails = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=13b1230d&plot=full`)
    .then(res => {
      // console.log(res);
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: res.data
      });
    });
};
