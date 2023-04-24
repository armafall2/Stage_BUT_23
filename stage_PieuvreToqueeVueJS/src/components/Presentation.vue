<template>
  <div class="navbar">
       
   <a href="#">
     <img src="src/assets/PieuvreToquéeLogoFond.svg" alt="Logo" class="logo">
   </a>
       <div class="nav-wrapper">
         <nav>
           <ul class="nav-links">
             <li><a href="#">Accueil</a></li>
             <li><a href="#">Devis</a></li>
             <li><a href="#">Saumon &agrave; la coupe</a></li>
             <li><a href="#">Calendrier</a></li>
             <li><a href="#">En direct</a></li>
           </ul>
         </nav>
       </div>
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
 
 ul.nav-links > li > a {
   font-size: 250%;
   color: #fff;
   font-family: "Adlery";
 }
 
 ul.nav-links > li > a:hover {
   font-weight: bold;
   color:  #dd574e;
 }
 
 #decoupeBar {
   border-style: outset 20px;
 }


 

 </style>
 

 <--! 
 #2d2b52
 #e53124 
 #b2c9e0
 #dd574e
 !>