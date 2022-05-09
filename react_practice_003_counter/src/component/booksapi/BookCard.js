import React, { useState } from "react";

const BookCard = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div>
        <img src={`${props.thumbnail}`} alt="card img" />
      </div>
      <div>Title: {props.title}</div>
      <div>Page: {props.pageCount}</div>
      <div>Published Date: {props.published}</div>
      <div>Author: {props.authors}</div>
      <div>Publisher{props.publisher}</div>
      <div>Discriprion: {props.description}</div>
    </div>
  );
};
export default BookCard;
