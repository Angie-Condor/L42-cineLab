'use strict';

const itemMovie = (movie) => {
  const id = movie.nombre.toLowerCase
}

const Cartelera = (data) => {
  const c = $('<div class="cartelera"></div>');
  data.forEach((movie) =>{
    c.append(itemMovie(movie));
  })
}
