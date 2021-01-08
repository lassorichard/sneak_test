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


let viewGrid = document.getElementById('view-grid'),
    viewList = document.getElementById('view-list'),
    masonry = document.getElementById('masonry');

viewList.addEventListener('click', (e)=> {
  e.preventDefault();
  if(masonry.classList.contains('masonry-view-list')) {
  } else {
    masonry.classList.add('masonry-view-list');
  }
});

viewGrid.addEventListener('click', (e)=> {
  e.preventDefault();
  if(masonry.classList.contains('masonry-view-list')) {
    masonry.classList.remove('masonry-view-list');
  }
});





function showMore() {

	var listData = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.shown)')).slice(0, 10);

  for (var i=0; i < listData.length; i++)
  {
  	listData[i].className  = 'masonry__item shown';
  }
  switchButtons();
}

function showLess() {
	var listData = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.hidden)')).slice(-3);
  for (var i=0; i < listData.length; i++)
  {
  	listData[i].className  = 'masonry__item hidden';
  }
  switchButtons();
}

function switchButtons() {
	var hiddenElements = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.shown)'));
  if(hiddenElements.length == 0)
  {
  	document.getElementById('moreButton').style.display = 'none';
  }
  else
  {
  	document.getElementById('moreButton').style.display = 'inline-block';
  }

  var shownElements = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.hidden)'));
  if(shownElements.length <= 10)
  {
    document.getElementById('lessButton').style.display = 'none';
  }
  else
  {
  	document.getElementById('lessButton').style.display = 'inline-block';
  }
}

onload= function(){
	showMore();
}

