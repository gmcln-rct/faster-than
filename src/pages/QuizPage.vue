<template>
  <main class="quiz">
    <!-- <h2>Animal Speed Quiz</h2> -->
    <h2 v-if="!quizStarted">
      Five questions to see if you know which animal is faster
    </h2>

    <button v-on:click.stop="buildAnimalArray" v-if="!quizStarted">
      Start Quiz
    </button>

    <!-- <div>{{ buildAnimalArray() }}</div> -->
    <section v-if="quizStarted" class="quiz-question">
      <h3>Current Round: {{ currentRound }}</h3>
      <h3>Your Score {{ userScore }}</h3>
      <h4>Question {{ questionCounter }}</h4>
      <h5>Click on faster animal</h5>
      <div class="quiz-options">
        <base-card v-on:click.stop="checkQuestion(0)" class="quiz-card">
          <img :src="animals[currentPair[0]].img" />
          <p>{{ animals[currentPair[0]].commonName }}</p>
        </base-card>
        <span class="or">or</span>
        <base-card v-on:click.stop="checkQuestion(1)" class="quiz-card">
          <img :src="animals[currentPair[1]].img" />
          <p>{{ animals[currentPair[1]].commonName }}</p>
        </base-card>
      </div>

      <!-- <button v-on:click.stop="checkQuestion">
        Which is dast
      </button> -->
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
      quizEnded: false,
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
      this.quizEnded = false;
      this.questionCounter = 1;
      this.currentPair = this.animalPairs.splice(0, 2);

      console.log(this.animalPairs);
      console.log('Current Pair ', this.currentPair);
    },
    checkQuestion(animalNum) {
      let currentWinner;
      console.log('Selected Animal ' + animalNum);
      // console.log('type ' + typeof animalNum);
      console.log('Animal 1 speed ' + this.currentPair[0].speed);
      console.log('Animal 2 speed ' + this.currentPair[1].speed); // console.log('Checking question');
      if (
        animals[this.currentPair[0]].speed > animals[this.currentPair[1]].speed
      ) {
        currentWinner = 0;
      } else {
        currentWinner = 1;
      }
      if ((animalNum = currentWinner)) {
        console.log('You are correct');
        this.userScore++;
      } else {
        console.log('Nein');
      }
      if (this.animalPairs > 0) {
        this.currentPair = this.animalPairs.splice(0, 2);
        console.log('Current Pair ' + this.currentPair);
      } else {
        this.quizEnded = true;
      }
      this.currentRound++;
      this.currentPair = this.animalPairs.splice(0, 2);
      console.log('Current winner ' + currentWinner);
      console.log('Userscore ' + this.userScore);
      // let animal1 = animals[this.currentPair[0]];
      // let animal2 = animals[this.currentPair[1]];
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

.quiz-question {
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

.quiz-options {
  display: flex;
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

.or {
  padding: 1vmin 2vmin;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;
  color: var(--winner);

  background-color: #fff;
  border-radius: 50%;
  border: 4px solid var(--winner);

  /* -webkit-text-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);
  text-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47); */
}
</style>
