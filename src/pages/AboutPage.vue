<template>
  <section>
    <h2>About <span class="yellow">Faster Than</span></h2>
    <p>
      Cheetah vs. lion? Rabbit vs. tortoise? <em>Faster Than</em> helps you
      answer the question: which animal is faster? Just selct the animals you
      want to compare and click "Compare."
    </p>
    <p>
      The comparisons are based each animal's top speed, with data compiled from
      these sources:
    </p>
    <ul>
      <li>
        <a
          href="https://tpwd.texas.gov/publications/nonpwdpubs/young_naturalist/animals/animal_speeds/"
          target="_blank"
          >Young Naturalist - Texas A&M Press</a
        >
      </li>
      <li>
        <a href="https://www.speedofanimals.com/" target="_blank"
          >Speed of Animals</a
        >
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Fastest_animals" target="_blank"
          >Wikipedia - Fastest Animals</a
        >
      </li>
    </ul>
    <p>
      The app was built using Vue.js and CSS3 and designed. It was created,
      designed and developed by New York-based Front End Developer
      <a href="https://www.glennmcclanan.com/" target="_blank"
        >Glenn McClanan</a
      >
      after his 4-year-old daughter spent weeks quizzing him about which animals
      are faster or slower than a cheetah.
      <span class="desktop-only"
        >Daddy decided that he needed to build a website to keep her happy and
        to keep him sane.</span
      >
    </p>
    <the-share-card></the-share-card>
    <p class="copyright-mobile">
      @{{ currentYear }} Glenn McClanan. All rights reserved.
    </p>
  </section>
</template>

<script>
import TheShareCard from '../components/TheShareCard.vue';
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  components: {
    TheShareCard
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  /* margin: 3vmin 0 0 0; */
  padding: 2vmin 10vmin 5vmin 10vmin;

  font-size: var(--medium-size);
  font-display: swap;

  color: #fff;
  background-color: rgba(50, 50, 50, 0.5);
}
h2 {
  padding: 1vmin 0;
  font-size: var(--large-size);
  text-align: center;
}
p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
  padding: 1vmin 0 1vmin 0;
}
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
}
.yellow {
  padding: 0 1vmin 0 0;
  font-style: italic;
  font-weight: 700;

  color: var(--amber);
}
a {
  color: var(--light-accent);
}

/* Transition */
.about-enter-from {
  opacity: 0;
  transform: translateY(-50px) scale(0.4);
}

.about-enter-active {
  transition: all 1.5s ease-in;
}
.about-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.copyright-mobile {
  padding: 3vmin 0 0 0;
  display: none;
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/

 */

@media only screen and (max-width: 960px) {
  section {
    padding: 0 5vw 50px 5vw;
  }

  .copyright-mobile {
    display: block;
  }
}
</style>
