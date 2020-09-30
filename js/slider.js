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
		if(scrollbarLeft < 77){
			scrollbarLeft = scrollbarLeft + 13.666666;
		}
	} else {
		if(scrollbarLeft > 10){
			scrollbarLeft = scrollbarLeft - 13.666666;
		}
	}

	if (scrollbarLeft > 8 && scrollbarLeft < 78) {
		$(scrollbar).finish().animate({ left: scrollbarLeft + '%'}, 600);
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