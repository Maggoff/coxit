$(document).ready(function () {

  const slider = document.getElementById('slider');

  $("#header__logo, #menu__contacts, #menu__weCanHelp").click(function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().left;
    top = slider.scrollLeft + top;
    $(slider).animate({ scrollLeft: top }, 600);
  });


  let scrollbarLeft;

  let contentHide = document.getElementsByClassName("content__hide");

  let logo = document.getElementById("header__logo");
  let contacts = document.getElementById("menu__contacts");
  let weCanHelp = document.getElementById("menu__weCanHelp")

  let j = 0;
  let jOld;

  let thirdTitle = document.getElementById("form__third__title");
  thirdTitle.style.marginTop = (document.documentElement.clientHeight / (100 / 12)) - 57 + 'px';

  if (window.location.hash == '#contacts') {
    scrollbarLeft = (16.666666 * 5);
    jOld = j;
    j = 5;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
  } else if (window.location.hash == '#whoWe') {
    scrollbarLeft = (16.666666 * 2);
    jOld = j;
    j = 2;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
  } else {
    scrollbarLeft = 0;
    jOld = j;
    j = 0;
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
  }

  let scrollbar = document.getElementById('scrollbar');

  scrollbar.style.left = scrollbarLeft + '%';

  // let hashs = ['#main', '#weCanHelp', '#whoWe', '#howCanWeHelp', '#blog', '#contacts'];


  let weCanHelpCheck = document.getElementById("weCanHelp__check");

  timerCheck(weCanHelpCheck);

  function timerCheck(check) {
    idTimer = setTimeout(function tick() {
      $(check).animate({ height: '120px', width: '120px', left: '-2px', top: '86px' }, 400);
      $(check).animate({ height: '8px', width: '8px', left: '0px', top: '88px' }, 400);
      idTimer = setTimeout(tick, 2800);
    }, 2000);
  };

  let weCanHelpCheckMobile = document.getElementById("weCanHelp__check__mobile");
  let weCanHelpMobile = document.getElementsByClassName("mobile__card__head");

  for (let i = 0; i < weCanHelpMobile.length; i++) {
    $(weCanHelpMobile).click(function () {
      $(weCanHelpCheckMobile).animate({ opacity: 0 }, 400, function () {
        weCanHelpCheckMobile.style.display = 'none';
      })
    })
  }


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


  function timer() {
    clearTimeout(idTimer);
    idTimer = setTimeout(function tick() {
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
    }, 30000);
  };
  timer();

  let oldScroll = 0;
  let block = 'false';
  let blockOld = 100;

  let scrollToThis = 0;

  

  // const onScrollY = (e) => {
  //   slider.removeEventListener("scroll", onScrollY);
  //   e = e || window.event;

  //   let delta;

  //   if (slider.scrollLeft > oldScroll) {
  //     oldScroll = slider.scrollLeft;
  //     console.log('js');
  //     delta = 1;
  //   } else if (slider.scrollLeft < oldScroll){
  //     oldScroll = slider.scrollLeft;
  //     delta = -1;
  //   } else{
  //     delta = 0;
  //   }
    

  //   console.log(delta);

  //   const left = delta > 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;

  //   // slider.scrollBy({ left: left, behavior: 'smooth' });
  //   setTimeout(() => { slider.addEventListener("scroll", onScrollY); }, 600);
  //   e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  //   if (delta > 0) {
  //     if (scrollbarLeft < 83) {
  //       scrollbarLeft = scrollbarLeft + 16.666666;
  //       jOld = j;
  //       j++;
  //       timer();
  //     }
  //   } else {
  //     if (scrollbarLeft > 0) {
  //       scrollbarLeft = scrollbarLeft - 16.666666;
  //       jOld = j;
  //       j--;
  //       timer();
  //     }
  //   }

  //   if (scrollbarLeft > -1 && scrollbarLeft < 99) {
  //     $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  //   }

  // }

  // slider.addEventListener("scroll", onScrollY);

  // slider.addEventListener('scroll', function () {
  //   if (slider.scrollLeft > oldScroll) {
  //     oldScroll = slider.scrollLeft;
  //     // scrollToThis += (document.documentElement.clientWidth / (100 / 91));
  //     // $(slider).animate({ scrollLeft: scrollToThis }, 600, function () {
  //     //   block = 'false';
  //     // });
  //     scrollToThis++;
  //     $(scrollbar).animate({ left: scrollToThis + '%' }, 20);
  //     console.log("right");
  //   } else {
  //     oldScroll = slider.scrollLeft;
  //     scrollToThis--;
  //     $(scrollbar).animate({ left: scrollToThis + '%' }, 20);
  //   }
  //   // } else {
  //   //   block--;
  //   //   oldScroll = slider.scrollLeft;
  //   //   scrollToThis -= (document.documentElement.clientWidth / (100 / 91));
  //   //   $(slider).animate({ scrollLeft: scrollToThis }, 600);
  //   //   console.log("left");

  //   // }
  //   // }
  // });

  let delta;
  let marker = true;
  let counter1 = 0;
  let counter2;

  const wheelEnd = () => {
    counter1 = 0;
    counter2 = null;
    direction = null;
    marker = true;
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
    wheelAct();
  }

  const onWheel = (e) => {
    counter1 += 1;
    delta = e.deltaY;
    
    if (marker) { 
      wheelStart();
      let left;

      if (delta > 1)
        left = window.innerWidth * 0.8;
      if (delta < -1)
        left = -window.innerWidth * 0.8;

      slider.scrollBy({ left: left, behavior: 'smooth' });
      e.preventDefault ? e.preventDefault() : (e.returnValue = false);

      if (delta > 1) {
        if (scrollbarLeft < 83) {
          scrollbarLeft = scrollbarLeft + 16.666666;
          jOld = j;
          j++;
          timer();
        }
      } else if (delta < -1) {
        if (scrollbarLeft > 0) {
          scrollbarLeft = scrollbarLeft - 16.666666;
          jOld = j;
          j--;
          timer();
        }
      }

      if (scrollbarLeft > -1 && scrollbarLeft < 99) {
        $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
      }


      if (document.documentElement.clientWidth > 768) {
        opacityOn(j);
      }


      itemBlog = document.getElementsByClassName("medium-widget-article__item");

      if (z == 0) {
        zIndex(itemBlog, footer);
        z++;
      }
    }
    return false;
  }


  // Забезпечення підтримки старих браузерів
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


  $(logo).click(function () {
    scrollbarLeft = 0;
    jOld = j;
    j = 0;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  })

  $(weCanHelp).click(function () {
    scrollbarLeft = (16.666666 * 1);
    jOld = j;
    j = 1;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  })

  $(contacts).click(function () {
    scrollbarLeft = (16.666666 * 5);
    jOld = j;
    j = 5;
    timer();
    if (document.documentElement.clientWidth > 768) {
      opacityOn(j);
    }
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  })


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
  changeNext(nextFifth, formFifth, formSixth);

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

  function changeNext(next, currentSlide, changeSlide) {
    for (let i = 0; i < next.length; i++) {
      $(next[i]).click(function () {
        $(currentSlide).animate({ opacity: 0 }, 400, function () {
          currentSlide.style.display = 'none';
          changeSlide.style.display = 'block';
        });
        $(changeSlide).animate({ opacity: 1 }, 400);
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
        console.log(select.options);
      })
    }
  }


  let blogItemTitle = document.getElementsByClassName("medium-widget-article__title");
  let blogItemDescript = document.getElementsByClassName("medium-widget-article__description");

  let blogTitleOne = document.getElementById("headingOneBlog");
  let blogTitleTwo = document.getElementById("headingTwoBlog");
  let blogTitleThree = document.getElementById("headingThreeBlog");
  let blogDescriptionOne = document.getElementById("collapseOneBlog");
  let blogDescriptionTwo = document.getElementById("collapseTwoBlog");
  let blogDescriptionThree = document.getElementById("collapseThreeBlog");

  window.onload = function () {
    blogTitleOne.innerHTML = blogItemTitle[0].innerHTML;
    blogTitleTwo.innerHTML = blogItemTitle[1].innerHTML;
    blogTitleThree.innerHTML = blogItemTitle[2].innerHTML;

    blogDescriptionOne.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[0].innerHTML + '</div> <a href="' + blogItemTitle[0].href + '" class="weCanHelp__container__item__button line">Read more</a>';
    blogDescriptionTwo.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[1].innerHTML + '</div> <a href="' + blogItemTitle[1].href + '" class="weCanHelp__container__item__button line">Read more</a>';
    blogDescriptionThree.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[2].innerHTML + '</div> <a href="' + blogItemTitle[2].href + '" class="weCanHelp__container__item__button line">Read more</a>';
  }

  // blogTitleOne.innerHTML = blogItemTitle[0].innerHTML;
  // blogTitleTwo.innerHTML = blogItemTitle[1].innerHTML;
  // blogTitleThree.innerHTML = blogItemTitle[2].innerHTML;

  // blogDescriptionOne.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[0].innerHTML + '</div> <a href="' + blogItemTitle[0].href + '" class="weCanHelp__container__item__button line">Read more</a>';
  // blogDescriptionTwo.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[1].innerHTML + '</div> <a href="' + blogItemTitle[1].href + '" class="weCanHelp__container__item__button line">Read more</a>';
  // blogDescriptionThree.innerHTML = '<div class="weCanHelp__container__item__text">' + blogItemDescript[2].innerHTML + '</div> <a href="' + blogItemTitle[2].href + '" class="weCanHelp__container__item__button line">Read more</a>';


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

  let currentX;
  slider.addEventListener('touchmove', (e) => {
    currentX = e.touches ? e.touches[0].pageX : e.pageX;
  });

  slider.addEventListener('touchend', (e) => {
    if (Math.abs(currentX - lastX) > 80) {
      if (currentX > lastX) {
        const left = -window.innerWidth * 0.8;
        slider.scrollBy({ left: left, behavior: 'smooth' });
        

        if (scrollbarLeft > 0) {
          scrollbarLeft = scrollbarLeft - 16.666666;
          jOld = j;
          j--;
          timer();
        }
      }
      else {
        const left = window.innerWidth * 0.8;
        slider.scrollBy({ left: left, behavior: 'smooth' });
        

        if (scrollbarLeft < 83) {
          scrollbarLeft = scrollbarLeft + 16.666666;
          jOld = j;
          j++;
          timer();
        }
      }

      if (scrollbarLeft > -1 && scrollbarLeft < 99) {
        $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
      }
    }
  });

});