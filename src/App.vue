<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  <!-- <the-selector></the-selector> -->
  <!-- <the-footer></the-footer> -->
  <!-- <the-details></the-details> -->
</template>

<script>
import TheHeader from './components/TheHeader';
// import TheSelector from './components/TheSelector';
// import TheFooter from './components/TheFooter';
// import TheDetails from './components/TheDetails';

export default {
  components: {
    TheHeader
    // TheSelector,
    // TheDetails
    // TheFooter
  },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;

  --light-shades: #f5eff1;
  --light-accent: #7de4f8;
  --main-brand: #7c5a9c;
  --dark-accent: #004d7a;
  --dark-shades: #17161c;

  --highlight-yellow: #d86a2c;
  --muted-yellow: #ffe083;

  --winner: #258f5c;
  --base-size: 16px;
  --medium-size: calc(16px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
  --large-size: calc(20px + (24 - 20) * ((100vw - 300px) / (1600 - 300)));
  --huge-size: calc(42px + (56 - 42) * ((100vw - 300px) / (1600 - 300)));

  --roboto: 'Roboto', sans-serif;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  letter-spacing: 1px;

  background-image: linear-gradient(
    to right top,
    #272e3a,
    #004d7a,
    #2d878f,
    #4bbe90,
    #c5ee6d
  );
}

/* RESET */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
