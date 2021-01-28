// image url : http://image.tmdb.org/t/p/w185/
import "./movieItem.css";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  let imgSrc =
    "https://www.foothillsgateway.org/wp-content/uploads/2019/06/movie-reel-202x300.png";
  movie.poster_path != null &&
    (imgSrc = "http://image.tmdb.org/t/p/w200/" + movie.poster_path);

  return (
    <Link to={"/movie/" + movie.id}>
      <Card className="container_foto">
        <article>
          <h2>{movie.title}</h2>
        </article>
        <Card.Img variant="top" src={imgSrc} alt="movie poster" />
        <div className="ver_mas text-center">
          <span className="lnr lnr-eye">see more</span>
        </div>
      </Card>
    </Link>
  );
}
