$(document).ready(function () {

  $('.careers__card__body__form__file, .careers__file').change(function () {
    if ($(this).val() != '') {
      $(this).next().text($(this)[0].files[0].name);
    } else {
      $(this).next().text('Attach Resume');
    }
    send = $(this).next().next();
    send[0].classList.add('active');
  });

  window.addEventListener('scroll', function () {
    if (pageYOffset == 0) {
      document.location = 'index.html';
    };

    if (pageYOffset > 50) {
      $('#arrowDown').css('webkit-transform', 'rotate(180deg)');
    }
    if (pageYOffset < 50) {
      $('#arrowDown').css('webkit-transform', 'rotate(0deg)');
    }

  });

  $('#arrowDown').click(function () {
    console.log('das');
    $('html, body').animate({ scrollTop: 1 }, 400);
  })

})