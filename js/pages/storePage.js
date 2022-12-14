import API from '../service/api.js'
import { filterCategory, filterColors, filterPrice } from '../utilities/filters.js'
const renderCollection = () => {
  // DOM VISTA STORE
  const spa = document.getElementById('spa')

  /* DOM FILTRO ORDEN */
  const storeSection = document.createElement('section')
  storeSection.classList.add('store')

  const sortSection = document.createElement('section')
  sortSection.classList.add('classification')
  sortSection.innerHTML = `
    <div class="classification__elements">
        <div id="products-quantity" class="quantity">
            <!-- cantidad renderizada -->
        </div>        
    </div>
`
  storeSection.appendChild(sortSection)

  /* DOM FILTROS "CATEGORIA, COLOR, PRECIO" */

  const containerSection = document.createElement('section')
  containerSection.classList.add('store__content')

  const filterSection = document.createElement('aside')
  filterSection.classList.add('filter')
  filterSection.innerHTML = `      
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
`
  containerSection.appendChild(filterSection)

  const collectionSection = document.createElement('section')

  collectionSection.setAttribute('id', 'collection')
  containerSection.append(collectionSection)

  storeSection.appendChild(containerSection)
  spa.appendChild(storeSection)
  const renderContainer = document.getElementById('collection')
  fetch(API)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      data.forEach((producto) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
     <div class="overlay__item">
     <img src=${producto.img} alt="" class="overlay__item">
         <div class="overlay__content">
             <div class="overlay__buttons">
                 <a href="product.html?id=${producto.id}">
                     <i class="fas fa-eye"></i>
                 </a>               
             </div>
             </div>
     </div>
     <div class="card__detail">
         <h3><a href="product.html?id=${producto.id}">${producto.category} ${producto.name}</a></h3>
         <p>$${producto.price}</p>
     </div>
 </div>
     
     `
        filterCategory(data)
        filterColors(data)
        filterPrice(data)

        renderContainer.appendChild(card)
      })
    })

    .catch((error) => console.log(error))
}

export default renderCollection
