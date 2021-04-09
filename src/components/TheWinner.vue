<template>
  <section class="winnerSection" v-if="currentWinner !== ''">
    <img :src="image" class="winnerImage" alt="winning animal" />
    <div class="winnerInfo">
      <h4>
        Winner: <span class="winnerName">{{ commonName }}</span>
      </h4>
      <p>
        Scientific Name: <em>{{ scientificName }}</em>
      </p>
      <p>Top Speed: {{ speed }} mph</p>
      <p>Learn More: <a :href="siteLink" target="_blank">Wikipedia</a></p>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'currentWinner',
    'commonName',
    'scientificName',
    'siteLink',
    'speed',
    'image'
  ]
};
</script>

<style scoped>
.winnerSection {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;

  max-width: 600px;
  margin: 2vmin auto;
  padding: 2vmin 2vmin;

  font-family: var(--roboto);
  font-size: calc(16px + (32 - 16) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;

  color: #fff;
  background-color: var(--winner);

  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.9);

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.winnerInfo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 0 0 0 2vmin; */
  text-align: left;
}

.winnerInfo h4 {
  font-size: calc(16px + (28 - 16) * ((100vw - 300px) / (1600 - 300)));
}
.winnerInfo p {
  padding: 0.2vmin 0;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(20px + (18 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.winnerName {
  color: var(--muted-yellow);
}

.winnerInfo a {
  color: var(--light-shades);
}

.winnerImage {
  width: 100px;
  filter: invert(1);
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/
 */

@media only screen and (max-width: 720px) {
  .winnerSection {
    margin: 0 auto;
    width: 90vw;

    /* line-height: 16px; */
  }

  .winnerImage {
    padding: 0 2vmin;
  }
}
</style>
