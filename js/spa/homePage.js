/* DOM HERO */

const homePage = () => {
	const spa = document.getElementById('spa');

	const heroSection = document.createElement('section');
	heroSection.classList.add('hero');
	heroSection.innerHTML = `
     <h1>BATUK ORIGINS</h1>
     <video class="hero__video" autoplay muted loop>
          <source src="../../assets/video/batuk.mp4" type="video/mp4">
 </video>
     `;
	spa.appendChild(heroSection);
};

homePage();
