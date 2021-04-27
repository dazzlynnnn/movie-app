import React from "react"; 
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({isLoading: false});
    console.log(movies);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading
        ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
        : (
          <div className="movies">
            <Movie/>
          </div>
        )}
      </section>
    );
  }
}

export default App;

