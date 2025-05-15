import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="title">
      <h1>Your WatchList</h1>
      <div className="watchlist">
        {watchlist.map((movieId) => {
          const movie = movies.find((movie) => movie.id === movieId);
          return (
            <MovieCard
              key={movieId}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.includes(movie.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
