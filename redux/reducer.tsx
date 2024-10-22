import { ADD_TO_LIST, REMOVE_FROM_LIST } from "./actionTypes";

// Define the movie type for better type safety
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

// Define the initial state type
interface MoviesState {
  moviesList: Movie[];
}

// Define the action types for better type safety
interface AddToListAction {
  type: typeof ADD_TO_LIST;
  data: Movie;
}

interface RemoveFromListAction {
  type: typeof REMOVE_FROM_LIST;
  data: { imdbID: string };
}

// Union type for possible action types
type MoviesAction = AddToListAction | RemoveFromListAction;

const initialState: MoviesState = {
  moviesList: [],
};

// Reducer function
export const moviesReducer = (state = initialState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case ADD_TO_LIST:
      // Check if the movie is already in the list
     
      return {
        ...state,
        moviesList : [...state.moviesList, action.data]
      };

    case REMOVE_FROM_LIST:
      return {
        ...state,
        moviesList: state.moviesList.filter(item => item.imdbID !== action.data.imdbID),
      };

    default:
      return state;
  }
};
