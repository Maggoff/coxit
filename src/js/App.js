import WebGLView from './webgl/WebGLView';

export default class App {

	constructor() {

	}

	init() {
		this.initWebGL();
		this.addListeners();
		this.animate();
		this.resize();
	}

	initWebGL() {
		this.webgl = [];

		let containers = document.getElementsByClassName('imageanimation');

		for (let i = 0; i < containers.length; i++) {
			this.webgl.push(new WebGLView(this, containers[i].getAttribute('imgsrc'), containers[i].offsetWidth, containers[i].offsetHeight));
			containers[i].appendChild(this.webgl[i].renderer.domElement);
		}
	}


	addListeners() {
		this.handlerAnimate = this.animate.bind(this);

		window.addEventListener('resize', this.resize.bind(this));
	}

	animate() {
		this.update();
		this.draw();

		this.raf = requestAnimationFrame(this.handlerAnimate);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		if (this.webgl) {
			let containers = document.getElementsByClassName('imageanimation');

			for (let i = 0; i < containers.length; i++) {
				this.webgl[i].update();
			}
		}
	}

	draw() {
		if (this.webgl) {
			let containers = document.getElementsByClassName('imageanimation');

			for (let i = 0; i < containers.length; i++) {
				this.webgl[i].draw();
			}	
		}
	}

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (this.webgl) { 
			let containers = document.getElementsByClassName('imageanimation');

			for (let i = 0; i < containers.length; i++) {
				this.webgl[i].resize();
			}
		}
	}
}
