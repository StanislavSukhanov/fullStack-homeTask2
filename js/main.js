window.addEventListener('DOMContentLoaded', function() {

  // исходные данные

  var elems = document.querySelectorAll('.element');
  var closeModalButton = document.querySelector('.close-button')
  var modalWindow = document.querySelector('.modal')
  var imageContainer = document.querySelector('.modal-image-container');

 


  // Логика

  function changeCss(elems) {

    var wich = elems[i].style.borderColor = "red";
  }

  // handles close of modal window
  function hideModal(){
    modalWindow.classList.remove('modal-show');
  }
  
  // opens modal 
  function openModal(){
    var modalImageUrl = this.children[0].src;
    imageContainer.style.backgroundImage = `url("${modalImageUrl}")`;
    modalWindow.classList.add('modal-show');
    
  }

  // события

  // assigning even listerers to all elements 
  for (i = 0; i < elems.length; i++) {
    console.log(elems[i].children[0].src);
    elems[i].addEventListener('click', openModal); 
  }

  // close button 
  closeModalButton.addEventListener('click', hideModal);

});


// 0%2 остаток от деления 0
// 1%2 остаток отделения 1
// 2%2 остаток от деления 0
// 3%2 остаток от деления 1
// 4%2 остаток от делления 0
// 5%2 остаток от деления 1
// 6%2 остаток от деления 0