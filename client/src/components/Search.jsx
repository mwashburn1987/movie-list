//search bar
import React from 'react';


let Search = (props) => (
  <div>
    <input className="search" type="text" placeholder="Search.." id="search"></input>
    <button onClick= {(event) => {props.onSubmitClick(event, document.getElementById("search").value);
            }}className="button" type="submit" id="searchButton" >
              <span>Search</span>
            </button>
             <div>
      <input className="add" type="text" placeholder="Add a movie.." id="add"></input>
      <button onClick= {(event) => {props.onAddMovieClick(event, document.getElementById("add").value); }}
              className="button">
                <span>Add</span>
      </button>
  </div>
  </div>

)

export default Search;