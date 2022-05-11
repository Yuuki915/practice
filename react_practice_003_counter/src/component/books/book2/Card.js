import React from "react";

export default function Card({ data }) {
  console.log(data);

  return (
    <div className="cards">
      {data.map((data) => {
        let thumbnail =
          data.volumeInfo.imageLinks &&
          data.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail !== undefined) {
          return (
            <div key={data.key}>
              <img src={thumbnail} alt="img" />
              <div className="title">{data.volumeInfo.title}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
