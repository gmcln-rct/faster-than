<template>
  <main>
    <h1>What is <span class="yellow">Faster Than</span>?</h1>
    <p>
      A web app created to help kids and parents explore
      the top speeds of animals throughout the Animal Kingdom.
    </p>
    <p>
      Compare top speeds or take a quiz to test your animal-speed
      knowledge:
    </p>

    <section class="icon-block">
      <transition name="slideinleft" appear>
        <router-link to="/compare">
          <span class="icon icon-compare"></span>
          <p>Compare</p>
        </router-link>
      </transition>
      <transition name="slideinright" appear>
        <router-link to="/quiz">
          <span class="icon icon-quiz"></span>
          <p>Quiz</p>
        </router-link>
      </transition>
    </section>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

  .icon-compare {
    background-image: url(https://faster-than.s3.amazonaws.com/icons/icon-compare.svg);
    border-radius: 20px;
    filter: invert(1);
  }

  .icon-compare:hover,
  .icon-compare:focus {
    filter: invert(43%) sepia(80%) saturate(1000%) hue-rotate(-90deg)
      brightness(200%) contrast(90%);
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
    filter: invert(62%) sepia(10%) saturate(1948%) hue-rotate(95deg)
      brightness(120%) contrast(90%);
    transform: scale(1.1);
    transition: 0.3s;
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
  color: #fff;
}

p {
  padding: 0 5vw 2vh;
  text-align: center;
}
</style>
