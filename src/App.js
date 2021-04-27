import React from "react"; 
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
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

