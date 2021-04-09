<template>
  <transition name="about">
    <section>
      <h2>About <em>Faster Than</em></h2>
      <p>
        Cheetah vs. lion? Rabbit vs. tortoise? <em>Faster Than</em> helps you
        answer the question: which animal is faster? Just selct the animals you
        want to compare and click "Compare."
      </p>
      <p>
        The comparisons are based on top speed of each animal, with data
        compiled from different sources:
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
          <a
            href="https://en.wikipedia.org/wiki/Fastest_animals"
            target="_blank"
            >Wikipedia - Fastest Animals</a
          >
        </li>
      </ul>
      <p>
        The site was built using Vue 3 and CSS, and created by Frontend
        developer
        <a href="https://www.glennmcclanan.com/" target="_blank"
          >Glenn McClanan</a
        >
        after his 4-year-old daughter spent weeks quizzing him about which
        animala are faster or slower than a cheetah. Daddy decided that he
        needed to build a website to keep her happy and to keep his sanity...
      </p>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    // sources: [];
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

@media only screen and (max-width: 720px) {
  section {
    /* width: 90vw; */
    /* margin: 0 5vw 2vw 5vw; */
    padding: 0 5vw 50 5vw;
  }
}
</style>
