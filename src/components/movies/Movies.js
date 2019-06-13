import React, { Component } from "react";
import { searchMovie } from "../../actions/movieActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";
import SearchedMovieResults from "./SearchedMovieResults";
import uuid from "uuid";

class Movies extends Component {
  state = {
    query: "",
    searchResults: [],
    totalItemsCount: "",
    activePage: 1
  };
  // Remove this
  // componentDidMount() {
  //   let query = "avengers";
  //   this.props.searchMovie(query, this.state.activePage);
  // }

  onChange = e => {
    this.setState({ query: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { query, activePage } = this.state;
    if (query === "") {
      alert("Please enter a movie name.");
    } else {
      this.props.searchMovie(query, activePage);
    }
  };
  handlePageChange = currentPage => {
    const { query } = this.state;
    this.setState({ activePage: currentPage });
    this.props.searchMovie(query, currentPage);
  };
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    const { searchResults, totalItemsCount } = nextProps;
    this.setState({
      totalItemsCount: totalItemsCount,
      searchResults: searchResults
    });
  }
  render() {
    const { searchResults, totalItemsCount, activePage } = this.state;
    // console.log(searchResults);
    return (
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
          <input
            className="form-control mr-sm-2 col-9"
            id="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
            onChange={this.onChange}
            maxLength="50"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 col-2"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="row my-3">
          <div className="col">
            <div className="card-deck">
              {searchResults.map(searchResult => (
                <SearchedMovieResults
                  key={uuid()}
                  searchResult={searchResult}
                />
              ))}
            </div>
          </div>
        </div>
        {searchResults.length !== 0 ? (
          <div className="d-flex my-4" style={{ justifyContent: "center" }}>
            <Pagination
              totalItemsCount={totalItemsCount}
              onChange={this.handlePageChange}
              activePage={activePage}
              itemsCountPerPage={10}
              pageRangeDisplayed={5}
              itemClass="page-item"
              linkClass="page-link"
              prevPageText="Prev"
              nextPageText="Next"
              firstPageText="<<"
              lastPageText=">>"
              disabledClass="disabled"
              linkClassFirst="page-link"
              linkClassLast="page-link"
              linkClassPrev="page-link"
              linkClassNext="page-link"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

Movies.propTypes = {
  searchResults: PropTypes.array.isRequired,
  totalItemsCount: PropTypes.string.isRequired,
  searchMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.movies.searchResults,
  totalItemsCount: state.movies.totalItemsCount
});

export default connect(
  mapStateToProps,
  { searchMovie }
)(Movies);
