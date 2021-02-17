<template>
  <header>
    <nav>
      <h1>
        Faster Than...
      </h1>
      <h2>Which animal is faster?</h2>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 5rem; */
  /* background-color: #3d008d; */
  align-items: center;
}

header a {
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #f391e3;
  /* display: inline-block; */
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
  font-size: calc(48px + (56 - 48) * ((100vw - 300px) / (1600 - 300)));
}

h2 {
  font-size: calc(14px + (32 - 14) * ((100vw - 300px) / (1600 - 300)));
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
