var catItem = document.querySelector('.catalog__item');
var catItems = document.querySelectorAll('.catalog__item');
var catItemSelected = document.querySelector('.catalog__item--selected');
var catChoice = document.querySelector('.catalog__order-link');
var catChoices = document.querySelectorAll('.catalog__order-link');

catChoices.forEach(function(catChoice) {
catChoice.addEventListener('click', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
  }
  if (catItem.classList.contains('catalog__item--default')) {
    catItem.classList.toggle('catalog__item--selected');
    catItem.classList.remove('catalog__item--default');
  } else {
    catItem.classList.toggle('catalog__item--default');
    catItem.classList.remove('catalog__item--selected');
  }
});
});

catItems.forEach(function(catItem) {
catItem.addEventListener('click', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
    catItem.classList.add('catalog__item--selected');
  }
  if (catItem.classList.contains('catalog__item--default')) {
    catItem.classList.toggle('catalog__item--selected');
    catItem.classList.remove('catalog__item--default');
  } else {
    catItem.classList.toggle('catalog__item--default');
    catItem.classList.remove('catalog__item--selected');
  }
});

catItem.addEventListener('mouseenter', function() {
  if (catItem.classList.contains('catalog__item--selected')) {
    catItem.classList.remove('catalog__item--selected');
    catItem.classList.add('catalog__item--hover');
  }
});

catItem.addEventListener('mouseleave', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
    catItem.classList.add('catalog__item--selected');
  }
});
});
