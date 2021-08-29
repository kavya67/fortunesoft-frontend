import React, { useContext, useState, useEffect, createContext } from "react";
import http from "./libs/http";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await http.get("/movies");
      setMovies(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        movies,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
