import React from "react";
import { useState, useEffect } from "react";
import { constructUrl } from "./API";
import { Card, ListGroup, Nav, Col, Row, Container } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
import Actor from "./actors";
import Bubbles from "./bubbles";
export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState({
    results: []
  });
  const [credit, setCredit] = useState({
    cast: []
  });
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([]);

  let match = useRouteMatch();
  useEffect(() => {
    getMyMovie();
  }, [match]);

  useEffect(() => {
    setGenres(movie.genres);
    let rate = [];
    for (let i = 0; i < movie.vote_average; i++) {
      rate.push(
        <img
          className="star"
          alt="star"
          src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"
        />
      );
    }
    setRating(rate);
  }, [movie]);
  const getMyMovie = async () => {
    const responce = await fetch(constructUrl("movie/" + match.params.id, ""));
    const data = await responce.json();
    setMovie(data);

    const getCredit = await fetch(
      constructUrl("movie/" + match.params.id + "/credits", "")
    );
    const myCredit = await getCredit.json();

    setCredit(myCredit);
    const getTrailer = await fetch(
      constructUrl("movie/" + match.params.id + "/videos", "")
    );
    const mytrailer = await getTrailer.json();
    setTrailer(mytrailer);
  };

  return (
    <div>
      {movie && credit && (
        <>
          <Row>
            <Col md="2">
              <Link to="/">
                <img
                  className="back"
                  width="30px"
                  src="https://image.flaticon.com/icons/png/512/0/340.png"
                  alt="back"
                />
              </Link>
            </Col>
            <Col>
              <h1 id="movTitle">{movie.original_title}</h1>
              {/* <Bubbles genres={genres} /> */}
            </Col>
          </Row>

          <Container>
            <Row className="justify-content-md-center">
              {" "}
              <Col className="colms">
                <Card>
                  <img
                    alt="movie poster"
                    src={"http://image.tmdb.org/t/p/w200/" + movie.poster_path}
                  />
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      {" "}
                      Year: {movie.release_date}{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Nav>
                        <Nav.Item>
                          <Nav.Link
                            target="_blank"
                            href="http://www.imdb.com/title/tt0123456/"
                          >
                            IMDB
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </ListGroup.Item>
                    <ListGroup.Item>{rating}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col className="colms">
                <p id="movDes">{movie.overview}</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {credit && <Actor credit={credit} />}
            </Row>
            <Row style={{ margin: "auto", width: "50%" }}>
              {trailer.results[0] ? (
                <iframe
                  width="100%"
                  height="312s"
                  title="Movie trailer"
                  src={
                    "https://www.youtube.com/embed/" + trailer.results[0].key
                  }
                ></iframe>
              ) : (
                <></>
              )}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

///*<Row><video width="400px"> <source type="movie.mp4" src={"http://api.themoviedb.org/3/movie/157336/videos?api_key=" + trailer.results[0].key} /></video></Row>
