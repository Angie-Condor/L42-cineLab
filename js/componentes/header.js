'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Cine Laboratoria</span>");

  header.append(title);

  return header;
}
