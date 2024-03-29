<template>
  <main class="quiz">
    <!-- <h1>Animal Speed Quiz</h1> -->
    <!-- Quiz Start -->
    <section v-if="!quizStarted" class="center">
      <h2>
        Five pairs of animals. <br /><br />Do you know which is
        faster?
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
        <transition name="animalmove">
          <base-card @click.prevent="checkQuestion(0)" :class="cardClass">
            <img :src="animals[currentPair[0]].img" :alt="`Animal 1 - ` + `${ animals[currentPair[0]].commonName }`" />
            <p>{{ animals[currentPair[0]].commonName }}</p>
          </base-card>
        </transition>
        <span class="or">or</span>
        <base-card @click.stop="checkQuestion(1)" :class="cardClass">
          <img :src="animals[currentPair[1]].img" class="flip" :alt="`Animal 2 -` + `${ animals[currentPair[1]].commonName }`" />
          <p>{{ animals[currentPair[1]].commonName }}</p>
        </base-card>
      </div>
      <h5 v-show="!currentWinner"><em>Click on the faster animal</em></h5>

      <div v-show="answerCounter === questionCounter" class="correct-answer">
        <p v-show="isCorrect" class="correct">Correct!</p>
        <p v-show="!isCorrect" class="incorrect">Incorrect</p>

        <p v-show="currentWinner !== null"></p>
        <button
          v-if="questionCounter < 5"
          v-on:click.stop="nextQuestion"
          class="next-quiz-btn"
        >
          Next Question
        </button>
        <button v-else v-on:click.stop="nextQuestion" class="next-quiz-btn">
          Finish
        </button>
      </div>
    </section>
    <section v-if="quizEnded" class="center">
      <h3>Quiz Complete!</h3>
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
      currentWinner: null,
      currentLoser: null,
      currentPair: [],
      isCorrect: false,
      cardClass: 'quiz-card'
    };
  },

  methods: {
    buildAnimalArray() {
      let animalNum;
      let animalsLength = this.animals.length;

      while (this.animalPairs.length < 10) {
        animalNum = getRandomNumber(animalsLength);
        if (this.animalPairs.length < 1) {
          this.animalPairs.push(animalNum);
        } else if (!this.animalPairs.includes(animalNum)) {
          this.animalPairs.push(animalNum);
        }
      }
      // console.log('Animal pairs ' + this.animalPairs);
      this.quizStarted = true;
      this.quizEnded = false;
      this.questionCounter = 1;
      this.answerCounter = 0;
      this.userScore = 0;
      this.quizEnded = false;
      this.currentPair = this.animalPairs.splice(0, 2);
    },
    checkQuestion(selectedAnimal) {
      let winnerIndex;

      // Once user clicks, disable card
      this.cardClass = 'quiz-card disabled';

      // Check if question has already been answered
      if (this.answerCounter === this.questionCounter) {
        return;
      }
      if (
        animals[this.currentPair[0]].speed >= animals[this.currentPair[1]].speed
      ) {
        winnerIndex = 0;
        this.currentWinner = animals[this.currentPair[0]];
        this.currentLoser = animals[this.currentPair[1]];
      } else {
        winnerIndex = 1;
        this.currentWinner = animals[this.currentPair[1]];
        this.currentLoser = animals[this.currentPair[0]];
      }

      // Check if selected animal is correct and reconfirm question ahs not been answered already
      if (
        selectedAnimal === winnerIndex &&
        this.answerCounter < this.questionCounter
      ) {
        this.isCorrect = true;
        this.userScore++;
        this.answerCounter++;
      } else {
        this.isCorrect = false;
        this.answerCounter++;
      }
    },
    nextQuestion() {
      this.cardClass = 'quiz-card';
      if (this.animalPairs > 0) {
        this.currentPair = this.animalPairs.splice(0, 2);
      } else if (this.animalPairs === 0) {
        this.quizEnded = true;
      }
      if (this.questionCounter >= 5) {
        this.quizEnded = true;
      } else {
        this.questionCounter++;
      }
      this.currentPair = this.animalPairs.splice(0, 2);
    }
  }
};
</script>

<style scoped>
h1 {
  width: 100%;
  margin: 0 0 2vmin 0;
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
  margin: 8vmin 1vmin 4vmin 1vmin;
  padding: 0 2vmin;
  font-size: var(--large-size);
  line-height: var(--large-line);
  text-align: center;
}

h3 {
  margin: 2vmin 0 1vmin 0;
  font-size: var(--extra-large-size);
  line-height: var(--extra-large-size);
}

h5 {
  padding: 1vmin 0 0 0;
  font-size: var(--large-size);
  color: rgb(216, 216, 216);
}

p {
  margin: 1vmin 0 1vmin 0;
  font-size: var(--large-size);
  font-weight: 600;
  text-align: center;
  color: #fff;
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
  margin: 2vmin 0 2vmin 0;
  padding: 1vmin 2vmin;
  background-color: rgba(0, 0, 0, 0.26);
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

.quiz-card p {
  color: #000;
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
  padding: 1.5vmin 2vmin;
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

/* Disabled, after animal selected */
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
.disabled p {
  color: gray;
}

.disabled:hover img,
.disabled:hover .flip {
  filter: none;
}

p.correct {
  color: var(--amber);
  text-transform: uppercase;
}

p.incorrect {
  margin: 1vmin 0;
  text-transform: uppercase;
  text-shadow: 1px 0 0 #777, 0 1px 0 #777, -1px 0 0 #777, 0 -1px 0 #777;

  color: var(--alert);
}

.animalmove-enter {
  opacity: 0;
  transform: translateY(-50px) scale(0.4);
}

.animalmove-enter-active {
  transition: all 0.5s ease-out;
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
    color: #000;
  }

  button {
    width: 90vw;
  }

  .or {
    margin: 2vmin 0;
    padding: 1vmin 2vmin;
    border: none;
    color: green;
    background-color: #fff;
  }

  h1 {
    display: none;
  }

  h3 {
    margin: 6vmin 0 3vmin 0;
  }
}
</style>
