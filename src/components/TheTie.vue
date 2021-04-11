<template>
  <section class="tieSection" v-if="currentTie === true">
    <h4>It's a Tie!</h4>

    <p>Speed: {{ speed }} mph</p>
  </section>
</template>

<script>
export default {
  props: ['currentTie', 'speed']
};
</script>

<style scoped>
.tieSection {
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 500px;
  margin: 1vmin auto;
  padding: 1vmin 2vmin;

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

.tieSection h4 {
  color: var(--amber);
  font-size: var(--extra-large-size);
  line-height: var(---extra-large-line);
}
.tieSection p {
  /* padding: 0.2vmin 0; */
  font-size: var(--extra-large-size);
  line-height: var(---extra-large-line);
}

@media only screen and (max-width: 720px) {
  .tieSection {
    margin: 0 auto;
    width: 90vw;
  }
}
</style>
