<template>
  <main class="quiz">
    <!-- <h2>Animal Speed Quiz</h2> -->
    <section v-if="!quizStarted">
      <h2>
        Five questions to see if you know which animal is faster
      </h2>

      <button v-on:click.stop="buildAnimalArray" v-if="!quizStarted">
        Start Quiz
      </button>
    </section>

    <!-- <div>{{ buildAnimalArray() }}</div> -->
    <section v-if="quizStarted && !quizEnded" class="quiz-question">
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
          <img :src="animals[currentPair[1]].img" class="flip" />
          <p>{{ animals[currentPair[1]].commonName }}</p>
        </base-card>
      </div>
      <div v-show="currentWinner" class="correct-answer">
        <p>
          {{ animals[currentPair[currentWinner]].commonName }} is faster than
          {{ animals[currentPair[currentLoser]].commonName }}
        </p>
        <button v-on:click.stop="nextQuestion">
          Next Question
        </button>
      </div>
    </section>
    <section v-if="quizEnded">
      <p>Quiz ended</p>
      <h3>Your Score {{ userScore }}</h3>
      <button v-on:click.stop="buildAnimalArray">
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
      playerWin: false,
      animalPairs: [],
      questionCounter: 0,
      userScore: 0,
      quizStarted: false,
      quizEnded: false,
      currentRound: 0,
      currentWinner: null,
      currentLoser: null,
      currentPair: [],
      isCorrect: false
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
      this.currentRound++;
      this.currentPair = this.animalPairs.splice(0, 2);

      console.log(this.animalPairs);
      console.log('Current Pair ', this.currentPair);
    },
    checkQuestion(selectedAnimal) {
      console.log('Selected Animal ' + selectedAnimal);
      // console.log('type ' + typeof selectedAnimal);
      console.log('Animal 1 speed ' + this.currentPair[0].speed);
      console.log('Animal 2 speed ' + this.currentPair[1].speed); // console.log('Checking question');
      if (
        animals[this.currentPair[0]].speed > animals[this.currentPair[1]].speed
      ) {
        this.currentWinner = 0;
        this.currentLoser = 1;
      } else {
        this.currentWinner = 1;
        this.currentLoser = 0;
      }
      if ((selectedAnimal = this.currentWinner)) {
        console.log('You are correct');
        this.isCorrect = true;
        this.userScore++;
      } else {
        this.isCorrect = false;
        console.log('Dumbkopf!');
      }
      // if (this.animalPairs > 0) {
      //   this.currentPair = this.animalPairs.splice(0, 2);
      //   console.log('Current Pair ' + this.currentPair);
      // } else if (this.animalPairs === 0) {
      //   this.quizEnded = true;
      // }
      // if (this.currentRound >= 5) {
      //   this.quizEnded = true;
      // } else {
      //   this.currentRound++;
      // }
      // this.currentPair = this.animalPairs.splice(0, 2);
      // console.log('Current winner ' + currentWinner);
      // console.log('Userscore ' + this.userScore);
    },
    nextQuestion() {
      console.log('Next round');
      if (this.animalPairs > 0) {
        this.currentPair = this.animalPairs.splice(0, 2);
        console.log('Current Pair ' + this.currentPair);
      } else if (this.animalPairs === 0) {
        this.quizEnded = true;
      }
      if (this.currentRound >= 5) {
        this.quizEnded = true;
      } else {
        this.currentRound++;
      }
      this.currentPair = this.animalPairs.splice(0, 2);
      console.log('Current winner ' + this.currentWinner);
      console.log('Userscore ' + this.userScore);
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

.quiz-card {
  margin: 0 2vmin;
  padding: 2vmin 3vmin;

  max-height: 310px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

.quiz-card:hover,
.quiz-card:active {
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
  margin: 2vmin 0;
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

.correct-answer {
  color: #fff;
}
/* 
.flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(120deg)
    brightness(80%) contrast(101%);
} */
</style>
