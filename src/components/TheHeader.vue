<template>
  <header>
    <router-link to="/" class="logo-block">
      <picture class="logo" alt="Faster Than Logo">
        <source media="(min-width: 400px)" srcset="https://faster-than.s3.amazonaws.com/logo/faster-than-logo-small.webp" alt="Faster Than Logo - webp" />
        <img src="https://faster-than.s3.amazonaws.com/logo/faster-than-logo-small.png" alt="Faster Than Logo - png" />
      </picture>
      <span class="site-name"> Faster Than</span>
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/compare">Compare</router-link>
        </li>
        <li>
          <router-link to="/quiz">Quiz</router-link>
        </li>
        <li>
          <router-link to="/about" aria-label="About Page">
            <span class="icon icon-about" aria-hidden="true" ></span>
            <span class="sr-only">About Page link </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  text-align: center;
  font-display: swap;
  /* position: fixed; */
  z-index: 999;

  background-color: var(--header-blue);

  -webkit-box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 6px 8px -3px rgba(0, 0, 0, 0.24);
}

.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  /* margin: 0 30vmin 0 0; */
}
.logo {
  display: inline;
  width: 75px;
  height: 75px;
  /* margin: 0 0.5vmin 0 0; */
  padding: 1vmin;
  opacity: 0.95;
  /* filter: invert(1); */
}

.site-name {
  /* margin: 0; */
  padding: 0.5vmin 0;
  width: 600px;

  font-family: bilo, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: var(--huge-size);
  font-display: swap;
  text-align: left;

  vertical-align: middle;

  color: #fff;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  /* height: 100%; */
  list-style: none;
}

li {
  margin: 0 0.5vmin;

  font-size: var(--large-size);
  font-weight: 500;
}

li a {
  display: inline-block;
  padding: 0 1.5rem;

  text-decoration: none;
  color: white;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}

li a:hover {
  color: var(--amber);
  /* transform: scale(1.05); */
  transition: 0.3s;
}

li a:active,
li a.router-link-active {
  font-weight: 600;
  color: var(--amber);
}

.about {
  display: inline;
  width: 50px;
  margin: 0 0.5vmin 0 0;
  padding: 2vmin 1vmin 1vmin 0;
  opacity: 0.95;
}

.about:hover {
  filter: invert(43%) saturate(2042%) hue-rotate(10deg) brightness(97%)
    contrast(101%);
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/

 */

/* Tablet */
 @media screen and (max-width: 1020px) {
  .site-name {
    width: 250px;
  }
 }

/* Mobile */
@media screen and (max-width: 720px) {
  header {
    flex-direction: column;
  }

  h3 {
    margin: 2vmin 0;
  }

  .logo-block {
    padding: 0.01vmin 0;
  }
  .logo {
    padding-top: 2vmin;
    /* width: 50px;
    height: 50px; */
  }

  .site-name {
    width: 100%;
  }

  nav {
    width: 100%;

    padding: 0.5vmin 0;

    line-height: 16px;
    background-color: var(--subheader-blue);
  }

  li {
    margin: 0 2vmin;
  }

  li a {
    padding: 0 0.5rem;
  }
  /* nav li {
    padding: 0.1vmin 5vmin;
  } */

  .icon-about {
    margin: 2px 0;
  }
}

/* @media screen and (max-width: 1020px) {
  .icon-about {
    margin: 2px 0;
  }
} */


</style>
