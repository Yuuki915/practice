import axios from "axios";
import React, { useState } from "react";
import BookCard from "./BookCard";

export default function Books() {
  //   const [value, setValue] = useState("");
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    setIsLoading(true);
    if (maxResults > 50 || maxResults < 5) {
      console.error("Max Results must to be between 5 to 50");
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then((res) => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            console.log(
              `Max Results must to be between 1 to ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setIsLoading(false);
              console.log(cards);
            }
          }
        })
        .catch((err) => {
          setIsLoading(true);
          console.log(`Error! ${err.response.data.error.message}`);
        });
    }
  };

  const handleCards = () => {
    console.log(cards);
    const items = cards.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return (
        <div key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            published={item.volumeInfo.publishedDate}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
          />
        </div>
      );
    });
    if (isLoading) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div>
          <div>{items}</div>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>BOOKS</h1>

      <div className="search">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <div onClick={handleSubmit}>Search</div>
      </div>

      <div className="control-display">
        <div>Show Items</div>
        <input
          type="number"
          id="maxResults"
          value={maxResults}
          onChange={(e) => setMaxResults(e.target.value)}
        />

        <div>Start Index</div>
        <input
          type="number"
          id="startIndex"
          value={startIndex}
          onChange={(e) => setStartIndex(e.target.value)}
        />
      </div>

      <div className="display-books"></div>
      {handleCards()}
    </div>
  );
}
