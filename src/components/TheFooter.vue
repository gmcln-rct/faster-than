<template>
  <footer>
    <p>@{{ currentYear }} Glenn McClanan. All right reserved.</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
@import url('https://use.typekit.net/art4tjq.css');

footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 10px;
  width: 100%;
  /* margin: 15vmin 0 0 0; */
  padding: 2vmin;
}

footer p {
  padding: 1vmin 5vmin;
  font-size: var(--base-size);
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/

 */

@media only screen and (max-width: 720px) {
  footer {
    display: none;
    /* position: relative;
    bottom: 10px;
    width: 100%;
    margin: 15vmin 0 0 0;
    padding: 2vmin; */
  }
  footer p {
    padding: 1vmin;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
