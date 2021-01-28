import React, { useContext } from "react";
import MovieItem from "./movieItem";
import { Row } from "react-bootstrap";
import { StateContext } from "../StateProvider";

export default function MoviesGrid() {
  const [state] = useContext(StateContext);

  const moviesComp = state.movies.map((mov) => {
    return <MovieItem movie={mov} key={mov.id} />;
  });

  return (
    <Row className="justify-content-md-center" style={{ margin: "0" }}>
      {moviesComp.map((el) => {
        return el;
      })}
    </Row>
  );
}
