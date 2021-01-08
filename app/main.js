// Hamburger menu

let menuIcon = document.getElementById('menu'),
    closeIcon = document.getElementById('close'),
    header = document.getElementById('header'),
    body = document.querySelector('body'),
    html = document.querySelector('html');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if(header.classList.contains('menu-active')){
    header.classList.remove('menu-active');
  } else {
    header.classList.add('menu-active')
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
  }
});

closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if(header.classList.contains('menu-active')){
    header.classList.remove('menu-active');
    body.style.overflow = 'initial';
    html.style.overflow = 'initial';
  } else {
    header.classList.add('menu-active')
  }
});

// Vistas

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


// Mostras mas y mostrar menos

// function showMore() {

// 	var listData = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.shown)')).slice(0, 10);

//   for (var i=0; i < listData.length; i++)
//   {
//     listData[i].className  = 'masonry__item shown';
//   }
//   switchButtons();
// }

// function showLess() {
// 	var listData = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.hidden)')).slice(-3);
//   for (var i=0; i < listData.length; i++)
//   {
//     listData[i].className  = 'masonry__item hidden';
//   }
//   switchButtons();
// }

// function switchButtons() {
// 	var hiddenElements = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.shown)'));
//   if(hiddenElements.length == 0)
//   {
//     document.getElementById('moreButton').style.display = 'none';
//   }
//   else
//   {
//     document.getElementById('moreButton').style.display = 'inline-block';
//   }

//   var shownElements = Array.prototype.slice.call(document.querySelectorAll('#masonry .masonry__item:not(.hidden)'));
//   if(shownElements.length <= 10)
//   {
//     document.getElementById('lessButton').style.display = 'none';
//   }
//   else
//   {
//     document.getElementById('lessButton').style.display = 'inline-block';
//   }
// }

// onload= function(){
// 	showMore();
// }


// JSON files

function bringData () {
  fetch('products.json')
    .then(ajaxPositive)
    .catch(showError);
}

bringData();

function ajaxPositive(response) {
  if(response.ok) {
    response.text().then(showResult);
  } else {
    showError('status code: ' + response.status);
  }
}

function showResult(txt) {
  let data = JSON.parse(txt),
      masonry = document.querySelector('#masonry');

  for (let item of data) {
    masonry.innerHTML += `
    <div class="category-${item.category} masonry__item" id="masonry__item">
      <img src="${item.src}" class="masonry__img">
      <div class="masonry__content">
        <div class="masonry__content__title">
          ${item.title}
        </div>
        <div class="masonry__content__category">
          ${item.category}
        </div>
      </div>
    </div>
    ` 
  }
  filter();
}

function showError(err) { 
  console.log('error', err);
}

document.getElementById('moreButton').addEventListener('click', (e) => {
  bringData();
});

document.getElementById('lessButton').addEventListener('click', (e) => {
  // TODO 
});

let allBtn = document.getElementById('all'),
    brandingBtn = document.getElementById('branding'),
    webBtn = document.getElementById('web'),
    photgraphyBtn = document.getElementById('photgraphy'),
    appBtn = document.getElementById('app'),
    category = [...document.querySelectorAll('.category')];

let filter = () => {
  let masonryItem = [...document.querySelectorAll('.masonry__item')];

  document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', event => {
      var selected = document.querySelectorAll('.selected');
      selected.forEach(function(item) {
        item.classList.remove('selected');
      })
      
      item.classList.add('selected');

      var clickedCat = item.innerHTML.toLocaleLowerCase();

      var allItems = document.querySelectorAll('.masonry__item');
      allItems.forEach(function(item) {
        item.style.display = "none";
      });

      if(clickedCat == 'all') {
        var allItems = document.querySelectorAll('.masonry__item');
        allItems.forEach(function(item) {
          item.style.display = "block";
        });
      } else {
        var showItems = document.querySelectorAll(".category-"+clickedCat);
        showItems.forEach(function(item) {
          item.style.display = "block";
        });
      }
    })
  })
}

