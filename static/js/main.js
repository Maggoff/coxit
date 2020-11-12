$(document).ready(function () {
  const slider = document.getElementById('slider');
  let checkScrollAnimation = true;

  $("#header__logo, #menu__contacts, #menu__weCanHelp, .toServices").click(function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().left;
    checkScrollAnimation = false;
  });


  let scrollbarLeft;

  let contentHide = document.getElementsByClassName("content__hide");

  let logo = document.getElementById("header__logo");
  let contacts = document.getElementById("menu__contacts");
  let weCanHelp = document.getElementById("menu__weCanHelp")
  let toServices = document.getElementsByClassName("toServices");

  let j = 0;
  let jOld;

  let thirdTitle = document.getElementById("form__third__title");
  thirdTitle.style.marginTop = (document.documentElement.clientHeight / (100 / 12)) - 57 + 'px';


  function opacityOn(page) {    
    switch (page) {
      case 0:
        logo.classList.add('active');
        weCanHelp.classList.remove('active');
        contacts.classList.remove('active');
        contentHide[0].style.opacity = 1;
        contentHide[1].style.opacity = 0;
        contentHide[2].style.opacity = 0;
        contentHide[3].style.opacity = 0;
        contentHide[4].style.opacity = 0;
        contentHide[5].style.opacity = 0;
        contentHide[6].style.opacity = 0;
        contentHide[7].style.opacity = 0;
        contentHide[8].style.opacity = 0;
        contentHide[9].style.opacity = 0;
        break;
      case 1:
        logo.classList.remove('active');
        weCanHelp.classList.add('active');
        contacts.classList.remove('active');
        contentHide[0].style.opacity = 0;
        contentHide[1].style.opacity = 1;
        contentHide[2].style.opacity = 0;
        contentHide[3].style.opacity = 0;
        contentHide[4].style.opacity = 0;
        contentHide[5].style.opacity = 0;
        contentHide[6].style.opacity = 0;
        contentHide[7].style.opacity = 0;
        contentHide[8].style.opacity = 0;
        contentHide[9].style.opacity = 0;
        break;
      case 2:
        logo.classList.remove('active');
        weCanHelp.classList.remove('active');
        contacts.classList.remove('active');
        contentHide[0].style.opacity = 0;
        contentHide[1].style.opacity = 0;
        contentHide[2].style.opacity = 1;
        contentHide[3].style.opacity = 0;
        contentHide[4].style.opacity = 0;
        contentHide[5].style.opacity = 0;
        contentHide[6].style.opacity = 0;
        contentHide[7].style.opacity = 0;
        contentHide[8].style.opacity = 0;
        contentHide[9].style.opacity = 0;
        break;
      case 3:
        logo.classList.remove('active');
        weCanHelp.classList.remove('active');
        contacts.classList.remove('active');
        contentHide[0].style.opacity = 0;
        contentHide[1].style.opacity = 0;
        contentHide[2].style.opacity = 0;
        contentHide[3].style.opacity = 1;
        contentHide[4].style.opacity = 1;
        contentHide[5].style.opacity = 1;
        contentHide[6].style.opacity = 1;
        contentHide[7].style.opacity = 1;
        contentHide[8].style.opacity = 0;
        contentHide[9].style.opacity = 0;
        break;
      case 4:
        logo.classList.remove('active');
        weCanHelp.classList.remove('active');
        contacts.classList.remove('active');
        contentHide[0].style.opacity = 0;
        contentHide[1].style.opacity = 0;
        contentHide[2].style.opacity = 0;
        contentHide[3].style.opacity = 0;
        contentHide[4].style.opacity = 0;
        contentHide[5].style.opacity = 0;
        contentHide[6].style.opacity = 0;
        contentHide[7].style.opacity = 0;
        contentHide[8].style.opacity = 1;
        contentHide[9].style.opacity = 0;
        break;
      case 5:
        logo.classList.remove('active');
        weCanHelp.classList.remove('active');
        contacts.classList.add('active');
        contentHide[0].style.opacity = 0;
        contentHide[1].style.opacity = 0;
        contentHide[2].style.opacity = 0;
        contentHide[3].style.opacity = 0;
        contentHide[4].style.opacity = 0;
        contentHide[5].style.opacity = 0;
        contentHide[6].style.opacity = 0;
        contentHide[7].style.opacity = 0;
        contentHide[8].style.opacity = 0;
        contentHide[9].style.opacity = 1;
        break;
    }
  }


  if (window.location.hash == '#contacts') {
    $("#scrollbar").width('100%');
    jOld = j;
    j = 5;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    checkScrollAnimation = false;


    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp });


  } else if (window.location.hash == '#weCanHelp') {
    $("#scrollbar").width(16.666666 * 2 + '%');
    jOld = j;
    j = 1;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    checkScrollAnimation = false;

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    }
    slider.scrollLeft = window.innerWidth * 0.82;

  } else if (window.location.hash == '#howCanWeHelp') {
    $("#scrollbar").width(16.666666 * 4 + '%');
    jOld = j;
    j = 3;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    checkScrollAnimation = false;

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    }     
    slider.scrollBy({ left: scrollTemp });
  }else {
    $("#scrollbar").width('16.66666%');
    jOld = j;
    j = 0;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp });
  }

  let scrollbar = document.getElementById('scrollbar');

  //scrollbar.style.left = scrollbarLeft + '%';

  // let hashs = ['#main', '#weCanHelp', '#whoWe', '#howCanWeHelp', '#blog', '#contacts'];


  let weCanHelpCheck = document.getElementById("weCanHelp__check");

  timerCheck(weCanHelpCheck, 12, 12, -2, 86);

  function timerCheck(check, height, width, left, top) {
    setTimeout(function tick() {
      $(check).animate({ height: height, width: width, left: left, top: top }, 400);
      $(check).animate({ height: height - 4, width: width - 4, left: left + 2, top: top + 2 }, 400);
      setTimeout(tick, 800);
    }, 0);
  };

  let weCanHelpCheckMobile = document.getElementById("weCanHelp__check__mobile");
  let weCanHelpMobile = document.getElementsByClassName("mobile__card__head");

  timerCheck(weCanHelpCheckMobile, 12, 12, -2, '55%');

  $(weCanHelpMobile).click(function () {
    $(weCanHelpCheckMobile).finish().animate({ opacity: 0 }, 400, function () {
      weCanHelpCheckMobile.style.display = 'none';
    })
  })


  let itemServices = document.getElementsByClassName("weCanHelp__container__item");
  let itemBlog = document.getElementsByClassName("medium-widget-article__item");
  let footer = document.getElementById("footer");

  let z = 0;

  zIndex(itemServices, footer);

  function zIndex(itemHover, footerZ) {
    for (let i = 0; i < itemHover.length; i++) {
      $(itemHover[i]).hover(function () {
        $(weCanHelpCheck).finish().animate({ opacity: 0 }, 400, function () {
          weCanHelpCheck.style.display = 'none';
        });
        footerZ.style.zIndex = -2;
      }, function () {
        footerZ.style.zIndex = 2;
      })
    }
  }

  //let idTimer;

  function timer() {
    if (window.innerWidth > 768) {
      window.pageXOffset = window.innerWidth * j * 0.87;
    } else {
      window.pageXOffset = window.innerWidth * j;  
    }

    //clearTimeout(idTimer);    

    /*idTimer = setTimeout(function tick() {
      let time = 0;
      if (scrollbarLeft != (16.666666 * 5)) {
        $('#flesh').finish().animate({ opacity: 0.05 }, 1000);
        $('#flesh').finish().animate({ opacity: 0.4 }, 1000);
        $(scrollbar).finish().animate({ left: '83.3%' }, 2000);
        time += 2000;
      }
      if (scrollbarLeft != 0) {
        $('#flesh').animate({ opacity: 0.05 }, 1000);
        $('#flesh').animate({ opacity: 0.4 }, 1000);
        $(scrollbar).animate({ left: '0%' }, 2000);
        time += 2000;
      }
      $('#flesh').animate({ opacity: 0.05 }, 1000);
      $('#flesh').animate({ opacity: 0.4 }, 1000);
      $(scrollbar).animate({ left: scrollbarLeft + '%' }, 2000);
      idTimer = setTimeout(tick, 32000 + time);
    }, 4000);*/
  };
  timer();




  let delta;
  let marker = true;
  let counter1 = 0;
  let counter2;
  let newScroll = true;
  let wheelFree = true;

  const wheelEnd = () => {
    counter1 = 0;
    counter2 = null;
    marker = true;
    wheelFree = true;
  }

  const wheelAct = () => {
    counter2 = counter1;
    setTimeout(() => {
      if (counter2 == counter1) {
        wheelEnd();
      } else {
        wheelAct();
      }
    }, 50);
  }

  const wheelStart = () => {
    marker = false;
    wheelFree = false;
  
    wheelAct();
  }


  let tempBlock = true;

  const onWheel = (e) => {
    checkScrollAnimation = false;
    counter1 += 1;
    delta = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;

    // NEEDED FOR NEW SCROLL ON TOUCHPAD BEFORE PREVIOUS ENDED
    if (newScroll && Math.abs(delta) > 70) {
      marker = true;
      newScroll = false;
      setTimeout(() => { 
        newScroll = true; 
      }, 600);
    }

    
    if (marker) { 
      marker = false;
      
      if (wheelFree) {
        wheelStart();
      }
      
      if (tempBlock) {
        tempBlock = false;

        let left;

        if (delta > 1) {
          left = $("#main").width();
        }
        if (delta < -1) {
          left = -$("#main").width();
        }

        slider.scrollBy({ left: left, behavior: 'smooth' });
        setTimeout(() => {
          jOld = j;
          j = Math.round(slider.scrollLeft / $("#main").width());
          $("#scrollbar").width((j + 1) * 16.666666 + '%');

          timer();

          if (document.documentElement.clientWidth > 768) {
            opacityOn(j);
          }  
        }, 600)

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  
        itemBlog = document.getElementsByClassName("medium-widget-article__item");
  
        if (z == 0) {
          zIndex(itemBlog, footer);
          z++;
        }

        setTimeout(() => { tempBlock = true }, 300);
      }
    }
    return false;
  }


  const isMacOs = navigator.platform.toUpperCase().indexOf('MAC')>=0;

  if (!isMacOs) {
    if (slider.addEventListener) {
      if ('onwheel' in document) {
        slider.addEventListener("wheel", onWheel);
      } else if ('onmousewheel' in document) {
        slider.addEventListener("mousewheel", onWheel);
      } else {
        slider.addEventListener("MozMousePixelScroll", onWheel);
      }
    } else {
      slider.attachEvent("onmousewheel", onWheel);
    }
  } else {
    $(".leftArrow").css({ display: 'block' });
    $(".rightArrow").css({ display: 'block' });

    $(".leftArrow").click(() => {
      const left = -$("#main").width();
      slider.scrollBy({ left: left, behavior: 'smooth' });
      setTimeout(() => {
        jOld = j;
        j = Math.round(slider.scrollLeft / $("#main").width());
        $("#scrollbar").width((j + 1) * 16.666666 + '%');

        timer();

        if (document.documentElement.clientWidth > 768) {
          opacityOn(j);
        }  
      }, 600);
    });

    $(".rightArrow").click(() => {
      const left = $("#main").width();
      slider.scrollBy({ left: left, behavior: 'smooth' });
      setTimeout(() => {
        jOld = j;
        j = Math.round(slider.scrollLeft / $("#main").width());
        $("#scrollbar").width((j + 1) * 16.666666 + '%');

        timer();

        if (document.documentElement.clientWidth > 768) {
          opacityOn(j);
        }  
      }, 600);
    });
  }

  $(logo).click(function () {
    checkScrollAnimation = false;
    $("#scrollbar").width("16.66666%");
    jOld = j;
    j = 0;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = -window.innerWidth * coff * Math.abs(jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp, behavior: 'smooth' });
  })

  $(toServices).click(() => {
    checkScrollAnimation = false;
    $("#scrollbar").width(16.666666 * 4 + '%');
    jOld = j;
    j = 3;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
    

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp, behavior: 'smooth' });
  });

  $("#flesh").click(() => {
    checkScrollAnimation = false;
    $("#scrollbar").width(16.666666 * 2 + '%');
    jOld = j;
    j = 1;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;
    
    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp, behavior: 'smooth' }); 
  });

  $(weCanHelp).click(function () {
    checkScrollAnimation = false;
    $("#scrollbar").width(16.666666 * 2 + '%');
    jOld = j;
    j = 1;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;
    
    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp, behavior: 'smooth' }); 
  })

  $(contacts).click(function () {
    checkScrollAnimation = false;
    $("#scrollbar").width('100%');
    jOld = j;
    j = 5;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }

    let coff = 1;
    coff = window.innerWidth > 768 ? 0.8 : 1;      

    let scrollTemp = 0;
    if (jOld !== j) {
      scrollTemp = - window.innerWidth * coff * (jOld - j);
    } 
    slider.scrollBy({ left: scrollTemp, behavior: 'smooth' });
  })



  let cookie = document.getElementById("cookie");
  let cookieClose = document.getElementById("cookie__close");
  $(cookieClose).click(function () {
    $(cookie).animate({ opacity: 0 }, 400, function () {
      cookie.style.display = 'none';
    })
  })


  let nextFirst = document.getElementsByClassName("next__form__first");
  let prevSecond = document.getElementsByClassName("prev__form__second");
  let nextSecond = document.getElementsByClassName("next__form__second");
  let prevThird = document.getElementsByClassName("prev__form__third");
  let nextThird = document.getElementsByClassName("next__form__third");
  let prevFourth = document.getElementsByClassName("prev__form__fourth");
  let nextFourth = document.getElementsByClassName("next__form__fourth");
  let prevFifth = document.getElementsByClassName("prev__form__fifth");
  let nextFifth = document.getElementsByClassName("next__form__fifth");

  let formFirst = document.getElementById("form__first");
  let formSecond = document.getElementById("form__second");
  let formThird = document.getElementById("form__third");
  let formFourth = document.getElementById("form__fourth");
  let formFifth = document.getElementById("form__fifth");
  let formSixth = document.getElementById("form__sixth");

  changeNext(nextFirst, formFirst, formSecond);

  changePrev(prevSecond, formSecond, formFirst);
  changeNext(nextSecond, formSecond, formThird);

  changePrev(prevThird, formThird, formSecond);
  changeNext(nextThird, formThird, formFourth);

  changePrev(prevFourth, formFourth, formThird);
  changeNext(nextFourth, formFourth, formFifth);

  changePrev(prevFifth, formFifth, formFourth);

  function changePrev(prev, currentSlide, changeSlide) {
    for (let i = 0; i < prev.length; i++) {
      $(prev[i]).click(function () {
        $(currentSlide).animate({ opacity: 0 }, 400, function () {
          currentSlide.style.display = 'none';
          changeSlide.style.display = 'block';
        });
        $(changeSlide).animate({ opacity: 1 }, 400);
      })
    }
  }


  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  function changeNext(next, currentSlide, changeSlide) {
    for (let i = 0; i < next.length; i++) {
      $(next[i]).click(function () {
        if (next[i].classList.contains('next__form__fifth')) {
          if (validateEmail($("#inputEmail").val())) {
            $(currentSlide).animate({ opacity: 0 }, 400, function () {
              currentSlide.style.display = 'none';
              changeSlide.style.display = 'block';
            });
            $(changeSlide).animate({ opacity: 1 }, 400);
          }
        } else {
          $(currentSlide).animate({ opacity: 0 }, 400, function () {
            currentSlide.style.display = 'none';
            changeSlide.style.display = 'block';
          });
          $(changeSlide).animate({ opacity: 1 }, 400);
        }
      })
    }
  }


  let choiceSecond = document.getElementsByClassName("form__second__item");
  let choiceThird = document.getElementsByClassName("form__third__item");
  let choiceFourth = document.getElementsByClassName("form__fourth__item");

  let selectChoiseSecond = document.getElementById("form__second__select");
  let selectChoiseThird = document.getElementById("form__third__select");
  let selectChoiseFourth = document.getElementById("form__fourth__select");

  choice(choiceSecond, selectChoiseSecond);
  choice(choiceThird, selectChoiseThird);
  choice(choiceFourth, selectChoiseFourth);

  function choice(choiceItem, select) {
    let choiceOld = choiceItem[0];
    for (let i = 0; i < choiceItem.length; i++) {
      $(choiceItem[i]).click(function () {
        choiceOld.classList.remove("active");
        choiceItem[i].classList.add("active");
        choiceOld = choiceItem[i];
        select.options[i].selected = 'true';
      })
    }
  }

  $(nextFifth).click(function () {
    if (validateEmail($("#inputEmail").val())) {
      $(formFifth).animate({ opacity: 0 }, 400, function () {
        formFifth.style.display = 'none';
        formSixth.style.display = 'block';
      });
      $(formSixth).animate({ opacity: 1 }, 400);
    }
  })



  window.onload = function () {
    let blogItemTitle = document.getElementsByClassName("medium-widget-article__title");
    let blogItemDescript = document.getElementsByClassName("medium-widget-article__description");

    let blogTitleOne = document.getElementById("headingOneBlog");
    let blogTitleTwo = document.getElementById("headingTwoBlog");
    let blogTitleThree = document.getElementById("headingThreeBlog");
    let blogDescriptionOne = document.getElementById("collapseOneBlog");
    let blogDescriptionTwo = document.getElementById("collapseTwoBlog");
    let blogDescriptionThree = document.getElementById("collapseThreeBlog");


    blogTitleOne.innerHTML = blogItemTitle[0].innerHTML;
    blogTitleTwo.innerHTML = blogItemTitle[1].innerHTML;
    blogTitleThree.innerHTML = blogItemTitle[2].innerHTML;

    blogDescriptionOne.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[0].innerHTML + '</div> <a href="' + blogItemTitle[0].href + '" class="weCanHelp__container__item__button line">Read more</a>';
    blogDescriptionTwo.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[1].innerHTML + '</div> <a href="' + blogItemTitle[1].href + '" class="weCanHelp__container__item__button line">Read more</a>';
    blogDescriptionThree.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[2].innerHTML + '</div> <a href="' + blogItemTitle[2].href + '" class="weCanHelp__container__item__button line">Read more</a>';

    let desktopData = document.getElementsByClassName("medium-widget-article__content");
    for (let i = 0; i < desktopData.length; i++) {
      desktopData[i].innerHTML += '<a href="' + blogItemTitle[i].href + '" class="weCanHelp__container__item__button line">Read more</a>';
    }
  }

  //Слайд за допомогою drag

  // if (document.documentElement.clientWidth < 768) {


  //Слайд за допомогою drag
  /*let oldx = 0;

  const onMouseDown = (e) => {
     dragging = true;
     oldx = e.pageX;
  }
  const onMouseUp = (e) => {
     const difference = e.pageX - oldx;

     if (Math.abs(difference) > 50) {
       const left = difference < 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;
       slider.scrollBy({ left: left, behavior: 'smooth' });
     }
   }

   slider.addEventListener('mousedown', onMouseDown);
   slider.addEventListener('mouseup', onMouseUp);*/

  let lastX;
  slider.addEventListener('touchstart', (e) => {
    lastX = e.touches ? e.touches[0].pageX : e.pageX;
  });

  let currentX = null;
  slider.addEventListener('touchmove', (e) => {
    currentX = e.touches ? e.touches[0].pageX : e.pageX;
  });

  slider.addEventListener('touchend', (e) => {  
    if (Math.abs(currentX - lastX) > 80 && currentX !== null) {
      checkScrollAnimation = false;
      const percentage = $("#scrollbar").width() / $("#scrollbar").parent().width() * 100;
      
      if (currentX > lastX) {
        const left = -window.innerWidth * 0.8;
        slider.scrollBy({ left: left, behavior: 'smooth' });
        
        if (percentage > 20) {
          jOld = j;
          j--;
          $("#scrollbar").width((j + 1) * 16.666666 + '%');
          timer();
        }
        
      }
      else {
        const left = window.innerWidth * 0.8;
        slider.scrollBy({ left: left, behavior: 'smooth' });
        
        if (percentage < 96) {
          jOld = j;
          j++;
          $("#scrollbar").width((j + 1) * 16.666666 + '%');
          timer();
        }
      }
    }
    currentX = null;
    lastX = 0;
  });

  document.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
      left = $("#main").width();

      slider.scrollBy({ left: left, behavior: 'smooth' });
      setTimeout(() => {
        jOld = j;
        j = Math.round(slider.scrollLeft / $("#main").width());
        $("#scrollbar").width((j + 1) * 16.666666 + '%');

        timer();

        if (document.documentElement.clientWidth > 768) {
          opacityOn(j);
        }  
      }, 600);

    } else if (event.keyCode === 37) {
      left = -$("#main").width();

      slider.scrollBy({ left: left, behavior: 'smooth' });
      setTimeout(() => {
        jOld = j;
        j = Math.round(slider.scrollLeft / $("#main").width());
        $("#scrollbar").width((j + 1) * 16.666666 + '%');

        timer();

        if (document.documentElement.clientWidth > 768) {
          opacityOn(j);
        }  
      }, 600);
    }
  });
});