<template>
  <section class="quiz">
    <h2>Animal Speed Quiz</h2>
    <p>Which animal is faster?</p>

    <div>{{ buildAnimalArray() }}</div>
  </section>
</template>

<script>
import { animals } from '../components/data/animals.js';

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export default {
  data() {
    return {
      animals: animals,
      currentRound: 0,
      playerWin: false,
      animalPairs: []
    };
  },
  methods: {
    buildAnimalArray() {
      let animal;
      let animalsLength = this.animals.length;
      while (this.animalPairs.length < 10) {
        animal = getRandomNumber(animalsLength);
        if (!this.animalsPair.includes(animal)) {
          this.animalPairs.push(animal);
        }
      }
      // for (i = 0; i < 10; i++) {
      //   let animalsLength = this.animals.length;
      //   // let animal = Math.floor(Math.random() * Math.floor(animalsLength));
      //   let animal = getRandomNumber(animalsLength);
      //   this.animalPairs.push(animal);
      // }
      console.log(this.animalPairs);
    }
  }
};
</script>

<style scoped>
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 2vmin 0;
  font-size: var(--large-size);
  color: #fff;
}
</style>
