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

// import TheFooter from './components/TheFooter';

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
h5,
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

/* End Reset */

* {
  box-sizing: border-box;

  --light-shades: #f5eff1;
  --light-accent: #7de4f8;
  --main-brand: #7c5a9c;
  --dark-accent: #004d7a;
  --dark-shades: #17161c;

  --header-blue: rgba(0, 77, 122, 0.8);

  --highlight-yellow: #d86a2c;
  --muted-yellow: #fde8a9;
  --deep-yellow: #f7e963;
  --amber: #fcdd60;
  --alert: #f84130;

  --winner: #258f5c;
  --dark-green: #258f5c;
  --lighter-green: #258f1e;

  --base-size: 16px;
  --medium-size: calc(16px + (22 - 16) * ((100vw - 300px) / (1600 - 300)));
  --medium-large-size: calc(
    20px + (24 - 20) * ((100vw - 300px) / (1600 - 300))
  );
  --large-size: calc(20px + (28 - 20) * ((100vw - 300px) / (1600 - 300)));
  --large-line: calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));

  --extra-large-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  --extra-large-line: calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)));

  --huge-size: calc(28px + (48 - 28) * ((100vw - 300px) / (1600 - 300)));
  --huge-line: calc(32px + (52 - 32) * ((100vw - 300px) / (1600 - 300)));

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

button {
  max-width: 40vw;
  margin: 3vmin auto;
  padding: 1vmin 3vmin;

  font-size: var(--large-size);
  line-height: var(--large-line);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  background-color: var(--highlight-yellow);
  color: #fff;
  border: 3px solid #fff;
  cursor: pointer;
  border-radius: 10px;

  -webkit-box-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);
  box-shadow: inset 0px 0px 16px -1px rgba(117, 117, 117, 0.47);

  transition: 0.4s;
}

button:hover,
button:active {
  color: var(--highlight-yellow);
  background-color: #fff;
  border: 3px solid var(--highlight-yellow);

  transition: 0.4s;
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \    
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |   
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/                                                                                                                            
 */

@media screen and (max-width: 720px) {
  button {
    max-width: 70vw;
    padding: 2vmin 3vmin;
  }
}
</style>
