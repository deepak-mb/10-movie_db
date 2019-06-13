import React, { Component } from "react";
import { getMovieDetails } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class MovieDetails extends Component {
  state = {};
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovieDetails(id);
  }
  componentWillReceiveProps(nextProps) {
    const {
      Actors,
      Awards,
      BoxOffice,
      Director,
      Genre,
      Language,
      Metascore,
      Plot,
      Poster,
      Production,
      Rated,
      Released,
      Response,
      Runtime,
      Title,
      Type,
      Website,
      Writer,
      imdbRating,
      imdbVotes
    } = nextProps.movieDetails;
    this.setState({
      Actors,
      Awards,
      BoxOffice,
      Director,
      Genre,
      Language,
      Metascore,
      Plot,
      Poster,
      Production,
      Rated,
      Released,
      Response,
      Runtime,
      Title,
      Type,
      Website,
      Writer,
      imdbRating,
      imdbVotes
    });
  }
  addDefaultSrc = e => {
    e.target.src =
      "https://via.placeholder.com/286x400.png?text=Poster+not+available";
  };
  render() {
    const {
      Actors,
      Awards,
      BoxOffice,
      Director,
      Genre,
      Language,
      Metascore,
      Plot,
      Poster,
      Production,
      Rated,
      Released,
      Response,
      Runtime,
      Title,
      Type,
      Website,
      Writer,
      imdbRating,
      imdbVotes
    } = this.state;
    // console.log(this.props.movieDetails);
    return (
      <div>
        <div className="row">
          <div className="col">
            <img src={Poster} alt="Movie Poster" onError={this.addDefaultSrc} />
          </div>
          <div className="col">
            <h4>
              {Title}
              <sup>
                <i className="fa fa-star" style={{ color: "#f2b01e" }} />
                {imdbRating}
              </sup>
            </h4>
            <p>Release Date: {Released}</p>
            <p>Genre: {Genre}</p>
            <p>Runtime: {Runtime}</p>
            <p>Plot: {Plot}</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <td>Actors</td>
                  <td>{Actors}</td>
                </tr>
                <tr>
                  <td>BoxOffice</td>
                  <td>{BoxOffice}</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>{Awards}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>{Director}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{Language}</td>
                </tr>
                <tr>
                  <td>Metascore</td>
                  <td>{Metascore}</td>
                </tr>
                <tr>
                  <td>Production</td>
                  <td>{Production}</td>
                </tr>
                <tr>
                  <td>Rated</td>
                  <td>{Rated}</td>
                </tr>
                <tr>
                  <td>Response</td>
                  <td>{Response}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{Type}</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <a href={Website} target="_blank" rel="noopener noreferrer">
                      {Title}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Writer</td>
                  <td>{Writer}</td>
                </tr>
                <tr>
                  <td>imdbVotes</td>
                  <td>{imdbVotes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  //   movieDetails: PropTypes.array.isRequired,
  getMovieDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movieDetails: state.movies.movieDetails
});

export default connect(
  mapStateToProps,
  { getMovieDetails }
)(MovieDetails);
