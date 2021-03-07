<template>
  <details>
    <summary>About This Site</summary>
    <p>
      <em>Faster Than</em> was created by developer Glenn McClanan after his
      4-year-old spent weeks quizzing him about which animals a cheetah is
      faster than.
    </p>
    <p>
      The speed comparisons are based on top speed of each animal, with data
      compiled from several different sources:
    </p>
    <ul>
      <li>Data 1</li>
      <li>Data 2</li>
      <li>Data 3</li>
    </ul>
  </details>
</template>

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
summary {
  text-align: center;
}
</style>
