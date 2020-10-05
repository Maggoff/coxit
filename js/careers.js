$(document).ready(function () {

  $('.careers__card__body__form__file, .careers__file').change(function () {
    console.log('hi');
    if ($(this).val() != ''){
      $(this).next().text($(this)[0].files[0].name);
    } else{
      $(this).next().text('Attach Resume');
    }
    send = $(this).next().next();
    send[0].classList.add('active');
  });

})