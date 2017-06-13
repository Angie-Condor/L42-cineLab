'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Cartelera(data));
  root.append(wrapper);
}

$( _ => {
  getMovies((err,data)=>{
    if(err) console.log(err);

    const root = $('#root');
    render(root);
  });
});
