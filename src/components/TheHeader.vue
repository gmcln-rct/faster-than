<template>
  <header>
    <nav>
      <h1>
        Faster Than
      </h1>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  /* height: 5rem; */
  background-color: var(--dark-accent);
}

h1 {
  margin: 0;
  /* padding: 2vmin 0 1vmin 0; */
  font-family: bilo, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: calc(48px + (56 - 48) * ((100vw - 300px) / (1600 - 300)));

  text-align: center;

  color: #fff;
}
</style>
