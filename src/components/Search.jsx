import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";

function Search() {
  const [character, stateCharacter] = useState([]);
  const [result, stateResult] = useState([]);
  const [search, stateSearch] = useState([]);

  const requestget = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        stateCharacter(response.data);
        stateResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    stateSearch(e.target.value);
    filter("Busqueda: " + e.target.value);
  };

  const filter = (terminoBusqueda) => {
    var resultados = result.filter((e) => {
      if (
        e.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return e;
      }
    });
    stateCharacter(resultados);
  };

  useEffect(() => {
    requestget();
  }, []);

  return (
    <Fragment>
      <div className="containerInput mb-3">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>

      <Characters />
    </Fragment>
  );
}

export default Search;
