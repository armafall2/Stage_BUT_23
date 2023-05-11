<template>
    <div class="wrapper">
        <form class="devisForm">
            <br>
            <label class="lbl">Contact</label>
            <div class="contactPart">
                <input type="text" class="case nom" name="nom" placeholder="Entrez votre nom" required>
                <input type="text" class="case prenom" name="prenom" placeholder="Entrez votre prénom" required>
                <input type="tel" class="case telephone" name="telephone" placeholder="Entrez votre numéro de téléphone"
                    required>
                <input type="email" class="case email" name="email" placeholder="Entrez votre adresse email" required>
            </div>
            <label class="lbl">Adresse</label>
            <br>
            <div class="AddrPart">
                <input type="text" class="case addresse" name="addresse" placeholder="Entrez l'adresse de l'événement"
                    required>
                <input type="text" class="case zip" name="zip" placeholder="Entrez le code postal de l'événement" required>
                <input type="text" class="case ville" name="ville" placeholder="Entrez la ville de l'événement" required>
            </div>
            <label class="lbl">&Eacute;v&eacute;nement</label>
            <br><br>
            <div class="eventPart">
                <label class="lblTitre">Nombre de convive</label><br>
                <input type = "range"/>
                </div>
        </form>
    </div>
</template>
  
<style scoped>
.wrapper {
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    box-shadow: 0px 0.375rem 2rem #000000;
    font-family: 'Dosis';
}

.lbl {
    padding: 2%;
    color: white;
    font-size: xx-large;
}

.lblTitre {
    padding: 2%;
    color: white;
    font-size: x-large;
}

.contactPart {
    padding: 2%;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;
}

.AddrPart {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2.5%;
    box-sizing: border-box;
    width: 100%;
}

.case {
    background-color: #282A2E;
    border-color: beige;
    font-family: 'Dosis';
    border-style: solid;
    padding: 20px;
    position: relative;
    width: 24%;
    box-sizing: border-box;
}

.case:valid {
    color: white;
}
</style>
  
