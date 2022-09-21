 
function escribirListaDeProductos(productos) {
	const listaDeProductos = document.getElementById('ListaDeProductos');

	if (productos.length) {
		listaDeProductos.innerHTML = '';

		for (const producto of productos) {
			const contenedorProducto = document.createElement('li');

			contenedorProducto.innerHTML = `		  
		   <p>Producto: ${producto.nombre}</p>
		   <p>Precio: $${producto.precio}</p>
		   <br/>
		   <br/>
		   <br/>
		   <br/>
	    `;

			listaDeProductos.append(contenedorProducto);
		}
	} else {
		listaDeProductos.innerHTML = 'No se encontró ningún producto';
	}
}

const productos = [
	{id: 1, nombre: 'Remera', precio: 20000},
	{id: 2, nombre: 'Pantalon', precio: 23000},
	{id: 3, nombre: 'Hoddie', precio: 45000},
];

escribirListaDeProductos(productos);

let enviar = document.getElementById('enviar');

enviar.addEventListener('click', (event) => {
	event.preventDefault();

	const buscarTexto = event.target.parentElement.texto.value.toLowerCase();

	escribirListaDeProductos(
		productos.filter((producto) =>
			producto.nombre.toLowerCase().includes(buscarTexto)
		)
	);
});
