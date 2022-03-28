import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [characters, stateCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => {
        stateCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand={"Rick and Morty App"} />
      <div className="container mt-5">
        <Search />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
