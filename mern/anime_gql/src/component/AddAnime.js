import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { getAuthorsQuery, addAnimeMutation } from "../queries/queries";
// import { compose } from "@apollo/client";

function AddAnime() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    console.log(name, genre, authorId);
  };

  const { loading, error, data } = useQuery(getAuthorsQuery);
  if (error) return <p>Something went wrong...</p>;
  console.log(data);

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {loading ? (
            <option disabled>loading...</option>
          ) : (
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))
          )}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddAnime;
