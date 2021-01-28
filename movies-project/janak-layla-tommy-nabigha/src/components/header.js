import React, { useEffect, useState, useContext } from "react";
import Search from "./searchComponent";
import { Navbar, Dropdown, Nav } from "react-bootstrap";
import { constructUrl } from "./API";
import { constructGenreUrl } from "./API";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "../StateProvider";

export default function Header(props) {
  const [state, dispatch] = useContext(StateContext);
  let history = useHistory();
  const [genresHTML, setGenresHTML] = useState([]);

  useEffect(() => {
    let genres = [];
    fetch(constructUrl("genre/movie/list", ""))
      .then((response) => response.json())
      .then((data) => {
        data.genres.forEach((element) => {
          genres.push(
            <Link to="/" key={element.id}>
              <Dropdown.Item
                key={element.id}
                onClick={() => getMovies(element.id)}
              >
                {element.name}
              </Dropdown.Item>
            </Link>
          );
        });
        setGenresHTML(genres);
      });
  }, []);

  function getMovies(id) {
    fetch(constructGenreUrl(id))
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MOVIES", payload: data.results });
        history.push("/");
      });
  }

  return (
    <div className="Header">
      <Navbar expand="lg">
        <Link
          to="/"
          className="mr-auto white noDecoration"
          onClick={props.home}
        >
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Dropdown style={{ margin: "0 2rem" }}>
              <Dropdown.Toggle id="dropdown-basic">genres</Dropdown.Toggle>
              <Dropdown.Menu>{genresHTML}</Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="mr-auto">
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
