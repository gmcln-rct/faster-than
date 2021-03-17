<template>
  <section class="quiz">
    <h2>This is a quiz</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentRound: 0,
      playerWin: false,
      animalPairs: []
    };
  },
  methods: {
    getRandomAnimals() {}
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
