$(document).ready(function () {

  let CheckMobile = document.getElementById("team__check");
  let TeamMobile = document.getElementsByClassName("team__item__title");

  $(TeamMobile).click(function () {
    $(CheckMobile).finish().animate({ opacity: 0 }, 400, function () {
      CheckMobile.style.display = 'none';
    });
  })

  window.addEventListener('scroll', function () {
    if (pageYOffset == 0) {
      document.location = 'index.html#whoWe';
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



  timerCheck("#team__check", 12, 12, -2, '25%')

  function timerCheck(check, height, width, left, top) {
    setTimeout(function tick() {
      $(check).animate({ height: height, width: width, left: left, top: top }, 400);
      $(check).animate({ height: height - 4, width: width - 4, left: left + 2, top: top + 2 }, 400);
      setTimeout(tick, 800);
    }, 0);
  };

})