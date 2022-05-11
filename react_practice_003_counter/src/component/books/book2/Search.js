import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";

export default function Search() {
  const [search, setSearch] = useState("");
  const [maxResults, setMaxResults] = useState(Number);
  const [startIndex, setStartIndex] = useState(Number);

  const [bookData, setBookData] = useState([]);

  const getPost = async () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCEQd0GL7CTJv8KsClqZP-wyF1j35Bum0k&maxResults=40`
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
    // &maxResults=${maxResults}&startIndex=${startIndex}
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ backgroundColor: "#333", color: "#fff" }}
          type="submit"
          onClick={() => getPost()}
        >
          Search
        </button>
      </div>

      <Card data={bookData} />
    </div>
  );
}
