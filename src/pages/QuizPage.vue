<template>
  <section class="quiz">
    <!-- <h2>Animal Speed Quiz</h2> -->
    <h2 v-if="!quizStarted">
      Five questions to see if you know which animal is faster
    </h2>
    <h2 v-else>Which animal is faster?</h2>

    <!-- <div>{{ buildAnimalArray() }}</div> -->
    <button v-on:click.stop="buildAnimalArray" v-if="!quizStarted">
      Start Quiz
    </button>
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
      animalPairs: [],
      questionCounter: 0,
      userScore: 0,
      quizStarted: false
    };
  },
  methods: {
    buildAnimalArray() {
      let animal;
      let animalsLength = this.animals.length;

      while (this.animalPairs.length < 10) {
        animal = getRandomNumber(animalsLength);
        if (!this.animalPairs.includes(animal)) {
          this.animalPairs.push(animal);
        }
      }
      this.quizStarted = true;
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

p {
  margin: 2vmin 0;
  font-size: var(--large-size);
  font-weight: 600;
  text-align: center;
  color: #fff;
}
</style>
