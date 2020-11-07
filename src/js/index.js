import ready from 'domready';

import App from './App';

ready(() => {
	if (window.innerWidth > 768) {
		window.app = new App();
		window.app.init();
	}
});
