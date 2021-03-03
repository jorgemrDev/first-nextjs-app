import fetch from "isomorphic-unfetch";

module.exports = 
  exportPathMap: async function(){
      const path = {
          "/": {page: "/"},
          "/movies": {page: "/movies"},
          "/contact": {page: "/contact"}
      };

      const res = await fetch("https://demo2562028.mockable.io/products");
      const movies = await res.json();

      movies.forEach(element => {
          path[`/movie/${element.id}`] = {page: "/movie/[id]",
          query: {id: element.id}
      }
      });

      return path;

  };
