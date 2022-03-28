import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";



function Search() {
  const [character, stateCharacter] = useState([]);
  const [state, setState] = useState("");
  const [info, setInfo] = useState({});

  let baseUrl = `${process.env.REACT_APP_API_URL}/`;
  //const endpoint = `character?name=${state}`;

  const requestget = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        stateCharacter(data.results);
        setInfo(data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPrevius = () => {
    requestget(info.prev);
  };

  const onNext = () => {
    requestget(info.next);
  };



  useEffect(() => {
    requestget();
  }, []);

  return (
    <div className="navbar-brand my-5">
      <div className="container mt-2">
        <h4 className="form-label text-uppercase text-center mb-5">
          Search for a character
        </h4>

        <input
          className="form-control mb-3"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <br />
        <div className="d-grid gap-2">
          <button className="btn btn-lg btn-secondary" onClick={requestget}>
            Search
          </button>
        </div>

        <div className="container mt-5">
          {character ? (
            <>
              <div className="row">
                {character.map((item, index) => (
                  <div key={index} className="col mb-3">
                    <div className="card" style={{ maxWidth: "200px" }}>
                      <img src={item.image} alt="" />
                      <div className="card-body">
                        <h5 className="card-tittle">{item.name}</h5>
                        <hr />
                        <p>species: {item.species}</p>
                        <p>location: {item.location.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                prev={info.prev}
                next={info.next}
                onPrevius={onPrevius}
                onNext={onNext}
              />
            </>
          ) :(
            <h1>no hay</h1>
          )}
          {character.length == 0 && (
            <img
              className="rounded mx-auto d-block"
              src={process.env.PUBLIC_URL + "/img/rickmorty.jpg"}
              alt="logo"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
