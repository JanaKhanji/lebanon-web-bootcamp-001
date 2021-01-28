import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { constructUrl } from "./API";
import { useHistory } from "react-router-dom";
import { StateContext } from "../StateProvider";

export default function SearchComponent() {
  const [state, dispatch] = useContext(StateContext);

  let history = useHistory();

  const [spinnerShow, setSpinner] = useState(false);

  function handleChange(event) {
    if (event.target.value === "") {
      setSpinner(false);
    } else {
      setSpinner(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.search.value;
    fetch(constructUrl("search/movie", query))
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MOVIES", payload: data.results });
        history.push("/");
      });
    event.target.search.value = "";
    setSpinner(false);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {spinnerShow && (
          <Form.Label column sm="2">
            <Spinner animation="border" size="sm" />
          </Form.Label>
        )}
        <input
          name="search"
          onChange={handleChange}
          type="text"
          placeholder="search"
          autocomplete="off"
        />
      </Form>
    </div>
  );
}
