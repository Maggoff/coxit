const slider = document.getElementById('slider');

let scrollbarLeft = 9;

const onWheel = (e) => {
  slider.removeEventListener("wheel", onWheel);
  e = e || window.event;

  const delta = e.deltaY || e.detail || e.wheelDelta;
  const left = delta > 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;

  slider.scrollBy({ left: left, behavior: 'smooth' });
  setTimeout(() => { slider.addEventListener("wheel", onWheel); }, 600);
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

  let scrollbar = document.getElementById('scrollbar');

  if (delta > 0) {
    if (scrollbarLeft < 77) {
      scrollbarLeft = scrollbarLeft + 13.666666;
    }
  } else {
    if (scrollbarLeft > 10) {
      scrollbarLeft = scrollbarLeft - 13.666666;
    }
  }

  if (scrollbarLeft > 8 && scrollbarLeft < 78) {
    $(scrollbar).finish().animate({ left: scrollbarLeft + '%' }, 600);
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

let item = document.getElementsByClassName("weCanHelp__container__item");
let footer = document.getElementById("footer");

for (let i = 0; i < item.length; i++) {
  $(item[i]).hover(function(){
    footer.style.zIndex = -2;
  }, function(){
    footer.style.zIndex = 2;
  })
}

let nextFirst = document.getElementsByClassName("next__form__first");
let prevSecond = document.getElementsByClassName("prev__form__second");
let nextSecond = document.getElementsByClassName("next__form__second");
let prevThird = document.getElementsByClassName("prev__form__third");
let nextThird = document.getElementsByClassName("next__form__third");
let prevFourth = document.getElementsByClassName("prev__form__fourth");
let nextFourth = document.getElementsByClassName("next__form__fourth");
let prevFifth = document.getElementsByClassName("prev__form__fifth");

let formFirst = document.getElementById("form__first");
let formSecond = document.getElementById("form__second");
let formThird = document.getElementById("form__third");
let formFourth = document.getElementById("form__fourth");
let formFifth = document.getElementById("form__fifth");

for(let i = 0; i < nextFirst.length; i++){
  $(nextFirst[i]).click(function(){
    $(formFirst).animate({opacity: 0}, 400, function(){
      formFirst.style.display = 'none';
      formSecond.style.display = 'block';
    });
    $(formSecond).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < prevSecond.length; i++){
  $(prevSecond[i]).click(function(){
    $(formSecond).animate({opacity: 0}, 400, function(){
      formSecond.style.display = 'none';
      formFirst.style.display = 'block';
    });
    $(formFirst).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < nextSecond.length; i++){
  $(nextSecond[i]).click(function(){
    $(formSecond).animate({opacity: 0}, 400, function(){
      formSecond.style.display = 'none';
      formThird.style.display = 'block';
    });
    $(formThird).animate({opacity: 1}, 400);
  })
}


for(let i = 0; i < prevThird.length; i++){
  $(prevThird[i]).click(function(){
    $(formThird).animate({opacity: 0}, 400, function(){
      formThird.style.display = 'none';
      formSecond.style.display = 'block';
    });
    $(formSecond).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < nextThird.length; i++){
  $(nextThird[i]).click(function(){
    $(formThird).animate({opacity: 0}, 400, function(){
      formThird.style.display = 'none';
      formFourth.style.display = 'block';
    });
    $(formFourth).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < prevFourth.length; i++){
  $(prevFourth[i]).click(function(){
    $(formFourth).animate({opacity: 0}, 400, function(){
      formFourth.style.display = 'none';
      formThird.style.display = 'block';
    });
    $(formThird).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < nextFourth.length; i++){
  $(nextFourth[i]).click(function(){
    $(formFourth).animate({opacity: 0}, 400, function(){
      formFourth.style.display = 'none';
      formFifth.style.display = 'block';
    });
    $(formFifth).animate({opacity: 1}, 400);
  })
}

for(let i = 0; i < prevFifth.length; i++){
  $(prevFifth[i]).click(function(){
    $(formFifth).animate({opacity: 0}, 400, function(){
      formFifth.style.display = 'none';
      formFourth.style.display = 'block';
    });
    $(formFourth).animate({opacity: 1}, 400);
  })
}



let choiceSecond = document.getElementsByClassName("form__second__item");
let choiceSecondOld = choiceSecond[0];
for(let i = 0; i < choiceSecond.length; i++){
  $(choiceSecond[i]).click(function(){
    choiceSecondOld.classList.remove("active");
    choiceSecond[i].classList.add("active");
    choiceSecondOld = choiceSecond[i];
  })
}

let choiceThird = document.getElementsByClassName("form__third__item");
let choiceThirdOld = choiceThird[0];
for(let i = 0; i < choiceThird.length; i++){
  $(choiceThird[i]).click(function(){
    choiceThirdOld.classList.remove("active");
    choiceThird[i].classList.add("active");
    choiceThirdOld = choiceThird[i];
  })
}

let choiceFourth = document.getElementsByClassName("form__fourth__item");
let choiceFourthOld = choiceFourth[0];
for(let i = 0; i < choiceFourth.length; i++){
  $(choiceFourth[i]).click(function(){
    choiceFourthOld.classList.remove("active");
    choiceFourth[i].classList.add("active");
    choiceFourthOld = choiceFourth[i];
  })
}

// Слайд за допомогою drag
// let oldx = 0;

// const onMouseDown = (e) => {
// 	dragging = true;
// 	oldx = e.pageX;
// }
// const onMouseUp = (e) => {
// 	const difference = e.pageX - oldx;

// 	if (Math.abs(difference) > 50) {
// 		const left = difference < 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;
// 		slider.scrollBy({ left: left, behavior: 'smooth' });
// 	}
// }

// slider.addEventListener('mousedown', onMouseDown);
// slider.addEventListener('mouseup', onMouseUp);