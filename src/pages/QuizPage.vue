<template>
  <main class="quiz">
    <h1>Animal Speed Quiz</h1>
    <!-- Quiz Start -->
    <section v-if="!quizStarted" class="center">
      <h2>
        Five pairs of animals. Can you pick which one is faster?
      </h2>
      <button
        v-on:click.stop="buildAnimalArray"
        v-if="!quizStarted"
        class="quiz-btn"
      >
        Start Quiz
      </button>
    </section>

    <!-- Question -->
    <section v-if="quizStarted && !quizEnded" class="center">
      <div class="quiz-stats center">
        <p>
          Question <span class="yellow">#{{ questionCounter }}</span>
        </p>
        <p>
          Current Score: <span class="yellow">{{ userScore }}</span>
        </p>
      </div>
      <h3>
        Which animal is faster?
      </h3>
      <div class="quiz-options">
        <transition name="animal1">
          <base-card @click.prevent="checkQuestion(0)" :class="cardClass">
            <img :src="animals[currentPair[0]].img" />
            <p>{{ animals[currentPair[0]].commonName }}</p>
          </base-card>
        </transition>
        <span class="or">or</span>
        <base-card @click.stop="checkQuestion(1)" :class="cardClass">
          <img :src="animals[currentPair[1]].img" class="flip" />
          <p>{{ animals[currentPair[1]].commonName }}</p>
        </base-card>
      </div>
      <h5 v-show="!currentWinner"><em>Click on the faster animal</em></h5>

      <div v-show="answerCounter === questionCounter" class="correct-answer">
        <p v-show="isCorrect">Correct!</p>
        <p v-show="!isCorrect">Incorrect</p>

        <p v-show="currentWinner !== null"></p>
        <button v-on:click.stop="nextQuestion" class="next-quiz-btn">
          Next Question
        </button>

        <!-- <p v-show="!isValid" class="error-msg">Please select an animal</p> -->
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
      answerCounter: 0,
      userScore: 0,
      quizStarted: false,
      quizEnded: false,
      currentRound: 0,
      currentWinner: null,
      currentLoser: null,
      currentPair: [],
      isCorrect: false,
      isValid: true,
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

      // Once user clicks, disable card
      this.cardClass = 'quiz-card disabled';

      this.isValid = true;
      console.log('Selected Animal ' + selectedAnimal);
      // console.log('type ' + typeof selectedAnimal);

      console.log('Animal 1 speed: ' + animals[this.currentPair[0]].speed);
      console.log('Animal 2 speed: ' + animals[this.currentPair[1]].speed);
      if (this.answerCounter === this.questionCounter) {
        return;
      }
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
      console.log('Question ounter ' + this.questionCounter);
      console.log('Answer ounter ' + this.answerCounter);
      console.log('current winner ' + this.currentWinner.commonName);
      if (
        selectedAnimal === winnerIndex &&
        this.answerCounter < this.questionCounter
      ) {
        console.log('You are correct');
        this.isCorrect = true;
        this.userScore++;
        this.answerCounter++;
      } else {
        this.isCorrect = false;
        console.log('Dumbkopf!');
        this.answerCounter++;
      }
    },
    nextQuestion() {
      if (this.answerCounter < this.questionCounter) {
        this.isValid = false;
      }
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
      // console.log('Current winner ' + this.currentWinner);
      // console.log('Userscore ' + this.userScore);
    }
  }
};
</script>

<style scoped>
h1 {
  width: 100%;
  padding: 1vmin 0;
  font-size: var(--extra-large-size);
  line-height: var(--extra-large-size);
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

h2 {
  margin: 2vmin 0;
  font-size: var(--large-size);
  text-align: center;
}

h3 {
  font-size: var(--extra-large-size);
  line-height: var(--extra-large-size);
}

h5 {
  padding: 1vmin 0 0 0;
  font-size: var(--large-size);
  color: rgb(216, 216, 216);
}

p {
  margin: 2vmin 0 1vmin 0;
  font-size: var(--large-size);
  font-weight: 600;
  text-align: center;
  color: #000;
}

.quiz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quiz-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1vmin 0 2vmin 0;
  padding: 1vmin 2vmin;
  background-color: rgba(0, 0, 0, 0.26);
  /* background-color: var(--dark-green); */
  border: 2px solid #fff;
  border-radius: 10px;
}

.quiz-stats p {
  margin: 0;
  padding: 0.4vmin 0;
  font-size: var(--large-size);
  line-height: var(--large-size);
  color: #fff;
}

.yellow {
  color: var(--muted-yellow);
}

.quiz-card {
  max-height: 275px;
  margin: 0 2vmin;
  padding: 2vmin 3vmin 1vmin 3vmin;

  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #ffffff;
}

.quiz-card:hover {
  background-color: var(--dark-green);
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
  width: 250px;
  height: 200px;
  margin: 0 auto;
  padding: 2vmin 1vmin;
  /* max-width: 200px; */

  filter: invert(43%) sepia(91%) saturate(1042%) hue-rotate(120deg)
    brightness(50%) contrast(101%);
}

.quiz-card .flip {
  transform: scaleX(-1);
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(120deg)
    brightness(97%) contrast(101%);
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

.next-quiz-btn {
  background-color: var(--dark-green);
}

.next-quiz-btn:hover,
.next-quiz-btn:active {
  color: var(--dark-green);
  background-color: #fff;
  border: 2px solid var(--dark-green);
}

.or {
  margin: 0 2vmin;
  padding: 1vmin 2vmin;
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 700;

  color: #fff;
  background-color: var(--dark-green);
  border-radius: 50%;
  border: 4px solid #fff;
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
}

.disabled img,
.disabled .flip {
  cursor: not-allowed;
  background-color: gray;
  filter: none;
}

.disabled:hover img,
.disabled:hover .flip {
  filter: none;
}

/* Transition */
.animal1-enter-from {
  opacity: 0;
  transform: translateX(-100px) scale(0.4);
}

.animal1-enter-active {
  transition: all 3s ease-in;
}
.animal1-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \    
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |   
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/                                                                                                                            
 */

@media screen and (max-width: 720px) {
  .quiz-stats {
    margin: 2vmin 0 0 0;
    flex-direction: row;
  }

  .quiz-stats p {
    margin: 1vmin auto;
    padding: 1vmin 2vmin;
  }
  .quiz-options {
    flex-direction: column;
    width: 300px;
  }

  .quiz-options img {
    min-width: 200px;
    height: 90px;

    margin: 0 auto;
    padding: 1vmin;
  }

  .quiz-options p {
    padding: 1.5vmin 0 0 0;
    line-height: 16px;
  }

  button {
    max-width: 80vw;
  }

  .or {
    margin: 2vmin 0;
    border: none;
    color: green;
    background-color: #fff;
  }

  h1 {
    display: none;
  }

  h3 {
    margin: 4vmin 0;
  }
}
</style>
