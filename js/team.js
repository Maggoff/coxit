$(document).ready(function(){

  $('.team__item__title').hover(function () {
    $('#team__check').finish().animate({ opacity: 0 }, 400, function () {
      $(this).style.display = 'none';
    });
  })

  window.addEventListener('scroll', function() {
    if(pageYOffset == 0){
      document.location = 'index.html#whoWe';
    };
  });

})