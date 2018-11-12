window.addEventListener('DOMContentLoaded', function() {

  // исходные данные

  var elems = document.querySelectorAll('.element');
  var closeModalButton = document.querySelector('.close-button')
  var modalWindow = document.querySelector('.modal')

  modalWindow.classList.add('modal-show');


  // Логика

  function changeCss(elems) {

    var wich = elems[i].style.borderColor = "red";
  }

  function hideModal(){
    modalWindow.classList.remove('modal-show');
    
  }

  // события

  for (i = 0; i < elems.length; i++) {

    if (i % 2 == 0) {

      continue;// пропускает текущую итерацию
    }
    changeCss(elems);
  }

  closeModalButton.addEventListener('click', hideModal);

});


// 0%2 остаток от деления 0
// 1%2 остаток отделения 1
// 2%2 остаток от деления 0
// 3%2 остаток от деления 1
// 4%2 остаток от делления 0
// 5%2 остаток от деления 1
// 6%2 остаток от деления 0