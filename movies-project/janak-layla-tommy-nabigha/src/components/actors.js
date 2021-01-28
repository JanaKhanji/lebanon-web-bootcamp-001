import React from "react";
import "./movieItem.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Actor({ credit }) {
  const threecrew = credit.cast.slice(0, 3);
  return threecrew.map((ele) => {
    return (
      <Link to={"/actor/" + ele.id}>
        <Card className="container_foto" style={{ cursor: "context-menu" }}>
          <article>
            <h2>{ele.name}</h2>
          </article>
          <Card.Img
            variant="top"
            src={"http://image.tmdb.org/t/p/w200/" + ele.profile_path}
            alt="actor profile"
          />
        </Card>
      </Link>
    );
  });
}
