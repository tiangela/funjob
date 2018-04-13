var catalogItems = Array.prototype.slice.call(document.querySelectorAll('.catalog__item'));

/*catalogItems.forEach(function(catalogItem) {
  var card = catalogItem;
  var buyButton = catalogItem.querySelector('.catalog__order-link');
     card.addEventListener('click', function() {
       if (card.classList.contains('catalog__item--hover')) {
         card.classList.remove('catalog__item--hover');
         card.classList.add('catalog__item--selected');
       }
       if (card.classList.contains('catalog__item--default')) {
         card.classList.toggle('catalog__item--selected');
         card.classList.remove('catalog__item--default');
       } else {
         card.classList.toggle('catalog__item--default');
         card.classList.remove('catalog__item--selected');
       }
});
   buyButton.addEventListener('click', function() {
     event.preventDefault();
     event.stopPropagation();
     if (card.classList.contains('catalog__item--hover')) {
       card.classList.remove('catalog__item--hover');
     }
     if (card.classList.contains('catalog__item--default')) {
       card.classList.toggle('catalog__item--selected');
       card.classList.remove('catalog__item--default');
     } else {
       card.classList.toggle('catalog__item--default');
       card.classList.remove('catalog__item--selected');
     }
   });
   card.addEventListener('mouseenter', function() {
     if (card.classList.contains('catalog__item--selected')) {
       card.classList.remove('catalog__item--selected');
       card.classList.add('catalog__item--hover');
     }
   });
   card.addEventListener('mouseleave', function() {
     if (card.classList.contains('catalog__item--hover')) {
       card.classList.remove('catalog__item--hover');
       card.classList.add('catalog__item--selected');
     }
   });
});*/


catalogItems.forEach(function(catalogItem) {
  var item = catalogItem;
  var buyButton = catalogItem.querySelector('.catalog__order-link');
  var card = catalogItem.querySelector('.card');
  var cardText = card.querySelector('.card__text');
  var cardHover = cardText.querySelector('.card__motto--hover');
  var cardActive = cardText.querySelector('.card__motto--active');

  item.addEventListener('click', function() {
    if (item.classList.contains('catalog__item--hover')) {
      item.classList.remove('catalog__item--hover');
      item.classList.add('catalog__item--selected');
      card.classList.remove('card--hover');
      card.classList.add('card--selected');
      cardHover.style.display = 'none';
      cardActive.style.display = 'block';
    }
    if (item.classList.contains('catalog__item--default')) {
      item.classList.remove('catalog__item--default');
      item.classList.add('catalog__item--selected');
      card.classList.remove('card--default');
      card.classList.add('card--selected');
      cardHover.style.display = 'none';
      cardActive.style.display = 'block';
    } else {
      item.classList.remove('catalog__item--selected');
      item.classList.add('catalog__item--default');
      card.classList.remove('card--selected');
      card.classList.add('card--default');
      cardHover.style.display = 'none';
      cardActive.style.display = 'block';
    }
  });
  buyButton.addEventListener('click', function() {
    event.preventDefault();
    event.stopPropagation();
    if (item.classList.contains('catalog__item--hover')) {
      item.classList.remove('catalog__item--hover');
    }
    if (item.classList.contains('catalog__item--default')) {
      item.classList.add('catalog__item--selected');
      item.classList.remove('catalog__item--default');
      card.classList.remove('card--default');
      card.classList.add('card--selected');
    } else {
      item.classList.add('catalog__item--default');
      item.classList.remove('catalog__item--selected');
      card.classList.remove('card--selected');
      card.classList.add('card--default');
    }
  });
  item.addEventListener('mouseenter', function() {
    if (item.classList.contains('catalog__item--selected')) {
      item.classList.remove('catalog__item--selected');
      item.classList.add('catalog__item--hover');
      card.classList.remove('card--selected');
      card.classList.add('card--hover');
      cardActive.style.display = 'none';
      cardHover.style.display = 'block';
    }
  });
  item.addEventListener('mouseleave', function() {
    if (item.classList.contains('catalog__item--hover')) {
      item.classList.remove('catalog__item--hover');
      item.classList.add('catalog__item--selected');
      card.classList.remove('card--hover');
      card.classList.add('card--selected');
      cardHover.style.display = 'none';
      cardActive.style.display = 'block';
    }
  });
});

/// Полифилл

// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.18
// Ссылка (en): http://es5.github.io/#x15.4.4.18
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.18
/*if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
    // Смотрите: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Положим k равным 0
    k = 0;

    // 7. Пока k < len, будем повторять
    while (k < len) {

      var kValue;

      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, то
      if (k in O) {

        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
        kValue = O[k];

        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
        // списком аргументов, содержащим kValue, k и O.
        callback.call(T, kValue, k, O);
      }
      // d. Увеличим k на 1.
      k++;
    }
    // 8. Вернём undefined.
  };
};*/
