<template>
  <section class="compare">
    <h2>Which animal is faster?</h2>
    <div class="compare-selects">
      <span class="animal-card">
        <h3>Animal 1</h3>
        <img class="animal-img" :src="getAnimalImg(animal1)" />
        <base-select
          :options="animals"
          v-on:change="onChange"
          class="select-css"
          v-model="animal1"
        ></base-select>

        <p v-if="!animal1IsValid">Please select an animal</p>
      </span>
      <span class="vs">vs.</span>
      <span class="animal-card">
        <h3>Animal 2</h3>
        <img class="animal-img flip" :src="getAnimalImg(animal2)" />
        <base-select
          :options="animals"
          class="select-css"
          v-model="animal2"
        ></base-select>

        <p v-if="!animal2IsValid">Please select an animal</p>
      </span>
    </div>
    <button v-on:click.stop="compareAnimals">Compare</button>
  </section>
  <section v-if="currentWinner !== ''" class="winnerSection">
    <h4>Winner:</h4>
    {{ currentWinner }}
    <p>Scientific Name: {{ currentWinnerObj.scientificName }}</p>
    <p>Top Speed: {{ currentWinnerObj.speed }}</p>
    <p>Learn More: <a href="{{currentWinnerObj.siteLink}}">Wikipedia</a></p>
  </section>
</template>

<script>
import { animals } from './data/animals.js';
export default {
  data() {
    return {
      animal1: 'noanimal',
      animal2: 'noanimal',
      animals: animals,
      animal1IsValid: true,
      animal2IsValid: true,
      currentWinner: '',
      currentWinnerObj: {
        commonName: '',
        scientificName: '',
        siteLink: '',
        speed: ''
      }
    };
  },
  // computed: {
  //   computedWinner() {
  //     console.log('What?');
  //     return '';
  //   }
  // },
  watch: {
    animal1() {
      this.currentWinner = '';
    },
    animal2() {
      this.currentWinner = '';
    }
  },
  methods: {
    validateSelects() {
      console.log('This is validating');
    },

    compareAnimals(event) {
      this.validateSelects();
      let selectedAnimal1 = this.animals.find(x => x.id === this.animal1);
      let selectedAnimal2 = this.animals.find(x => x.id === this.animal2);

      let winner;

      if (selectedAnimal1.speed > selectedAnimal2.speed) {
        winner = selectedAnimal1;
      } else {
        winner = selectedAnimal2;
      }

      console.log('Winner: ' + winner.commonName);
      console.log('Animal 1 Speed ' + selectedAnimal1.speed);
      console.log('Animal 2 Speed ' + selectedAnimal2.speed);
      this.currentWinner = winner.commonName;
      this.currentWinnerObj.commonName = winner.commonName;
      this.currentWinnerObj.scientificName = winner.scientificName;
      this.currentWinnerObj.speed = winner.speed;
      this.currentWinnerObj.siteLink = winner.siteLink;
      if (event) {
        console.log(event.target.tagName);
      }
    },
    getAnimalImg(animalId) {
      // let animalId = this.animal2;
      let animalImg;
      if (animalId !== 'noanimal') {
        let animal = animals.find(x => x.id === animalId);
        animalImg = animal.img;
      } else {
        animalImg = 'https://faster-than.s3.amazonaws.com/noanimal.svg';
      }

      return animalImg;
    },
    getAnimalName(animalId) {
      let selectedAnimal;
      if (animalId !== 'noanimal') {
        let animal = animals.find(x => x.id === animalId);
        selectedAnimal = animal;
      } else {
        return 'NA';
      }
      return selectedAnimal.commonName;
    },
    getAnimalScientificName(animalId) {
      let selectedAnimal;
      if (animalId !== 'noanimal') {
        let animal = animals.find(x => x.id === animalId);
        selectedAnimal = animal;
      } else {
        return 'NA';
      }
      return selectedAnimal.scientificName;
    },
    getAnimal(animalId) {
      let selectedAnimal;
      if (animalId !== 'noanimal') {
        let animal = animals.find(x => x.id === animalId);
        selectedAnimal = animal;
      }
      console.log(selectedAnimal);
      return selectedAnimal;
    }
  }
};
</script>

<style scoped scss>
.compare {
  /* max-width: 40rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vmin auto;
  padding: 2vmin 0;
  background-color: #0076bb;
}

.compare-selects {
  display: flex;
  justify-content: center;
  align-items: center;
}

.animal-card {
  margin: 0 5vmin;
  padding: 2vmin 4vmin;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

h2 {
  margin: 0 auto;
  padding: 1vmin 0 2vmin 0;
  font-family: merriweather, serif;

  font-weight: 400;

  font-style: normal;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));

  text-align: center;
  color: #fff;
  margin-block-start: 0;
  margin-block-end: 0;
}

h3 {
  margin: 0.5rem 0;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
}

.vs {
  padding: 2vmin 0;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  color: #fff;
}

button {
  margin: 3vmin auto;
  padding: 0.75rem 2rem;
  font: inherit;
  /* border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white; */
  background-color: #fff;
  color: #0076bb;
  border: 1px solid #0076bb;
  cursor: pointer;
  border-radius: 10px;
}

button:hover,
button:active {
  /* border-color: #002350;
  background-color: #002350; */
  color: white;
  background-color: #0076bb;
  border: 2px solid #fff;
}

.animal-img {
  padding: 2vmin 0;
  width: 250px;
  height: 250px;
}

.small {
  padding: 5vmin;
}

.flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(163deg)
    brightness(97%) contrast(101%);
}

.winnerSection {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1vmin 0;
  text-align: center;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
}

.winnerSection h4 {
  font-size: calc(16px + (28 - 16) * ((100vw - 300px) / (1600 - 300)));
}
.winnerSection p {
  padding: 0.2vmin 0;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
}

@media only screen and (max-width: 720px) {
  .compare {
    margin: 1vmin auto;
    padding: 0.5vmin;
  }
  .compare-selects {
    flex-direction: column;
  }

  .animal-img {
    padding: 1vmin 0;
    width: 150px;
    height: 150px;
  }
}
</style>
