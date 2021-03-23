<template>
  <main class="quiz">
    <!-- <h2>Animal Speed Quiz</h2> -->
    <h2 v-if="!quizStarted">
      Five questions to see if you know which animal is faster
    </h2>
    <h2 v-else>Which animal is faster?</h2>
    <button v-on:click.stop="buildAnimalArray" v-if="!quizStarted">
      Start Quiz
    </button>

    <!-- <div>{{ buildAnimalArray() }}</div> -->
    <section v-if="quizStarted">
      <h3 v-if="quizStarted">Question {{ questionCounter }}</h3>
      <base-card v-on:click.stop="checkQuestion" class="quiz-card">
        <img :src="animals[currentPair[0]].img" />
        <p>{{ animals[currentPair[0]].commonName }}</p>
      </base-card>
      <base-card v-on:click.stop="checkQuestion" class="quiz-card">
        <img :src="animals[currentPair[1]].img" />
        <p>{{ animals[currentPair[1]].commonName }}</p>
      </base-card>

      <button v-on:click.stop="checkQuestion">
        Which is dast
      </button>
    </section>
  </main>
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
      quizStarted: false,
      currentPair: []
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
      this.questionCounter = 1;
      this.currentPair = this.animalPairs.splice(0, 2);

      console.log(this.animalPairs);
      console.log('Current Pair ', this.currentPair);
    },
    checkQuestion() {
      console.log('Checking question');
    }
  }
};
</script>

<style scoped scss>
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quiz-card img {
  background-color: green;
  margin: 0 auto;
  padding: 2vmin 0;
  height: 200px;
  width: auto;
  max-width: 200px;
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
