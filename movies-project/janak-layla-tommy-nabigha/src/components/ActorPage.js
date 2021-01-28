import React from "react";
import { useState, useEffect } from "react";
import { constructUrl } from "./API";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Card, ListGroup, Nav, Col, Row, Container } from "react-bootstrap";

export default function ActorPage() {
  const [actor, serActor] = useState({});
  let match = useRouteMatch();
  let history = useHistory();
  useEffect(() => {
    getActor();
  }, [match]);

  const getActor = async () => {
    const responce = await fetch(constructUrl("person/" + match.params.id, ""));
    const data = await responce.json();
    serActor(data);
  };

  function handelBack() {
    history.goBack();
  }

  return (
    <div>
      <Row>
        {" "}
        <Col md="2">
          <img
            onClick={handelBack}
            className="back"
            width="30px"
            src="https://image.flaticon.com/icons/png/512/0/340.png"
            alt="back"
          />
        </Col>
        <Col>
          <h1 id="movTitle">{actor.name}</h1>
          {/* <Bubbles genres={genres} /> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <img
              src={"http://image.tmdb.org/t/p/w200/" + actor.profile_path}
              alt="actor image"
            />

            <ListGroup>
              <ListGroup.Item>{actor.name} </ListGroup.Item>
              <ListGroup.Item>{actor.birthday} </ListGroup.Item>
              <ListGroup.Item>{actor.deathday} </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <p>{actor.biography}</p>
        </Col>
      </Row>
    </div>
  );
}
