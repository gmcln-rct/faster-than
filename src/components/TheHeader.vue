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

  /* margin: 0 30vmin 0 0; */
}
.logo {
  display: inline;
  width: 75px;
  /* margin: 0 0.5vmin 0 0; */
  padding: 1vmin 1vmin 1vmin 0;
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
  height: 100%;
  list-style: none;
}

li {
  margin: 0 0.5vmin;

  font-size: var(--large-size);
}

li a {
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

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \    
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |   
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/    
                                                                                                                          
 */

@media screen and (max-width: 720px) {
  header {
    flex-direction: column;
  }

  .logo-block {
    padding: 0.01vmin 0;
  }
  .logo {
    width: 60px;
  }

  .site-name {
    width: 200px;
  }

  nav {
    width: 100%;
    padding: 0;

    line-height: 12px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  li a {
    padding: 0.1vmin 2vmin;
  }
}
</style>
