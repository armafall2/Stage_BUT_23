<template>
  <div class="navbar" @mouseleave="closeDropdown" @click="toggleDropdown">
    <img src="@/assets/PieuvreToquéeLogoFond.svg" alt="Logo" class="logo"/>
    <div class="nav-wrapper">
        <ul class="nav-links" :class="{ active: isDropdownOpen }">
          <li class="nav-element nav-element-1"><a :class="{ active: currentRoute === '/' }" href="/">Accueil</a></li>
          <li class="nav-element nav-element-2"><a :class="{ active: currentRoute === '/devis' }" href="/devis">Devis</a> </li>
          <li class="nav-element nav-element-3"><a href="#">&Agrave; la coupe</a></li>
          <li class="nav-element nav-element-4"><a href="#">Calendrier</a></li>
          <li class="nav-element nav-element-5"><a href="#">En direct </a></li>
        </ul>
    </div>
  </div>
</template>
<style scoped>

@media screen and (max-width: 999px) {

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    text-decoration: none;
    list-style: none;
    margin-top: 0;
  }

  .nav-links.active {
    display: block;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    padding: 1rem 2rem;
    box-sizing: border-box;
    background-color: #dd574e;
    box-shadow: 0px 0.375rem 2rem #000000;
    font-size: 0.9rem;
    text-decoration: none;
    z-index: 9999;
  }

  .logo {
    height: 5em;
  }

  .nav-links>li>a.active {
    color: #000;
    font-weight: bold;
  }

  .nav-links>li>a {
    color: #fff;
    font-family: "Adlery";
    text-decoration: none;
    font-size: 17px;
  }
  .nav-element{
    background-color: #dd574e;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0;
    }
 .nav-wrapper > ul {
  box-shadow: 5px 10px 10px 5px #000000A9;
  background-color: #dd574e;
  transform-origin: top center;
  animation: translateX 300ms ease-in-out forwards;
}
    @keyframes translateX {
  0% {
  opacity: 0;
  transform: translateX(-400px);
  }
  100% {
    transform: translateX(-30px);
  }}
    @keyframes reverseTranslateX {
  0% {
    transform: translateX(-30px);
  }
  100% {
    opacity: 0;
    transform: translateX(-400px);
  }}

}

@media (min-width: 1000px) {
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

  .dropdown-menu {
    visibility: hidden;
  }

}

</style>
<script>
export default {
  data() {
    return {
      currentRoute: "/",
      isDropdownOpen: false,
    };
  },
  created() {
    this.currentRoute = window.location.pathname;
  },
  methods: {
    toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
},
closeDropdown() {
  this.isDropdownOpen = false;
}
  }
}
</script>