<template>
    <div class="wrapper">
        <form class="devisForm">
            <br>
            <label class="lbl">Contact</label>
            <div class="contactPart">

                <input type="text" class="case nom" name="nom" v-model="nom" placeholder="Entrez votre nom" required>
                <input type="text" class="case prenom" name="prenom" v-model="prenom" placeholder="Entrez votre prénom"
                    required>
                <input type="tel" class="case telephone" name="telephone" v-model="telephone"
                    placeholder="Entrez votre numéro de téléphone" required>
                <input type="email" class="case email" name="email" v-model="email" placeholder="Entrez votre adresse email"
                    required :class="{ invalid: !isValidEmail }">

            </div>
            <label class="lbl">Adresse</label>
            <br>
            <div class="AddrPart">
                <input type="text" class="case addresse" name="addresse" v-model="adresse"
                    placeholder="Entrez l'adresse de l'événement" required>
                <input type="text" class="case zip" name="zip" v-model="zip"
                    placeholder="Entrez le code postal de l'événement" required>
                <input type="text" class="case ville" name="ville" v-model="ville"
                    placeholder="Entrez la ville de l'événement" required>
            </div>
            <label class="lbl">&Eacute;v&eacute;nement</label>
            <br><br>
            <label class="lblTitre">Nombre de convive (de 2 à 100 et plus)</label><br>
            <div class="eventPart">
                <div class="slider-container">
                    <br>
                    <input type="range" v-model="rangeValue" min="2" max="100" class="slider" required>
                    <br><br>
                    <input type="text" v-model="rangeValue" class="sliderTxtBox" required>
                </div>
                <select class="creneauxStyle" name="creneaux" v-model="creneaux" required>
                    <option value="" disabled selected>Quel créneau ?</option>
                    <option value="Midi ( 11h - 14h )">Midi ( 11h - 14h )</option>
                    <option value="Soir ( 18h - 20h )">Soir ( 18h - 20h )</option>
                </select>
                <div class="date">
                    <input placeholder="Date de l'événement" class="textbox-n" type="text" onfocus="(this.type='date')"
                        required v-model="date" />
                </div>
                <select class="creneauxStyle" v-model="selectedOption" value="type" required>
                    <option value="" disabled selected>Type d'événement ?</option>
                    <option value="Brocante">Brocante</option>
                    <option value="Privée">Privée</option>
                    <option value="Mariages">Mariages</option>
                    <option value="Réceptions privées">Réceptions privées</option>
                    <option value="Fêtes d'anniversaire">Fêtes d'anniversaire</option>
                    <option value="Fêtes de fiançailles">Fêtes de fiançailles</option>
                    <option value="Soirées à thème">Soirées à thème</option>
                    <option value="Événements corporatifs">Événements corporatifs</option>
                    <option value="Cocktails dînatoires">Cocktails dînatoires</option>
                    <option value="Buffets">Buffets</option>
                    <option value="Banquets">Banquets</option>
                    <option value="Festivals">Festivals</option>
                    <option value="Autre">Autre</option>
                </select>
                <div id="otherOption" v-if="selectedOption === 'Autre'">
                    <label for="otherInput" class="lblAutre">Précisez :</label>
                    <input type="text" id="otherInput" name="otherInput" class="case Autre" v-model="autre">
                </div>
                <br>
            </div>
            <div class="finPart">
                <div>
                    <textarea placeholder="Décrivez votre événement !" class="description" v-model="description"
                        @input="updateCharacterCount"></textarea>
                    <div class="character-count" :class="{ 'has-margin': description.length > 0 }">
                        {{ remainingCharacters }} caractères restants
                    </div>
                </div>
                <br>

                <button @click="afficherPDF" type="submit" class="buttonStyle">Envoyer !</button>
            </div>
        </form>
    </div>
</template>

<script>
import jsPDF from 'jspdf';
import axios from 'axios';

const mdp = "s2j.GUk,hD9u";
const nomBD = "c2118991c_devis";
const utilisateurDB = "c2118991c_admin";
const ipBD = "91.234.195.113"


