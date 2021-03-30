<template>
  <main>
    <h1>What is <span class="yellow">Faster Than</span>?</h1>
    <p>
      <em>Faster Than</em> is a web app that helps kids and parents explore the
      speeds of different animals throughout the Animal Kingdom.
    </p>
    <p>
      Compare top speeds or take a quiz to test your animal-speed knowledge.
    </p>

    <section class="icon-block">
      <router-link to="/compare">
        <img
          class="icon"
          src="https://faster-than.s3.amazonaws.com/icons/icon-compare.svg"
      /></router-link>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  /* margin: 0 auto; */
  color: #fff;
}

h1 {
  margin: 5vmin 0 0 0;

  text-align: center;
  font-size: var(--extra-large-size);
}
p {
  margin: 0 auto;
  padding: 0 20vw 2vh;
  font-size: var(--large-size);
  line-height: var(--large-line);
}

.yellow {
  padding: 0 1vmin 0 0;
  color: var(--amber);
  font-style: italic;
  font-weight: 700;
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
}
main {
  /* width: 80vw; */
  /* margin: 0 auto; */
  color: #fff;
}

p {
  padding: 0 5vw 2vh;
  text-align: center;
}
</style>
