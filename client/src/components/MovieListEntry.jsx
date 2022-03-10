// Individual Movie Components
import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  onWatchClick(event) {
    console.log('clickeddd')
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    let buttonStyle = {}
    buttonStyle['backgroundColor'] = this.state.clicked ? 'green' : '';
    return(
  <div className='movie-entry-container'>
    <div className='movie-entry-title'>{this.props.movie.title}
      <button style={buttonStyle} onClick ={(event) => {
        this.onWatchClick(event);
        this.props.onWatchedMovieClick(event,this.props.movie.title, this.state.clicked)
      }}className="button" id="watched">
        <span>Watched</span>
      </button>
    </div>
  </div>
    )
  }
}

export default MovieListEntry;