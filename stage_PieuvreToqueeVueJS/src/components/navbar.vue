<template>
  <div class="navbar">

    <a href="/">
      <img src="@/assets/PieuvreToquéeLogoFond.svg" alt="Logo" class="logo">
    </a>
    <div class="nav-wrapper">
      <nav>
        <ul class="nav-links">
          <li><a :class="{ active: currentRoute === '/' }" href="/">Accueil</a></li>
          <li><a :class="{ active: currentRoute === '/devis' }" href="/devis">Devis</a></li>
          <li><a href="#">&Agrave; la coupe</a></li>
          <li><a href="#">Calendrier</a></li>
          <li><a href="#">En direct</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>  
 
 
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #dd574e;
  box-shadow: 0px 3px 20px #000000;
  font-size: 15px;
  text-decoration: none;
  z-index: 9999;

}

.logo {
  height: 10em;
  padding: 0.1px;

}

.nav-wrapper {
  display: flex;
  align-items: center;
}

ul.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-left: 25px;
}

ul.nav-links>li>a {
  font-size: 250%;
  color: #fff;
  font-family: "Adlery";
  text-decoration: none;
}

ul.nav-links>li>a:hover {
  transition: 0.5s;
  font-weight: bold;
  color: #000;
  padding-right: 8px;
  padding-left: 8px;
}

ul.nav-links>li>a {
  font-size: 250%;
  color: #fff;
  font-family: "Adlery";
  transition: padding-right 0.5s, padding-left 0.5s;
}

ul.nav-links>li>a:hover {
  font-weight: bold;
  color: #000;
  padding-right: 18px;
  padding-left: 18px;
  transition: padding-right 0.5s, padding-left 0.5s;
}


ul.nav-links>li>a.active {
  color: #000;
  font-weight: bold;
  padding-right: 8px;
  padding-left: 8px;
}
</style>
 
<script>
export default {
  data() {
    return {
      currentRoute: '/',
    };
  },
  created() {
    this.currentRoute = window.location.pathname;
  },
};
</script>
