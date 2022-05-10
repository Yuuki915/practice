import React, { useState } from "react";
import Search from "./Search";

export const Books2 = () => {
  const [isLoading, setIsLoading] = useState(false);

  // const searchHandler = async () => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&startIndex=${startIndex}`
  //     )
  //     .then((res) => console.log(res));
  // };

  return (
    <div>
      <h1 style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
        Book Search
      </h1>

      <Search />

      {/* search */}
      {/* <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => searchHandler()}
          type="submit"
          style={{ backgroundColor: "#333", color: "#fff" }}
        >
          Search
        </button>
      </div>

      <div>{cards}</div> */}
    </div>
  );
};
