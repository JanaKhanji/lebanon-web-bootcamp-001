import React, { useContext } from "react";
import MoviesGrid from "./moviesGrid";
import { StateContext } from "../StateProvider";

export default function Main() {
  const [state] = useContext(StateContext);
  return (
    <div>
      {typeof state !== undefined && state.length === 0 && (
        <h1>search for Movies</h1>
      )}
      {typeof state !== undefined && <MoviesGrid />}
    </div>
  );
}
