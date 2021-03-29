<template>
  <section
    class="tieSection"
    v-if="currentWinner !== '' && currentTie === true"
  >
    <h4>Tie: {{ name1 }} vs. {{ name2 }}</h4>

    <p>Speed: {{ speed }} mph</p>
  </section>
</template>

<script>
export default {
  props: ['name1', 'name2', 'speed', 'currentTie']
};
</script>

<style scoped>
.tieSection {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 500px;
  margin: 1vmin auto;
  padding: 2vmin 2vmin;

  font-family: var(--roboto);
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  color: #fff;
  background-color: #555;

  border-radius: 10px;
  border: 5px solid #fff;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.winnerSection h4 {
  color: var(--highlight-yellow);
  font-size: calc(16px + (28 - 16) * ((100vw - 300px) / (1600 - 300)));
}
.winnerSection p {
  padding: 0.2vmin 0;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
}

.winnerSection a {
  color: var(--light-shades);
}

@media only screen and (max-width: 720px) {
  .winnerSection {
    width: 80vw;
  }
}
</style>
