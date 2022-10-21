import renderCollection from './pages/storePage.js'

import renderHome from './pages/homePage.js'

const spa = document.getElementById('spa')

// renderizar las paginas home y collection

const renderHomePage = () => {
  while (spa.firstChild) spa.removeChild(spa.firstChild)
  renderHome()
}

const renderCollectionPage = () => {
  while (spa.firstChild) spa.removeChild(spa.firstChild)
  renderCollection()
}
// rutas

const routes = [
  { path: '/', action: 'showHomePage' },
  { path: '/tienda', action: 'showCollectionPage' }
]

// eslint-disable-next-line no-undef
const findPath = () => location.hash.slice(1).toLowerCase() || '/'
const findActionByPath = (path) => routes.find((route) => route.path === path || undefined)

const router = () => {
  const path = findPath()
  const route = findActionByPath(path, routes)
  switch (route.action) {
    case 'showHomePage':
      renderHomePage()
      break
    case 'showCollectionPage':
      renderCollectionPage()
      break
    default:
      console.error('Ruta inexistente.')
      break
  }
}

// ejecutar funcion cuando la ventana se haya cargado

window.onload = function onload () {
  router()
}

// ejecutar funcion cuando cambie la almohadilla de la url

window.onhashchange = function onhashchange () {
  router()
}
