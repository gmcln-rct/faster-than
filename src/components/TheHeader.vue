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
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  /* height: 5rem; */
  /* background-color: #3d008d; */
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
  padding: 2vmin 0;
  font-family: ivypresto-headline, serif;
  font-weight: 700;
  font-style: italic;
  font-size: calc(48px + (56 - 48) * ((100vw - 300px) / (1600 - 300)));
}

h2 {
  font-family: adobe-caslon-pro, serif;

  font-weight: 400;

  font-style: normal;
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

/* header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
