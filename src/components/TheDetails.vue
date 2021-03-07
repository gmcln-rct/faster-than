<template>
  <details>
    <summary>About <em>Faster Than</em></summary>
    <p>
      <em>Faster Than</em> was designed and created by front-end developer Glenn
      McClanan after his 4-year-old spent weeks quizzing him about which animals
      a cheetah is faster than. Daddy needed to build a website if he wanted to
      maintain his sanity...
    </p>
    <p>
      The speed comparisons are based on top speed of each animal, with data
      compiled from several different sources:
    </p>
    <ul>
      <li>
        <a
          href="https://tpwd.texas.gov/publications/nonpwdpubs/young_naturalist/animals/animal_speeds/"
          targe="_blank"
          >Young Naturalist - Texas A&M Press</a
        >
      </li>
      <li>
        <a href="https://www.speedofanimals.com/" targe="_blank"
          >Speed of Animals</a
        >
      </li>
      <li>
        <a href="https://en.wikipedia.org/wiki/Fastest_animals" targe="_blank"
          >Wikipedia - Fastest Animals</a
        >
      </li>
    </ul>
    <p>
      The site was built using Vue 3 and CSS.
    </p>
  </details>
</template>

<script>
export default {
  data() {
    // sources: [];
  }
};
</script>

<style scoped>
details {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  width: 60vw;
  margin: 0 20vw;

  font-size: var(--medium-size);

  color: #fff;
}

p {
  padding: 1vmin 0;
}
summary {
  font-size: var(--large-size);
  text-align: center;
}

a {
  color: var(--light-accent);
}

@media only screen and (max-width: 720px) {
  details {
    width: 90vw;
    margin: 5vw 5vw;
  }
}
</style>
