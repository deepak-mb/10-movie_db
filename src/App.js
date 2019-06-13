import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import MovieDetails from "./components/movies/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="fade-in">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/10-movie_db/" component={Movies} />
                <Route
                  exact
                  path="/moviedetails/:id"
                  component={MovieDetails}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
