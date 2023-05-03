<template>
  <div class="navbar">
    <img
      src="@/assets/PieuvreToquéeLogoFond.svg"
      alt="Logo"
      class="logo"
      @click="toggleDropdown"
      @mouseleave="closeDropdown"
    />
    <ul class="dropdown-menu" :class="{ active: isDropdownOpen }" @mouseout="closeDropdown">
      <li><a :class="{ active: currentRoute === '/' }" href="/">Accueil</a></li>
      <li><a :class="{ active: currentRoute === '/devis' }" href="/devis">Devis</a></li>
      <li><a href="#">&Agrave; la coupe</a></li>
      <li><a href="#">Calendrier</a></li>
      <li><a href="#">En direct</a></li>
    </ul>
  </div>
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
</template>
<style scoped>
@media (max-width: 999px) {
  .logo-wrapper {
    height: 5em;
    top: 0;
    left: 0;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    background-color: #dd574e;
    box-shadow: 0px 3px 20px #000000;
    font-size: 15px;
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Adlery";
    padding: 20px;
  }

  .dropdown-menu.active {
    display: block;
  }

  .nav-wrapper {
    display: none;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: #dd574e;
    box-shadow: 0px 3px 20px #000000;
    font-size: 15px;
    text-decoration: none;
    z-index: 9999;
  }
}

ul.nav-links {
  list-style: none;
  font-family: "Adlery";
}

.logo-wrapper {
  cursor: pointer;
}

.logo {
  height: 5em;
}

ul.nav-links > li > a {
  color: #fff;
  font-family: "Adlery";
  text-decoration: none;
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
    }}}
    </script>