import React from "react";
import "./App.css";

import AnimeList from "./component/AnimeList";
import AddAnime from "./component/AddAnime";

function App() {
  return (
    <div className="App">
      <AnimeList />

      <br />
      <br />
      <br />

      <AddAnime />
    </div>
  );
}

export default App;
