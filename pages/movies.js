import React from "react";
import Menu from "../components/Menu";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default function Movies({ movies }) {
  return (
    <div>
      <Menu></Menu>
      <h1>peliculas</h1>
      {movies.map((movie, index) => (
        <Link key={index} href="/movie/[movie]" as={`movie/${movie.id}`}>
          <a style={{ marginRight: 20 }}>{movie.name}</a>
        </Link>
      ))}
    </div>
  );
}

Movies.getInitialProps = async () => {
  const res = await fetch("https://demo2562028.mockable.io/products");
  const movies = await res.json();
  return { movies };
};
