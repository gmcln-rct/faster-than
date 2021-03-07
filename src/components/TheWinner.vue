<template>
  <section class="winnerSection" v-if="currentWinner !== ''">
    <h4>Winner: {{ commonName }}</h4>
    <p>
      Scientific Name: <em>{{ scientificName }}</em>
    </p>
    <p>Top Speed: {{ speed }} mph</p>
    <p>Learn More: <a :href="siteLink" target="_blank">Wikipedia</a></p>
  </section>
</template>

<script>
export default {
  props: ['currentWinner', 'commonName', 'scientificName', 'siteLink', 'speed']
};
</script>

<style scoped>
.winnerSection {
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 40rem;
  margin: 0 auto;
  padding: 1vmin 0;

  font-family: var(--roboto);
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  color: #fff;
  background-color: var(--winner);

  border-radius: 10px;
  border: 3px solid #ebe18e;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.winnerSection h4 {
  color: var(--light-shade);
  font-size: calc(16px + (28 - 16) * ((100vw - 300px) / (1600 - 300)));
}
.winnerSection p {
  padding: 0.2vmin 0;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
}

.winnerSection a {
  color: var(--light-shades);
}
</style>
