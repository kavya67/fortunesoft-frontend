import React from "react";
import { Container } from "react-bootstrap";

import MoviesList from "../components/movies/moviesList";
import Header from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <MoviesList />
      </Container>
    </div>
  );
}
