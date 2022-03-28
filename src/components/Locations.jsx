import React, { Fragment, useState, useEffect } from "react";
import Pagination from "./Pagination";

const Characters = () => {

  const [characters, stateCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/location";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => {
        stateCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const baseUrl = `${process.env.REACT_APP_API_URL}/`;
  const endpoint = `character`;

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
    <div className="row m-3">
      {characters.map((item, index) => (
        <div key={index} className="col mb-3">
          <div className="card" style={{ maxWidth: "200px" }}>
            <div className="card-body">
              <h5 className="card-tittle">{item.name}</h5>
              <hr />
              <p>type: {item.type}</p>
              <p>dimension: {item.dimension}</p>
            </div>
          </div>
        </div>
      ))}
      <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
    </div>
  );
};

export default Characters;
