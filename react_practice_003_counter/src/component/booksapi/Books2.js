import axios from "axios";
import React, { useState } from "react";
import jsonplaceholder from "../apis/jsonplaceholder";

export const Books2 = () => {
  const [searchVal, setSearchVal] = useState("");
  const [maxResults, setMaxResults] = useState(Number);
  const [startIndex, setStartIndex] = useState(Number);
  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);

  const getPosts = async () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchVal}&maxResults=${maxResults}&startIndex=${startIndex}`
      )
      .then((res) => {
        if (res.data.items.length > 0) {
          //   setCards(res.data.items);
          console.log(res.data.totalItems);
          //   console.log(setCards(res.data.items));
        }
      });
    //   .catch((err) => {
    //     console.log(`Error! ${err.response.data.error.message}`);
    //   });

    //
    // try {
    //   const posts = await jsonplaceholder.get(`/volumes?q=${searchVal}`);
    //   setCards(posts.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
        Book Search
      </h1>

      {/* search */}
      <div>
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          onClick={() => getPosts()}
          type="submit"
          style={{ backgroundColor: "#333", color: "#fff" }}
        >
          Search
        </button>
      </div>

      <div>{cards}</div>
    </div>
  );
};
