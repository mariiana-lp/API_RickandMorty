import React,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";



function App() {

  const[characters, stateCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => stateCharacters(data.results))
      .catch(error=> console.log(error))
  };

  useEffect(()=> {
    fetchCharacters(initialUrl);
  },[])

  return (
   <Navbar brand={"Rick and Morty App"}/>
  );
}

export default App;
