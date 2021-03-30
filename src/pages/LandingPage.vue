<template>
  <main>
    <h1>What is <span class="yellow">Faster Than</span>?</h1>
    <p>
      <span class="yellow">Faster Than</span> is an web-based app that helps
      kids and parents explore the speeds of diffferent animals throughout the
      Animal Kingdom. <br />Compare top speed or take a quiz to test your
      animal-speed knowledge.<br />
    </p>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70vw;
  margin: 0 auto;
  color: #fff;
}

h1 {
  margin: 5vmin 0 0 0;
  font-size: var(--extra-large-size);
}
p {
  margin: 1vmin 0 2vmin 0;
  font-size: var(--large-size);
  line-height: var(--large-line);
}

.yellow {
  color: var(--amber);
  font-style: italic;
  font-weight: 700;
}
</style>
