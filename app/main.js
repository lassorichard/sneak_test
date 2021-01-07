let menuIcon = document.getElementById('menu'),
    closeIcon = document.getElementById('close'),
    header = document.getElementById('header'),
    body = document.querySelector('body');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if(header.classList.contains('menu-active')){
    header.classList.remove('menu-active');
  } else {
    header.classList.add('menu-active')
  }
});

closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if(header.classList.contains('menu-active')){
    header.classList.remove('menu-active');
  } else {
    header.classList.add('menu-active')
  }
});