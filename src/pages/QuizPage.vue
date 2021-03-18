<template>
  <section class="quiz">
    <h2>Animal Speed Quiz</h2>
    <p>Which animal is faster?</p>
    <p>{{ animals[0] }}</p>
    <div>{{ getRandomAnimals }}</div>
  </section>
</template>

<script>
import { animals } from '../components/data/animals.js';
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
    getRandomAnimals() {
      let animalsLength = this.animals.length;
      let animal1 = Math.random(50);
      console.log(animalsLength);
      console.log(animal1);
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
