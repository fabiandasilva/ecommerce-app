import renderCollection from './spa/storePage.js';
import renderHome from './spa/homePage.js';

// renderizar las paginas home y collection

const renderHomePage = () => {
	while (spa.firstChild) spa.removeChild(spa.firstChild);
	renderHome();
};

const renderCollectionPage = () => {
	while (spa.firstChild) spa.removeChild(spa.firstChild);
	renderCollection();
};
// rutas

const routes = [
	{path: '/', action: 'showHomePage'},
	{path: '/tienda', action: 'showCollectionPage'},
];

// path, action

const findPath = () => location.hash.slice(1).toLowerCase() || '/';
const findActionByPath = (path, routes) =>
	routes.find((route) => route.path === path || undefined);

const router = () => {
	const path = findPath();
	const route = findActionByPath(path, routes);
	switch (route.action) {
		case 'showHomePage':
			renderHomePage();
			break;
		case 'showCollectionPage':
			renderCollectionPage();
			break;
		default:
			console.error('Ruta inexistente.');
			break;
	}
};

// ejecutar funcion cuando la ventana se haya cargado

window.onload = function () {
	router();
};

// ejecutar funcion cuando cambie la almohadilla de la url

window.onhashchange = function () {
	router();
};
