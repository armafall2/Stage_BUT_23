<template>
 <div class="navbar">
      
      <img src="src/assets/PieuvreToquéeLogo.svg" alt="Logo" class="logo">
    
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Devis</a></li>
          <li><a href="#">Saumon &agrave; la coupe</a></li>
          <li><a href="#">Calendrier</a></li>
          <li><a href="#">En direct</a></li>
        </ul>
      </nav>
    </div>
</template>  


<style scoped>
@font-face {
  font-family: "Adlery";
  src: url("src/font/Adlery_TRIAL.ttf") format("truetype")
}
.navbar {

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}

.logo {
  height: 120px;
  margin-right: 20px;
}

nav {
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;

  margin: 0;
  padding: 0;
}

li {
  margin-left: 20px;

}

a {
  font-size: x-large;
  color: #fff;
  font-family: "Adlery";
}

a:hover {
  font-weight: bold;
  color: red;
  padding: 5px 10px;

}

#decoupeBar{
  border-style:outset 20px ;
}

</style>