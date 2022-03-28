import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Locations from "./components/Locations";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

function App() {

  return (
    <div>
      
        <BrowserRouter basename={"/"}>
          <Navbar brand={"Rick and Morty App"}/>
          <Routes>
            <Route path="/" element={<Characters/>}></Route>
            <Route path="/search" element={<Search />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
