<template>
  <!--<div id = "carteStatique">
    <img :src="imageUrl" alt="Mapbox Static Image">
  </div>
-->  

<div id = "carteStatique">
<svg width="400" height="400">
<rect x="0" y="0" width="400" height="400" fill="white" />
</svg>
</div>
</template>

<!---
<script>
import axios from 'axios';

const MAPBOX_API_KEY = 'pk.eyJ1IjoiY2hhdXphbGF1biIsImEiOiJjbGd6N283bGIwZ3IzM2Rwbnhnd3JieWppIn0.S7s7gPX7yi00uNcKDM0i7Q';

const lat = '-3.171555713050267';
const long = '48.56479572033568';

const coord = lat+','+long;
const height = 400;
const weight = 400;


export default {
  data() {
    return {
      imageUrl: ''
    };
  },
  mounted() {
    const mapboxStaticImageUrl = ` https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+000000(${coord})/${coord},14,0/${height}x${weight}?before_layer=admin-0-boundary&access_token=${MAPBOX_API_KEY}`;

    axios.get(mapboxStaticImageUrl, { responseType: 'arraybuffer' })
      .then(response => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        this.imageUrl = URL.createObjectURL(imageBlob);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
};
</script>
-->

<style scoped>

#carteStatique {
  width: 400px;
  height: 400px;
  overflow: hidden; /* Empêche le contenu de déborder */
  border-radius: 23px;

}

</style>