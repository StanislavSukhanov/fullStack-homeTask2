window.addEventListener('DOMContentLoaded', function() {

  // исходные данные

  var elems = document.querySelectorAll('.element');



  // Логика

  function changeCss(elems) {

    var wich = elems[i].style.borderColor = "red";
  }

  // события

  for (i = 0; i < elems.length; i++) {

    if (i % 2 == 0) {

      continue;// пропускает текущую итерацию
    }
    changeCss(elems);
  }

});


// 0%2 остаток от деления 0
// 1%2 остаток отделения 1
// 2%2 остаток от деления 0
// 3%2 остаток от деления 1
// 4%2 остаток от делления 0
// 5%2 остаток от деления 1
// 6%2 остаток от деления 0