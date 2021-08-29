import React from "react";
import { Row } from "react-bootstrap";

import { useAPI } from "../../apiContext";

import MovieCard from "./movieCard";
import MovieCarousel from "./movieCarousel";

const MoviesList = () => {
  const { movies } = useAPI();
  console.log(movies.data);

  return (
    <div>
      {movies.data
        ? movies.data.map((item, index) => {
            return (
              <Row key={`genres-${index}`}>
                <h3 className="genres-title mt-3">{item.category}</h3>
                <MovieCarousel>
                  {item.movies.map((movie, index) => {
                    return (
                      <MovieCard
                        key={`movie-card-${index}`}
                        title={movie.title}
                        imdb_rating={movie.imdb_rating}
                        length={movie.length}
                        poster={movie.poster}
                        director={movie.director}
                      />
                    );
                  })}
                </MovieCarousel>
              </Row>
            );
          })
        : "loading..."}
    </div>
  );
};

export default MoviesList;
