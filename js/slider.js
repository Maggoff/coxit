let scrollbarLeft;

let contentHide = document.getElementsByClassName("content__hide");

let j = 0;

let jOld;

if (window.location.hash == '#contacts') {
  scrollbarLeft = (16.666666 * 5);
  contentHide[9].style.opacity = 1;
  jOld = j;
  j = 5;
} else {
  scrollbarLeft = 0;
  contentHide[0].style.opacity = 1;
  jOld = j;
  j = 0;
}

let scrollbar = document.getElementById('scrollbar');

scrollbar.style.left = scrollbarLeft + '%';

let hashs = ['#main', '#weCanHelp', '#whoWe', '#howCanWeHelp', '#blog', '#contacts'];


const slider = document.getElementById('slider');

const onWheel = (e) => {
  slider.removeEventListener("wheel", onWheel);
  e = e || window.event;

  const delta = e.deltaY || e.detail || e.wheelDelta;
  const left = delta > 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;

  slider.scrollBy({ left: left, behavior: 'smooth' });
  setTimeout(() => { slider.addEventListener("wheel", onWheel); }, 600);
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  if (delta > 0) {
    if (scrollbarLeft < 83) {
      scrollbarLeft = scrollbarLeft + 16.666666;
      jOld = j;
      j++;
    }
  } else {
    if (scrollbarLeft > 0) {
      scrollbarLeft = scrollbarLeft - 16.666666;
      jOld = j;
      j--;
    }
  }

  if (scrollbarLeft > -1 && scrollbarLeft < 99) {
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  }


  switch (j) {
    case 0:
      contentHide[0].style.opacity = 1;
      break;
    case 1:
      contentHide[1].style.opacity = 1;
      break;
    case 2:
      contentHide[2].style.opacity = 1;
      break;
    case 3:
      contentHide[3].style.opacity = 1;
      contentHide[4].style.opacity = 1;
      contentHide[5].style.opacity = 1;
      contentHide[6].style.opacity = 1;
      contentHide[7].style.opacity = 1;
      break;
    case 4:
      contentHide[8].style.opacity = 1;
      break;
    case 5:
      contentHide[9].style.opacity = 1;
      break;
  }

  switch (jOld) {
    case 0:
      contentHide[0].style.opacity = 0;
      break;
    case 1:
      contentHide[1].style.opacity = 0;
      break;
    case 2:
      contentHide[2].style.opacity = 0;
      break;
    case 3:
      contentHide[3].style.opacity = 0;
      contentHide[4].style.opacity = 0;
      contentHide[5].style.opacity = 0;
      contentHide[6].style.opacity = 0;
      contentHide[7].style.opacity = 0;
      break;
    case 4:
      contentHide[8].style.opacity = 0;
      break;
    case 5:
      contentHide[9].style.opacity = 0;
      break;
  }

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


let logo = document.getElementById("header__logo");
let contacts = document.getElementById("menu__contacts");

$(logo).click(function () {
  scrollbarLeft = 0;
  contentHide[0].style.opacity = 1;
  jOld = j;
  j = 0;
  switch (jOld) {
    case 0:
      contentHide[0].style.opacity = 0;
      break;
    case 1:
      contentHide[1].style.opacity = 0;
      break;
    case 2:
      contentHide[2].style.opacity = 0;
      break;
    case 3:
      contentHide[3].style.opacity = 0;
      contentHide[4].style.opacity = 0;
      contentHide[5].style.opacity = 0;
      contentHide[6].style.opacity = 0;
      contentHide[7].style.opacity = 0;
      break;
    case 4:
      contentHide[8].style.opacity = 0;
      break;
    case 5:
      contentHide[9].style.opacity = 0;
      break;
  }
  $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
})

$(contacts).click(function () {
  scrollbarLeft = (16.666666 * 5);
  contentHide[9].style.opacity = 1;
  jOld = j;
  j = 5;
  switch (jOld) {
    case 0:
      contentHide[0].style.opacity = 0;
      break;
    case 1:
      contentHide[1].style.opacity = 0;
      break;
    case 2:
      contentHide[2].style.opacity = 0;
      break;
    case 3:
      contentHide[3].style.opacity = 0;
      contentHide[4].style.opacity = 0;
      contentHide[5].style.opacity = 0;
      contentHide[6].style.opacity = 0;
      contentHide[7].style.opacity = 0;
      break;
    case 4:
      contentHide[8].style.opacity = 0;
      break;
    case 5:
      contentHide[9].style.opacity = 0;
      break;
  }
  $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
})


let cookie = document.getElementById("cookie");
let cookieClose = document.getElementById("cookie__close");
$(cookieClose).click(function () {
  $(cookie).animate({ opacity: 0 }, 400, function () {
    cookie.style.display = 'none';
  })
})


let itemServices = document.getElementsByClassName("weCanHelp__container__item");
let itemBlog = document.getElementsByClassName("blog__item");
let footer = document.getElementById("footer");

zIndex(itemServices, footer);
zIndex(itemBlog, footer);

function zIndex(itemHover, footerZ) {
  for (let i = 0; i < itemHover.length; i++) {
    $(itemHover[i]).hover(function () {
      footerZ.style.zIndex = -2;
    }, function () {
      footerZ.style.zIndex = 2;
    })
  }
}


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

choice(choiceSecond);
choice(choiceThird);
choice(choiceFourth);

function choice(choiceItem) {
  let choiceOld = choiceItem[0];
  for (let i = 0; i < choiceItem.length; i++) {
    $(choiceItem[i]).click(function () {
      choiceOld.classList.remove("active");
      choiceItem[i].classList.add("active");
      choiceOld = choiceItem[i];
    })
  }
}


//Слайд за допомогою drag
let oldx = 0;

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

  if (difference < 0) {
    if (scrollbarLeft < 83) {
      scrollbarLeft = scrollbarLeft + 16.666666;
      jOld = j;
      j++;
    }
  } else {
    if (scrollbarLeft > 0) {
      scrollbarLeft = scrollbarLeft - 16.666666;
      jOld = j;
      j--;
    }
  }

  if (scrollbarLeft > -1 && scrollbarLeft < 99) {
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
  }
}

slider.addEventListener('mousedown', onMouseDown);
slider.addEventListener('mouseup', onMouseUp);