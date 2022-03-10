import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList : [],
      moviesToWatch: [],
      watchedMovies: []
    }
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onAddMovieClick = this.onAddMovieClick.bind(this);
    this.onWatchedMovieClick = this.onWatchedMovieClick.bind(this);
  }
  onSubmitClick(event, query) {
    let searchedMovies = [];
     this.state.movieList.forEach((movie) => {
       let lowerCase = movie.title.toLowerCase();
       if ( lowerCase.includes(query.toLowerCase())) {
        searchedMovies.push(movie)
       }
     })
     if ( searchedMovies.length > 0)
     this.setState({
       moviesToWatch: searchedMovies
     })

  }
  onAddMovieClick(event, title) {
    this.state.movieList.push({title: title});
    this.setState({
      moviesToWatch: this.state.movieList
    })
  }
  onWatchedMovieClick(event, title, boolean) {

    if(!boolean) {
      console.log('watchedMovies', this.state.watchedMovies);
      this.state.watchedMovies.push({title: title})
      for ( let key in this.state.moviesToWatch) {
        if ( this.state.moviesToWatch[key] === title) {
          delete this.state.moviesToWatch[key];
        }
      }
    }else {
      console.log('moviesToWatch', this.state.moviesToWatch);
      this.state.moviesToWatch.push({title: title})
      for ( let key in this.state.watchedMovies) {
        if ( this.state.watchedMovies[key] === title) {
          delete this.state.watchedMovies[key];
        }
      }
    }
  }
  // handleClick(e){
  //   e.preventDefault();
  //   console.log('this click works');

  // }
  render() {
    return (
    <div>
      <div>
        <Search onSubmitClick={this.onSubmitClick} onAddMovieClick={this.onAddMovieClick} />
      </div>
      <div>
        <button className="button" id="watched-list" >
          <span>Watched Movies</span>
        </button>
        <button className="button" id="to-watch-list">
          <span>To Watch</span>
        </button>
      </div>
      <div>
        <MovieList movies={this.state.moviesToWatch} onWatchedMovieClick={this.onWatchedMovieClick} />
      </div>
    </div>
    )
  }
}


export default App;