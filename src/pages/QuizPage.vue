<template>
  <main class="quiz">
    <h1>Animal Speed Quiz</h1>
    <!-- Quiz Start -->
    <section v-if="!quizStarted" class="center">
      <h2>
        Five questions to see if you know which animal is faster
      </h2>
      <button v-on:click.stop="buildAnimalArray" v-if="!quizStarted">
        Start Quiz
      </button>
    </section>

    <!-- Question -->
    <section v-if="quizStarted && !quizEnded" class="center">
      <div class="quiz-stats center">
        <h3>Question #{{ questionCounter }}</h3>
        <h3>Current Score: {{ userScore }}</h3>
      </div>
      <div class="quiz-options">
        <base-card @click.stop="checkQuestion(0)" :class="cardClass">
          <img :src="animals[currentPair[0]].img" />
          <p>{{ animals[currentPair[0]].commonName }}</p>
        </base-card>
        <span class="or">or</span>
        <base-card @click.stop="checkQuestion(1)" :class="cardClass">
          <img :src="animals[currentPair[1]].img" class="flip" />
          <p>{{ animals[currentPair[1]].commonName }}</p>
        </base-card>
      </div>
      <h5 v-show="!currentWinner"><em>Click on faster animal</em></h5>

      <div v-show="currentWinner" class="correct-answer">
        <p v-show="isCorrect">Correct!</p>
        <p v-show="!isCorrect">Incorrect</p>

        <p v-show="currentWinner !== null">
          <!-- {{ currentWinner.commonName }} is faster than
          {{ currentLoser.commonName }} -->
        </p>
        <button v-on:click.stop="nextQuestion">
          Next Question
        </button>
      </div>
    </section>
    <section v-if="quizEnded" class="center">
      <p>Quiz Complete!</p>
      <h3>Your Score: {{ userScore }} out of 5</h3>
      <button v-on:click.stop="buildAnimalArray" class="new-quiz-btn">
        Start New Quiz
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
      animalPairs: [],
      questionCounter: 0,
      userScore: 0,
      quizStarted: false,
      quizEnded: false,
      currentRound: 0,
      currentWinner: null,
      currentLoser: null,
      currentPair: [],
      isCorrect: false,
      cardClass: 'quiz-card'
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
    checkQuestion(selectedAnimal) {
      let winnerIndex;

      // this.btnDisabled = true;
      this.cardClass = 'quiz-card disabled';
      console.log('Selected Animal ' + selectedAnimal);
      // console.log('type ' + typeof selectedAnimal);

      console.log('Animal 1 speed: ' + animals[this.currentPair[0]].speed);
      console.log('Animal 2 speed: ' + animals[this.currentPair[1]].speed);

      if (
        animals[this.currentPair[0]].speed > animals[this.currentPair[1]].speed
      ) {
        winnerIndex = 0;
        this.currentWinner = animals[this.currentPair[0]];
        this.currentLoser = animals[this.currentPair[1]];
      } else {
        winnerIndex = 1;
        this.currentWinner = animals[this.currentPair[1]];
        this.currentLoser = animals[this.currentPair[0]];
      }
      console.log('current winner ' + this.currentWinner.commonName);
      if (selectedAnimal === winnerIndex) {
        console.log('You are correct');
        this.isCorrect = true;
        this.userScore++;
      } else {
        this.isCorrect = false;
        console.log('Dumbkopf!');
      }
    },
    nextQuestion() {
      console.log('Next round');
      this.cardClass = 'quiz-card';
      if (this.animalPairs > 0) {
        this.currentPair = this.animalPairs.splice(0, 2);
        console.log('Current Pair ' + this.currentPair);
      } else if (this.animalPairs === 0) {
        this.quizEnded = true;
      }
      if (this.questionCounter >= 5) {
        this.quizEnded = true;
      } else {
        this.questionCounter++;
      }
      this.currentPair = this.animalPairs.splice(0, 2);
      console.log('Current winner ' + this.currentWinner);
      console.log('Userscore ' + this.userScore);
    }
  }
};
</script>

<style scoped scss>
h1 {
  width: 100%;
  padding: 1vmin 0;
  font-size: var(--extra-large-size);
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.26);
}

h2,
h3,
h4,
h5 {
  color: #fff;
}

h3 {
  font-size: var(--large-size);
}
.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quiz-stats {
  margin: 1vmin 0 2vmin 0;
  padding: 1vmin 2vmin;
  background-color: rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}

.quiz-card {
  margin: 0 2vmin;
  padding: 2vmin 3vmin 1vmin 3vmin;

  max-height: 310px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

.quiz-card:hover {
  background-color: var(--winner);
  transition: 0.3s;
}

.quiz-card:hover img {
  filter: invert(1);
  transition: 0.3s;
}

.quiz-card:hover p {
  color: #fff;
  transition: 0.3s;
}

.quiz-card img {
  /* background-color: green; */
  margin: 0 auto;
  padding: 2vmin 1vmin;
  height: 200px;
  width: 250px;
  /* max-width: 200px; */

  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(120deg)
    brightness(60%) contrast(101%);
}

.quiz-card .flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(120deg)
    brightness(80%) contrast(101%);
}

.quiz-options {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
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
h5 {
  font-size: var(--large-size);

  color: #fff;
}

p {
  margin: 2vmin 0 1vmin 0;
  font-size: var(--large-size);
  font-weight: 600;
  text-align: center;
  color: #000;
}

.or {
  margin: 0 2vmin;
  padding: 1vmin 2vmin;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;
  color: var(--winner);

  background-color: #fff;
  border-radius: 50%;
  border: 4px solid var(--winner);
}

button {
  margin: 1vmin auto 2vmin auto;
}

.new-quiz-btn {
  margin: 3vmin 0;
}
.correct-answer p {
  color: #fff;
}

.disabled {
  cursor: not-allowed;
  color: gray;
  /* background-color: gray; */
}
/* 
.flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(120deg)
    brightness(80%) contrast(101%);
} */
</style>
