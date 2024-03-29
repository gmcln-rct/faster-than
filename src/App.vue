<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <transition name="route-transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition name="route-transition">
    <router-view></router-view>
  </transition> -->
  <!-- <the-selector></the-selector> -->
  <!-- <the-details></the-details> -->
  <!-- <the-share-card></the-share-card> -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader';
// import TheShareCard from './components/TheShareCard';
import TheFooter from './components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter
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
/* @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
} */

/* End Reset */

* {
  box-sizing: border-box;

  --light-shades: #f5eff1;
  --light-accent: #7de4f8;
  --main-brand: #7c5a9c;
  --dark-accent: #004d7a;
  --dark-shades: #17161c;

  --header-blue: rgba(43, 107, 145, 0.75);
  --subheader-blue: rgba(0, 77, 122, 1);

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
  --large-line: calc(26px + (36 - 26) * ((100vw - 300px) / (1600 - 300)));

  --extra-large-size: calc(24px + (32 - 24) * ((100vw - 300px) / (1600 - 300)));
  --extra-large-line: calc(24px + (40 - 24) * ((100vw - 300px) / (1600 - 300)));

  --huge-size: calc(28px + (48 - 28) * ((100vw - 300px) / (1600 - 300)));
  --huge-line: calc(32px + (52 - 32) * ((100vw - 300px) / (1600 - 300)));

  --roboto: 'Roboto', sans-serif;
}

/* Start Styling */

html {
  font-family: 'Roboto', sans-serif;
  font-display: swap;
}

body {
  margin: 0;
  letter-spacing: 1px;
  font-display: swap;
  background-image: linear-gradient(
    to right top,
    #272e3a,
    #004d7a,
    #2d878f,
    #4bbe90 /* #c5ee6d */
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
  font-display: swap;

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

.icon {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 2vmin 5vmin;
  background-size: cover;
}

.icon-about {
  margin: 10px 0 0 0;
  width: 40px;
  height: 40px;
  background-image: url(https://faster-than.s3.amazonaws.com/icons/icon-about.svg);
  filter: invert(1);
}

.icon-about:hover,
.icon-about:focus {
  filter: invert(80%) sepia(50%) saturate(508%) hue-rotate(350deg)
    brightness(105%) contrast(98%);
  transform: scale(1.1);
  transition: 0.3s;
}

/* Transitions */
.route-transition-enter-from {
  opacity: 0;
  /* transform: translateY(-50px) scale(0.4); */
}

.route-transition-enter-active {
  transition: all 0.5s ease-in;
}
.route-transition-enter-to {
  opacity: 1;
  /* transform: translateY(0) scale(1); */
}

/* Transition - SlideIn */
.slideinleft-enter-from {
  opacity: 0;
  transform: translateX(-500px);
}

.slideinleft-enter-active {
  transition: all 1s ease-in-out;
}
.slideinleft-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slideinright-enter-from {
  opacity: 0;
  transform: translateX(500px);
}

.slideinright-enter-active {
  transition: all 1s ease-in-out;
}
.slideinright-enter-to {
  opacity: 1;
  transform: translateX(0);
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

  .icon-about {
    margin: 2px 0 0 0;
    width: 30px;
    height: 30px;
  }

  .desktop-only {
    display: none;
  }
}
</style>
