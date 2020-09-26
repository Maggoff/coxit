const slider = document.getElementById('slider');   


const onWheel = (e) => {
    slider.removeEventListener("wheel", onWheel);
    e = e || window.event;

    const delta = e.deltaY || e.detail || e.wheelDelta; 
    const left = delta > 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;

    slider.scrollBy({left: left, behavior: 'smooth'});
    setTimeout(() => { slider.addEventListener("wheel", onWheel); }, 600);
    
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
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
let oldx = 0;

const onMouseDown = (e) => { 
    dragging = true;
    oldx = e.pageX;
}
const onMouseUp = (e) => { 
    const difference = e.pageX - oldx;

    if (Math.abs(difference) > 50) {
        const left = difference < 0 ? window.innerWidth * 0.8 : -window.innerWidth * 0.8;
        slider.scrollBy({left: left, behavior: 'smooth'});
    }
}

slider.addEventListener('mousedown', onMouseDown);
slider.addEventListener('mouseup', onMouseUp);