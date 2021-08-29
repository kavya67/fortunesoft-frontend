import React from "react";
import Image from "next/image";

const MovieCard = ({ title, imdb_rating, length, poster, director }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <Image
          src={poster}
          alt={`movie-poster-${title}`}
          width={315}
          height={367}
          className="poster-img"
        />
      </div>
      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-info">
          <div className="d-flex justify-content-between">
            <div className="info-section">
              <label>ImDb</label>
              <span>{imdb_rating}</span>
            </div>
            <div className="info-section">
              <label>length</label>
              <span>{length}</span>
            </div>
          </div>
          <div className="info-section mt-2">
            <label>Directors</label>
            <span>
              {Array.isArray(director)
                ? director.join(", ")
                : director}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