export default {
    data() {
        return {
            rangeValue: 20,
            selectedOption: '',
            description: '',
            maxLength: 4000,
            email: '',
            nom: '',
            prenom: '',
            telephone: '',
            adresse: '',
            zip: '',
            ville: '',
            creneaux: '',
            date: '',
            autre: '',
            logo: '',
        };
    },
    computed: {
        remainingCharacters() {
            return this.maxLength - this.description.length;
        },
        isValidEmail() {
            return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.email);
        },
    },
    methods: {
        updateCharacterCount() {
            if (this.description.length > this.maxLength) {
                this.description = this.description.slice(0, this.maxLength);
            }
        },
        afficherPDF() {
            event.preventDefault();

            const doc = new jsPDF();
            const today = new Date();


            const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('fr-FR', options);
            const formattedDateEvent = new Date(this.date).toLocaleDateString('fr-FR');
            const nbConvive = this.rangeValue.toString();


            const descriptionLenght = this.description.length;
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const encartHeight = 20;
            try {

                doc.addFont('src/font/Adlery_TRIAL.ttf', 'Adlery', 'normal');
                doc.addFont('src/font/Dosis.ttf', 'Dosis', 'normal');

                doc.setFont('Dosis');
                doc.setFillColor('#dd574e');
                doc.rect(0, 0, pageWidth, encartHeight, 'F');

                doc.setFillColor('#000000');
                doc.rect(0, 75, pageWidth, 0.5, 'F');
                doc.rect(0, 130, pageWidth, 0.5, 'F');

                doc.setFont('Adlery');
                doc.setTextColor('white')
                doc.setFontSize(34);
                doc.text('La Pieuvre Toquée', 10, 12.5);

                doc.setFont('Dosis');
                doc.setTextColor('black')

                doc.setFontSize(20);
                doc.text("Informations Personnelles", 5, 30);
                doc.text(formattedDate, 170, 31);
                doc.text("Événement", 5, 85);
                doc.text("Description", 5, 140);

                doc.setFontSize(16);
                doc.text("Nom :", 14, 40);
                doc.text(this.nom, 51, 40);
                doc.text("Prénom :", 14, 50);
                doc.text(this.prenom, 51, 50);
                doc.text("Mail :", 14, 60);
                doc.text(this.email, 51, 60);
                doc.text("Téléphone :", 14, 70);
                doc.text(this.telephone, 51, 70);

                doc.text("Adresse événement :", 14, 95);
                doc.text(this.adresse + " " + this.zip + " " + this.ville, 80, 95);

                doc.text("Nombre convives :", 14, 105);
                doc.text(nbConvive, 70, 105);
                doc.text("Créneau :", 14, 115);
                doc.text(this.creneaux, 40, 115);

                doc.text("Date événement :", 90, 105);
                doc.text(formattedDateEvent, 140, 105);
                doc.text("Type événement :", 90, 115);

                if (this.selectedOption === "Autre") {
                    doc.text(this.autre, 140, 115);
                } else {
                    doc.text(this.selectedOption, 140, 115);
                }


                const formattedDescription = this.description.replace(/(\r\n|\n|\r)/gm, '  ');
                const descriptionLength = formattedDescription.length;

                if (descriptionLength <= 999) {



                    const descriptionLines = doc.splitTextToSize(formattedDescription, 150);

                    doc.setFontSize(18);
                    doc.text(descriptionLines, 14, 150);

                } else if (descriptionLength >= 1000 && descriptionLength <= 1999) {


                    const descriptionLines = doc.splitTextToSize(formattedDescription, 200);
                    doc.setFontSize(15);
                    doc.text(descriptionLines, 14, 150);


                } else if (descriptionLength >= 2000) {


                    const descriptionLines = doc.splitTextToSize(formattedDescription, 310);
                    doc.setFontSize(9.5);
                    doc.text(descriptionLines, 14, 150);
                }
                doc.output('dataurlnewwindow');

            } catch (error) {
                console.error("Erreur lors de la génération du PDF:", error);
            }

        }
    }
}
</script>


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

.lblDate {
    color: white;
    font-size: x-large;
    background-color: #fe0000;
}

.lblAutre {
    padding: 5%;
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

.eventPart {
    display: flex;


}

.date {
    display: flex;
    height: 3rem;
    margin-top: 2%;
    font-family: 'Dosis';
}

.creneauxStyle {
    margin: 2%;
    height: 3rem;
    font-family: 'Dosis';
    font-size: large;
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
    box-shadow: 0px 0.375rem 2rem #000000;
}

.case:valid {
    color: white;
}

.slider-container {
    width: 30%;
    flex-direction: column;
    margin-left: 2.5%;
    margin-top: 2%;
    text-align: center;
    box-shadow: 0px 0.375rem 2rem #000000;
    background-color: #282A2E;
    border-style: solid;
    border-color: beige;
    border-width: 0.1rem;
}

.sliderTxtBox {
    position: relative;
    width: 10%;
    text-align: center;
    box-shadow: 0px 0.375rem 2rem #000000;
    font-family: 'Dosis';
    background-color: #282A2E;
    color: #ffffff;
    border-style: solid;
    margin-bottom: 5%;

}

input[type="range"] {
    -webkit-appearance: none;
    width: 95%;
    height: 10px;
    background-color: #fe0000;
    border-radius: 5px;
    outline: none;

}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #ffffff;
    cursor: pointer;
    z-index: 2;

}

.Autre {
    width: 7rem;
    margin-top: 1rem;
}

.finPart {
    padding: 2%;
    text-align: center;

}

.description {
    width: 50rem;
    height: 5rem;
    box-shadow: 0px 0.375rem 2rem #000000;
    font-family: 'Dosis';
    background-color: #282A2E;
    color: #ffffff;
    border-style: solid;
    border-radius: 0%;
    border-style: solid;
    border-color: beige;
    border-width: 0.1rem;
}

.buttonStyle {
    margin: 2%;
    width: 15rem;
    height: 5rem;
    text-align: center;
    font-size: 2rem;
    font-family: 'Dosis';
    color: #ffffff;
    stroke: #000000;
    background-color: red;
    box-shadow: 0px 0.375rem 2rem #000000;
    border-style: solid;
    border-color: beige;
    border-width: 0.1rem;
}

.character-count {
    margin-top: 0.5rem;
    color: #ffffff;
}

.invalid {
    color: red;
}
</style>
  
