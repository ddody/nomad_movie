import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const moviesTitles = [
  "Matrix",
  "Full metal Jacket",
  "Oldboy",
  "Star Wars"
];

const movieImages = [
  "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
  "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,656,1000_AL_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
]




class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={movieImages[0]} />
        <Movie title={moviesTitles[1]} poster={movieImages[1]} />
        <Movie title={moviesTitles[2]} poster={movieImages[2]} />
        <Movie title={moviesTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
