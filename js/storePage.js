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
	/* dentro de esta etiqueta te digo que quiero que se haga el render ya que hice el grid para las cards */
	collectionSection.classList.add('collection');
	containerSection.appendChild(collectionSection);

	storeSection.appendChild(containerSection);
	spa.appendChild(storeSection);
	/* Declaro la data que voy a usar para el render */
	let data = [
		{
			id: 1,
			name: 'COTE',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875764/plants/batuk/remeras-chombas/COTEENT_yyckaw.jpg',
			category: 'Remera',
			color: 'Blanco',
			size: 'S al XXL',
			newIn: false,
		},
		{
			id: 2,
			name: 'RIDE',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875766/plants/batuk/remeras-chombas/FVMED_nqeqqz.jpg',
			category: 'Remera',
			color: 'Blanco',
			size: 'S al XXL',
			newIn: true,
		},
		{
			id: 2,
			name: 'ASTRO',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875775/plants/batuk/remeras-chombas/ASTROMED_l9qzz7.jpg',
			category: 'Remera',
			color: 'Azul, Negro',
			size: 'S al XXL',
			newIn: true,
		},
		{
			id: 3,
			name: 'EVEN',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875764/plants/batuk/remeras-chombas/LILAMED_ofiujf.jpg',
			category: 'Remera',
			color: 'Violeta, Negro, Militar, Petroleo, Azul',
			size: 'S al XXL',
			newIn: false,
		},
		{
			id: 4,
			name: 'FOOD',
			price: 4380,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875764/plants/batuk/remeras-chombas/LILAMED_ofiujf.jpg',
			category: 'Remera',
			color: 'Negro',
			size: 'S al XXL',
			newIn: false,
		},
		{
			id: 4,
			name: 'FRUIT',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875764/plants/batuk/remeras-chombas/FRESHMED-1_vanwru.jpg',
			category: 'Remera',
			color: 'Blanco',
			size: 'S al XXL',
			newIn: true,
		},
		{
			id: 5,
			name: 'CERAMICS',
			price: 4580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875763/plants/batuk/remeras-chombas/CERAENT_ungqkb.jpg',
			category: 'Remera',
			color: 'Blanco',
			size: 'S al XXL',
			newIn: true,
		},
		{
			id: 6,
			name: 'POLI',
			price: 3780,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875540/plants/batuk/accesorios%20/funnypakk-a_nlgq1k.jpg',
			category: 'Accesorios',
			color: 'Rojo, Negro, Verde, Azul',
			size: false,
			newIn: false,
		},
		{
			id: 7,
			name: 'MOCHILA ORIGINALS',
			price: 7180,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875540/plants/batuk/accesorios%20/mochi-bksc-a_g0mjji.jpg',
			category: 'Accesorios',
			color: 'Verde, Negro, Azul',
			description: 'Poliester, Correas ajustables',
			size: false,
			composition: 'Compartimiento para Notebook',
			newIn: false,
		},
		{
			id: 8,
			name: 'COWBOY',
			price: 3580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875540/plants/batuk/accesorios%20/rinora-b_fudbjm.jpg',
			category: 'Accesorios',
			color: 'Marron, Negro',
			size: false,
			newIn: false,
		},
		{
			id: 9,
			name: 'MEDIAS B1',
			price: 3900,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875547/plants/batuk/accesorios%20/medias-batuk-007-2-a_rg9axi.jpg',
			category: 'Accesorios',
			color: 'Verde, Negro',
			size: false,
			newIn: false,
		},
		{
			id: 10,
			name: 'NECESER CHAIN',
			price: 3980,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875547/plants/batuk/accesorios%20/medias-batuk-007-2-a_rg9axi.jpg',
			category: 'Accesorios',
			color: 'Verde, Negro, Marron',
			size: false,
			newIn: false,
		},
		{
			id: 10,
			name: 'BOLSO CANVAS',
			price: 8700,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875540/plants/batuk/accesorios%20/bag-bolso-batuk-a_caxivb.jpg',
			category: 'Accesorios',
			color: 'Verde, Negro, Marron',
			size: false,
			newIn: false,
		},
		{
			id: 11,
			name: 'ANORAK SAINT',
			price: 8300,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875613/plants/batuk/buzos/B-5097-b_tmmoo1.jpg',
			category: 'Buzos',
			color: 'Amarillo, Beige, Celeste',
			size: false,
			newIn: false,
		},
		{
			id: 12,
			name: 'WEST',
			price: 8980,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875614/plants/batuk/buzos/WVENTD_bekhj5.jpg',
			category: 'Buzos',
			color: 'Amarillo, Bordo, Rosa, Marrón, Verde',
			size: false,
			newIn: false,
		},
		{
			id: 13,
			name: 'ANORAK MINT',
			price: 8300,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875621/plants/batuk/buzos/anomed-1_xgmptu.jpg',
			category: 'Buzos',
			color: 'Aqua, Amarillo, Beige, Crema, Celeste',
			size: false,
			newIn: false,
		},
		{
			id: 14,
			name: 'SUN LIGHT',
			price: 8300,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875614/plants/batuk/buzos/LIENT_zh3ekq.jpg',
			category: 'Buzos',
			color: 'Azul, Amarillo, Negro, Verde, Bordo',
			size: false,
			newIn: false,
		},
		{
			id: 15,
			name: 'WINDOW',
			price: 8300,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875616/plants/batuk/buzos/LILAENTT_xlevjs.jpg',
			category: 'Buzos',
			color: 'Salmón, Amarillo, Beige, Naranja, Lila, Celeste',
			size: false,
			newIn: false,
		},
		{
			id: 16,
			name: 'HILAUROUS',
			price: 8300,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875614/plants/batuk/buzos/CREMMED_pidgcn.jpg',
			category: 'Buzos',
			color: 'Crema, Verde, Beige, Negro',
			size: false,
			newIn: false,
		},
		{
			id: 17,
			name: 'CAMISACO SASHA',
			price: 12580,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663955221/plants/batuk/campera/CAMENT_zofcmx.jpg',
			category: 'Camperas',
			color: 'Beige, Azul',
			size: false,
			newIn: false,
		},
		{
			id: 18,
			name: 'YELLOW',
			price: 7960,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875691/plants/batuk/campera/AGUAAAENT_smzgpz.jpg',
			category: 'Camperas',
			color: 'Amarillo, Aqua, Celeste, Beige',
			size: false,
			newIn: false,
		},
		{
			id: 19,
			name: 'CALIFORNIA',
			price: 7960,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875684/plants/batuk/campera/BORENT_qpz88g.jpg',
			category: 'Camperas',
			color: 'Bordo, Amarillo, Verde, Lila',
			size: false,
			newIn: false,
		},
		{
			id: 20,
			name: 'MAEL',
			price: 7960,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875650/plants/batuk/camisas/BLUMED_rchjwu.jpg',
			category: 'Camisas',
			color: 'Verde, blanco, celeste, rosa, azul, azul marino',
			size: false,
			newIn: false,
		},
		{
			id: 21,
			name: 'HANSKY',
			price: 6780,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875642/plants/batuk/camisas/CUDRIENT_c4b9bh.jpg',
			category: 'Camisas',
			color: 'Verde, blanco, celeste, rosa, azul, azul marino',
			size: false,
			newIn: false,
		},
		{
			id: 22,
			name: 'KAMAT',
			price: 6780,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875642/plants/batuk/camisas/CELEMED_lmtm4e.jpg',
			category: 'Camisas',
			color: 'Celeste, Azul, Rosa',
			size: false,
			newIn: false,
		},
		{
			id: 23,
			name: 'TABATHA',
			price: 6780,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875642/plants/batuk/camisas/ROSAENT_ai2beh.jpg',
			category: 'Camisas',
			color: 'Blanco, Negro, Celeste',
			size: false,
			newIn: false,
		},
		{
			id: 24,
			name: 'MINT',
			price: 6780,
			img: 'https://res.cloudinary.com/dew1za4wz/image/upload/v1663875735/plants/batuk/pantalones/campeenttmint_e8usrf.jpg',
			category: 'Pantalon',
			color: 'Celeste, Beige, Crema, Amarillo',
			size: false,
			newIn: false,
		},
	];

	const contenedorProductos = document.getElementById('spa');
	/! Aca tengo problema, queria que todo esto las cards se me renderice en la etiqueta que cree en la linea 71 que esta mas arriba /
	data.forEach((producto) => {
		const collectionSection = document.createElement('div');
		collectionSection.classList.add('collection');
		collectionSection.innerHTML = `
     <img src=${producto.img} alt="">
     <h3>${producto.name}</h3>
     <p>${producto.price}</p>
     <p>${producto.color}</p>
     `;
		contenedorProductos.appendChild(collectionSection);
		storeSection.appendChild(containerSection);
	});
};

export default renderCollection;
