import React, { Component } from "react";
import imdblogo from "../../images/imdb.svg";
// import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";

class SearchedMovieResults extends Component {
  state = {
    modalIsOpen: false
  };
  addDefaultSrc = e => {
    // console.log(e.target.src);
    e.target.src =
      "https://via.placeholder.com/286x400.png?text=Poster+not+available";
  };
  render() {
    const { Poster, Title, Type, Year, imdbID } = this.props.searchResult;
    // console.log(Poster);

    return (
      <div className="card">
        <img
          src={Poster}
          className="card-img-top"
          alt="Poster not found"
          onError={this.addDefaultSrc}
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text" style={{ textTransform: "capitalize" }}>
            Type: {Type}
          </p>
          <p className="card-text" style={{ textTransform: "capitalize" }}>
            Year released: {Year}
          </p>
        </div>
        <div className="card-footer">
          <Link
            to={`moviedetails/${imdbID}`}
            href={`http://www.omdbapi.com/?i=${imdbID}&apikey=13b1230d`}
            className="btn btn-primary mx-1"
          >
            Read More
          </Link>
          <a
            href={`https://www.imdb.com/title/${imdbID}`}
            className="d-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imdblogo} alt="" className="imdb-logo" />
            {/* <i
              className="fa fa-imdb"
              aria-hidden="true"
              style={{
                color: "#f5de50",
                fontSize: "4rem"
              }}
            /> */}
          </a>
        </div>
      </div>
    );
  }
}

export default SearchedMovieResults;
