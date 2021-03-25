<template>
  <header>
    <div class="logo-block">
      <img
        class="logo"
        src="https://faster-than.s3.amazonaws.com/faster-than-logo-3.png"
      />
      <span class="site-name"> Faster Than</span>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/compare">Compare</router-link>
        </li>
        <li>
          <router-link to="/quiz">Quiz</router-link>
        </li>
        <li>
          <router-link to="/about">
            <img
              class="about"
              src="https://faster-than.s3.amazonaws.com/faster-about-icon.png"
          /></router-link>
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label">
      <span></span>
    </label>
  </header>
</template>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

header {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;

  text-align: center;
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

  margin: 0 30vmin 0 0;
}
.logo {
  display: inline;
  width: 75px;
  margin: 0 0.5vmin 0 0;
  padding: 1vmin 1vmin 1vmin 0;
  opacity: 0.95;
  /* filter: invert(1); */
}

.site-name {
  /* margin: 0; */
  padding: 0.5vmin 0;
  width: 200px;

  font-family: bilo, sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: var(--huge-size);

  vertical-align: middle;

  color: #fff;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
}

li {
  margin: 0 0.5vmin;

  font-size: var(--large-size);
}

a {
  display: inline-block;
  padding: 0.5rem 1.5rem;

  text-decoration: none;
  color: white;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}

a:hover {
  color: var(--muted-yellow);
  transition: 0.3s;
}

a:active,
a.router-link-active {
  font-weight: 500;
  color: var(--muted-yellow);
  /* border-color: #f1a80a;
  background-color: #1a037e; */
}

.about {
  display: inline;
  width: 50px;
  margin: 0 0.5vmin 0 0;
  padding: 2vmin 1vmin 1vmin 0;
  opacity: 0.95;
  /* filter: invert(1); */
}
nav {
  /* the following lines are not from my video, but add Edge support */
  position: relative;
  text-align: left;
  transition: none;
  transform: scale(1, 1);
  background: none;
  top: initial;
  left: initial;
  /* end Edge support stuff */

  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3 / 4;
}

nav ul {
  display: flex;
}

nav li {
  margin-left: 3em;
  margin-bottom: 0;
}

nav a {
  opacity: 1;
  position: relative;
}

nav a::before {
  content: '';
  display: block;
  height: 5px;
  background: black;
  position: absolute;
  top: -0.75em;
  left: 0;
  right: 0;
  transform: scale(0, 1);
  transition: transform ease-in-out 250ms;
}

nav a:hover::before {
  transform: scale(1, 1);
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
  .logo {
    width: 100px;
  }

  .site-name {
    width: 600px;
  }
  .nav-toggle-label {
    display: none;
  }

  /* header {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }

  .logo {
    grid-column: 2 / 3;
  } */

  .nav-toggle {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }

  .nav-toggle:focus ~ .nav-toggle-label {
    outline: 3px solid rgba(lightblue, 0.75);
  }

  .nav-toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: '';
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 7px;
  }

  .nav-toggle-label span::after {
    top: 7px;
  }

  nav {
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    background: var(--background);
    width: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  nav a:hover {
    color: #000;
  }

  .nav-toggle:checked ~ nav {
    transform: scale(1, 1);
  }

  .nav-toggle:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }
}
</style>
