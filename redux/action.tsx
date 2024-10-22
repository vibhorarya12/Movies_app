import { ADD_TO_LIST, REMOVE_FROM_LIST } from "./actionTypes";

// Define the movie interface
interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

// Action to add a movie to the list
export function addToList(item: Movie) {
  return {
    type: ADD_TO_LIST,
    data: item,
  };
}

// Action to remove a movie from the list using its imdbID
export function removeFromList(imdbID: string) {
  return {
    type: REMOVE_FROM_LIST,
    data: { imdbID }, // Pass the imdbID in the action data
  };
}
