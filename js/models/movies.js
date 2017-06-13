const getMovies = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',(err,response) =>{
    if(err) callback(new Error("Error al obtener datos"));
    callback(null,response);
  })

  xhr.open('GET','api/movies');
  xhr.responseType='json';
  xhr.send();
}
