import React, { useEffect, useContext } from "react";
import "./styles.css";
import { StateContext } from "./StateProvider";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import MoviePage from "./components/MoviePage";
import { constructUrl } from "./components/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActorPage from "./components/ActorPage";
export default function App() {
  const [state, dispatch] = useContext(StateContext);

  useEffect(() => {
    trendings();
  }, []);

  function trendings() {
    fetch(constructUrl("trending/movie/day", ""))
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_MOVIES", payload: data.results });
      });
  }
  return (
    <Router>
      <div className="App justify-content-md-center">
        <Header home={trendings} />
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route path="/actor/:id">
          <ActorPage />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}
