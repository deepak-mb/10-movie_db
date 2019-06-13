import { SEARCH_MOVIE, GET_MOVIE_DETAILS, ERROR } from "../actions/types";

const initialState = {
  searchResults: [],
  totalItemsCount: "",
  movieDetails: [],
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      //   console.log(action.payload);
      return {
        searchResults: action.payload.data.Search,
        totalItemsCount: action.payload.data.totalResults
      };

    case GET_MOVIE_DETAILS:
      console.log(action.payload);
      return {
        movieDetails: action.payload
      };

    case ERROR:
      // console.log(action.payload);
      return {
        error: action.payload
      };
    default:
      return state;
  }
}
