import data from '../../db/products.js';

const renderCollection = () => {
	//DOM VISTA STORE
	const spa = document.getElementById('spa');

	/* DOM FILTRO ORDEN */
	const storeSection = document.createElement('section');
	storeSection.classList.add('store');

	const sortSection = document.createElement('section');
	sortSection.classList.add('classification');
	sortSection.innerHTML = `
    <h1>Productos</h1>
    <div class="classification__elements">
        <div id="products-quantity" class="quantity">
            <!-- cantidad renderizada -->
        </div>
        <div>
            <label>Ordenar por</label>
            <select id="sort">
                <option value="Más relevantes">Más relevantes</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
                <option value="Menor precio">Menor precio</option>
                <option value="Mayor precio">Mayor precio</option>
            </select>
        </div>
    </div>
`;
	storeSection.appendChild(sortSection);

	/* DOM FILTROS "CATEGORIA, COLOR, PRECIO" */

	const containerSection = document.createElement('section');
	containerSection.classList.add('store__content');

	const filterSection = document.createElement('aside');
	filterSection.classList.add('filter');
	filterSection.innerHTML = ` 
    <form id="search-form">
        <input id="search-input" type="text" placeholder="Buscar..."/>
    </form>
    <div class="filter__type">
        <span>Categoría</span>
        <div id="categories" class="filter__category">
            <!-- categorias renderizadas -->
        </div>
    </div>
    <div class="filter__type">
        <span>Color</span>
        <div id="colors" class="filter__color">
            <!-- colores renderizadas -->
        </div>
    </div>
    <div class="filter__type">
        <span>Precio</span>
        <form class="filter__price">
            <input id="price-input" type="range" min="0" value="500" max="2000"/>
            <p id="price-value">
                <!-- valor renderizado -->
            </p>
        </form>
    </div>
    <div id="new" class="filter__type">
            <!-- filtro renderizados -->
        </div>
    </div>
`;
	containerSection.appendChild(filterSection);

	const collectionSection = document.createElement('section');

	collectionSection.classList.add('collection');
	containerSection.append(collectionSection);

	storeSection.appendChild(containerSection);
	spa.appendChild(storeSection);

	const renderContainer = document.getElementsByClassName('collection')[0];

	data.forEach((producto) => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.innerHTML = `
     <img src=${producto.img} alt="" class="overlay__item">
     <h3>${producto.name}</h3>
     <p>${producto.price}</p>
     <p>${producto.color}</p>
     `;
		renderContainer.appendChild(card);
	});
};

export default renderCollection;
