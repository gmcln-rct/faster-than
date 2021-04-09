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
        <span class="icon icon-compare"></span>
        <p>Compare</p>
      </router-link>
      <router-link to="/quiz">
        <span class="icon icon-quiz"></span>
        <p>Quiz</p>
      </router-link>

      <!-- <router-link to="/compare">
        <img
          class="icon"
          src="https://faster-than.s3.amazonaws.com/icons/icon-compare.svg"
        />
      </router-link> -->
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* width: 100vw; */
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
  font-style: italic;
  font-weight: 700;

  color: var(--amber);
}

.icon-block {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20vw 2vh;
}

.icon-block a {
  padding: 0;
  text-decoration: none;
  text-align: center;
  line-height: 18px;
  color: #fff;
}

.icon-block a p {
  line-height: 18px;
  color: var(--amber);
}
/* .icon-block:hover p {
  color: red;
  transition: 0.3s;
} */
/* .icon {
  width: 150px;
  fill: #fff;
} */

.icon-compare {
  background-image: url(https://faster-than.s3.amazonaws.com/icons/icon-compare.svg);
  filter: invert(1);
}

.icon-compare:hover,
.icon-compare:focus {
  filter: invert(43%) sepia(91%) saturate(2042%) hue-rotate(163deg)
    brightness(140%) contrast(101%);
  transform: scale(1.1);
  transition: 0.3s;
}

.icon-quiz {
  background-image: url(https://faster-than.s3.amazonaws.com/icons/icon-quiz.svg);
  filter: invert(1);
  border-radius: 20px;
}

.icon-quiz:hover,
.icon-quiz:focus {
  filter: invert(62%) sepia(10%) saturate(1948%) hue-rotate(104deg)
    brightness(120%) contrast(90%);

  transform: scale(1.1);
  transition: 0.3s;
}

.icon-quiz:hover {
  border-radius: 20px;
  border: 3px solid blue;
  /* background-color: blue; */
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
