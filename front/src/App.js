import './App.css';
import { useState } from 'react';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import SearchBar from './components/SearchBar';




function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             characters.find((element) => element.id === data.id) === undefined
       ? setCharacters((characters) => [...characters, data])
       : alert ("Personaje repetido, prueba otro ID.");
          }else {
            alert ("No hay personajes con ese ID.");
          }
          });
       
 }
 function onClose(id){
  setCharacters(characters.filter((element) => element.id !== id))
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
    <Nav onSearch={onSearch}/>
   
    <div>
   <Cards characters={characters} onClose={onClose} />
    </div>
    </div>
  );

  }
export default App
