import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import MovieDetails from './components/MovieDetails';

function App() {

  const [currentList, setList] = useState()
  const [currentMovie, setMovie] = useState()

  console.log(currentMovie);

  return (
    <div id="App">

      <section id="searchSection">
        <SearchBar setList={setList}/>
        <List currentList={currentList} setMovie={setMovie}/>
      </section>

      <MovieDetails currentMovie={currentMovie}/>
    </div>
  );
}

export default App;
