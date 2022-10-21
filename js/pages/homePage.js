/* DOM HERO */

const renderHome = () => {
  /* DOM VISTA HERO */
  const spa = document.getElementById('spa')
  const heroSection = document.createElement('section')
  heroSection.classList.add('hero')
  heroSection.innerHTML = `
    <h1>BATUK ORIGINS</h1>
      <video class="hero__video" autoplay muted loop>
           <source src="../../assets/video/batuk.mp4" type="video/mp4">
  </video>
      `
  spa.appendChild(heroSection)
  /* DOM VISTA NOVEDADES */
  const newInSection = document.createElement('section')
  newInSection.classList.add('store')
  newInSection.innerHTML = `
      <h2>Novedades</h2>
      <div id="newIn">
     <!-- productos renderizados -->
      </div>
  `

  spa.appendChild(newInSection)

  // DOM SLIDER

  const sliderSection = document.createElement('section')
  sliderSection.classList.add('slider')
  sliderSection.innerHTML = `
    <h2>Descubrí la colección</h2>
    <div class="slider__slide">
   <img src="../../assets/img/index/slide.png" alt="Nueva temporada">
   <div class="overlay__content">
  <div class="overlay__buttons">
 <a href="#/tienda" >Ver nuestra tienda</a>
  </div>
   </div>
    </div>
`
  spa.appendChild(sliderSection)
}

export default renderHome
