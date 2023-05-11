<template>
<div class = " wrapper">
        <div class="carteStatique" >
          <a new href="https://goo.gl/maps/WDKBzWwnjG49jgSr5" target="_blank">
      <!--<img  :src="imageUrl" alt="Mapbox Static Image">-->
      <img src="@/assets/MapBoxGrace.jfif">
    </a>

    <p class="pStyle">
      06 81 23 36 30 <br>
      adrien@gmail <br>
      10 rue Parc Gourin <br>
      22200 Gr&acirc;ces

    </p>
  </div>

  <div class="carouselStyle">
    <Carousel :autoplay="4000" :pauseAutoplayOnHover="true" :wrap-around="true">
      <Slide v-for="slide in 1" :key="slide">
        <img src="../assets/patronOkhand.jpg" class="slide-image" title="Bonjour !">
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <img src="../assets/blurg.png" class="slide-image" title="Le poisson frais">
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <img src="../assets/saumonTranche.png" class="slide-image" title="Le poisson découper en filet">
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <img src="../assets/saumonFumant.png" class="slide-image" title="Les filets sortant du fumoir">
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <img src="../assets/trancheFumé.png" class="slide-image" title="Bon appétit !">
      </Slide>
      <template #addons>

        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="FumaisonExplication">
    <div class="TexteFumaison"></div>
    <h3>Notre Fumaison</h3>
    <p>
      Savourez la fumaison artisanale de <strong class="fumaisonStrong">truite</strong> et <strong
        class="fumaisonStrong">saumon</strong> au bois de hêtre de <strong class="fumaisonStrong">La Pieuvre
        Toquée</strong>.
      <br>
      Nous sélectionnons rigoureusement chaque poisson <strong class="fumaisonStrong">Label Rouge</strong> pour garantir
      une qualité supérieure.
      <br>
      Chaque poisson est fumé à la main selon des <strong class="fumaisonStrong">méthodes traditionnelles</strong> pour
      préserver sa saveur authentique.
      <br>
      Nous emballons sous vide chaque produit pour une fraîcheur optimale.
      <br>
      Découvrez notre gamme de poissons fumés artisanalement et laissez-vous surprendre par leur goût <strong
        class="fumaisonStrong">délicieux</strong> et <strong class="fumaisonStrong">naturel</strong>.

    </p>
  </div>
 

  <div class="Presentation">
    <p>
      Si vous êtes à la recherche de plats savoureux à base de produits locaux de qualité, alors vous allez adorer ma
      cuisine marine. Depuis mon plus jeune âge, j'ai une passion pour le poisson et la cuisine. Avec 10 ans d'expérience
      en tant que poissonnier, j'ai acquis d'excellent talent culinaire. C'est pour cela que je vous propose mon savoir
      faire en fumaison de truite et de saumon ainsi que du Fish and Chips lors des marchés.

    </p>
  </div>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import axios from 'axios';

const MAPBOX_API_KEY = 'pk.eyJ1IjoiY2hhdXphbGF1biIsImEiOiJjbGd6N283bGIwZ3IzM2Rwbnhnd3JieWppIn0.S7s7gPX7yi00uNcKDM0i7Q';
const lat = '-3.171555713050267';
const long = '48.56479572033568';
const coord = lat + ',' + long;
const height = 300;
const weight = 400;

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }, /*data() {
    return {
      imageUrl: ''
    };
  },
  mounted() {
    const mapboxStaticImageUrl = ` https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+000000(${coord})/${coord},13,0/${height}x${weight}?before_layer=admin-0-boundary&access_token=${MAPBOX_API_KEY}`;
    axios.get(mapboxStaticImageUrl, { responseType: 'arraybuffer' })
      .then(response => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        this.imageUrl = URL.createObjectURL(imageBlob);
      })
      .catch(error => {
        console.error(error);
      });
  }*/

};
</script>
<style>

@media (min-width: 1000px) {
html {
  font-size: 20px;
}

.carteStatique {
  width: 16rem;
  height: 21rem;
  padding-right: 1.25rem;
  margin-top: 0px;
  display: inline-block;
  vertical-align: top;
}

.carouselStyle {
  width: 50%;
  display: inline-table;
  position: relative;
  box-shadow: 0px 3px 20px #000000;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
}

.pStyle {
  color: white;
  font-family: 'Dosis';
  margin: auto;
  padding-top: 1rem;
  box-shadow: 0px 3px 20px #000000;
  padding-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
}

.slide-image {

  width: 100%;
  height: 500px;
  overflow: visible;
  object-fit: contain;
  align-self: center;
  max-width: 95%;
  max-height: 100%;
}

.FumaisonExplication {
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  margin-bottom: 1.25rem;
  display: inline-block;
  color: white;
  text-align: center;
  position: absolute;
}

.FumaisonExplication>p {
  text-align: justify;
  font-family: 'Dosis';
  font-size: 1.2rem;
}

.FumaisonExplication> h3 {
  font-family: "Adlery";
  font-size: 1.5rem;
  background-color: var(--salmon);
  margin-top: 0;
  box-shadow: 0px 3px 20px #000000;
}

.fumaisonStrong {
  color: var(--salmon);
}

.Presentation {
  margin-top: 1rem;
  padding: 0.5rem;
  font-family: 'Dosis';
  font-size: large;
  color: white;
  text-align: justify;
  width: 75%;
}
}
@media (max-width: 999px) {

}


</style>
