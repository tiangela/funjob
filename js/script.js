var catItem = document.querySelector('.catalog__item');
var catBuyItems = document.querySelectorAll('.catalog__order-text');
var catApproveItems = document.querySelectorAll('.catalog__motto');
var catItemSelected = document.querySelector('.catalog__item--selected');
var catTextDef = document.querySelector('.catalog__order-text--default');
var catTextSel = document.querySelector('.catalog__order-text--selected');
var catTextDis = document.querySelector('.catalog__order-text--disabled');
var catChoice = document.querySelector('.catalog__order-link');
var catTextNoHover = document.querySelector('.catalog__motto--active');
var catTextHover = document.querySelector('.catalog__motto--hover');

catItem.addEventListener('click', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
    catTextHover.style.display = 'none';
    catTextNoHover.style.display = 'block';
  }
  if (catItem.classList.contains('catalog__item--default')) {
    catItem.classList.toggle('catalog__item--selected');
    catItem.classList.remove('catalog__item--default');
    catTextDef.style.display = 'none';
    catTextSel.style.display = 'block';
  } else {
    catItem.classList.toggle('catalog__item--default');
    catItem.classList.remove('catalog__item--selected');
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'block';
  }
});

catChoice.addEventListener('click', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
  }
  if (catItem.classList.contains('catalog__item--default')) {
    catItem.classList.toggle('catalog__item--selected');
    catItem.classList.remove('catalog__item--default');
    catTextDef.style.display = 'none';
    catTextSel.style.display = 'block';
  } else {
    catItem.classList.toggle('catalog__item--default');
    catItem.classList.remove('catalog__item--selected');
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'block';
    catTextNoHover.style.display = 'block';
  }
});

catItem.addEventListener('mouseenter', function() {
  if (catItem.classList.contains('catalog__item--selected')) {
    catItem.classList.remove('catalog__item--selected');
    catItem.classList.add('catalog__item--hover');
    catTextNoHover.style.display = 'none';
    catTextHover.style.display = 'block';
  }
});

catItem.addEventListener('mouseleave', function() {
  if (catItem.classList.contains('catalog__item--hover')) {
    catItem.classList.remove('catalog__item--hover');
    catItem.classList.add('catalog__item--selected');
   catTextHover.style.display = 'none';
   catTextNoHover.style.display = 'block';
  }
});
