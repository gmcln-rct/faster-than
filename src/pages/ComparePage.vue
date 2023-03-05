<template>
  <main class="compare">
    <h2>Select two animals to compare top speed.</h2>
    <div class="compare-selects">
      <transition name="slideinleft" appear>
        <span class="animal-card">
          <img class="animal-img" :src="getAnimalImg(animal1)" :alt="getAnimalName1" />
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
      </transition>
      <span class="vs">vs</span>
      <transition name="slideinright" appear>
        <span class="animal-card">
          <img
            class="animal-img flip"
            :src="getAnimalImg(animal2)"
            alt="animal 2"
          />
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
      </transition>
    </div>
    <button v-on:click.stop="compareAnimals">Which is faster?</button>
    <p class="duplicate-animal" v-show="duplicateAnimal">
      Please select different animals.
    </p>
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
    <transition name="winner">
      <the-tie :currentTie="currentTie" :speed="animal1Speed"></the-tie>
    </transition>
  </main>
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
      animals: animals,
      animal1: 'noanimal',
      animal2: 'noanimal',
      animal1Speed: '',

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
      currentTie: false
    };
  },

  watch: {
    // Reset when user selects new animal
    animal1() {
      this.currentWinner = '';
      this.currentTie = false;
    },
    animal2() {
      this.currentWinner = '';
      this.currentTie = false;
    }
  },
  computed: {
    getAnimalName1() {
      let animal = this.getAnimal(this.animal1);
      return animal.commonName;
      }
  },
  methods: {
    validateSelects() {
      this.duplicateAnimal = false;

      if (this.animal1 === 'noanimal') {
        this.animal1IsValid = false;
      } else {
        this.animal1IsValid = true;
      }
      if (this.animal2 === 'noanimal') {
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

    compareAnimals() {
      this.validateSelects();
      let selectedAnimal1 = this.animals.find(x => x.id === this.animal1);
      let selectedAnimal2 = this.animals.find(x => x.id === this.animal2);
      this.animal1Speed = selectedAnimal1.speed;

      let winner;

      // Check for tie
      if (selectedAnimal1.speed > selectedAnimal2.speed) {
        winner = selectedAnimal1;
        this.currentTie = false;
      } else if (selectedAnimal2.speed > selectedAnimal1.speed) {
        winner = selectedAnimal2;
        this.currentTie = false;
      } else if (
        selectedAnimal1.speed === selectedAnimal2.speed &&
        selectedAnimal1 !== selectedAnimal2
      ) {
        this.currentTie = true;
      }

      if (!this.currentTie) {
        this.currentWinner = winner.commonName;
        this.currentWinnerObj = winner;
        this.currentWinnerObj.image = winner.img;
      }
    },
    getAnimalImg(animalId) {
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
      return selectedAnimal;
    }
  }
};
</script>

<style scoped scss>
.compare {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 0 auto;
  padding: 2vmin 0;
  height: 200px;
  width: auto;
  max-width: 200px;
  filter: invert(43%) sepia(91%) saturate(1042%) hue-rotate(163deg)
    brightness(50%) contrast(101%);
}

h2 {
  margin: 0 auto;
  padding: 1vmin 0 2vmin 0;
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: merriweather, serif;
  font-style: normal;
  font-size: var(--large-size);
  font-weight: 600;
  font-display: swap;

  text-align: center;
  color: #fefefe;
}

h3 {
  margin: 0.5rem 0;
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  color: var(--dark-accent);
}

.vs {
  padding: 1vmin 2vmin;

  color: #fff;
  background-color: var(--subheader-blue);
  border-radius: 50%;

  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;
}

.animal-invalid {
  padding: 1vmin 0;
  text-align: center;
  font-size: var(--base-size);
  color: var(--alert);
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

/* Transitions */
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

.winner-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.winner-leave-active {
  transition: all 0.5s ease-out;
}
.winner-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.4);
}

/* Transition - SlideIn */
/* .slideinleft-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}

.slideinleft-enter-active {
  transition: all 1s ease-in-out;
}
.slideinleft-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slideinright-enter-from {
  opacity: 0;
  transform: translateX(500px);
}

.slideinright-enter-active {
  transition: all 1s ease-in-out;
}
.slideinright-enter-to {
  opacity: 1;
  transform: translateX(0);
} */

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \    
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |   
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/                                                                                                                            
 */

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
    margin: 4vmin auto 4vmin;
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

  .vs {
    margin: 2vmin 0;
  }
}
</style>
