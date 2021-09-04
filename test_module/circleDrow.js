function runCircle(radius) {
  if(document.body.querySelector('circle'))
    return;

  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.background = 'blue';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 0);

  setInterval(() => {
    if(+div.style.height.split('px').join('') === 0) return;

    div.style.background = div.style.background==='blue' ? 'green':'blue';
    div.style.width = +div.style.height.split('px').join('')===radius*2 ? radius+'px' : radius*2+'px';
    div.style.height = +div.style.height.split('px').join('')===radius*2 ? radius+'px' : radius*2+'px';
    // console.log(div.style.height.split('px').join(''));
  }, 2000);

  setTimeout(() => {
    div.style.width = 0 + 'px';
    div.style.height = 0 + 'px';
    // div.remove();
  }, 10000);
}
