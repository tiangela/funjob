'use strict'

var catItems = document.querySelectorAll(".catalog__item");
var catChoices = document.querySelectorAll(".catalog__order-link");
var catTextDef = document.querySelector(".catalog__order-text--default");
var catTextSel = document.querySelector(".catalog__order-text--selected");
var catTextDis = document.querySelector(".catalog__order-text--disabled");
var catTextNoHover = document.querySelector(".catalog__motto--active");
var catTextHover = document.querySelector(".catalog__motto--hover");

/*catItems.forEach(function(item) {
item.addEventListener("click", function() {
  if (item.classList.contains("catalog__item--selected")) {
    item.classList.remove("catalog__item--selected");
    item.classList.add("catalog__item--default");
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'block';

} else {
    item.classList.add("catalog__item--selected");
    item.classList.remove("catalog__item--default");
    catTextDef.style.display = 'none';
    catTextSel.style.display = 'block';
  }
});
});

catChoices.forEach(function(choice) {
choice.addEventListener("click", function() {
  catItems.forEach(function(item) {
  if (item.classList.contains("catalog__item--selected")) {
    item.classList.remove("catalog__item--selected");
    item.classList.add("catalog__item--default");
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'block';
  } else {
    item.classList.add("catalog__item--selected");
    item.classList.remove("catalog__item--default");
    catTextDef.style.display = 'none';
    catTextSel.style.display = 'block';
  }
  });
});
}); */

var onClickCard = function () {
  catItems.forEach(function(item) {
  if (item.classList.contains("catalog__item--selected")) {
    item.classList.remove("catalog__item--selected");
    item.classList.add("catalog__item--default");
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'block';

} else {
    item.classList.add("catalog__item--selected");
    item.classList.remove("catalog__item--default");
    catTextDef.style.display = 'none';
    catTextSel.style.display = 'block';
  }
  });
};


for (var i = 0; i < catItems.length; i++) {
  catItems[i].addEventListener('click', onClickCard);
  catChoices[i].addEventListener('click', onClickCard);
}

catItems.forEach(function(card) {
card.addEventListener("mouseenter", function() {
  if (card.classList.contains("catalog__item--selected")) {
    card.classList.remove("catalog__item--selected");
    card.classList.add("catalog__item--hover");
    catTextNoHover.style.display = 'none';
    catTextHover.style.display = 'block';
}
});
card.addEventListener("mouseleave", function() {
  if (card.classList.contains("catalog__item--hover")) {
    card.classList.remove("catalog__item--hover");
    card.classList.add("catalog__item--selected");
    catTextNoHover.style.display = 'block';
    catTextHover.style.display = 'none';
}
});
});

for (var i = 0; i < catItems.length; i++) {
  if (catItems[i].classList.contains("catalog__item--disabled")) {
    catTextSel.style.display = 'none';
    catTextDef.style.display = 'none';
    catTextDis.style.display = 'block';
  }
}
