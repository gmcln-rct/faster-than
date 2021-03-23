<template>
  <section class="compare">
    <h2>Select animals to find out which is faster.</h2>
    <div class="compare-selects">
      <span class="animal-card">
        <!-- <h3>Animal 1</h3> -->
        <img class="animal-img" :src="getAnimalImg(animal1)" />
        <base-select
          :options="animals"
          :selectText="selectText1"
          class="select-css"
          v-model="animal1"
        ></base-select>
        <p class="animal-invalid" v-if="!animal1IsValid">
          Please select an animal
        </p>
      </span>
      <span class="vs">vs</span>
      <span class="animal-card">
        <!-- <h3>Animal 2</h3> -->
        <img class="animal-img flip" :src="getAnimalImg(animal2)" />
        <base-select
          :options="animals"
          :selectText="selectText2"
          class="select-css"
          v-model="animal2"
        ></base-select>

        <p class="animal-invalid" v-if="!animal2IsValid">
          Please select an animal
        </p>
      </span>
    </div>
    <button v-on:click.stop="compareAnimals">Which is faster?</button>
    <p class="duplicate-animal" v-show="duplicateAnimal">
      Please select different animals.
    </p>
  </section>
  <transition name="winner">
    <the-winner
      :currentWinner="currentWinner"
      :commonName="currentWinnerObj.commonName"
      :scientificName="currentWinnerObj.scientificName"
      :siteLink="currentWinnerObj.siteLink"
      :speed="currentWinnerObj.speed"
      :image="currentWinnerObj.image"
    ></the-winner>
  </transition>
  <transition name="tie">
    <the-tie
      :currenttie="currentWinner"
      :commonName="currentWinnerObj.commonName"
      :scientificName="currentWinnerObj.scientificName"
      :siteLink="currentWinnerObj.siteLink"
      :speed="currentWinnerObj.speed"
      :img="currentWinnerObj.img"
    ></the-tie>
  </transition>
</template>

<script>
import TheWinner from '../components/TheWinner';
import TheTie from '../components/TheTie';
import { animals } from '../components/data/animals.js';

export default {
  components: {
    TheWinner,
    TheTie
  },
  data() {
    return {
      animal1: 'noanimal',
      animal2: 'noanimal',
      animals: animals,
      selectText1: '1',
      selectText2: '2',
      animal1IsValid: true,
      animal2IsValid: true,
      duplicateAnimal: false,
      currentWinner: '',
      currentWinnerObj: {
        commonName: '',
        scientificName: '',
        siteLink: '',
        speed: '',
        image: ''
      },
      tie: false
    };
  },

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
      this.duplicateAnimal = false;

      if (this.animal1 === 'noanimal') {
        this.animal1IsValid = false;
      } else {
        this.animal1IsValid = true;
      }
      if (this.animal1 === 'noanimal') {
        this.animal2IsValid = false;
      } else {
        this.animal2IsValid = true;
      }
      if (this.animal1 !== 'noanimal' && this.animal1 === this.animal2) {
        this.duplicateAnimal = true;
      } else {
        this.duplicateAnimal = false;
      }
    },

    compareAnimals(event) {
      this.validateSelects();
      let selectedAnimal1 = this.animals.find(x => x.id === this.animal1);
      let selectedAnimal2 = this.animals.find(x => x.id === this.animal2);

      let winner;

      if (selectedAnimal1.speed > selectedAnimal2.speed) {
        winner = selectedAnimal1;
      } else if (selectedAnimal2.speed > selectedAnimal1.speed) {
        winner = selectedAnimal2;
      } else {
        this.tie = true;
      }

      this.currentWinner = winner.commonName;

      this.currentWinnerObj = winner;

      this.currentWinnerObj.image = winner.img;
      console.log(this.currentWinnerObj.image);

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
  /* margin: 1vmin auto; */
  padding: 2vmin 0 0 0;
}

.compare-selects {
  display: flex;
  justify-content: center;
  align-items: center;
}

.animal-card {
  margin: 0 2vmin;
  padding: 2vmin 3vmin;

  max-height: 310px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

.animal-img {
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  margin: 0 auto;
  padding: 2vmin 0;
  height: 200px;
  width: auto;
  max-width: 200px;
  /* max-height: 300px; */
  filter: invert(43%) sepia(91%) saturate(1042%) hue-rotate(163deg)
    brightness(50%) contrast(101%);
}

h2 {
  margin: 0 auto;
  padding: 1vmin 0 2vmin 0;
  font-family: merriweather, serif;

  font-style: normal;
  font-size: var(--large-size);
  font-weight: 600;

  text-align: center;
  color: #fefefe;
  margin-block-start: 0;
  margin-block-end: 0;
}

h3 {
  margin: 0.5rem 0;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  color: var(--dark-accent);
}

.vs {
  padding: 1vmin 2vmin;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;
  color: #fff;

  background-color: var(--winner);
  border-radius: 50%;
  border: 4px solid #fff;

  /* -webkit-text-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);
  text-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47); */
}

.animal-invalid {
  padding: 1vmin 0;
  text-align: center;
  font-size: var(--base-size);
  color: var(--alert);
}

button {
  max-width: 40vw;
  margin: 4vmin auto 2vmin auto;
  padding: 1vmin 3vmin;

  font-size: var(--large-size);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  background-color: var(--highlight-yellow);
  color: #fff;
  border: 3px solid #fff;
  cursor: pointer;
  border-radius: 10px;

  -webkit-box-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);
  box-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);

  transition: 0.4s;
}

button:hover,
button:active {
  /* border-color: #002350;
  background-color: #002350; */
  color: var(--highlight-yellow);
  background-color: #fff;
  border: 3px solid var(--highlight-yellow);

  transition: 0.4s;
}

.duplicate-animal {
  text-align: center;
  color: #fff;
}
.small {
  padding: 5vmin;
}

.flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(163deg)
    brightness(97%) contrast(101%);
}

/* Transition */
.winner-enter-from {
  opacity: 0;
  transform: translateY(-50px) scale(0.4);
}

.winner-enter-active {
  transition: all 0.5s ease-in;
}
.winner-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media only screen and (max-width: 720px) {
  .compare {
    margin: 3vmin auto;
    padding: 0.5vmin;
  }
  .compare-selects {
    flex-direction: column;
  }

  button {
    max-width: 80vw;
    margin: 8vmin auto;
    padding: 2vmin 6vmin;
  }

  h2 {
    display: none;
    padding: 2vmin 0 3vmin 0;
  }

  h3 {
    margin: 0 auto;
  }
  .animal-img {
    width: 120px;
    height: 100px;

    margin: 0 auto;
    padding: 1vmin;
  }
}
</style>
