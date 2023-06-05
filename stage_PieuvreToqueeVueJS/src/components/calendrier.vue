<template>
    <div class="container">
      <div v-for="item in tableau.forecast" :key="item.id" class="square" @mouseover="showTooltip(item.id)" @mouseout="hideTooltip">
        <div class="square-content">
          {{ getDate(item.date)}}
          {{ getMonth(item.date) }}
        </div>
        <div v-show="activeTooltip === item.id" class="tooltip">
          <p>Date: {{ item.date }}</p>
          <p>Temperature: {{ item.temperature }}°C</p>
          <p>Description: {{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    margin: 0 10%;
    width: 80%;
  }
  
  .square {
    background-color: aquamarine;
    text-align: center;
    position: relative;
    padding: 25%;
    font-family: 'Dosis';
    background-color: #dd574e;
    box-shadow: 0px 0.375rem 2rem #000000;
  }
  
  .month {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .square-content {
    cursor: pointer;
  }
  
  .tooltip {
    position: absolute;
    top: calc(100% + 1%);
    left: 0;
    background-color: white;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
  </style>
  
  <script>
  // Définir l'objet JSON
  var jsonData = {
    "forecast": [
      {
        "id": 1,
        "day": "Mercredi",
        "date": "2023-05-24",
        "temperature": 25,
        "description": "Ensoleillé"
      },
      {
        "id": 2,
        "day": "Jeudi",
        "date": "2023-05-25",
        "temperature": 22,
        "description": "Nuageux"
      },
      {
        "id": 3,
        "day": "Vendredi",
        "date": "2023-05-26",
        "temperature": 18,
        "description": "Pluie légère"
      },
      {
        "id": 4,
        "day": "Samedi",
        "date": "2023-05-27",
        "temperature": 20,
        "description": "Éclaircies"
      },
      {
        "id": 5,
        "day": "Dimanche",
        "date": "2023-05-28",
        "temperature": 23,
        "description": "Ensoleillé avec des nuages"
      },
      {
        "id": 6,
        "day": "Dimanche",
        "date": "2023-05-28",
        "temperature": 23,
        "description": "Ensoleillé avec des nuages"
      },
      {
        "id": 7,
        "day": "Dimanche",
        "date": "2023-05-28",
        "temperature": 23,
        "description": "Ensoleillé avec des nuages"
      },

    ]
  };
  
  export default {
    data() {
      return {
        tableau: JSON.parse(JSON.stringify(jsonData)),
        activeTooltip: null
      };
    },
    methods: {
      showTooltip(id) {
        this.activeTooltip = id;
      },
      hideTooltip() {
        this.activeTooltip = null;
      },
      getMonth(date) {
        const monthNames = [
          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
          "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];
        const monthIndex = new Date(date).getMonth();
        return monthNames[monthIndex];
      },
      getDate(date) {
        return new Date(date).getDate();
      }
    }
  };
  </script>
  
